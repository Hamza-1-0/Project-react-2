import { ICategories, IProduct } from "../interfaces/index";
import { IFormInput } from "../interfaces/index";
import { v4 as uuidv4 } from "uuid";

export const productlist: IProduct[] = [
  {
    id: uuidv4(),
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/fqlMJ2qM/640/480.jpg",
    price: "120.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/fqlMJ2qM/640/480.jpg",
    },
  },

  {
    id: uuidv4(),
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/pJdcGJQ5/640/480.jpg",
    price: "200.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b", "#800000"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/pJdcGJQ5/640/480.jpg",
    },
  },

  {
    id: uuidv4(),
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480.jpg",
    price: "300.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/RuzsVM/640/480.jpg",
    price: "400.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/RuzsVM/640/480.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/Ls7rgy5YnW/640/480.jpg",
    price: "500.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/Ls7rgy5YnW/640/480.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/Ls7rgy5YnW/640/480.jpg",
    price: "500.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/Ls7rgy5YnW/640/480.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480.jpg",
    price: "300.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Modern Plastic Computer",
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480.jpg",
    price: "300.00",
    colors: ["#7fff00", "#00ffff", "#bdb76b"],
    category: {
      name: "car",
      imageUrl: "https://picsum.photos/seed/VQkR5JH/640/480.jpg",
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

export const categories: ICategories[] = [
  {
    id: uuidv4(),
    name: "Wade Cooper",
    imageUrl:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80.jpg",
  },
  {
    id: uuidv4(),
    name: "Arlene Mccoy",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80.jpg",
  },
  {
    id: uuidv4(),
    name: "Devon Webb",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80.jpg",
  },
  {
    id: uuidv4(),
    name: "Tom Cook",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80.jpg",
  },
  {
    id: uuidv4(),
    name: "Tanya Fox",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80.jpg",
  },
  {
    id: uuidv4(),
    name: "Hellen Schmidt",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80.jpg",
  },
];
