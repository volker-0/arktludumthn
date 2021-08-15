let hollybotSound = null;
let HolybotSounds = [];

Callback.addCallback("ItemUse", function(coords, item){
    coords = coords.relative;
    if(item.id == ItemID.hollybot){
        Entity.spawn(coords.x,coords.y,coords.z,"ark:holybot");
        Game.message("Призван проклятый механизмм");
    }
});

Callback.addCallback("tick", function(){
    if (World.getThreadTime() % 4 == 0){
        let mobs = Entity.getAll();
        mobs.forEach(function(item, index, array) {
            if(Entity.getTypeAddon(item) == "ark:holybot" && !(hollybotSound == 1)){
                PlaySongVarFile("Holybot.mp3", HolybotSounds)
                hollybotSound = 1;
            };
        });
    };
});

Callback.addCallback("EntityDeath", function(entity,attacker,damageType){
    if(Entity.getTypeAddon(entity) == "ark:holybot"){
        var random = Math.random();
        coords = Entity.getPosition(entity);
        BlockSourse.getDefaultForActor(entity);
        BlockSourse.spawnDroppedItem(coords.x, coords.y, coords.z, ItemID.hollyingot, randomInteger(5, 15));
        if(random<= 0.25){
            BlockSourse.spawnDroppedItem(coords.x, coords.y, coords.z, ItemID.horngodhelmet, 1);
        } else if(random <=0.5){
            BlockSourse.spawnDroppedItem(coords.x. coords.y, coords.z, ItemID.horngodchestplate, 1);
        } else if(random<=0.75){
            BlockSourse.spawnDroppedItem(coords.x, coords.y, coords.z, ItemID.horngodleggins, 1);
        } else {
            BlockSourse.spawnDroppedItem(coords.x, coords.y, coords.z, ItemID.horngodboots);
        };
    };
});