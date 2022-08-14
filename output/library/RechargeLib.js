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
  StartTimer: function(time,player){
    Threading.initThread("recharge"+ player, function(){
      let waitTime = time * 10;
      let thisRech = RechargeLib.Recharge[player];
      let thisContainer = thisRech.container;
      let thisWindow = thisRech.window;

      thisContainer.openAs(thisWindow);

      thisWindow.setContent({
        location: {
          x:550,
          y:225,
          width:206,
          height:50
        },
        elements: {},
        drawing: [{type: "bitmap", bitmap: "bar", height: 242, width: 1000}]
      });

      Logger.Log("0");

      java.lang.Thread.currentThread().sleep(waitTime);

      for(let i = 1; i<5; i++){
        thisWindow.setContent({
          location: {
            x:550,
            y:225,
            width:206,
            height:50
          },
          elements: {},
          drawing: [{type: "bitmap", bitmap: "bar"+i, height: 242, width: 1000}]
        });

        Logger.Log(i);
        java.lang.Thread.currentThread().sleep(waitTime);
      };

      Logger.Log("End");
      thisContainer.close()
    });
  },
};

Callback.addCallback("ServerPlayerLoaded", function(player){
  RechargeLib.Recharge[player] = {ThreadTime: 0, isRecharging: false, window: new UI.Window({
    location: {
      x:550,
      y:225,
      width:206,
      height:50
    },
    elements: {},
    drawing: [{type: "bitmap", bitmap: "bar", height: 242, width: 1000}]
  }), container: new UI.Container()};
  let some = RechargeLib.Recharge[player];
  some.window.setAsGameOverlay(true);
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
  if((now - ThisPlayerInformation.ThreadTime) > time){
    ThisPlayerInformation.isRecharging = false;
  }else{
    ThisPlayerInformation.isRecharging = true;
  };
  ThisPlayerInformation.ThreadTime = now;

  if(ThisPlayerInformation.isRecharging == false){
    ThisPlayerInformation.isRecharging = true;
    RechargeLib.StartTimer(time, player);
  }else{
    RechargeLib.StartTimer(time, player);
    Game.prevent();
  };
});

RechargeLib.addRechargeble(267, 0, 40);