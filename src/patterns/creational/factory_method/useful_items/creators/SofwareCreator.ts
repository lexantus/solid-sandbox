import { ItemCreator } from "./ItemCreator";
import { Item } from "../Item";
import NvimIDE from "../NvimIDE";

export const SOFTWARE = {
  NvimIDE: "nvimIDE",
} as const;

type ObjectValues<T> = T[keyof T];
type Software = ObjectValues<typeof SOFTWARE>;

class SoftwareCreator implements ItemCreator {
  create(type: Software): Item {
    switch (type) {
      case SOFTWARE.NvimIDE:
        return new NvimIDE();
      default:
        throw new Error("Unknown software type");
    }
  }
}

export default SoftwareCreator;
