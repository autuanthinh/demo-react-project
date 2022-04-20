import React, { FC } from 'react';
import { useLocation } from 'react-router';

type ExtraProps = {
  index?: number;
};

export default function withLocation<P>(Component: React.ComponentType<P>): FC<P & ExtraProps> {
  return props => {
    const { index = 0 } = props;
    const location = useLocation();

    return (
      <div>
        <Component {...props} location={location} />
        <div>Index: {index}</div>
      </div>
    );
  };
}
