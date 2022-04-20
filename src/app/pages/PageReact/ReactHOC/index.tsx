import React, { FC, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import { Divider } from 'antd';

import injectLocation from './injectLocation';
import Component from './Component';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

export interface IReactHOCProps {}

type CombineProps = IReactHOCProps & InjectedIntlProps;

const ComponentInjected = injectLocation(Component);

const ReactHOC: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(() => messages.reactHOC || headerMessages.pageReactHOC, []);

  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <b>Is a function, receive a component and return a new component</b>
      <Divider />
      <Component title="This is Component" />
      <Divider />
      <ComponentInjected title="This is High Order Component" index={Math.random()} />
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], ReactHOC) as FC<IReactHOCProps>;
