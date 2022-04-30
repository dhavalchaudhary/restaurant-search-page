import React from 'react';
import './app.css';
import { InstantSearch, Hits } from 'react-instantsearch-dom';
import { algoliaClient } from '../../config';
import { ALGOLIA_INDEX_NAME } from '../../contants';
import {Header} from'../header';

export const App = () => {
  return (
    <InstantSearch searchClient={algoliaClient} indexName={ALGOLIA_INDEX_NAME}>
      <Header />
      <Hits />
    </InstantSearch>
  );
}
