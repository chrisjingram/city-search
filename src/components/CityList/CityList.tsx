import React from "react";
import {City} from "../../Types";
import CityCell from "../CityCell";
import {connect} from "react-redux";

type Props = {
  cities: City[]
}

const CityList: React.FC<Props> = props => (
  <>
    {props.cities.map(city => <CityCell city={city} />)}
  </>
);

const mapStateToProps = (state:any) => ({
  cities: state.cities.cities
});

const mapDispatchToProps = (dispatch:any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CityList);