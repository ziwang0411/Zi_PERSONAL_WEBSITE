import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import { makeStyles } from "@material-ui/styles";
import ParticleAnim from "./particleAnim";
// const useStyles = makeStyles({
//   particlesCanva: {
//     position: "absolute",
//     color: "red",
//     opacity: 0.5,
//   },
// });
const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      {ParticleAnim()}
    </React.Fragment>
  );
};

export default Home;
