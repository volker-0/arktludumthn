LIBRARY({
  name: "RechargeLib",
  version: 1,
  shared: true,
  api: "CoreEngine"
});


let addRecharge = function(ItemToRecharge, rechargeTime){
  Callback.addCallback("ItemUse", function(coords, item){
    if(item.id == ItemID.ItemToRecharge){
      if(Updatable.getAll().includes(ItemID.ItemToRecharge)){
        if(Updatable.getSyncTime()>= rechargeTime){
          ItemID.ItemToRecharge.remove = true;
          Native.PlayerAbility.ATTACK_MOBS = true;
          Native.PlayerAbility.ATTACK_PLAYERS = true;
        };
      }else{
        Updatable.addUpdatable(ItemID.ItemToRecharge)
        Native.PlayerAbility.ATTACK_MOBS = false;
        Native.PlayerAbility.ATTACK_PLAYERS = false;
      };
    };
  })
};