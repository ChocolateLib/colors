/// <reference types="cypress" />
import { amber } from "../../src";

describe("color", function () {
  it("amber", function () {
    expect(amber[50]).to.equal("#FFF8E1");
  });
});
