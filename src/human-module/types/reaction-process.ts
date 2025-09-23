import { Milliseconds, ReactionStage } from "./human-layers";

export interface Stimulus {
  id: string;
  intensity: number; // [0,∞)
  timestamp: number; // ms epoch
}

export interface UnconsciousReaction {
  humanId: string;
  stimulusId: string;
  stage: ReactionStage.Unconscious;
  reactionType: string;
  timestamp: number; // ms epoch
  latencyMs: Milliseconds; // < 500ms
}

export interface ConsciousProcessing {
  humanId: string;
  fromReactionId: string;
  stage: ReactionStage.Conscious;
  transformedReactionType: string;
  timestamp: number; // ms epoch
  delayFromUnconsciousMs: Milliseconds; // >= 200ms
}

export interface ReactionTimingConstraints {
  maxUnconsciousLatencyMs: Milliseconds; // default 500
  minConsciousDelayMs: Milliseconds; // default 200
}

export const DefaultReactionTiming: ReactionTimingConstraints = {
  maxUnconsciousLatencyMs: 500,
  minConsciousDelayMs: 200,
};

export function validateTwoStageTiming(
  unconscious: UnconsciousReaction,
  conscious: ConsciousProcessing,
  constraints: ReactionTimingConstraints = DefaultReactionTiming
): { valid: boolean; reasons: string[] } {
  const reasons: string[] = [];
  if (unconscious.latencyMs >= constraints.maxUnconsciousLatencyMs) {
    reasons.push(
      `Unconscious latency ${unconscious.latencyMs}ms exceeds max ${constraints.maxUnconsciousLatencyMs}ms`
    );
  }
  const delay = conscious.timestamp - unconscious.timestamp;
  if (delay < constraints.minConsciousDelayMs) {
    reasons.push(
      `Conscious delay ${delay}ms is below min ${constraints.minConsciousDelayMs}ms`
    );
  }
  if (conscious.fromReactionId !== `${unconscious.humanId}:${unconscious.stimulusId}:${unconscious.timestamp}`) {
    reasons.push(`Conscious processing does not reference the correct upstream reaction`);
  }
  return { valid: reasons.length === 0, reasons };
}