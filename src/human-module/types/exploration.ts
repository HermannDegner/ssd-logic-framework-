import { ExplorationPhase, Real01 } from "./human-layers";

export interface ActivityBoredom {
  activity: string;
  level: Real01; // [0,1]
  timestamp: number;
}

export interface ExplorationState {
  phase: ExplorationPhase;
  lastTransition: number;
}

export function detectExplorationPhase(
  stableDurationDays: number,
  boredom: ActivityBoredom | null,
  noveltySeekingIntensity: Real01
): ExplorationPhase {
  if (stableDurationDays >= 0 && stableDurationDays < 7) return ExplorationPhase.Stability;
  if (boredom && boredom.level > 0.7) return ExplorationPhase.Boredom;
  if (noveltySeekingIntensity >= 0.6) return ExplorationPhase.Search;
  return ExplorationPhase.Leap; // default to leap when high novelty + prolonged boredom (simplified for skeleton)
}