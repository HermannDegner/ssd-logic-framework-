% Four-layer Interactions Predicates (8)

% LayerConflict(h, l1, l2, issue, t)
layer_conflict(H, L1, L2, Issue, T) :- human(H), nonvar(L1), nonvar(L2), nonvar(Issue), number(T).

% LayerAlignment(h, l1, l2, t)
layer_alignment(H, L1, L2, T) :- human(H), nonvar(L1), nonvar(L2), number(T).

% LayerDominance(h, layer, t)
layer_dominance(H, Layer, T) :- human(H), nonvar(Layer), number(T).

% PhysicalConstraint(h, action, limit)
physical_constraint(H, Action, Limit) :- human(H), nonvar(Action), number(Limit).

% InstinctiveDrive(h, drive, target, t)
instinctive_drive(H, Drive, Target, T) :- human(H), nonvar(Drive), nonvar(Target), number(T).

% SocialNorm(h, norm, compliance, t)
social_norm(H, Norm, Compliance, T) :- human(H), nonvar(Norm), number(Compliance), number(T).

% NarrativeGuide(h, story, behavior, t)
narrative_guide(H, Story, Behavior, T) :- human(H), nonvar(Story), nonvar(Behavior), number(T).

% LayerIntegration(h, t)
layer_integration(H, T) :- human(H), number(T).