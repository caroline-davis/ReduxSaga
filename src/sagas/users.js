import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

// the function* defines a generator function
// yield is like 'await'

// call allows us to call a promise for eg, sequentially. its like a callback.

function* getUsers() {
    try {
        const result = yield call(api.getUsers);
        //this will update the users success in redux
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }))
    }catch(e){

    }
}

// this watches when one particular redux action has been dispatched, (first prop)
// then its action is to call a worker saga (second prop)
// under the hood the 'takeEvery' is running a while(true) loop - waiting and constantly watching
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* createUser(payload) {
    console.log(payload)
   
    try{   
        yield call(api.createUser, {
            firstName: payload.firstName, 
            lastName: payload.lastName});
        yield call(getUsers);
    } catch(e){

    }
}

function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
};

// fork is like creating a child process within other child processes
const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest)
];

export default usersSagas;