import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
import { Loader } from '../loader';
import { RestaurantList } from '../restaurant-list/restaurant-list';
import './restaurant-search-results.css';


const RestaurantSearchResultsComponent = ({ searchResults, deleteRestaurant, error, isSearchStalled, refreshResults }) => {
    const hasResults = searchResults && searchResults.nbHits !== 0;
    if(isSearchStalled) {
        return <div className='centered-wrapper'><Loader show={true} overlay={false} /></div>
    }
    if(!hasResults) {
        return <div className="centered-wrapper"><h3>No results founds. Please cnage your search query and try again</h3></div>
    }
    if(error) {
        return <div className='centered-wrapper'>
            <h3>There was an error while searching, please try again.</h3>
            <button onClick={refreshResults} className="base-btn retry-btn">Retry</button>
        </div>
    }
    if(hasResults) {
        return <RestaurantList deleteRestaurant={deleteRestaurant} />
    }
    return null
}

export const RestaurantSearchResults = connectStateResults(RestaurantSearchResultsComponent);
