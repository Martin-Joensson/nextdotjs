export async function getCharacters(page = 1, limit = 8, species = "alien") {
  const fetchedData = await fetch(
    `https://futuramaapi.com/api/characters?species=${species}&orderBy=id&orderByDirection=asc&page=${page}&size=${limit}`,
  );

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
