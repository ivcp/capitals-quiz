import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function Answer(props) {
  const [color, setColor] = useState();
  

  function handleClick() {
    if (props.id === 1) {
      setColor("#3C8838");
      props.score();
      props.disableButtons();      
    } else {
      setColor("#C82333");
      props.disableButtons();      
    }; 
    setTimeout(() => {
      setColor();
    }, 500);
    setTimeout(() => {
      props.clicked();
      props.disableButtons();
    }, 800);    
  };

  const style = {
    fontFamily: "'Neuton', serif",
    textTransform: "none",
    fontSize: "1.5rem",
    display: "block",
    width: "80%",
    margin: "0 auto 10px",
    backgroundColor: color
  };

  return (
    <Button
      variant="contained"
      style={style}
      onClick={handleClick}
      disabled={props.isDisabled}      
    >
      {props.answer}
    </Button>
  );
}

export default Answer;
