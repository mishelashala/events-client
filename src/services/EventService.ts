import { Event } from "../entities/Event";

export interface IEventService {
  getList: () => Promise<Event[]>;
  getOneById: (id: string) => Promise<Event>;
}
