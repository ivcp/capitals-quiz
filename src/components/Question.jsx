import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function Question() {
  return (
    <Paper
      elevation={3}
      className="question"
      style={{ backgroundColor: "#fff", fontSize: "1.4rem" }}
    >
      <h2>What is the capital of #####?</h2>
      <div className="row">
        <Button
          variant="contained"
          style={{
            marginBottom: "10px",
            fontFamily: "'Neuton', serif",
            textTransform: "none",
            fontSize: "1.5rem",
            display: "block",
            width: "100%",
          }}
        >
          Podgorica
        </Button>
        <Button
          variant="contained"
          style={{
            marginBottom: "10px",
            fontFamily: "'Neuton', serif",
            textTransform: "none",
            fontSize: "1.5rem",
            display: "block",
            width: "100%",
          }}
        >
          Belgrade
        </Button>
      </div>
      <div className="row">
        <Button
          variant="contained"
          style={{
            marginBottom: "10px",
            fontFamily: "'Neuton', serif",
            textTransform: "none",
            fontSize: "1.5rem",
            display: "block",
            width: "100%",
          }}
        >
          Istanbul
        </Button>
        <Button
          variant="contained"
          style={{
            marginBottom: "10px",
            fontFamily: "'Neuton', serif",
            textTransform: "none",
            fontSize: "1.5rem",
            display: "block",
            width: "100%",
          }}
        >
          Salt Lake City
        </Button>
      </div>
    </Paper>
  );
}

export default Question;
