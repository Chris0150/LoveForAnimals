import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Rating from '@material-ui/lab/Rating';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import dog from "../assets/images/icons/dog.png";

let redFilter = "grayscale(100%) brightness(35%) sepia(100%) hue-rotate(-50deg) saturate(1000%) contrast(0.8)";
let yellowFilter = "grayscale(100%) brightness(90%) sepia(90%) hue-rotate(360deg) saturate(500%) contrast(1)";
let greenFilter = "grayscale(100%) brightness(35%) sepia(100%) hue-rotate(50deg) saturate(2000%) contrast(0.8)";

const useStyles = makeStyles(theme => ({
  item: {
    //height: 100
  },
  itemAvatar: {
    marginRight: "10px !important;"
  },
  feedback: {
    display: "table-caption"
  },
}));


export default function FolderList(props) {
  const classes = useStyles();

  return (
    <List style={{ maxHeight: props.maxHeight, overflow: props.overflow }} className={classes.root}>

      {props.items.map((item, index) => (
        <div key={index}>
          <Divider />
          <ListItem className={classes.item} button component={Link} to={item.target}>
            <ListItemAvatar className={classes.itemAvatar}>
              <img src={item.icon} alt="" width={item.iconWidth ? item.iconWidth : "50px"}
                height={item.iconHeight ? item.iconHeight : "50px"} />
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.subtitle} />
            
            <ListItemSecondaryAction>

              {/* OpeningHours */}
              {props.showOpHours === true ?
                <ListItemIcon>
                   <Typography variant="caption" style={{ display: "block"}}>
                   {(Math.random() > 0.5 ? "Abierto" : "Cerrado")}
                  </Typography>
                </ListItemIcon>
                : null}

            <div className={classes.feedback}>
              {/* Rating */}
              {props.showRating === true ?
                <ListItemIcon>
                  <Rating
                    readOnly
                    value={Math.random() > 0.5 ? 5 : 4}
                    className={classes.rating}
                  />
                </ListItemIcon>
                : null}

                  {/* Feedback */}
              {props.showFeedback === true ?
                <ListItemIcon>
                  <div>
                  <Typography variant="caption" style={{ display: "block", textAlign: "" }} gutterBottom>
                  {item.feedback}
                  </Typography>
                  </div>
                </ListItemIcon>
                : null}
              </div>

              {/* Lost Marker */}
              {props.showLostMarker === true ?
                <ListItemIcon>
                  <div>
                     <img src={dog} alt="" width={"25px"} style={{ filter: redFilter }}/>
                     <img src={dog} alt="" width={"25px"} style={{ filter: yellowFilter + " grayscale(" + (Math.round(Math.random() - 0.3)).toString() + ")"  }} />
                     <img src={dog} alt="" width={"25px"} style={{ filter: greenFilter + " grayscale(" + (Math.round(Math.random() - 0.3)).toString() + ")"  }} /> 
                  </div>
                </ListItemIcon>
                : null}

                
            
            </ListItemSecondaryAction>
          </ListItem>
        </div>
      ))}
      <Divider />
    </List>
  );
}