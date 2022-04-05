import React, { FC, Props, useCallback, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Layout, Menu, Divider } from 'antd';
import { HEADER } from './enums';

import { useDispatch, useSelector } from 'react-redux';
import { routerLocationSelector } from 'app/containers/router/selectors';
import * as appActions from 'app/app/actions';

import messages from './messages';
import './index.scss';

export interface IHeaderProps extends Props<HTMLElement> {}

const Header: FC<IHeaderProps & InjectedIntlProps> = ({ intl }) => {
  const dispatch = useDispatch();
  const location = useSelector(routerLocationSelector);

  const logout = useCallback(() => dispatch(appActions.logout()), []);

  const activeKey = useMemo(() => {
    const paths = location.pathname.split('/');

    return paths[paths.length - 1];
  }, [dispatch, location]);

  return (
    <Layout.Header className="auth-header">
      <div className="logo" />
      <Menu theme="light" mode="horizontal" activeKey={activeKey}>
        <Menu.Item key={HEADER.DASHBOARD}>
          <Link to="/">{intl.formatMessage(messages.dashboard)}</Link>
        </Menu.Item>
        <Menu.Item key={HEADER.PAGE_A}>
          <Link to="/pageA">{intl.formatMessage(messages.pageA)}</Link>
        </Menu.Item>
      </Menu>
      <Dropdown
        trigger={['click']}
        overlay={
          <Menu>
            <Menu.Item key={HEADER.DASHBOARD}>
              <Link to="/">{intl.formatMessage(messages.dashboard)}</Link>
            </Menu.Item>
            <Divider style={{ margin: '8px 0' }} />
            <Menu.Item key={'logout'} onClick={logout}>
              {intl.formatMessage(messages.logout)}
            </Menu.Item>
          </Menu>
        }
      >
        <Avatar>User</Avatar>
      </Dropdown>
    </Layout.Header>
  );
};

export default injectIntl(Header);
