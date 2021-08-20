import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilLeftMenuSlider from "@material-ui/core/drawer";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../profile.jpg";
import Footer from "../components/footer";

//CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
    border: "solid #ffc954",
  },
  listItem: {
    color: "tan",
    margin: "0.5rem auto",
  },
  listText: {
    color: "white",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <Apps />,
    listText: "Projects",
    listPath: "/projects",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contact",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    left: false,
  });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => {
    return (
      <Box
        className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider(slider, false)}
      >
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listText}
                primary={lsItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };
  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("left", true)}>
              <ArrowBack style={{ color: "gold" }} />
            </IconButton>
            <Typography
              onClick={toggleSlider("left", true)}
              variant="h5"
              style={{ color: "tan" }}
            >
              Menu
            </Typography>{" "}
            <Typography
              variant="h5"
              style={{ color: "tan", margin: "auto 1rem 1rem auto" }}
            >
              Zi Wang
            </Typography>
            <MobilLeftMenuSlider
              open={state.left}
              onClose={toggleSlider("left", false)}
              anchor="left"
            >
              {sideList("left")}
              <Footer />
            </MobilLeftMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
