$.getJSON('/client/WorldEdit_tiles.json', function(data) {
    DECODE = data.decode;
    OBJECTS = data.objects;
    TERRAIN = data.terrain
});

WorldEdit = function() {
    self = {
        position1: [0, 0],
        position2: [0, 0],
        pos1: async function(x, y) {
            self.position1[0] = x;
            self.position1[1] = y;
            for (var i in tempMap[Player.list[selfId].map]) {
                if (tempMap[Player.list[selfId].map][i].tile_idx == 1692) {
                    tempMap[Player.list[selfId].map].splice(i, 1);
                    i--;
                }
            }
            tempMap[Player.list[selfId].map].push({
                x:x * 64,
                y:y * 64,
                map:Player.list[selfId].map,
                tile_idx:1692,
                canvas:'upper',
            });
        },
        pos2: async function(x, y) {
            self.position2[0] = x;
            self.position2[1] = y;
            for (var i in tempMap[Player.list[selfId].map]) {
                if (tempMap[Player.list[selfId].map][i].tile_idx == 1778) {
                    tempMap[Player.list[selfId].map].splice(i, 1);
                    i--;
                }
            }
            tempMap[Player.list[selfId].map].push({
                x:x * 64,
                y:y * 64,
                map:Player.list[selfId].map,
                tile_idx:1778,
                canvas:'upper',
            });
        },
        set: async function(id) {
            if (Player.list[selfId].currentItem == 'worldedit_wand') {
                var replacedid = id;
                for (var i in DECODE) {
                    replacedid = replacedid.replace(DECODE[i].id, DECODE[i].number);
                }
                socket.emit('worldedit_set', {pos1:self.position1, pos2:self.position2, id: replacedid});
            }
        }
    }
    return self;
};

w = new WorldEdit();