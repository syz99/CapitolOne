import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  userHasAuthenticated = userid => {
    this.setState({ id: userid });
  };

  render() {
    const childProps = {
      id: this.state.id,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App">
          <Router>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route
                path="/"
                render={props => <LoginForm childProps={childProps} />}
              />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
