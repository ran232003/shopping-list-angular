export class Ingedient{
  public  name:string;
    public amount:number;
    public id:number
    constructor(name:string,amount:number){
        this.name = name;
        this.amount = amount;
        this.id = Math.random();
    }
}