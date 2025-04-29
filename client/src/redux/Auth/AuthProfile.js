import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    error: null,
    token:"",
    role:"",
    id:"",
    FinancialAdvisorid:"",
    profile:{},
    payload:[],
};

const AuthProfileSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        AuthDetails: (state, action) => {
            state.message = "";
            state.error = null;
            state.token = action?.payload.data.token;
            state.role = action?.payload?.data.user.role;
            state.id =  action?.payload?.data.user._id;
            state.payload=action?.payload;
            state.FinancialAdvisorid =  action?.payload?.data.user.FinancialAdvisorid;
            state.profile = action?.payload?.data.user;
        },
        setErr: (state, action) => {
            state.message = action.payload.message || "An error occurred";
            state.error = action.payload.error || null;
          },
        setProfileData: (state, action) => {
            state.profile = action.payload;
        },
          
    },
});

export const { AuthDetails,setErr,setProfileData } = AuthProfileSlice.actions;
export default AuthProfileSlice.reducer;