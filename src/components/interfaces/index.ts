export interface IProduct {
  id?: number;
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
  name: "title" | "description" | "imageUrl" | "price";
  type: string;
  label: string;
}
