IDRegistry.genItemID("aersword");
IDRegistry.genItemID("aerpickaxe");
IDRegistry.genItemID("aeraxe");
IDRegistry.genItemID("aershovel");
Item.createItem("aersword", "§a Аэролитовый меч §r \n 7 урон", {name: "aersword", meta: 0}, {stack: 1});
Item.createItem("aerpickaxe", "§2 Аэролитовая кирка", {name: "aerpickaxe", meta: 0}, {stack: 1});
Item.createItem("aeraxe", "§2 Аэролитовый топор", {name: "aeraxe", meta: 0}, {stack: 1});
Item.createItem("aershovel", "§2 Аэролитовая лопата", {name: "aershovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("aer", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.aersword, "aer", ToolType.sword);
ToolAPI.setTool(ItemID.aerpickaxe, "aer", ToolType.pickaxe);
ToolAPI.setTool(ItemID.aeraxe, "aer", ToolType.axe);
ToolAPI.setTool(ItemID.aershovel, "aer", ToolType.shovel);

IDRegistry.genItemID("aerhelmet");
IDRegistry.genItemID("aerchestplate");
IDRegistry.genItemID("aerleggings");
IDRegistry.genItemID("aerboots");

Item.createArmorItem("aerhelmet", "§c Аэролитовый шлем §r \n 4 защита", {name: "aerhelmet", meta: 0}, {type: "helmet", armor: 4, durability: 200, texture: "armor/aerarmor.png"});
Item.createArmorItem("aerchestplate", "§c Аэролитовый нагрудник §r \n 5 защита", {name: "aerchestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 400, texture: "armor/aerarmor.png"});
Item.createArmorItem("aerleggings", "§c Аэролитовая поножи §r  \n 5 защита", {name: "aerleggings", meta: 0}, {type: "leggings", armor: 5, durability: 300, texture: "armor/aerarmor0.png"});
Item.createArmorItem("aerboots", "§c Аэролитовая ботинки §r \n 3 защита", {name: "aerboots", meta: 0}, {type: "boots", armor: 5, durability: 300, texture: "armor/aerarmor.png"});

