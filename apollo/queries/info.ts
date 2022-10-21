import { gql } from "@apollo/client";

export const INFO_FRAGMENT = gql`
  fragment InfoDetails on Info {
    count
    pages
    next
    prev
  }
`;
