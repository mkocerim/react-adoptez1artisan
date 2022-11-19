import {createStore} from 'redux'

const initialState={
    token:"",
}

const authReducer =(state,action)=>{

console.log(">> AUTH REDUCER " ,state ,action)

//action.type
//action.payload


switch(action.type){
    case 'set_token':
        return{
            ...state,
            token:action.payload.token,
        }
    case 'remove_token':
        return{
            ...state,
            token:null,
        }
    default:
        return state
}

}

export default authReducer