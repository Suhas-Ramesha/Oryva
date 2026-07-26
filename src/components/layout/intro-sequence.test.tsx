import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { IntroSequence } from "./intro-sequence";

describe("IntroSequence", () => {
  beforeEach(() => sessionStorage.clear());
  afterEach(cleanup);

  it("renders the supplied logo with an accessible name", () => {
    render(<IntroSequence />);
    expect(screen.getByRole("img", { name: "Oryva AI" })).toBeInTheDocument();
  });

  it("records completion for the browser session", () => {
    render(<IntroSequence />);
    screen.getByTestId("intro-sequence").dispatchEvent(
      new Event("animationend", { bubbles: true })
    );
    expect(sessionStorage.getItem("oryva:intro-seen")).toBe("true");
  });
});
