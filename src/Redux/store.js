import { configureStore } from "@reduxjs/toolkit"
import categoriesReducer from "./Categories/CategoriesSlice"

// const reducers = combineReducers({
//     categories: categoriesReducer,
// });

// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: []
// }

//const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: categoriesReducer
});

//export const persistor = persistStore(store);
