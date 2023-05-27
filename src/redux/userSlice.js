import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
    },
    reducers : {
        changeFirstName: (state, action)=>{
            state.firstName = action.payload.firstName;
        },
        changeLastName: (state, action)=>{
            state.lastName = action.payload.lastName ;
        },
        changeEmail: (state, action)=>{
            state.email = action.payload.email;
        },
        changeUsername: (state, action)=>{
            state.userName = action.payload.userName ;
        },
        changePassword: (state, action)=>{
            state.password = action.payload.password;
        },
    },
});

export const {changeEmail, changeFirstName, changeLastName, changePassword, changeUsername} = userSlice.actions ;
export default userSlice.reducer ;