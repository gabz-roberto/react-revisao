import React from "react";

import Card from "../../../components/elements/Card/Card";

import { hiragana } from "../../../context/data";

import "./Hiragana.css";

function Hiragana() {
  return (
    <div className="hiragana-container">
      {hiragana.map((item, i) => (
        <Card/>
      ))}
    </div>
  );
}

export default Hiragana;
