IDRegistry.genItemID("terrasword");
IDRegistry.genItemID("terrapickaxe");
IDRegistry.genItemID("terraaxe");
IDRegistry.genItemID("terrashovel");
Item.createItem("terrasword", "§a Природный меч §r \n 5 урон", {name: "terrasword", meta: 0}, {stack: 1});
Item.createItem("terrapickaxe", "§2 Природная кирка", {name: "terrapickaxe", meta: 0}, {stack: 1});
Item.createItem("terraaxe", "§2 Природный топор", {name: "terraaxe", meta: 0}, {stack: 1});
Item.createItem("terrashovel", "§2 Природная лопата", {name: "terrashovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("terra", {durability: 3400, level: 4, efficiency: 8, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.terrasword, "terra", ToolType.sword);
ToolAPI.setTool(ItemID.terrapickaxe, "terra", ToolType.pickaxe);
ToolAPI.setTool(ItemID.terraaxe, "terra", ToolType.axe);
ToolAPI.setTool(ItemID.terrashovel, "terra", ToolType.shovel);

IDRegistry.genItemID("terrahelmet");
IDRegistry.genItemID("terrachestplate");
IDRegistry.genItemID("terraleggings");
IDRegistry.genItemID("terraboots");

Item.createArmorItem("terrahelmet", "§c Земляной шлем §r \n 3 защита", {name: "terrahelmet", meta: 0}, {type: "helmet", armor: 3, durability: 130, texture: "armor/terraarmor.png"});
Item.createArmorItem("terrachestplate", "§c Земляной нагрудник §r \n 3 защита", {name: "terrachestplate", meta: 0}, {type: "chestplate", armor: 3, durability: 210, texture: "armor/terraarmor.png"});
Item.createArmorItem("terraleggings", "§c Земляные поножи §r  \n 3 защита", {name: "terraleggings", meta: 0}, {type: "leggings", armor: 3, durability: 190, texture: "armor/terraarmor0.png"});
Item.createArmorItem("terraboots", "§c Земляные ботинки §r \n 3 защита", {name: "terraboots", meta: 0}, {type: "boots", armor: 3, durability: 165, texture: "armor/terraarmor.png"});
