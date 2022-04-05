import { put, call, select, delay } from 'redux-saga/effects';
// import axios from 'axios';
// import Config from 'app/config';
import Utils from 'app/utils';
import SagaPoll from 'app/utils/SagaPoll';

import * as appSelector from '../selectors';
import * as appActions from '../actions';

import * as routerAction from 'app/containers/router/actions';

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
          yield put(routerAction.push('/login'));
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
    // const response: any = yield axios.post(Config.VALIDATE_URL, { Token: token });
    // localStorage.setItem('token', response.data.Token);
    // yield put(appActions.setToken(response.data.Token));
  } catch (error) {
    Utils.handleError(error);
    localStorage.removeItem('token');
    yield put(routerAction.push('/login'));
  }
}

export default new PollToken();
