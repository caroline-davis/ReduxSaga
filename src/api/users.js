import axios from 'axios';
// import { getUsersRequest } from '../actions/users';

export const getUsers = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    })

}

export const createUser = ({firstName, lastName}) => {
    return axios.post('/users', {
        firstName,
        lastName
    });
};