import React from "react";
import { Link } from "react-router-dom";
import { Event } from "../entities/Event";
import { IEventService } from "../services/EventService";

export const EventListViewFactory = (eventService: IEventService) => {
  const EventListView = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [events, setEvents] = React.useState<Event[]>([]);
    const [error, setError] = React.useState<Error | null>(null);

    React.useEffect(() => {
      (async () => {
        try {
          const events = await eventService.getList();
          setEvents(events);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      })();
    }, []);

    if (isLoading) {
      return <div>Is loading</div>;
    }

    if (error !== null) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div className="App">
        {events.map(event => {
          return (
            <Link key={event.id} to={`/${event.id}`}>
              <div>{event.name}</div>
            </Link>
          );
        })}
      </div>
    );
  };

  return EventListView;
};
