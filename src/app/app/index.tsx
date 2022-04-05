import React, { FC, Props, useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { UtilInject } from 'app/utils';

import Routers from './routers';

import * as appActions from './actions';

import * as selectors from 'app/app/selectors';
import PageLoading from 'src/app/containers/PageLoading';

export interface IAppProps extends Props<HTMLElement> {}

const App: FC<IAppProps> = ({}) => {
  const isLoading = useSelector(selectors.isLoadingSelector);

  const authToken = useSelector(selectors.tokenSelector);
  const isCheckedLogin = useSelector(selectors.isCheckedLoginSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.checkTokenExisted());
  }, []);

  const isLoggedIn = useMemo(() => !!authToken, [authToken]);

  if (isLoading) {
    return <PageLoading />;
  }

  return isCheckedLogin ? <Routers isLoggedIn={isLoggedIn} /> : null;
};

export default UtilInject.combineInjectionComponent([], App) as FC<IAppProps>;
