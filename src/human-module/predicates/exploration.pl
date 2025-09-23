% Exploration/Growth Predicates (6)

% ExplorationPhase(h, phase, t)
exploration_phase(H, Phase, T) :- human(H), nonvar(Phase), number(T).

% BoredomLevel(h, activity, level, t)
boredom_level(H, Activity, Level, T) :- human(H), nonvar(Activity), number(Level), number(T).

% NoveltySeekimg(h, domain, intensity, t) [typo preserved from spec]
novelty_seekimg(H, Domain, Intensity, T) :- human(H), nonvar(Domain), number(Intensity), number(T).

% CreativeLeap(h, old_pattern, new_pattern, t)
creative_leap(H, Old, New, T) :- human(H), nonvar(Old), nonvar(New), number(T).

% IntentionalTraining(h, skill, goal, method, t)
intentional_training(H, Skill, Goal, Method, T) :- human(H), nonvar(Skill), nonvar(Goal), nonvar(Method), number(T).

% GrowthMindset(h, challenge, attitude, t)
growth_mindset(H, Challenge, Attitude, T) :- human(H), nonvar(Challenge), nonvar(Attitude), number(T).