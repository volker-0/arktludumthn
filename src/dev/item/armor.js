IDRegistry.genItemID("germesboots");
Item.createArmorItem("germesboots", "§c Ботинки Гермеса §r \n 45 защита", {name: "germesboots", meta: 0}, {type: "boots", armor: 45, durability: 600, texture: "armor/germesboots.png"});

Armor.registerOnTakeOnListener(ItemID.germesboots, function(item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.movementSpeed, 15, 9999999)
    Entity.addEffect(player, Native.PotionEffect.jump, 1, 999999999)
});
Armor.registerOnTakeOffListener(ItemID.germesboots, function(item, slot, player) {
    Entity.clearEffect(player, Native.PotionEffect.movementSpeed);
    Entity.clearEffect(player, Native.PotionEffect.jump);
});



IDRegistry.genItemID("firerisboots");
Item.createArmorItem("firerisboots", "§c Ботинки Фиреруса §r \n 110 защита \n§6 Огнеусточевые", {name: "firerisboots", meta: 0}, {type: "boots", armor: 110, durability: 600, texture: "armor/firerisboots.png"});

Armor.registerOnTakeOnListener(ItemID.firerisboots, function(item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.fireResistance, 100, 9999999999)
});
Armor.registerOnTakeOffListener(ItemID.firerisboots, function(item, slot, player) {
    Entity.clearEffect(player, Native.PotionEffect.fireResistance);
});

IDRegistry.genItemID("gfboots");
Item.createArmorItem("gfboots", "§c Искрящие бегуны §r \n 160 защита \n Огнеусточевые и супер быстрые", {name: "gfboots", meta: 0}, {type: "boots", armor: 160, durability: 600, texture: "armor/gfboots.png"});

Armor.registerOnTakeOnListener(ItemID.gfboots, function(item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.fireResistance, 100, 9999999999)
    Entity.addEffect(player, Native.PotionEffect.movementSpeed, 10, 9999999999)
    Entity.addEffect(player, Native.PotionEffect.jump, 4, 9999999999)
});

Armor.registerOnTakeOffListener(ItemID.gfboots, function(item, slot, player) {
    Entity.clearEffect(player, Native.PotionEffect.fireResistance);
    Entity.clearEffect(player, Native.PotionEffect.movementSpeed);
    Entity.clearEffect(player, Native.PotionEffect.jump);
});


IDRegistry.genItemID("ugfboots");
Item.createArmorItem("ugfboots", "§c Бегуны поджигателя земель §r \n 165 защита \n Огнеусточевые и супер быстрые, поджигают землю за собой", {name: "gfboots", meta: 0}, {type: "boots", armor: 165, durability: 600, texture: "armor/gfboots.png"});

Armor.registerOnTakeOnListener(ItemID.ugfboots, function(item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.fireResistance, 10, 9999999999)
    Entity.addEffect(player, Native.PotionEffect.movementSpeed, 10, 9999999999)
    Entity.addEffect(player, Native.PotionEffect.jump, 4, 9999999999)
});

Armor.registerOnTakeOffListener(ItemID.ugfboots, function(item, slot, player) {
    Entity.clearEffect(player, Native.PotionEffect.fireResistance);
    Entity.clearEffect(player, Native.PotionEffect.movementSpeed);
    Entity.clearEffect(player, Native.PotionEffect.jump);
});

Armor.registerOnTickListener(ItemID.ugfboots, function(item, slot, player){
    let pos = Entity.getPosition(player);
    if(BlockSource.getDefaultForActor(player).getBlock(pos.x, pos.y-1, pos.z)!=0) BlockSource.getDefaultForActor(player).setBlock(pos.x, pos.y-1, pos.z, 51, 0)
});
