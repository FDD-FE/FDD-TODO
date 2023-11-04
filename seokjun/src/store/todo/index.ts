import {createSlice} from "@reduxjs/toolkit";

const name = 'todo'

type todoStateType = {
    id: number,
    content: string,
    isComplete: boolean,
}

type stateType = {
    items: todoStateType[]
}

const initialState: stateType = {items: [{id: 0, content: '', isComplete: false}]}

const todoSlice = createSlice({
    name: name, initialState, reducers: {
        setTodo: (state, action: { payload: stateType, type: string }) => {
            state.items.push(action.payload.items[0])
        },
        deleteTodo: (state, action: { payload: stateType, type: string }) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload.items[0].id)
        },
        updateTodo: (state, action: { payload: stateType, type: string }) => {
            const newState = state.items.map((todo: todoStateType, index: number) => {
                if (todo.id === action.payload.items[0].id) {
                    state.items[index].isComplete = action.payload.items[0].isComplete
                }

                return todo
            })

            state.items = [...newState]
        },
    }
})

export const {setTodo, deleteTodo, updateTodo} = todoSlice.actions
export const selectTodo = (state: { todo: stateType }) => state.todo

export default todoSlice
