import React from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import { RestaurantTile } from '../restaurant-tile';
import './restaurant-list.css';

const RestaurantListComponent = ({
    hits,
    hasMore,
    refineNext,
}) => (
    <>
        <div className='restaurant-list'>
            {hits.map(hit => (
                <RestaurantTile
                    key={hit.objectID}
                    hit={hit}
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

export const RestaurantList = connectInfiniteHits(RestaurantListComponent)