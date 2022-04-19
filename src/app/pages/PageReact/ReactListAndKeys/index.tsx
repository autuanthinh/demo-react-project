import React, { FC, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import { Col, Row } from 'antd';
import List from './List';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

export interface IListAndKeysProps {}

type CombineProps = IListAndKeysProps & InjectedIntlProps;

const ListAndKeys: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(() => messages.reactListAndKeys || headerMessages.pageReactListAndKeys, []);

  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <div>
        <b>Note *</b>
      </div>
      <ul>
        <li>Key is unique</li>
        <li>Avoid using index as key</li>
      </ul>

      <Row>
        <Col span={12}>
          <h3>Has keys</h3>
          <List hasKey={true} />
        </Col>
        <Col span={12}>
          <h3>No keys</h3>
          <List hasKey={false} />
        </Col>
      </Row>
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], ListAndKeys) as FC<IListAndKeysProps>;
