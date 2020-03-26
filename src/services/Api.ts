import axios from "axios";

type City = {
  city:string,
  state:string
}

export const fetchCities = (searchText: string): Promise<City[]> => {
  return fetchCitiesByPage(searchText, 1)
    .then(initialResponse => {
      if(initialResponse.total_pages === 1){ return [initialResponse] }
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
    .then(responses => [...responses.map((response: any) => response.data)].flat(1));
};

export const fetchCitiesByPage = (searchText:string, page:number) => {
  return axios.get("https://jsonmock.hackerrank.com/api/cities/",{ params: { city: searchText, page }}).then(axiosResponse => axiosResponse.data)
};

