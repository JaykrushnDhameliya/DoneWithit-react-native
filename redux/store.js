import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slice/userSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
