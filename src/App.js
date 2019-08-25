import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import reducers from "./reducers";

class App extends Component {
  render() {
    const store = createStore(reducers, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Homepage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
