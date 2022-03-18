IDRegistry.genItemID("hollysword");
IDRegistry.genItemID("hollypickaxe");
IDRegistry.genItemID("hollyaxe");
IDRegistry.genItemID("hollyshovel");
Item.createItem("hollysword", "§a Святой меч §r \n 25 урон", {name: "hollysword", meta: 0}, {stack: 1});
Item.createItem("hollypickaxe", "§2 Святая кирка", {name: "hollypickaxe", meta: 0}, {stack: 1});
Item.createItem("hollyaxe", "§2 Святой топор", {name: "hollyaxe", meta: 0}, {stack: 1});
Item.createItem("hollyshovel", "§2 Святая лопата", {name: "hollyshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("holly", {durability: 3400, level: 7, efficiency: 8, damage: 25, enchantability: 14});
ToolAPI.setTool(ItemID.hollysword, "holly", ToolType.sword);
ToolAPI.setTool(ItemID.hollypickaxe, "holly", ToolType.pickaxe);
ToolAPI.setTool(ItemID.hollyaxe, "holly", ToolType.axe);
ToolAPI.setTool(ItemID.hollyshovel, "holly", ToolType.shovel);

IDRegistry.genItemID("hollyhelmet");
IDRegistry.genItemID("hollychestplate");
IDRegistry.genItemID("hollyleggings");
IDRegistry.genItemID("hollyboots");

Item.createArmorItem("hollyhelmet", "§c Святой шлем §r \n 7 защита", {name: "hollyhelmet", meta: 0}, {type: "helmet", armor: 7, durability: 650, texture: "armor/hollyarmor.png"});
Item.createArmorItem("hollychestplate", "§c Святой нагрудник §r \n 8 защита", {name: "hollychestplate", meta: 0}, {type: "chestplate", armor: 8, durability: 750, texture: "armor/hollyarmor.png"});
Item.createArmorItem("hollyleggings", "§c Святые поножи §r  \n 8 защита", {name: "hollyleggings", meta: 0}, {type: "leggings", armor: 8, durability: 700, texture: "armor/hollyarmor0.png"});
Item.createArmorItem("hollyboots", "§c Святые ботинки §r \n 7 защита", {name: "hollyboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/hollyarmor.png"});

