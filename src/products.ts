import { Product } from "./models/Product";

const products: Product[] = [
  {
    name: "laptop",
    price: 1200,
  },
  {
    name: "tv",
    price: 750,
  },
  {
    name: "monitor",
    price: 150,
  },
];

const calcAverageProductPrice = (array: Product[]): number => {
  if (array.length > 0) {
    let sum = 0;
    array.forEach((product) => {
      sum += product.price;
    });
    return sum / array.length;
  } else {
    return 0;
  }
};
