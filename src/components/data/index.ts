import { IProduct } from "../interfaces/index";
import { IFormInput } from "../interfaces/index";

export const productlist: IProduct[] = [
  {
    id: 1,
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/fqlMJ2qM/640/480",
    price: "120.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/fqlMJ2qM/640/480",
    },
  },

  {
    id: 2,
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/pJdcGJQ5/640/480",
    price: "200.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/pJdcGJQ5/640/480",
    },
  },

  {
    id: 3,
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480",
    price: "300.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480",
    },
  },
  {
    id: 4,
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/RuzsVM/640/480",
    price: "400.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/RuzsVM/640/480",
    },
  },
  {
    id: 5,
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/Ls7rgy5YnW/640/480",
    price: "500.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/Ls7rgy5YnW/640/480",
    },
  },
  {
    id: 6,
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/Ls7rgy5YnW/640/480",
    price: "500.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/Ls7rgy5YnW/640/480",
    },
  },
  {
    id: 7,
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480",
    price: "300.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480",
    },
  },
  {
    id: 8,
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480",
    price: "300.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480",
    },
  },
];

export const forminputlist: IFormInput[] = [
  {
    id: "Title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "Description",
    name: "description",
    label: "Product Description",
    type: "text",
  },

  {
    id: "ImageUrl",
    name: "imageUrl",
    label: "Product ImageUrl",
    type: "text",
  },

  {
    id: "Price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#7fff00",
  "#bdb76b",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
  "#ff0000",
];
