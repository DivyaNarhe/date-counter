// import "./App.css";
// import Counter from "./components/Counter";
// import Todos from "./components/Todos";
// import FlashCards from "./components/FlashCards";
import TraveTodos from "./components/TravelTodos";
import Accordion from "./components/Accordion";
import TipCalculator from "./components/TipCalculator";
import EatAndSplit from "./components/EatAndSplit"

import "./TipCalculator.css";
import "./Accordion.css";
import "./TravelTodos.css";
import "./EatAndSplit.css";
function App() {
  return (
    <div className="App">
      <TraveTodos />
      <Accordion />
      <TipCalculator />
      <EatAndSplit />
    </div>
  );
}

export default App;