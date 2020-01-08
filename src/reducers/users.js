/* eslint-disable default-case */
import { Types } from '../actions/users';

const INITAL_STATE = {
    items: []
};

export default function users(state = INITAL_STATE, action) {
   switch(action.type) {
       case Types.GET_USERS_SUCCESS: {
           return {
               // coming from the actions/user.js
               items: action.payload.items
           }
       }
       default: {
           return state;
       }
   } 
}