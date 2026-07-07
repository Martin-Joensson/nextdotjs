import posts from "../../../../public/posts.json";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.posts.filter(checkSlug)[0];

  function checkSlug(postSlug) {
    if (postSlug.slug === slug) return true;
  }

  console.log({ post });

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
