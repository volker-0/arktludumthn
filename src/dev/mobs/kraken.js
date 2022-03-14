Callback.addCallback("ItemUse", function(coords, item){
  coords = coords.relative;
  if(item.id == ItemID.Kracken){
    Entity.spawn(coords.x,coords.y,coords.z,"ark:kraken");
    Game.message("Призван Кракен");
  };
});