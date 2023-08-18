import { ItemCreator } from "./ItemCreator";
import { Item } from "../Item";
import Wife from "../Wife";

export const PERSON = {
  WIFE: "wife",
}
type ObjectValues<T> = T[keyof T];
type Person = ObjectValues<typeof PERSON>;

class PersonsCreator implements ItemCreator {
  new(person: Person): Item {
    switch (person) {
      case PERSON.WIFE:
        return new Wife();
      default:
        throw new Error("Unknown person type");
    }
  }
}

export default PersonsCreator;
