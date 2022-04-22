import React, { FC } from 'react';

export interface IItemProps {
  label: string;
  value: number | string;
}

const Item: FC<IItemProps> = ({ label, value }) => {
  return (
    <div>
      <label>Label {label}</label>
      <div>value {value}</div>
    </div>
  );
};

Item.displayName = 'Item';

export default Item;
