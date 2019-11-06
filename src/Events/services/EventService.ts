import { Event } from "../entities/Event";

export interface IEventService {
  createOne: (event: Event) => Promise<Event>;
  getList: () => Promise<Event[]>;
  getOneById: (id: string) => Promise<Event>;
  save: (event: Event) => Promise<Event>;
}
