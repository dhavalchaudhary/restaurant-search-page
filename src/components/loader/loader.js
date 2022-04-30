import { PropTypes } from 'prop-types';
import React from 'react';
import "./loader.css";

export const Loader = ({show, overlay}) => {
    const getWrapperClass = (overlay) => {
        let wrapperClasses = '';
        wrapperClasses = `${wrapperClasses} ${overlay ? 'overlay-loader-wrapper' : 'loader-wrapper'}` ;
        return wrapperClasses
    }
    return show ? <div className={getWrapperClass(overlay)} data-testid="loader-wrapper"><div className="loader"></div></div> : null
}

Loader.propTypes = {
    show: PropTypes.bool.isRequired,
    overlay: PropTypes.bool.isRequired
}