import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/subgraph", // goes through local proxy
    cache: new InMemoryCache(),
});

export default client;
