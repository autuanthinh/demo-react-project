import { InjectedIntl } from 'react-intl';
import _ from 'lodash';

import messages from './messages';

export const HEADER = {
  DASHBOARD: '',
  PAGE_A: 'pageA',
  SUB_PAGE_A: 'subPageA',
  SUB_PAGE_B: 'subPageB',

  PAGE_REACT: 'react',
  PAGE_REACT_HOOK: 'react-hook',
  PAGE_REACT_CONTEXT: 'react-context',
  PAGE_REACT_REF: 'react-ref',
  PAGE_REACT_CONDITION_RENDER: 'react-condition-render',
  PAGE_REACT_LIST_KEYS: 'react-list-keys',
  PAGE_REACT_CUSTOM_HOOK: 'react-custom-hook',
  PAGE_REACT_CHILDREN_AS_FUNCTION: 'react-children-as-function',
};

const menuMessages = {
  [HEADER.DASHBOARD]: messages.dashboard,
  [HEADER.PAGE_A]: messages.pageA,
  [HEADER.SUB_PAGE_A]: messages.subPageA,
  [HEADER.SUB_PAGE_B]: messages.subPageB,

  [HEADER.PAGE_REACT]: messages.pageReact,
  [HEADER.PAGE_REACT_HOOK]: messages.pageReactHook,
  [HEADER.PAGE_REACT_CONTEXT]: messages.pageReactContext,
  [HEADER.PAGE_REACT_REF]: messages.pageReactRef,
  [HEADER.PAGE_REACT_CONDITION_RENDER]: messages.pageReactConditionRender,
  [HEADER.PAGE_REACT_LIST_KEYS]: messages.pageReactListAndKeys,
  [HEADER.PAGE_REACT_CUSTOM_HOOK]: messages.pageReactCustomHook,
  [HEADER.PAGE_REACT_CHILDREN_AS_FUNCTION]: messages.pageReactChildrenAsFunction,
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
