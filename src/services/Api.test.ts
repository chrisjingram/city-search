import {fetchCities} from "./Api";

describe("fetchCities", () => {
  it("should return 10 results for a", () => {
    return fetchCities("a").then(cities => expect(cities).toHaveLength(10))
  });
  it("should return 17 results for e (paging)", () => {
    return fetchCities("e").then(cities => expect(cities).toHaveLength(17))
  });
});

