import React, {useState, useEffect} from 'react'

const Dropdown = ({ options, selectedOption, onSelectedOptionChange }) => {
    const [open, setOpen] = useState(false);

    const renderedOptions = options.map((option, index) => {
        if (option.value === selectedOption.value) {
            return null;
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedOptionChange(option)}
            >
                    {option.label}
             
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedOption.label}</div>
                    <div  className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
}


export default Dropdown