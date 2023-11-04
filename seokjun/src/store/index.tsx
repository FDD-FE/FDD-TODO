import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import todoSlice from "./todo";
import {persistStore} from "redux-persist";

const persistentConfig = {key: 'root', storage}
const rootReducer = combineReducers({todo: todoSlice.reducer})
const persistentReducer = persistReducer(persistentConfig, rootReducer)

export const store = configureStore({
    reducer: persistentReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== "production"
});


export const persistor = persistStore(store)