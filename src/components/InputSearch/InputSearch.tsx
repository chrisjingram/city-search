import React from "react";

import styles from "./InputSearch.module.scss";

type Props = {
  searchClicked(searchText:String): void
}

const InputSearch: React.FC<Props> = props => {
  const [searchText, setSearchText] = React.useState("");
  return (
    <div className={styles.InputSearch}>
      <input type="text" placeholder="Search for a city..." onChange={e => setSearchText(e.target.value)} value={searchText} />
      <button className={styles.searchButton} onClick={() => props.searchClicked(searchText)}>Search</button>
    </div>
  )
};


export default InputSearch;
