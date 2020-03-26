import {City} from "../Types";
import {AnyAction} from "redux";

type State = {
  cities: City[]
}

const initialState: State = {
  cities: []
};

export default (state=initialState, action:AnyAction) => {
  switch(action.type){
    case 'SET_CITIES': {
      return {
        ...state,
        cities: action.cities
      }
    }
    default: { return state }
  }
}