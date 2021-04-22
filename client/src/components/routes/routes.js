import React from "react";
import { Home, About, Portfilo, Hobbies, NoMatch } from "../index";
import { BrowserRouter as Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/portfilo">
        <Portfilo />
      </Route>
      <Route path="/hobbies">
        <Hobbies />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Routes;
