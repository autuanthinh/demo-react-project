import { InjectedIntl } from 'react-intl';
import _ from 'lodash';
import messages from './messages';

export const HEADER = {
  DASHBOARD: '',
  PAGE_A: 'pageA',
  SUB_PAGE_A: 'subPageA',
  SUB_PAGE_B: 'subPageB',
};

const menuMessages = {
  [HEADER.DASHBOARD]: messages.dashboard,
  [HEADER.PAGE_A]: messages.pageA,
  [HEADER.SUB_PAGE_A]: messages.subPageA,
  [HEADER.SUB_PAGE_B]: messages.subPageB,
};

export const getMenuLabels = (intl: InjectedIntl) => {
  return _.mapValues(menuMessages, v => {
    return intl.formatMessage(v);
  });
};
