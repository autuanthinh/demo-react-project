import React, { FC, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

import ReactUseState from './ReactUseState';
import ReactUseEffect from './ReactUseEffect';
import { Divider } from 'antd';

export interface IReactHookProps {}

type CombineProps = IReactHookProps & InjectedIntlProps;

const ReactHook: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(() => messages.reactHook || headerMessages.pageReactHook, []);
  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <ReactUseState />
      <Divider />
      <ReactUseEffect />
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], ReactHook) as FC<IReactHookProps>;
