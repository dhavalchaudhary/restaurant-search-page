import React, {useState, useRef, useEffect} from 'react'
import { connectRefinementList } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './dropdown-refinement-list.css';

const DropdownRefinementListComponent = ({items, refine, title}) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const mousedownHandler = (e) => {
            if(wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                //event happened outside the component
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', mousedownHandler)

        return () => document.removeEventListener('mousedown', mousedownHandler)
    }, [wrapperRef]);

    const refinedOptionsCount = items.filter(item => item.isRefined).length;

    return <div className='dropdown' ref={wrapperRef}>
        <button className='dropdown-title'
            onClick={() => setIsOpen(!isOpen)}
        >
            {title}
            {refinedOptionsCount > 0 && <span className='refined-count-display ais-RefinementList-count'>{refinedOptionsCount}</span>}
        </button>

        {isOpen && <div className='dropdown-options'>
            <div className="ais-RefinementList">
                <ul className="ais-RefinementList-list">
                    {items.map(({isRefined, value, count, label}) => (
                        <li className={`ais-RefinementList-item ${isRefined ? 'ais-RefinementList-item--selected' : ''}`} key={label}>
                            <label className="ais-RefinementList-label">
                                <input className="ais-RefinementList-checkbox" type="checkbox" value={value} checked={isRefined} onChange={() => refine(value)} />
                                <span className="ais-RefinementList-labelText">{label}</span>
                                <span className="ais-RefinementList-count">{count}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>}
    </div>
};

DropdownRefinementListComponent.propTypes = {
    title: PropTypes.string.isRequired,
}

export const DropdownRefinementList = connectRefinementList(DropdownRefinementListComponent)