export class Ingedient {
  public name: string;
  public amount: number;
  static num: number = 0;
  public id: number;
  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
    Ingedient.num = Ingedient.num + 1;
    this.id = Math.round(Math.random() * (100000000 - 1) + 1);
  }
}
