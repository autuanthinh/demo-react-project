import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Switch from 'app/containers/router/Switch';
import { Layout } from 'antd';
import Breadcrumb from 'app/containers/Breadcrumb';

import asyncComponent from 'app/components/base/asyncComponent';
import Header from 'app/containers/Header';
import Footer from 'app/containers/Footer';

const AsyncHome = asyncComponent(() => import('app/pages/HomePage'));
const AsyncPageA = asyncComponent(() => import('app/pages/PageA'));
const AsyncPageReact = asyncComponent(() => import('app/pages/PageReact'));

const AuthRouter: FC<any> = () => {
  return (
    <Layout className="auth-layout">
      <Header />
      <Layout.Content>
        <Breadcrumb />
        <Switch>
          <Route exact={true} path={'/'} component={AsyncHome} />
          <Route exact={false} path={'/pageA'} component={AsyncPageA} />
          <Route exact={false} path={'/react'} component={AsyncPageReact} />
          <Redirect to={'/'} />
        </Switch>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default AuthRouter;
