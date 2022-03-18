IDRegistry.genItemID("venomussword");
IDRegistry.genItemID("venomuspickaxe");
IDRegistry.genItemID("venomusaxe");
IDRegistry.genItemID("venomusshovel");
Item.createItem("venomussword", "§a Веномусовый меч §r \n 380 урон", {name: "venomussword", meta: 0}, {stack: 1});
Item.createItem("venomuspickaxe", "§2 Веномусовая кирка", {name: "venomuspickaxe", meta: 0}, {stack: 1});
Item.createItem("venomusaxe", "§2 Веномусовый топор", {name: "venomusaxe", meta: 0}, {stack: 1});
Item.createItem("venomusshovel", "§2 Веномусовая лопата", {name: "venomusshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("venomus", {durability: 3400, level: 11, efficiency: 8, damage: 380, enchantability: 14});
ToolAPI.setTool(ItemID.venomussword, "venomus", ToolType.sword);
ToolAPI.setTool(ItemID.venomuspickaxe, "venomus", ToolType.pickaxe);
ToolAPI.setTool(ItemID.venomusaxe, "venomus", ToolType.axe);
ToolAPI.setTool(ItemID.venomusshovel, "venomus", ToolType.shovel);

IDRegistry.genItemID("venomushelmet");
IDRegistry.genItemID("venomuschestplate");
IDRegistry.genItemID("venomusleggings");
IDRegistry.genItemID("venomusboots");

Item.createArmorItem("venomushelmet", "§c Веномусовый шлем §r \n 55 защита", {name: "venomushelmet", meta: 0}, {type: "helmet", armor: 55, durability: 650, texture: "armor/venomusarmor.png"});
Item.createArmorItem("venomuschestplate", "§c Веномусовый нагрудник §r \n 60 защита", {name: "venomuschestplate", meta: 0}, {type: "chestplate", armor: 60, durability: 750, texture: "armor/venomusarmor.png"});
Item.createArmorItem("venomusleggings", "§c Веномусовые поножи §r  \n 60 защита", {name: "venomusleggings", meta: 0}, {type: "leggings", armor: 60, durability: 700, texture: "armor/venomusarmor0.png"});
Item.createArmorItem("venomusboots", "§c Веномусовые ботинки §r \n 55 защита", {name: "venomusboots", meta: 0}, {type: "boots", armor: 55, durability: 600, texture: "armor/venomusarmor.png"});

