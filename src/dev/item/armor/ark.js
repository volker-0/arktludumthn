IDRegistry.genItemID("ArkHelmet");
IDRegistry.genItemID("ArkCheatplate");
IDRegistry.genItemID("ArkLeggings");
IDRegistry.genItemID("ArkBoots");

Item.createArmorItem("ArkHelmet", "§6Шлем Арка §r \n 7500 защита", {name: "ArkHelmet", meta: 0}, {type: "helmet", armor: 7500, durability: 1000000, texture: "armor/ArkArmor.png"},{isTech: true});
Item.createArmorItem("ArkCheatplate", "§6 Нагрудник Арка §r \n 7700 защита", {name: "ArkCheatplate", meta: 0}, {type: "chestplate", armor: 7700, durability: 1000000, texture: "armor/ArkArmor.png"},{isTech: true});
Item.createArmorItem("ArkLeggings", "§6 Поножи Арка §r  \n 7600 защита", {name: "ArkLeggings", meta: 0}, {type: "leggings", armor: 7600, durability: 1000000, texture: "armor/ArkArmor0.png"},{isTech: true});
Item.createArmorItem("ArkBoots", "§6 Ботинки Арка §r \n 7500 защита", {name: "ArkBoots", meta: 0}, {type: "boots", armor: 7500, durability: 1000000, texture: "armor/ArkArmor.png"},{isTech: true});

Armor.registerOnTickListener(ItemID.ArkHelmet, function(item, slot, player){
    Entity.addEffect(player, Native.PotionEffect.damageBoost, 250, 100)
Entity.addEffect(player, Native.PotionEffect.damageResistance, 250, 100)
});
Armor.registerOnTickListener(ItemID.ArkCheatplate, function(item, slot, player){
    Entity.addEffect(player, Native.PotionEffect.jump, 4, 100)
Entity.addEffect(player, Native.PotionEffect.movementSpeed, 10, 100)
});
Armor.registerOnTickListener(ItemID.ArkLeggings, function(item, slot, player){
    Entity.addEffect(player, Native.PotionEffect.regeneration, 250, 100)
Entity.addEffect(player, Native.PotionEffect.saturation, 250, 100)
});
Armor.registerOnTickListener(ItemID.ArkBoots, function(item, slot, player){
    Entity.addEffect(player, Native.PotionEffect.waterBreathing, 250, 100)
Entity.addEffect(player, Native.PotionEffect.fireResistance, 250, 100)
});

Callback.addCallback("LocalTick", function(){
    let player = Player.get();
    let helmet = Entity.getArmorSlot(player, 0);
    let chest = Entity.getArmorSlot(player, 1);
    let legs = Entity.getArmorSlot(player, 2);
    let boots = Entity.getArmorSlot(player, 3);
    let pos = Entity.getPosition(player);

if (helmet.id == ItemID.ArkHelmet && chest.id == ItemID.ArkCheatplate && legs.id == ItemID.ArkLeggings && boots.id == ItemID.ArkBoots) {

Particles.addParticle(pos.x, pos.y + 1, pos.z, 6); 

Player.setFlyingEnabled(true);
    }else if(new PlayerActor(Player.get()).getGameMode() == 0){
      Player.setFlyingEnabled(false);
    }
    });






