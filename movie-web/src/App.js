
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  // switch는 router를 찾는 역할을 한다
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path = "/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;