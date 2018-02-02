import {FETCH_TODOS_PENDING, FETCH_TODOS_SUCCESS, ADD_TODO , DELETE_TODO} from '../actionTypes'
import axios from 'axios'
import placeholderData from '../placeholderData.js'

import {deleteTodo} from '../services'

export const fetchTodosAction = (dispatch)=>{
    dispatch({   
            type: FETCH_TODOS_PENDING
        }       
    )   
    //edit later as promise, and in a service 
    setTimeout(() => {
        dispatch({   
                type: FETCH_TODOS_SUCCESS,
                payload: placeholderData
            }       
        )        
    },1100)
   
};


export const addTodoAction = value =>(
    {   type: ADD_TODO,
        payload:value
    }
);

export const deleteTodoAction = id => {
    return {   
        type: DELETE_TODO,
        payload:  deleteTodo(id)
    }

}

