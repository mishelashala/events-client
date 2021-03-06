import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { Event, event } from "../entities/Event";
import { IEventService } from "../services/EventService";

export const EventDetailsViewFactory = (eventService: IEventService) => {
  const EventDetailsView = () => {
    const { id } = useParams();
    const [eventDetails, setEventDetails] = React.useState<Event>(event());

    React.useEffect(() => {
      (async () => {
        const eventData = await eventService.getOneById(String(id));
        setEventDetails(eventData);
      })();
    }, [id]);

    return (
      <div>
        <p>id: {eventDetails.id}</p>
        <p>name: {eventDetails.name}</p>
        <Link to={`/${eventDetails.id}/edit`}>
          <p>EDTI</p>
        </Link>
      </div>
    );
  };

  return EventDetailsView;
};
