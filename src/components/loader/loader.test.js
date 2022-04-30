import { render, screen } from '@testing-library/react';
import React from 'react';
import {Loader } from './loader';

const defaultProps = {
    show: false, overlay: false
}

describe('Loader', () => {
    it('does not render the loader', () => {
        const {container} = render(<Loader {...defaultProps} />)
        expect(container.children).toHaveLength(0)
    })
    it('renders a loader', () => {
        const mockProps = {...defaultProps, show: true}
        render(<Loader {...mockProps} />)
        expect(screen.getByTestId('loader-wrapper')).toBeInTheDocument()
        expect(screen.getByTestId('loader-wrapper').classList).toContain('loader-wrapper')
    })
    it('renders an overlay loader', () => {
        const mockProps = {...defaultProps, show: true, overlay: true}
        render(<Loader {...mockProps} />)
        expect(screen.getByTestId('loader-wrapper').classList).toContain('overlay-loader-wrapper')
    })
})