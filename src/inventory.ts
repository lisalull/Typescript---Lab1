import { InventoryItem } from "./models/InventoryItem";

const inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

const calcInventoryValue = (array: InventoryItem[]): number => {
  if (array.length > 0) {
    let totalValue = 0;
    array.forEach((item) => {
      totalValue += item.product.price * item.quantity;
    });
    return totalValue;
  } else {
    return 0;
  }
};
