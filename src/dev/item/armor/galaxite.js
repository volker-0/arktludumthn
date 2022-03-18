IDRegistry.genItemID("galaxitesword");
IDRegistry.genItemID("galaxitepickaxe");
IDRegistry.genItemID("galaxiteaxe");
IDRegistry.genItemID("galaxiteshovel");
Item.createItem("galaxitesword", "§a Галакситовый меч §r \n 600 урон", {name: "galaxitesword", meta: 0}, {stack: 1});
Item.createItem("galaxitepickaxe", "§2 Галакситовая кирка", {name: "galaxitepickaxe", meta: 0}, {stack: 1});
Item.createItem("galaxiteaxe", "§2 Галакситовый топор", {name: "galaxiteaxe", meta: 0}, {stack: 1});
Item.createItem("galaxiteshovel", "§2 Галакситовая лопата", {name: "galaxiteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("galaxite", {durability: 3400, level: 12, efficiency: 8, damage: 600, enchantability: 14});
ToolAPI.setTool(ItemID.galaxitesword, "galaxite", ToolType.sword);
ToolAPI.setTool(ItemID.galaxitepickaxe, "galaxite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.galaxiteaxe, "galaxite", ToolType.axe);
ToolAPI.setTool(ItemID.galaxiteshovel, "galaxite", ToolType.shovel);

IDRegistry.genItemID("galaxitehelmet");
IDRegistry.genItemID("galaxitechestplate");
IDRegistry.genItemID("galaxiteleggings");
IDRegistry.genItemID("galaxiteboots");

Item.createArmorItem("galaxitehelmet", "§c Галакситовый шлем §r \n 75 защита", {name: "galaxitehelmet", meta: 0}, {type: "helmet", armor: 75, durability: 650, texture: "armor/galaxitearmor.png"});
Item.createArmorItem("galaxitechestplate", "§c Галакситовый нагрудник §r \n 80 защита", {name: "galaxitechestplate", meta: 0}, {type: "chestplate", armor: 80, durability: 750, texture: "armor/galaxitearmor.png"});
Item.createArmorItem("galaxiteleggings", "§c Галакситовые поножи §r  \n 80 защита", {name: "galaxiteleggings", meta: 0}, {type: "leggings", armor: 80, durability: 700, texture: "armor/galaxitearmor0.png"});
Item.createArmorItem("galaxiteboots", "§c Галакситовые ботинки §r \n 75 защита", {name: "galaxiteboots", meta: 0}, {type: "boots", armor: 75, durability: 600, texture: "armor/galaxitearmor.png"});

