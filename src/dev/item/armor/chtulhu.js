IDRegistry.genItemID("chtulhusword");
IDRegistry.genItemID("chtulhupickaxe");
IDRegistry.genItemID("chtulhuaxe");
IDRegistry.genItemID("chtulhushovel");
Item.createItem("chtulhusword", "§a Меч Ктулху §r \n 2000 урон", {name: "chtulhusword", meta: 0}, {stack: 1});
Item.createItem("chtulhupickaxe", "§2 Кирка Ктулху", {name: "chtulhupickaxe", meta: 0}, {stack: 1});
Item.createItem("chtulhuaxe", "§2 Топор Ктулху", {name: "chtulhuaxe", meta: 0}, {stack: 1});
Item.createItem("chtulhushovel", "§2 Лопата Ктулху", {name: "chtulhushovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("chtulhu", {durability: 3400, level: 13, efficiency: 8, damage: 2000, enchantability: 14});
ToolAPI.setTool(ItemID.chtulhusword, "chtulhu", ToolType.sword);
ToolAPI.setTool(ItemID.chtulhupickaxe, "chtulhu", ToolType.pickaxe);
ToolAPI.setTool(ItemID.chtulhuaxe, "chtulhu", ToolType.axe);
ToolAPI.setTool(ItemID.chtulhushovel, "chtulhu", ToolType.shovel);

IDRegistry.genItemID("chtulhuhelmet");
IDRegistry.genItemID("chtulhuchestplate");
IDRegistry.genItemID("chtulhuleggings");
IDRegistry.genItemID("chtulhuboots");

Item.createArmorItem("chtulhuhelmet", "§c Шлем Ктулху §r \n 220 защита", {name: "chtulhuhelmet", meta: 0}, {type: "helmet", armor: 220, durability: 650, texture: "armor/chtulhuarmor.png"});
Item.createArmorItem("chtulhuchestplate", "§c Нагрудник Ктулху §r \n 240 защита", {name: "chtulhuchestplate", meta: 0}, {type: "chestplate", armor: 240, durability: 750, texture: "armor/chtulhuarmor.png"});
Item.createArmorItem("chtulhuleggings", "§c Поножи Ктулху §r  \n 240 защита", {name: "chtulhuleggings", meta: 0}, {type: "leggings", armor: 240, durability: 700, texture: "armor/chtulhuarmor0.png"});
Item.createArmorItem("chtulhuboots", "§c Ботинки Ктулху §r \n 220 защита", {name: "chtulhuboots", meta: 0}, {type: "boots", armor: 220, durability: 600, texture: "armor/chtulhuarmor.png"});

