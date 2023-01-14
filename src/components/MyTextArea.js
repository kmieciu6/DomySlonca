import PropTypes from "prop-types";
import React from "react";

const MyTextArea = props => {
    const {label, type, name, value, className, onChange, error} = props;
    return (
        <label htmlFor={name} className='label'>
            <h5>{label}</h5>
            <textarea
                id={name}
                name={name}
                type={type}
                value={value}
                className={className}
                rows={5}
                placeholder='Treść wiadomości'
                onChange={onChange}
            />
            {error && (
                <div className='alert'><p>{error}</p></div>
            )}
        </label>
    )
}

MyTextArea.prototype = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default MyTextArea;