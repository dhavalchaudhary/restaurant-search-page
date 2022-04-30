import React, { useState, useRef, useEffect } from 'react'
import { connectRefinementList } from 'react-instantsearch-dom'
import PropTypes from 'prop-types'
import './dropdown-refinement-list.css'

export const DropdownRefinementListComponent = ({ items, refine, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const mousedownHandler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        //event happened outside the component
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', mousedownHandler)

    return () => document.removeEventListener('mousedown', mousedownHandler)
  }, [wrapperRef])

  const selectedOptionsCount = items.filter((item) => item.isRefined).length

  return (
    <div className="dropdown" ref={wrapperRef}>
      <button
        className="base-btn dropdown-title"
        onClick={() => setIsOpen(!isOpen)}>
        {title}
        {selectedOptionsCount > 0 && (
          <span
            className="ais-RefinementList-count selected-options-count"
            data-testid="selected-options-count">
            {selectedOptionsCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="dropdown-options">
          <div className="ais-RefinementList">
            {items.length === 0 && (
              <div className="centered-text">No filters in this category</div>
            )}
            {items.length > 0 && (
              <ul
                className="ais-RefinementList-list"
                data-testid="refinement-list">
                {items.map(({ isRefined, value, count, label }) => (
                  <li
                    className={`ais-RefinementList-item ${
                      isRefined ? 'ais-RefinementList-item--selected' : ''
                    }`}
                    key={label}>
                    <label className="ais-RefinementList-label">
                      <input
                        className="ais-RefinementList-checkbox"
                        type="checkbox"
                        value={value}
                        checked={isRefined}
                        onChange={() => refine(value)}
                        data-testid="options-checkbox"
                      />
                      <span className="ais-RefinementList-labelText">
                        {label}
                      </span>
                      <span className="ais-RefinementList-count">{count}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

DropdownRefinementListComponent.propTypes = {
  title: PropTypes.string.isRequired
}

export const DropdownRefinementList = connectRefinementList(
  DropdownRefinementListComponent
)
