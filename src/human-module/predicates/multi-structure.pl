% Multi-Structure Membership Predicates (6)

% MultiStructureMember(h, structures)
multi_structure_member(H, Structures) :- human(H), is_list(Structures).

% ConflictingDemands(h, s1, s2, demand, t)
conflicting_demands(H, S1, S2, Demand, T) :- human(H), nonvar(S1), nonvar(S2), nonvar(Demand), number(T).

% StructuralDilemma(h, dilemma, options, t)
structural_dilemma(H, Dilemma, Options, T) :- human(H), nonvar(Dilemma), is_list(Options), number(T).

% LoyaltyConflict(h, target1, target2, t)
loyalty_conflict(H, T1, T2, T) :- human(H), nonvar(T1), nonvar(T2), number(T).

% RoleStrain(h, role, pressure, t)
role_strain(H, Role, Pressure, T) :- human(H), nonvar(Role), number(Pressure), number(T).

% StructuralSupport(s1, s2, h, t)
structural_support(S1, S2, H, T) :- nonvar(S1), nonvar(S2), human(H), number(T).