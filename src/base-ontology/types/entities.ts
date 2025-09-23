export type ID = string;
export type ISODateTime = string;

export interface TimeInterval {
  id: ID;
  start?: ISODateTime;
  end?: ISODateTime;
}

export interface Subject {
  id: ID;
  kind: "subject" | "agent" | "collective";
  labels?: string[];
}

export interface Structure {
  id: ID;
  structureType?: "family" | "org" | "community" | "network" | "ecosystem" | "other";
  labels?: string[];
}

export interface Resource {
  id: ID;
  resourceType?: "time" | "money" | "material" | "information" | "energy" | "attention" | "other";
  quantity?: number;
  unit?: string;
}

export interface Artefact {
  id: ID;
  labels?: string[];
}

export interface Environment {
  id: ID;
  labels?: string[];
}

export interface Context {
  id: ID;
  env?: ID;
  structure?: ID;
  time?: TimeInterval;
  tags?: string[];
}

export interface State {
  id: ID;
  subject?: ID;
  vars?: Record<string, unknown>;
  time?: TimeInterval;
}

export interface Event {
  id: ID;
  eventType: string;
  subject?: ID;
  context?: ID;
  time?: TimeInterval;
}

export interface Action {
  id: ID;
  actionType: string;
  actor: ID; // Subject
  target?: ID; // Subject | Structure | Resource | Artefact
  context?: ID;
  time?: TimeInterval;
}

export interface Process {
  id: ID;
  steps: ID[]; // Action IDs or Event IDs
  time?: TimeInterval;
}

export interface Capability {
  id: ID;
  subject: ID;
  actionType: string;
  level?: number; // [0,∞)
}

export interface Constraint {
  id: ID;
  on: ID; // Subject | Structure | Action | Resource
  kind: "physical" | "normative" | "resource" | "temporal" | "other";
  rule?: string; // human-readable
}

export interface Affordance {
  id: ID;
  providedBy: ID; // Artefact | Environment | Structure
  enables: string; // actionType
  strength?: number; // [0,1]
}

export interface Goal {
  id: ID;
  owner: ID; // Subject | Structure
  description: string;
  priority?: number; // [0,1]
}

export interface Value {
  id: ID;
  owner: ID; // Subject | Structure
  label: string;
  weight?: number; // [0,1]
}

export interface Norm {
  id: ID;
  issuer: ID; // Structure
  appliesTo: ID; // Subject | Role
  statement: string; // e.g., "avoid x", "do y"
  priority?: number; // [0,1]
}

export interface Policy {
  id: ID;
  issuer: ID; // Structure
  statement: string;
}

export type Node =
  | Subject
  | Structure
  | Resource
  | Artefact
  | Environment
  | Context
  | State
  | Event
  | Action
  | Process
  | Capability
  | Constraint
  | Affordance
  | Goal
  | Value
  | Norm
  | Policy
  | TimeInterval;

export type EdgeType =
  | "member_of"
  | "participates_in"
  | "influences"
  | "constrains"
  | "affords"
  | "produces"
  | "consumes"
  | "causes"
  | "precedes"
  | "aligns_with"
  | "conflicts_with"
  | "supports";

export interface Edge {
  id: ID;
  from: ID;
  to: ID;
  type: EdgeType;
  weight?: number;
}