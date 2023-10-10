import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
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
import  userReducer  from "./User/UserSlice"
import featuredReducer from "./FeaturedProducts/FeaturedSlice"
import footModalReducer from "./FootModal/FootModalSlice"

const reducers = combineReducers({
     categories: categoriesReducer,
     brands: brandsReducer,
     products: productsReducer,
     cart: cartReducer,
     overlay: overlayReducer,
     modal: modalReducer,
     user: userReducer,
     featured: featuredReducer,
     footModal: footModalReducer
 }); 

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "user"]
 }

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,

    //Para que no me tire el error en consola de que el estado no es serializable
     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
         serializableCheck: false
     })
});

export const persistor = persistStore(store);
