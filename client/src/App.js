import "./CSSFILE/App.css";
import "./CSSFILE/registration.css";
import "./CSSFILE/tripHome.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Home from "./pages/Home";
import Registration from "./pages/Registration";
import TripHome from "./pages/tripHome";
import Login from "./pages/Login";
// temp feature 개발 완료
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" exact component={TripHome} />
          <Route path="/Registration" exact component={Registration} />
          <Route path="/Login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
