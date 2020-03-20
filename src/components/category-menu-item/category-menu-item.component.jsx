import React from 'react'
import style from './category-menu-item.module.scss';
import { withRouter } from 'react-router-dom';

const CategoryMenuItem = ({ match, history, title, imageUrl, size, linkUrl }) => {

        let classNames = style['homepage__menu-item'];
        classNames = style[`homepage__menu-item--${size}`] ? classNames + ' ' + style[`homepage__menu-item--${size}`] : classNames;
        console.log(match);
        return (
        <div className={  classNames  } onClick={ () => history.push(`${match.url}${linkUrl}`)}>
            <div className={ style["background-image"] } style={ { backgroundImage : `url(${ imageUrl })` } } />
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

export default withRouter( CategoryMenuItem );