ArmorAPI ={
  Armor:[

  ],
  Baubles:[

  ],
  RegisterArmor: function(id, data, def){
    this.Armor.push({id:id, data:data, def:def});
  },
  RegisterArmorBauble: function(id, data, def){
    this.Baubles.push({id:id, data:data, def:def});
  },
};

const Bauble =["amulet", "ring", "belt", "head", "body", "charm"]

ArmorAPI.RegisterArmor(ItemID.aerchestplate, 2)

Callback.addCallback("EntityHurt", function(attacker, entity, damageValue, damageType){
  if(damageType == 2||damageType == 3||damageType == 11){
    let defense = 0;
    let startHealth = Entity.getMaxHealth(entity);

    for(let i=0; i<4; i++){
      for(let n; n < ArmorAPI.Armor.length();n++){
        let arm = Entity.getArmorSlot(entity, i);
        if(arm.id == ArmorAPI.Armor[n][id] && arm.data == ArmorAPI.Armor[n][data]){
          defense += ArmorAPI.Armor[n][def];
        };
      };
    };

    if(Player.isPlayer(entity)){
      for(let i=0; i<6; i++){
        for(let n; n < ArmorAPI.Bauble.length(); n++){
          let arm = Baubles.getContainer(Network.getClientForPlayer(entity)).getSlot(Bauble[i]);
          if(arm.id == ArmorAPI.Bauble[n][id] && arm.data == ArmorAPI.Bauble[n][data]){
            defense += ArmorAPI.Bauble[n][def];
          };
        };
      };
    };

    if(damageValue> defense){
      if(damageValue< Entity.getHealth(entity)+defense){
        Entity.setMaxHealth(entity, startHealth + defense);
        Entity.setHealth(entity,Entity.getHealth(entity) + defense);
        runOnMainThread(function(){
          Entity.setMaxHealth(entity, startHealth);
        });
      };
    }else{
      Entity.setMaxHealth(entity, Entity.getMaxHealth(entity)+ damageValue-1);
      Entity.healEntity(entity, damageValue-1);
      runOnMainThread(function(){
        Entity.setMaxHealth(entity, startHealth);
      });
    };
  };
});