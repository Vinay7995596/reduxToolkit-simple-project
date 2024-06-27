import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../CartSlice";
import ProductsFetching from "../ProductsFetching";

const storeProducts = configureStore({
    reducer : {
        addCart : CartSlice,
        products : ProductsFetching
    }
})

export default storeProducts