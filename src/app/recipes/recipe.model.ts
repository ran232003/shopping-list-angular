import { Ingedient } from '../shared/ingedient.model';

export class Recipe {
  public name: string;
  public desc: string;
  public imagePath: string;
  public ingredients: Ingedient[];
  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingedient[]
  ) {
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
