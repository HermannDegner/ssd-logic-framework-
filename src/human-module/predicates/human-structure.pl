% Human Module Ontology v1.0 - Human Structure Predicates (12)

% Human(h)
human(H).

% HasLayer(h, layer, type)
has_layer(H, Layer, Type) :- human(H), nonvar(Layer), nonvar(Type).

% PhysicalLayer(h, p)
physical_layer(H, P) :- human(H), nonvar(P).

% BasicLayer(h, b)
basic_layer(H, B) :- human(H), nonvar(B).

% CoreLayer(h, c)
core_layer(H, C) :- human(H), nonvar(C).

% UpperLayer(h, u)
upper_layer(H, U) :- human(H), nonvar(U).

% BelongsToStructure(h, s, role)
belongs_to_structure(H, S, Role) :- human(H), nonvar(S), nonvar(Role).

% HasRole(h, s, r)
has_role(H, S, R) :- belongs_to_structure(H, S, R).

% Identity(h, i)
identity(H, I) :- human(H), nonvar(I).

% Belief(h, b)
belief(H, B) :- human(H), nonvar(B).

% Instinct(h, inst, strength)
instinct(H, Inst, Strength) :- human(H), nonvar(Inst), number(Strength).

% Attachment(h, target, degree)
attachment(H, Target, Degree) :- human(H), nonvar(Target), number(Degree).