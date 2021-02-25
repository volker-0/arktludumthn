

IDRegistry.genBlockID("astralyellow");
Block.createBlock("astralyellow", [{name: "Материя Астрала", texture: [["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0]], inCreative: true}],dimens);
ToolAPI.registerBlockMaterial(BlockID.astralyellow, "stone", 3, true);
Block.setDestroyLevel (BlockID.astralyellow, 1) 
Block.registerDropFunction("astralyellow", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.astralyellow, 1, 0]]
	}
	return [];
}, 1);





IDRegistry.genBlockID("astralpink");
Block.createBlock("astralpink", [{name: "Материя Астрала", texture: [["astralpink", 0], ["astralpink", 0], ["astralpink", 0], ["astralpink", 0], ["astralpink", 0], ["astralpink", 0]], inCreative: false}],dimens);
ToolAPI.registerBlockMaterial(BlockID.astralpink, "stone", 3, true);
Block.setDestroyLevel (BlockID.astralpink, 1) 
Block.registerDropFunction("astralpink", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.astralpink, 1, 0]]
	}
	return [];
}, 1);
IDRegistry.genBlockID("astralmid");
Block.createBlock("astralmid", [{name: "Материя Астрала", texture: [["astralmid", 0], ["astralmid", 0], ["astralmid", 0], ["astralmid", 0], ["astralmid", 0], ["astralmid", 0]], inCreative: true}],dimens);
ToolAPI.registerBlockMaterial(BlockID.astralmid, "stone", 3, true);
Block.setDestroyLevel (BlockID.astralmid, 1) 
Block.registerDropFunction("astralmid", function(coords, blockID, blockData, level){
	if (level > 13){
		return [[BlockID.astralmid, 1, 0]]
	}
	return [];
}, 1);

var Astral = Dimensions.CustomDimension("Astral", 1236);

Astral.setSkyColor(1, 0.8, 1);
Astral.setFogColor(1, 1, 0);

Astral.setGenerator(Dimensions.newGenerator({
	layers: [
        {
            minY: 0, maxY: 128, 
            yConversion: [[0.5,0.1],[0.75,-0.3],[-0.1,-0.5],[1,-0.3],[0.01, -0.5]], 
            material: {base: BlockID.astralpink, cover: BlockID.astralyellow, surface: {id:BlockID.astralmid, data: 0, width:1}}, 
            noise: {
                octaves: {count: 4, scale: 40}
            }
        }
    ]
}));

IDRegistry.genItemID("astralshears");
Item.createItem("astralshears", "Межпространственный резатель", {name: "astralshears", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.astralshears, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.creativechunk, 0, 'b', ItemID.azatotshears, 0]);

Callback.addCallback("ItemUse", function(coords,item){
	if(item.id == ItemID.astralshears){
	Dimensions.transfer(Player.get(),Player.getDimension() == 0 ? 1236 : (Player.getDimension() == 1236 ? 0 : Player.getDimension()));
	};
});

Callback.addCallback("DimensionLoaded", function(dimension){
    if(dimension == Azato.id){
        coords = Player.getPosition();
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        Player.setPosition(coords.x, coords.y, coords.z);
    };
});