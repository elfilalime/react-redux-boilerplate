import { LOGIN_USER } from '../actions/userTypes'

let initState = {
    response : {}
}

export function userReducer(state = initState ,action){
    switch(action.type){
        case LOGIN_USER : {
            return {
                ...state,
                response : action.payload
              };
        }
        default:
            return state
    }
    
}