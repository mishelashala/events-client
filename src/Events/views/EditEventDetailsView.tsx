import * as React from "react";
import { IEventService } from "../services/EventService";
import { Event, event } from "../entities/Event";
import { useParams } from "react-router";
import { assoc } from "lodash/fp";
import { EventForm } from "../components/EditEventForm";

export const EditEventDetailsViewFactory = (eventService: IEventService) => {
  const EditEventDetailsView = () => {
    const { id } = useParams();
    const [eventDetails, setEventDetails] = React.useState<Event>(event());

    React.useEffect(() => {
      (async () => {
        const eventDetails = await eventService.getOneById(String(id));
        setEventDetails(eventDetails);
      })();
    }, [id]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value, name },
      } = event;
      setEventDetails(assoc(name, value, eventDetails));
    };

    const handleClickSave = (event: React.MouseEvent<HTMLButtonElement>) => {
      (async () => {
        event.preventDefault();
        await eventService.save(eventDetails);
        alert("saved!");
      })();
    };

    return (
      <div>
        <EventForm
          eventName={eventDetails.name}
          onChange={handleChange}
          onClickSave={handleClickSave}
        />
      </div>
    );
  };

  return EditEventDetailsView;
};
