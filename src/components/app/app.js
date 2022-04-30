import React, { useEffect, useState } from 'react';
import './app.css';
import { InstantSearch } from 'react-instantsearch-dom';
import { algoliaClient, algoliaClientIndex } from '../../config';
import { ALGOLIA_INDEX_NAME } from '../../contants';
import {Header} from'../header';
import { SearchFilter } from '../search-filter';
import { RestaurantList } from '../restaurant-list/restaurant-list';
import { OverlayLoader } from '../overlay-loader';

export const App = () => {
  const [searchRefresh, setSearchRefresh] = useState(false);
  const [apiLoading, setApiLoading] = useState(false)

  useEffect(() => {
    if (searchRefresh) {
      setSearchRefresh(false)
      setApiLoading(false)
    }
  }, [searchRefresh]);

  const deleteRestaurant = (id) => {
    setApiLoading(true);

    algoliaClientIndex.deleteObject(id)
      .wait()
      .then(_ => setSearchRefresh(true))
      .catch(err => {
        alert(`Sorry, there was an error in deleting the restaurant - ${err.message}`)
        setApiLoading(false);
      })
  }

  return (
    <InstantSearch searchClient={algoliaClient} indexName={ALGOLIA_INDEX_NAME} refresh={searchRefresh}>
      <OverlayLoader show={apiLoading} />
      <Header />
      <div className="content-width">
        <SearchFilter />
        <RestaurantList deleteRestaurant={deleteRestaurant} />
      </div>
    </InstantSearch>
  );
}
