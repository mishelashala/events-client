import { IEventService } from "./EventService";

// factory function
export const FetchEventService = (): IEventService => {
  const getList = async () => {
    const res = await window.fetch("http://events.io/api/events");
    const data = await res.json();
    return Promise.resolve(data.events);
  };

  const getOneById = async (id: string) => {
    const res = await window.fetch(`http://events.io/api/events/${id}`);
    const data = await res.json();
    return Promise.resolve(data);
  };

  return {
    getList,
    getOneById,
  };
};
