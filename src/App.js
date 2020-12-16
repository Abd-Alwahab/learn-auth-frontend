import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import HomeLoggedOut from "./pages/HomeLoggedOut";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import PreviewProfile from "./pages/PreviewProfile";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeLoggedOut} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={PreviewProfile} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
