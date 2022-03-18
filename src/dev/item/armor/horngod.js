IDRegistry.genItemID("horngodhelmet");
IDRegistry.genItemID("horngodchestplate");
IDRegistry.genItemID("horngodleggings");
IDRegistry.genItemID("horngodboots");

Item.createArmorItem("horngodhelmet", "§c Шлем Рогатого Бога §r \n 8 защита \n Остатки века чудес", {name: "horngodhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 200, texture: "armor/horngodarmor.png"});
Item.createArmorItem("horngodchestplate", "§c Нагрудник Рогатого Бога §r \n 9 защита \n Остатки века чудес", {name: "horngodchestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 400, texture: "armor/horngodarmor.png"});
Item.createArmorItem("horngodleggings", "§c Поножи Рогатого Бога §r  \n 8 защита \n Остатки века чудес", {name: "horngodleggings", meta: 0}, {type: "leggings", armor: 8, durability: 300, texture: "armor/horngodarmor0.png"});
Item.createArmorItem("horngodboots", "§c Ботинки Рогатого Бога §r \n 8 защита \n Остатки века чудес", {name: "horngodboots", meta: 0}, {type: "boots", armor: 8, durability: 300, texture: "armor/horngodarmor.png"});

IDRegistry.genItemID("gitareaxe");
Item.createItem("gitareaxe", "§a Гитара-топор §r \n 88 урон ", {name: "gitareaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("gitareaxe", {durability: 3400, level: 4, efficiency: 8, damage: 88, enchantability: 14});
ToolAPI.setTool(ItemID.gitareaxe, "gitareaxe", ToolType.sword);

IDRegistry.genItemID("seeder");
Item.createItem("seeder", "§a Сеятель §r \n 80 урон ", {name: "seeder", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("seeder", {durability: 3400, level: 4, efficiency: 8, damage: 80, enchantability: 14});
ToolAPI.setTool(ItemID.seeder, "seeder", ToolType.sword);
