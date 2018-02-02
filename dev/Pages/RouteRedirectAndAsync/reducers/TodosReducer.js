import {FETCH_TODOS_PENDING, FETCH_TODOS_SUCCESS, ADD_TODO , DELETE_TODO} from '../actionTypes'

const TodosReducer =( state = {
    todos: [],
    todosLoading: false
},action) =>{
  
    switch(action.type) {
        case ADD_TODO:
           
            var newId = state.todos.length + 1;
            state = {
                ...state,
                todos: [
                    ...state.todos,
                    {id: newId, data: `${action.payload} -  ${newId}` }
                ]         
            }
            break;

        case FETCH_TODOS_PENDING:
            state = {
                ...state,
                todosLoading: true
            }
            break;
        case FETCH_TODOS_SUCCESS:
            state = {
                todos: action.payload,
                todosLoading: false
            }           
            break;

        case `${DELETE_TODO}_PENDING`:
            state = {
                ...state,
                todosLoading: true
            }
            break;         
        case `${DELETE_TODO}_FULFILLED`:
            let newTodos = [...state.todos];
            newTodos.splice(action.payload,1);
            state = {
                ...state,
                todos: newTodos,
                todosLoading: false         
            }                    
            break; 
    }

    return state;

}

export default TodosReducer;