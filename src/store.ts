import {compose, configureStore} from "@reduxjs/toolkit"
import products from './Products/products.slice'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
    reducer:{
        products
    },  

}
)

export type RootState = ReturnType<typeof store.getState>

export default store;