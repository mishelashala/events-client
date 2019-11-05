import * as React from "react";
import { useParams } from "react-router-dom";
import { Event, event } from "../entities/Event";
import { EventService } from "../services/EventService";

const eventService = EventService();

export const EventDetailsView = () => {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = React.useState<Event>(event());

  React.useEffect(() => {
    (async () => {
      const eventData = await eventService.getOneById(String(id));
      setEventDetails(eventData);
    })();
  }, []);

  return (
    <div>
      <p>id: {eventDetails.id}</p>
      <p>name: {eventDetails.name}</p>
    </div>
  );
};
