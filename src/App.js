import "./App.css";
import InputArea from "./components/InputArea.js";
import TodoScreen from "./components/TodoScreen.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>To-Do App!</h1>
        </header>
        <Route path="/" component={InputArea} exact />
        <Route path="/:id" component={TodoScreen} />
      </div>
    </Router>
  );
}

export default App;
