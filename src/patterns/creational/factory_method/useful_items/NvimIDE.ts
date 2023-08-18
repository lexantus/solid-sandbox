import { Item } from "./Item";

class NvimIDE implements Item {
  use(description: string): void {
    console.log(description);
  }
  say(comment: string): void {
    console.log(comment);
  }
}

export default NvimIDE;
