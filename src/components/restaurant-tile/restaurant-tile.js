import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import './restaurant-tile.css';
import PropTypes from 'prop-types';

export const RestaurantTile = ({hit, deleteRestaurant}) => <div className="restaurant-tile">
        <img className="restaurant-image" alt={`${hit.name} restaurant`} src={hit.image_url} />
        <div className="restaurant-details">
            <h3 className="restaurant-name"><Highlight attribute="name" hit={hit} /></h3>
            <p className="restaurant-address">{`${hit.neighborhood} ${hit.city}`}</p>
            <p className="restaurant-food-type"><Highlight attribute="food_type" hit={hit} /></p>
            <button className='base-btn restaurant-delete-btn' data-testid="restaurant-delete" onClick={() => deleteRestaurant(hit.objectID)}>Delete</button>
        </div>
    </div>

RestaurantTile.propTypes = {
    hit: PropTypes.shape({
        name: PropTypes.string,
        image_url: PropTypes.string,
        neighborhood:PropTypes.string,
        city:PropTypes.string,
        food_type:PropTypes.string,
        objectID: PropTypes.string,
    }),
    deleteRestaurant: PropTypes.func.isRequired
}

