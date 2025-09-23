import { Edge, EdgeType, Node } from "../types/entities";

export interface KnowledgeGraph {
  nodes: Map<string, Node>;
  edges: Edge[];
}

export function createGraph(): KnowledgeGraph {
  return { nodes: new Map(), edges: [] };
}

export function addNode(g: KnowledgeGraph, n: Node): void {
  g.nodes.set((n as any).id, n);
}

export function addEdge(g: KnowledgeGraph, e: Edge): void {
  g.edges.push(e);
}

export function findEdges(g: KnowledgeGraph, type: EdgeType, from?: string, to?: string): Edge[] {
  return g.edges.filter(
    (e) => e.type === type && (from ? e.from === from : true) && (to ? e.to === to : true)
  );
}

// Simple validators

export function checkTemporalOrdering(g: KnowledgeGraph): { ok: boolean; issues: string[] } {
  const issues: string[] = [];
  for (const e of g.edges) {
    if (e.type === "precedes") {
      // Placeholder: temporal check would inspect node time intervals
      // Here we only assert distinct nodes and weight consistency
      if (e.from === e.to) issues.push(`precedes edge loops on ${e.from}`);
    }
  }
  return { ok: issues.length === 0, issues };
}

export function canPerformAction(
  capabilities: { actionType: string; level?: number }[],
  constraints: { kind: string; rule?: string }[],
  affordances: { enables: string; strength?: number }[],
  actionType: string
): { allowed: boolean; reasons: string[] } {
  const reasons: string[] = [];
  const cap = capabilities.some((c) => c.actionType === actionType);
  if (!cap) reasons.push("missing capability");
  const hardConstraint = constraints.some((c) => c.kind === "physical" || c.kind === "resource");
  if (hardConstraint) reasons.push("hard constraint present");
  const aff = affordances.some((a) => a.enables === actionType);
  if (!aff) reasons.push("no affordance");
  return { allowed: reasons.length === 0, reasons };
}