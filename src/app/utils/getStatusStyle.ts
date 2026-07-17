import { Character } from "../types/character";

export const getStatusStyle = (char: Character) => {
  switch (char.status?.toLowerCase()) {
    case "alive":
      return "bg-teal-400 text-black";
    case "dead":
      return "bg-zinc-900 text-red-400 outline-2 outline-red-500";
    default:
      return "bg-zinc-400";
  }
};
