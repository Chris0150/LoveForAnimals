import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(props => ({
  root: {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
    position: props.position,
    bottom: props.bottom,
    left: props.left,
    opacity: props.opacity
  }
}));

export default function ContainedButtons(props) {
  const classes = useStyles(props);

  return (
    <Button className={classes.root}>
    </Button>
  );
}