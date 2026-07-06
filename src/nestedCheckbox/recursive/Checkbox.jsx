import React, { useRef, useEffect } from 'react'
import "../style.css";
import { STATUS } from "./constants";

function Checkbox(props) {
    const { checkboxData, updateCheckbox } = props;
    const checkboxRef = useRef(null);

    const isChecked = checkboxData.status === STATUS.CHECKED;
    const isIndeterminate = checkboxData.status === STATUS.INDETERMINATE;

    // Set indeterminate property via DOM (can't be set via attribute)
    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = isIndeterminate;
        }
    }, [isIndeterminate]);

    const handleChange = () => {
        // Toggle: if checked → unchecked, otherwise → checked
        const newStatus = isChecked ? STATUS.UNCHECKED : STATUS.CHECKED;
        updateCheckbox(checkboxData.id, newStatus);
    };

    return (
        <div className='container-checkbox'>
            <div>
                <input
                    ref={checkboxRef}
                    checked={isChecked}
                    className='checkbox'
                    type="checkbox"
                    onChange={handleChange}
                />
                <span className='checkbox-label'>{checkboxData.label}</span>
            </div>
            <div className='check-child'>
                {(checkboxData.children || []).map((childCheckboxData) => {
                    return (
                        <Checkbox
                            key={childCheckboxData.id}
                            checkboxData={childCheckboxData}
                            updateCheckbox={updateCheckbox}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Checkbox