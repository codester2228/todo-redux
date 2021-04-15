import "./App.css";

import InputArea from "./components/InputArea.js";
import TodoScreen from "./components/TodoScreen.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  var Theme = useSelector((state) => state.Theme);
  var { darktheme } = Theme;

  return (
    <Router>
      <div className={darktheme ? "Appdark App" : "Applight App"}>
        <div className={darktheme ? "dark" : "light"}>
          <h1>To-Do App!</h1>
        </div>
        <Route path="/" component={InputArea} exact />
        <Route path="/:id" component={TodoScreen} />
      </div>
    </Router>
  );
}

export default App;
