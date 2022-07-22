LIBRARY({
  name: "RechargeLib",
  version: 1.0,
  shared: true,
  api: "CoreEngine",
});

let Recharge = {};

Callback.addCallback("ServerPlayerLoaded", function(player){
  
});

let RechargeLib = {
  Items: [],
  addRechargeble: function(itemid, itemdata, rechargeTime){
    this.Items.push({item:{id:itemid, data:itemdata}, rechargeTime: rechargeTime});
  },
};

Callback.addCallback("PlayerAttack", function(player, victim){

  let item = Player.getCarriedItem(player);
  
});