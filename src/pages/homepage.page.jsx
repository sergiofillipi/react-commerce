import React from 'react';
import './homepage.styles.scss';
import CategoryMenu from '../components/category-menu/category-menu.component.jsx';

const HomePage = () =>{
    return (
        <div className='homepage'>
            <CategoryMenu />
        </div>
    );
}

export default HomePage;