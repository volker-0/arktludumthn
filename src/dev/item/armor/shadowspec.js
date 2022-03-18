IDRegistry.genItemID("shadowspecsword");
IDRegistry.genItemID("shadowspecpickaxe");
IDRegistry.genItemID("shadowspecaxe");
IDRegistry.genItemID("shadowspecshovel");
Item.createItem("shadowspecsword", "§a Шедоуспеховый меч §r \n 750 урон", {name: "shadowspecsword", meta: 0}, {stack: 1});
Item.createItem("shadowspecpickaxe", "§2 Шедоуспеховая кирка", {name: "shadowspecpickaxe", meta: 0}, {stack: 1});
Item.createItem("shadowspecaxe", "§2 Шедоуспеховый топор", {name: "shadowspecaxe", meta: 0}, {stack: 1});
Item.createItem("shadowspecshovel", "§2 Шедоуспеховая лопата", {name: "shadowspecshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("shadowspec", {durability: 3400, level: 14, efficiency: 8, damage: 750, enchantability: 14});
ToolAPI.setTool(ItemID.shadowspecsword, "shadowspec", ToolType.sword);
ToolAPI.setTool(ItemID.shadowspecpickaxe, "shadowspec", ToolType.pickaxe);
ToolAPI.setTool(ItemID.shadowspecaxe, "shadowspec", ToolType.axe);
ToolAPI.setTool(ItemID.shadowspecshovel, "shadowspec", ToolType.shovel);

IDRegistry.genItemID("shadowspechelmet");
IDRegistry.genItemID("shadowspecchestplate");
IDRegistry.genItemID("shadowspecleggings");
IDRegistry.genItemID("shadowspecboots");

Item.createArmorItem("shadowspechelmet", "§c Шедоуспеховый шлем §r \n 100 защита", {name: "shadowspechelmet", meta: 0}, {type: "helmet", armor: 100, durability: 650, texture: "armor/shadowspecarmor.png"});
Item.createArmorItem("shadowspecchestplate", "§c Шедоуспеховый нагрудник §r \n 105 защита", {name: "shadowspecchestplate", meta: 0}, {type: "chestplate", armor: 105, durability: 750, texture: "armor/shadowspecarmor.png"});
Item.createArmorItem("shadowspecleggings", "§c Шедоуспеховые поножи §r  \n 105 защита", {name: "shadowspecleggings", meta: 0}, {type: "leggings", armor: 105, durability: 700, texture: "armor/shadowspecarmor0.png"});
Item.createArmorItem("shadowspecboots", "§c Шедоуспеховые ботинки §r \n 100 защита", {name: "shadowspecboots", meta: 0}, {type: "boots", armor: 100, durability: 600, texture: "armor/shadowspecarmor.png"});

