Callback.addCallback("ItemUse", function(coords, item){
  coords = coords.relative;
  if(item.id == ItemID.Naida){
    Entity.spawn(coords.x,coords.y,coords.z,"ark:naida");
    Game.message("Призвана Наида");
  };
});