import PropTypes from "prop-types";
import React from "react";

const MyInput = props => {
    const {type, label, name, value, className, placeholder, onChange, error} = props;
    return (

        <label htmlFor={name} className='label'>
            <h5>{label}</h5>
            <input
                name={name}
                id={name}
                type={type}
                value={value}
                className={className}
                placeholder={placeholder}
                onChange={onChange}
            />
            {error && (
                <div className='alert'><p>{error}</p></div>
            )}
            <span className="checkmark"/>
        </label>
    )
}

MyInput.prototype = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default MyInput;