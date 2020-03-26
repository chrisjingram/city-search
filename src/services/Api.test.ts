import {fetchCities, organiseCities} from "./Api";

describe("fetchCities", () => {
  it("should return 10 results for a", () => {
    return fetchCities("a").then(cities => expect(cities).toHaveLength(10))
  });
  it("should return 17 results for e (paging)", () => {
    return fetchCities("e").then(cities => expect(cities).toHaveLength(17))
  });
});

describe("organiseCities", () => {
  it("should return one group for one city", () => {
    expect(organiseCities([{
      city: "Dallas",
      state: "Texas"
    }])).toHaveLength(1)
    expect(organiseCities([{
      city: "Dallas",
      state: "Texas"
    }])).toEqual([{
      state: "Texas",
      cities: ["Dallas"]
    }]);
  });
  it("should return one group for two cities and one state", () => {

    expect(organiseCities([{
      city: "Dallas",
      state: "Texas"
    },{
      city: "Dalhart",
      state: "Texas"
    }])).toHaveLength(1);

    expect(organiseCities([{
      city: "Dallas",
      state: "Texas"
    },{
      city: "Dalhart",
      state: "Texas"
    }])).toEqual([{
      state: "Texas",
      cities: ["Dallas", "Dalhart"]
    }]);
  });
});

