import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language : "en",
}

export const counterSlice = createSlice({
    name:"language",
    initialState,
    reducers: {
        changeLanguage: (state) => {
            if(state.language==="en"){
                state.language = "tr"
            }else{
                state.language = "en"
            }
        },
    }
})


export const {changeLanguage} = counterSlice.actions

export default counterSlice.reducer