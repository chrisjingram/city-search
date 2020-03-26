import {CityGroup} from "../Types";
export const setCities = (cityGroups:CityGroup[]) => ({ type: "SET_CITIES", cityGroups });
export const setLoading = (loading:boolean) => ({ type: "SET_LOADING", loading });
export const setSearched = (isSearched:boolean) => ({ type: "SET_IS_SEARCHED", isSearched });
