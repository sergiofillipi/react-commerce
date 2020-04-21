import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ( { className, children, ...ExtraProps } ) => {
    return (
        <button className={ `custom-button${ className ? ' ' + className : ''}` } {...ExtraProps }> { children } </button>
    );
}

export default CustomButton;