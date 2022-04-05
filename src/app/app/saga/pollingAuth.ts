import { put, call, select, delay } from 'redux-saga/effects';
// import axios from 'axios';
// import Config from 'app/config';
import Utils from 'app/utils';
import SagaPoll from 'app/utils/SagaPoll';
import { cookie } from 'app/utils';

import * as authService from 'app/services/auth';

import * as appSelector from '../selectors';
import * as appActions from '../actions';

class PollToken extends SagaPoll {
  *pollSync(): any {
    yield put(appActions.initData());

    try {
      while (true) {
        yield delay(1000 * 60 * 10);

        const authToken = yield select(appSelector.tokenSelector);
        if (authToken) {
          yield call(refreshToken, authToken);
        } else {
          yield put(appActions.logout());
        }
      }
    } catch (error) {
      Utils.handleError(error);
    } finally {
      this.pollTaskId = null;
    }
  }
}

export function* refreshToken(token: any): any {
  try {
    const result: any = yield authService.refreshToken(token);
    localStorage.setItem('token', result.token);

    // And save new token to cookie with expire time 10m
    const expiredTime = Date.now() + 10 * 60 * 1000;
    cookie.setItem(cookie.keys.TOKEN, result.token, { expires: expiredTime }, false);

    yield put(appActions.setToken(result.token));
  } catch (error) {
    Utils.handleError(error);
    cookie.removeItem('token');
    yield put(appActions.logout());
  }
}

export default new PollToken();
