import { gql } from "apollo-server-lambda";

export default gql`
  query Test {
    test {
      id
      name
    }
  }
`;
