import React, { Component } from 'react';
import CategoryMenuItem from '../category-menu-item/category-menu-item.component.jsx';
import styles from './category-menu.module.scss';

class CategoryMenu extends Component {
    constructor(){
        super();
        this.state = {
            sections :[
                {
                  title: 'Bonés',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'bones'
                },
                {
                  title: 'Jaquetas',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: '/shop/jackets'
                },
                {
                  title: 'Tênis',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: '/shop/sneakers'
                },
                {
                  title: 'Feminino',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: '/shop/womens'
                },
                {
                  title: 'Masculino',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: '/shop/mens'
                }
            ]
        };
    }
    render(){
        return (
            <div className= { styles['homepage__category-menu'] }>
                { this.state.sections.map( ({ id, ...otherSectionProps }) => (
                    <CategoryMenuItem  key={ id } { ...otherSectionProps } />)
                  )
                }
            </div>
        );
    }
}

export default CategoryMenu;