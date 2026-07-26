import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { SprintArc } from "./sprint-arc";

afterEach(cleanup);

it("renders five sprint stages without an application CTA", () => {
  render(
    <SprintArc
      steps={[
        { index: "01", title: "Find the signal", body: "Notice something real." },
        { index: "02", title: "Ask the question", body: "Make it useful." },
        { index: "03", title: "Build the proof", body: "Ship something tangible." },
        { index: "04", title: "Show the learning", body: "Share what changed." },
        { index: "05", title: "Keep it alive", body: "Continue the work." },
      ]}
    />
  );

  const items = screen.getAllByRole("listitem");
  expect(items).toHaveLength(5);
  expect(items[0]).toHaveTextContent("Find the signal");
  expect(items[4]).toHaveTextContent("Keep it alive");
  expect(screen.queryByRole("link", { name: /bring your signal/i })).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: /bring your signal/i })).not.toBeInTheDocument();
});
