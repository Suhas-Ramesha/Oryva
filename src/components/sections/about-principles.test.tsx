import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { AboutPrinciples } from "./about-principles";

afterEach(cleanup);

it("renders principles as an editorial list rather than cards", () => {
  render(
    <AboutPrinciples
      principles={[
        { title: "Start with what is real", body: "Real questions come first." },
      ]}
    />
  );
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getByText("Start with what is real")).toBeInTheDocument();
  expect(screen.queryByTestId("numbered-step")).not.toBeInTheDocument();
});
