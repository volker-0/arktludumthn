ArmorAPI ={
  Armor:{

  },
  Baubles:{

  },
  RegisterArmor: function(id, def){
    this.Armor[id]=def;
  },
  RegisterArmorBauble: function(id, def){
    this.Baubles[id]=def;
  },
};

const Bauble =["amulet", "ring", "belt", "head", "body", "charm"]

ArmorAPI.RegisterArmor(ItemID.aerchestplate, 2)

Callback.addCallback("EntityHurt", function(attacker, entity, damageValue, damageType){
  if(damageType == 2||damageType == 3||damageType == 11){
    let defense = 0;
    let startHealth = Entity.getMaxHealth(entity);

    for(let i=0; i<4; i++){
      if(Entity.getArmorSlot(entity, i).id in ArmorAPI.Armor){
        for(let id in ArmorAPI.Armor){
          if(Entity.getArmorSlot(entity, i).id == id){
            defense += ArmorAPI.Armor[id];
            break;
          }
        };
      };
    };

    if(Player.isPlayer(entity)){
      for(let i=0; i<6; i++){
        let n = Bauble[i];
        player = Network.getClientForPlayer(entity);
        let container = Baubles.getContainer(player);
        let id =container.getSlot(n).id;
        if(ArmorAPI.Bauble[id] != undefined){
          defense += ArmorAPI.Bauble[id];
        };
      };
    }

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