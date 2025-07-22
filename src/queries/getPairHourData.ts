import { gql } from "@apollo/client";

export const GET_ETH_DAI_HOURLY = gql`
query {
  pairHourDatas(
    first: 12
    orderBy: hourStartUnix
    orderDirection: desc
    where: {
      pair: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"
    }
  ) {
    hourStartUnix
    reserve0
    reserve1
    hourlyVolumeUSD
  }
}

`;