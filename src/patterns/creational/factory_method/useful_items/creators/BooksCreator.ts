import { ItemCreator } from './ItemCreator';
import { Item } from '../Item';
import PatternBook from '../PatternBook';


export const BOOK = {
  PATTERNS: 'patterns',
} as const;

type ObjectValues<T> = T[keyof T];
type Book = ObjectValues<typeof BOOK>;

class BooksCreator implements ItemCreator {
  new(type: Book): Item {
    switch (type) {
      case BOOK.PATTERNS:
        return new PatternBook();
      default:
        throw new Error('Unknown book type');
    }
  }
}

export default BooksCreator;
