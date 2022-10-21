import { useQuery } from "@apollo/client";
import { SimpleGrid } from "@mantine/core";
import { GetEpisodesQuery } from "apollo/generated/graphql";
import { GET_EPISODES_QUERY } from "apollo/queries/episode";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = () => {
  const { data } = useQuery<GetEpisodesQuery>(GET_EPISODES_QUERY);

  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "md" },
        { maxWidth: 755, cols: 2, spacing: "sm" },
        { maxWidth: 600, cols: 1, spacing: "sm" },
      ]}
    >
      {data &&
        data.episodes?.results?.map((episode, index) => (
          <EpisodeCard episode={episode} key={index} />
        ))}
    </SimpleGrid>
  );
};

export default EpisodeList;
