import React, { FC } from 'react';
import { injectIntl } from 'react-intl';
import { UtilInject } from 'app/utils';

import { MessageContext } from './index';

export interface INumberConsumerProps {}

type CombineProps = INumberConsumerProps;

const NumberConsumer: FC<CombineProps> = ({}) => {
  return (
    <>
      <h3>Number Consumer</h3>
      <MessageContext.Consumer>
        {context => {
          return <div>{context.number}</div>;
        }}
      </MessageContext.Consumer>
    </>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], NumberConsumer) as FC<INumberConsumerProps>;
