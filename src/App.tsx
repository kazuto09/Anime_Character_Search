// App.tsx
import React from "react";
import CharacterSearch from "./components/CharacterSearch";

function App() {
  return (
    <div>
      <h1>AniList Free GraphQl Endpoint </h1>
      <h3>https://graphql.anilist.co</h3>
      <CharacterSearch />
    </div>
  );
}
export default App;
