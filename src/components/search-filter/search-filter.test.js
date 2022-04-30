import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchFilter, filterFacets } from './search-filter';

jest.mock('../dropdown-refinement-list/dropdown-refinement-list.js', () => ({
    DropdownRefinementList: () => <div data-testid="mocked-dropdown-wrapper" />
}))

describe('SearchFilter', () => {
    it('renders the refinement lists', () => {
        render(<SearchFilter />)
        expect(screen.getAllByTestId('mocked-dropdown-wrapper')).toHaveLength(filterFacets.length)
    })
})