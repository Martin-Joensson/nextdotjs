import Image from "next/image";
import Button from "./button";
import { getStatusStyle } from "../utils/getStatusStyle";
import { getGenderStyle } from "../utils/getGenderStyle";

interface CardProps {
  char: {
    id?: number;
    name: string;
    gender?: string;
    status?: string;
    species?: string;
    createdAt?: string;
    image: string | null;
  };
}

export default function Card({ char }: CardProps) {
  const tagStyle = "text-sm rounded-lg py-1 px-3 text-center";

  return (
    <>
      <h3 className="font-rubik font-bold"> {char.name}</h3>
      <Button
        text="Read More"
        linkString={`/blog/${char.id}`}
        className="bg-teal-500/50 border hover:scale-105 transition-transform border-teal-200 hover:bg-teal-500/70 font-bold px-4 py-2 rounded-xl"
      />

      <Image
        className="order-first aspect-square max-h-60 min-w-0 w-full object-cover object-top overflow-hidden  rounded-lg rounded-br-[125px]"
        src={char.image ? char.image : "https://placehold.net/400x400.png"}
        alt={char.name}
        width={400}
        height={400}
        unoptimized={char.image ? true : false}
      />
      <div className="flex gap-2">
        <span className={`${tagStyle} + ${getStatusStyle(char)}`}>
          {char.status}
        </span>
        <span className={`${tagStyle} + ${getGenderStyle(char)}`}>
          {char.gender}
        </span>
        <span className={`${tagStyle}`}>{char.species}</span>
      </div>
    </>
  );
}
