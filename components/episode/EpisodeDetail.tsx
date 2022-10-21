import { useQuery } from "@apollo/client";
import { Box, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import {
  GetEpisodeQuery,
  GetEpisodeQueryVariables,
} from "apollo/generated/graphql";
import { GET_EPISODE_QUERY } from "apollo/queries/episode";
import CharacterCard from "components/character/CharacterCard";

const EpisodeDetail = ({ episodeId }: { episodeId: string }) => {
  const { data } = useQuery<GetEpisodeQuery, GetEpisodeQueryVariables>(
    GET_EPISODE_QUERY,
    { variables: { episodeId } }
  );
  if (data?.episode) {
    const { episode } = data;
    return (
      <Box>
        <Box
          sx={t => ({
            backgroundColor: t.colors.dark[6],
            borderRadius: t.radius.md,
          })}
          p={24}
          mb={12}
        >
          <Stack>
            <Text weight={500}>{episode?.name}</Text>
            <Text size="sm" color="dimmed">
              {episode?.episode} - {episode.air_date}
            </Text>
          </Stack>
        </Box>
        <Box pt={4}>
          <Title order={4} sx={{ lineHeight: 1.2 }} pb={8}>
            Characters
          </Title>
          <SimpleGrid
            cols={4}
            spacing="lg"
            breakpoints={[
              { maxWidth: 1025, cols: 3, spacing: "md" },
              { maxWidth: 800, cols: 2, spacing: "md" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
            {episode.characters.map(character => (
              <CharacterCard character={character} key={character?.id} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
};

export default EpisodeDetail;
