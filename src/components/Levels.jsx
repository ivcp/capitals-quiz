import React from "react";
import Button from "@material-ui/core/Button";

function Levels(props) {
  const numOfQuestions = [
    { id: 5, num: "5 questions" },
    { id: 20, num: "20 questions" },
    { id: 50, num: "50 questions" },
    { id: 100, num: "100 questions" },
    { id: 150, num: "150 questions" },
    { id: 246, num: "246 questions" },
  ];

  const style = {
    textTransform: "none",
    fontFamily: "'Neuton', serif",
    fontSize: "1.2rem",
    margin: "10px 5px"    
  };

  
  return (
    <div className={"choose-levels"}>
      <p><span>Start new quiz:</span></p>
      {numOfQuestions.map((q) => (
        <Button
          key={q.id}
          id={q.id}
          variant="outlined"
          style={style}
          className={"q5"}
          onClick={() => props.l(q.id)}
        >
          {q.num}
        </Button>
      ))}
    </div>
  );
}

export default Levels;
