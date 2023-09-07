import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {persistReducer} from  "redux-persist"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore"

//Import reducers
import categoriesReducer from "./Categories/CategoriesSlice"
import brandsReducer from "./Categories/BrandsSlice"
import productsReducer from "./Products/ProductsSlice"


const reducers = combineReducers({
     categories: categoriesReducer,
     brands: brandsReducer,
     products: productsReducer
 });

const persistConfig = {
    key: "root",
    storage,
    whitelist: []
 }

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);
