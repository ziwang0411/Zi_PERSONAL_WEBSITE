import React from "react";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    color: "red",
    opacity: 0.9,
  },
});
const ParticleAnim = () => {
  const classes = useStyles();

  return (
    <Particles
      canvasClassName={classes.particlesCanva}
      params={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: false,
              area: 30,
              factor: 10,
            },
          },
          color: {
            value: "#2a5287",
          },
          links: {
            color: {
              value: "random",
            },
            enable: true,
            opacity: 1.0,
            width: 2,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 2,
              color: "tomato",
            },
          },
          size: {
            value: 6,
            random: true,
            anim: {
              enable: true,
              speed: 6,
              size_min: 0.1,
              sync: true,
            },
          },
        },
        opacity: {
          value: 0.7,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: true,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticleAnim;
