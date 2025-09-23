% Causality and temporal ordering

% A precedes B and B precedes C -> A precedes C (transitivity)
precedes_transitive(A, C) :- precedes(A, B), precedes(B, C).

% Basic causality consistency: if A causes B, A should precede B
causality_order(A, B) :- causes(A, B), precedes(A, B).

% Conflicts: if A causes B and B conflicts_with C, then A potentially conflicts_with C
cause_conflict(A, C) :- causes(A, B), conflicts_with(B, C).