import { useQuery } from "@apollo/client";
import {
  GetCharacterQuery,
  GetCharacterQueryVariables,
} from "apollo/generated/graphql";
import { GET_CHARACTER_QUERY } from "apollo/queries/character";

const useCharacter = ({ characterId }: { characterId: string }) => {
  const queryInfo = useQuery<GetCharacterQuery, GetCharacterQueryVariables>(
    GET_CHARACTER_QUERY,
    { variables: { characterId } }
  );

  return { ...queryInfo };
};

export default useCharacter;
