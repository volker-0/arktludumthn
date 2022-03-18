IDRegistry.genItemID("cosmilitehelmet");
IDRegistry.genItemID("cosmilitechestplate");
IDRegistry.genItemID("cosmiliteleggings");
IDRegistry.genItemID("cosmiliteboots");

Item.createArmorItem("cosmilitehelmet", "§c Космилитовый шлем §r \n 40 защита", {name: "cosmilitehelmet", meta: 0}, {type: "helmet", armor: 40, durability: 650, texture: "armor/cosmilitearmor.png"});
Item.createArmorItem("cosmilitechestplate", "§c Космилитовый нагрудник §r \n 41 защита", {name: "cosmilitechestplate", meta: 0}, {type: "chestplate", armor: 41, durability: 750, texture: "armor/cosmilitearmor.png"});
Item.createArmorItem("cosmiliteleggings", "§c Космилитовые поножи §r  \n 41 защита", {name: "cosmiliteleggings", meta: 0}, {type: "leggings", armor: 41, durability: 700, texture: "armor/cosmilitearmor0.png"});
Item.createArmorItem("cosmiliteboots", "§c Космилитовые ботинки §r \n 40 защита", {name: "cosmiliteboots", meta: 0}, {type: "boots", armor: 40, durability: 600, texture: "armor/cosmilitearmor.png"});

IDRegistry.genItemID("cosmilitesword");
IDRegistry.genItemID("cosmilitepickaxe");
IDRegistry.genItemID("cosmiliteaxe");
IDRegistry.genItemID("cosmiliteshovel");
Item.createItem("cosmilitesword", "§a Космилитовый меч §r \n 250 урон", {name: "cosmilitesword", meta: 0}, {stack: 1});
Item.createItem("cosmilitepickaxe", "§2 Космилитовая кирка", {name: "cosmilitepickaxe", meta: 0}, {stack: 1});
Item.createItem("cosmiliteaxe", "§2 Космилитовый топор", {name: "cosmiliteaxe", meta: 0}, {stack: 1});
Item.createItem("cosmiliteshovel", "§2 Космилитовая лопата", {name: "cosmiliteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("cosmilite", {durability: 3400, level: 9, efficiency: 8, damage: 250, enchantability: 14});
ToolAPI.setTool(ItemID.cosmilitesword, "cosmilite", ToolType.sword);
ToolAPI.setTool(ItemID.cosmilitepickaxe, "cosmilite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.cosmiliteaxe, "cosmilite", ToolType.axe);
ToolAPI.setTool(ItemID.cosmiliteshovel, "cosmilite", ToolType.shovel);
