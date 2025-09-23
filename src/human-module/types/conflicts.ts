import { Real01 } from "./human-layers";

export interface StructureMembership {
  structure: string;
  role: string;
}

export interface Demand {
  fromStructure: string;
  toHumanId: string;
  demandId: string;
  description: string;
  direction: "do" | "avoid";
  target: string;
  urgency: Real01; // [0,1]
  timestamp: number;
}

export interface ConflictingDemand {
  demandA: Demand;
  demandB: Demand;
  contradicts: boolean;
}

export interface LoyaltyConflict {
  target1: string;
  target2: string;
  severity: Real01;
  timestamp: number;
}

export interface RoleStrain {
  structure: string;
  role: string;
  pressure: number; // [0,∞)
  timestamp: number;
}

export function contradicts(a: Demand, b: Demand): boolean {
  // Very simple contradiction check: opposite directions to same target or mutually exclusive descriptions
  if (a.target === b.target && a.direction !== b.direction) return true;
  if (a.description && b.description) {
    const A = a.description.toLowerCase();
    const B = b.description.toLowerCase();
    if (A.includes("do x") && B.includes("avoid x")) return true;
    if (A.includes("avoid x") && B.includes("do x")) return true;
  }
  return false;
}

export function detectConflictingDemands(demands: Demand[]): ConflictingDemand[] {
  const out: ConflictingDemand[] = [];
  for (let i = 0; i < demands.length; i++) {
    for (let j = i + 1; j < demands.length; j++) {
      const c = contradicts(demands[i], demands[j]);
      if (c) out.push({ demandA: demands[i], demandB: demands[j], contradicts: true });
    }
  }
  return out;
}