import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';
import redMarker from "../assets/images/icons/redMarker.png";
import greenMarker from "../assets/images/icons/greenMarker.png";
import blueMarker from "../assets/images/icons/blueMarker.png";
import orangeMarker from "../assets/images/icons/orangeMarker.png";
import violetMarker from "../assets/images/icons/violetMarker.png";
import whiteMarker from "../assets/images/icons/whiteMarker.png";
import aquaMarker from "../assets/images/icons/aquaMarker.png";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import user from '../assets/images/profiles/user.png';
import dogLost from '../assets/images/dogs/1.jpg';
import catDetected from '../assets/images/cats/catDetected.jpeg';
import catFound from '../assets/images/cats/1.jpg';
import Popover from '@material-ui/core/Popover';
import GoogleSearchBar from "./GoogleSearchBar";
import "./Map.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 5
  },
  map: {
    width: "100%",
    margin: "0 !important"
  },
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

const defaultProps = {
  center: {
    lat: 41.403611,
    lng: 2.174444
  },
  zoom: 13
};

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const markers = [...new Array(50)];

  let markerColor;
  let thumbnail;
  let name;
  let text;
  let style;
  let zoom = props.zoom ? props.zoom : defaultProps.zoom;

  if (props.markerColor === "red") {
    style = {
      borderRadius: "50%", 
      animation: "pulseRed 2s infinite"
    };
    markerColor = redMarker;
    thumbnail = dogLost;
    name = "Luna";
    text = "Perdida el día 18/12/19 en el Parque de la Sagrada Família.";
  }
  else if (props.markerColor === "orange") {
    style = {
      borderRadius: "50%", 
      animation: "pulseYellow 2s infinite"
    };
    markerColor = orangeMarker;
    thumbnail = catDetected;
    name = "Estrella";
    text = "Avistada el día 18/12/19 en el Centro de Barcelona";
  }
  else if (props.markerColor === "green") {
    markerColor = greenMarker;
    thumbnail = catFound;
    name = "Ceres";
    text = "Encontrada el día 18/12/19 por User23.";
  }
  else if (props.markerColor === "blue") {
    markerColor = blueMarker;
    thumbnail = user;
    name = "User1";
    text = "Miembro desde 2018";
  }
  else if (props.markerColor === "aqua") {
    markerColor = aquaMarker;
    thumbnail = user;
    name = "User2";
    text = "Miembro desde 2017";
  }

  else if (props.markerColor === "white") {
    markerColor = whiteMarker;
  }
  else if (props.markerColor === "violet") {
    markerColor = violetMarker;
  }
  else if (props.markerColor === "none") {
    markerColor = "";
  }

  const onClick = (event) => {
    event.event.preventDefault();
    event.event.stopPropagation();
  };

  const AnyReactComponent = () => <img style={style} onClick={handleShow} src={markerColor} alt="" width="30px" />;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShow = (event) => {
    if (event.target && event.target.src && event.target.src.length > 0) {
      setAnchorEl(event.currentTarget.parentElement);
      event.preventDefault();
      event.stopPropagation();
    } else {

    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
      <div style={{ height: props.height, width: props.width }}>

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
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
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
                    <img alt="" src={markerColor} className={classes.marker} />
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

        {/* GoogleSearchBar */}
        {props.showSearchBar === true ?
          <GoogleSearchBar />
          : null}

        <GoogleMapReact
          onClick={onClick}
          className={classes.map}
          defaultCenter={defaultProps.center}
          defaultZoom={zoom}
        >
          {markers.map(
            (marker) =>
              <AnyReactComponent
                key={Math.random()}
                lat={defaultProps.center.lat + Math.random() * 0.02 * (Math.random() > 0.5 ? 1 : -1)}
                lng={defaultProps.center.lng + Math.random() * 0.02 * (Math.random() > 0.5 ? 1 : -1)}
                text=""
              />
          )}
        </GoogleMapReact>
      </div>

    </div>
  );
}