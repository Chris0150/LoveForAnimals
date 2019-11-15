import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import tileDataDogs from '../assets/data/GridListDataDogs';
import tileDataCats from '../assets/data/GridListDataCats';
import tileDataOthers from '../assets/data/GridListDataOthers';
import tileDataUsers from '../assets/data/GridListDataUsers';
import adoptdog from "../assets/images/icons/adoptdog.png";
import vet from "../assets/images/icons/vet.png";
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: 15
    },
    gridList: {
        width: "100%",
        margin: "0 !important",    
        flexGrow: 1
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    tileBar: {
        height: '40px !important;',
    },
    tile: {
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 2
    }
}));

export default function ImageGridList(props) {
    const classes = useStyles();
    let tileData;
    let profileType;

    if(props.type === "Perros"){ tileData = tileDataDogs; profileType = "/PerfilPerro"}
    else if(props.type === "Gatos"){ tileData = tileDataCats; profileType = "/PerfilGato"}
    else if(props.type === "Otros"){ tileData = tileDataOthers; profileType = "/PerfilOtro"}
    else if(props.type === "User"){ tileData = tileDataUsers; profileType = "/PerfilUser"}

    return (
        <div className={classes.root}>
            <GridList  style={{maxHeight: '67vh', overflow: 'auto'}} cellHeight={160} className={classes.gridList} cols={3}>
            
                {tileData.map(tile => (
                    <GridListTile component={Link} to={profileType} key={tile.img} cols={tile.cols || 1} className={classes.tile}>
                        <img src={tile.img} alt={tile.title} />
                       
                        {/* Rating */}
                        {props.showFooter === true ?
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>{tile.location}</span>}
                            className={classes.tileBar}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <img src={vet} alt="" width="20px" />
                                    <img src={adoptdog} alt="" width="20px" />
                                </IconButton>
                            }
                        />
                        : null}
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
