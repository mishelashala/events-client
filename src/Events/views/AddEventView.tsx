import * as React from "react";
import { IEventService } from "../services/EventService";
import { useHistory } from "react-router";
import { AddEventForm } from "../components/AddEventForm";

export const AddEventViewFactory = (eventService: IEventService) => {
  const AddEventView = () => {
    const history = useHistory();

    const handleSubmitAddEventForm = async (event: any) => {
      event.preventDefault();
      const { target } = event;
      const name = target.name.value;

      await eventService.createOne({ name });
      history.replace("/");
    };

    return (
      <div>
        <AddEventForm onSubmit={handleSubmitAddEventForm} />
      </div>
    );
  };

  return AddEventView;
};
