% Abstraction/Cognition Predicates (8)

% AbstractionMode(h, mode, domain, t)
abstraction_mode(H, Mode, Domain, T) :- human(H), nonvar(Mode), nonvar(Domain), number(T).

% SensoryPattern(h, pattern, stimulus, t)
sensory_pattern(H, Pattern, Stimulus, T) :- human(H), nonvar(Pattern), nonvar(Stimulus), number(T).

% ProceduralMemory(h, skill, proficiency)
procedural_memory(H, Skill, Proficiency) :- human(H), nonvar(Skill), number(Proficiency).

% SemanticKnowledge(h, concept, certainty)
semantic_knowledge(H, Concept, Certainty) :- human(H), nonvar(Concept), number(Certainty).

% NarrativeFrame(h, story, events, t)
narrative_frame(H, Story, Events, T) :- human(H), nonvar(Story), nonvar(Events), number(T).

% MemoryConsolidation(h, experience, layer, t)
memory_consolidation(H, Experience, Layer, T) :- human(H), nonvar(Experience), nonvar(Layer), number(T).

% Forgetting(h, memory, pathway_strength, t)
forgetting(H, Memory, PathwayStrength, T) :- human(H), nonvar(Memory), number(PathwayStrength), number(T).

% CognitiveBias(h, bias, domain, strength)
cognitive_bias(H, Bias, Domain, Strength) :- human(H), nonvar(Bias), nonvar(Domain), number(Strength).