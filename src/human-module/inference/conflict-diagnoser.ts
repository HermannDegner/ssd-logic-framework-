import { HumanProfile } from "../types/human-layers";
import { Demand, detectConflictingDemands, RoleStrain } from "../types/conflicts";

export interface ConflictDiagnosis {
  layerConflicts: string[];
  structuralConflicts: string[];
  roleStrains: RoleStrain[];
  overallSeverity: number; // [0,1]
  resolutionStrategies: string[];
}

export function diagnoseConflicts(
  h: HumanProfile,
  inputs: { demands: Demand[]; roleStrains?: RoleStrain[] }
): ConflictDiagnosis {
  const conflicts = detectConflictingDemands(inputs.demands);
  const severity = Math.min(1, conflicts.length * 0.2 + (inputs.roleStrains?.length ?? 0) * 0.1);
  return {
    layerConflicts: [], // placeholder for layer-level analysis
    structuralConflicts: conflicts.map(
      (c) => `${c.demandA.fromStructure} vs ${c.demandB.fromStructure}`
    ),
    roleStrains: inputs.roleStrains ?? [],
    overallSeverity: severity,
    resolutionStrategies: ["prioritize_values", "seek_structural_support", "negotiate_roles"],
  };
}