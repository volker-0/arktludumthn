LIBRARY({
  name: "RechargeLib",
  version: 1.0,
  shared: true,
  api: "CoreEngine",
});

let RechargeLib = {
  Recharge: {},
  Items: [],
  addRechargeble: function(itemid, itemdata, rechargeTime){
    this.Items.push({item:{id:itemid, data:itemdata}, rechargeTime: rechargeTime});
  },
};

Callback.addCallback("ServerPlayerLoaded", function(player){
  RechargeLib.Recharge[player] = {ThreadTime: 0, isRecharging: false};
});

Callback.addCallback("PlayerAttack", function(player, victim){
  let time
  let item = Player.getCarriedItem(player);
  for(let i = 0; i < RechargeLib.Items.length; i++){
    let a = RechargeLib.Items[i];
    if(a.item.id == item.id){
      if(a.item.data == item.data){
        time = a.rechargeTime;
      };
    }else{
      return
    };
  };

  let ThisPlayerInformation = RechargeLib.Recharge[player];
  let now = Updatable.getSyncTime();
  Logger.Log(now - ThisPlayerInformation.ThreadTime)
  Logger.Log(time)
  if((now - ThisPlayerInformation.ThreadTime) > time){
    ThisPlayerInformation.isRecharging = false;
  }else{
    ThisPlayerInformation.isRecharging = true;
  };
  ThisPlayerInformation.ThreadTime = now;
  Logger.Log(JSON.stringify(RechargeLib.Recharge[player]));

  if(ThisPlayerInformation.isRecharging == false){
    ThisPlayerInformation.isRecharging = true;
  }else{
    Game.prevent();
  };
  Logger.Log("Done");
});

RechargeLib.addRechargeble(267, 0, 13);