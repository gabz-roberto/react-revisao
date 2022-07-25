import Interval from "./components/Interval/Interval";
import Average from "./components/Average/Average";
import Random from "./components/Random/Random";
import Sum from "./components/Sum/Sum";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Exercícios React-Redux</h1>
      <div className="line">
        <Interval></Interval>
      </div>
      <div className="line">
        <Average></Average>
        <Sum></Sum>
        <Random></Random>
      </div>
    </div>
  );
}

export default App;
