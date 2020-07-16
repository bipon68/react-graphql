import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

import App from './components/app';

// without the data parameter.
import introspectionQueryResultData from './fragment-data.json';
const fragmentMatcher = new IntrospectionFragmentMatcher({ introspectionQueryResultData });

// const link = new HttpLink({ uri: 'http://localhost:3000/graphql' });
const link = new HttpLink({ uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql' });


const client = new ApolloClient({
  link,
  cache: new InMemoryCache({ fragmentMatcher })
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Route path="/" component={App} />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector("#react-app")
);
