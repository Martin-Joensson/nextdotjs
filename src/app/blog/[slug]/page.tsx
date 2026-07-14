import Image from "next/image";
import posts from "../../../../public/posts.json";
import characters from "@/app/data/characters.json";
import { capitalize } from "@/app/utils/capitalize";
import { notFound } from "next/navigation";
import { getCharacter } from "@/app/data/characters";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { slug: idStr } = await params;

//   console.log(idStr);
//   // convert and check for invalid ids
//   const id = Number(idStr);
//   const character = characters.items[id - 1];

//   if (!id) {
//     return null;
//   }

//   if (!character) {
//     return null;
//   }

//   return { title: `${character.name} - Futurama ` };
// }

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // const post = characters.items.filter(checkSlug)[0];
  
  const post = await getCharacter(slug);

  function checkSlug(postSlug) {
    if (postSlug.id.toString() === slug) return true;
  }

  if (!post) return notFound();

  const tagStyle = "text-sm rounded-lg py-1 px-3 text-center outline-2";

  let genderStyle = "bg-zinc-400";
  const checkGender = (char) => {
    if (char.gender?.toLowerCase() === "male")
      genderStyle = "bg-blue-300 text-black";
    if (char.gender?.toLowerCase() === "female")
      genderStyle = "bg-red-200 text-black";
  };

  let statusStyle = "bg-zinc-400";
  const checkStyle = (char) => {
    if (char.status?.toLowerCase() === "dead")
      statusStyle = "bg-zinc-900 text-red-400 outline-2 outline-red-500";
    if (char.status?.toLowerCase() === "alive")
      statusStyle = "bg-teal-400 text-black";
    if (char.status?.toLowerCase() === "unknown")
      statusStyle = "bg-zinc-400 text-black";
  };


  return (
    <div className="bg-zinc-900 flex p-4 justify-between pt-20 ">
      <div className="flex flex-col gap-4 sm:flex-row justify-between w-7xl mx-auto">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="font-bold font-rubik text-3xl">{post.name}</h2>
          <p>{capitalize(post?.species)}</p>
          <div className="flex gap-2">
            <span
              className={`${tagStyle} + ${checkStyle(post)} ${statusStyle}`}
            >
              {post.status}
            </span>
            <span
              className={`${tagStyle} + ${checkGender(post)} ${genderStyle}`}
            >
              {post.gender}
            </span>
            <span className={`${tagStyle}`}>{post.species}</span>
          </div>
          <h3 className="font-bold text-xl mt-6">Description</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            voluptatum nisi magni sint numquam. Dolore ducimus porro illo
            repellat odio distinctio facilis, ipsam, voluptate consectetur
            consequatur sint dignissimos esse. Id dolorum, ea consequuntur,
            cumque quae facere debitis eveniet ex delectus deleniti neque ut,
            tenetur veniam rerum omnis dicta. Nulla, nobis.
          </p>
        </div>
        {post.image && (
          <Image
            className="rounded-2xl  object-cover"
            src={post.image}
            width={600}
            height={600}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
