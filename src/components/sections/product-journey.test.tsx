import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { ProductJourney } from "./product-journey";

afterEach(cleanup);

it("renders three journey stages in order", () => {
  render(
    <ProductJourney
      steps={[
        { index: "01", title: "Your story", body: "Begin with what you carry." },
        { index: "02", title: "Connections", body: "Notice links you missed." },
        { index: "03", title: "Next moves", body: "Turn insight into action." },
      ]}
    />
  );

  const items = screen.getAllByRole("listitem");
  expect(items).toHaveLength(3);
  expect(items[0]).toHaveTextContent("Your story");
  expect(items[1]).toHaveTextContent("Connections");
  expect(items[2]).toHaveTextContent("Next moves");
  expect(screen.queryByText(/Discover ORYVA FORGE/i)).not.toBeInTheDocument();
});
