// SSD Human Module Ontology v1.0 - Layer types and core human profile

export enum LayerType {
  Physical = "physical",
  Basic = "basic",
  Core = "core",
  Upper = "upper",
}

export enum ReactionStage {
  Unconscious = "unconscious",
  Conscious = "conscious",
}

export enum ConflictType {
  IntraLayer = "intra_layer",
  InterLayer = "inter_layer",
  MultiStructure = "multi_structure",
}

export enum ExplorationPhase {
  Stability = "stability",
  Boredom = "boredom",
  Search = "search",
  Leap = "leap",
}

export enum AbstractionLanguage {
  Sensory = "sensory",
  Procedural = "procedural",
  Semantic = "semantic",
  Narrative = "narrative",
}

// Measures
export type Real01 = number; // [0,1]
export type RealNonNeg = number; // [0,∞)
export type Milliseconds = number;

export interface PhysicalLayerState {
  physicalConstraints: { name: string; limit: number }[];
  healthStatus?: Record<string, number>;
  environmentalFactors?: { name: string; weight: number }[];
  resistance: number; // higher = harder to change
}

export interface BasicLayerState {
  instinctiveDrivers: { name: string; strength: Real01 }[];
  emotionalPatterns?: { emotion: string; intensity: Real01 }[];
  proceduralMemories?: { skill: string; proficiency: Real01 }[];
  attachmentTargets?: { target: string; degree: Real01 }[];
  resistance: number;
}

export interface CoreLayerState {
  socialRoles: { structure: string; role: string }[];
  normCompliance?: { norm: string; compliance: Real01 }[];
  rationalBeliefs?: { belief: string; certainty: Real01 }[];
  ruleBasedBehaviors?: { rule: string; adherence: Real01 }[];
  resistance: number;
}

export interface UpperLayerState {
  coreNarratives: string[];
  valueSystem?: string[];
  ideologicalCommitments?: string[];
  meaningFrameworks?: string[];
  resistance: number;
}

export interface StructureMembership {
  structure: string;
  role: string;
}

export interface HumanProfile {
  id: string;
  physicalLayer: PhysicalLayerState;
  basicLayer: BasicLayerState;
  coreLayer: CoreLayerState;
  upperLayer: UpperLayerState;
  structureMemberships: StructureMembership[];
  currentConflicts?: string[];
  explorationPhase?: ExplorationPhase;
  lastUpdated?: string; // ISO timestamp
}

// Resistance hierarchy validation
export function resistanceOrderValid(h: HumanProfile): boolean {
  const p = h.physicalLayer.resistance;
  const b = h.basicLayer.resistance;
  const c = h.coreLayer.resistance;
  const u = h.upperLayer.resistance;
  // Physical >= Basic >= Core >= Upper (spec: physical is hardest to move)
  return p >= b && b >= c && c >= u;
}