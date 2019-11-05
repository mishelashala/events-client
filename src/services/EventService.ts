import axios from "axios";
import { Event } from "../entities/Event";

export interface IEventService {
  getList: () => Promise<Event[]>;
  getOneById: (id: string) => Promise<Event>;
}

// factory function
export const EventService = (): IEventService => {
  const getList = async () => {
    const res = await axios.get("http://events.io/api/events");
    return Promise.resolve(res.data.events);
  };

  const getOneById = async (id: string) => {
    const res = await axios.get(`http://events.io/api/events/${id}`);
    return Promise.resolve(res.data);
  };

  return {
    getList,
    getOneById,
  };
};
