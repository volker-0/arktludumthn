IDRegistry.genItemID("astralsword");
IDRegistry.genItemID("astralpickaxe");
IDRegistry.genItemID("astralaxe");
IDRegistry.genItemID("astralshovel");
Item.createItem("astralsword", "§a Астральный меч §r \n 305 урон", {name: "astralsword", meta: 0}, {stack: 1});
Item.createItem("astralpickaxe", "§2 Астральная кирка", {name: "astralpickaxe", meta: 0}, {stack: 1});
Item.createItem("astralaxe", "§2 Астральный топор", {name: "astralaxe", meta: 0}, {stack: 1});
Item.createItem("astralshovel", "§2 Астральная лопата", {name: "astralshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("astral", {durability: 3400, level: 10, efficiency: 8, damage: 305, enchantability: 14});
ToolAPI.setTool(ItemID.astralsword, "astral", ToolType.sword);
ToolAPI.setTool(ItemID.astralpickaxe, "astral", ToolType.pickaxe);
ToolAPI.setTool(ItemID.astralaxe, "astral", ToolType.axe);
ToolAPI.setTool(ItemID.astralshovel, "astral", ToolType.shovel);

IDRegistry.genItemID("astralhelmet");
IDRegistry.genItemID("astralchestplate");
IDRegistry.genItemID("astralleggings");
IDRegistry.genItemID("astralboots");

Item.createArmorItem("astralhelmet", "§c Астральный шлем §r \n 41 защита", {name: "astralhelmet", meta: 0}, {type: "helmet", armor: 41, durability: 650, texture: "armor/astralarmor.png"});
Item.createArmorItem("astralchestplate", "§c Астральный нагрудник §r \n 42 защита", {name: "astralchestplate", meta: 0}, {type: "chestplate", armor: 42, durability: 750, texture: "armor/astralarmor.png"});
Item.createArmorItem("astralleggings", "§c Астральные поножи §r  \n 42 защита", {name: "astralleggings", meta: 0}, {type: "leggings", armor: 42, durability: 700, texture: "armor/astralarmor0.png"});
Item.createArmorItem("astralboots", "§c Астральные ботинки §r \n 41 защита", {name: "astralboots", meta: 0}, {type: "boots", armor: 41, durability: 600, texture: "armor/astralarmor.png"});

