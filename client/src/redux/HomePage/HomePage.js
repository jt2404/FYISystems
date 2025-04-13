import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homePage: null,
  loading: false,
  error: null,
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    fetchHomePageDetailsSuccess: (state, action) => {
      state.error =null;
      state.homePage = action.payload;
      state.loading = false;
    },
    fetchHomePageDetailsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
        state.loading = true;
      },
      setDetails: (state) => {
        state.loading = true;
      },
      setHomePageDetailsSuccess: (state, action) => {
        state.error = null;
        // state.homePage = action.payload;
        state.loading = false;
      },
      setHomePageDetailsError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      setAboutDetails: (state) => {
        state.loading = true;
      },
      setAboutPageDetailsSuccess: (state, action) => {
        state.error = null;
        // state.homePage = action.payload;
        state.loading = false;
      },
      setAboutPageDetailsError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      setHomeMarqueeDetails: (state) => {
        state.loading = true;
      },
      setHomeMarqueeDetailsSuccess: (state, action) => {
        state.error = null;
        // state.homePage = action.payload;
        state.loading = false;
      },
      setHomeMarqueeDetailsError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      setContactPageDetails: (state) => {
        state.loading = true;
      },
      setContactPageDetailsSuccess: (state, action) => {
        state.error = null;
        // state.homePage = action.payload;
        state.loading = false;
      },
      setContactPageDetailsError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      setServicePageDetails: (state) => {
        state.loading = true;
      },
      setServicePageDetailsSuccess: (state, action) => {
        state.error = null;
        // state.homePage = action.payload;
        state.loading = false;
      },
      setServicePageDetailsError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      setFacilitiesDetails: (state) => {
        state.loading = true;
      },
      setFacilitiesDetailsSuccess: (state, action) => {
        state.error = null;
        // state.homePage = action.payload;
        state.loading = false;
      },
      setFacilitiesDetailsError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
  },
});

export const {
  setLoading,fetchHomePageDetailsError,fetchHomePageDetailsSuccess,setHomePageDetailsSuccess,setHomePageDetailsError,setDetails
  ,setFacilitiesDetails,setFacilitiesDetailsSuccess,setFacilitiesDetailsError,setServicePageDetails,setServicePageDetailsSuccess,setServicePageDetailsError,setContactPageDetails,setContactPageDetailsSuccess,setContactPageDetailsError,setHomeMarqueeDetails,setHomeMarqueeDetailsSuccess,setHomeMarqueeDetailsError,setAboutDetails,setAboutPageDetailsSuccess,setAboutPageDetailsError
 } = homePageSlice.actions;

export default homePageSlice.reducer;
