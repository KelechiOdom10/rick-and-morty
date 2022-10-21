import { gql } from "@apollo/client";
import {
  CHARACTER_PREVIEW_FRAGMENT,
  LOCATION_PREVIEW_FRAGMENT,
} from "apollo/fragments";
import { INFO_FRAGMENT } from "./info";

export const GET_LOCATION_QUERY = gql`
  query GetLocation($locationId: ID!) {
    location(id: $locationId) {
      ...LocationPreview
      residents {
        ...CharacterPreview
      }
    }
  }

  ${CHARACTER_PREVIEW_FRAGMENT}
  ${LOCATION_PREVIEW_FRAGMENT}
`;

export const GET_LOCATIONS_QUERY = gql`
  query GetLocations {
    locations {
      info {
        ...InfoDetails
      }
      results {
        ...LocationPreview
      }
    }
  }

  ${LOCATION_PREVIEW_FRAGMENT}
  ${INFO_FRAGMENT}
`;
