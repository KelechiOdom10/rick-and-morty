import { gql } from "@apollo/client";
import {
  CHARACTER_PREVIEW_FRAGMENT,
  EPISODE_PREVIEW_FRAGMENT,
  LOCATION_PREVIEW_FRAGMENT,
} from "apollo/fragments";
import { INFO_FRAGMENT } from "./info";

export const GET_CHARACTER_QUERY = gql`
  query GetCharacter($characterId: ID!) {
    character(id: $characterId) {
      ...CharacterPreview
      origin {
        ...LocationPreview
      }
      location {
        ...LocationPreview
      }
      episode {
        ...EpisodePreview
      }
    }
  }

  ${CHARACTER_PREVIEW_FRAGMENT}
  ${LOCATION_PREVIEW_FRAGMENT}
  ${EPISODE_PREVIEW_FRAGMENT}
`;

export const GET_CHARACTERS_QUERY = gql`
  query GetCharacters {
    characters {
      info {
        ...InfoDetails
      }
      results {
        ...CharacterPreview
      }
    }
  }

  ${INFO_FRAGMENT}
  ${CHARACTER_PREVIEW_FRAGMENT}
`;
