import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import HomeLoggedOut from "./pages/HomeLoggedOut";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeLoggedOut} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
