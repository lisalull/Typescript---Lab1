import { Mountain } from "./models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (mountains: Mountain[]): string => {
  if (mountains.length > 0) {
    let tallest = mountains[0];
    mountains.forEach((mountain) => {
      if (mountain.height > tallest.height) {
        tallest = mountain;
      }
    });
    return tallest.name;
  } else {
    return "";
  }
};
