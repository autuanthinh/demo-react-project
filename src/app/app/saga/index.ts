import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
// import Config from 'app/config';
import queryString from 'query-string';

import { cookie } from 'app/utils';

import pollingAuth, { refreshToken } from './pollingAuth';
import * as routerAction from 'app/containers/router/actions';

import * as routerSelector from 'app/containers/router/selectors';

import * as appTypes from '../constants';
// import * as appSelectors from '../selectors';
import * as appActions from '../actions';

export function* initData(): any {
  yield delay(1000);
  yield put(appActions.setLoading(false));
}

export function* checkToken(): any {
  // const queryObject = yield select(routerSelector.queryObjectSelector);
  // const token: string = queryObject.token || cookie.getItem('token');
  // if (token) {
  //   if (queryObject.token) {
  //     const location = yield select(routerSelector.routerLocationSelector);
  //     const queryObject = yield select(routerSelector.queryObjectSelector);
  //     delete queryObject.token;
  //     const replaceUrl = queryString.stringifyUrl({
  //       url: location.pathname,
  //       query: queryObject,
  //     });
  //     yield put(routerAction.replace(replaceUrl));
  //   }
  //   yield call(refreshToken, token);
  //   yield call([pollingAuth, pollingAuth.pollTask], token);
  // } else {
  //   yield put(routerAction.push('/login'));
  // }

  // Temp code
  yield delay(1000);
  yield put(appActions.logout());
}

export function* login({ payload }: any): any {
  yield call([pollingAuth, pollingAuth.pollTask], payload);
}

export function* logout(): any {
  yield call([pollingAuth, pollingAuth.cancelPoll]);
}

export default function* rootSaga() {
  yield takeLatest(appTypes.INIT_DATA, initData);
  yield takeLatest(appTypes.CHECK_TOKEN, checkToken);
  yield takeLatest(appTypes.LOG_IN, login);
  yield takeLatest(appTypes.LOG_OUT, logout);
}
