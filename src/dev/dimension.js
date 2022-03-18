let Azatot = new Dimensions.CustomDimension("Azatot", 685); 
Azatot.setSkyColor(0, 0, .2) 
Azatot.setFogColor(0, 0, .2); 

Azatot.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, 
            maxY: 150, 
            yConversion: [[0, -3], [.1, -.2], [0.5, .1], [.9, -.2], [2, -1]],
            material: {base: BlockID.azatotmateria, surface: {id:BlockID.azatotmateria, data: 0, width:4}, cover: BlockID.azatotmateria}, 
            noise: {
                octaves: {count: 4, weight: .9, scale: [.015, .02752, .015]}
            }
        }
    ]
}));


var Astral = new Dimensions.CustomDimension("Astral", 686); 
Astral.setSkyColor(1, .8, 1) 
Astral.setFogColor(1, 1, 0); 

Astral.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, 
            maxY: 150, 
            yConversion: [[0, -3], [.1, -.2], [0.5, .1], [.9, -.2], [2, -1]],
            material: {base: BlockID.astralpink, surface: {id:BlockID.astralyellow, data: 0, width:4}, cover: BlockID.astralmid}, 
            noise: {
                octaves: {count: 4, weight: .9, scale: [.015, .02752, .015]}
            }
        }
    ]
}));

Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
	if(item.id == ItemID.astralshears){
		Dimensions.transfer(player, Astral.id);
	}
	if(item.id == ItemID.overworld){ 
		Dimensions.transfer(player, 0);
	}
	if(item.id == ItemID.azatotshears){
		Dimensions.transfer(player, Azatot.id);
	}
});