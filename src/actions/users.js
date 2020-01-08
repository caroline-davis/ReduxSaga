export const Types = {
   GET_USERS_REQUEST: 'users/get_users_request',
   GET_USERS_SUCCESS: 'users/get_users_success'
};

// these are the actions
export const getUsersRequest = () => ({
    type: Types.GET_USERS_REQUEST
});

// items will be the array of users that will come from the api. in the saga we will call getUsersSuccess
// passing in the users list to the items property.
export const getUsersSuccess = ({items}) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
});