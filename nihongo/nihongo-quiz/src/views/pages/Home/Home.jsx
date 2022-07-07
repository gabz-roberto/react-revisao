import React from "react";
import { Link } from "react-router-dom";
import { Hiragana, Katakana } from "../index";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/hiragana" className="home-link">
        <p>Hiragana</p>
      </Link>
      <Link to="/katakana" className="home-link">
        <p>Katakana</p>
      </Link>
    </div>
  );
};

export default Home;
