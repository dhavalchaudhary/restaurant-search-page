import React from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import { RestaurantTile } from '../restaurant-tile';
import PropTypes from 'prop-types';
import './restaurant-list.css';

export const RestaurantListComponent = ({
    hits,
    hasMore,
    refineNext,
    deleteRestaurant
}) => (
    <>
        <div className='restaurant-list' data-testid="restaurant-list">
            {hits.map(hit => (
                <RestaurantTile
                    key={hit.objectID}
                    hit={hit}
                    deleteRestaurant={deleteRestaurant}
                />
            ))}
        </div>
        {hasMore && <div className='restaurant-list-action-btn-wrapper'>
            <button onClick={refineNext} className="base-btn restaurant-list-show-more-btn" data-testid="restaurant-list-show-more">
                Show more
            </button>
        </div>}
    </>
)

RestaurantListComponent.propTypes = {
    deleteRestaurant: PropTypes.func.isRequired
}


export const RestaurantList = connectInfiniteHits(RestaurantListComponent)