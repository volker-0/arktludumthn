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
Block.createBlock("territeore", [{name: "Природная руда", texture: [["territeore", 0], ["territeore", 0], ["territeore", 0], ["territeore", 0], ["territeore", 0], ["territeore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.territeore, "stone", 3, true);
Block.setDestroyLevel (BlockID.territeore, 1) 
Block.registerDropFunction("territeore", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.territeore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("hollyore");
Block.createBlock("hollyore", [{name: "Святая руда", texture: [["hollyore", 0], ["hollyore", 0], ["hollyore", 0], ["hollyore", 0], ["hollyore", 0], ["hollyore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.hollyore, "stone", 2, true);
Block.setDestroyLevel (BlockID.hollyore, 2) 
Block.registerDropFunction("hollyore", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.hollyore, 1, 0]]
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

IDRegistry.genBlockID("heartore");
Block.createBlock("heartore", [{name: "Руда жизни", texture: [["heartore", 0], ["heartore", 0], ["heartore", 0], ["heartore", 0], ["heartore", 0], ["heartore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.heartore, "stone", 3, true);
Block.setDestroyLevel (BlockID.heartore, 4) 
Block.registerDropFunction("heartore", function(coords, blockID, blockData, level){
	if (level > 4){
		return [[BlockID.heartore, 1, 0]]
	}
	return [];
}, 1);

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
