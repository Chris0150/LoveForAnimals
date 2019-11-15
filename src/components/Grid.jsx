import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 15,
    backgroundColor: "rgba(0,0,0,0)",
  },
  lop: {
    position: "absolute"
  },
  button: {
    margin: theme.spacing(1),
    display: "block",
    textTransform: "none",
    borderColor: "transparent"

  },
  grid: {
    height: 100
  },
  avatar: {
    width: "50px !important",
    height: 50
  },
  group: {
    height: "100%",
  },
  legend2: {
    backgroundColor: "silver",
    position: "absolute",
    bottom: "150px",
    left: "33%",
    width: "33%",
    height: "45px",
    opacity: "0.7"
  },
  rating: {
    position: "absolute",
    bottom: "220px",
    left: "33%",
    width: "33%"
  },
}));

export default function SpacingGrid(props) {
  const classes = useStyles();

  return (
    <div key={Math.random()} className={classes.root}>
      <Grid className={classes.grid} item xs={12} md={6}>
        <ButtonGroup className={classes.group} fullWidth aria-label="full width outlined button">
        
        {props.items.map(
          (item) =>
          <Button key={Math.random()} className={classes.button} onClick={props.onClick}>
            <div>
              <img alt="" src={item.icon} className={classes.avatar} />
              <Typography variant="caption" display="block" gutterBottom>
                {item.title}
              </Typography>
            </div>
          </Button>
         )}

        </ButtonGroup>
      </Grid>
    </div>
  );
}
