IDRegistry.genItemID("meowsword");
IDRegistry.genItemID("meowpickaxe");
IDRegistry.genItemID("meowaxe");
IDRegistry.genItemID("meowshovel");
Item.createItem("meowsword", "§a Мяумеч §r \n 400 урон", {name: "meowsword", meta: 0}, {stack: 1});
Item.createItem("meowpickaxe", "§2 Мяукирка", {name: "meowpickaxe", meta: 0}, {stack: 1});
Item.createItem("meowaxe", "§2 Мяутопор", {name: "meowaxe", meta: 0}, {stack: 1});
Item.createItem("meowshovel", "§2 Мяулопата", {name: "meowshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("meow", {durability: 3400, level: 11, efficiency: 8, damage: 400, enchantability: 14});
ToolAPI.setTool(ItemID.meowsword, "meow", ToolType.sword);
ToolAPI.setTool(ItemID.meowpickaxe, "meow", ToolType.pickaxe);
ToolAPI.setTool(ItemID.meowaxe, "meow", ToolType.axe);
ToolAPI.setTool(ItemID.meowshovel, "meow", ToolType.shovel);

IDRegistry.genItemID("meowhelmet");
IDRegistry.genItemID("meowchestplate");
IDRegistry.genItemID("meowleggings");
IDRegistry.genItemID("meowboots");

Item.createArmorItem("meowhelmet", "§c Мяушлем §r \n 60 защита", {name: "meowhelmet", meta: 0}, {type: "helmet", armor: 60, durability: 650, texture: "armor/meowarmor.png"});
Item.createArmorItem("meowchestplate", "§c Мяунагрудник §r \n 65 защита", {name: "meowchestplate", meta: 0}, {type: "chestplate", armor: 65, durability: 750, texture: "armor/meowarmor.png"});
Item.createArmorItem("meowleggings", "§c Мяупоножи §r  \n 65 защита", {name: "meowleggings", meta: 0}, {type: "leggings", armor: 65, durability: 700, texture: "armor/meowarmor0.png"});
Item.createArmorItem("meowboots", "§c Мяуботинки §r \n 60 защита", {name: "meowboots", meta: 0}, {type: "boots", armor: 60, durability: 600, texture: "armor/meowarmor.png"});

