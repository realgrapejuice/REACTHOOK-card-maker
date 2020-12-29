import LogIn from "./components/log-in/log-in";
import "./app.css";

function App({ authService }) {
  return <LogIn authService={authService} />;
}

export default App;
