import { HumanProfile, resistanceOrderValid } from "../../src/human-module/types/human-layers";

describe("Layer hierarchy (resistance ordering)", () => {
  it("Physical >= Basic >= Core >= Upper", () => {
    const human: HumanProfile = {
      id: "h1",
      physicalLayer: { resistance: 0.95, physicalConstraints: [] },
      basicLayer: { resistance: 0.8, instinctiveDrivers: [] },
      coreLayer: { resistance: 0.6, socialRoles: [] },
      upperLayer: { resistance: 0.3, coreNarratives: [] },
      structureMemberships: [],
    };
    expect(resistanceOrderValid(human)).toBe(true);
  });

  it("Invalid ordering fails", () => {
    const human: HumanProfile = {
      id: "h2",
      physicalLayer: { resistance: 0.7, physicalConstraints: [] },
      basicLayer: { resistance: 0.9, instinctiveDrivers: [] }, // higher than physical -> invalid
      coreLayer: { resistance: 0.6, socialRoles: [] },
      upperLayer: { resistance: 0.5, coreNarratives: [] },
      structureMemberships: [],
    };
    expect(resistanceOrderValid(human)).toBe(false);
  });
});