import {ApiCity, CityGroup} from "../Types";
export const setCities = (cities:ApiCity[]) => ({ type: "SET_CITIES", cities });
export const setCityGroups = (cityGroups:CityGroup[]) => ({ type: "SET_CITY_GROUPS", cityGroups });
export const setLoading = (loading:boolean) => ({ type: "SET_LOADING", loading });
export const setSearched = (isSearched:boolean) => ({ type: "SET_IS_SEARCHED", isSearched });
