import {
  HumanProfile,
  LayerType,
  ExplorationPhase,
  resistanceOrderValid,
} from "../types/human-layers";
import { detectExplorationPhase } from "../types/exploration";
import { Demand, detectConflictingDemands } from "../types/conflicts";

export interface HumanAnalysis {
  layerStates: Record<LayerType, unknown>;
  activeConflicts: string[];
  structureMemberships: { structure: string; role: string }[];
  explorationPhase: ExplorationPhase | undefined;
  integrationLevel: number; // [0,1] placeholder
}

export function analyzeHumanState(
  h: HumanProfile,
  options?: {
    stableDurationDays?: number;
    boredom?: { activity: string; level: number; timestamp: number } | null;
    noveltySeekingIntensity?: number;
    currentDemands?: Demand[];
  }
): HumanAnalysis {
  const conflicts = (options?.currentDemands?.length ?? 0) > 1
    ? detectConflictingDemands(options!.currentDemands!).map(
        (c) => `Conflict: ${c.demandA.description} vs ${c.demandB.description}`
      )
    : [];

  const phase =
    options?.stableDurationDays !== undefined
      ? detectExplorationPhase(
          options.stableDurationDays,
          (options as any).boredom ?? null,
          options?.noveltySeekingIntensity ?? 0
        )
      : h.explorationPhase;

  const integration = resistanceOrderValid(h) ? 0.8 : 0.5; // naive placeholder score

  return {
    layerStates: {
      [LayerType.Physical]: h.physicalLayer,
      [LayerType.Basic]: h.basicLayer,
      [LayerType.Core]: h.coreLayer,
      [LayerType.Upper]: h.upperLayer,
    },
    activeConflicts: conflicts,
    structureMemberships: h.structureMemberships,
    explorationPhase: phase,
    integrationLevel: integration,
  };
}