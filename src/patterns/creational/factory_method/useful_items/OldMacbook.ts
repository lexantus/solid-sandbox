import { Item } from "./Item";

class OldMacBook implements Item {
  private _price: number = 0;

  public use(reason: string) {
    console.log(`Using old macbook: ${reason}`);
  }
  public say(comment: string) {
    console.log(comment);
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
}

export default OldMacBook;
