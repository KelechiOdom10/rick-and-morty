import { addApolloState, initializeApollo } from "apollo/client";
import { GetEpisodesQuery } from "apollo/generated/graphql";
import { GET_EPISODES_QUERY } from "apollo/queries/episode";
import EpisodeList from "components/episode/EpisodeList";

const EpisodesPage = () => {
  return <EpisodeList />;
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query<GetEpisodesQuery>({
      query: GET_EPISODES_QUERY,
    });

    return addApolloState(apolloClient, {
      props: {},
      revalidate: 1,
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default EpisodesPage;
