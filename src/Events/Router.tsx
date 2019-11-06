import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { EventListViewFactory } from "./views/EventListView";
import { AxiosEventService } from "./services/AxiosEventService";
import { EventDetailsViewFactory } from "./views/EventDetailsView";
import { AddEventViewFactory } from "./views/AddEventView";
import { EditEventDetailsViewFactory } from "./views/EditEventDetailsView";

const axiosEventService = AxiosEventService();
const EventListView = EventListViewFactory(axiosEventService);
const EventDetailsView = EventDetailsViewFactory(axiosEventService);
const AddEventView = AddEventViewFactory(axiosEventService);
const EditEventDetailsView = EditEventDetailsViewFactory(axiosEventService);

export const EventRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <EventListView />
      </Route>

      <Route path="/add">
        <AddEventView />
      </Route>

      <Route exact path="/:id">
        <EventDetailsView />
      </Route>

      <Route path="/:id/edit">
        <EditEventDetailsView />
      </Route>
    </Switch>
  );
};
