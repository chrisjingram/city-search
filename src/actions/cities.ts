import {City} from "../Types";
export const setCities = (cities:City[]) => ({ type: "SET_CITIES", cities });
export const setLoading = (loading:boolean) => ({ type: "SET_LOADING", loading });
