import React from 'react';

import './form-input.styles.scss';

const FormInput = ( { handleChange , label, ...otherProps } ) =>{
    return (
        <div class='form-input-group'>
            <input
                className='form-input'
                onChange={handleChange}
                { ...otherProps }
            />
            {
                label ?
                (
                    <label for={otherProps.id } className={ `form-input-label ${otherProps.value ? 'form-input-label--shrink' : '' }`}>
                        { label }
                    </label>
                ) : null
            }
        </div>
    );
}

export default FormInput;