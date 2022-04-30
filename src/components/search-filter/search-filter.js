import React from 'react';
import { DropdownRefinementList } from '../dropdown-refinement-list/dropdown-refinement-list';
import './search-filter.css';

export const filterFacets = [{attribute:"food_type", title:"Cuisine"},
{attribute:"price_range", title:"Price"},
{attribute:"dining_style", title:"Ambience"},
{attribute:"rounded_stars_count", title:"Ratings"}]

export const SearchFilter = () => (
    <div className="search-filters-list">
        {filterFacets.map(facet => <DropdownRefinementList {...facet} key={facet.attribute} />)}
    </div>
)