import { notFound, redirect } from "next/navigation";
import NotFound from "../blog/[slug]/not-found";

export async function getCharacters(page = 1, size = 8, species = "") {
  const url = new URL("https://futuramaapi.com/api/characters");

  url.searchParams.set("page", page.toString());
  url.searchParams.set("size", size.toString());
  if (species) {
    url.searchParams.set("species", species.toString());
  }

  const fetchedData = await fetch(url);

  const json = await fetchedData.json();

  if (!fetchedData.ok) {
    throw new Error("Error in request");
  }

  const res = json;
  return await res;
}

export async function getCharacter(id: string) {
  const response = await fetch(`https://futuramaapi.com/api/characters/${id}`);
  console.log(response);

  if (response.status > 400) {
    notFound();
  }

  // if (!response.ok) {
  //   throw new Error(`Failed to fetch character (${response.status})`);
  // }

  return await response.json();
}
