IDRegistry.genItemID("StopClock");
Item.createItem("StopClock", "Хронометр", {name: "chrono", meta: 0}, {stack: 1});

Baubles.registerBauble({
  id: ItemID.StopClock,
  type: BaubleType.charm,
  onEquip(client) {
      alert("onEquip " + client.getPlayerUid());
      Panel.open(client);
  },
  onTakeOff(client) {
      Logger.Log("TakeOff");
      Panel.close(client);
  },
  tick(){}
});