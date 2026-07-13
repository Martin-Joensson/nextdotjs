import Image from "next/image";
import posts from "../../../../public/posts.json";
import characters from "@/app/data/characters.json";
import { capitalize } from "@/app/utils/capitalize";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = characters.items.filter(checkSlug)[0];

  function checkSlug(postSlug) {
    // console.log("Inside checkSlug:", postSlug);
    if (postSlug.id.toString() === slug) return true;
  }

  if (!post) return notFound();

  return (
    <div className="bg-red-500 pt-16">
      <h1 className="font-bold font-rubik text-3xl">{post.name}</h1>
      <p>{capitalize(post?.species)}</p>
      {post.image && <Image src={post.image} width={600} height={600} alt="" />}
    </div>
  );
}
