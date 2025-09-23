% Reaction Process Predicates (10)

% UnconscReaction(h, stimulus, r, t)
unconsc_reaction(H, Stimulus, R, T) :- human(H), nonvar(Stimulus), nonvar(R), number(T).

% ConscProcessing(h, r1, r2, t)
consc_processing(H, R1, R2, T) :- human(H), nonvar(R1), nonvar(R2), number(T).

% ReactionStage(r, stage)
reaction_stage(R, Stage) :- nonvar(R), nonvar(Stage).

% EmotionalState(h, e, t)
emotional_state(H, E, T) :- human(H), nonvar(E), number(T).

% CognitiveState(h, C, T)
cognitive_state(H, C, T) :- human(H), nonvar(C), number(T).

% ImpulseControl(h, impulse, success)
impulse_control(H, Impulse, Success) :- human(H), nonvar(Impulse), nonvar(Success).

% SelfRegulation(h, strategy, effectiveness)
self_regulation(H, Strategy, Effectiveness) :- human(H), nonvar(Strategy), number(Effectiveness).

% PredictiveSimulation(h, scenario, outcome)
predictive_simulation(H, Scenario, Outcome) :- human(H), nonvar(Scenario), nonvar(Outcome).

% Suppression(h, reaction, degree, t)
suppression(H, Reaction, Degree, T) :- human(H), nonvar(Reaction), number(Degree), number(T).

% Catharsis(h, emotion, t)
catharsis(H, Emotion, T) :- human(H), nonvar(Emotion), number(T).