import React, { FC, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import { UtilInject } from 'app/utils';

import { REACT_LINK } from 'app/containers/Header/enums';

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
          <Link to={REACT_LINK.PAGE_REACT_HOOK}>{intl.formatMessage(messages.reactHook)}</Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_CUSTOM_HOOK}>{intl.formatMessage(messages.reactCustomHook)}</Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_CONTEXT}>{intl.formatMessage(messages.reactContext)}</Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_LEGACY_CONTEXT}>{intl.formatMessage(messages.reactLegacyContext)}</Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_REF}>{intl.formatMessage(messages.reactRef)}</Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_CONDITION_RENDER}>{intl.formatMessage(messages.reactConditionRender)}</Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_LIST_KEYS}>{intl.formatMessage(messages.reactListAndKeys)}</Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_CHILDREN_AS_FUNCTION}>
            {intl.formatMessage(messages.reactChildrenAsFunction)}
          </Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_HOC}>{intl.formatMessage(messages.reactHOC)}</Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_LIFTING_STATE_UP}>{intl.formatMessage(messages.reactLiftingStateUp)}</Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_ROUTER_BLOCK_NAVIGATION}>
            {intl.formatMessage(messages.reactRouterBlockNavigation)}
          </Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_RECONSTRUCT_CHILD_COMPONENT}>
            {intl.formatMessage(messages.reactReconstructChildComponent)}
          </Link>
        </li>
        <li>
          <Link to={REACT_LINK.PAGE_REACT_PORTAL}>{intl.formatMessage(messages.reactPortal)}</Link>
        </li>
      </ul>
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], PageReactHome);
