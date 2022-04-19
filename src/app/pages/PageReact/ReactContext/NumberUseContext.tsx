import React, { FC, useContext } from 'react';
import { injectIntl } from 'react-intl';
import { UtilInject } from 'app/utils';

import { MessageContext } from './index';

export interface INumberUseContextProps {}

type CombineProps = INumberUseContextProps;

const NumberUseContext: FC<CombineProps> = ({}) => {
  const context = useContext(MessageContext);
  return (
    <>
      <h3>Number Use Context</h3>
      <div>{context.number}</div>
    </>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], NumberUseContext) as FC<INumberUseContextProps>;
