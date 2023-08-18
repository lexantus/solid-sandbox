import ComputersCreator, { COMPUTER } from './creators/ComputersCreator';
import PersonsCreator, { PERSON } from './creators/PersonsCreator';
import BooksCreator, { BOOK } from './creators/BooksCreator';
import SoftwareCreator, { SOFTWARE } from './creators/SofwareCreator';

class App {
  constructor() {
    const computerCreator = new ComputersCreator();
    const personCreator = new PersonsCreator();
    const booksCreator = new BooksCreator();
    const softwareCreator = new SoftwareCreator();

    const macBook = computerCreator.new(COMPUTER.OLD_MACBOOK_AIR); // new OldMacbook();
    const patternBook = booksCreator.new(BOOK.PATTERN); // new PatternBook();
    const nvim = softwareCreator.new(SOFTWARE.NvimIDE);// new NvimIDE();
    const wife = personCreator.new(PERSON.WIFE);

    macBook.use('Try to use it as a storage');
    macBook.use('Create new user alex_backup');
    macBook.use('Turn on WIFI network');
    macBook.use('Close');
    macBook.say('It\'s painful to use. Display sucks!');

    patternBook.use('about factory_method');
    
    nvim.use('go to solid-sandbox project');
    nvim.use('implement factory_method pattern');
    nvim.say('I\'d like to change color scheme');

    patternBook.use('I don\'t understand this idea: here there is an idea');

    wife.say('Really tasty pepermint tea');
  }
}

new App();
