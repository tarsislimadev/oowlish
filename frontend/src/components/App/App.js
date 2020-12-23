import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Header } from "../Header";

import { Cities } from "../../pages/Cities";
import { Customers } from "../../pages/Customers";
import { Customer } from "../../pages/Customer";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={"container"}>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Cities} />
                <Route path="/city" component={Customers} />
                <Route path="/customer" component={Customer} />
              </Switch>
            </Suspense>
          </Router>
        </div>
      </>
    );
  }
}
