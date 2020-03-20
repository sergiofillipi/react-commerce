import React from 'react';
import './collection-item.styles.scss';
const CollectionItem = ({ name, imageUrl, price }) => {
    return (
        <div className='collection__item'>
            <div 
                className='image'
                style={ { backgroundImage : `url( ${  imageUrl } )` } }
            >
               
            </div>
            <div className='collection__item-footer'>
                <span className='collection__item-name'>{ name }</span>
                <span className='collection__item-price'>{ price }</span>
            </div>
        </div>
    )
}

export default CollectionItem;