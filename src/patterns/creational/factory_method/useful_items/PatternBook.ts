import { Item } from './Item';

class PatternBook implements Item {
  use(description: string): void {
    console.log('Read: ', description);
  }
  say(comment: string): void {
    console.log(comment);
  }
}

export default PatternBook;
