import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "/subgraph/subgraphs/name/uniswap/uniswap-v2", // now uses local proxy
    cache: new InMemoryCache(),
});
export default client;
