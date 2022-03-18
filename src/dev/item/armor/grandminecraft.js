IDRegistry.genItemID("grandminecraftsword");
IDRegistry.genItemID("grandminecraftpickaxe");
IDRegistry.genItemID("grandminecraftaxe");
IDRegistry.genItemID("grandminecraftshovel");
Item.createItem("grandminecraftsword", "§a Великий меч майнкрафта §r \n 150 урон", {name: "grandminecraftsword", meta: 0}, {stack: 1});
Item.createItem("grandminecraftpickaxe", "§2 Великая кирка майнкрафта", {name: "grandminecraftpickaxe", meta: 0}, {stack: 1});
Item.createItem("grandminecraftaxe", "§2 Великий топор майнкрафта", {name: "grandminecraftaxe", meta: 0}, {stack: 1});
Item.createItem("grandminecraftshovel", "§2 Великая лопата майнкрафта", {name: "grandminecraftshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("grandminecraft", {durability: 3400, level: 8, efficiency: 20, damage: 150, enchantability: 14});
ToolAPI.setTool(ItemID.grandminecraftsword, "grandminecraft", ToolType.sword);
ToolAPI.setTool(ItemID.grandminecraftpickaxe, "grandminecraft", ToolType.pickaxe);
ToolAPI.setTool(ItemID.grandminecraftaxe, "grandminecraft", ToolType.axe);
ToolAPI.setTool(ItemID.grandminecraftshovel, "grandminecraft", ToolType.shovel);

IDRegistry.genItemID("grandminecrafthelmet");
IDRegistry.genItemID("grandminecraftchestplate");
IDRegistry.genItemID("grandminecraftleggings");
IDRegistry.genItemID("grandminecraftboots");

Item.createArmorItem("grandminecrafthelmet", "§c Великий шлем майнкрафта §r \n 30 защита", {name: "grandminecrafthelmet", meta: 0}, {type: "helmet", armor: 30, durability: 3000, texture: "armor/grandminecraftarmor.png"});
Item.createArmorItem("grandminecraftchestplate", "§c Великий нагрудник майнкрафта§r \n 35 защита", {name: "grandminecraftchestplate", meta: 0}, {type: "chestplate", armor: 35, durability: 3000, texture: "armor/grandminecraftarmor.png"});
Item.createArmorItem("grandminecraftleggings", "§c Великие поножи майнкрафта §r  \n 34 защита", {name: "grandminecraftleggings", meta: 0}, {type: "leggings", armor: 34, durability: 3000, texture: "armor/grandminecraftarmor_0.png"});
Item.createArmorItem("grandminecraftboots", "§c Великие ботинки майнкрафта §r \n 28 защита", {name: "grandminecraftboots", meta: 0}, {type: "boots", armor: 28, durability: 2000, texture: "armor/grandminecraftarmor.png"});

