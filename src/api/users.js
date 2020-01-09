import axios from 'axios';
import { getUsersRequest } from '../actions/users';

export const getUsers = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    })

}

