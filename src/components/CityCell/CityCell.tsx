import React from "react";

import {City} from "../../Types";
import styles from "./CityCell.module.scss";

type Props = {
  city: City
}

const CityCell: React.FC<Props> = props => {
  return (
    <div className={styles.CityCell}>
      <div className={styles.cityName}>{props.city.city}</div>
      <div className={styles.stateName}>{props.city.state}</div>
    </div>
  )
};

export default CityCell;