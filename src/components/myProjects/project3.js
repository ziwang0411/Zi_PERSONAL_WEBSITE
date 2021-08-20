import React from "react";
import Navbar from "../navbar";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/styles";
import ArrowBack from "@material-ui/icons/ArrowBack";

import Home from "../../images/Project3/Home.png";
import Payment from "../../images/Project3/Payment.png";
import Review from "../../images/Project3/Review.png";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "center",
    width: "75%",
    margin: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: { textAlign: "center" },
  title: { paddingTop: "1%" },
}));

function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container className={classes.title}>
        <Grid item>
          <IconButton aria-label="settings" component={Link} to="/projects">
            <ArrowBack />
          </IconButton>
        </Grid>
        <Grid item>
          <CardHeader className={classes.card} title={props.item.title} />
        </Grid>
      </Grid>
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {props.item.description}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={props.item.image}
        title="Paella dish"
      />
    </Card>
  );
}

function ProjectCarousel(props) {
  var items = [
    {
      title: "Emaily - a feedback collection app",
      description: (
        <Typography>
          Built with <b>React</b>, <b>Redux</b> and <b>Node.js</b>
        </Typography>
      ),
      image: Home,
    },
    {
      title: "Pay, create and send surveys",
      description:
        "You can add credits (using Stripe), Create & send Surveys to a big list of emails.",
      image: Payment,
    },
    {
      title: "View created surveys and collect feedback",
      description:
        "Once users voted in their emails, you can track client's votes on your dashboard",
      image: Review,
    },
  ];

  return (
    <Carousel navButtonsAlwaysVisible="true">
      {items.map((item, i) => (
        <Grid container justify="center" alignItems="center">
          <React.Fragment>
            {/* <Item key={i} item={item} /> */}
            <RecipeReviewCard key={i} item={item} />
          </React.Fragment>
        </Grid>
      ))}
    </Carousel>
  );
}

const project1 = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ProjectCarousel />
    </React.Fragment>
  );
};
export default project1;
