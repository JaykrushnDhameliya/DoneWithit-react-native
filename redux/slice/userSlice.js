import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    createUser:[]
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        createUser: (state) => {
            state.createUser += 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer
