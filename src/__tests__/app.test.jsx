import React from "react";
import { mount } from "enzyme";
import App from "../app";

describe("app", () => {
  test("renders without crashing", () => {
    mount(<App />);
  });
});
