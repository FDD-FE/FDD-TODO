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
        }
    }
})

export const {setTodo} = todoSlice.actions
export const selectTodo = (state: stateType) => {
    console.log(state.items)
    return []
}

export default todoSlice
