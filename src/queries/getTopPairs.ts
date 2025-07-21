import { gql } from "@apollo/client";

export const GET_TOP_PAIRS = gql`
  {
    pairs(first: 10, orderBy: volumeUSD, orderDirection: desc) {
      id
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      volumeUSD
      reserveUSD
    }
  }
`;
