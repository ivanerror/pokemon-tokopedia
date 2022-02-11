import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

const AppWrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </BrowserRouter>
  );
};

export default AppWrapper;
