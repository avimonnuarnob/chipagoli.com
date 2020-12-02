import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

const ItemGrid = ({ items }) => (
  <ItemsGrid>
    {items.map((item) => (
      <ItemStyles>
        <p>
          <span className="mark">{item.name}</span>
        </p>
        <img
          width="500"
          height="400"
          style={{
            background: `url(${item.image.asset.metadata.lqip})`,
            backgroundSize: 'cover',
          }}
          src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
          alt={item.name}
        />
      </ItemStyles>
    ))}
  </ItemsGrid>
);

export default ItemGrid;
