import axios from "axios";
import { Event } from "../entities/Event";
import { IEventService } from "./EventService";

// factory function
export const AxiosEventService = (): IEventService => {
  const createOne = async (event: Event): Promise<Event> => {
    const res = await axios.post("http://events.io/api/events", event);
    return Promise.resolve(res.data as Event);
  };

  const getList = async () => {
    const res = await axios.get("http://events.io/api/events");
    return Promise.resolve(res.data.events);
  };

  const getOneById = async (id: string) => {
    const res = await axios.get(`http://events.io/api/events/${id}`);
    return Promise.resolve(res.data);
  };

  const save = async (event: Event): Promise<Event> => {
    const res = await axios.put(`http://events.io/api/events/${event.id}`, event);
    return Promise.resolve(res.data);
  };

  return {
    createOne,
    getList,
    getOneById,
    save,
  };
};
