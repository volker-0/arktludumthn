let RechargeLib = {
  Recharge: {},
  Items: [],
  addRechargeble: function(itemid, itemdata, rechargeTime){
    this.Items.push({item:{id:itemid, data:itemdata}, rechargeTime: rechargeTime});
  },
  StartTimer: function(time,player){
    let waitTime = time * 10;
    let thisRech = RechargeLib.Recharge[player];
    let thisContainer = thisRech.container;
    let thisWindow = thisRech.window;

    if(thisRech.thread != undefined){
      thisRech.thread.interrupt();
      thisRech.thread.interrupt();
      thisRech.thread = undefined;
      thisContainer.close();
    }
    Threading.initThread("recharge"+ player, function(){
      try{       
        thisRech.thread = java.lang.Thread.currentThread()
        thisContainer.openAs(thisWindow);
        for(let i = 0; i<5; i++){
          thisWindow.setContent({
            location: {
              x:794,
              y:(UI.getScreenHeight()/15),
              width:(50*4.125),
              height:50
            },
            elements: {},
            drawing: [{type: "bitmap", bitmap: "rechargeBar.bar"+i, height: (1000/4.125)+1, width: 1000}]
          });

          java.lang.Thread.currentThread().sleep(waitTime);
        };

        thisRech.thread = undefined;
        thisContainer.close();
      }catch(err){
      }
    });
  },
};

Callback.addCallback("ServerPlayerLoaded", function(player){
  RechargeLib.Recharge[player] = {ThreadTime: 0, isRecharging: false, window: new UI.Window({
    location: {
      x:794,
      y:(UI.getScreenHeight()/11),
      width:(50*4.125),
      height:50
    },
    elements: {},
    drawing: [{type: "bitmap", bitmap: "rechargeBar.bar0", height: (1000/4.125)+1, width: 1000}]
  }), container: new UI.Container(), thread: undefined};
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

RechargeLib.addRechargeble(267, 0, 40/*13*/);