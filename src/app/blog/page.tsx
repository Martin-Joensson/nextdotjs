import Link from "next/link";
import posts from "../../../public/posts.json";

export default async function Posts() {
//   const posts = await getPosts();

  return (
    <ul>
      {posts.posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
