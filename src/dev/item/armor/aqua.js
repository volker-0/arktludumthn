IDRegistry.genItemID("aquasword");
IDRegistry.genItemID("aquapickaxe");
IDRegistry.genItemID("aquaaxe");
IDRegistry.genItemID("aquashovel");
Item.createItem("aquasword", "§a Акватический меч §r \n 7 урон", {name: "aquasword", meta: 0}, {stack: 1});
Item.createItem("aquapickaxe", "§2 Акватическая кирка", {name: "aquapickaxe", meta: 0}, {stack: 1});
Item.createItem("aquaaxe", "§2 Акватический топор", {name: "aquaaxe", meta: 0}, {stack: 1});
Item.createItem("aquashovel", "§2 Акватическая лопата", {name: "aquashovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("aqua", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.aquasword, "aqua", ToolType.sword);
ToolAPI.setTool(ItemID.aquapickaxe, "aqua", ToolType.pickaxe);
ToolAPI.setTool(ItemID.aquaaxe, "aqua", ToolType.axe);
ToolAPI.setTool(ItemID.aquashovel, "aqua", ToolType.shovel);

IDRegistry.genItemID("aquahelmet");
IDRegistry.genItemID("aquachestplate");
IDRegistry.genItemID("aqualeggings");
IDRegistry.genItemID("aquaboots");

Item.createArmorItem("aquahelmet", "§c Акватический шлем §r \n 4 защита", {name: "aquahelmet", meta: 0}, {type: "helmet", armor: 4, durability: 200, texture: "armor/aquaarmor.png"});
Item.createArmorItem("aquachestplate", "§c Акватический нагрудник §r \n 5 защита", {name: "aquachestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 400, texture: "armor/aquaarmor.png"});
Item.createArmorItem("aqualeggings", "§c Акватическая поножи §r  \n 5 защита", {name: "aqualeggings", meta: 0}, {type: "leggings", armor: 5, durability: 300, texture: "armor/aquaarmor0.png"});
Item.createArmorItem("aquaboots", "§c Акватические ботинки §r \n 3 защита", {name: "aquaboots", meta: 0}, {type: "boots", armor: 5, durability: 300, texture: "armor/aquaarmor.png"});

