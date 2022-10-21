import { gql } from "@apollo/client";
import {
  EPISODE_PREVIEW_FRAGMENT,
  CHARACTER_PREVIEW_FRAGMENT,
} from "apollo/fragments";
import { INFO_FRAGMENT } from "./info";
export const GET_EPISODE_QUERY = gql`
  query GetEpisode($episodeId: ID!) {
    episode(id: $episodeId) {
      ...EpisodePreview
      characters {
        ...CharacterPreview
      }
    }
  }

  ${EPISODE_PREVIEW_FRAGMENT}
  ${CHARACTER_PREVIEW_FRAGMENT}
`;

export const GET_EPISODES_QUERY = gql`
  query GetEpisodes {
    episodes {
      info {
        ...InfoDetails
      }
      results {
        ...EpisodePreview
      }
    }
  }

  ${EPISODE_PREVIEW_FRAGMENT}
  ${INFO_FRAGMENT}
`;
