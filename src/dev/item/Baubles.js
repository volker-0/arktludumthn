IDRegistry.genItemID("StopClock");
Item.createItem("StopClock", "Хронометр", {name: "chrono", meta: 0}, {stack: 1});
let ChronoBasic = new TimeStopClock(5000);
ItemContainer.registerScreenFactory("chronometer.ui", function(container, name) {
  return ChronoBasic.window;
});

Baubles.registerBauble({
  id: ItemID.StopClock,
  type: BaubleType.charm,
  onEquip(client) {
    let debug = ChronoBasic.window.getContent();
    Logger.Log(JSON.stringify(debug));
    ChronoBasic.open(client);
  },
  onTakeOff(client) {
    Logger.Log("TakeOff");
    ChronoBasic.close(client);
  },
  tick(){}
});

Callback.addCallback("NativeGuiChanged", function(screenName){
  if(screenName!="in_game_play_screen"){
    TimeStopClock.close();
  }
})