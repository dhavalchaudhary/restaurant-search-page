import React from 'react';
import './app.css';
import { InstantSearch } from 'react-instantsearch-dom';
import { algoliaClient } from '../../config';
import { ALGOLIA_INDEX_NAME } from '../../contants';
import {Header} from'../header';
import { SearchFilter } from '../search-filter';
import { RestaurantList } from '../restaurant-list/restaurant-list';

export const App = () => {
  return (
    <InstantSearch searchClient={algoliaClient} indexName={ALGOLIA_INDEX_NAME}>
      <Header />
      <div className="content-width">
        <SearchFilter />
        <RestaurantList />
      </div>
    </InstantSearch>
  );
}
