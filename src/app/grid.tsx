import data from "@/app/data/characters.json";
import Image from "next/image";
import Button from "./components/button";
import Card from "./components/card";
import { getCharacters } from "./data/characters";

export default async function Grid() {
  const page = 1;
  const limit = 20;
  const fetchedData = await getCharacters(page, limit);
  console.log(fetchedData);
  // const limit = 8;
  // const page = 1;
  const characters = fetchedData;

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold font-rubik">Crew and Characters</h2>
        <p>Who can you expect to meet?</p>
      </div>
      <ul className=" grid grid-cols-[repeat(auto-fill,minmax(30ch,1fr))] gap-4">
        {characters.map((char) => (
          <li
            key={char.id}
            className=" bg-zinc-800 grid *:not-[img]:m-4 border rounded-lg border-amber-500 "
          >
            <Card char={char} />
          </li>
        ))}
      </ul>
    </div>
  );
}
