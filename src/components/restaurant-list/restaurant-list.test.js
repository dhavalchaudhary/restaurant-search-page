import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { mockRestaurantsData } from '../../mocks'
import { RestaurantListComponent } from './restaurant-list'

jest.mock('../restaurant-tile/restaurant-tile.js', () => ({
  RestaurantTile: () => <div data-testid="restaurant-tile" />
}))

const defaultProps = {
  hits: [],
  hasMore: false,
  refineNext: jest.fn(),
  deleteRestaurant: jest.fn()
}

describe('RestaurantList', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('shows a list of restaurant tiles', () => {
    const mockProps = { ...defaultProps, hits: mockRestaurantsData }
    render(<RestaurantListComponent {...mockProps} />)
    expect(screen.getAllByTestId('restaurant-tile')).toHaveLength(
      mockProps.hits.length
    )
  })
  it('shows a show more button if there are more results', () => {
    const mockProps = { ...defaultProps, hasMore: true }
    render(<RestaurantListComponent {...mockProps} />)
    expect(screen.getByTestId('restaurant-list-show-more')).toBeVisible()
  })
  it('calls the handler when clicked on show more button', () => {
    const mockProps = { ...defaultProps, hasMore: true }
    render(<RestaurantListComponent {...mockProps} />)
    fireEvent.click(screen.getByTestId('restaurant-list-show-more'))
    expect(mockProps.refineNext).toHaveBeenCalledTimes(1)
  })
})
