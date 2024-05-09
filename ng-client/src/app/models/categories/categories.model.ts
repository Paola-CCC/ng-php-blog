import { ICategories } from "src/app/interfaces/categories";
export class Categories implements ICategories {
  id: number;
  name: string;
  slug: string;

  constructor(id: number, name: string, slug: string) {
    this.id = id;
    this.name = name;
    this.slug = slug;
  }

}