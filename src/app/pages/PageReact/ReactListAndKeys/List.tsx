import React, { FC, useCallback, useState } from 'react';

import Item from './Item';
import { Col, Row } from 'antd';

export interface IListProps {
  hasKey: boolean;
}

const List: FC<IListProps> = ({ hasKey }) => {
  const [listItem, setListItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [unmount, setUnmount] = useState<number[]>([]);

  const removeItem = useCallback(
    i => {
      listItem.splice(i, 1);
      setListItem([...listItem]);
    },
    [listItem]
  );

  const addUnmount = useCallback(i => {
    setUnmount(v => {
      return [...v, i];
    });
  }, []);

  return (
    <Row>
      <Col span={12}>
        <h3>List</h3>
        {listItem.map((v, i) => {
          if (hasKey) {
            return <Item value={v} index={i} key={v} removeItem={removeItem} addUnmount={addUnmount} />;
          } else {
            return <Item value={v} index={i} removeItem={removeItem} addUnmount={addUnmount} />;
          }
        })}
      </Col>
      <Col span={12}>
        <h3>Check unmount</h3>
        {unmount &&
          unmount.map(i => {
            return <div key={i}>Unmount {i}</div>;
          })}
      </Col>
    </Row>
  );
};

List.defaultProps = {
  hasKey: false,
};

export default List;
