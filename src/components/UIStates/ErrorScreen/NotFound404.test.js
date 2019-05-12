import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import NotFound404 from "./NotFound404";

describe("NotFound404", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<NotFound404 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("NotFound404 snapshot", () => {
    const component = TestRenderer.create(<NotFound404 />);

    const tree = component.toJSON();
    const link = tree.children.find(child => child.type === "a");

    expect(link.props.href).toBe("/");

    expect(tree).toMatchSnapshot();
  });
});
