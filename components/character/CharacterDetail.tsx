import { Grid } from "@mantine/core";
import { Character } from "apollo/generated/graphql";
import EpisodeCard from "components/episode/EpisodeCard";
import Loading from "components/shared/Loading";
import useCharacter from "hooks/character/useCharacter";
import CharacterProfile from "./CharacterProfile";

const CharacterDetail = ({ characterId }: { characterId: string }) => {
  const { data, loading } = useCharacter({ characterId });
  if (loading) {
    <Loading />;
  }
  if (data?.character) {
    const { character } = data;
    return (
      <Grid>
        <Grid.Col md={4} sm={12}>
          <CharacterProfile character={character as Character} />
        </Grid.Col>
        <Grid.Col md={8} sm={12}>
          {character.episode.map(episode => (
            <EpisodeCard episode={episode} key={episode?.id} />
          ))}
        </Grid.Col>
      </Grid>
    );
  } else {
    return null;
  }
};

export default CharacterDetail;
