IDRegistry.genItemID("omikronesword");
IDRegistry.genItemID("omikronepickaxe");
IDRegistry.genItemID("omikroneaxe");
IDRegistry.genItemID("omikroneshovel");
Item.createItem("omikronesword", "§a Омикроновый меч §r \n 260 урон", {name: "omikronesword", meta: 0}, {stack: 1});
Item.createItem("omikronepickaxe", "§2 Омикроновая кирка", {name: "omikronepickaxe", meta: 0}, {stack: 1});
Item.createItem("omikroneaxe", "§2 Омикроновый топор", {name: "omikroneaxe", meta: 0}, {stack: 1});
Item.createItem("omikroneshovel", "§2 Омикроновая лопата", {name: "omikroneshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("omikrone", {durability: 3400, level: 9, efficiency: 8, damage: 260, enchantability: 14});
ToolAPI.setTool(ItemID.omikronesword, "omikrone", ToolType.sword);
ToolAPI.setTool(ItemID.omikronepickaxe, "omikrone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.omikroneaxe, "omikrone", ToolType.axe);
ToolAPI.setTool(ItemID.omikroneshovel, "omikrone", ToolType.shovel);

IDRegistry.genItemID("omikronehelmet");
IDRegistry.genItemID("omikronechestplate");
IDRegistry.genItemID("omikroneleggings");
IDRegistry.genItemID("omikroneboots");

Item.createArmorItem("omikronehelmet", "§c Омикроновый шлем §r \n 42 защита", {name: "omikronehelmet", meta: 0}, {type: "helmet", armor: 42, durability: 650, texture: "armor/omikronearmor.png"});
Item.createArmorItem("omikronechestplate", "§c Омикроновый нагрудник §r \n 44 защита", {name: "omikronechestplate", meta: 0}, {type: "chestplate", armor: 44, durability: 750, texture: "armor/omikronearmor.png"});
Item.createArmorItem("omikroneleggings", "§c Омикроновые поножи §r  \n 44 защита", {name: "omikroneleggings", meta: 0}, {type: "leggings", armor: 44, durability: 700, texture: "armor/omikronearmor0.png"});
Item.createArmorItem("omikroneboots", "§c Омикроновые ботинки §r \n 42 защита", {name: "omikroneboots", meta: 0}, {type: "boots", armor: 42, durability: 600, texture: "armor/omikronearmor.png"});

