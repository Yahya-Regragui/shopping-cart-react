import {compose, configureStore} from "@reduxjs/toolkit"
import cartSlice from "./Cart/cart.slice";
import products from './Products/products.slice'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
    reducer:{
        products,
        cartSlice
    },  

}
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;