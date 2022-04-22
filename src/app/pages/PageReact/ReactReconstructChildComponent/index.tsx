import React, { FC, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { UtilInject } from 'app/utils';

import SyntaxHighlighter, { SyntaxHighlighterProps } from 'src/app/components/base/SyntaxHighlighter';

import { Card } from 'antd';
import List from './List';

import headerMessages from 'app/containers/Header/messages';
import messages from '../messages';

export interface IReconstructChildComponentProps {}

type CombineProps = IReconstructChildComponentProps & InjectedIntlProps;

const renderList = `<List>
  <List.Item label="hello" value="world" key="1" />
  <div>đi đâu mà vội mà vàng</div>
  <List.Item label="age" value={30} key="2" /> 
  <div>mà vấp phải đá mà quàng phải dây</div>
</List>`;

const renderItem = `<div>
  <label>Label {label}</label>
  <div>value {value}</div>
</div>`;

const syntaxProps: SyntaxHighlighterProps = {
  language: 'tsx',
};

const ReconstructChildComponent: FC<CombineProps> = ({ intl }) => {
  const titleIntl = useMemo(
    () => messages.reactReconstructChildComponent || headerMessages.pageReactReconstructChildComponent,
    []
  );

  return (
    <div>
      <h1>{intl.formatMessage(titleIntl)}</h1>
      <h3>
        Component receive list children and rewrite it on this Component (similar Table, Table.Column, Menu, Menu.Item)
      </h3>
      <Card title="Render">
        <SyntaxHighlighter {...syntaxProps}>{renderList}</SyntaxHighlighter>
      </Card>

      <Card title="Render Item">
        <SyntaxHighlighter {...syntaxProps}>{renderItem}</SyntaxHighlighter>
      </Card>

      <List>
        <List.Item label="hello" value="world" key="a" />
        <div>đi đâu mà vội mà vàng</div>
        <List.Item label="age" value={30} key="b" />
        <div>mà vấp phải đá mà quàng phải dây</div>
      </List>
    </div>
  );
};

export default UtilInject.combineInjectionComponent(
  [injectIntl],
  ReconstructChildComponent
) as FC<IReconstructChildComponentProps>;
