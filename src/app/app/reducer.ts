import { fromJS } from 'immutable';
import * as nameActList from './constants';
import { ImmutableState } from 'app/types';
import { cookie } from 'app/utils';

const getInitData = () => {
  return fromJS({
    isLoading: true,
    isCheckedLogin: false,
    token: '',
  }) as ImmutableState;
};

const reducer = (state: ImmutableState = getInitData(), action: any): ImmutableState => {
  switch (action.type) {
    case nameActList.INIT_DATA:
      return state.set('isLoading', true);
    // App status
    case nameActList.SET_LOADING:
      return state.set('isLoading', action.payload);

    // Auth
    case nameActList.SET_TOKEN:
      return state.set('token', action.payload).set('isCheckedLogin', true);
    case nameActList.LOG_IN:
      const expiredTime = Date.now() + 10 * 60 * 1000;
      cookie.setItem(cookie.keys.TOKEN, action.payload, { expires: expiredTime }, false);
      return state.set('token', action.payload).set('isCheckedLogin', true);

    case nameActList.LOG_OUT:
    case nameActList.CLEAR:
      return getInitData().set('isCheckedLogin', true).set('isLoading', false);
    default:
      return state;
  }
};

export default reducer;
