import { createGraph, addNode, addEdge, checkTemporalOrdering, canPerformAction } from "../../src/base-ontology/inference/graph";
import { Edge } from "../../src/base-ontology/types/entities";

describe("SBO v1.0 basics", () => {
  it("temporal precedes edges are consistent (no self-loops)", () => {
    const g = createGraph();
    const edges: Edge[] = [
      { id: "e1", from: "a", to: "b", type: "precedes" },
      { id: "e2", from: "b", to: "c", type: "precedes" },
      { id: "e3", from: "c", to: "c", type: "precedes" }, // invalid
    ];
    edges.forEach((e) => addEdge(g, e));
    const res = checkTemporalOrdering(g);
    expect(res.ok).toBe(false);
    expect(res.issues.some((s) => s.includes("loops"))).toBe(true);
  });

  it("capability/constraint/affordance gate action feasibility", () => {
    const result = canPerformAction(
      [{ actionType: "lift" }],
      [{ kind: "physical" }], // hard constraint blocks
      [{ enables: "lift" }],
      "lift"
    );
    expect(result.allowed).toBe(false);
    expect(result.reasons).toContain("hard constraint present");
  });
});