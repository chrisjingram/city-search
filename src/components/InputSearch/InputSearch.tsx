import React from "react";
import {connect} from "react-redux";

import styles from "./InputSearch.module.scss";
import {bindActionCreators} from "redux";
import {fetchCities} from "../../services/Api";
import {setCities, setLoading} from "../../actions/cities";
import {ClipLoader} from "react-spinners";

type Props = {
  search(searchText:String): void,
  loading: boolean
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
      {props.loading && <ClipLoader size={25} loading={true} />}
    </div>
  )
};

const search = (searchText:string) => {
  return (dispatch:any) => {
    dispatch(setLoading(true));
    fetchCities(searchText).then(cities => {
      dispatch(setLoading(false));
      dispatch(setCities(cities));
    });
  }
};

const mapStateToProps = (state:any) => ({
  loading: state.cities.loading
});

const mapDispatchToProps = (dispatch:any) => bindActionCreators({search}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
