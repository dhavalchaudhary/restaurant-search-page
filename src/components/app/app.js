import React, { useEffect, useState } from 'react';
import './app.css';
import { InstantSearch } from 'react-instantsearch-dom';
import { algoliaClient, algoliaClientIndex } from '../../config';
import { ALGOLIA_INDEX_NAME } from '../../contants';
import {Header} from'../header';
import { SearchFilter } from '../search-filter';
import { Loader } from '../loader';
import {RestaurantSearchResults} from '../restaurant-search-results'

export const App = () => {
  const [searchRefresh, setSearchRefresh] = useState(false);
  const [apiLoading, setApiLoading] = useState(false)

  useEffect(() => {
    if (searchRefresh) {
      setSearchRefresh(false)
      if(apiLoading){
        setApiLoading(false)
      }
    }
  }, [searchRefresh,apiLoading]);

  const refreshResults = () => setSearchRefresh(true)

  const deleteRestaurant = (id) => {
    setApiLoading(true);

    algoliaClientIndex.deleteObject(id)
      .wait()
      .then(refreshResults)
      .catch(err => {
        alert(`Sorry, there was an error in deleting the restaurant - ${err.message}`)
        setApiLoading(false);
      })
  }

  return (
    <InstantSearch searchClient={algoliaClient} indexName={ALGOLIA_INDEX_NAME} refresh={searchRefresh}>
      <Loader show={apiLoading} overlay={true} />
      <Header />
      <div className="content-width">
        <SearchFilter />
        <RestaurantSearchResults deleteRestaurant={deleteRestaurant} refreshResults={refreshResults}/>
      </div>
    </InstantSearch>
  );
}
