import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import urgentdog from "../assets/images/icons/urgentdog.png";
import vet from "../assets/images/icons/vet.png";
import adoptdog from "../assets/images/icons/adoptdog.png";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  root: {
    background: "#fff"
  },
  lop: {
    position: "absolute"
  },
  button: {
    margin: theme.spacing(1),
    display: "block",
    textTransform: "none"
  },
  grid: {
    backgroundColor: "white",
    height: 100
  },
  avatar: {
    width: "50px !important",
    height: 50
  },
  group: {
    height: "100%"
  },
  legend2: {
    textTransform: "capitalize",
    backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppg_nXStuMySH0ix_oVISR71Clm8F9bumRcpIwCU_h-YR3UQeeWNK7Hst&s)",
    backgroundSize: "cover",
    opacity: 0.6,
    position: "absolute",
    left: "33%",
    width: "33%",
    height: "45px"
  },
  legendText: {
    color: "white"
  },
  rating: {
    position: "absolute",
    bottom: "220px",
    left: "33%",
    width: "33%"
  },
}));

export default function DemoCarousel(props) {
  const classes = useStyles();

  let oAlbum = [];
  if (props.slide1) oAlbum.push({ slide: props.slide1, target: props.target1, name: props.name1 });
  if (props.slide2) oAlbum.push({ slide: props.slide2, target: props.target2, name: props.name2 });
  if (props.slide3) oAlbum.push({ slide: props.slide3, target: props.target3, name: props.name3 });
  if (props.slide4) oAlbum.push({ slide: props.slide4, target: props.target4, name: props.name4 });

  return (

    <div className={classes.root}>
      <Carousel
        axis={props.axis}
        autoPlay={props.autoPlay}
        infiniteLoop={props.infiniteLoop}
        interval={props.autoPlaySpeed}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}>

        {oAlbum.map(
          (oSlide) =>
            <div key={Math.random()}>
              {oSlide.slide.indexOf("youtube") > - 1 ?

                // slide Videos
                <iframe width="100%" height="350px" title="video" src={oSlide.slide}/>
                :
                // slide Images
                <img alt="" src={oSlide.slide} />}

              {/* Rating */}
              {props.showRating === true ?
                <Rating
                  readOnly
                  value={5}
                  className={classes.rating}
                />
                : null}

              {/* Legend */}
              {props.showLegend === true ?
                <Button style={{bottom: props.legendHeight}} className={classes.legend2} component={Link} to={oSlide.target} >
                  <p className={classes.legendText}>{oSlide.name}</p>
                </Button>
                : null}

              {/* Footer */}
              {props.showFooter === true ?
                <Grid className={classes.grid} item xs={12} md={6}>
                  <ButtonGroup className={classes.group} fullWidth aria-label="full width outlined button">
                    <Button className={classes.button} component={Link} to={oSlide.target}>
                      <div>
                        <img alt="" src={adoptdog} className={classes.avatar} />
                        <Typography variant="caption" display="block" gutterBottom>
                          {parseInt(5000 * Math.random())}  {props.footerTitle1}
                        </Typography>
                      </div>
                    </Button>
                    <Button className={classes.button} component={Link} to={oSlide.target}>
                      <div>
                        <img alt="" src={vet} className={classes.avatar} />
                        <Typography variant="caption" display="block" gutterBottom>
                          {parseInt(3000 * Math.random())} {props.footerTitle2}
                        </Typography>
                      </div>
                    </Button>
                    <Button className={classes.button} component={Link} to={oSlide.target}>
                      <div>
                        <img alt="" src={urgentdog} className={classes.avatar} />
                        <Typography variant="caption" display="block" gutterBottom>
                          {parseInt(2000 * Math.random())} {props.footerTitle3}
                        </Typography>
                      </div>
                    </Button>
                  </ButtonGroup>
                </Grid> : null}
            </div>
        )}
      </Carousel>
    </div>
  );
}



