import React from "react";
import {connect} from "react-redux";

import styles from "./InputSearch.module.scss";
import {bindActionCreators} from "redux";
import {fetchCities, handleAPIError, organiseCities} from "../../services/Api";
import {setCities, setCityGroups, setLoading, setSearched} from "../../actions/cities";
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
      <input type="text" placeholder="Enter a city..." onChange={e => setSearchText(e.target.value)} value={searchText} />
      <button className={styles.searchButton} onClick={searchClicked}>Search</button>
      {props.loading && <div className={styles.loading}><ClipLoader size={25} loading={true} /></div>}
    </div>
  )
};

const search = (searchText:string) => {
  return (dispatch:any) => {
    dispatch(setLoading(true));
    fetchCities(searchText)
      .then(cities => {
        dispatch(setCities(cities));
        return organiseCities(cities)
      })
      .then(cityGroups => {
        dispatch(setSearched(true));
        dispatch(setLoading(false));
        dispatch(setCityGroups(cityGroups));
      })
      .catch(error => {
        console.log(error);
        handleAPIError(error);
        dispatch(setLoading(false));
      });
  }
};

const mapStateToProps = (state:any) => ({
  loading: state.cities.loading
});

const mapDispatchToProps = (dispatch:any) => bindActionCreators({search}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);
