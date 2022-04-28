import React, { FC, Props, useCallback, useMemo } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Layout, Menu, Divider } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import { HEADER, REACT_LINK, normalizeSelectedKeys } from './enums';

import { useDispatch, useSelector } from 'react-redux';
import { routerLocationSelector } from 'app/containers/router/selectors';
import * as appActions from 'app/app/actions';

import messages from './messages';
import './index.scss';

export interface IHeaderProps extends Props<HTMLElement> {}

const Header: FC<IHeaderProps & InjectedIntlProps> = ({ intl }) => {
  const dispatch = useDispatch();
  const location = useSelector(routerLocationSelector);

  const logout = useCallback(() => dispatch(appActions.logout()), [dispatch]);

  const activeKey: any = useMemo(() => {
    const paths = location.pathname.split('/');

    return paths[paths.length - 1];
  }, [location]);

  return (
    <Layout.Header className="auth-header">
      <div className="logo" />
      <Menu theme="light" mode="horizontal" selectedKeys={normalizeSelectedKeys(activeKey)}>
        <Menu.Item key={HEADER.DASHBOARD}>
          <Link to="/">{intl.formatMessage(messages.dashboard)}</Link>
        </Menu.Item>
        <Menu.Item key={HEADER.PAGE_A}>
          <Link to="/pageA">{intl.formatMessage(messages.pageA)}</Link>
        </Menu.Item>
        <Menu.SubMenu
          key={HEADER.PAGE_REACT}
          title={
            <Link to={REACT_LINK.PAGE_REACT}>
              {intl.formatMessage(messages.pageReact)} <CaretDownOutlined />
            </Link>
          }
        >
          <Menu.Item key={HEADER.PAGE_REACT_HOOK}>
            <Link to={REACT_LINK.PAGE_REACT_HOOK}>{intl.formatMessage(messages.pageReactHook)}</Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_CUSTOM_HOOK}>
            <Link to={REACT_LINK.PAGE_REACT_CUSTOM_HOOK}>{intl.formatMessage(messages.pageReactCustomHook)}</Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_CONTEXT}>
            <Link to={REACT_LINK.PAGE_REACT_CONTEXT}>{intl.formatMessage(messages.pageReactContext)}</Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_LEGACY_CONTEXT}>
            <Link to={REACT_LINK.PAGE_REACT_LEGACY_CONTEXT}>{intl.formatMessage(messages.pageReactLegacyContext)}</Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_REF}>
            <Link to={REACT_LINK.PAGE_REACT_REF}>{intl.formatMessage(messages.pageReactRef)}</Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_CONDITION_RENDER}>
            <Link to={REACT_LINK.PAGE_REACT_CONDITION_RENDER}>
              {intl.formatMessage(messages.pageReactConditionRender)}
            </Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_LIST_KEYS}>
            <Link to={REACT_LINK.PAGE_REACT_LIST_KEYS}>{intl.formatMessage(messages.pageReactListAndKeys)}</Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_CHILDREN_AS_FUNCTION}>
            <Link to={REACT_LINK.PAGE_REACT_CHILDREN_AS_FUNCTION}>
              {intl.formatMessage(messages.pageReactChildrenAsFunction)}
            </Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_HOC}>
            <Link to={REACT_LINK.PAGE_REACT_HOC}>{intl.formatMessage(messages.pageReactHOC)}</Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_LIFTING_STATE_UP}>
            <Link to={REACT_LINK.PAGE_REACT_LIFTING_STATE_UP}>
              {intl.formatMessage(messages.pageReactLiftingStateUp)}
            </Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_ROUTER_BLOCK_NAVIGATION}>
            <Link to={REACT_LINK.PAGE_REACT_ROUTER_BLOCK_NAVIGATION}>
              {intl.formatMessage(messages.pageReactRouterBlockNavigation)}
            </Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_RECONSTRUCT_CHILD_COMPONENT}>
            <Link to={REACT_LINK.PAGE_REACT_RECONSTRUCT_CHILD_COMPONENT}>
              {intl.formatMessage(messages.pageReactReconstructChildComponent)}
            </Link>
          </Menu.Item>
          <Menu.Item key={HEADER.PAGE_REACT_PORTAL}>
            <Link to={REACT_LINK.PAGE_REACT_PORTAL}>{intl.formatMessage(messages.pageReactPortal)}</Link>
          </Menu.Item>
        </Menu.SubMenu>
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
