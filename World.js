MAPS = [];
function loadMap(mapname) {
    var temp = require('./client/maps/' + mapname + '.json');
    MAPS[mapname] = new Object();
    MAPS[mapname].width = temp.width;
    MAPS[mapname].height = temp.height;
    for (var i in temp.layers) {
        if (temp.layers[i].name == 'Ground Terrain') MAPS[mapname].groundT = temp.layers[i].data;
        if (temp.layers[i].name == 'Ground Overlay') MAPS[mapname].groundO = temp.layers[i].data;
        if (temp.layers[i].name == 'Deco0') MAPS[mapname].deco0 = temp.layers[i].data;
        if (temp.layers[i].name == 'Deco1') MAPS[mapname].deco1 = temp.layers[i].data;
        if (temp.layers[i].name == 'Deco2') MAPS[mapname].deco2 = temp.layers[i].data;
        if (temp.layers[i].name == 'Above0') MAPS[mapname].above0 = temp.layers[i].data;
        if (temp.layers[i].name == 'Above1') MAPS[mapname].above1 = temp.layers[i].data;
        if (temp.layers[i].name == 'Collision') MAPS[mapname].col1 = temp.layers[i].data;
        if (temp.layers[i].name == 'Collision2') MAPS[mapname].col2 = temp.layers[i].data;
    }
}
loadMap('The Village');
loadMap('Town Hall');
loadMap('House');
loadMap('Tiny House');
loadMap('The Docks');
loadMap('Fishing Hut');
loadMap('The River');
loadMap('The Forest');
loadMap('Lilypad Pathway Part 1');
loadMap('Lilypad Pathway Part 2');
loadMap('Lilypad Temple Room 0');
loadMap('Lilypad Temple Room 1');
loadMap('Lilypad Temple Room 2');
loadMap('Mysterious Room');
loadMap('The Weeping Forest');
loadMap('The Graveyard');
loadMap('The Arena');
loadMap('The Outskirts');
loadMap('Deserted Town');
loadMap('The Guarded Citadel');
loadMap('Town Cave');
loadMap('The Pet Arena');