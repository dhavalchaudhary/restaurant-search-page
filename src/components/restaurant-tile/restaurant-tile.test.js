import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { RestaurantTile } from './restaurant-tile'
import { mockRestaurantsData } from '../../mocks'

jest.mock('react-instantsearch-dom', () => {
  return {
    Highlight: ({ hit, attribute }) => <span>{hit[attribute]}</span>
  }
})

const mockProps = {
  hit: mockRestaurantsData[0],
  deleteRestaurant: jest.fn()
}

describe('RestaurantTile', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('renders the basic restaurant information', () => {
    render(<RestaurantTile {...mockProps} />)

    expect(screen.getByText(mockProps.hit.name)).toBeInTheDocument()
    expect(
      screen.getByText(`${mockProps.hit.neighborhood}, ${mockProps.hit.city}`)
    ).toBeInTheDocument()
    expect(screen.getByText(mockProps.hit.food_type)).toBeInTheDocument()
  })
  it('calls the delete restaurant handler when clicked on delete button', () => {
    render(<RestaurantTile {...mockProps} />)

    fireEvent.click(screen.getByTestId('restaurant-delete'))

    expect(mockProps.deleteRestaurant).toHaveBeenCalledTimes(1)
    expect(mockProps.deleteRestaurant).toHaveBeenCalledWith(
      mockProps.hit.objectID
    )
  })
})
