import logo from "./logo.svg";
import "./App.css";
import { CartEnd } from "./pages/CartEnd";

function App() {
  return (
    <div className="App">
      <CartEnd day={3} people={2} />
    </div>
  );
}

export default App;
