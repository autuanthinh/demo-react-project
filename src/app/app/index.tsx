import React, { FC, Props, useEffect, useMemo } from 'react';

import { injectReducer, injectSaga } from 'redux-injectors';
import { compose } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { UtilInject } from 'app/utils';

import Routers from './routers';

import appReducer from './reducer';
import appSaga from './saga';
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
  }, [dispatch]);

  const isLoggedIn = useMemo(() => !!authToken, [authToken]);

  if (isLoading) {
    return <PageLoading />;
  }

  return <div>{isCheckedLogin && <Routers isLoggedIn={isLoggedIn} />}</div>;
};

export default UtilInject.combineInjectionComponent(
  [compose(injectReducer({ key: 'appReducer', reducer: appReducer }), injectSaga({ key: 'appSaga', saga: appSaga }))],
  App
) as FC<IAppProps>;
