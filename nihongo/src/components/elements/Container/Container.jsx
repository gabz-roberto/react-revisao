import React from "react";
import QuizArea from "../QuizArea/QuizArea";
import Scoreboard from "../Scoreboard/Scoreboard";

import "./Container.css";

const Container = (props) => {
  return (
    <div className="container">
      <QuizArea>{props.children}</QuizArea>
      <Scoreboard>
        <h2>teste</h2>
      </Scoreboard>
    </div>
  );
};

export default Container;
