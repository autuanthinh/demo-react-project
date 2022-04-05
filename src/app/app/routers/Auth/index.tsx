import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Switch from 'app/containers/router/Switch';
import { Layout } from 'antd';

import asyncComponent from 'app/components/base/asyncComponent';
import Header from 'app/containers/Header';
import Footer from 'app/containers/Footer';

const AsyncHome = asyncComponent(() => import('app/pages/HomePage'));
const AsyncPageA = asyncComponent(() => import('app/pages/PageA'));

const AuthRouter: FC<any> = () => {
  return (
    <Layout className="layout">
      <Header />
      <Switch>
        <Route exact={true} path={'/'} component={AsyncHome} />
        <Route exact={false} path={'/pageA'} component={AsyncPageA} />
        <Redirect to={'/'} />
      </Switch>
      <Footer />
    </Layout>
  );
};

export default AuthRouter;
