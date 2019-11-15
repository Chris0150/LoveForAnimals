import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import Button from '@material-ui/core/Button';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    '&:nth-of-type(even)': {
     textAlign: "end"
    },
    boxShadow: "5px 5px 5px #3f3f3f",
    margin: 10,
    marginTop: 15,
    backgroundColor: "#dcdcdc"
  },
  img: {
    position: "absolute",
    top: 10,
    right: 10,
    height: 30
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height={props.height}
          image={props.image}
          title=""
        />
        <CardContent>
          <img src={props.icon} alt="" height="40px" className={classes.img} />
          <Typography gutterBottom variant="h6" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.subtitle}
         
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
