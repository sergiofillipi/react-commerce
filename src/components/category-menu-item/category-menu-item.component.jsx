import React from 'react'
import style from './category-menu-item.module.scss';

const CategoryMenuItem = ({ title, imageUrl, size }) => {

        let classNames = style['homepage__menu-item'];
        classNames = style[`homepage__menu-item--${size}`] ? classNames + ' ' + style[`homepage__menu-item--${size}`] : classNames;
        return (
        <div className={  classNames  } >
            <div class={ style["background-image"] } style={ { backgroundImage : `url(${ imageUrl })` } } />
            <div className={ style["homepage__menu-item-content"] }>
                <h1 className= { style["homepage__menu-item-title"] }>
                   { title.toUpperCase()}
                </h1>
                <span className={ style["homepage__menu-item-call-to-action"] }>
                    Compre agora
                </span>
            </div>
        </div>
    );
}

export default CategoryMenuItem;