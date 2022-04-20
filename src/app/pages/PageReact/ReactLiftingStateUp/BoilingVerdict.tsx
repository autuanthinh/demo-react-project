import React, { FC } from 'react';

export interface IBoilingVerdictProps {
  celsius: number;
}

const BoilingVerdict: FC<IBoilingVerdictProps> = ({ celsius }) => {
  return (
    <div style={{ fontSize: 24 }}>
      {celsius >= 100 ? (
        <p>
          The water <b style={{ color: 'red' }}>would boil</b>.
        </p>
      ) : (
        <p>
          The water <b style={{ color: 'blue' }}>would not boil</b>.
        </p>
      )}
    </div>
  );
};

export default BoilingVerdict;
