import Link from "next/link";
import { Character } from "../types/character";
import { getCharacter, getCharacters } from "../data/characters";

type Props = {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    species?: string;
  }>;
};

export default async function Posts({ searchParams }: Props) {
  const params = await searchParams;

  const page = Number(params.page ?? "1");
  const limit = Number(params.limit ?? "10");
  const species = params.species ?? "alien";

  const data = await getCharacters(page, limit, species);

  const characters: Character[] = data.items;
  const totalPages = data.pages;

  console.log(totalPages);

  const getGenderStyle = (char: Character) => {
    switch (char.gender?.toLowerCase()) {
      case "male":
        return "bg-blue-300 text-black";
      case "female":
        return "bg-red-200 text-black";
      default:
        return "bg-zinc-400";
    }
  };

  const getStatusStyle = (char: Character) => {
    switch (char.status?.toLowerCase()) {
      case "alive":
        return "bg-teal-400 text-black";
      case "dead":
        return "bg-zinc-900 text-red-400 outline-2 outline-red-500";
      default:
        return "bg-zinc-400";
    }
  };

  const tagStyle = "text-sm rounded-lg py-1 px-3 text-center outline-2";
  const buttonStyle =
    "bg-zinc-800 my-4 px-4 rounded-lg border hover:bg-teal-500";

  return (
    <div className="pt-16 ">
      <div className="flex justify-center gap-6">
        {page > 1 ? (
          <Link
            className={buttonStyle}
            href={`/blog?page=${page - 1}&species=${species}`}
          >
            Previous
          </Link>
        ) : (
          <span className={`opacity-50 ${buttonStyle}`}>Previous</span>
        )}
        {page < totalPages ? (
          <Link
            className={buttonStyle}
            href={`/blog?page=${page + 1}&species=${species}`}
          >
            Next
          </Link>
        ) : (
          <span className={`opacity-50 ${buttonStyle}`}>Next</span>
        )}
      </div>
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
                  className={`basis-1/3 shrink  ${tagStyle} ${getStatusStyle(post)}`}
                >
                  {post.status}
                </span>
                <span
                  className={` basis-1/3 shrink ${tagStyle} ${getGenderStyle(post)}`}
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
