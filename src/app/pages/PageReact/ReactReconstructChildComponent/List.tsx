import React, { FC, useMemo } from 'react';

import Item, { IItemProps } from './Item';
import { Divider } from 'antd';

export interface IListProps {}

const List: FC<IListProps> & { Item: typeof Item } = ({ children }) => {
  const normalizeChildren = useMemo<any[]>(() => {
    const list: any[] = [];
    React.Children.forEach<any>(children, i => {
      if (i.type.name === 'Item') {
        list.push(i);
      }
    });

    return list;
  }, [children]);

  return (
    <div>
      <h3>List</h3>
      <ul>
        {normalizeChildren.map((child, index) => {
          const { key } = child;
          const props: IItemProps = child.props;

          return (
            <div key={key}>
              <div>
                props: <b>label</b> {props.label} <b>value</b> {props.value} <b>key</b> {key}
              </div>
              <Item {...props} />
              {index < normalizeChildren.length - 1 ? <Divider /> : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

List.Item = Item;

export default List;
