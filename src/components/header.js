import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../profile.jpg";
import Typed from "react-typed";

//CSS STYLES

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(45),
    height: theme.spacing(45),
    margin: theme.spacing(1),
    border: "thick double #a6c8ff",
  },
  title: {
    color: "tomato",
    fontWeight: "900",
    textShadow: "1px 1px 1px grey, 2px 2px 1px grey",
  },
  body: {
    color: "white",
    fontWeight: "900",
    // backgroundColor: "#bdc9f2",
    textShadow: "#FC0 0 0 10px",
  },
  subTitle: {
    color: "white",
    fontWeight: "900",
    marginBottom: "1rem",
    textShadow: "1px 1px 1px grey, 2px 2px 1px grey",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -40%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Avatar className={classes.avatar} src={avatar} alt="avatar" />
        </Grid>

        <Typography className={classes.title} variant="h5">
          <Typed strings={["Hi! I am Zi Wang"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography variant="h5" className={classes.subTitle}>
          <Typed
            strings={[
              "Welcome to my website",
              "Let's get it started",
              "Please click the top left arrow",
              "View my personal portfolio",
              "View my resume",
              "Feel free to contact me",
              "And have a great day!",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
        <Grid item xs={12} sm={8} md={8}>
          <Typography className={classes.body} variant="body1">
            Current CS Master student at Georgia Tech. I am a full-stack
            developer with strong experience in Java, Python, JavaScript, HTML,
            CSS, React.js, Spring Boot and Angular.js. I also have experience
            working on REST APIs, micro-service architecture, and cloud
            computing.<br></br>Prior to that, I was working in the Chemical
            Engineering industry, where I used machine learning techniques for
            simulational and experimental research in oil & energy fields.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
