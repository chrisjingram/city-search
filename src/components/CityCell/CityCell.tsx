import React from "react";

import {CityGroup} from "../../Types";
import styles from "./CityCell.module.scss";

type Props = {
  cityGroup: CityGroup
}

const CityCell: React.FC<Props> = props => {
  return (
    <div className={styles.CityCell}>
      <div className={styles.stateName}>{props.cityGroup.state}</div>
      <div className={styles.cityNames}>{props.cityGroup.cities.join(", ")}</div>
    </div>
  )
};

export default CityCell;