import React, { FC, useMemo } from 'react';

import Item, { IItemProps } from './Item';

import './index.scss';

export interface IListProps {
  classPrefix?: string;
  selectedKey?: string;
  onSelect?: (key: string) => void;
}

const List: FC<IListProps> & { Item: typeof Item } = ({ children, onSelect, classPrefix, selectedKey }) => {
  const normalizeChildren = useMemo<any[]>(() => {
    const list: any[] = [];
    React.Children.forEach<any>(children, i => {
      console.log(i);
      if (i.type.name === 'Item' || i.type.name === 'Divider') {
        list.push(i);
      }
    });

    return list;
  }, [children]);

  return (
    <div className={classPrefix}>
      {normalizeChildren.map(child => {
        const { key } = child;
        const props: IItemProps = child.props;

        if (child.type.name === 'Divider') return child;

        return (
          <Item
            key={key}
            {...props}
            onSelect={onSelect}
            classPrefix={classPrefix}
            itemKey={key}
            isActivated={selectedKey === key}
          />
        );
      })}
    </div>
  );
};

List.Item = Item;

List.defaultProps = {
  classPrefix: 'custom-menu',
};

export default List;
