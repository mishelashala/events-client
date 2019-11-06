import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { EventListViewFactory } from "./views/EventListView";
import { AxiosEventService } from "./services/AxiosEventService";
import { FetchEventService } from "./services/FetchEventService";
import { EventDetailsViewFactory } from "./views/EventDetailsView";

const EventListView = EventListViewFactory(AxiosEventService());
const EventDetailsView = EventDetailsViewFactory(FetchEventService());

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
