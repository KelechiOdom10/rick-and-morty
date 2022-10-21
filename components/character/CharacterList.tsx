import { useQuery } from "@apollo/client";
import { SimpleGrid } from "@mantine/core";
import { GetCharactersQuery } from "apollo/generated/graphql";
import { GET_CHARACTERS_QUERY } from "apollo/queries/character";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const { data } = useQuery<GetCharactersQuery>(GET_CHARACTERS_QUERY);

  return (
    <SimpleGrid
      pt={16}
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 1025, cols: 3, spacing: "md" },
        { maxWidth: 800, cols: 2, spacing: "md" },
        { maxWidth: 600, cols: 1, spacing: "sm" },
      ]}
    >
      {data &&
        data.characters?.results?.map((character, index) => (
          <CharacterCard character={character} key={index} />
        ))}
    </SimpleGrid>
  );
};

export default CharacterList;
