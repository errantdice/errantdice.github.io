function getQuery(query) {
    "use strict";
    var pairs, pair, folder, name, i;
    pairs = {};
    for (i = 0; i < query.length; i = i + 1) {
        pair = query[i].split("=");
        pairs.set(pair[0], pair[1]);
    }
    folder = "actors/";
    name = pairs.get("name");
    if (name !== null) {
        name = folder.concat(name);
        name = name.concat(".json");
    }
    
}