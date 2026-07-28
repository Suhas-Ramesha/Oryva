import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { IntroSequence } from "./intro-sequence";

afterEach(cleanup);

it("renders the supplied logo with an accessible name", () => {
  render(<IntroSequence />);
  expect(screen.getByRole("img", { name: "ORYVA AI" })).toBeInTheDocument();
});

it("mounts the intro overlay on load (plays every visit, no session skip)", () => {
  render(<IntroSequence />);
  expect(screen.getByTestId("intro-sequence")).toBeInTheDocument();
});
