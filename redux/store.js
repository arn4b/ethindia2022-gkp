import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice'

const store = configureStore({
    reducer: counterReducer,
})

export default store;

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))