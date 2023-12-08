// App.tsx
import React from "react";
import { AppBar, Chip, Tooltip } from "@mui/material";
import CharacterSearch from "./components/CharacterSearch";

function App() {
  return (
    <React.Fragment>
      <div>
        <AppBar
          sx={{
            fontSize: "1.5rem",
            display: "flex",
            height: "75px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          AniList Free GraphQl Endpoint
          <Tooltip
            title="The result of Search depends on Anilist API.
              Due to partial matching rather than exact matching, 
              there is a possibility of unexpected results. "
            placement="right-start"
          >
            <Chip label="About Results" color="warning" />
          </Tooltip>
        </AppBar>
        <div
          style={{
            display: "flex",
            marginTop: "75px",
            justifyContent: "center",
          }}
        >
          <CharacterSearch />
        </div>
        <h4
          style={{
            display: "flex",
            paddingRight: "15px",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          <a href="https://anilist.co/graphiql">※how to use This GrapQL API </a>
        </h4>
      </div>
    </React.Fragment>
  );
}
export default App;
