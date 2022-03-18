IDRegistry.genItemID("floritesword");
IDRegistry.genItemID("floritepickaxe");
IDRegistry.genItemID("floriteaxe");
IDRegistry.genItemID("floriteshovel");
Item.createItem("floritesword", "§a Флоритовый меч §r \n 500 урон", {name: "floritesword", meta: 0}, {stack: 1});
Item.createItem("floritepickaxe", "§2 Флоритовая кирка", {name: "floritepickaxe", meta: 0}, {stack: 1});
Item.createItem("floriteaxe", "§2 Флоритовый топор", {name: "floriteaxe", meta: 0}, {stack: 1});
Item.createItem("floriteshovel", "§2 Флоритовая лопата", {name: "floriteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("florite", {durability: 3400, level: 11, efficiency: 8, damage: 500, enchantability: 14});
ToolAPI.setTool(ItemID.floritesword, "florite", ToolType.sword);
ToolAPI.setTool(ItemID.floritepickaxe, "florite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.floriteaxe, "florite", ToolType.axe);
ToolAPI.setTool(ItemID.floriteshovel, "florite", ToolType.shovel);

IDRegistry.genItemID("floritehelmet");
IDRegistry.genItemID("floritechestplate");
IDRegistry.genItemID("floriteleggings");
IDRegistry.genItemID("floriteboots");

Item.createArmorItem("floritehelmet", "§c Флоритовый шлем §r \n 65 защита", {name: "floritehelmet", meta: 0}, {type: "helmet", armor: 65, durability: 650, texture: "armor/floritearmor.png"});
Item.createArmorItem("floritechestplate", "§c Флоритовый нагрудник §r \n 70 защита", {name: "floritechestplate", meta: 0}, {type: "chestplate", armor: 70, durability: 750, texture: "armor/floritearmor.png"});
Item.createArmorItem("floriteleggings", "§c Флоритовые поножи §r  \n 70 защита", {name: "floriteleggings", meta: 0}, {type: "leggings", armor: 70, durability: 700, texture: "armor/floritearmor0.png"});
Item.createArmorItem("floriteboots", "§c Флоритовые ботинки §r \n 64 защита", {name: "floriteboots", meta: 0}, {type: "boots", armor: 64, durability: 600, texture: "armor/floritearmor.png"});

IDRegistry.genItemID("flowerpickaxe");
Item.createItem("flowerpickaxe", "§1 Цветущая кирка §r \n 510 урон \n Эффективней флоритовой кирки в 2 раза", {name: "flowerpickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("florite", {durability: 3400, level: 12, efficiency: 16, damage: 510, enchantability: 14});
ToolAPI.setTool(ItemID.floritepickaxe, "florite", ToolType.pickaxe);
