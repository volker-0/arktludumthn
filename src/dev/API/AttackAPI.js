AttackAPI ={
  Items:[

  ],
  RegisterAttack: function(id, data, atck, vatck){
    this.Items.push({id:id, data:data, atck:atck, vatck:vatck});
  }
};

Callback.addCallback("EntityHurt", function(attacker, entity, damage, type){
  let attack = 0;
  let voidAttack = 0;

  if(Player.isPlayer(attacker)){
    for(let i=0; i<6; i++){
      let atc = Baubles.getContainer(Network.getClientForPlayer(attacker)).getSlot(Bauble[i]);
      for(let n; n < AttackAPI.Items.length(); n++){
        if(atc.id == AttackAPI.Items[n][id] && atc.data == AttackAPI.Items[n][data]){
          attack += AttackAPI.Items[n][atck];
          voidAttack += AttackAPI.Items[n][vatck];
        };
      };
    };
  };

  let carriedItem = Entity.getCarriedItem(attacker);
  for(let n; n < AttackAPI.Items.length(); n++){
    if(carriedItem.id == AttackAPI.Items[n][id] && carriedItem.data == AttackAPI.Items[n][data]){
      attack += AttackAPI.Items[n][atck];
      voidAttack += AttackAPI.Items[n][vatck];
    };
  };

  Entity.damageEntity(entity, attack, 11, {attacker: attacker, bool1: true});
  Entity.damageEntity(entity, attack, 1, {attacker: attacker, bool1: false});
});