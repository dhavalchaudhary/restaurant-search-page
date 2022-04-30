import React from 'react';
import './app.css';
import { InstantSearch, Hits } from 'react-instantsearch-dom';
import { algoliaClient } from '../../config';
import { ALGOLIA_INDEX_NAME } from '../../contants';
import {Header} from'../header';
import { SearchFilter } from '../search-filter';

export const App = () => {
  return (
    <InstantSearch searchClient={algoliaClient} indexName={ALGOLIA_INDEX_NAME}>
      <Header />
      <div className="content-width">
        <SearchFilter />
        <Hits />
      </div>
    </InstantSearch>
  );
}
