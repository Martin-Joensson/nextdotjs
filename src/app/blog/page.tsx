import Link from "next/link";
import characters from "@/app/data/characters.json";
import { Character } from "../types/character";
import { getCharacter, getCharacters } from "../data/characters";

export default async function Posts() {
  const page = 1;
  const limit = 100;
  const species = "robot"
  const characters: Character[] = await getCharacters(page, limit, species);

  const tagStyle = "text-sm rounded-lg py-1 px-3 text-center outline-2";

  let genderStyle = "bg-zinc-400";
  const checkGender = (char: Character) => {
    if (char.gender?.toLowerCase() === "male")
      genderStyle = "bg-blue-300 text-black";
    if (char.gender?.toLowerCase() === "female")
      genderStyle = "bg-red-200 text-black";
  };

  let statusStyle = "bg-zinc-400";
  const checkStyle = (char: Character) => {
    if (char.status?.toLowerCase() === "dead")
      statusStyle = "bg-zinc-900 text-red-400 outline-2 outline-red-500";
    if (char.status?.toLowerCase() === "alive")
      statusStyle = "bg-teal-400 text-black";
    if (char.status?.toLowerCase() === "unknown")
      statusStyle = "bg-zinc-400 text-black";
  };

  return (
    <div className="pt-16 ">
      <ul className="flex flex-col gap-2">
        {characters.map((post) => (
          <li key={post.id} className="border-b py-2 px-2 hover:bg-zinc-600">
            <Link
              className="flex flex-col sm:flex-row justify-between"
              href={`/blog/${post.id}`}
            >
              <span>{post.name}</span>
              <div className="flex w-88 gap-2">
                <span
                  className={`basis-1/3 shrink  ${tagStyle} + ${checkStyle(post)} ${statusStyle}`}
                >
                  {post.status}
                </span>
                <span
                  className={` basis-1/3 shrink ${tagStyle} + ${checkGender(post)} ${genderStyle}`}
                >
                  {post.gender}
                </span>
                <span className={` basis-1/3 shrink ${tagStyle}`}>
                  {post.species}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
