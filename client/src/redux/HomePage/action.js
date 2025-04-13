import {
  fetchHomePageDetails,  
  SetHomePageDetails,
  SetHomeMarqueeDetails,
  SetAboutPageDetails,
  SetServicesPageDetails,
  SetContactPageDetails,
  SetFacilitiesDetails
  } from "../../services/HomePageService";
  import { fetchHomePageDetailsError, fetchHomePageDetailsSuccess, setLoading,setDetails,setHomePageDetailsSuccess,setHomePageDetailsError,setAboutDetails, setAboutPageDetailsSuccess, setAboutPageDetailsError, setHomeMarqueeDetails, setHomeMarqueeDetailsSuccess,setHomeMarqueeDetailsError, setFacilitiesDetailsError, setFacilitiesDetailsSuccess, setFacilitiesDetails, setServicePageDetailsError, setServicePageDetailsSuccess, setServicePageDetails, setContactPageDetailsError, setContactPageDetailsSuccess, setContactPageDetails} from "./HomePage";
     
  export const fetchHomePageDetailsAction = () => (dispatch) => {
    dispatch(setLoading());
    fetchHomePageDetails()
      .then((res) => {
        dispatch(fetchHomePageDetailsSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchHomePageDetailsError(error.message));
      });
  };
  

  export const setHomePageDetailsAction = (payload, dispatch) => {
    dispatch(setDetails());
    return SetHomePageDetails(payload)
      .then((res) => {
        dispatch(setHomePageDetailsSuccess(res.data));
        return Promise.resolve(res);
      })
      .catch((error) => {
        dispatch(setHomePageDetailsError(error.message));
        return Promise.reject(error);
      });
  };
  
  export const setAboutPageDetailsAction = (payload, dispatch) => {
    dispatch(setAboutDetails());
    return SetAboutPageDetails(payload)
      .then((res) => {
        dispatch(setAboutPageDetailsSuccess(res.data));
        return Promise.resolve(res);
      })
      .catch((error) => {
        dispatch(setAboutPageDetailsError(error.message));
        return Promise.reject(error);
      });
  };
  
  export const setHomeMarqueeDetailsAction = (payload, dispatch) => {
    dispatch(setHomeMarqueeDetails());
    return SetHomeMarqueeDetails(payload)
      .then((res) => {
        dispatch(setHomeMarqueeDetailsSuccess(res.data));
        return Promise.resolve(res);
      })
      .catch((error) => {
        dispatch(setHomeMarqueeDetailsError(error.message));
        return Promise.reject(error);
      });
  };
  
  export const setContactPageDetailsAction = (payload, dispatch) => {
    dispatch(setContactPageDetails());
    return SetContactPageDetails(payload)
      .then((res) => {
        dispatch(setContactPageDetailsSuccess(res.data));
        return Promise.resolve(res);
      })
      .catch((error) => {
        dispatch(setContactPageDetailsError(error.message));
        return Promise.reject(error);
      });
  };
  
  export const setServicePageDetailsAction = (payload, dispatch) => {
    dispatch(setServicePageDetails());
    return SetServicesPageDetails(payload)
      .then((res) => {
        dispatch(setServicePageDetailsSuccess(res.data));
        return Promise.resolve(res);
      })
      .catch((error) => {
        dispatch(setServicePageDetailsError(error.message));
        return Promise.reject(error);
      });
  };

  export const setFacilitiesDetailsAction = (payload, dispatch) => {
    dispatch(setFacilitiesDetails());
    return SetFacilitiesDetails(payload)
      .then((res) => {
        dispatch(setFacilitiesDetailsSuccess(res.data));
        return Promise.resolve(res); // 🔁 return to chain with .then in component
      })
      .catch((error) => {
        dispatch(setFacilitiesDetailsError(error.message));
        return Promise.reject(error);
      });
  };
  

//   export const setHomePageDetailsAction = (payload,dispatch) =>{
//       dispatch(setDetails())
//       SetHomePageDetails(payload).then((res)=>{
//         dispatch(setHomePageDetailsSuccess(res.data))
//       })
//       .catch((error) => {
//         dispatch(setHomePageDetailsError(error.message));
//       })
//   }

// export const setAboutPageDetailsAction = (payload,dispatch) =>{
//   dispatch(setAboutDetails())
//   SetAboutPageDetails(payload).then((res)=>{
//     dispatch(setAboutPageDetailsSuccess(res.data))
//   })
//   .catch((error) => {
//     dispatch(setAboutPageDetailsError(error.message));
//   })
// }

// export const setHomeMarqueeDetailsAction = (payload,dispatch) =>{
// dispatch(setHomeMarqueeDetails())
// SetHomeMarqueeDetails(payload).then((res)=>{
//   dispatch(setHomeMarqueeDetailsSuccess(res.data))
// })
// .catch((error) => {
//   dispatch(setHomeMarqueeDetailsError(error.message));
// })
// }

// export const setContactPageDetailsAction = (payload,dispatch) =>{
// dispatch(setContactPageDetails())
// SetContactPageDetails(payload).then((res)=>{
//   dispatch(setContactPageDetailsSuccess(res.data))
// })
// .catch((error) => {
//   dispatch(setContactPageDetailsError(error.message));
// })
// }
// export const setServicePageDetailsAction = (payload,dispatch) =>{
// dispatch(setServicePageDetails())
// SetServicesPageDetails(payload).then((res)=>{
//   dispatch(setServicePageDetailsSuccess(res.data))
// })
// .catch((error) => {
//   dispatch(setServicePageDetailsError(error.message));
// })
// }
// export const setFacilitiesDetailsAction = (payload,dispatch) =>{
// dispatch(setFacilitiesDetails())
// SetFacilitiesDetails(payload).then((res)=>{
//   dispatch(setFacilitiesDetailsSuccess(res.data))
// })
// .catch((error) => {
//   dispatch(setFacilitiesDetailsError(error.message));
// })
// }

