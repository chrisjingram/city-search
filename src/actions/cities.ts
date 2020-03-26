import {City} from "../Types";
export const setCities = (cities:City[]) => ({ type: "SET_CITIES", cities });