import jsonPlaceHolder from '../API/jsonPlaceHolder';
import _ from 'lodash';
import { async } from 'q';

// export const fetchPosts = async () => {
//     // bad approach.....!!! breaking rules of redux here..Instead use redux thunk :)
//     const response = await jsonPlaceHolder.get('/posts')

//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     };
// };

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts')
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }
};

export const fetchUser = (id) => async dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {  
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data})
});
