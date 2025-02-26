import { productNameTypes } from "../Types";

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}

export interface IFormInput {
  id: string;
  name: productNameTypes;
  type: string;
  label: string;
}

export interface ICategories {
  id: string;
  name: string;
  imageUrl: string;
}
