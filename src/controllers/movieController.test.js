import movieController from "./movieController";
import movieData from "./../../mock-data/movie-data.json";
import TestRenderer from "react-test-renderer";

const mock = async id => {
  return await movieData;
};

describe("movieController", () => {
  it("returns a navi route", async () => {
    try {
      const routeObject = await movieController(mock)({ params: { id: 1 } });

      expect(routeObject).toMatchObject({
        title: expect.any(String),
        view: expect.any(Object)
      });
    } catch (error) {
      console.log(error);
    }
  });

  it("Sets the correct title in route.title", async () => {
    const routeObject = await movieController(mock)({ params: { id: 1 } });
    expect(routeObject.title).toBe("Solo: A Star Wars Story");
  });

  it("Renders a <MovieComponent> in route.view", async () => {
    try {
      const routeObject = await movieController(mock)({ params: { id: 1 } });

      const component = TestRenderer.create(routeObject.view);

      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    } catch (error) {
      console.log(error);
    }
  });
});
