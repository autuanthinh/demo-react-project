import { InjectedIntl } from 'react-intl';
import _ from 'lodash';

import messages from './messages';

const ReactSubRoute = {
  PAGE_REACT: 'react',
  PAGE_REACT_HOOK: 'react-hook',
  PAGE_REACT_CONTEXT: 'react-context',
  PAGE_REACT_LEGACY_CONTEXT: 'react-legacy-context',
  PAGE_REACT_REF: 'react-ref',
  PAGE_REACT_CONDITION_RENDER: 'react-condition-render',
  PAGE_REACT_LIST_KEYS: 'react-list-keys',
  PAGE_REACT_CUSTOM_HOOK: 'react-custom-hook',
  PAGE_REACT_CHILDREN_AS_FUNCTION: 'react-children-as-function',
  PAGE_REACT_HOC: 'react-hoc',
  PAGE_REACT_LIFTING_STATE_UP: 'react-lifting-state-up',
  PAGE_REACT_ROUTER_BLOCK_NAVIGATION: 'react-router-block-navigation',
  PAGE_REACT_RECONSTRUCT_CHILD_COMPONENT: 'react-reconstruct-child-component',
  PAGE_REACT_PORTAL: 'react-portal',
};

export const HEADER = {
  DASHBOARD: '',
  PAGE_A: 'pageA',
  SUB_PAGE_A: 'subPageA',
  SUB_PAGE_B: 'subPageB',

  ...ReactSubRoute,
};

export const REACT_LINK = _.mapValues(ReactSubRoute, (v, k) => {
  if (HEADER.PAGE_REACT === v) {
    return `/${HEADER.PAGE_REACT}`;
  }
  return `/${HEADER.PAGE_REACT}/${v}`;
});

const menuMessages = {
  [HEADER.DASHBOARD]: messages.dashboard,
  [HEADER.PAGE_A]: messages.pageA,
  [HEADER.SUB_PAGE_A]: messages.subPageA,
  [HEADER.SUB_PAGE_B]: messages.subPageB,

  [HEADER.PAGE_REACT]: messages.pageReact,
  [HEADER.PAGE_REACT_HOOK]: messages.pageReactHook,
  [HEADER.PAGE_REACT_CONTEXT]: messages.pageReactContext,
  [HEADER.PAGE_REACT_LEGACY_CONTEXT]: messages.pageReactLegacyContext,
  [HEADER.PAGE_REACT_REF]: messages.pageReactRef,
  [HEADER.PAGE_REACT_CONDITION_RENDER]: messages.pageReactConditionRender,
  [HEADER.PAGE_REACT_LIST_KEYS]: messages.pageReactListAndKeys,
  [HEADER.PAGE_REACT_CUSTOM_HOOK]: messages.pageReactCustomHook,
  [HEADER.PAGE_REACT_CHILDREN_AS_FUNCTION]: messages.pageReactChildrenAsFunction,
  [HEADER.PAGE_REACT_HOC]: messages.pageReactHOC,
  [HEADER.PAGE_REACT_LIFTING_STATE_UP]: messages.pageReactLiftingStateUp,
  [HEADER.PAGE_REACT_ROUTER_BLOCK_NAVIGATION]: messages.pageReactRouterBlockNavigation,
  [HEADER.PAGE_REACT_RECONSTRUCT_CHILD_COMPONENT]: messages.pageReactReconstructChildComponent,
  [HEADER.PAGE_REACT_PORTAL]: messages.pageReactPortal,
};

export const getMenuLabels = (intl: InjectedIntl) => {
  return _.mapValues(menuMessages, v => {
    return intl.formatMessage(v);
  });
};

const includesKeys = {
  [HEADER.SUB_PAGE_A]: [HEADER.PAGE_A],
  [HEADER.SUB_PAGE_B]: [HEADER.PAGE_A],
};

export const normalizeSelectedKeys = (menu: keyof typeof HEADER) => {
  return [...(includesKeys[menu] || []), menu];
};
