import { all, put, fork } from 'redux-saga/effects';
import * as nameActList from 'src/app/app/constants';

import sagaApp from 'app/app/saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(sagaApp)]);
}
