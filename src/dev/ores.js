IDRegistry.genBlockID("aeriteore");
Block.createBlock("aeriteore", [{name: "Аэритовая руда", texture: [["aeriteore", 0], ["aeriteore", 0], ["aeriteore", 0], ["aeriteore", 0], ["aeriteore", 0], ["aeriteore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.aeriteore, "stone", 3, true);
Block.setDestroyLevel (BlockID.aeriteore, 1) 
Block.registerDropFunction("aeriteore", function(coords, blockID, blockData, level){
	if (level > 0){
		return [[BlockID.aeriteore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("aquatiteore");
Block.createBlock("aquatiteore", [{name: "Акватитовая руда", texture: [["aquatiteore", 0], ["aquatiteore", 0], ["aquatiteore", 0], ["aquatiteore", 0], ["aquatiteore", 0], ["aquatiteore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.aquatiteore, "stone", 3, true);
Block.setDestroyLevel (BlockID.aquatiteore, 1) 
Block.registerDropFunction("aquatiteore", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[BlockID.aquatiteore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("ignisusore");
Block.createBlock("ignisusore", [{name: "Игнисусовая руда", texture: [["ignisusore", 0], ["ignisusore", 0], ["ignisusore", 0], ["ignisusore", 0], ["ignisusore", 0], ["ignisusore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ignisusore, "stone", 3, true);
Block.setDestroyLevel (BlockID.ignisusore, 1) 
Block.registerDropFunction("ignisusore", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.ignisusore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("ignisusnetherore");
Block.createBlock("ignisusnetherore", [{name: "Игнисусовая руда", texture: [["ignisusnetherore", 0], ["ignisusnetherore", 0], ["ignisusnetherore", 0], ["ignisusnetherore", 0], ["ignisusnetherore", 0], ["ignisusnetherore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ignisusnetherore, "stone", 3, true);
Block.setDestroyLevel (BlockID.ignisusnetherore, 1) 
Block.registerDropFunction("ignisusnetherore", function(coords, blockID, blockData, level){
	if (level > 3){
		return [[BlockID.ignisusnetherore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("territeore");
Block.createBlock("territeore", [{name: "Территовая руда", texture: [["territeore", 0], ["territeore", 0], ["territeore", 0], ["territeore", 0], ["territeore", 0], ["territeore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.territeore, "stone", 3, true);
Block.setDestroyLevel (BlockID.territeore, 1) 
Block.registerDropFunction("territeore", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.territeore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("cometiteore");
Block.createBlock("cometiteore", [{name: "Кометитовая руда", texture: [["cometiteore", 0], ["cometiteore", 0], ["cometiteore", 0], ["cometiteore", 0], ["cometiteore", 0], ["cometiteore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.cometiteore, "stone", 3, true);
Block.setDestroyLevel (BlockID.cometiteore, 4) 
Block.registerDropFunction("cometiteore", function(coords, blockID, blockData, level){
	if (level > 4){
		return [[BlockID.cometiteore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("goldyore");
Block.createBlock("goldyore", [{name: "Злотоносная руда", texture: [["goldyore", 0], ["goldyore", 0], ["goldyore", 0], ["goldyore", 0], ["goldyore", 0], ["goldyore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.goldyore, "stone", 3, true);
Block.setDestroyLevel (BlockID.goldyore, 1) 
Block.registerDropFunction("goldyore", function(coords, blockID, blockData, level){
	if (level > 11){
		return [[BlockID.goldyore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("depthore");
Block.createBlock("depthore", [{name: "Глубинная руда", texture: [["depthore", 0], ["depthore", 0], ["depthore", 0], ["depthore", 0], ["depthore", 0], ["depthore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.depthore, "stone", 3, true);
Block.setDestroyLevel (BlockID.depthore, 1) 
Block.registerDropFunction("depthore", function(coords, blockID, blockData, level){
	if (level > 12){
		return [[BlockID.depthore, 1, 0]]
	}
	return [];
}, 1);





IDRegistry.genBlockID("cloud");
Block.createBlock("cloud", [{name: "Облако", texture: [["cloud", 0], ["cloud", 0], ["cloud", 0], ["cloud", 0], ["cloud", 0], ["cloud", 0]], inCreative: true}], cloud);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.territeore, 0, 10);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 230);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ignisusnetherore, 0, 10);
    }
}
)


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        if(World.getBlockID(coords.x+1,coords.y,coords.z)==11){ 
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ignisusore, 0, 10);
    }
}
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        if(World.getBlockID(coords.x+1,coords.y,coords.z)==12){ 
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aquatiteore, 0, 10);
    }
}
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        var coordus = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if(World.getBlockID(coordus.x+1,coordus.y,coordus.z)==13){ 
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aquatiteore, 0, 10);
    }
}
}
)



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if(World.getBlockID(coords.x,coords.y,coords.z)==12){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.aquatiteore, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if(World.getBlockID(coords.x,coords.y,coords.z)==11){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.ignisusore, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if(World.getBlockID(coords.x,coords.y,coords.z)==13){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.aquatiteore, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+100,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+100,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+100,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+100,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+100,  coords.z-1, BlockID.cloud, 0);
       
       World.setBlock(coords.x,coords.y+101,  coords.z, BlockID.aeriteore, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z, BlockID.aeriteore, 0);
       World.setBlock(coords.x+2,coords.y+101,  coords.z, BlockID.aeriteore, 0);
       World.setBlock(coords.x,coords.y+101,  coords.z-1, BlockID.aeriteore, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z-1, BlockID.aeriteore, 0);
       World.setBlock(coords.x+3,coords.y+101,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+101,  coords.z+1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z+1, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+101,  coords.z+1, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+101,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z-2, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+101,  coords.z-2, BlockID.cloud, 0);
       World.setBlock(coords.x-1,coords.y+101,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x-1,coords.y+101,  coords.z, BlockID.cloud, 0);
       
       World.setBlock(coords.x,coords.y+102,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+102,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+102,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+102,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+102,  coords.z-1, BlockID.cloud, 0);
}}});

IDRegistry.genItemID("aeriteingot");
Item.createItem("aeriteingot", "Аэритовый слиток", {name: "aeriteingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("territeingot");
Item.createItem("territeingot", "Территовый слиток", {name: "territeingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("ignisusingot");
Item.createItem("ignisusingot", "Игнисуситовый слиток", {name: "ignisusingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("aquatiteingot");
Item.createItem("aquatiteingot", "Акватитовый слиток", {name: "aquatiteingot", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.aeriteore, ItemID.aeriteingot, 1);

Recipes.addFurnace(BlockID.territeore, ItemID.territeingot, 1);

Recipes.addFurnace(BlockID.aquatiteore, ItemID.aquatiteingot, 1);

Recipes.addFurnace(BlockID.ignisusore, ItemID.ignisusingot, 1);

Recipes.addFurnace(BlockID.ignisusnetherore, ItemID.ignisusingot, 1);

IDRegistry.genItemID("ignissword");
IDRegistry.genItemID("ignispickaxe");
IDRegistry.genItemID("ignisaxe");
IDRegistry.genItemID("ignisshovel");
Item.createItem("ignissword", "§a Огненный меч §r \n 10 урон", {name: "ignissword", meta: 0}, {stack: 1});
Item.createItem("ignispickaxe", "§2 Огненная кирка", {name: "ignispickaxe", meta: 0}, {stack: 1});
Item.createItem("ignisaxe", "§2 Огненный топор", {name: "ignisaxe", meta: 0}, {stack: 1});
Item.createItem("ignisshovel", "§2 Огненная лопата", {name: "ignisshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ignis", {durability: 1600, level: 5, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.ignissword, "ignis", ToolType.sword);
ToolAPI.setTool(ItemID.ignispickaxe, "ignis", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ignisaxe, "ignis", ToolType.axe);
ToolAPI.setTool(ItemID.ignisshovel, "ignis", ToolType.shovel);

IDRegistry.genItemID("ignishelmet");
IDRegistry.genItemID("ignischestplate");
IDRegistry.genItemID("ignisleggings");
IDRegistry.genItemID("ignisboots");

Item.createArmorItem("ignishelmet", "§c Огненный шлем §r \n 6 защита", {name: "ignishelmet", meta: 0}, {type: "helmet", armor: 6, durability: 300, texture: "armor/ignisarmor.png"});
Item.createArmorItem("ignischestplate", "§c Огненный нагрудник §r \n 7 защита", {name: "ignischestplate", meta: 0}, {type: "chestplate", armor: 7, durability: 600, texture: "armor/ignisarmor.png"});
Item.createArmorItem("ignisleggings", "§c Огненные поножи §r  \n 6 защита", {name: "ignisleggings", meta: 0}, {type: "leggings", armor: 6, durability: 500, texture: "armor/ignisarmor0.png"});
Item.createArmorItem("ignisboots", "§c Огненные ботинки §r \n 6 защита", {name: "ignisboots", meta: 0}, {type: "boots", armor: 6, durability: 500, texture: "armor/ignisarmor.png"});



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



IDRegistry.genItemID("aersword");
IDRegistry.genItemID("aerpickaxe");
IDRegistry.genItemID("aeraxe");
IDRegistry.genItemID("aershovel");
Item.createItem("aersword", "§a Аэролитовый меч §r \n 7 урон", {name: "aersword", meta: 0}, {stack: 1});
Item.createItem("aerpickaxe", "§2 Аэролитовая кирка", {name: "aerpickaxe", meta: 0}, {stack: 1});
Item.createItem("aeraxe", "§2 Аэролитовый топор", {name: "aeraxe", meta: 0}, {stack: 1});
Item.createItem("aershovel", "§2 Аэролитовая лопата", {name: "aershovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("aer", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.aersword, "aer", ToolType.sword);
ToolAPI.setTool(ItemID.aerpickaxe, "aer", ToolType.pickaxe);
ToolAPI.setTool(ItemID.aeraxe, "aer", ToolType.axe);
ToolAPI.setTool(ItemID.aershovel, "aer", ToolType.shovel);

IDRegistry.genItemID("aerhelmet");
IDRegistry.genItemID("aerchestplate");
IDRegistry.genItemID("aerleggings");
IDRegistry.genItemID("aerboots");

Item.createArmorItem("aerhelmet", "§c Аэролитовый шлем §r \n 4 защита", {name: "aerhelmet", meta: 0}, {type: "helmet", armor: 4, durability: 200, texture: "armor/aerarmor.png"});
Item.createArmorItem("aerchestplate", "§c Аэролитовый нагрудник §r \n 5 защита", {name: "aerchestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 400, texture: "armor/aerarmor.png"});
Item.createArmorItem("aerleggings", "§c Аэролитовая поножи §r  \n 5 защита", {name: "aerleggings", meta: 0}, {type: "leggings", armor: 5, durability: 300, texture: "armor/aerarmor0.png"});
Item.createArmorItem("aerboots", "§c Аэролитовая ботинки §r \n 3 защита", {name: "aerboots", meta: 0}, {type: "boots", armor: 5, durability: 300, texture: "armor/aerarmor.png"});

Recipes.addShaped({id: ItemID.ignissword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.ignisusingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.ignispickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.ignisusingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.ignisaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.ignisusingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.ignisshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.ignisusingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.ignishelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.ignisusingot, 0]);
Recipes.addShaped({id: ItemID.ignischestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.ignisusingot, 0]);
Recipes.addShaped({id: ItemID.ignisleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.ignisusingot, 0]);
Recipes.addShaped({id: ItemID.ignisboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.ignisusingot, 0]);





Recipes.addShaped({id: ItemID.aquasword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.aquatiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aquapickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.aquatiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aquaaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.aquatiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aquashovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.aquatiteingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.aquahelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.aquatiteingot, 0]);
Recipes.addShaped({id: ItemID.aquachestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.aquatiteingot, 0]);
Recipes.addShaped({id: ItemID.aqualeggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.aquatiteingot, 0]);
Recipes.addShaped({id: ItemID.aquaboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.aquatiteingot, 0]);



Recipes.addShaped({id: ItemID.aersword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.aeriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aerpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.aeriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aeraxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.aeriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.aershovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.aeriteingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.aerhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.aeriteingot, 0]);
Recipes.addShaped({id: ItemID.aerchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.aeriteingot, 0]);
Recipes.addShaped({id: ItemID.aerleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.aeriteingot, 0]);
Recipes.addShaped({id: ItemID.aerboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.aeriteingot, 0]);



Recipes.addShaped({id: ItemID.terrasword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.territeingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.terrapickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.territeingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.terraaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.territeingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.terrashovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.territeingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.terrahelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.territeingot, 0]);
Recipes.addShaped({id: ItemID.terrachestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.territeingot, 0]);
Recipes.addShaped({id: ItemID.terraleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.territeingot, 0]);
Recipes.addShaped({id: ItemID.terraboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.territeingot, 0]);

IDRegistry.genBlockID("cometgrass");
Block.createBlock("cometgrass", [{name: "Земля с травой кометы", texture: [["cometdirt", 0], ["cometgrasstop", 0], ["cometgrass", 0], ["cometgrass", 0], ["cometgrass", 0], ["cometgrass", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.cometgrass, "dirt", 3, true);


IDRegistry.genBlockID("cometdirt");
Block.createBlock("cometdirt", [{name: "Земля  кометы", texture: [["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.cometdirt, "dirt", 3, true);





Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+150,  coords.z, BlockID.cometdirt, 0);
       World.setBlock(coords.x+1,coords.y+150,  coords.z, BlockID.cometdirt, 0);
       World.setBlock(coords.x+2,coords.y+150,  coords.z, BlockID.cometdirt, 0);
       World.setBlock(coords.x,coords.y+150,  coords.z-1, BlockID.cometdirt, 0);
       World.setBlock(coords.x+1,coords.y+150,  coords.z-1, BlockID.cometdirt, 0);
       
       World.setBlock(coords.x,coords.y+151,  coords.z, BlockID.cometiteore, 0);
       World.setBlock(coords.x+1,coords.y+151,  coords.z, BlockID.cometiteore, 0);
       World.setBlock(coords.x+2,coords.y+151,  coords.z, BlockID.cometiteore, 0);
       World.setBlock(coords.x,coords.y+151,  coords.z-1, BlockID.cometiteore, 0);
       World.setBlock(coords.x+1,coords.y+151,  coords.z-1, BlockID.cometiteore, 0);
       World.setBlock(coords.x+3,coords.y+151,  coords.z, BlockID.cometgrass, 0);
       World.setBlock(coords.x+2,coords.y+151,  coords.z+1, BlockID.cometgrass, 0);
       World.setBlock(coords.x+1,coords.y+151,  coords.z+1, BlockID.cometgrass, 0);
       World.setBlock(coords.x,coords.y+151,  coords.z+1, BlockID.cometgrass, 0);
       World.setBlock(coords.x+2,coords.y+151,  coords.z-1, BlockID.cometgrass, 0);
       World.setBlock(coords.x+1,coords.y+151,  coords.z-2, BlockID.cometgrass, 0);
       World.setBlock(coords.x,coords.y+151,  coords.z-2, BlockID.cometgrass, 0);
       World.setBlock(coords.x-1,coords.y+151,  coords.z-1, BlockID.cometgrass, 0);
       World.setBlock(coords.x-1,coords.y+151,  coords.z, BlockID.cometgrass, 0);
       
       World.setBlock(coords.x,coords.y+152,  coords.z, BlockID.cometgrass, 0);
       World.setBlock(coords.x+1,coords.y+152,  coords.z, BlockID.cometgrass, 0);
       World.setBlock(coords.x+2,coords.y+152,  coords.z, BlockID.cometgrass, 0);
       World.setBlock(coords.x,coords.y+152,  coords.z-1, BlockID.cometgrass, 0);
       World.setBlock(coords.x+1,coords.y+152,  coords.z-1, BlockID.cometgrass, 0);
}}});


IDRegistry.genItemID("cometiteingot");
Item.createItem("cometiteingot", "Кометитовый слиток", {name: "cometiteingot", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.cometiteore, ItemID.cometiteingot, 1);

IDRegistry.genItemID("cometitesword");
IDRegistry.genItemID("cometitepickaxe");
IDRegistry.genItemID("cometiteaxe");
IDRegistry.genItemID("cometiteshovel");
Item.createItem("cometitesword", "§a Кометитовый меч §r \n 20 урон", {name: "cometitesword", meta: 0}, {stack: 1});
Item.createItem("cometitepickaxe", "§2 Кометитовая кирка", {name: "cometitepickaxe", meta: 0}, {stack: 1});
Item.createItem("cometiteaxe", "§2 Кометитовый топор", {name: "cometiteaxe", meta: 0}, {stack: 1});
Item.createItem("cometiteshovel", "§2 Кометитовая лопата", {name: "cometiteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("cometite", {durability: 3400, level: 6, efficiency: 8, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.cometitesword, "cometite", ToolType.sword);
ToolAPI.setTool(ItemID.cometitepickaxe, "cometite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.cometiteaxe, "cometite", ToolType.axe);
ToolAPI.setTool(ItemID.cometiteshovel, "cometite", ToolType.shovel);

IDRegistry.genItemID("cometitehelmet");
IDRegistry.genItemID("cometitechestplate");
IDRegistry.genItemID("cometiteleggings");
IDRegistry.genItemID("cometiteboots");

Item.createArmorItem("cometitehelmet", "§c Кометитовый шлем §r \n 6 защита", {name: "cometitehelmet", meta: 0}, {type: "helmet", armor: 6, durability: 650, texture: "armor/cometitearmor.png"});
Item.createArmorItem("cometitechestplate", "§c Кометитовый нагрудник §r \n 7 защита", {name: "cometitechestplate", meta: 0}, {type: "chestplate", armor: 7, durability: 750, texture: "armor/cometitearmor.png"});
Item.createArmorItem("cometiteleggings", "§c Кометитовые поножи §r  \n 7 защита", {name: "cometiteleggings", meta: 0}, {type: "leggings", armor: 7, durability: 700, texture: "armor/cometitearmor0.png"});
Item.createArmorItem("cometiteboots", "§c Кометитовые ботинки §r \n 6 защита", {name: "cometiteboots", meta: 0}, {type: "boots", armor: 6, durability: 600, texture: "armor/cometitearmor.png"});

Recipes.addShaped({id: ItemID.cometitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.cometiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.cometitepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.cometiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.cometiteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.cometiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.cometiteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.cometiteingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.cometitehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.cometiteingot, 0]);
Recipes.addShaped({id: ItemID.cometitechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.cometiteingot, 0]);
Recipes.addShaped({id: ItemID.cometiteleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.cometiteingot, 0]);
Recipes.addShaped({id: ItemID.cometiteboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.cometiteingot, 0]);

IDRegistry.genItemID("hollyingot");
Item.createItem("hollyingot", "Святой слиток", {name: "hollyingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("hollysword");
IDRegistry.genItemID("hollypickaxe");
IDRegistry.genItemID("hollyaxe");
IDRegistry.genItemID("hollyshovel");
Item.createItem("hollysword", "§a Святой меч §r \n 25 урон", {name: "hollysword", meta: 0}, {stack: 1});
Item.createItem("hollypickaxe", "§2 Святая кирка", {name: "hollypickaxe", meta: 0}, {stack: 1});
Item.createItem("hollyaxe", "§2 Святой топор", {name: "hollyaxe", meta: 0}, {stack: 1});
Item.createItem("hollyshovel", "§2 Святая лопата", {name: "hollyshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("holly", {durability: 3400, level: 7, efficiency: 8, damage: 25, enchantability: 14});
ToolAPI.setTool(ItemID.hollysword, "holly", ToolType.sword);
ToolAPI.setTool(ItemID.hollypickaxe, "holly", ToolType.pickaxe);
ToolAPI.setTool(ItemID.hollyaxe, "holly", ToolType.axe);
ToolAPI.setTool(ItemID.hollyshovel, "holly", ToolType.shovel);

IDRegistry.genItemID("hollyhelmet");
IDRegistry.genItemID("hollychestplate");
IDRegistry.genItemID("hollyleggings");
IDRegistry.genItemID("hollyboots");

Item.createArmorItem("hollyhelmet", "§c Святой шлем §r \n 7 защита", {name: "hollyhelmet", meta: 0}, {type: "helmet", armor: 7, durability: 650, texture: "armor/hollyarmor.png"});
Item.createArmorItem("hollychestplate", "§c Святой нагрудник §r \n 8 защита", {name: "hollychestplate", meta: 0}, {type: "chestplate", armor: 8, durability: 750, texture: "armor/hollyarmor.png"});
Item.createArmorItem("hollyleggings", "§c Святые поножи §r  \n 8 защита", {name: "hollyleggings", meta: 0}, {type: "leggings", armor: 8, durability: 700, texture: "armor/hollyarmor0.png"});
Item.createArmorItem("hollyboots", "§c Святые ботинки §r \n 7 защита", {name: "hollyboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/hollyarmor.png"});

Recipes.addShaped({id: ItemID.hollysword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.hollyingot, 0, 'b', ItemID.cometiteingot, 0]);
Recipes.addShaped({id: ItemID.hollypickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.hollyingot, 0, 'b', ItemID.cometiteingot, 0]);
Recipes.addShaped({id: ItemID.hollyaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.hollyingot, 0, 'b', ItemID.cometiteingot, 0]);
Recipes.addShaped({id: ItemID.hollyshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.hollyingot, 0, 'b', ItemID.cometiteingot, 0]);



Recipes.addShaped({id: ItemID.hollyhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.hollyingot, 0]);
Recipes.addShaped({id: ItemID.hollychestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.hollyingot, 0]);
Recipes.addShaped({id: ItemID.hollyleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.hollyingot, 0]);
Recipes.addShaped({id: ItemID.hollyboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.hollyingot, 0]);

IDRegistry.genItemID("krackeningot");
Item.createItem("krackeningot", "Слиток кракена", {name: "krackeningot", meta: 0}, {stack: 64});


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

Recipes.addShaped({id: ItemID.krackensword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.krackeningot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.krackenpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.krackeningot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.krackenaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.krackeningot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.krackenshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.krackeningot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.krackenhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.krackeningot, 0]);
Recipes.addShaped({id: ItemID.krackenchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.krackeningot, 0]);
Recipes.addShaped({id: ItemID.krackenleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.krackeningot, 0]);
Recipes.addShaped({id: ItemID.krackenboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.krackeningot, 0]);

IDRegistry.genItemID("krackenkatana");
Item.createItem("krackenkatana", "§a Катана Кракена §r \n 138 урон ", {name: "krackenkatana", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("krackenkatana", {durability: 3400, level: 4, efficiency: 8, damage: 138, enchantability: 14});
ToolAPI.setTool(ItemID.krackenkatana, "krackenkatana", ToolType.sword);

Recipes.addShaped({id: ItemID.krackenkatana, count: 1, data: 0}, [ " aa", "aaa", "ba "], ['a', ItemID.krackeningot, 0, 'b', 280, 0]);

IDRegistry.genItemID("palladiumingot");
Item.createItem("palladiumingot", "Палладиевый слиток", {name: "palladiumingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("palladiumsword");
IDRegistry.genItemID("palladiumpickaxe");
IDRegistry.genItemID("palladiumaxe");
IDRegistry.genItemID("palladiumshovel");
Item.createItem("palladiumsword", "§a Палладиевый боевой молот §r \n 7 урон", {name: "palladiumsword", meta: 0}, {stack: 1});
Item.createItem("palladiumpickaxe", "§2 Палладиумная кирка", {name: "palladiumpickaxe", meta: 0}, {stack: 1});
Item.createItem("palladiumaxe", "§2 Палладиумный топор", {name: "palladiumaxe", meta: 0}, {stack: 1});
Item.createItem("palladiumshovel", "§2 Палладиумная лопата", {name: "palladiumshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("palladium", {durability: 3400, level: 3, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.palladiumsword, "palladium", ToolType.sword);
ToolAPI.setTool(ItemID.palladiumpickaxe, "palladium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.palladiumaxe, "palladium", ToolType.axe);
ToolAPI.setTool(ItemID.palladiumshovel, "palladium", ToolType.shovel);

IDRegistry.genItemID("palladiumhelmet");
IDRegistry.genItemID("palladiumchestplate");
IDRegistry.genItemID("palladiumleggings");
IDRegistry.genItemID("palladiumboots");

Item.createArmorItem("palladiumhelmet", "§c Палладиумный шлем §r \n 5 защита", {name: "palladiumhelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/palladiumarmor.png"});
Item.createArmorItem("palladiumchestplate", "§c Палладиумный нагрудник §r \n 5 защита", {name: "palladiumchestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 750, texture: "armor/palladiumarmor.png"});
Item.createArmorItem("palladiumleggings", "§c Палладиумные поножи §r  \n 5 защита", {name: "palladiumleggings", meta: 0}, {type: "leggings", armor: 5, durability: 700, texture: "armor/palladiumarmor0.png"});
Item.createArmorItem("palladiumboots", "§c Палладиумные ботинки §r \n 5 защита", {name: "palladiumboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/palladiumarmor.png"});

Recipes.addShaped({id: ItemID.palladiumsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.palladiumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.palladiumpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.palladiumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.palladiumaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.palladiumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.palladiumshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.palladiumingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.palladiumhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.palladiumingot, 0]);
Recipes.addShaped({id: ItemID.palladiumchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.palladiumingot, 0]);
Recipes.addShaped({id: ItemID.palladiumleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.palladiumingot, 0]);
Recipes.addShaped({id: ItemID.palladiumboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.palladiumingot, 0]);

IDRegistry.genItemID("stardust");
Item.createItem("stardust", "Звездная пыль", {name: "stardust", meta: 0}, {stack: 64});

IDRegistry.genItemID("astralingot");
Item.createItem("astralingot", "Астральный слиток", {name: "staringot", meta: 0}, {stack: 64});

IDRegistry.genBlockID("astralore");
Block.createBlock("astralore", [{name: "Астральная руда", texture: [["starore", 0], ["starore", 0], ["starore", 0], ["starore", 0], ["starore", 0], ["starore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.astralore, "stone", 3, true);
Block.setDestroyLevel (BlockID.astralore, 1) 
Block.registerDropFunction("astralore", function(coords, blockID, blockData, level){
	if (level > 8){
		return [[BlockID.astralore, 1, 0]]
	}
	return [];
}, 1);

Recipes.addShaped({id: ItemID.astralingot, count: 1, data: 0}, [ " b ", " a ", "   "], ['a', ItemID.stardust, 0, 'b', BlockID.astralore, 0]);

IDRegistry.genItemID("astralsword");
IDRegistry.genItemID("astralpickaxe");
IDRegistry.genItemID("astralaxe");
IDRegistry.genItemID("astralshovel");
Item.createItem("astralsword", "§a Астральный меч §r \n 305 урон", {name: "astralsword", meta: 0}, {stack: 1});
Item.createItem("astralpickaxe", "§2 Астральная кирка", {name: "astralpickaxe", meta: 0}, {stack: 1});
Item.createItem("astralaxe", "§2 Астральный топор", {name: "astralaxe", meta: 0}, {stack: 1});
Item.createItem("astralshovel", "§2 Астральная лопата", {name: "astralshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("astral", {durability: 3400, level: 10, efficiency: 8, damage: 305, enchantability: 14});
ToolAPI.setTool(ItemID.astralsword, "astral", ToolType.sword);
ToolAPI.setTool(ItemID.astralpickaxe, "astral", ToolType.pickaxe);
ToolAPI.setTool(ItemID.astralaxe, "astral", ToolType.axe);
ToolAPI.setTool(ItemID.astralshovel, "astral", ToolType.shovel);

IDRegistry.genItemID("astralhelmet");
IDRegistry.genItemID("astralchestplate");
IDRegistry.genItemID("astralleggings");
IDRegistry.genItemID("astralboots");

Item.createArmorItem("astralhelmet", "§c Астральный шлем §r \n 41 защита", {name: "astralhelmet", meta: 0}, {type: "helmet", armor: 41, durability: 650, texture: "armor/astralarmor.png"});
Item.createArmorItem("astralchestplate", "§c Астральный нагрудник §r \n 42 защита", {name: "astralchestplate", meta: 0}, {type: "chestplate", armor: 42, durability: 750, texture: "armor/astralarmor.png"});
Item.createArmorItem("astralleggings", "§c Астральные поножи §r  \n 42 защита", {name: "astralleggings", meta: 0}, {type: "leggings", armor: 42, durability: 700, texture: "armor/astralarmor0.png"});
Item.createArmorItem("astralboots", "§c Астральные ботинки §r \n 41 защита", {name: "astralboots", meta: 0}, {type: "boots", armor: 41, durability: 600, texture: "armor/astralarmor.png"});

Recipes.addShaped({id: ItemID.astralsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.astralingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.astralpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.astralingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.astralaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.astralingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.astralshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.astralingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.astralhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.astralingot, 0]);
Recipes.addShaped({id: ItemID.astralchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.astralingot, 0]);
Recipes.addShaped({id: ItemID.astralleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.astralingot, 0]);
Recipes.addShaped({id: ItemID.astralboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.astralingot, 0]);

IDRegistry.genItemID("chaosingot");
Item.createItem("chaosingot", "Слиток хаоса", {name: "chaosingot", meta: 0}, {stack: 64});

IDRegistry.genBlockID("chaosore");
Block.createBlock("chaosore", [{name: "Руда хаоса", texture: [["chaosore", 0], ["chaosore", 0], ["chaosore", 0], ["chaosore", 0], ["chaosore", 0], ["chaosore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.chaosore, "stone", 3, true);
Block.setDestroyLevel (BlockID.chaosore, 1) 
Block.registerDropFunction("chaosore", function(coords, blockID, blockData, level){
	if (level > 10){
		return [[BlockID.chaosore, 1, 0]]
	}
	return [];
}, 1);

Recipes.addFurnace(BlockID.chaosore, ItemID.chaosingot, 1);

IDRegistry.genItemID("chaossword");
IDRegistry.genItemID("chaospickaxe");
IDRegistry.genItemID("chaosaxe");
IDRegistry.genItemID("chaosshovel");
Item.createItem("chaossword", "§a Меч хаоса §r \n 350 урон", {name: "chaossword", meta: 0}, {stack: 1});
Item.createItem("chaospickaxe", "§2 Хаотический разрушитель", {name: "chaospickaxe", meta: 0}, {stack: 1});
Item.createItem("chaosaxe", "§2 Топор хаоса", {name: "chaosaxe", meta: 0}, {stack: 1});
Item.createItem("chaosshovel", "§2 Лопата хаоса", {name: "chaosshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("chaos", {durability: 3400, level: 11, efficiency: 8, damage: 350, enchantability: 14});
ToolAPI.setTool(ItemID.chaossword, "chaos", ToolType.sword);
ToolAPI.setTool(ItemID.chaospickaxe, "chaos", ToolType.pickaxe);
ToolAPI.setTool(ItemID.chaosaxe, "chaos", ToolType.axe);
ToolAPI.setTool(ItemID.chaosshovel, "chaos", ToolType.shovel);

IDRegistry.genItemID("chaoshelmet");
IDRegistry.genItemID("chaoschestplate");
IDRegistry.genItemID("chaosleggings");
IDRegistry.genItemID("chaosboots");

Item.createArmorItem("chaoshelmet", "§c Темнодемонический шлем §r \n 50 защита", {name: "chaoshelmet", meta: 0}, {type: "helmet", armor: 50, durability: 650, texture: "armor/chaosarmor.png"});
Item.createArmorItem("chaoschestplate", "§c Темнодемонический нагрудник §r \n 55 защита", {name: "chaoschestplate", meta: 0}, {type: "chestplate", armor: 55, durability: 750, texture: "armor/chaosarmor.png"});
Item.createArmorItem("chaosleggings", "§c Темнодемонические поножи §r  \n 55 защита", {name: "chaosleggings", meta: 0}, {type: "leggings", armor: 55, durability: 700, texture: "armor/chaosarmor0.png"});
Item.createArmorItem("chaosboots", "§c Темнодемонические ботинки §r \n 50 защита", {name: "chaosboots", meta: 0}, {type: "boots", armor: 50, durability: 600, texture: "armor/chaosarmor.png"});

Recipes.addShaped({id: ItemID.chaossword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.chaosingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.chaospickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.chaosingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.chaosaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.chaosingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.chaosshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.chaosingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.chaoshelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.chaosingot, 0]);
Recipes.addShaped({id: ItemID.chaoschestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.chaosingot, 0]);
Recipes.addShaped({id: ItemID.chaosleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.chaosingot, 0]);
Recipes.addShaped({id: ItemID.chaosboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.chaosingot, 0]);

IDRegistry.genItemID("meowingot");
Item.createItem("meowingot", "Мяуслиток", {name: "meowingot", meta: 0}, {stack: 64});

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

Recipes.addShaped({id: ItemID.meowsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.meowingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.meowpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.meowingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.meowaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.meowingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.meowshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.meowingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.meowhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.meowingot, 0]);
Recipes.addShaped({id: ItemID.meowchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.meowingot, 0]);
Recipes.addShaped({id: ItemID.meowleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.meowingot, 0]);
Recipes.addShaped({id: ItemID.meowboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.meowingot, 0]);

IDRegistry.genBlockID("floriteore");
Block.createBlock("floriteore", [{name: "Флоритовая руда", texture: [["floriteore", 0], ["floriteore", 0], ["floriteore", 0], ["floriteore", 0], ["floriteore", 0], ["floriteore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.floriteore, "stone", 3, true);
Block.setDestroyLevel (BlockID.floriteore, 1) 
Block.registerDropFunction("floriteore", function(coords, blockID, blockData, level){
	if (level > 10){
		return [[BlockID.floriteore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genItemID("floriteingot");
Item.createItem("floriteingot", "Флоритовый слиток", {name: "floriteingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.floriteingot, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.profanedessence, 0, 'b', BlockID.floriteore, 0]);

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

Recipes.addShaped({id: ItemID.floritesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.floriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.floritepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.floriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.floriteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.floriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.floriteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.floriteingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.floritehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.floriteingot, 0]);
Recipes.addShaped({id: ItemID.floritechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.floriteingot, 0]);
Recipes.addShaped({id: ItemID.floriteleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.floriteingot, 0]);
Recipes.addShaped({id: ItemID.floriteboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.floriteingot, 0]);

IDRegistry.genItemID("galaxiteingot");
Item.createItem("galaxiteingot", "Галакситовый слиток", {name: "verumcosmiliteingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("galaxitesword");
IDRegistry.genItemID("galaxitepickaxe");
IDRegistry.genItemID("galaxiteaxe");
IDRegistry.genItemID("galaxiteshovel");
Item.createItem("galaxitesword", "§a Галакситовый меч §r \n 600 урон", {name: "galaxitesword", meta: 0}, {stack: 1});
Item.createItem("galaxitepickaxe", "§2 Галакситовая кирка", {name: "galaxitepickaxe", meta: 0}, {stack: 1});
Item.createItem("galaxiteaxe", "§2 Галакситовый топор", {name: "galaxiteaxe", meta: 0}, {stack: 1});
Item.createItem("galaxiteshovel", "§2 Галакситовая лопата", {name: "galaxiteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("galaxite", {durability: 3400, level: 12, efficiency: 8, damage: 600, enchantability: 14});
ToolAPI.setTool(ItemID.galaxitesword, "galaxite", ToolType.sword);
ToolAPI.setTool(ItemID.galaxitepickaxe, "galaxite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.galaxiteaxe, "galaxite", ToolType.axe);
ToolAPI.setTool(ItemID.galaxiteshovel, "galaxite", ToolType.shovel);

IDRegistry.genItemID("galaxitehelmet");
IDRegistry.genItemID("galaxitechestplate");
IDRegistry.genItemID("galaxiteleggings");
IDRegistry.genItemID("galaxiteboots");

Item.createArmorItem("galaxitehelmet", "§c Галакситовый шлем §r \n 75 защита", {name: "galaxitehelmet", meta: 0}, {type: "helmet", armor: 75, durability: 650, texture: "armor/galaxitearmor.png"});
Item.createArmorItem("galaxitechestplate", "§c Галакситовый нагрудник §r \n 80 защита", {name: "galaxitechestplate", meta: 0}, {type: "chestplate", armor: 80, durability: 750, texture: "armor/galaxitearmor.png"});
Item.createArmorItem("galaxiteleggings", "§c Галакситовые поножи §r  \n 80 защита", {name: "galaxiteleggings", meta: 0}, {type: "leggings", armor: 80, durability: 700, texture: "armor/galaxitearmor0.png"});
Item.createArmorItem("galaxiteboots", "§c Галакситовые ботинки §r \n 75 защита", {name: "galaxiteboots", meta: 0}, {type: "boots", armor: 75, durability: 600, texture: "armor/galaxitearmor.png"});

Recipes.addShaped({id: ItemID.galaxitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.galaxiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.galaxitepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.galaxiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.galaxiteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.galaxiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.galaxiteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.galaxiteingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.galaxitehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.galaxiteingot, 0]);
Recipes.addShaped({id: ItemID.galaxitechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.galaxiteingot, 0]);
Recipes.addShaped({id: ItemID.galaxiteleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.galaxiteingot, 0]);
Recipes.addShaped({id: ItemID.galaxiteboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.galaxiteingot, 0]);

IDRegistry.genItemID("goldyingot");
Item.createItem("goldyingot", " Злотоносный слиток", {name: "goldyingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("goldysword");
IDRegistry.genItemID("goldypickaxe");
IDRegistry.genItemID("goldyaxe");
IDRegistry.genItemID("goldyshovel");
Item.createItem("goldysword", "§a Злотоносный меч §r \n 650 урон", {name: "goldysword", meta: 0}, {stack: 1});
Item.createItem("goldypickaxe", "§2 Злотоносная кирка", {name: "goldypickaxe", meta: 0}, {stack: 1});
Item.createItem("goldyaxe", "§2 Злотоносный топор", {name: "goldyaxe", meta: 0}, {stack: 1});
Item.createItem("goldyshovel", "§2 Злотоносная лопата", {name: "goldyshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("goldy", {durability: 3400, level: 12, efficiency: 8, damage: 650, enchantability: 14});
ToolAPI.setTool(ItemID.goldysword, "goldy", ToolType.sword);
ToolAPI.setTool(ItemID.goldypickaxe, "goldy", ToolType.pickaxe);
ToolAPI.setTool(ItemID.goldyaxe, "goldy", ToolType.axe);
ToolAPI.setTool(ItemID.goldyshovel, "goldy", ToolType.shovel);

IDRegistry.genItemID("goldyhelmet");
IDRegistry.genItemID("goldychestplate");
IDRegistry.genItemID("goldyleggings");
IDRegistry.genItemID("goldyboots");

Item.createArmorItem("goldyhelmet", "§c Злотоносный шлем §r \n 85 защита", {name: "goldyhelmet", meta: 0}, {type: "helmet", armor: 85, durability: 650, texture: "armor/goldyarmor.png"});
Item.createArmorItem("goldychestplate", "§c Злотоносный нагрудник §r \n 90 защита", {name: "goldychestplate", meta: 0}, {type: "chestplate", armor: 90, durability: 750, texture: "armor/goldyarmor.png"});
Item.createArmorItem("goldyleggings", "§c Злотоносные поножи §r  \n 90 защита", {name: "goldyleggings", meta: 0}, {type: "leggings", armor: 90, durability: 700, texture: "armor/goldyarmor0.png"});
Item.createArmorItem("goldyboots", "§c Злотоносные ботинки §r \n 85 защита", {name: "goldyboots", meta: 0}, {type: "boots", armor: 85, durability: 600, texture: "armor/goldyarmor.png"});

Recipes.addShaped({id: ItemID.goldysword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.goldyingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.goldypickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.goldyingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.goldyaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.goldyingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.goldyshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.goldyingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.goldyhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.goldyingot, 0]);
Recipes.addShaped({id: ItemID.goldychestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.goldyingot, 0]);
Recipes.addShaped({id: ItemID.goldyleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.goldyingot, 0]);
Recipes.addShaped({id: ItemID.goldyboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.goldyingot, 0]);

Recipes.addFurnace(BlockID.goldyore, ItemID.goldyingot, 1);

IDRegistry.genItemID("shadowspecingot");
Item.createItem("shadowspecingot", "Шедоуспеховый слиток", {name: "shadowspecingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("shadowspecsword");
IDRegistry.genItemID("shadowspecpickaxe");
IDRegistry.genItemID("shadowspecaxe");
IDRegistry.genItemID("shadowspecshovel");
Item.createItem("shadowspecsword", "§a Шедоуспеховый меч §r \n 750 урон", {name: "shadowspecsword", meta: 0}, {stack: 1});
Item.createItem("shadowspecpickaxe", "§2 Шедоуспеховая кирка", {name: "shadowspecpickaxe", meta: 0}, {stack: 1});
Item.createItem("shadowspecaxe", "§2 Шедоуспеховый топор", {name: "shadowspecaxe", meta: 0}, {stack: 1});
Item.createItem("shadowspecshovel", "§2 Шедоуспеховая лопата", {name: "shadowspecshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("shadowspec", {durability: 3400, level: 14, efficiency: 8, damage: 750, enchantability: 14});
ToolAPI.setTool(ItemID.shadowspecsword, "shadowspec", ToolType.sword);
ToolAPI.setTool(ItemID.shadowspecpickaxe, "shadowspec", ToolType.pickaxe);
ToolAPI.setTool(ItemID.shadowspecaxe, "shadowspec", ToolType.axe);
ToolAPI.setTool(ItemID.shadowspecshovel, "shadowspec", ToolType.shovel);

IDRegistry.genItemID("shadowspechelmet");
IDRegistry.genItemID("shadowspecchestplate");
IDRegistry.genItemID("shadowspecleggings");
IDRegistry.genItemID("shadowspecboots");

Item.createArmorItem("shadowspechelmet", "§c Шедоуспеховый шлем §r \n 100 защита", {name: "shadowspechelmet", meta: 0}, {type: "helmet", armor: 100, durability: 650, texture: "armor/shadowspecarmor.png"});
Item.createArmorItem("shadowspecchestplate", "§c Шедоуспеховый нагрудник §r \n 105 защита", {name: "shadowspecchestplate", meta: 0}, {type: "chestplate", armor: 105, durability: 750, texture: "armor/shadowspecarmor.png"});
Item.createArmorItem("shadowspecleggings", "§c Шедоуспеховые поножи §r  \n 105 защита", {name: "shadowspecleggings", meta: 0}, {type: "leggings", armor: 105, durability: 700, texture: "armor/shadowspecarmor0.png"});
Item.createArmorItem("shadowspecboots", "§c Шедоуспеховые ботинки §r \n 100 защита", {name: "shadowspecboots", meta: 0}, {type: "boots", armor: 100, durability: 600, texture: "armor/shadowspecarmor.png"});

Recipes.addShaped({id: ItemID.shadowspecsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.shadowspecingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.shadowspecpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.shadowspecingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.shadowspecaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.shadowspecingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.shadowspecshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.shadowspecingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.shadowspechelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.shadowspecingot, 0]);
Recipes.addShaped({id: ItemID.shadowspecchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.shadowspecingot, 0]);
Recipes.addShaped({id: ItemID.shadowspecleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.shadowspecingot, 0]);
Recipes.addShaped({id: ItemID.shadowspecboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.shadowspecingot, 0]); 

Recipes.addShaped({id: ItemID.shadowspecingot, count: 1, data: 0}, [ "abc", "def", "   "], ['a', ItemID.elementalingot, 0, 'b', ItemID.calamityessence, 0, 'c', ItemID.fragmentoftruncatissoul, 0, 'd', ItemID.nightmarefuel, 0, 'e', ItemID.endothermicenergy, 0, 'f', ItemID.fantaplasm, 0]); 

IDRegistry.genItemID("azatotingot");
Item.createItem("azatotingot", "Слиток Азатота", {name: "azatotingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.azatotingot, count: 1, data: 0}, [ "abc ", "def", "gff"], ['a', ItemID.calamitydust, 0, 'b', ItemID.calamityessence, 0, 'c', ItemID.endothermicenergy, 0, 'd', ItemID.fragmentoftruncatissoul, 0, 'e', ItemID.godjeoda, 0, 'f', ItemID.shadowspecingot, 0, 'g', ItemID.venomusingot, 0]);



IDRegistry.genItemID("depthingot");
Item.createItem("depthingot", "Глубоководный слиток", {name: "depthingot", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.depthore, ItemID.depthingot, 1);

IDRegistry.genItemID("chtulhuleather");
Item.createItem("chtulhuleather", "Кожа Ктулху", {name: "chtulhuleather", meta: 0}, {stack: 64});

IDRegistry.genItemID("chtulhusword");
IDRegistry.genItemID("chtulhupickaxe");
IDRegistry.genItemID("chtulhuaxe");
IDRegistry.genItemID("chtulhushovel");
Item.createItem("chtulhusword", "§a Меч Ктулху §r \n 2000 урон", {name: "chtulhusword", meta: 0}, {stack: 1});
Item.createItem("chtulhupickaxe", "§2 Кирка Ктулху", {name: "chtulhupickaxe", meta: 0}, {stack: 1});
Item.createItem("chtulhuaxe", "§2 Топор Ктулху", {name: "chtulhuaxe", meta: 0}, {stack: 1});
Item.createItem("chtulhushovel", "§2 Лопата Ктулху", {name: "chtulhushovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("chtulhu", {durability: 3400, level: 13, efficiency: 8, damage: 2000, enchantability: 14});
ToolAPI.setTool(ItemID.chtulhusword, "chtulhu", ToolType.sword);
ToolAPI.setTool(ItemID.chtulhupickaxe, "chtulhu", ToolType.pickaxe);
ToolAPI.setTool(ItemID.chtulhuaxe, "chtulhu", ToolType.axe);
ToolAPI.setTool(ItemID.chtulhushovel, "chtulhu", ToolType.shovel);

IDRegistry.genItemID("chtulhuhelmet");
IDRegistry.genItemID("chtulhuchestplate");
IDRegistry.genItemID("chtulhuleggings");
IDRegistry.genItemID("chtulhuboots");

Item.createArmorItem("chtulhuhelmet", "§c Шлем Ктулху §r \n 220 защита", {name: "chtulhuhelmet", meta: 0}, {type: "helmet", armor: 220, durability: 650, texture: "armor/chtulhuarmor.png"});
Item.createArmorItem("chtulhuchestplate", "§c Нагрудник Ктулху §r \n 240 защита", {name: "chtulhuchestplate", meta: 0}, {type: "chestplate", armor: 240, durability: 750, texture: "armor/chtulhuarmor.png"});
Item.createArmorItem("chtulhuleggings", "§c Поножи Ктулху §r  \n 240 защита", {name: "chtulhuleggings", meta: 0}, {type: "leggings", armor: 240, durability: 700, texture: "armor/chtulhuarmor0.png"});
Item.createArmorItem("chtulhuboots", "§c Ботинки Ктулху §r \n 220 защита", {name: "chtulhuboots", meta: 0}, {type: "boots", armor: 220, durability: 600, texture: "armor/chtulhuarmor.png"});

Recipes.addShaped({id: ItemID.chtulhusword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.depthingot, 0, 'b', ItemID.chtulhuleather, 0]);
Recipes.addShaped({id: ItemID.chtulhupickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.depthingot, 0, 'b', ItemID.chtulhuleather, 0]);
Recipes.addShaped({id: ItemID.chtulhuaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.depthingot, 0, 'b', ItemID.chtulhuleather, 0]);
Recipes.addShaped({id: ItemID.chtulhushovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.depthingot, 0, 'b', ItemID.chtulhuleather, 0]);



Recipes.addShaped({id: ItemID.chtulhuhelmet, count: 1, data: 0}, [ "aba", "b b", "   "], ['a', ItemID.chtulhuleather, 0, 'b', ItemID.depthingot, 0]);
Recipes.addShaped({id: ItemID.chtulhuchestplate, count: 1, data: 0}, [ "b b", "aba", "bab"], ['a', ItemID.chtulhuleather, 0, 'b', ItemID.depthingot, 0]);
Recipes.addShaped({id: ItemID.chtulhuleggings, count: 1, data: 0}, [ "bab", "a a", "b b"], ['a', ItemID.chtulhuleather, 0, 'b', ItemID.depthingot, 0]);
Recipes.addShaped({id: ItemID.chtulhuboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['a', ItemID.chtulhuleather, 0, 'b', ItemID.depthingot, 0]);

IDRegistry.genItemID("cosmiliteingot");
Item.createItem("cosmiliteingot", "Космилитовый слиток \n В этом слитке сосредоточена некая космическая энергия \n вы чувствуете ее...", {name: "cosmiliteingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("cosmilitehelmet");
IDRegistry.genItemID("cosmilitechestplate");
IDRegistry.genItemID("cosmiliteleggings");
IDRegistry.genItemID("cosmiliteboots");

Item.createArmorItem("cosmilitehelmet", "§c Космилитовый шлем §r \n 40 защита", {name: "cosmilitehelmet", meta: 0}, {type: "helmet", armor: 40, durability: 650, texture: "armor/cosmilitearmor.png"});
Item.createArmorItem("cosmilitechestplate", "§c Космилитовый нагрудник §r \n 41 защита", {name: "cosmilitechestplate", meta: 0}, {type: "chestplate", armor: 41, durability: 750, texture: "armor/cosmilitearmor.png"});
Item.createArmorItem("cosmiliteleggings", "§c Космилитовые поножи §r  \n 41 защита", {name: "cosmiliteleggings", meta: 0}, {type: "leggings", armor: 41, durability: 700, texture: "armor/cosmilitearmor0.png"});
Item.createArmorItem("cosmiliteboots", "§c Космилитовые ботинки §r \n 40 защита", {name: "cosmiliteboots", meta: 0}, {type: "boots", armor: 40, durability: 600, texture: "armor/cosmilitearmor.png"});

Recipes.addShaped({id: ItemID.cosmilitehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.cosmiliteingot, 0]);
Recipes.addShaped({id: ItemID.cosmilitechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.cosmiliteingot, 0]);
Recipes.addShaped({id: ItemID.cosmiliteleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.cosmiliteingot, 0]);
Recipes.addShaped({id: ItemID.cosmiliteboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.cosmiliteingot, 0]);

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

Recipes.addShaped({id: ItemID.cosmilitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.evilfragment, 0]);
Recipes.addShaped({id: ItemID.cosmilitepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.evilfragment, 0]);
Recipes.addShaped({id: ItemID.cosmiliteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.evilfragment, 0]);
Recipes.addShaped({id: ItemID.cosmiliteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.evilfragment, 0]);

Recipes.addShaped({id: ItemID.cosmilitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.energyfragment, 0]);
Recipes.addShaped({id: ItemID.cosmilitepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.energyfragment, 0]);
Recipes.addShaped({id: ItemID.cosmiliteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.energyfragment, 0]);
Recipes.addShaped({id: ItemID.cosmiliteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.energyfragment, 0]);

Recipes.addShaped({id: ItemID.cosmilitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.coldfragment, 0]);
Recipes.addShaped({id: ItemID.cosmilitepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.coldfragment, 0]);
Recipes.addShaped({id: ItemID.cosmiliteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.coldfragment, 0]);
Recipes.addShaped({id: ItemID.cosmiliteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.coldfragment, 0]);

Recipes.addShaped({id: ItemID.cosmilitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.millionfragment, 0]);
Recipes.addShaped({id: ItemID.cosmilitepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.millionfragment, 0]);
Recipes.addShaped({id: ItemID.cosmiliteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.millionfragment, 0]);
Recipes.addShaped({id: ItemID.cosmiliteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.millionfragment, 0]);

  IDRegistry.genItemID("omikroneingot");
Item.createItem("omikroneingot", "Омикрон слиток \n Сплав закаленного железа и... какого то материала \n  существовавшего еще до сотворения вселенной...", {name: "omikroneingot", meta: 0}, {stack: 64});

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

Recipes.addShaped({id: ItemID.omikronesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.omikroneingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.omikronepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.omikroneingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.omikroneaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.omikroneingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.omikroneshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.omikroneingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.omikronehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.omikroneingot, 0]);
Recipes.addShaped({id: ItemID.omikronechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.omikroneingot, 0]);
Recipes.addShaped({id: ItemID.omikroneleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.omikroneingot, 0]);
Recipes.addShaped({id: ItemID.omikroneboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.omikroneingot, 0]);

IDRegistry.genItemID("venomussword");
IDRegistry.genItemID("venomuspickaxe");
IDRegistry.genItemID("venomusaxe");
IDRegistry.genItemID("venomusshovel");
Item.createItem("venomussword", "§a Веномусовый меч §r \n 380 урон", {name: "venomussword", meta: 0}, {stack: 1});
Item.createItem("venomuspickaxe", "§2 Веномусовая кирка", {name: "venomuspickaxe", meta: 0}, {stack: 1});
Item.createItem("venomusaxe", "§2 Веномусовый топор", {name: "venomusaxe", meta: 0}, {stack: 1});
Item.createItem("venomusshovel", "§2 Веномусовая лопата", {name: "venomusshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("venomus", {durability: 3400, level: 11, efficiency: 8, damage: 380, enchantability: 14});
ToolAPI.setTool(ItemID.venomussword, "venomus", ToolType.sword);
ToolAPI.setTool(ItemID.venomuspickaxe, "venomus", ToolType.pickaxe);
ToolAPI.setTool(ItemID.venomusaxe, "venomus", ToolType.axe);
ToolAPI.setTool(ItemID.venomusshovel, "venomus", ToolType.shovel);

IDRegistry.genItemID("venomushelmet");
IDRegistry.genItemID("venomuschestplate");
IDRegistry.genItemID("venomusleggings");
IDRegistry.genItemID("venomusboots");

Item.createArmorItem("venomushelmet", "§c Веномусовый шлем §r \n 55 защита", {name: "venomushelmet", meta: 0}, {type: "helmet", armor: 55, durability: 650, texture: "armor/venomusarmor.png"});
Item.createArmorItem("venomuschestplate", "§c Веномусовый нагрудник §r \n 60 защита", {name: "venomuschestplate", meta: 0}, {type: "chestplate", armor: 60, durability: 750, texture: "armor/venomusarmor.png"});
Item.createArmorItem("venomusleggings", "§c Веномусовые поножи §r  \n 60 защита", {name: "venomusleggings", meta: 0}, {type: "leggings", armor: 60, durability: 700, texture: "armor/venomusarmor0.png"});
Item.createArmorItem("venomusboots", "§c Веномусовые ботинки §r \n 55 защита", {name: "venomusboots", meta: 0}, {type: "boots", armor: 55, durability: 600, texture: "armor/venomusarmor.png"});

IDRegistry.genItemID("venomusingot");
Item.createItem("venomusingot", "Слиток веномуса", {name: "venomusingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.venomussword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.venomusingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.venomuspickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.venomusingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.venomusaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.venomusingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.venomusshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.venomusingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.venomushelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.venomusingot, 0]);
Recipes.addShaped({id: ItemID.venomuschestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.venomusingot, 0]);
Recipes.addShaped({id: ItemID.venomusleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.venomusingot, 0]);
Recipes.addShaped({id: ItemID.venomusboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.venomusingot, 0]);



Recipes.addShaped({id: ItemID.venomusingot, count: 1, data: 0}, [ "   ", "abc", "   "], ['a', ItemID.hollyingot, 0, 'b', ItemID.ectoplasm, 0, 'c', ItemID.venomdye, 0]);

IDRegistry.genItemID("azatotdust");
Item.createItem("azatotdust", "Демоническая пыль", {name: "azatotdust", meta: 0}, {stack: 64});


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

Recipes.addShaped({id: ItemID.azatotsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.azatotdust, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.azatotpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.azatotdust, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.azatotaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.azatotdust, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.azatotshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.azatotdust, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.azatothelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.azatotdust, 0]);
Recipes.addShaped({id: ItemID.azatotchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.azatotdust, 0]);
Recipes.addShaped({id: ItemID.azatotleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.azatotdust, 0]);
Recipes.addShaped({id: ItemID.azatotboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.azatotdust, 0]);
