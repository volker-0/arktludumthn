IDRegistry.genItemID("ignissword");
IDRegistry.genItemID("ignispickaxe");
IDRegistry.genItemID("ignisaxe");
IDRegistry.genItemID("ignisshovel");
Item.createItem("ignissword", "§a Огненный меч §r \n 10 урон", {name: "ignissword", meta: 0}, {stack: 1});
Item.createItem("ignispickaxe", "§2 Огненная кирка", {name: "ignispickaxe", meta: 0}, {stack: 1});
Item.createItem("ignisaxe", "§2 Огненный топор", {name: "ignisaxe", meta: 0}, {stack: 1});
Item.createItem("ignisshovel", "§2 Огненная лопата", {name: "ignisshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ignis", {durability: 1600, level: 5, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.ignissword, "ignis", ToolType.sword);
ToolAPI.setTool(ItemID.ignispickaxe, "ignis", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ignisaxe, "ignis", ToolType.axe);
ToolAPI.setTool(ItemID.ignisshovel, "ignis", ToolType.shovel);

IDRegistry.genItemID("ignishelmet");
IDRegistry.genItemID("ignischestplate");
IDRegistry.genItemID("ignisleggings");
IDRegistry.genItemID("ignisboots");

Item.createArmorItem("ignishelmet", "§c Огненный шлем §r \n 6 защита", {name: "ignishelmet", meta: 0}, {type: "helmet", armor: 6, durability: 300, texture: "armor/ignisarmor.png"});
Item.createArmorItem("ignischestplate", "§c Огненный нагрудник §r \n 7 защита", {name: "ignischestplate", meta: 0}, {type: "chestplate", armor: 7, durability: 600, texture: "armor/ignisarmor.png"});
Item.createArmorItem("ignisleggings", "§c Огненные поножи §r  \n 6 защита", {name: "ignisleggings", meta: 0}, {type: "leggings", armor: 6, durability: 500, texture: "armor/ignisarmor0.png"});
Item.createArmorItem("ignisboots", "§c Огненные ботинки §r \n 6 защита", {name: "ignisboots", meta: 0}, {type: "boots", armor: 6, durability: 500, texture: "armor/ignisarmor.png"});
