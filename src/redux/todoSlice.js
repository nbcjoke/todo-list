import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid} from 'uuid'

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: uuid(), title: 'todo1'},
        { id: uuid(), title: 'todo2'},
        { id: uuid(), title: 'todo3'},
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: uuid(),
                title: action.payload.title,
            };
            if( newTodo.title.trim() !== '') {
                state.push(newTodo);
            } else {
                return state;
            }
        },
        deleteTodo: (state, action) => {
           return state.filter((todo) => todo.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            console.log(action);
            return [...state.map((todo) => {
                if(todo.id === action.payload.id) {
                    return {...todo, title: action.payload.name}
                }
                return todo;
            })];
            }  
    }
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;