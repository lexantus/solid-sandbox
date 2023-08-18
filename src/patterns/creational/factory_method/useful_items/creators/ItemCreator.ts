import { Item } from "../Item";

export interface ItemCreator {
  new(type: unknown): Item;
}
