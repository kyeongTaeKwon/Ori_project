import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>
          <h1>hello world</h1>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
