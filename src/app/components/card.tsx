import Image from "next/image";
import Button from "./button";

interface CardProps {
  id?: number;
  name: string;
  gender?: string;
  status?: string;
  species?: string;
  createdAt?: string;
  image: string | null;
}

export default function Card({ name, image, gender }: CardProps) {
  let tagStyle = "bg-green-400 text-white rounded text-center";

  if (gender?.toLowerCase() === "dead") {
    tagStyle = "bg-red-400 text-white rounded text-center";
  }

  if (gender?.toLowerCase() === "unknown") {
    tagStyle = "bg-zinc-400 text-white rounded text-center";
  }
  return (
    <>
      <h3 className="font-rubik font-bold"> {name}</h3>
      <Button
        text="Läs mer"
        linkString="#"
        className="bg-teal-500/50 border border-teal-200 hover:bg-teal-500/70 font-bold px-4 py-2 rounded-xl"
      />

      <Image
        className="order-first aspect-square object-cover w-full rounded-lg rounded-br-[125px] object-top"
        src={image ? image : "https://placehold.net/400x400.png"}
        alt={name}
        width={400}
        height={400}
        unoptimized={image ? true : false}
      />
      <div className={tagStyle}>{gender}</div>
    </>
  );
}
