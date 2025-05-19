import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stock")({
  component: Stock,
});

function Stock() {
  return <div className="p-2">Hello from Stock!</div>;
}
