import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { ProcessTimeline } from "./process-timeline";

afterEach(cleanup);

it("renders six ordered stages and a progress rail", () => {
  const steps = Array.from({ length: 6 }, (_, i) => ({
    index: String(i + 1).padStart(2, "0"),
    title: `Stage ${i + 1}`,
    body: `Outcome for stage ${i + 1}.`,
  }));

  render(<ProcessTimeline steps={steps} />);

  expect(screen.getByLabelText("Product process timeline")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem").length).toBeGreaterThanOrEqual(6);
  expect(screen.getByRole("heading", { name: "Stage 1" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Stage 6" })).toBeInTheDocument();
  expect(screen.queryByText(/career platform/i)).not.toBeInTheDocument();
});
