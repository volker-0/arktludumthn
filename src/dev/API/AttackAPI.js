AttackAPI ={
  Items:[

  ],
  RegisterAttack: function(id, data, atck, vatck){
    this.Items.push({id:id, data:data, atck:atck, vatck:vatck});
  }
};

Callback.addCallback("EntityHurt", function(attacker, entity, damage, type){
  if(attacker != -1){
    let attack = damage;
    let voidAttack = 0;

    if(Entity.getType(attacker) == 63){
      for(let i=0; i<8; i++){
        let atc = Baubles.getContainer(Network.getClientForPlayer(attacker)).getSlot(Bauble[i]);
        for(let n=0; n < AttackAPI.Items.length; n++){
          if(atc.id == AttackAPI.Items[n].id && atc.data == AttackAPI.Items[n].data){
            attack += AttackAPI.Items[n].atck;
            voidAttack += AttackAPI.Items[n].vatck;
          };
        };
      };
    };

    let carriedItem = Entity.getCarriedItem(attacker);
    for(let n=0; n < AttackAPI.Items.length; n++){
      if(carriedItem.id == AttackAPI.Items[n].id && carriedItem.data == AttackAPI.Items[n].data){
        attack += AttackAPI.Items[n].atck;
        voidAttack += AttackAPI.Items[n].vatck;
      };
    };

    if(attack>0){
      Entity.damageEntity(entity, attack, 11, {attacker: -1, bool1: true});
    };
    if(voidAttack>0){
      Entity.healEntity(entity, -voidAttack);
    }
    Game.message(voidAttack)
    Game.message(attack)
    Game.message(damage)
    Game.message(Entity.getHealth(entity))
  };
});