let HolybotAmbient = new Sound("Holybot.mp3");
HolybotAmbient.setInPlayer();
HolybotAmbient.setLooping(true);
HolybotAmbient.setVolume(1);

Callback.addCallback("ItemUse", function(coords, item){
    coords = coords.relative;
    if(item.id == ItemID.hollybot){
        Entity.spawn(coords.x,coords.y,coords.z,"ark:holybot");
        Game.message("Призван проклятый механизмм");
        HolybotAmbient.play();
    }
});

Callback.addCallback("EntityDeath", function(entity, attacker, damageType){
    HolybotAmbient.stop();
})