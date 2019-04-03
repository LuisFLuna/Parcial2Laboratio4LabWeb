import React, { Component } from "react";
import "./App.css";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import MyRepo from './my-repositories.js'

const query = gql`
  {
    viewer {
      name
      email
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={query}>
          {result => {
            if (result.loading) return <p>loading...</p>;
            if (result.error) return <p>{result.error.message}</p>;
            return (
              <div>
                <h1>Name: {result.data.viewer.name}</h1>
                <p>Email: {result.data.viewer.email}</p>
              </div>
            );
          }}
        </Query>
        <MyRepo />
      </div>
    );
  }
}

export default App;
