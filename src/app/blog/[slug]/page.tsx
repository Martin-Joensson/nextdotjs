import Image from "next/image";
import posts from "../../../../public/posts.json";
import characters from "@/app/data/characters.json";
import { capitalize } from "@/app/utils/capitalize";
import { notFound } from "next/navigation";
import { getCharacter } from "@/app/data/characters";
import type { Character } from "@/app/types/character";
import Link from "next/link";
import { getStatusStyle } from "@/app/utils/getStatusStyle";
import { getGenderStyle } from "@/app/utils/getGenderStyle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: idStr } = await params;
  const character = await getCharacter(idStr);

  if (!idStr) {
    return null;
  }

  if (!character) {
    return null;
  }

  return { title: `${character.name} - Futurama ` };
}

export default async function BlogPostPage({
  params, searchParams
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    page?: string;
    species?: string;
    size?: string;
  }>;
}) {
  const { slug } = await params;
  const filters = await searchParams;

  const backUrl = `/blog?page=${filters.page ?? 1}&species=${filters.species ?? ""}&size=${filters.size ?? 10}`

  const post = await getCharacter(slug);

  if (!post) return notFound();


  const tagStyle = "text-sm rounded-lg py-1 px-3 text-center outline-2";
  const buttonStyle =
    "bg-zinc-800 my-4 px-4 rounded-lg border text-center self-end hover:bg-teal-500";

  return (
    <div className="bg-zinc-900 flex p-4 justify-between pt-20 ">
      <div className="flex flex-col gap-4 md:flex-row justify-between w-7xl mx-auto">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="font-bold font-rubik text-3xl">{post.name}</h2>
          <p>{capitalize(post?.species)}</p>
          <div className="flex gap-2">
            <span className={`${tagStyle} +  ${getStatusStyle(post)}`}>
              {post.status}
            </span>
            <span className={`${tagStyle} +  ${getGenderStyle(post)}`}>
              {post.gender}
            </span>
            <span className={`${tagStyle}`}>{post.species}</span>
            <span className={`${tagStyle}`}>Id: #{post.id}</span>
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

          <Link href={backUrl} className={buttonStyle}>
            Back
          </Link>
        </div>
        {post.image && (
          <Image
            className="rounded-2xl w-auto h-auto object-cover"
            src={post.image}
            width={600}
            height={600}
            alt=""
            loading="eager"
          />
        )}
      </div>
    </div>
  );
}
