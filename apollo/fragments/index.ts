import { gql } from "@apollo/client";

export const CHARACTER_PREVIEW_FRAGMENT = gql`
  fragment CharacterPreview on Character {
    id
    name
    species
    status
    gender
    image
  }
`;

export const EPISODE_PREVIEW_FRAGMENT = gql`
  fragment EpisodePreview on Episode {
    id
    name
    episode
    air_date
  }
`;

export const LOCATION_PREVIEW_FRAGMENT = gql`
  fragment LocationPreview on Location {
    id
    name
    type
    dimension
  }
`;
