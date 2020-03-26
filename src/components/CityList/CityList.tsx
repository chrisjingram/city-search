import React from "react";
import {City} from "../../Types";
import CityCell from "../CityCell";
import {connect} from "react-redux";

import styles from "./CityList.module.scss";

type Props = {
  cities: City[],
  isSearched: boolean
}

const CityList: React.FC<Props> = props => (
  <>
    { props.isSearched && <div className={styles.totalNumber}>Total cities found: <strong>{props.cities.length}</strong></div> }
    {props.cities.map((city, index) => <CityCell key={`${city.city}-${city.state}-${index}`} city={city} />)}
  </>
);

const mapStateToProps = (state:any) => ({
  cities: state.cities.cities,
  isSearched: state.cities.isSearched
});

const mapDispatchToProps = (dispatch:any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CityList);