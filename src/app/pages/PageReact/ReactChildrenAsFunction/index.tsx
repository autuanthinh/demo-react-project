import React, { FC, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import RandomCard from './RandomCard';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

export interface IChildrenAsFunctionProps {}

type CombineProps = IChildrenAsFunctionProps & InjectedIntlProps;

const ChildrenAsFunction: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(() => messages.reactChildrenAsFunction || headerMessages.pageReactChildrenAsFunction, []);

  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <RandomCard title="Card 1">
        {random => {
          return <div>This is card {random}</div>;
        }}
      </RandomCard>
      <RandomCard title="Card 2">
        {random => {
          return <div>That is card {random}</div>;
        }}
      </RandomCard>
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], ChildrenAsFunction) as FC<IChildrenAsFunctionProps>;
