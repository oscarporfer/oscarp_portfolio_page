import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles(({themes}) => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "2vh",
    backgroundColor: "primary",
    color: "primary",
    "&:hover, &,Mui-focusVisible": {
      transition: "0.3s",
      color: "red",
      backgroundColor: "red",
    },
    right: "5%",
  },
}));

const ScrollButton = ({ showBelow }) => {
  const classes = useStyles();

  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window["scrollTo"]({ top: 0, bahevior: "smooth" });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <div>
      {show && 
      <IconButton onClick={handleClick} className={classes.toTop}>
        <ExpandLessIcon />
      </IconButton>
      }
    </div>
  );
};

export default ScrollButton;
