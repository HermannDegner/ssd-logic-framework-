import { detectConflictingDemands, Demand } from "../../src/human-module/types/conflicts";

describe("Multi-structure membership conflicts", () => {
  it("Detects contradictory demands (do vs avoid same target)", () => {
    const demands: Demand[] = [
      {
        fromStructure: "company",
        toHumanId: "h1",
        demandId: "d1",
        description: "do x",
        direction: "do",
        target: "x",
        urgency: 0.8,
        timestamp: Date.now(),
      },
      {
        fromStructure: "family",
        toHumanId: "h1",
        demandId: "d2",
        description: "avoid x",
        direction: "avoid",
        target: "x",
        urgency: 0.9,
        timestamp: Date.now(),
      },
    ];
    const conflicts = detectConflictingDemands(demands);
    expect(conflicts.length).toBe(1);
    expect(conflicts[0].contradicts).toBe(true);
  });
});