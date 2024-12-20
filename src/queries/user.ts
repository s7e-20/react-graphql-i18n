import { gql } from "@apollo/client";

export const GET_USER_QUERY = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
    }
  }
`;
