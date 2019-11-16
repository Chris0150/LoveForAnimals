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
import redMarker from "../assets/images/icons/redMarker.png";
import greenMarker from "../assets/images/icons/greenMarker.png";
import orangeMarker from "../assets/images/icons/orangeMarker.png";
import Typography from '@material-ui/core/Typography';

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
                    <img src={redMarker} alt="" width={"25px"} />
                    <img src={orangeMarker} alt="" width={"25px"} style={{ filter: "grayscale(" + (Math.round(Math.random() - 0.3)).toString() + ")" }} />
                    <img src={greenMarker} alt="" width={"25px"} style={{ filter: "grayscale(" + (Math.round(Math.random())).toString() + ")" }} />
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