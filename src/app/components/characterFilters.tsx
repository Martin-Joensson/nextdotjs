"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CharacterFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const species = searchParams.get("species") ?? "alien";
  const size = searchParams.get("size") ?? "10";

  function updateParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams);

    params.set(key, value);

    // Reset pagination when filters change
    params.set("page", "1");

    router.push(`/blog?${params.toString()}`);
  }

  return (
    <div className="flex gap-4 my-4">
      <select
        value={species}
        onChange={(e) => updateParam("species", e.target.value)}
      >
        <option value="" defaultChecked>
          - All -
        </option>
        <option value="alien">Alien</option>
        <option value="robot">Robot</option>
        <option value="human">Human</option>
        <option value="head">Head</option>
        <option value="mutant">Mutant</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        value={size}
        onChange={(e) => updateParam("size", e.target.value)}
      >
        <option value="10">10 per page</option>
        <option value="20">20 per page</option>
        <option value="50">50 per page</option>
      </select>
    </div>
  );
}
