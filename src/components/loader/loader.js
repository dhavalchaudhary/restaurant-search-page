import { PropTypes } from 'prop-types';
import React from 'react';
import "./loader.css";

export const Loader = ({show, overlay}) => {
    const getWrapperClass = (show, overlay) => {
        let wrapperClasses = '';
        wrapperClasses = `${wrapperClasses} ${overlay ? 'overlay-loader-wrapper' : 'loader-wrapper'}` ;
        wrapperClasses = `${wrapperClasses} ${show ? '' : 'hidden'}` ;
        return wrapperClasses
    }
    return <div className={getWrapperClass(show, overlay)}><div className="loader"></div></div>
}

Loader.propTypes = {
    show: PropTypes.bool.isRequired,
    overlay: PropTypes.bool.isRequired
}