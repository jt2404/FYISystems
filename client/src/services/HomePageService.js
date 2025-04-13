import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";

const homePageUrl = `${API_URL}landingPage/`;

export const fetchHomePageDetails = (options = null) => ApiService.get(homePageUrl, options);

export const SetHomePageDetails = (options = null) => ApiService.putWithFormData(`${homePageUrl}/hero`,options)

export const SetAboutPageDetails = (options = null) => ApiService.putWithFormData(`${homePageUrl}about`,options)

export const SetHomeMarqueeDetails = (options = null) => ApiService.put(`${homePageUrl}marquee`,options)

export const SetFacilitiesDetails = (options = null) => ApiService.putWithFormData(`${homePageUrl}facilities`,options)

export const SetServicesPageDetails = (options = null) => ApiService.putWithFormData(`${homePageUrl}services`,options)

export const SetContactPageDetails = (options = null) => ApiService.put(`${homePageUrl}contact`,options)