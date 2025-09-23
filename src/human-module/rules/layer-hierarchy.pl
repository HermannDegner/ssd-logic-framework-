% Core Layer Hierarchy Rules

% For all H: Human(H) -> exists 4 layers
has_all_four_layers(H) :-
    human(H),
    physical_layer(H, _),
    basic_layer(H, _),
    core_layer(H, _),
    upper_layer(H, _).

% Physical constraints are absolute: Action cannot exceed limit
cannot_exceed_physical_limit(H, Action, Limit) :-
    physical_constraint(H, Action, Limit),
    % enforce: \+ exceeds(Action, Limit). (placeholder; exceeds/2 not defined in skeleton)
    true.