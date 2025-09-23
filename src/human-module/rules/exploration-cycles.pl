% Exploration-driven cycle: stability -> boredom -> search -> leap

exploration_cycle(H, T_stability, T_boredom, T_search, T_leap) :-
    exploration_phase(H, stability, T_stability),
    T_stability < T_boredom,
    exploration_phase(H, boredom, T_boredom),
    T_boredom < T_search,
    exploration_phase(H, search, T_search),
    T_search < T_leap,
    exploration_phase(H, leap, T_leap).