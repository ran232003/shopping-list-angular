import { Ingedient } from '../shared/ingedient.model';

export class Recipe {
  public name: string;
  public desc: string;
  public imagePath: string;
  public ingredients: Ingedient[];
  static classId: number = 0;
  public id;
  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingedient[]
  ) {
    console.log('cont');
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    Recipe.classId = Recipe.classId + 1;
    this.id = Recipe.classId;
  }
  getId() {
    return Recipe.classId;
  }
}
