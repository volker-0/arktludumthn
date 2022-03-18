IDRegistry.genItemID("chaossword");
IDRegistry.genItemID("chaospickaxe");
IDRegistry.genItemID("chaosaxe");
IDRegistry.genItemID("chaosshovel");
Item.createItem("chaossword", "§a Меч хаоса §r \n 350 урон", {name: "chaossword", meta: 0}, {stack: 1});
Item.createItem("chaospickaxe", "§2 Хаотический разрушитель", {name: "chaospickaxe", meta: 0}, {stack: 1});
Item.createItem("chaosaxe", "§2 Топор хаоса", {name: "chaosaxe", meta: 0}, {stack: 1});
Item.createItem("chaosshovel", "§2 Лопата хаоса", {name: "chaosshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("chaos", {durability: 3400, level: 11, efficiency: 8, damage: 350, enchantability: 14});
ToolAPI.setTool(ItemID.chaossword, "chaos", ToolType.sword);
ToolAPI.setTool(ItemID.chaospickaxe, "chaos", ToolType.pickaxe);
ToolAPI.setTool(ItemID.chaosaxe, "chaos", ToolType.axe);
ToolAPI.setTool(ItemID.chaosshovel, "chaos", ToolType.shovel);

IDRegistry.genItemID("chaoshelmet");
IDRegistry.genItemID("chaoschestplate");
IDRegistry.genItemID("chaosleggings");
IDRegistry.genItemID("chaosboots");

Item.createArmorItem("chaoshelmet", "§c Темнодемонический шлем §r \n 50 защита", {name: "chaoshelmet", meta: 0}, {type: "helmet", armor: 50, durability: 650, texture: "armor/chaosarmor.png"});
Item.createArmorItem("chaoschestplate", "§c Темнодемонический нагрудник §r \n 55 защита", {name: "chaoschestplate", meta: 0}, {type: "chestplate", armor: 55, durability: 750, texture: "armor/chaosarmor.png"});
Item.createArmorItem("chaosleggings", "§c Темнодемонические поножи §r  \n 55 защита", {name: "chaosleggings", meta: 0}, {type: "leggings", armor: 55, durability: 700, texture: "armor/chaosarmor0.png"});
Item.createArmorItem("chaosboots", "§c Темнодемонические ботинки §r \n 50 защита", {name: "chaosboots", meta: 0}, {type: "boots", armor: 50, durability: 600, texture: "armor/chaosarmor.png"});
