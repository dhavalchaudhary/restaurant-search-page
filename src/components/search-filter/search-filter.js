import React from 'react';
import { DropdownRefinementList } from '../dropdown-refinement-list/dropdown-refinement-list';
import './search-filter.css';

export const SearchFilter = () => (
    <div className="search-filters-list">
        <DropdownRefinementList attribute="food_type" title="Food Type" />
        <DropdownRefinementList attribute="price_range" title="Price Range" />
        <DropdownRefinementList attribute="dining_style" title="Dining Style" />
        <DropdownRefinementList attribute="rounded_stars_count" title="Ratings" />
    </div>
)