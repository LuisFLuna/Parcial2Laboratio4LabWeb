import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer ecc520bd8883dd65635c62ca38dbd63185461ea1`
            },
        });
    }
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
