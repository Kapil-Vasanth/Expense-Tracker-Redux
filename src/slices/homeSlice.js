import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: "homeReducer",
    initialState: {
        newForm: true,
        data : {
            name: "",
            budget: '',
            food: '',
            travel: '',
            entertainment: '',
            others: '',
        }
    },
    reducers: {
        updateState: (state,action) => {
            state.data = action.payload
        }
    }

})

export const { updateState } = homeSlice.actions
export default homeSlice.reducer;