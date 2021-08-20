import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./navbar";
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tomato",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "red",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box component="div" style={{ background: "#233", height: "100vh" }}>
        <Navbar />

        <Grid container justify="center" align="center">
          <Grid item xs={12} sm={8} md={6}>
            <Box component="form" style={{ margin: "15rem auto" }}>
              <Typography
                variant="h5"
                style={{
                  color: "tomato",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Contact me!
              </Typography>
              <InputField
                fullWidth={true}
                label="Name"
                variant="outlined"
                inputProps={{ style: { color: "black", autoComplete: "off" } }}
                margin="dense"
                size="medium"
                autoComplete="off"
              />
              <br />
              <InputField
                fullWidth={true}
                label="Email"
                variant="outlined"
                margin="dense"
                size="medium"
                inputProps={{ style: { color: "black", autoComplete: "off" } }}
                autoComplete="off"
              />
              <br />
              <InputField
                fullWidth={true}
                label="Company Name"
                variant="outlined"
                margin="dense"
                size="medium"
                inputProps={{ style: { color: "black", autoComplete: "off" } }}
                autoComplete="off"
              />
              <br />
              <Button
                className={classes.button}
                variant="outlined"
                fullWidth={true}
                endIcon={<SendIcon />}
              >
                Contact me
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
