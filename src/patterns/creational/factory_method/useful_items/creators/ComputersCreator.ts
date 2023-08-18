import { ItemCreator } from "./ItemCreator";
import { Item } from "../Item";
import OldMacbook from "../OldMacbook";

export const COMPUTER = {
  OLD_MACBOOK_AIR: "old-macbook",
  MACBOOK_AIR: "macbook air",
} as const;

type ObjectValues<T> = T[keyof T];
type Computer = ObjectValues<typeof COMPUTER>;

class ComputersCreator implements ItemCreator {
  new(type: Computer): Item {
    switch (type) {
      case COMPUTER.OLD_MACBOOK_AIR:
        return new OldMacbook();
      case COMPUTER.MACBOOK_AIR:
        throw new Error("macbook air: Implement me!");
      default:
        throw new Error("Unknown computer type");
    }
  }
}

export default ComputersCreator;
