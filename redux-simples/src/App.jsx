import Card from "./components/Card";
import Interval from "./components/Interval";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Exercícios React-Redux</h1>
      <div className="line">
        <Interval></Interval>
      </div>
      <div className="line">
        <Card title="Card #2" blue>Y</Card>
        <Card title="Card #3" purple>A</Card>
        <Card title="Card #4" green>B</Card>
      </div>
    </div>
  );
}

export default App;
