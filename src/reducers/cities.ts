import {City} from "../Types";
import {AnyAction} from "redux";

type State = {
  cities: City[],
  loading: boolean,
  isSearched: boolean
}

const initialState: State = {
  cities: [],
  loading: false,
  isSearched: false
};

export default (state=initialState, action:AnyAction) => {
  switch(action.type){
    case 'SET_CITIES': {
      return { ...state, cities: action.cities }
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