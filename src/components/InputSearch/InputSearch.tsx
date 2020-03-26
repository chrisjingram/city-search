import React from "react";

import styles from "./InputSearch.module.scss";

type Props = {
  search(searchText:String): void
}

const InputSearch: React.FC<Props> = props => {
  const [searchText, setSearchText] = React.useState("");
  const searchClicked = () => {
    if(!/^[a-z]+$/i.test(searchText)){
      return alert("Please enter the valid input.")
    }
    props.search(searchText);
  };
  return (
    <div className={styles.InputSearch}>
      <input type="text" placeholder="Search for a city..." onChange={e => setSearchText(e.target.value)} value={searchText} />
      <button className={styles.searchButton} onClick={searchClicked}>Search</button>
    </div>
  )
};


export default InputSearch;
