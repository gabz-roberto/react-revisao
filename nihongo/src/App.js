import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header/Header'
import Home from './pages/Home/Home'
import Hiragana from './pages/Hiragana/Hiragana'
import Katakana from './pages/Katakana/Katakana'
import NotFound from './pages/NotFound/NotFound.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/hiragana" element={<Hiragana/>}/>
        <Route path="/katakana" element={<Katakana/>}/>
        <Route exact path="*" element={<NotFound />}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
