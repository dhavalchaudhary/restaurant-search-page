import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { mockRefinementFilterItems } from '../../mocks'
import { DropdownRefinementListComponent } from './dropdown-refinement-list'

const defaultProps = {
  items: [],
  refine: jest.fn(),
  title: ''
}

describe('DropdownRefinementList', () => {
  it('displays the button with the correct title', () => {
    const mockProps = { ...defaultProps, title: 'Test' }
    render(<DropdownRefinementListComponent {...mockProps} />)
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
  })
  it('shows empty category message if there are no dropdown options', () => {
    const mockProps = { ...defaultProps, title: 'Test' }
    render(<DropdownRefinementListComponent {...mockProps} />)
    fireEvent.click(screen.getByText(mockProps.title))
    expect(screen.getByText(/No filters in this category/i)).toBeInTheDocument()
  })
  it('allows multiple selection of the dropdown options', () => {
    const mockProps = {
      ...defaultProps,
      title: 'Test',
      items: mockRefinementFilterItems
    }
    render(<DropdownRefinementListComponent {...mockProps} />)

    fireEvent.click(screen.getByText(mockProps.title))
    fireEvent.click(screen.getAllByTestId('options-checkbox')[0])

    expect(mockProps.refine).toHaveBeenCalledTimes(1)
    expect(mockProps.refine).toHaveBeenCalledWith(mockProps.items[0].value)

    fireEvent.click(screen.getAllByTestId('options-checkbox')[1])

    expect(mockProps.refine).toHaveBeenCalledTimes(2)
    expect(mockProps.refine).toHaveBeenLastCalledWith(mockProps.items[1].value)
  })
  it('shows the selection option count in the dropdown button', () => {
    const mockProps = {
      ...defaultProps,
      title: 'Test',
      items: [{ ...mockRefinementFilterItems[0], isRefined: true }]
    }
    render(<DropdownRefinementListComponent {...mockProps} />)

    expect(screen.getByTestId('selected-options-count').textContent).toBe('1')
  })
  it('closes the dropdown if clicked outside', () => {
    const mockProps = {
      ...defaultProps,
      title: 'Test',
      items: mockRefinementFilterItems
    }
    render(
      <div data-testid="outside-wrapper">
        <DropdownRefinementListComponent {...mockProps} />
      </div>
    )

    fireEvent.click(screen.getByText(mockProps.title))

    expect(screen.getByTestId('refinement-list').children).toHaveLength(
      mockProps.items.length
    )

    userEvent.click(document.body)

    expect(screen.queryByTestId('refinement-list')).toBeFalsy()
  })
})
