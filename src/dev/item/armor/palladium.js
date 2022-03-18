IDRegistry.genItemID("palladiumsword");
IDRegistry.genItemID("palladiumpickaxe");
IDRegistry.genItemID("palladiumaxe");
IDRegistry.genItemID("palladiumshovel");
Item.createItem("palladiumsword", "§a Палладиевый боевой молот §r \n 7 урон", {name: "palladiumsword", meta: 0}, {stack: 1});
Item.createItem("palladiumpickaxe", "§2 Палладиумная кирка", {name: "palladiumpickaxe", meta: 0}, {stack: 1});
Item.createItem("palladiumaxe", "§2 Палладиумный топор", {name: "palladiumaxe", meta: 0}, {stack: 1});
Item.createItem("palladiumshovel", "§2 Палладиумная лопата", {name: "palladiumshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("palladium", {durability: 3400, level: 3, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.palladiumsword, "palladium", ToolType.sword);
ToolAPI.setTool(ItemID.palladiumpickaxe, "palladium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.palladiumaxe, "palladium", ToolType.axe);
ToolAPI.setTool(ItemID.palladiumshovel, "palladium", ToolType.shovel);

IDRegistry.genItemID("palladiumhelmet");
IDRegistry.genItemID("palladiumchestplate");
IDRegistry.genItemID("palladiumleggings");
IDRegistry.genItemID("palladiumboots");

Item.createArmorItem("palladiumhelmet", "§c Палладиумный шлем §r \n 5 защита", {name: "palladiumhelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/palladiumarmor.png"});
Item.createArmorItem("palladiumchestplate", "§c Палладиумный нагрудник §r \n 5 защита", {name: "palladiumchestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 750, texture: "armor/palladiumarmor.png"});
Item.createArmorItem("palladiumleggings", "§c Палладиумные поножи §r  \n 5 защита", {name: "palladiumleggings", meta: 0}, {type: "leggings", armor: 5, durability: 700, texture: "armor/palladiumarmor0.png"});
Item.createArmorItem("palladiumboots", "§c Палладиумные ботинки §r \n 5 защита", {name: "palladiumboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/palladiumarmor.png"});

