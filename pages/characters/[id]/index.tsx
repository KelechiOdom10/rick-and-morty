import { addApolloState, initializeApollo } from "apollo/client";
import {
  GetCharacterQuery,
  GetCharacterQueryVariables,
  GetCharactersQuery,
} from "apollo/generated/graphql";
import {
  GET_CHARACTERS_QUERY,
  GET_CHARACTER_QUERY,
} from "apollo/queries/character";
import CharacterDetail from "components/character/CharacterDetail";
import { GetStaticPropsContext } from "next";

const apolloClient = initializeApollo();

const CharacterPage = ({ id }: { id: string }) => {
  return <CharacterDetail characterId={id} />;
};

export const getStaticPaths = async () => {
  const {
    data: { characters },
  } = await apolloClient.query<GetCharactersQuery>({
    query: GET_CHARACTERS_QUERY,
  });

  const ids = characters?.results?.map(character => character?.id);
  const paths = ids?.map(id => ({ params: { id } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  try {
    const {
      data: { character },
    } = await apolloClient.query<GetCharacterQuery, GetCharacterQueryVariables>(
      {
        query: GET_CHARACTER_QUERY,
        variables: { characterId: params?.id as string },
      }
    );

    return addApolloState(apolloClient, {
      props: {
        id: character?.id,
      },
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default CharacterPage;
