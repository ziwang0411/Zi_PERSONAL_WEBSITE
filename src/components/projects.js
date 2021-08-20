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
    title: "eCommerce & Shop Management ",
    button1: "Share",
    button2: "More Info",
    path: "/Project1",
    image: project1,
    description: (
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        align="justify"
      >
        <li>
          Full-stack e-commerce web application using <b>Angular.js</b> as
          front-end and Spring Boot as back-End.{" "}
        </li>
        <li>
          Develop a <b>Spring Boot</b> back-end using <b>RESTAPIs</b> and{" "}
          <b>MySQL</b> database, and enabled different functionalities for
          online shopping operations (product browsing and searching, add to
          cart, checkout, check order history, etc.)
        </li>{" "}
      </Typography>
    ),
  },
  {
    title: "Restaurant health condition rating & review",
    button1: "Share",
    button2: "More Info",
    path: "/Project2",
    image: project2,
    description: (
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        align="justify"
      >
        <li>
          Developed a web application for users to review and report
          restaurants’ health conditions and COVID-19 outbreaks.
        </li>
        <li>
          Built the application with <b>Node.js, Express, MongoDB</b>, wrote{" "}
          <b>RESTful APIs</b> to handle HTTP requests, and deployed to Heroku.
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
      <Typography variant="body2" color="textSecondary" component="p">
        <li>
          Built a survey management web application allowing users to send
          customized surveying emails.
        </li>
        <li>
          Constructed the front-end with <b>React</b> framework and
          stored/modified state data with <b>React-Redux</b>.
        </li>
        <li>
          Enabled <b>OAuth</b> for user authentication and handled data
          persistence of user credits and info in MongoDB.
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
      <Typography variant="body2" color="textSecondary" component="p">
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
