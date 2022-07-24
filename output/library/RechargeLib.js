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
  for(let i; i < RechargeLib.Items.length; i++){
    let a = RechargeLib.Items[i];
    if(a.item.id == item.id){
      if(a.item.data == item.data){
        time = a.rechargeTime;
      };
    }else{
      return
    };
  };

  let now = Math.floor((java.lang.management.ThreadMXBean.getCurrentThreadCpuTime())/50000000);
  if((now - RechargeLib.Recharge[player][ThreadTime]) > time){
    RechargeLib.Recharge[player][isRecharging] = false;
  }else{
    RechargeLib.Recharge[player][isRecharging] = true;
  };
  RechargeLib.Recharge[player][ThreadTime] = now;

  if(RechargeLib.Recharge[player][isRecharging] == false){
    RechargeLib.Recharge[player][isRecharging] = true;
  }else{
    Game.prevent();
  }
});

RechargeLib.addRechargeble(267, 0, 13);