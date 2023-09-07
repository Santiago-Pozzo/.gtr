import { combineReducers, configureStore } from "@reduxjs/toolkit"

import categoriesReducer from "./Categories/CategoriesSlice"
import brandsReducer from "./Categories/BrandsSlice"


const reducers = combineReducers({
     categories: categoriesReducer,
     brands: brandsReducer
 });

// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: []
// }

//const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: reducers
});

//export const persistor = persistStore(store);
