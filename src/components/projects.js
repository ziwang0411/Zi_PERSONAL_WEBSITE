import React from "react";
import Navbar from "./navbar";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/Project1Thumbnail.png";
import project2 from "../images/Project2Thumbnail.png";
import project3 from "../images/Project3Thumbnail.png";
import project4 from "../images/react-redux.jpg";
const useStyles = makeStyles({
  mainContainer: {},
  cardContainer: {
    maxWidth: 445,
    margin: "3rem auto",
  },
});
const projectItems = [
  {
    title: "Restaurant rating & review",
    button1: "Share",
    button2: "More Info",
    path: "/Project2",
    image: project2,
    description: (
      <Typography
        variant="body1"
        color="textSecondary"
        component="p"
        align="justify"
      >
        <li>
          Developed a Yelp-clone web application where users can add, edit
          review and delete restaurants.
        </li>
        <li>
          Used <b>HTML/CSS/JS</b> for webpages, <b>Express + Node.js</b> for
          RESTful APIs, and <b>MongoDB</b> for data persistence.
        </li>
        <li>
          Implemented map view with Mapbox API, enabled authentication with
          Passport.js and form validation with Joi.js
        </li>
        <li>
          Deployed the application on <b>Heroku</b>. Used Mongo Atlas and
          Cloudinary for database and file storage.
        </li>
      </Typography>
    ),
  },
  {
    title: "eCommerce & Shop Management ",
    button1: "Share",
    button2: "More Info",
    path: "/Project1",
    image: project1,
    description: (
      <Typography
        variant="body1"
        color="textSecondary"
        component="p"
        align="justify"
      >
        <li>
          Used <b>Angular.js</b> and <b>Spring Boot</b> to build a full-stack
          e-commerce platform with <b>MySQL</b> database.
        </li>
        <li>
          Developed <b>RESTful APIs</b> for customers, products & shopping
          carts. Implemented CRUD operations with Hibernate
        </li>
        <li>
          Implemented dynamic product search, credit card checkout, Spring
          security authentication.
        </li>
        <li>
          Used Eureka to register microservices, Junit & Selenium for API
          testing, and Swagger for API documentation.
        </li>
      </Typography>
    ),
  },
  {
    title: "Survey sending and collecting system",
    button1: "Share",
    button2: "More Info",
    path: "/project3",
    image: project3,
    description: (
      <Typography variant="body1" color="textSecondary" component="p">
        <li>
          Developed a full-stack web application to send mass email surveys to a
          big list of users and collect feedback.
        </li>
        <li>
          Built with <b>React & Redux</b> as front-end, <b>Node.js</b> and
          <b>Express</b> as back-end, and MongoDB for data persistence.
        </li>
        <li>
          Enabled Google OAuth for user authentication and used Stripe to handle
          credit card payments.
        </li>
        <li>
          Engaged with users via automated emails and collect users’ feedback
          through Sendgrid.
        </li>
      </Typography>
    ),
  },
  {
    title: "WSB MemeStock Sentiment Analyzer",
    button1: "Share",
    button2: "More Info",
    path: "/projects",
    image: project4,
    description: (
      <Typography variant="body1" color="textSecondary" component="p">
        <li>
          Crawling posts in Reddit subreddits(/WSB, /stocks) and conduct
          sentiment analysis on the most mentioned stocks to predict the
          sentiment (Buy? Sell? HODL? <b>YOLO</b>?)
        </li>
        <li>
          Combined sentiment analysis results with stock prices and
          fundamentals, stored for market predictability, and analyzed the
          indirect effect of public opinion on the direction of the stock price.
        </li>
      </Typography>
    ),
  },
];
const Projects = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center" alignItems="center">
          {projectItems.map((project, key) => (
            <Grid key={key} item xs={12} sm={8} md={6}>
              <Card className={classes.cardContainer}>
                <CardActionArea component={Link} to={project.path}>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="200"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    component={Link}
                    to={project.path}
                  >
                    {project.button2}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Projects;
