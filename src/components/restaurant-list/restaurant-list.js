import React from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import { RestaurantTile } from '../restaurant-tile';
import PropTypes from 'prop-types';
import './restaurant-list.css';

const RestaurantListComponent = ({
    hits,
    hasMore,
    refineNext,
    deleteRestaurant
}) => (
    <>
        <div className='restaurant-list'>
            {hits.map(hit => (
                <RestaurantTile
                    key={hit.objectID}
                    hit={hit}
                    deleteRestaurant={deleteRestaurant}
                />
            ))}
        </div>
        <div className='restaurant-list-action-btn-wrapper'>
            <button disabled={!hasMore} onClick={refineNext} className="restaurant-list-show-more-btn">
                Show more
            </button>
        </div>
    </>
)

RestaurantListComponent.propTypes = {
    deleteRestaurant: PropTypes.func.isRequired
}


export const RestaurantList = connectInfiniteHits(RestaurantListComponent)