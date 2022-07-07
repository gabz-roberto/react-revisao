import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Hiragana, Katakana, About, NotFound} from '../../../views/pages';

import './Main.css';

const Main = () => {
  return (
    <main className='content'>
      <Routes>
        <Route path="/hiragana" element={<Hiragana/>}/>
        <Route path="/katakana" element={<Katakana/>}/>
        <Route path="/about" element={<About/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
  )
}

export default Main