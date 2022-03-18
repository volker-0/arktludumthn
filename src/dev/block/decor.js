IDRegistry.genBlockID("cloud");
Block.createBlock("cloud", [{name: "Облако", texture: [["cloud", 0], ["cloud", 0], ["cloud", 0], ["cloud", 0], ["cloud", 0], ["cloud", 0]], inCreative: true}], cloud);

IDRegistry.genBlockID("cometgrass");
Block.createBlock("cometgrass", [{name: "Земля с травой кометы", texture: [["cometdirt", 0], ["cometgrasstop", 0], ["cometgrass", 0], ["cometgrass", 0], ["cometgrass", 0], ["cometgrass", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.cometgrass, "dirt", 3, true);


IDRegistry.genBlockID("cometdirt");
Block.createBlock("cometdirt", [{name: "Земля  кометы", texture: [["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.cometdirt, "dirt", 3, true);

IDRegistry.genBlockID("steb");
Block.createBlock("steb", [{name: "Блок стебля гигантской розы", texture: [["steb", 0], ["steb", 0], ["steb", 0], ["steb", 0], ["steb", 0], ["steb", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.steb, "wood", 3, true);

IDRegistry.genBlockID("ship");
Block.createBlock("ship", [{name: "Блок шипа гигантской розы", texture: [["ship", 0], ["ship", 0], ["ship", 0], ["ship", 0], ["ship", 0], ["ship", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ship, "wood", 3, true);

IDRegistry.genBlockID("rose");
Block.createBlock("rose", [{name: "Блок цветка гигантской розы", texture: [["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.rose, "wood", 3, true);

IDRegistry.genBlockID("heartblock");
Block.createBlock("heartblock", [{name: "Жизненно важный блок", texture: [["heartblock", 0], ["heartblock", 0], ["heartblock", 0], ["heartblock", 0], ["heartblock", 0], ["heartblock", 0]], inCreative: true}]);

IDRegistry.genBlockID("azatotmateria");
Block.createBlock("azatotmateria", [{name: "Материя Азатота", texture: [["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0]], inCreative: true}], dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotmateria, "stone", 3, true);
Block.setDestroyLevel (BlockID.azatotmateria, 1) 
Block.registerDropFunction("azatotmateria", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.azatotmateria, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("azatotbricks");
Block.createBlock("azatotbricks", [{name: "Кирпичи Азатота", texture: [["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0]], inCreative: true}], dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotbricks, "stone", 3, true);
Block.setDestroyLevel (BlockID.azatotbricks, 1) 
Block.registerDropFunction("azatotbricks", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.azatotbricks, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("azatotaltar");
Block.createBlock("azatotaltar", [{name: "Алтарь Азатота", texture: [["azatotbricks", 0], ["azatotaltartop", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0]], inCreative: true}], dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotaltar, "stone", 3, true);
Block.setDestroyLevel (BlockID.azatotaltar, 1) 
Block.registerDropFunction("azatotaltar", function(coords, blockID, blockData, level){
	if (level > 5000){
		return [[BlockID.azatotbricks, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("azatotaltaractivated");
Block.createBlock("azatotaltaractivated", [{name: "Активированный алтарь Азатота", texture: [["azatotbricks", 0], ["azatotaltaractivated", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0]], inCreative: true}], dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotaltaractivated, "stone", 3, true);
Block.setDestroyLevel (BlockID.azatotaltaractivated, 1) 
Block.registerDropFunction("azatotaltaractivated", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.azatotaltaroff, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("azatotaltaroff");
Block.createBlock("azatotaltaroff", [{name: "Использованный алтарь Азатота", texture: [["azatotbricks", 0], ["azatotaltaroff", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0]], inCreative: true}], dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotaltaroff, "stone", 3, true);
Block.setDestroyLevel (BlockID.azatotaltaroff, 1) 
Block.registerDropFunction("azatotaltaroff", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.azatotaltaroff, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("astralyellow");
Block.createBlock("astralyellow", [{name: "Материя Астрала", texture: [["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0]], inCreative: false}], dimens);
ToolAPI.registerBlockMaterial(BlockID.astralyellow, "stone", 3, true);
Block.setDestroyLevel (BlockID.astralyellow, 1) 
Block.registerDropFunction("astralyellow", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.astralyellow, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("astralpink");
Block.createBlock("astralpink", [{name: "Материя Астрала", texture: [["astralpink", 0], ["astralpink", 0], ["astralpink", 0], ["astralpink", 0], ["astralpink", 0], ["astralpink", 0]], inCreative: false}], dimens);
ToolAPI.registerBlockMaterial(BlockID.astralpink, "stone", 3, true);
Block.setDestroyLevel (BlockID.astralpink, 1) 
Block.registerDropFunction("astralpink", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.astralpink, 1, 0]]
	}
	return [];
}, 1);
IDRegistry.genBlockID("astralmid");
Block.createBlock("astralmid", [{name: "Материя Астрала", texture: [["astralmid", 0], ["astralmid", 0], ["astralmid", 0], ["astralmid", 0], ["astralmid", 0], ["astralmid", 0]], inCreative: false}], dimens);
ToolAPI.registerBlockMaterial(BlockID.astralmid, "stone", 3, true);
Block.setDestroyLevel (BlockID.astralmid, 1) 
Block.registerDropFunction("astralmid", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.astralmid, 1, 0]]
	}
	return [];
}, 1);
