import {
  UnconsciousReaction,
  ConsciousProcessing,
  validateTwoStageTiming,
} from "../../src/human-module/types/reaction-process";
import { ReactionStage } from "../../src/human-module/types/human-layers";

describe("Two-stage reaction timing", () => {
  it("Valid unconscious (<500ms) then conscious (>=200ms later)", () => {
    const now = Date.now();
    const un: UnconsciousReaction = {
      humanId: "h1",
      stimulusId: "s1",
      stage: ReactionStage.Unconscious,
      reactionType: "startle",
      timestamp: now,
      latencyMs: 180,
    };
    const cons: ConsciousProcessing = {
      humanId: "h1",
      fromReactionId: `h1:s1:${now}`,
      stage: ReactionStage.Conscious,
      transformedReactionType: "reappraisal",
      timestamp: now + 300,
      delayFromUnconsciousMs: 300,
    };
    const result = validateTwoStageTiming(un, cons);
    expect(result.valid).toBe(true);
  });

  it("Invalid when conscious <200ms after unconscious", () => {
    const now = Date.now();
    const un: UnconsciousReaction = {
      humanId: "h1",
      stimulusId: "s1",
      stage: ReactionStage.Unconscious,
      reactionType: "startle",
      timestamp: now,
      latencyMs: 100,
    };
    const cons: ConsciousProcessing = {
      humanId: "h1",
      fromReactionId: `h1:s1:${now}`,
      stage: ReactionStage.Conscious,
      transformedReactionType: "reappraisal",
      timestamp: now + 150,
      delayFromUnconsciousMs: 150,
    };
    const result = validateTwoStageTiming(un, cons);
    expect(result.valid).toBe(false);
    expect(result.reasons.join(" ")).toMatch(/below min/i);
  });
});