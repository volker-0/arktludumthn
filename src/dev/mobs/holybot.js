Callback.addCallback("ItemUse", function(coords, item){
    coords = coords.relative;
    if(item.id == ItemID.Hollybot){
        Entity.spawn(coords.x,coords.y,coords.z,"ark:holybot");
        Game.message("Призван проклятый механизмм");
        MusicPlayer.play("Holybot.music");
    };
});

Callback.addCallback("EntityDeath", function(entity, attacker, damageType){
    if(Entity.getTypeAddon(entity) == "ark:holybot"){
        MusicPlayer.stop();
    };
});
