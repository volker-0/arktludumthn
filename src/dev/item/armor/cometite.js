IDRegistry.genItemID("cometitesword");
IDRegistry.genItemID("cometitepickaxe");
IDRegistry.genItemID("cometiteaxe");
IDRegistry.genItemID("cometiteshovel");
Item.createItem("cometitesword", "§a Кометитовый меч §r \n 20 урон", {name: "cometitesword", meta: 0}, {stack: 1});
Item.createItem("cometitepickaxe", "§2 Кометитовая кирка", {name: "cometitepickaxe", meta: 0}, {stack: 1});
Item.createItem("cometiteaxe", "§2 Кометитовый топор", {name: "cometiteaxe", meta: 0}, {stack: 1});
Item.createItem("cometiteshovel", "§2 Йенериумная лопата", {name: "cometiteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("cometite", {durability: 3400, level: 6, efficiency: 8, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.cometitesword, "cometite", ToolType.sword);
ToolAPI.setTool(ItemID.cometitepickaxe, "cometite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.cometiteaxe, "cometite", ToolType.axe);
ToolAPI.setTool(ItemID.cometiteshovel, "cometite", ToolType.shovel);

IDRegistry.genItemID("cometitehelmet");
IDRegistry.genItemID("cometitechestplate");
IDRegistry.genItemID("cometiteleggings");
IDRegistry.genItemID("cometiteboots");

Item.createArmorItem("cometitehelmet", "§c Кометитовый шлем §r \n 6 защита", {name: "cometitehelmet", meta: 0}, {type: "helmet", armor: 6, durability: 650, texture: "armor/cometitearmor.png"});
Item.createArmorItem("cometitechestplate", "§c Кометитовый нагрудник §r \n 7 защита", {name: "cometitechestplate", meta: 0}, {type: "chestplate", armor: 7, durability: 750, texture: "armor/cometitearmor.png"});
Item.createArmorItem("cometiteleggings", "§c Кометитовые поножи §r  \n 7 защита", {name: "cometiteleggings", meta: 0}, {type: "leggings", armor: 7, durability: 700, texture: "armor/cometitearmor0.png"});
Item.createArmorItem("cometiteboots", "§c Кометитовые ботинки §r \n 6 защита", {name: "cometiteboots", meta: 0}, {type: "boots", armor: 6, durability: 600, texture: "armor/cometitearmor.png"});
