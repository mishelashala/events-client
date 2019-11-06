import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { EventRouter } from "./Events/Router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <EventRouter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
