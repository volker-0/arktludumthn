ArmorAPI ={
  Armor:{

  },
  RegisterArmor: function(id, def){},
};

ArmorAPI.RegisterArmor(ItemID.aerchestplate, 10)

Callback.addCallback("EntityHurt", function(attacker, entity, damageValue, damageType){
  Game.message(damageType);
  if(damageType != -4151){
    let def = 0;
    let startHealth = Entity.getMaxHealth(entity);

    for(let i=0; i<4; i++){
      if(Entity.getArmorSlot(entity, i).id in ArmorAPI.Armor){
        for(let id in ArmorAPI.Armor){
          if(Entity.getArmorSlot(entity, i).id == id){
            def += ArmorAPI.Armor[id];
            break;
          }
        };
      };
    };

    if(damageValue> def){
      Entity.setMaxHealth(entity, Entity.getMaxHealth(entity)+ def);
      Entity.setHealth(entity, Entity.getMaxHealth(entity));
      runOnMainThread(function(){
        Entity.setMaxHealth(entity, startHealth);
      });
    }
  }
})