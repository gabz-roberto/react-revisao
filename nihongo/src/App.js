import { Routes, Route } from "react-router-dom";

import dataContext, { data } from "./context/data";

import Header from "./components/layout/Header/Header";
import Home from "./pages/Home/Home";
import Hiragana from "./pages/Hiragana/Hiragana";
import Katakana from "./pages/Katakana/Katakana";
import NotFound from "./pages/NotFound/NotFound.jsx";

import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(data)

  return (
    <div className="App">
      <dataContext.Provider value={state}>
        <Header />
        <Routes>
          <Route path="/hiragana" element={<Hiragana />} />
          <Route path="/katakana" element={<Katakana />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </dataContext.Provider>
    </div>
  );
}

export default App;
