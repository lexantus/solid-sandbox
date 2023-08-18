// import Wife from "./Wife";
import PersonsCreator, { Person } from "./PersonsCreator";

class GoForAWalkContext {
  constructor() {
    const wife = PersonsCreator.new(Person.WIFE); // new Wife();
    wife.say("Really funny joke to remember");
  }
}

new GoForAWalkContext();
