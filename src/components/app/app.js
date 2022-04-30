import React from 'react';
import './app.css';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { algoliaClient } from '../../config';
import { ALGOLIA_INDEX_NAME } from '../../contants';


export const App = () => {
  return (
    <InstantSearch searchClient={algoliaClient} indexName={ALGOLIA_INDEX_NAME}>
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}
