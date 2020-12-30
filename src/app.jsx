import LogIn from "./components/log-in/log-in";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/main/main";

function App({ authService }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LogIn authService={authService} />
        </Route>
        <Route path="/main">
          <Main authService={authService} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
