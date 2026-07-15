export async function getCharacters(page = 1, size = 8, species = "") {
  const url = new URL("https://futuramaapi.com/api/characters");

  // ?species=${species}&orderBy=id&orderByDirection=asc&page=${page}&size=${limit}`,

  url.searchParams.set("page", page.toString());
  url.searchParams.set("size", size.toString());
  if (species) {
    url.searchParams.set("species", species.toString());
  }

  const fetchedData = await fetch(url);

  const json = await fetchedData.json();
  console.log(json);

  if (!fetchedData.ok) throw new Error("Error in request");

  const res = json;
  console.log("Res: ", res);
  return await res;
}

export async function getCharacter(id: string) {
  const fetchedData = await fetch(
    `https://futuramaapi.com/api/characters/${id}`,
  );
  const json = await fetchedData.json();
  console.log(json);

  if (!fetchedData.ok) throw new Error("Error in request");
  const res = json;
  console.log("Res: ", res);
  return await res;
}
