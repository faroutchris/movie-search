import { apport, createURLWithParams } from "./apport";

describe("apport", () => {
  it("has a get method", () => {
    expect(apport.get()).toBeDefined();
  });
});

describe("createURLWithParams", () => {
  it("exists", () => {
    expect(createURLWithParams).toBeDefined();
  });

  it("returns a query string with a single param", () => {
    expect(createURLWithParams("https://api.com", { q: "my-query" })).toBe(
      "https://api.com?q=my-query"
    );
  });

  it("returns a query string with many params", () => {
    expect(
      createURLWithParams("https://api.com", {
        q: "my-query",
        q2: 2,
        q3: "three"
      })
    ).toBe("https://api.com?q=my-query&q2=2&q3=three");
  });

  it("returns a query string with stringified params", () => {
    expect(
      createURLWithParams("https://api.com", {
        obj: { foo: "bar" },
        arr: [1, 2, 3]
      })
    ).toBe('https://api.com?obj={"foo":"bar"}&arr=[1,2,3]');
  });
});

// I have no idea if I'm using tests correctly here.
// Just trying things out from the docs and seeing what happens
