import UsersSagas from './users'
import { all } from 'redux-saga/effects';

// all allows all these processes to be created in parallel and waiting for all of them to be resolved once
// like promise.all
export default function* rootSaga() {
    yield all ([
        ...UsersSagas
    ]);
}