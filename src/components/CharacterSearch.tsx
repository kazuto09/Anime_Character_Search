import React, { useState } from "react";
import { Chip, Input } from "@mui/material";
import { Button } from "@mui/material";
import { Tooltip } from "@mui/material";
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
      <Input
        type="text"
        value={searchText}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setSearchText(e.target.value)
        }
        placeholder="Typing AnimeCharacter"
      />
      <Button onClick={handleSearch}>Search</Button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data && data.Character && (
        <div>
          <h2>Name: {data.Character.name.full}</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={data.Character.image.medium} alt="Character Image" />
          </div>
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
          {/* <div style={{ marginTop: "5px" }}>
            <Tooltip
              title="The result of Search depends on Anilist API.
              Due to partial matching rather than exact matching, 
              there is a possibility of unexpected results. "
              placement="right-start"
            >
              <Chip label="About Results" color="warning" variant="outlined" />
            </Tooltip>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default CharacterSearch;
