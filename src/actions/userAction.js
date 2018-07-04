import { LOGIN_USER } from '../actions/userTypes'

export function loginUser({username , password}){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res =>
                dispatch({
                    type: LOGIN_USER,
                    payload: res
                })
            );
    }
}