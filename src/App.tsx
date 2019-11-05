import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { EventListView } from "./views/EventListView";
import { EventDetailsView } from "./views/EventDetailsView";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <EventListView />
        </Route>

        <Route path="/:id">
          <EventDetailsView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
