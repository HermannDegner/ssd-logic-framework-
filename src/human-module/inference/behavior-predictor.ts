import { HumanProfile, LayerType } from "../types/human-layers";
import { Demand } from "../types/conflicts";
import { analyzeHumanState, HumanAnalysis } from "./human-analyzer";

export interface PredictedBehavior {
  action: string;
  probability: number; // [0,1]
}

export interface BehaviorPrediction {
  primaryPrediction: PredictedBehavior;
  alternativePredictions: PredictedBehavior[];
  confidenceLevel: number;
  dominantLayer: LayerType;
  influencingFactors: string[];
  interventionOpportunities: string[];
}

export function identifyDominantLayer(h: HumanProfile): LayerType {
  // Heuristic: lower resistance = more agile/dominant in short-term adaptation; could invert based on context
  const r = {
    [LayerType.Physical]: h.physicalLayer.resistance,
    [LayerType.Basic]: h.basicLayer.resistance,
    [LayerType.Core]: h.coreLayer.resistance,
    [LayerType.Upper]: h.upperLayer.resistance,
  };
  return (Object.entries(r).sort((a, b) => a[1] - b[1])[0][0] as LayerType) ?? LayerType.Core;
}

export function predictBehavior(
  h: HumanProfile,
  situation: { name: string; pressures?: Demand[] }
): BehaviorPrediction {
  const analysis: HumanAnalysis = analyzeHumanState(h, {
    currentDemands: situation.pressures ?? [],
  });
  const dominant = identifyDominantLayer(h);

  // Placeholder simple ranking
  const reactions: PredictedBehavior[] = [
    { action: `align_with_${dominant}`, probability: 0.6 },
    { action: `comply_social_norm`, probability: 0.2 },
    { action: `impulsive_reaction`, probability: 0.2 },
  ];

  return {
    primaryPrediction: reactions[0],
    alternativePredictions: reactions.slice(1),
    confidenceLevel: 0.65,
    dominantLayer: dominant,
    influencingFactors: analysis.activeConflicts,
    interventionOpportunities: ["adjust_norm_context", "narrative_reframing", "habit_substitution"],
  };
}