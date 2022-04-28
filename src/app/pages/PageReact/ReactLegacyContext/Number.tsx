import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { UtilInject } from 'app/utils';

export interface INumberProps {}

const Number: FC<INumberProps> = ({}, context: { number: number }) => {
  return (
    <>
      <h3>Number Consumer</h3>
      <div>{context.number}</div>
    </>
  );
};

Number.contextTypes = {
  number: PropTypes.number.isRequired,
};

export default UtilInject.combineInjectionComponent([injectIntl], Number) as FC<INumberProps>;
