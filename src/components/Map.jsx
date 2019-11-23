import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Map from 'pigeon-maps';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import dogLost from '../assets/images/dogs/1.jpg';
import catDetected from '../assets/images/cats/catDetected.jpeg';
import catFound from '../assets/images/cats/1.jpg';
import houseBanner from "../assets/images/centros/wide1.jpg";
import vetBanner from '../assets/images/vets/wide2.jpg';
import userPic from '../assets/images/profiles/user3.png';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        width: 250,
        textAlign: "center"
    },
    media: {
        height: 140,
        backgroundSize: "contain",
        backgroundColor: "black"
    },
    paperCard: {
        textAlign: "center"
    },
    buttons: {
        display: "block"
    }
}));

export default function SimpleSelect(props) {
    const locations = {
        "Barcelona": { "center": [41.403611, 2.174444], "zoom": props.zoom }
    }
    SimpleSelect.state = Object.assign({}, locations['Barcelona'], {
        location: 'Barcelona',
        animating: false,
        animationStart: null
    })

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    let defaultProps = {
        center: {
            lat: 41.403611,
            lng: 2.174444
        },
        zoom: props.zoom
    };

    // Popover info
    let thumbnail;
    let name;
    let text;

    if (props.type === "Perdidos") {
        thumbnail = dogLost;
        name = "Luna";
        text = "Perdida el día 18/12/19 en el Parque de la Sagrada Família.";
    }
    else if (props.type === "Detectados") {
        thumbnail = catDetected;
        name = "Estrella";
        text = "Avistada el día 18/12/19 en el Centro de Barcelona";
    }
    else if (props.type === "Encontrados") {
        thumbnail = catFound;
        name = "Ceres";
        text = "Encontrada el día 18/12/19 por User23.";
    }
    else if (props.type === "Alojamientos" || props.type === "Paseos") {
        thumbnail = userPic;
        name = "User24";
        text = "Disponible";
    }
    else if (props.type === "Centros") {
        thumbnail = houseBanner;
        name = "Protectora Gat i Gos";
        text = "Contactar";
    }
    else if (props.type === "Veterinarios") {
        thumbnail = vetBanner;
        name = "Medico Veterinario 24/7";
        text = "Contactar";
    }

    // Thumbnail filters
    let filter;

    if (props.filter === "redFilter") {
        filter = "grayscale(100%) brightness(35%) sepia(100%) hue-rotate(-50deg) saturate(1000%) contrast(0.8)";
    }
    if (props.filter === "yellowFilter") {
        filter = "grayscale(100%) brightness(90%) sepia(90%) hue-rotate(360deg) saturate(500%) contrast(1)";
    }
    if (props.filter === "greenFilter") {
        filter = "grayscale(100%) brightness(35%) sepia(100%) hue-rotate(50deg) saturate(2000%) contrast(0.8)";
    }

    const Marker = ({ left, top, style, children }) => (
        <div style={{
            position: 'absolute',
            left: left - 15,
            top: top - 30,
            width: 30,
            height: 30,
            background: 'transparent',
            ...(style || {})
        }}>{children}</div>
    )

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleShow = (oEvent) => {
        var event = oEvent.event;

        if (event.target && event.target.src && event.target.src.length > 0) {
            setAnchorEl(event.currentTarget);
        }
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <div >

                {/* Popover */}
                {props.showPopover === true ?
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: window.innerHeight/3, left: window.innerWidth/4 }}
                    >
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={thumbnail}
                                    title=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {name}
                                    </Typography>
                                    <div className={classes.paperCard}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {text}
                                        </Typography>
                                        {/* <img alt="" src={markerColor} className={classes.marker} />  */}
                                    </div>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.buttons}>
                                <Button size="small" color="primary">Contactar</Button>
                                <Button size="small" color="primary">Detalles</Button>
                            </CardActions>
                        </Card>
                    </Popover>
                    : null}

                <Map
                    center={[defaultProps.center.lat, defaultProps.center.lng]}
                    zoom={props.zoom}
                    defaultWidth={window.innerWidth - 20 }
                    onClick={handleShow}
                    height={props.height}>

                    {Object.keys(props.markers).map(key => (
                        <Marker key={Math.random()} anchor={props.markers[key][0]}>
                            <img alt="" style={{
                                filter: filter,
                                borderRadius: props.borderRadius,
                                animation: props.animation
                            }} src={props.icon} width={35} />
                        </Marker>
                    ))}
                </Map>
            </div>
        </div>
    );
}