import { Character } from "../types/character";

export const getGenderStyle = (char: Character) => {
  switch (char.gender?.toLowerCase()) {
    case "male":
      return "bg-blue-300 text-black";
    case "female":
      return "bg-red-200 text-black";
    default:
      return "bg-zinc-400";
  }
};