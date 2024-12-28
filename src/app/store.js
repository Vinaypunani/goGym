import { configureStore } from '@reduxjs/toolkit'
import gymReducer from '../features/gym/gymSlice'

export const store = configureStore({
  reducer: {
    gym: gymReducer,
  },
})