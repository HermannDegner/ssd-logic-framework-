% SSD Base Ontology v1.0 - core predicates (subset; extensible)

% Entities
subject(S).
structure(STR).
resource(R).
artefact(A).
environment(E).
context(C).
state(ST).
event(EV).
action(AC).
process(PR).
capability(CAP).
constraint(CN).
affordance(AF).
goal(G).
value(V).
norm(N).
policy(PL).
timeinterval(TI).

% Relations
member_of(S, STR) :- subject(S), structure(STR).
participates_in(S, PR) :- subject(S), process(PR).
influences(X, Y) :- nonvar(X), nonvar(Y).
constrains(CN, X) :- constraint(CN), nonvar(X).
affords(AF, ACType) :- affordance(AF), nonvar(ACType).
produces(X, R) :- nonvar(X), resource(R).
consumes(X, R) :- nonvar(X), resource(R).
causes(X, Y) :- nonvar(X), nonvar(Y).
precedes(X, Y) :- nonvar(X), nonvar(Y).
aligns_with(X, Y) :- nonvar(X), nonvar(Y).
conflicts_with(X, Y) :- nonvar(X), nonvar(Y).
supports(X, Y) :- nonvar(X), nonvar(Y).

% Action gating (schema-level, to be specialized)
can_act(S, AType) :-
    subject(S),
    % has_capability(S, AType), not_blocked(S, AType), afforded(S, AType).
    true.

% Norm compliance placeholder
complies_with_norm(S, N) :-
    subject(S), norm(N).