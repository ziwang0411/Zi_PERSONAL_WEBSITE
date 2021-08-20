import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import Navbar from "./navbar";
import ZiResume from "./ziresume.pdf";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    position: "relative",
    overflow: "hidden",
    width: "80%",
    height: "80%",
    paddingTop: "56.25%",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: "10%",
    bottom: 0,
    right: 0,
    width: "80%",
    height: "80%",
  },
  button: {
    marginTop: "1%",
    marginBottom: "1%",
  },
});

export default function Resume() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Box component="header">
        <div className={classes.root}>
          <Button
            href={ZiResume}
            variant="contained"
            color="inherit"
            className={classes.button}
          >
            View Full Screen
          </Button>
          <Container className={classes.container}>
            <iframe
              src={ZiResume}
              title="resume"
              className={classes.iframe}
            ></iframe>
          </Container>
        </div>
      </Box>
    </React.Fragment>
  );
}
