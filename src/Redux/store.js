import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {persistReducer} from  "redux-persist"
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore"

//Import reducers
import categoriesReducer from "./Categories/CategoriesSlice"
import brandsReducer from "./Categories/BrandsSlice"
import productsReducer from "./Products/ProductsSlice"
import cartReducer from "./Cart/CartSlice"
import overlayReducer from "./Overlay/OverlaySlice"
import modalReducer from "./AlertModal/ModalSlice"


const reducers = combineReducers({
     categories: categoriesReducer,
     brands: brandsReducer,
     products: productsReducer,
     cart: cartReducer,
     overlay: overlayReducer,
     modal: modalReducer
 });

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
 }

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);
