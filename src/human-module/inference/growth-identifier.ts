import { HumanProfile } from "../types/human-layers";
import { ExplorationPhase } from "../types/human-layers";

export interface GrowthOpportunities {
  boredDomains: string[];
  skillDevelopment: string[];
  explorationTargets: string[];
  creativePotential: number; // [0,1]
  recommendedChallenges: string[];
}

export function identifyGrowthOpportunities(
  h: HumanProfile,
  context: { boredDomains?: string[]; skillGaps?: string[]; unexplored?: string[]; phase?: ExplorationPhase }
): GrowthOpportunities {
  const phase = context.phase ?? h.explorationPhase ?? ExplorationPhase.Stability;
  return {
    boredDomains: context.boredDomains ?? [],
    skillDevelopment: context.skillGaps ?? [],
    explorationTargets: context.unexplored ?? [],
    creativePotential: phase === ExplorationPhase.Search || phase === ExplorationPhase.Leap ? 0.7 : 0.4,
    recommendedChallenges: ["moderate_stretch_project", "cross-domain_skill", "narrative_reframe_task"],
  };
}