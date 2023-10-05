import React, { useState } from "react";
import { useCharacterSearch } from "../hooks/useCharacterSearch";

function CharacterSearch() {
  const [searchText, setSearchText] = useState("");
  const { loading, data, error, search } = useCharacterSearch();

  const handleSearch = () => {
    if (searchText) {
      search(searchText);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="好きなキャラを検索しよう"
      />
      <button onClick={handleSearch}>検索</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data && data.Character && (
        <div>
          <h2>Name: {data.Character.name.full}</h2>
          <img src={data.Character.image.medium} alt="Character Image" />
          <p>
            Date of Birth: {data.Character.dateOfBirth.year}-
            {data.Character.dateOfBirth.month}-{data.Character.dateOfBirth.day}
          </p>
          <a
            href={data.Character.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            More Info
          </a>
        </div>
      )}
    </div>
  );
}

export default CharacterSearch;
