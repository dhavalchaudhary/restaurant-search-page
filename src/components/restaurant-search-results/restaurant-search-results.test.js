import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RestaurantSearchResultsComponent } from './restaurant-search-results';

const commonProps = {
    searchResults: {
        nbHits: 0
    },
    deleteRestaurant: jest.fn(),
    error: false,
    isSearchStalled: false,
    refreshResults: jest.fn()
}

jest.mock('../restaurant-list/restaurant-list.js', () => ({
    RestaurantList: () => <div data-testid="restaurant-list" />
}))

describe('RestaurantSearchResults', () => {
    afterEach(() => {
        jest.clearAllTimers()
    })
    it('shows a loader when api is loading', () => {
        const mockProps = {...commonProps, isSearchStalled: true}
        render(<RestaurantSearchResultsComponent {...mockProps}/>)
        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })
    it('shows a error message when api errors out', () => {
        const mockProps = {...commonProps, error: true}
        render(<RestaurantSearchResultsComponent {...mockProps}/>)
        expect(screen.getByText(/There was an error while searching, please try again./i)).toBeInTheDocument()
    })
    it('retries the api call when clicked on retry button in error message', () => {
        const mockProps = {...commonProps, error: true}
        render(<RestaurantSearchResultsComponent {...mockProps}/>)
        fireEvent.click(screen.getByTestId('retry-btn'));
        expect(mockProps.refreshResults).toHaveBeenCalledTimes(1)
    })
    it('shows the list of restaurants when the api returns data', () => {
        const mockProps = {...commonProps, searchResults: {nbHits: 10}}
        render(<RestaurantSearchResultsComponent {...mockProps}/>)
        expect(screen.getByTestId('restaurant-list')).toBeInTheDocument()
    })
    it('shows a no found message when api returns no data', () => {
        render(<RestaurantSearchResultsComponent {...commonProps}/>)
        expect(screen.getByText(/No results founds. Please cnage your search query and try again./i)).toBeInTheDocument()
    })
})