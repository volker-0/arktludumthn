IDRegistry.genItemID("krackensword");
IDRegistry.genItemID("krackenpickaxe");
IDRegistry.genItemID("krackenaxe");
IDRegistry.genItemID("krackenshovel");
Item.createItem("krackensword", "§a Меч Кракена §r \n 125 урон", {name: "krackensword", meta: 0}, {stack: 1});
Item.createItem("krackenpickaxe", "§2 Кирка Кракена", {name: "krackenpickaxe", meta: 0}, {stack: 1});
Item.createItem("krackenaxe", "§2 Топор Кракена", {name: "krackenaxe", meta: 0}, {stack: 1});
Item.createItem("krackenshovel", "§2 Лопата Кракена", {name: "krackenshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("kracken", {durability: 1600, level: 8, efficiency: 8, damage: 125, enchantability: 14});
ToolAPI.setTool(ItemID.krackensword, "kracken", ToolType.sword);
ToolAPI.setTool(ItemID.krackenpickaxe, "kracken", ToolType.pickaxe);
ToolAPI.setTool(ItemID.krackenaxe, "kracken", ToolType.axe);
ToolAPI.setTool(ItemID.krackenshovel, "kracken", ToolType.shovel);

IDRegistry.genItemID("krackenhelmet");
IDRegistry.genItemID("krackenchestplate");
IDRegistry.genItemID("krackenleggings");
IDRegistry.genItemID("krackenboots");

Item.createArmorItem("krackenhelmet", "§c Шлем Кракена §r \n 9 защита", {name: "krackenhelmet", meta: 0}, {type: "helmet", armor: 9, durability: 300, texture: "armor/krackenarmor.png"});
Item.createArmorItem("krackenchestplate", "§c Нагрудник Кракена §r \n 10 защита", {name: "krackenchestplate", meta: 0}, {type: "chestplate", armor: 10, durability: 600, texture: "armor/krackenarmor.png"});
Item.createArmorItem("krackenleggings", "§c Поножи Кракена §r  \n 10 защита", {name: "krackenleggings", meta: 0}, {type: "leggings", armor: 10, durability: 500, texture: "armor/krackenarmor0.png"});
Item.createArmorItem("krackenboots", "§c Ботинки Кракена §r \n 9 защита", {name: "krackenboots", meta: 0}, {type: "boots", armor: 9, durability: 500, texture: "armor/krackenarmor.png"});

