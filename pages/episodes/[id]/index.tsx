import { addApolloState, initializeApollo } from "apollo/client";
import {
  GetEpisodeQueryVariables,
  GetEpisodeQuery,
  GetEpisodesQuery,
} from "apollo/generated/graphql";
import { GET_EPISODES_QUERY, GET_EPISODE_QUERY } from "apollo/queries/episode";
import EpisodeDetail from "components/episode/EpisodeDetail";
import { GetStaticPropsContext } from "next";

const apolloClient = initializeApollo();

const EpisodePage = ({ id }: { id: string }) => {
  return <EpisodeDetail episodeId={id} />;
};

export const getStaticPaths = async () => {
  const {
    data: { episodes },
  } = await apolloClient.query<GetEpisodesQuery>({
    query: GET_EPISODES_QUERY,
  });

  const ids = episodes?.results?.map(episode => episode?.id);
  const paths = ids?.map(id => ({ params: { id } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  try {
    const {
      data: { episode },
    } = await apolloClient.query<GetEpisodeQuery, GetEpisodeQueryVariables>({
      query: GET_EPISODE_QUERY,
      variables: { episodeId: params?.id as string },
    });

    return addApolloState(apolloClient, {
      props: {
        id: episode?.id,
      },
      revalidate: 1,
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default EpisodePage;
