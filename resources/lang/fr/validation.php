<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'Le champ :attribute doit être accepté.',
    'accepted_if' => 'Le champ :attribute doit être accepté lorsque :other est :value.',
    'active_url' => 'Le champ :attribute doit être une URL valide.',
    'after' => 'Le champ :attribute doit être une date après :date.',
    'after_or_equal' => 'Le champ :attribute doit être une date après ou égale à :date.',
    'alpha' => 'Le champ :attribute ne doit contenir que des lettres.',
    'alpha_dash' => 'Le champ :attribute ne doit contenir que des lettres, nombres, tirets et surlignes.',
    'alpha_num' => 'Le champ :attribute ne doit contenir que des lettres et des nombres.',
    'any_of' => 'Le champ :attribute est invalide.',
    'array' => 'Le champ :attribute doit être un type tableau.',
    'ascii' => 'Le champ :attribute doit contenir seulement de single-byte caractères alphanumeriques est symboles.',
    'before' => 'Le champ :attribute doit être une date avant :date.',
    'before_or_equal' => 'Le champ :attribute doit être une date avant ou égale à :date.',
    'between' => [
        'array' => 'Le champ :attribute doit être une valeure comprise entre :min et :max.',
        'file' => 'Le champ :attribute doit être une valeure kilobytes comprise entre :min et :max.',
        'numeric' => 'Le champ :attribute doit être un entier numérique comprise entre :min et :max.',
        'string' => 'Le champ :attribute doit être des chaînes de caractères comprise entre :min et :max.',
    ],
    'boolean' => 'Le champ :attribute doît être true ou false.',
    'can' => 'Le champ :attribute contient une valeure non autorisée.',
    'confirmed' => 'Le champ :attribute de confirmation ne correspond pas.',
    'contains' => 'Le champ :attribute ne contient pas la valeure requise.',
    'current_password' => 'Le mot de passe est incorrecte.',
    'date' => 'Le champ :attribute doit être une date valide.',
    'date_equals' => 'Le champ :attribute doit être égale à la date du :date.',
    'date_format' => 'Le champ :attribute doit correspondre à une date au format :format.',
    'decimal' => 'Le champ :attribute doit avoir une valeur de places de decimal :decimal.',
    'declined' => 'Le champ :attribute doit être décliné.',
    'declined_if' => 'Le champ :attribute field doit être decliné quand :other prend la valeur de :value.',
    'different' => 'Le champ :attribute et :other doit être différent.',
    'digits' => 'Le champ :attribute doit avoir :digits digits.',
    'digits_between' => 'Le champ :attribute doit être une valeure comprise entre :min et :max digits.',
    'dimensions' => 'Le champ :attribute a un dimension d\' image ivalide.',
    'distinct' => 'Le champ :attribute a une valeur dupliquée.',
    'doesnt_contain' => 'Le champ :attribute ne doit contient aucun des valeurs: :values.',
    'doesnt_end_with' => 'Le champ :attribute ne se termine pas par aucun des valeurs: :values.',
    'doesnt_start_with' => 'Le champ :attribute ne commence pas par aucun des valeurs: :values.',
    'email' => 'Le champ :attribute field doit être une adresse email valide.',
    'ends_with' => 'Le champ :attribute doit être terminé par un des valeurs: :values.',
    'enum' => 'Le champ :attribute selectionné est invalide.',
    'exists' => 'Le champ :attribute selectionné est invalide.',
    'extensions' => 'Le champ :attribute doit être une valeur des extensions: :values.',
    'file' => 'Le champ :attribute doit être un fichier.',
    'filled' => 'Le champ :attribute doit avoir une valeur.',
    'gt' => [
        'array' => 'Le champ :attribute doit avoir une valeurs plus que :value élements.',
        'file' => 'Le champ :attribute doit être supérieur à :value kilobytes.',
        'numeric' => 'Le champ :attribute doit être une valeure supérieur à :value.',
        'string' => 'Le champ :attribute doit être une valeure supérieur à :value caractères.',
    ],
    'gte' => [
        'array' => 'Le champ :attribute doit avoir une valeurs plus que :value élements.',
        'file' => 'Le champ :attribute doit être supérieur à :value kilobytes.',
        'numeric' => 'Le champ :attribute doit être une valeure supérieur à :value.',
        'string' => 'Le champ :attribute doit être une valeure supérieur à :value caractères.',
    ],
    'hex_color' => 'Le champ :attribute doit être une valeur de couleur au format hexadecimal.',
    'image' => 'Le champ :attribute doit être une image.',
    'in' => 'Le champ :attribute sélectionné est invalide.',
    'in_array' => 'Le champ :attribute doit exister dans :other.',
    'in_array_keys' => 'Le champ :attribute doit contenir au moins une des clés: :values.',
    'integer' => 'Le champ :attribute doit être un entier.',
    'ip' => 'Le champ :attribute doit être un adresse IP valide.',
    'ipv4' => 'Le champ :attribute doit être un adresse IP IPv4 valide.',
    'ipv6' => 'Le champ :attribute doit être un adresse IP IPv6 valide',
    'json' => 'Le champ :attribute doit être une chaine valide de JSON.',
    'list' => 'Le champ :attribute doit être une liste.',
    'lowercase' => 'Le champ :attribute doit être au minuscule.',
    'lt' => [
        'array' => 'Le champ :attribute doit avoir au plus :value éléments.',
        'file' => 'Le champ :attribute doit avoir au plus :value kilobytes.',
        'numeric' => 'Le champ :attribute doit avoir au plus :value.',
        'string' => 'Le champ :attribute doit avoir au plus :value caractères.',
    ],
    'lte' => [
        'array' => 'Le champ :attribute ne doit pas avoir plus de :value éléments.',
        'file' => 'Le champ :attribute doit avoir au plus ou égale à :value kilobytes.',
        'numeric' => 'Le champ :attribute doit avoir au plus ou égale à :value.',
        'string' => 'Le champ :attribute doit avoir au plus ou égale à :value caractères.',
    ],
    'mac_address' => 'Le champ :attribute doit être une adresse MAC valide.',
    'max' => [
        'array' => 'Le champ :attribute ne doit pas avoir plus de :max éléments.',
        'file' => 'Le champ :attribute ne doit pas être plus grand greater que :max kilobytes.',
        'numeric' => 'Le champ :attribute ne doit pas être plus grand que :max.',
        'string' => 'Le champ :attribute ne doit pas être plus grand que :max caractères.',
    ],
    'max_digits' => 'Le champ :attribute ne doit pas avoir plus de than :max digits.',
    'mimes' => 'Le champ :attribute doit être un fichier de types: :values.',
    'mimetypes' => 'Le champ :attribute doit être un fichier de type: :values.',
    'min' => [
        'array' => 'Le champ :attribute doit avoir au moins :min éléments.',
        'file' => 'Le champ :attribute doit avoir au moins :min kilobytes.',
        'numeric' => 'Le champ :attribute doit avoir au moins :min.',
        'string' => 'Le champ :attribute doit avoir au moins :min caractères.',
    ],
    'min_digits' => 'Le champ :attribute doit avoir au moins :min digits.',
    'missing' => 'Le champ :attribute doit être absent.',
    'missing_if' => 'Le champ :attribute doit être absent si :other est :value.',
    'missing_unless' => 'Le champ :attribute doit être absent à moins que :other est :value.',
    'missing_with' => 'Le champ :attribute doit être absent si :values est présent.',
    'missing_with_all' => 'Le champ :attribute doit être absent si :values sont présents.',
    'multiple_of' => 'Le champ :attribute doit être un multiple de :value.',
    'not_in' => 'Le champ :attribute sélectionné est invalide.',
    'not_regex' => 'Le champ :attribute est au format invalide.',
    'numeric' => 'Le champ :attribute doit être un nombre.',
    'password' => [
        'letters' => 'Le champ :attribute doit contenir au moins une lettre.',
        'mixed' => 'Le champ :attribute doit contenir une lettre en capitale et une lettre en majuscule.',
        'numbers' => 'Le champ :attribute doit contenir au moins un nombre.',
        'symbols' => 'Le champ :attribute doit contenir au moins une symbole.',
        'uncompromised' => 'Le champ :attribute donné a manifesté une fuite de donnée apparu. Choisit un :attribute different.',
    ],
    'present' => 'Le champ :attribute doit être présent.',
    'present_if' => 'Le champ :attribute doit être présent si :other est :value.',
    'present_unless' => 'Le champ :attribute doit être présent à moins que :other est :value.',
    'present_with' => 'Le champ :attribute doit être présent si :values est présent.',
    'present_with_all' => 'Le champ :attribute doit être présent si :values sont présents.',
    'prohibited' => 'Le champ :attribute est interdit.',
    'prohibited_if' => 'Le champ :attribute est interdit si :other est :value.',
    'prohibited_if_accepted' => 'Le champ :attribute est interdit si :other est accepté.',
    'prohibited_if_declined' => 'Le champ :attribute est interdit si :other est decliné.',
    'prohibited_unless' => 'Le champ :attribute est interdit à moins que :other est dans :values.',
    'prohibits' => 'Le champ :attribute interdise :other du fait présent.',
    'regex' => 'Le champ :attribute est au format invalide.',
    'required' => 'Le champ :attribute est obligatoire.',
    'required_array_keys' => 'Le champ :attribute doit contenir les entrées suivantes: :values.',
    'required_if' => 'Le champ :attribute est obligatoire si :other est :value.',
    'required_if_accepted' => 'Le champ :attribute  est obligatoire si :other est accepté.',
    'required_if_declined' => 'Le champ :attribute  est obligatoire si :other est decliné.',
    'required_unless' => 'Le champ :attribute  est obligatoire à moins que :other est dans :values.',
    'required_with' => 'Le champ :attribute  est obligatoire si :values est présent.',
    'required_with_all' => 'Le champ :attribute  est obligatoire si :values sont présents.',
    'required_without' => 'Le champ :attribute  est obligatoire si :values n\' est pas présent.',
    'required_without_all' => 'Le champ :attribute  est obligatoire si aucun des :values sont présent.',
    'same' => 'Le champ :attribute doit correspondre à :other.',
    'size' => [
        'array' => 'Le champ :attribute doit contenir :size éléments.',
        'file' => 'Le champ :attribute doit être :size kilobytes.',
        'numeric' => 'Le champ :attribute doit être :size.',
        'string' => 'Le champ :attribute doit être :size caractères.',
    ],
    'starts_with' => 'Le champ :attribute doit commencer par un des: :values.',
    'string' => 'Le champ :attribute doit être de type string.',
    'timezone' => 'Le champ :attribute doit être un timezone valide.',
    'unique' => 'Le champ :attribute existe déjà.',
    'uploaded' => 'Le champ :attribute pour upload a échoué.',
    'uppercase' => 'Le champ :attribute doit être en capitale.',
    'url' => 'Le champ :attribute doit être un URL valide.',
    'ulid' => 'Le champ :attribute doit être un ULID valide.',
    'uuid' => 'Le champ :attribute doit être un UUID valide.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
