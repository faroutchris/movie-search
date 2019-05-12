import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import ErrorScreen from "./ErrorScreen";

describe("ErrorScreen", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<ErrorScreen>No error</ErrorScreen>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("ErrorScreen shows a fallback UI when a component has crashed", () => {
    const ComponentWillCrash = () => {
      throw new Error("I crashed");
    };

    const component = TestRenderer.create(
      <ErrorScreen inTestMode={true}>
        <ComponentWillCrash />
      </ErrorScreen>
    );

    const tree = component.toJSON();
    console.info(
      "\n\n========================================\n\n" +
        "THE ERROR ABOVE IS EXPECTED IN THE TESTS" +
        "\n\n========================================\n\n"
    );
    expect(tree).toMatchSnapshot();
  });
});
