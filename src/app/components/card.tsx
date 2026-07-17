import Image from "next/image";
import Button from "./button";

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

  let genderStyle = "bg-zinc-400";
  if (char.gender?.toLowerCase() === "male")
    genderStyle = "bg-blue-300 text-black";
  if (char.gender?.toLowerCase() === "female")
    genderStyle = "bg-red-200 text-black";

  let statusStyle = "bg-zinc-400";
  if (char.status?.toLowerCase() === "dead")
    statusStyle = "bg-zinc-900 text-red-400";
  if (char.status?.toLowerCase() === "alive")
    statusStyle = "bg-teal-400 text-black";

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
        <span className={`${tagStyle} + ${statusStyle}`}>{char.status}</span>
        <span className={`${tagStyle} + ${genderStyle}`}>{char.gender}</span>
        <span className={`${tagStyle}`}>{char.species}</span>
      </div>
    </>
  );
}
