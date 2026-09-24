// import "./App.css";
// import Counter from "./components/Counter";
// import Todos from "./components/Todos";
// import FlashCards from "./components/FlashCards";
import TraveTodos from "./components/TravelTodos";
import Accordion from "./components/Accordion";
import TipCalculator from "./components/TipCalculator";

import "./TipCalculator.css"
import "./Accordion.css";
import "./TravelTodos.css";
function App() {
  return (
    <div className="App">
      <TraveTodos />
      <Accordion />
      <TipCalculator />
    </div>
  );
}

export default App;