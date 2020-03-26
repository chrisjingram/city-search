import axios, {AxiosError} from "axios";
import {City} from "../Types";

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


export const fetchCities = (searchText: string): Promise<City[]> => {
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
    // Merges array of cities
    .then(responses => [...responses.map((response: any) => response.data)].flat(1))
};

export const fetchCitiesByPage = (searchText:string, page:number) => {
  return axios.get("https://jsonmock.hackerrank.com/api/cities/",{ params: { city: searchText, page }}).then(axiosResponse => axiosResponse.data)
};

