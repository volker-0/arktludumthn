IDRegistry.genItemID("StopClock");
Item.createItem("StopClock", "Хронометр", {name: "chrono", meta: 0}, {stack: 1});
let ChronoBasic = new TimeStopClock(500);
ItemContainer.registerScreenFactory("chronometer.ui", function(container, name) {
  return ChronoBasic.window;
});

Baubles.registerBauble({
  id: ItemID.StopClock,
  type: BaubleType.charm,
  onEquip: function(client) {
    ChronoBasic.enabled = true;
  },
  onTakeOff: function(client) {
    ChronoBasic.enabled = false;
  },
  tick(){}
});

Callback.addCallback("NativeGuiChanged", function(screenName){
  if(ChronoBasic.enabled){
    if(screenName!="in_game_play_screen"){
      ChronoBasic.close();
    }else{
      ChronoBasic.open();
    }
  }
})

IDRegistry.genItemID("smt");
Item.createItem("smt", "smt", {name: "smt", meta: 0}, {stack: 1});

Baubles.registerBauble({id: ItemID.smt,type: BaubleType.charm,onEquip: function(client) {},onTakeOff: function(client) {},tick(){}});

AttackAPI.RegisterAttack(ItemID.smt, 0, 5, 3)