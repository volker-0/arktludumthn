IDRegistry.genItemID("goldysword");
IDRegistry.genItemID("goldypickaxe");
IDRegistry.genItemID("goldyaxe");
IDRegistry.genItemID("goldyshovel");
Item.createItem("goldysword", "§a Злотоносный меч §r \n 650 урон", {name: "goldysword", meta: 0}, {stack: 1});
Item.createItem("goldypickaxe", "§2 Злотоносная кирка", {name: "goldypickaxe", meta: 0}, {stack: 1});
Item.createItem("goldyaxe", "§2 Злотоносный топор", {name: "goldyaxe", meta: 0}, {stack: 1});
Item.createItem("goldyshovel", "§2 Злотоносная лопата", {name: "goldyshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("goldy", {durability: 3400, level: 12, efficiency: 8, damage: 650, enchantability: 14});
ToolAPI.setTool(ItemID.goldysword, "goldy", ToolType.sword);
ToolAPI.setTool(ItemID.goldypickaxe, "goldy", ToolType.pickaxe);
ToolAPI.setTool(ItemID.goldyaxe, "goldy", ToolType.axe);
ToolAPI.setTool(ItemID.goldyshovel, "goldy", ToolType.shovel);

IDRegistry.genItemID("goldyhelmet");
IDRegistry.genItemID("goldychestplate");
IDRegistry.genItemID("goldyleggings");
IDRegistry.genItemID("goldyboots");

Item.createArmorItem("goldyhelmet", "§c Злотоносный шлем §r \n 85 защита", {name: "goldyhelmet", meta: 0}, {type: "helmet", armor: 85, durability: 650, texture: "armor/goldyarmor.png"});
Item.createArmorItem("goldychestplate", "§c Злотоносный нагрудник §r \n 90 защита", {name: "goldychestplate", meta: 0}, {type: "chestplate", armor: 90, durability: 750, texture: "armor/goldyarmor.png"});
Item.createArmorItem("goldyleggings", "§c Злотоносные поножи §r  \n 90 защита", {name: "goldyleggings", meta: 0}, {type: "leggings", armor: 90, durability: 700, texture: "armor/goldyarmor0.png"});
Item.createArmorItem("goldyboots", "§c Злотоносные ботинки §r \n 85 защита", {name: "goldyboots", meta: 0}, {type: "boots", armor: 85, durability: 600, texture: "armor/goldyarmor.png"});

