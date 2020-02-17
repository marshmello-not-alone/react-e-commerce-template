import React from "react";
import "./preview-collection.scss";

import CollectionItem from '../collections-item/collections-item'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherProps}) => (
          <CollectionItem key={id} {...otherProps}/>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
