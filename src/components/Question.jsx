import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Answer from "./Answer";
import Levels from "./Levels";
import list from "../list.json";
import { Line } from "rc-progress";


const random = [];
while (random.length < 4) {
  let r = Math.floor(Math.random() * 246);
  if (random.indexOf(r) === -1) random.push(r);
}
const c = list[random[0]].name;

const arr = [
  {
    id: 1,
    answer: list[random[0]].capital,
  },
  {
    id: 2,
    answer: list[random[1]].capital,
  },
  {
    id: 3,
    answer: list[random[2]].capital,
  },
  {
    id: 4,
    answer: list[random[3]].capital,
  },
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

shuffle(arr);
const listOfCountries = [random[0]];

function Question() {
  const [country, setCountry] = useState(c);
  const [answers, setAnswers] = useState(arr);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(5);
  const [buttonsAreDisabled, setButtonsAreDisabled] = useState(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);

  function nextQuestion() {
    let random = [];
    do {
      if (listOfCountries.length === level) {
        random.push(1, 2, 3, 4);
        break;
      }
      random = [];
      while (random.length < 4) {
        let r = Math.floor(Math.random() * 246);
        if (random.indexOf(r) === -1) random.push(r);
      }
    } while (listOfCountries.includes(random[0]));

    listOfCountries.push(random[0]);

    const c = list[random[0]].name;

    const arr = [
      {
        id: 1,
        answer: list[random[0]].capital,
      },
      {
        id: 2,
        answer: list[random[1]].capital,
      },
      {
        id: 3,
        answer: list[random[2]].capital,
      },
      {
        id: 4,
        answer: list[random[3]].capital,
      },
    ];

    shuffle(arr);
    setCountry(c);
    setAnswers(arr);
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  }

  function disableButtons() {
    setButtonsAreDisabled((pV) => !pV);
  }

  function newLevel(id) {
    setLevel(id);
    setCurrentQuestionNumber(1);
    setScore(0);
    listOfCountries.length = 1;
    window.scrollTo(0, 0);
  }

  return (
    <div>
      {listOfCountries.length <= level && (
        <p className={"score"}>
          <span>
            Correct answers: &nbsp; <strong> {score} &nbsp;</strong>
          </span>
          <span>
            Question: &nbsp;
            <strong>
              {currentQuestionNumber} / {level} &nbsp;
            </strong>
          </span>
        </p>
      )}
      <div className={"progress"}>
        <Line
          percent={((currentQuestionNumber - 1) / level) * 100}
          strokeWidth="1"
          strokeColor="#cf7500"
          trailColor="#F2EFEF"
        />
      </div>
      <Paper
        elevation={3}
        className="question"
        style={{ backgroundColor: "#fff", fontSize: "1.4rem" }}
      >
        {listOfCountries.length > level ? (
          <h2>
            Thank you for playing.
            <br />
            <br /> Your score is &nbsp; {score} / {level}.
          </h2>
        ) : (
          <h2>What is the capital of {country}?</h2>
        )}
        {listOfCountries.length <= level ? (
          <div className="row">
            {answers.map((a) => (
              <Answer
                answer={a.answer}
                key={a.id}
                id={a.id}
                clicked={nextQuestion}
                score={() => setScore(score + 1)}
                isDisabled={buttonsAreDisabled}
                disableButtons={disableButtons}
              />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </Paper>
      <Levels l={newLevel} />
    </div>
  );
}

export default Question;
