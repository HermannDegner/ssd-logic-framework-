% Two-Stage Reaction Process Rules

% Unconscious immediate fire if stimulus intensity exceeds threshold
unconscious_triggers(H, Stimulus, R, T) :-
    human(H),
    % Intensity/threshold placeholders:
    % intensity(Stimulus, I), threshold_unconscious(Th), I > Th,
    unconsc_reaction(H, Stimulus, R, T),
    reaction_stage(R, unconscious).

% Conscious processing occurs with delay >= 200ms after R1
conscious_follows_with_delay(H, R1, R2, T2) :-
    consc_processing(H, R1, R2, T2),
    reaction_stage(R1, unconscious),
    reaction_stage(R2, conscious).
    % Additional time arithmetic can be enforced with a temporal module.