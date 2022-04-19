import React, { FC, useEffect } from 'react';

export interface IItemProps {
  value: any;
  index: number;
  removeItem: (index: number) => void;
  addUnmount: (index: number) => void;
}

const Item: FC<IItemProps> = ({ value, index, removeItem, addUnmount }) => {
  useEffect(() => {
    return () => {
      console.log('Unmount value: ' + value);
      addUnmount(value);
    };
  }, [addUnmount]);

  return (
    <div>
      position {value} <button onClick={() => removeItem(index)}>X</button>
    </div>
  );
};

export default Item;
