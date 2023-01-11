import PropTypes from "prop-types";
import React from "react";

const MyInput = props => {
    const {type, label, name, value, className, placeholder, onChange} = props;
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
        </label>
    )
}

MyInput.prototype = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default MyInput;