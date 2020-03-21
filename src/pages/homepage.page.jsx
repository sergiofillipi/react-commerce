import React from 'react';
import './homepage.styles.scss';
import CategoryMenu from '../components/category-menu/category-menu.component.jsx';

const HomePage = ( { history, match }) =>{
    return (
        <div className='homepage'>
            <button onClick={ () => history.push(`/shop`) }>ir</button>
            <CategoryMenu />
        </div>
    );
}

export default HomePage;