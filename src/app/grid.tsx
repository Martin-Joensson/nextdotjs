import data from "@/app/data/characters.json";
import Image from "next/image";
import Button from "./components/button";

export default function Grid() {
  const { page, pages, items: characters } = data;

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
            <h3 className="font-rubik font-bold"> {char.name}</h3>
            <Button
              text="Läs mer"
              linkString="#"
              className="bg-teal-500/50 border border-teal-200 hover:bg-teal-500/70 font-bold px-4 py-2 rounded-xl"
            />

            <Image
              className="order-first aspect-square object-cover w-full rounded-lg rounded-br-[125px] object-top"
              src={
                char.image ? char.image : "https://placehold.net/400x400.png"
              }
              alt={char.name}
              width={400}
              height={400}
              unoptimized={char.image ? true : false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
