import { Item } from "./Item";

class Wife implements Item {
  use(description: string): void {
    console.log(`[ask wife to]: ${description} `);
  }
  say(comment: string): void {
    console.log(`me: ${comment}`);
  }
}

export default Wife;
