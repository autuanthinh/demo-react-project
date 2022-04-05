import React, { FC, Props } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HEADER } from './enums';

import messages from './messages';

export interface IHeaderProps extends Props<HTMLElement> {}

const Header: FC<IHeaderProps & InjectedIntlProps> = ({ intl }) => {
  return (
    <Layout.Header>
      <div className="logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key={HEADER.DASHBOARD}>
          <Link to="/">{intl.formatMessage(messages.dashboard)}</Link>
        </Menu.Item>
        <Menu.Item key={HEADER.PAGE_A}>
          <Link to="/pageA">{intl.formatMessage(messages.pageA)}</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default injectIntl(Header);
