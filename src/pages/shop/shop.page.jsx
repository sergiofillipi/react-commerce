import React from 'react';
import './shop.data.js';
import SHOP_DATA from './shop.data.js';
import Collection from '../../components/collection/collection.component.jsx';
class Shop extends React.Component{
    constructor(){
        super();
        this.state = {
            collections : SHOP_DATA,
            total: 10,
            display: 4
        }
    }
    render = () =>{
        const { collections, total , display } = this.state;
       
        return (
            <div className='collection'>
               
               <input type='text' onChange={ (e) => this.setState ( { display : e.target.value  }) }/>
               { 
                  collections.map( ({ id, ...colllectionProps }) => (
                     <Collection key={id} {...colllectionProps} display={ display }/>
                  ))
               }
            </div>
        )
    }
}

export default Shop;