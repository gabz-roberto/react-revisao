import React from "react";
import "./Card.css";

const getColor = (props) => {
  if (props.red) return "red";
  if (props.blue) return "blue";
  if (props.green) return "green";
  if (props.purple) return "purple";
  return "";
};

const Card = (props) => {
  return (
    <div className={`card ${getColor(props)}`}>
      <div className="header">
        <span className="title">{props.title}</span>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Card;
