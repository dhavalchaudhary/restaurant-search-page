import { PropTypes } from 'prop-types';
import React from 'react';
import "./overlay-loader.css";

export const OverlayLoader = ({show}) => <div className={`overlay-loader-wrapper ${show ? '' : 'hidden'}`}><div className="loader"></div></div>

OverlayLoader.propTypes = {
    show: PropTypes.bool.isRequired
}