import React from "react";
import {connect} from "react-redux";

import styles from "./InputSearch.module.scss";
import {bindActionCreators} from "redux";
import {fetchCities} from "../../services/Api";
import {setCities} from "../../actions/cities";

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

const search = (searchText:string) => {
  return (dispatch:any) => {
    fetchCities(searchText).then(cities => dispatch(setCities(cities)))
  }
};

const mapStateToProps = (state:any) => ({
  cities: state.cities.cities
});

const mapDispatchToProps = (dispatch:any) => bindActionCreators({search}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
