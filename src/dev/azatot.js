IDRegistry.genBlockID("azatotmateria");
Block.createBlock("azatotmateria", [{name: "Материя Азатота", texture: [["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0]], inCreative: true}],dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotmateria, "stone", 3, true);
Block.setDestroyLevel (BlockID.azatotmateria, 1) 
Block.registerDropFunction("azatotmateria", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.azatotmateria, 1, 0]]
	}
	return [];
}, 1);
IDRegistry.genItemID("azatotshears");
Item.createItem("azatotshears", "Резатель пространства", {name: "azatotshears", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.azatotshears, count: 1, data: 0}, [ "  a", " aa", "aa "], ['a', ItemID.azatotingot, 0]);

const AZSKY = [0, 0, 0.2];
const AZFOG = [0, 0, 0.2];

var Azato = new Dimensions.CustomDimension("Azatot", 1269);

Azato.setFogColor(0, 0, 0.2);
Azato.setSkyColor(0, 0, 0.2);
Azato.setHasSkyLight(false);

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == ItemID.azatotshears) {
        Dimensions.transfer(Player.get(), 1269); 
    };
});

Azato.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 128, 
            yConversion: [[0.5,0.1],[0.75,-0.3],[-0.1,-0.5],[1,-0.3],[0.01, -0.5]], 
            material: {base: BlockID.azatotmateria}, 
            noise: {
                octaves: {count: 4, scale: 40}
            }
        }
    ]
}));


        

IDRegistry.genBlockID("azatotbricks");
Block.createBlock("azatotbricks", [{name: "Кирпичи Азатота", texture: [["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.azatotbricks, "stone", 3, true);
Block.setDestroyLevel (BlockID.azatotbricks, 1) 
Block.registerDropFunction("azatotbricks", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.azatotbricks, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("azatotaltar");
Block.createBlock("azatotaltar", [{name: "Алтарь Азатота", texture: [["azatotbricks", 0], ["azatotaltartop", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.azatotaltar, "stone", 3, true);
Block.setDestroyLevel (BlockID.azatotaltar, 1) 
Block.registerDropFunction("azatotaltar", function(coords, blockID, blockData, level){
	if (level > 5000){
		return [[BlockID.azatotbricks, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("azatotaltaractivated");
Block.createBlock("azatotaltaractivated", [{name: "Активированный алтарь Азатота", texture: [["azatotbricks", 0], ["azatotaltaractivated", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.azatotaltaractivated, "stone", 3, true);
Block.setDestroyLevel (BlockID.azatotaltaractivated, 1) 
Block.registerDropFunction("azatotaltaractivated", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.azatotaltaroff, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("azatotaltaroff");
Block.createBlock("azatotaltaroff", [{name: "Использованный алтарь Азатота", texture: [["azatotbricks", 0], ["azatotaltaroff", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.azatotaltaroff, "stone", 3, true);
Block.setDestroyLevel (BlockID.azatotaltaroff, 1) 
Block.registerDropFunction("azatotaltaroff", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.azatotaltaroff, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genItemID("overworld");
Item.createItem("overworld", "Портал обратно", {name: "overworld", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == ItemID.overworld) {
        Dimensions.transfer(Player.get(), 0);
    }
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimeID){
    if(dimeID != Azato.id){return}
    else{
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 56, 156); 
        coords= GenerationUtils.findSurface(coords.x,coords.y,coords.z);
        if(Math.random()<0.07){
        Dungeon.setStructure("altar.json",coords.x, coords.y+1, coords.z, 0);
        };
    };
});
Callback.addCallback("DimensionLoaded", function(dimension){
    if(dimension == Azato.id){
        coords = Player.getPosition();
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        Player.setPosition(coords.x, coords.y, coords.z);
    };
});