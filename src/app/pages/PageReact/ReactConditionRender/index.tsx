import React, { FC, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';
import { Col, Divider, Row } from 'antd';

export interface IConditionRenderProps {}

type CombineProps = IConditionRenderProps & InjectedIntlProps;

const ConditionRender: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(() => messages.reactConditionRender || headerMessages.pageReactConditionRender, []);

  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <Row>
        <Col span={12}>
          <h3>NULL</h3>
          <ul>
            <li>
              {'null && 1 =>'} <b>{null && 1}</b>
            </li>
            <li>
              {'null || 1 =>'} <b>{null || 1}</b>
            </li>
            <li>
              {'null ? 1 : 2 =>'} <b>{null ? 1 : 2}</b>
            </li>
          </ul>

          <Divider />

          <h3>UNDEFINED</h3>
          <ul>
            <li>
              {'undefined && 1 =>'} <b>{undefined && 1}</b>
            </li>
            <li>
              {'undefined || 1 =>'} <b>{undefined || 1}</b>
            </li>
            <li>
              {'undefined ? 1 : 2 =>'} <b>{undefined ? 1 : 2}</b>
            </li>
          </ul>

          <Divider />

          <h3>String empty</h3>
          <ul>
            <li>
              {`'' && 1 =>`} <b>{'' && 1}</b>
            </li>
            <li>
              {`'' || 1 =>`} <b>{'' || 1}</b>
            </li>
            <li>
              {`'' ? 1 : 2 =>`} <b>{'' ? 1 : 2}</b>
            </li>
          </ul>
        </Col>
        <Col span={12}>
          <h3>Number 0</h3>
          <ul>
            <li>
              {`0 && 1 =>`} <b>{0 && 1}</b>
            </li>
            <li>
              {`0 || 1 =>`} <b>{0 || 1}</b>
            </li>
            <li>
              {`0 ? 1 : 2 =>`} <b>{0 ? 1 : 2}</b>
            </li>
          </ul>

          <Divider />

          <h3>Object</h3>
          <ul>
            <li>
              {'{} && 1 =>'} <b>{{} && 1}</b>
            </li>
            <li>
              {'{} || 1 =>'}
              {/* <b>{{} || 1}</b> */}
              <b>{' error'}</b>
            </li>
            <li>
              {'{} ? 1 : 2 =>'} <b>{{} ? 1 : 2}</b>
            </li>
          </ul>

          <Divider />

          <h3>Array</h3>
          <ul>
            <li>
              {`['a', 'b'] && 1 =>`} <b>{['a', 'b'] && 1}</b>
            </li>
            <li>
              {`['a', 'b'] || 1 =>`} <b>{['a', 'b'] || 1}</b>
            </li>
            <li>
              {`['a', 'b'] ? 1 : 2 =>`} <b>{['a', 'b'] ? 1 : 2}</b>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default UtilInject.combineInjectionComponent([injectIntl], ConditionRender) as FC<IConditionRenderProps>;
