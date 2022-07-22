import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home-title'>NihonGo-Quiz</h1>
      <h3>Teste seus conhecimentos nos alfabetos fonéticos da língua japonesa.</h3>
      <div className="home-nav">
        <Link to="/hiragana">Hiragana</Link>
        <Link to="/katakana">Katakana</Link>
      </div>
    </div>
  )
}

export default Home