import { GET_CHARACTERS_QUERY } from "apollo/queries/character";
import { GetCharactersQuery } from "apollo/generated/graphql";
import { addApolloState, initializeApollo } from "apollo/client";
import CharacterList from "components/character/CharacterList";

const CharactersPage = () => {
  return <CharacterList />;
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query<GetCharactersQuery>({
      query: GET_CHARACTERS_QUERY,
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

export default CharactersPage;
