import React from 'react';
import { DropdownRefinementList } from '../dropdown-refinement-list/dropdown-refinement-list';
import './search-filter.css';

export const SearchFilter = () => (
    <div className="search-filters-list">
        <DropdownRefinementList attribute="food_type" title="Cuisine" />
        <DropdownRefinementList attribute="price_range" title="Price" />
        <DropdownRefinementList attribute="dining_style" title="Ambience" />
        <DropdownRefinementList attribute="rounded_stars_count" title="Ratings" />
    </div>
)