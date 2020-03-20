import React from "react";
import CollectionItem from "../collection-item/collection-item.component.jsx";
import './collection.styles.scss';

const Collection = ({ title, items, showAll, display }) => {
  return (
    <div className={`collection__${title}`}>
      <h1 className='title'> {title.toUpperCase()}</h1>
      <div className="collection__items">
        {items
          .filter((item, index) => showAll || !display ? true : index < display)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} { ...otherProps } />
          ))}
      </div>
    </div>
  );
};
export default Collection;
