import { useLazyQuery } from "@apollo/client";
import { gql } from "graphql-tag";

// GraphQLクエリ定義
const CHARACTER_SEARCH = gql`
  query CharacterSearch($search: String) {
    Character(search: $search) {
      name {
        full
      }
      image {
        medium
      }
      dateOfBirth {
        year
        month
        day
      }
      siteUrl
    }
  }
`;

// カスタムフック
export function useCharacterSearch() {
  const [searchCharacter, { loading, data, error }] = useLazyQuery(
    CHARACTER_SEARCH
  );

  const search = (searchText: string) => {
    searchCharacter({
      variables: {
        search: searchText
      }
    });
  };

  return {
    loading,
    data,
    error,
    search
  };
}
