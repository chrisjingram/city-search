import {ApiCity, CityGroup} from "../Types";
import {AnyAction} from "redux";

type State = {
  cityGroups: CityGroup[],
  cities: ApiCity[],
  loading: boolean,
  isSearched: boolean
}

const initialState: State = {
  cityGroups: [],
  cities: [],
  loading: false,
  isSearched: false
};

export default (state=initialState, action:AnyAction) => {
  switch(action.type){
    case 'SET_CITIES': {
      return { ...state, cities: action.cities }
    }
    case 'SET_CITY_GROUPS': {
      return { ...state, cityGroups: action.cityGroups }
    }
    case 'SET_LOADING': {
      return { ...state, loading: action.loading }
    }
    case 'SET_IS_SEARCHED': {
      return { ...state, isSearched: action.isSearched }
    }
    default: { return state }
  }
}