import { describe, expect, it } from "vitest";

describe("test environment", () => {
  it("loads jest-dom matchers", () => {
    const node = document.createElement("div");
    node.textContent = "Oryva";
    expect(node).toHaveTextContent("Oryva");
  });
});
