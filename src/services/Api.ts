import axios, {AxiosError} from "axios";
import {ApiCity, CityGroup} from "../Types";

// Great to see some error handling - it goes to show you must have tested a range
// of scenarios including disabling your internet! Really nice to see.
export const handleAPIError = (error:AxiosError) => {
  let message = "An unknown error occurred, please try again later.";
  if (error.response) {
    // The request was made and the server responded with a non-200 status code
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    message = `Oops! An error occurred, please try again later. Status code: ${error.response.status}`;
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
    message = "Oops! Unable to search cities. Please check your internet connection.";
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  alert(message);
};

// Great grouping function - nice and easy to follow, making use of
// great es6 features
export const organiseCities = (cities: ApiCity[]): CityGroup[] => {
  const states = cities.reduce((states: any, city: ApiCity) => {
    if(states.hasOwnProperty(city.state)){
      states[city.state].push(city.city);
      return states;
    }else{
      states[city.state] = [city.city]
    }
    return states
  }, {});
  return Object.keys(states).map(state => ({ state, cities: states[state] }))
};

// A little harder to digest what's going on here - but the fact you
// picked up on the need for pagination to start with shows a good
// attention to detail. Where the code loses a bit of readability and
// flow, the fact you've supplemented this with comments is a good sign.
export const fetchCities = (searchText: string): Promise<ApiCity[]> => {
  return fetchCitiesByPage(searchText, 1)
    .then(initialResponse => {
      if(initialResponse.total_pages <= 1){ return [initialResponse] }
      // Generates range of pages excluding first page
      // Example: if total_pages === 3 then this generates [2,3]
      const pages = Array.from(Array(initialResponse.total_pages-1)).map((e,i)=>i+2);
      return axios.all(
        pages.map(page => fetchCitiesByPage(searchText, page))
      ).then(axios.spread((...responses:any[]) => {
        return [initialResponse, ...responses];
      }));
    })
    // .flat() isn't guaranteed to be supported - which isn't really a problem with
    // transpiling, however, to get the tests passing, I had to make this change.
    //
    // Goes to show the importance of testing!
    //
    // Merges array of cities
    .then(responses => [].concat(...responses.map((response: any) => response.data)))
};

export const fetchCitiesByPage = (searchText:string, page:number) => {
  return axios.get("https://jsonmock.hackerrank.com/api/cities/",{ params: { city: searchText, page }}).then(axiosResponse => axiosResponse.data)
};

