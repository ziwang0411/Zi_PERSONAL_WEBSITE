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

import Home from "../../images/Project2/Home.png";
import Restaruant from "../../images/Project2/Restaruant.png";
import mapView from "../../images/Project2/mapView.png";
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
      title: "Health dining restaruant reviewing system",
      description: (
        <Typography>
          <b>HTML, CSS, Javascript</b> with <b>Node.js</b> Back-end
        </Typography>
      ),
      image: Home,
    },
    {
      title: "View and review restaruants",
      description:
        "View the photos and reviews for different restaruants, and find them on the map",
      image: Restaruant,
    },
    {
      title: "Map-based view for nearby restaruants",
      description: "Find out the restaruants near you",
      image: mapView,
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

// function Item(props) {
//   return (
//     <Paper>
//       <h2>{props.item.name}</h2>
//       <p>{props.item.description}</p>

//       <Button className="CheckButton">Check it out!</Button>
//     </Paper>
//   );
// }
const project1 = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ProjectCarousel />
    </React.Fragment>
  );
};
export default project1;
