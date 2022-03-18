IDRegistry.genItemID("azatotsword");
IDRegistry.genItemID("azatotpickaxe");
IDRegistry.genItemID("azatotaxe");
IDRegistry.genItemID("azatotshovel");
Item.createItem("azatotsword", "§a Меч Азатота §r \n 1050 урон", {name: "azatotsword", meta: 0}, {stack: 1});
Item.createItem("azatotpickaxe", "§2 Кирка Азатота", {name: "azatotpickaxe", meta: 0}, {stack: 1});
Item.createItem("azatotaxe", "§2 Топор Азатота", {name: "azatotaxe", meta: 0}, {stack: 1});
Item.createItem("azatotshovel", "§2 Лопата Азатота", {name: "azatotshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("azatot", {durability: 3400, level: 4, efficiency: 8, damage: 1050, enchantability: 14});
ToolAPI.setTool(ItemID.azatotsword, "azatot", ToolType.sword);
ToolAPI.setTool(ItemID.azatotpickaxe, "azatot", ToolType.pickaxe);
ToolAPI.setTool(ItemID.azatotaxe, "azatot", ToolType.axe);
ToolAPI.setTool(ItemID.azatotshovel, "azatot", ToolType.shovel);

IDRegistry.genItemID("azatothelmet");
IDRegistry.genItemID("azatotchestplate");
IDRegistry.genItemID("azatotleggings");
IDRegistry.genItemID("azatotboots");

Item.createArmorItem("azatothelmet", "§c Шлем Азатота §r \n 180 защита", {name: "azatothelmet", meta: 0}, {type: "helmet", armor: 180, durability: 650, texture: "armor/azatotarmor.png"});
Item.createArmorItem("azatotchestplate", "§c Нагрудник Азатота §r \n 200 защита", {name: "azatotchestplate", meta: 0}, {type: "chestplate", armor: 200, durability: 750, texture: "armor/azatotarmor.png"});
Item.createArmorItem("azatotleggings", "§c Поножи Азатота §r  \n 200 защита", {name: "azatotleggings", meta: 0}, {type: "leggings", armor: 200, durability: 700, texture: "armor/azatotarmor0.png"});
Item.createArmorItem("azatotboots", "§c Ботинки Азатота §r \n 180 защита", {name: "azatotboots", meta: 0}, {type: "boots", armor: 180, durability: 600, texture: "armor/azatotarmor.png"});

