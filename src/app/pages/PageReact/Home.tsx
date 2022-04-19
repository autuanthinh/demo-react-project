import React, { FC, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import { UtilInject } from 'app/utils';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import headerMessages from 'app/containers/Header/messages';
import messages from './messages';

export interface IPageReactHomeProps {}

type CombineProps = IPageReactHomeProps & InjectedIntlProps;

const PageReactHome: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(() => messages.title || headerMessages.pageReact, []);
  return (
    <div>
      <Helmet>
        <title>{intl.formatMessage(titleIntl)}</title>
      </Helmet>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <ul>
        <li>
          <Link to="/react/react-hook">{intl.formatMessage(messages.reactHook)}</Link>
        </li>
        <li>
          <Link to="/react/react-custom-hook">{intl.formatMessage(messages.reactCustomHook)}</Link>
        </li>
        <li>
          <Link to="/react/react-context">{intl.formatMessage(messages.reactContext)}</Link>
        </li>
        <li>
          <Link to="/react/react-ref">{intl.formatMessage(messages.reactRef)}</Link>
        </li>
        <li>
          <Link to="/react/react-condition-render">{intl.formatMessage(messages.reactConditionRender)}</Link>
        </li>
        <li>
          <Link to="/react/react-list-keys">{intl.formatMessage(messages.reactListAndKeys)}</Link>
        </li>
        <li>
          <Link to="/react/react-children-as-function">{intl.formatMessage(messages.reactChildrenAsFunction)}</Link>
        </li>
      </ul>
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], PageReactHome) as FC<IPageReactHomeProps>;
