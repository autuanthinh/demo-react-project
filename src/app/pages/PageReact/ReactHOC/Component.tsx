import React, { FC } from 'react';
import { Location } from 'history';

export interface IComponentProps {
  title?: string;
}

type CombineProps = IComponentProps & { location?: Location };

const Component: FC<CombineProps> = ({ title, location }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>pathname: {location?.pathname}</div>
    </div>
  );
};

export default Component;
