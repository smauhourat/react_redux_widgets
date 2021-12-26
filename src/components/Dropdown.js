import React, {useState, useEffect, useRef} from 'react'

const Dropdown = ({ options, selectedOption, onSelectedOptionChange }) => {
    const [open, setOpen] = useState(false);
    const refDropdown = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (refDropdown.current.contains(event.target)) {
              return;
            }
            setOpen(false);
          };        
        
          document.body.addEventListener('click', onBodyClick, {capture: true});

          return () => {
            document.body.removeEventListener("click", onBodyClick, {capture: true});
          };          
    }, []);

    const renderedOptions = options.map((option, index) => {
        if (option.value === selectedOption.value) {
            return null;
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => {
                    onSelectedOptionChange(option)
                }}
            >
                    {option.label}
             
            </div>
        );
    });

    return (
        <div ref={refDropdown} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => {
                    setOpen(!open)
                }} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedOption.label}</div>
                    <div  className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
}


export default Dropdown