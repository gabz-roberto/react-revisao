import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Main from "../components/layout/Main/Main";
import DataContext, { data } from "../context/Data";

import "./App.css";

function App() {
  const [state, setState] = useState(data)

  return (
    <div className="app">
      <DataContext.Provider value={state}>
        <Router>
          <Header />
          <Main />
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
