import { createSlice } from "@reduxjs/toolkit";



const auth = createSlice({
    name: 'auth' ,
    initialState: {isLogged : false , user: "Hamza"} ,
    reducers : {
        logInOut : (state) => {
            state.isLogged = !state.isLogged 
        }
    }
})

export default auth.reducer ;
export const { logInOut } = auth.actions