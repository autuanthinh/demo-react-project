import React, { FC, useCallback, useMemo, useState } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import UpdateNumber from './UpdateNumber';
import NumberConsumer from './NumberConsumer';
import NumberUseContext from './NumberUseContext';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

export interface IReactContextProps {}

type CombineProps = IReactContextProps & InjectedIntlProps;

export const MessageContext = React.createContext({
  number: 0,
  update: () => {},
});

const ReactContext: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(() => messages.reactContext || headerMessages.pageReactContext, []);

  const [number, setNumber] = useState(0);

  const update = useCallback(() => {
    setNumber(Math.random());
  }, []);

  return (
    <MessageContext.Provider value={{ number, update }}>
      <div>
        <h1>{intl.formatMessage(titleIntl)}</h1>
        <NumberConsumer />
        <NumberUseContext />
        <UpdateNumber />
      </div>
    </MessageContext.Provider>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], ReactContext) as FC<IReactContextProps>;
