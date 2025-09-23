% Membership and norms

% Being member_of a structure implies the structure can issue norms applicable to the subject
norm_applicability(S, N) :- member_of(S, STR), norm(N), aligns_with(N, STR).

% Simple violation detection (placeholder): conflicts_with(action, norm)
norm_violation(S, A, N) :-
    subject(S), action(A), norm(N),
    conflicts_with(A, N).