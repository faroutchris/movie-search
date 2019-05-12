import searchController from "./searchController";
import searchResults from "./../../mock-data/search-result.json";
import TestRenderer from "react-test-renderer";

const mock = async id => {
  return await searchResults;
};

describe("searchController", () => {
  it("returns a navi route", async () => {
    try {
      const routeObject = await searchController(mock)({
        params: { q: "Avengers", page: "1" }
      });

      expect(routeObject).toMatchObject({
        title: expect.any(String),
        view: expect.any(Object)
      });
    } catch (error) {
      console.log(error);
    }
  });

  it("Sets the correct title in route.title", async () => {
    const routeObject = await searchController(mock)({
      params: { q: "Avengers", page: "1" }
    });
    expect(routeObject.title).toBe("Avengers - Page 1");
  });

  it("Renders a <SearchResult> in route.view", async () => {
    try {
      const routeObject = await searchController(mock)({
        params: { q: "Avengers", page: "1" }
      });

      const component = TestRenderer.create(routeObject.view);

      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    } catch (error) {
      console.log(error);
    }
  });
});
