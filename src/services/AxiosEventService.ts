import axios from "axios";
import { IEventService } from "./EventService";

// factory function
export const AxiosEventService = (): IEventService => {
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
