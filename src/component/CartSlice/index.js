import {createSlice} from '@reduxjs/toolkit'
const initialState = []

const cartSlice = createSlice({
    name : 'shopping',
    initialState,
    reducers : {
        addProducts : (state, action) => {
            console.log(action)
            state.push(action.payload)
        },
        deleteUser : (state, action) => {
            return state.filter(removingItem => removingItem.id !== action.payload)
        }
    }
})

export const {addProducts, deleteUser} = cartSlice.actions

export default cartSlice.reducer;