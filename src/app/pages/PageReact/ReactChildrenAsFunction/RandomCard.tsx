import React, { FC, ReactNode, useMemo } from 'react';

import { Divider } from 'antd';

export interface IRandomCardProps {
  title?: string | ReactNode;
  children: (random: number) => any;
}

const RandomCard: FC<IRandomCardProps> = ({ title, children }) => {
  const random = useMemo(() => Math.random(), []);

  return (
    <div className="custom-card" style={{ margin: 12, padding: 6, border: '1px solid gray', borderRadius: 8 }}>
      <h1 className="custom-card__title">{title}</h1>
      <Divider />
      <div className="custom-card__body">{children(random)}</div>
    </div>
  );
};

export default RandomCard;
