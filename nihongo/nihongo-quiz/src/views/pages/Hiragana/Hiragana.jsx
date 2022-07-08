import React, { useContext } from "react";

import Card from "../../../components/elements/Card/Card";

import DataContext from "../../../context/Data";

import "./Hiragana.css";

function Hiragana() {
  const context = useContext(DataContext);

  const hiragana = context.hiragana;

  console.log(hiragana)
  return (
    <div className="hiragana-container">
      
    </div>
  );
}

export default Hiragana;
