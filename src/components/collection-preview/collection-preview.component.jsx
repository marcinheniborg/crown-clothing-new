import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../colection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div class="collection-preview">
    <h1 class="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
