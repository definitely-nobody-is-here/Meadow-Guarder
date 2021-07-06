MAPS = [];
function loadMap(mapname) {
    var temp = require('./client/maps/' + mapname + '.json');
    MAPS[mapname] = new Object();
    MAPS[mapname].name = mapname;
    MAPS[mapname].width = temp.width;
    MAPS[mapname].height = temp.height;
    for (var i in temp.layers) {
        if (temp.layers[i].name == 'Ground Terrain') MAPS[mapname].groundT = make2d(temp.layers[i].data, temp.width, temp.height);
        if (temp.layers[i].name == 'Ground Overlay') MAPS[mapname].groundO = make2d(temp.layers[i].data, temp.width, temp.height);
        if (temp.layers[i].name == 'Deco0') MAPS[mapname].deco0 = make2d(temp.layers[i].data, temp.width, temp.height);
        if (temp.layers[i].name == 'Deco1') MAPS[mapname].deco1 = make2d(temp.layers[i].data, temp.width, temp.height);
        if (temp.layers[i].name == 'Deco2') MAPS[mapname].deco2 = make2d(temp.layers[i].data, temp.width, temp.height);
        if (temp.layers[i].name == 'Above0') MAPS[mapname].above0 = make2d(temp.layers[i].data, temp.width, temp.height);
        if (temp.layers[i].name == 'Above1') MAPS[mapname].above1 = make2d(temp.layers[i].data, temp.width, temp.height);
        if (temp.layers[i].name == 'Collision') MAPS[mapname].col0 = make2d(temp.layers[i].data, temp.width, temp.height);
        if (temp.layers[i].name == 'Collision2') MAPS[mapname].col1 = make2d(temp.layers[i].data, temp.width, temp.height);
    }
}
function make2d(array, width, height) {
    var temp = [];
    temp.width = width;
    temp.height = height;
    var j = 0;
    for (var i = 0; i < height; i++) {
        temp[i] = [];
    }
    for (var i in array) {
        temp[i-(j*height)][j] = array[i];
        if (i-(j*height) > height-2) {
            j++;
        }
    }
    return temp;
}
editMap = function(x1, y1, x2, y2, map, layer, id) {
    console.log(x1)
    console.log(y1)
    console.log(x2)
    console.log(y2)
    console.log(map)
    console.log(layer)
    console.log(id)
    
}
editTile = function(x, y, map, layer, id) {
    if (x < MAPS[map].width && x > -1 && y < MAPS[map].height && y > -1) {
        if (layer == 'GT') MAPS[map].groundT[x][y] = id;
        if (layer == 'GO') MAPS[map].groundO[x][y] = id;
        if (layer == 'D0') MAPS[map].deco0[x][y] = id;
        if (layer == 'D1') MAPS[map].deco1[x][y] = id;
        if (layer == 'D2') MAPS[map].deco2[x][y] = id;
        if (layer == 'A0') MAPS[map].above0[x][y] = id;
        if (layer == 'A1') MAPS[map].above1[x][y] = id;
        if (layer == 'C0') MAPS[map].col1[x][y] = id;
        if (layer == 'C1') MAPS[map].col2[x][y] = id;
        io.emit('updateTile', {
            pos: [x, y],
            map: map,
            layer: layer,
            id: id+1
        });
    }
}


loadMap('The Village');
loadMap('Town Hall');
loadMap('House');
// loadMap('Tiny House');
console.log('\x1b[31m%s\x1b[0m', 'WORLDEDIT CURRENTLY DOES NOT SUPPORT TINY HOUSE DUE TO COMPATABILITY ISSUES');
loadMap('The Docks');
loadMap('The Flaming Sea');
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
console.info('MeadowGuarder Modded => WorldEdit v1.1.0');