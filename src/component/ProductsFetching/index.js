import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    data : []
}

const productsFetch = createSlice({
    name : 'shopping',
    initialState,
    reducers : {
        gettingPraducts : (state, action) => {
            state.data = action.payload
        }
    }
})

export const {gettingPraducts} = productsFetch.actions

export default productsFetch.reducer;

export function gettingProductFromURl() {
    return async function fetchDataURL(dispatch, getState) {
        const response = await fetch('https://fakestoreapi.com/products/')
        const result = await response.json()
        dispatch(gettingPraducts(result))
    }
}