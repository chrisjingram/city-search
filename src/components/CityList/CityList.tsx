import React from "react";
import {CityGroup} from "../../Types";
import CityCell from "../CityCell";
import {connect} from "react-redux";

import styles from "./CityList.module.scss";

type Props = {
  cityGroups: CityGroup[],
  isSearched: boolean
}

const CityList: React.FC<Props> = props => (
  <>
    { props.isSearched && <div className={styles.totalNumber}>Total cities found: <strong>{props.cityGroups.length}</strong></div> }
    {props.cityGroups.map(cityGroup => <CityCell key={cityGroup.state} cityGroup={cityGroup} />)}
  </>
);

const mapStateToProps = (state:any) => ({
  cityGroups: state.cities.cityGroups,
  isSearched: state.cities.isSearched
});

const mapDispatchToProps = (dispatch:any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CityList);