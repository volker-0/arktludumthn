
// included from: \header.js
importLib("ToolType","*");
IMPORT("SettingsManager");
IMPORT("DungeonAPI");
//IMPORT("RechargeLib");

var cloud = Block.createSpecialType({
	base: 35,
    lightopacity: 6,
    destroytime: 1,
    opaque: false
}, "wool");

var dimens = Block.createSpecialType({
    base: 2,
    solid: true,
    destroytime: 0.1,
    explosionres: 1,
    opaque: true
});

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

function StopSound(arr) {
	for(var i in arr) {
		var SP = arr[i];
		try {
			if(SP.sound.isPlaying()) {
				SP.sound.stop();
			};
			SP.sound.release();
		} catch(e) {};
	};
	arr = []
};

function PlaySongVarFile(name, format, vaar) {
	try {
		var media = null;
		for(var i in vaar){
			var SP = vaar[i];
			if(!SP.isPlaying()) {
				media = SP;
				break;
			};
		};
		if(media == null) {
			media = new android.media.MediaPlayer();
			vaar.push(media);
		};
		media.reset();
		media.setDataSource(__dir__ + "sounds/" + name + format);
		media.prepare();
		media.start();
		return media;
	} catch(err) {};
	return media;
};


// included from: \SpItems.js
IDRegistry.genItemID("aeressence");
Item.createItem("aeressence", "Аэритовая эссенция", {name: "aeressence", meta: 0}, {stack: 64});

IDRegistry.genItemID("aquaessence");
Item.createItem("aquaessence", "Акватическая эссенция", {name: "aquaessence", meta: 0}, {stack: 64});

IDRegistry.genItemID("ignisessence");
Item.createItem("ignisessence", "Игнитовая эссенция", {name: "ignisessence", meta: 0}, {stack: 64});

IDRegistry.genItemID("terraessence");
Item.createItem("terraessence", "Территовая эссенция", {name: "terraessence", meta: 0}, {stack: 64});

IDRegistry.genItemID("aercore");
Item.createItem("aercore", "Аэритовое ядро", {name: "aercore", meta: 0}, {stack: 64});

IDRegistry.genItemID("aquacore");
Item.createItem("aquacore", "Акватическое ядро", {name: "aquacore", meta: 0}, {stack: 64});

IDRegistry.genItemID("igniscore");
Item.createItem("igniscore", "Игнитовое ядро", {name: "igniscore", meta: 0}, {stack: 64});

IDRegistry.genItemID("terracore");
Item.createItem("terracore", "Территовое ядро", {name: "terracore", meta: 0}, {stack: 64});

IDRegistry.genItemID("elementalcore");
Item.createItem("elementalcore", "Элементарное ядро \n Элементарно, Ватсон!", {name: "elementalcore", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.aquacore, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.aquaessence, 0]);

Recipes.addShaped({id: ItemID.igniscore, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.ignisessence, 0]);

Recipes.addShaped({id: ItemID.terracore, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.terraessence, 0]);

Recipes.addShaped({id: ItemID.aercore, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.aeressence, 0]);


Recipes.addShaped({id: ItemID.elementalcore, count: 1, data: 0}, [ "ab ", "cd ", "   "], ['a', ItemID.aercore, 0, 'b', ItemID.terracore, 0, 'c', ItemID. igniscore, 0, 'd', ItemID.aquacore, 0]);

var generateItems =[ 
];

function addItemsToGenerateChest(id, random, count, data){ 
    random = random||1; 
    count = count||{}; 
    count.min = count.min||1; 
    count.max = count.max||1; 
    data = data||0; 
    generateItems.push({id:id, data:data, random:random, count:count}); 
    } 
    
    function fillChest(x,y,z){ 
    var container = World.getContainer(x, y, z); 
    var size = container.getSize(); 
    var random = Math.random(); 
    var slot = 0; 
    for(var i in generateItems){ 
    if(random<generateItems[i].random){ 
    var count = Math.floor(Math.random()*(generateItems[i].count.max-generateItems[i].count.min))+generateItems[i].count.min; 
    container.setSlot(slot, generateItems[i].id, count, generateItems[i].data); 
    slot++; 
    } 
    } 
    } 
    
    addItemsToGenerateChest(ItemID.aquatiteingot, 1, {max:5});
    addItemsToGenerateChest(ItemID.aeriteingot, 1, {max:10});
    addItemsToGenerateChest(ItemID.aeressence, 1, {max:8});
    addItemsToGenerateChest(ItemID.starsword, 1, {max:1});
    
    
    //fillChest(coords.x, coords.y, coords.z); - пихает все предмети в контейнер(сундук) на координатах x, y, z.Координати укажи свои
    
    Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    
        let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
        if(Math.random() < 0.02){
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
           
           World.setBlock(coords.x,coords.y+102,  coords.z, 54, 0);
           
           fillChest(coords.x, coords.y+102, coords.z);
    }}});

    IDRegistry.genItemID("elementalingot");
Item.createItem("elementalingot", "Элементарный слиток", {name: "elementalingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("cosmicsingularity");
Item.createItem("cosmicsingularity", "Космическая сингулярность", {name: "cosmicsingulary", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.elementalingot, count: 1, data: 0}, [ "ab ", "ad ", "   "], ['a', ItemID.aeriteingot, 0, 'b', ItemID.territeingot, 0, 'c', ItemID.ignisusingot, 0, 'd', ItemID.aquatiteingot, 0]);

Recipes.addShaped({id: ItemID.cosmicsingularity, count: 1, data: 0}, [ "ab ", "ad ", "   "], ['a', ItemID.aeressence, 0, 'b', ItemID.terraessence, 0, 'c', ItemID.ignisessence, 0, 'd', ItemID.aquaessence, 0]);

IDRegistry.genItemID("ectoplasm");
Item.createItem("ectoplasm", "Эктоплазма", {name: "ectoplasm", meta: 0}, {stack: 64});

IDRegistry.genItemID("evilfragment");
Item.createItem("evilfragment", "Истинная ярость", {name: "evilfragment", meta: 0}, {stack: 1});

IDRegistry.genItemID("energyfragment");
Item.createItem("energyfragment", "Чистая энергия", {name: "energyfragment", meta: 0}, {stack: 1});

IDRegistry.genItemID("coldfragment");
Item.createItem("coldfragment", "Магический мороз", {name: "coldfragment", meta: 0}, {stack: 1});

IDRegistry.genItemID("millionfragment");
Item.createItem("millionfragment", "Сила множества", {name: "millionfragment", meta: 0}, {stack: 1});

IDRegistry.genItemID("fantaplasm");
Item.createItem("fantaplasm", "Фантаплазма", {name: "fantaplasm", meta: 0}, {stack: 64});

IDRegistry.genItemID("lifecrystal");
Item.createFoodItem("lifecrystal", "§e Кристалл жизни §1 \n 1еда \n Увеличивает жизни на 2", {name: "lifecrystal", meta: 0}, {food: 1});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.lifecrystal){
Entity.setMaxHealth(Player.get(), Ph+2);    
if(Entity.getMaxHealth(Player.get()) == 40)return false    
}});

IDRegistry.genBlockID("heartblock");
Block.createBlock("heartblock", [{name: "Жизненно важный блок", texture: [["heartblock", 0], ["heartblock", 0], ["heartblock", 0], ["heartblock", 0], ["heartblock", 0], ["heartblock", 0]], inCreative: true}]);

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

IDRegistry.genItemID("heartingot");
Item.createItem("heartingot", "Слиток жизни", {name: "heartingot", meta: 0}, {stack: 64});

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.heartore, 0, 2);
    }
}
)

Recipes.addFurnace(BlockID.heartore, ItemID.heartingot, 1);

Recipes.addShaped({id: ItemID.lifecrystal, count: 1, data: 0}, [ "a a", "aba", " a "], ['a', ItemID.heartingot, 0, 'b', BlockID.heartblock, 0]);

IDRegistry.genItemID("fireheart");
Item.createFoodItem("fireheart", "§e Живой огонь §1 \n 4 еды \n Увеличивает жизни на 4", {name: "fireheart", meta: 0}, {food: 4});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.fireheart){
Entity.setMaxHealth(Player.get(), Ph+4);    
if(Entity.getMaxHealth(Player.get()) == 40)return false    
}});

Recipes.addShaped({id: ItemID.fireheart, count: 1, data: 0}, [ "a a", "aba", " a "], ['a', ItemID.ignisusingot, 0, 'b', BlockID.heartblock, 0]);

IDRegistry.genItemID("elementalheart");
Item.createFoodItem("elementalheart", "§e Элементарное сердце §1 \n 6 еды \n Увеличивает жизни на 10", {name: "elementalheart", meta: 0}, {food: 6});

Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.elementalheart){
Entity.setMaxHealth(Player.get(), Ph+10);    
if(Entity.getMaxHealth(Player.get()) == 1000)return false    
}});


IDRegistry.genItemID("stardust");
Item.createItem("stardust", "Звездная пыль", {name: "stardust", meta: 0}, {stack: 64});

IDRegistry.genItemID("blackmagicdust");
Item.createItem("blackmagicdust", "Черная волшебная пыль", {name: "blackmagicdust", meta: 0}, {stack: 64});

IDRegistry.genItemID("nightmarefuel");
Item.createItem("nightmarefuel", "Кошмарное топливо", {name: "nightmarefuel", meta: 0}, {stack: 64});

IDRegistry.genItemID("termoenergy");
Item.createItem("termoenergy", "Термоэнергия", {name: "termoenergy", meta: 0}, {stack: 64});

IDRegistry.genItemID("calamitydust");
Item.createItem("calamitydust", "Пыль бедствия", {name: "calamitydust", meta: 0}, {stack: 64});

IDRegistry.genItemID("venomdye");
Item.createItem("venomdye", "Веномиозное пятно", {name: "venomdye", meta: 0}, {stack: 64});

IDRegistry.genItemID("godjeoda");
Item.createItem("godjeoda", "Божественная жеода", {name: "godjeoda", meta: 0}, {stack: 64});

IDRegistry.genItemID("profanedessence");
Item.createItem("profanedessence", "Нечестивая эссенция", {name: "profanedessence", meta: 0}, {stack: 64});

IDRegistry.genItemID("fragmentoftruncatissoul");
Item.createItem("fragmentoftruncatissoul", "Фрагмент души Трункатиса", {name: "fragmentoftruncatissoul", meta: 0}, {stack: 64});

IDRegistry.genItemID("endothermicenergy");
Item.createItem("endothermicenergy", "Эндотермическая энергия", {name: "endothermicenergy", meta: 0}, {stack: 64});

IDRegistry.genItemID("calamityessence");
Item.createItem("calamityessence", "Эссенция бедствия", {name: "calamityessence", meta: 0}, {stack: 64});

IDRegistry.genItemID("livingshard");
Item.createItem("livingshard", "Живой осколок", {name: "livingshard", meta: 0}, {stack: 64});

IDRegistry.genBlockID("steb");
Block.createBlock("steb", [{name: "Блок стебля гигантской розы", texture: [["steb", 0], ["steb", 0], ["steb", 0], ["steb", 0], ["steb", 0], ["steb", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.steb, "wood", 3, true);

IDRegistry.genBlockID("ship");
Block.createBlock("ship", [{name: "Блок шипа гигантской розы", texture: [["ship", 0], ["ship", 0], ["ship", 0], ["ship", 0], ["ship", 0], ["ship", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ship, "wood", 3, true);

IDRegistry.genBlockID("rose");
Block.createBlock("rose", [{name: "Блок цветка гигантской розы", texture: [["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.rose, "wood", 3, true);



// included from: \ores.js
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



// included from: \azatot.js
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


// included from: \Astral.js


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


// included from: \SpSworld.js
IDRegistry.genItemID("starsword");
Item.createItem("starsword", "§a Звездная сила §r \n 15 урон", {name: "starsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("starsword", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.starsword, "starsword", ToolType.sword);

IDRegistry.genItemID("enchantedsword");
Item.createItem("enchantedsword", "§a Заколдованный меч §r \n 15 урон", {name: "enchantedsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("enchantedsword", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.enchantedsword, "enchantedsword", ToolType.sword);

Block.registerDropFunctionForID(1, function(coords, blockID, blockData, level){
  if(Math.random() < 0.02){
var drop = [];
drop.push([ItemID.enchantedsword, 1, 0]);
return drop;
}
if (level > 0){
  var drop = [];
drop.push([4, 1, 0]);
return drop;
}
});

IDRegistry.genItemID("brokenherosword");
Item.createItem("brokenherosword", "§a Сломанный меч героя §r \n 3 урон", {name: "brokenherosword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("brokenherosword", {durability: 3400, level: 4, efficiency: 8, damage: 3, enchantability: 14});
ToolAPI.setTool(ItemID.brokenherosword, "brokenherosword", ToolType.sword);

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 32){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.brokenherosword, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 45){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.brokenherosword, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 40){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.brokenherosword, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 38){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.brokenherosword, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 46){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.brokenherosword, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 44){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.brokenherosword, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.brokenherosword, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 33){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.brokenherosword, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.brokenherosword, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 48){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 2);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.brokenherosword, soul);
}
});


IDRegistry.genItemID("exalibur");
Item.createItem("exalibur", "§1 Экскалибур §r \n 40 урон", {name: "exalibur", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("exalibur", {durability: 3400, level: 4, efficiency: 8, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.exalibur, "exalibur", ToolType.sword);

Recipes.addShaped({id: ItemID.exalibur, count: 1, data: 0}, [ " aa", "aaa", "ba "], ['a', ItemID.hollyingot, 0, 'b', 280, 0]);

IDRegistry.genItemID("ancientark");
Item.createItem("ancientark", "§1 Ковчег древних §r \n 72 урон \n §1 Когда вы держите этот меч, вы чувствуете что-то... \n что-то неземное...", {name: "ancientark", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ancientark", {durability: 3400, level: 4, efficiency: 8, damage: 72, enchantability: 14});
ToolAPI.setTool(ItemID.ancientark, "ancientark", ToolType.sword);

Recipes.addShaped({id: ItemID.ancientark, count: 1, data: 0}, [ "abc", "d e", "f g"], ['a', ItemID.aquaessence, 0, 'b', ItemID.exalibur, 0, 'c', ItemID.aeressence, 0, 'd', ItemID.enchantedsword, 0, 'e', ItemID.starsword, 0, 'f', ItemID.terraessence, 0, 'g', ItemID.ignisessence, 0]);


IDRegistry.genItemID("trueexalibur");
Item.createItem("trueexalibur", "§1 Истинный экскалибур §r \n 45 урон", {name: "trueexalibur", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("trueexalibur", {durability: 3400, level: 4, efficiency: 8, damage: 45, enchantability: 14});
ToolAPI.setTool(ItemID.trueexalibur, "trueexalibur", ToolType.sword);

Recipes.addShaped({id: ItemID.trueexalibur, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.exalibur, 0, 'b', ItemID.brokenherosword, 0]);

IDRegistry.genItemID("herosword");
Item.createItem("herosword", "§a Меч героя §r \n 6 урон", {name: "herosword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("herosword", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.herosword, "herosword", ToolType.sword);

Recipes.addShaped({id: ItemID.herosword, count: 1, data: 0}, [ "bab", "aca", "bab"], ['a', 5, 0, 'b', ItemID.terraessence, 0, 'c', ItemID.brokenherosword, 0]);



IDRegistry.genItemID("trueancientark");
Item.createItem("trueancientark", "§1 Истинный ковчег древних §r \n 85 урон \n §1 И снова то чувство... оно стало сильнее...", {name: "trueancientark", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("trueancientark", {durability: 3400, level: 4, efficiency: 8, damage: 95, enchantability: 14});
ToolAPI.setTool(ItemID.trueancientark, "trueancientark", ToolType.sword);

Recipes.addShaped({id: ItemID.trueancientark, count: 1, data: 0}, [ " a ", "b c", " d "], ['a', ItemID.ancientark, 0, 'b', ItemID.elementalcore, 0, 'd', ItemID.brokenherosword, 0, 'c', ItemID.livingshard, 0]);

IDRegistry.genItemID("elementalark");
Item.createItem("elementalark", "§1 Ковчег элементов §r \n 110 урон \n §1 Вы чувствуете что совсем близко к чему то... \n Чему то неземному, космическому, великому...", {name: "elementalark", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("elementalark", {durability: 3400, level: 4, efficiency: 8, damage: 110, enchantability: 14});
ToolAPI.setTool(ItemID.elementalark, "elementalark", ToolType.sword);

IDRegistry.genItemID("biomesword");
Item.createItem("biomesword", "§a Клинок биомов §r \n 15 урон ", {name: "biomesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("biomesword", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.biomesword, "biomesword", ToolType.sword);

Recipes.addShaped({id: ItemID.biomesword, count: 1, data: 0}, [ "abc", "def", "ghi"], ['a', 1, 0, 'b', 3, 0, 'c', 12, 0, 'd', 12, 1, 'e', 80, 0, 'f', 87, 0, 'g', 121, 0, 'h', 201, 0, 'i', 268, 0]);

IDRegistry.genItemID("truebiomesword");
Item.createItem("truebiomesword", "§a Истинный клинок биомов §r \n 38 урон ", {name: "truebiomesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("truebiomesword", {durability: 3400, level: 4, efficiency: 8, damage: 38, enchantability: 14});
ToolAPI.setTool(ItemID.truebiomesword, "truebiomesword", ToolType.sword);

Recipes.addShaped({id: ItemID.truebiomesword, count: 1, data: 0}, [ "   ", "abc", "   "], ['a', ItemID.livingshard, 0, 'b', ItemID.biomesword, 0, 'c', ItemID.ectoplasm, 0]);

IDRegistry.genItemID("omegabiomesword");
Item.createItem("omegabiomesword", "§a Омега клинок биомов §r \n 49 урон ", {name: "omegabiomesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("omegabiomesword", {durability: 3400, level: 4, efficiency: 8, damage: 49, enchantability: 14});
ToolAPI.setTool(ItemID.omegabiomesword, "omegabiomesword", ToolType.sword);

Recipes.addShaped({id: ItemID.omegabiomesword, count: 1, data: 0}, [ " a ", "b c", " d "], ['a', ItemID.truebiomesword, 0, 'b', ItemID.elementalcore, 0, 'c', ItemID.elementalingot, 0, 'd', ItemID.cosmicsingularity, 0]);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.exalibur){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.trueexalibur){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.ancientark){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.trueancientark){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.elementalark){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

IDRegistry.genItemID("muramasa");
Item.createItem("muramasa", "§a Мурамаса §r \n 10 урон ", {name: "muramasa", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("muramasa", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.muramasa, "muramasa", ToolType.sword);

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 32){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.02);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.muramasa, soul);
}
});

IDRegistry.genItemID("murasama");
Item.createItem("murasama", "§a Мурасама §r \n 15 урон ", {name: "murasama", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("murasama", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.murasama, "murasama", ToolType.sword);

Recipes.addShaped({id: ItemID.murasama, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.muramasa, 0, 'b', ItemID.brokenherosword, 0]);

IDRegistry.genItemID("rootenbroadsword");
Item.createItem("rootenbroadsword", "§a Гнилой тесак §r \n 5 урон ", {name: "rootenbroadsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("rootenbroadsword", {durability: 3400, level: 4, efficiency: 8, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.rootenbroadsword, "rootenbroadsword", ToolType.sword);


Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 32){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 1);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.rootenbroadsword, soul);
}
});

Recipes.addShaped({id: ItemID.rootenbroadsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 367, 0, 'b', 280, 0]);

IDRegistry.genItemID("taigasword");
Item.createItem("taigasword", "§a Меч тайги §r \n 6 урон ", {name: "taigasword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("taigasword", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.taigasword, "taigasword", ToolType.sword);

Recipes.addShaped({id: ItemID.taigasword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 17, 1, 'b', 5, 1]);

IDRegistry.genItemID("grandminecraftsword");
IDRegistry.genItemID("grandminecraftpickaxe");
IDRegistry.genItemID("grandminecraftaxe");
IDRegistry.genItemID("grandminecraftshovel");
Item.createItem("grandminecraftsword", "§a Великий меч майнкрафта §r \n 150 урон", {name: "grandminecraftsword", meta: 0}, {stack: 1});
Item.createItem("grandminecraftpickaxe", "§2 Великая кирка майнкрафта", {name: "grandminecraftpickaxe", meta: 0}, {stack: 1});
Item.createItem("grandminecraftaxe", "§2 Великий топор майнкрафта", {name: "grandminecraftaxe", meta: 0}, {stack: 1});
Item.createItem("grandminecraftshovel", "§2 Великая лопата майнкрафта", {name: "grandminecraftshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("grandminecraft", {durability: 3400, level: 8, efficiency: 20, damage: 150, enchantability: 14});
ToolAPI.setTool(ItemID.grandminecraftsword, "grandminecraft", ToolType.sword);
ToolAPI.setTool(ItemID.grandminecraftpickaxe, "grandminecraft", ToolType.pickaxe);
ToolAPI.setTool(ItemID.grandminecraftaxe, "grandminecraft", ToolType.axe);
ToolAPI.setTool(ItemID.grandminecraftshovel, "grandminecraft", ToolType.shovel);

IDRegistry.genItemID("grandminecrafthelmet");
IDRegistry.genItemID("grandminecraftchestplate");
IDRegistry.genItemID("grandminecraftleggings");
IDRegistry.genItemID("grandminecraftboots");

Item.createArmorItem("grandminecrafthelmet", "§c Великий шлем майнкрафта §r \n 30 защита", {name: "grandminecrafthelmet", meta: 0}, {type: "helmet", armor: 30, durability: 3000, texture: "armor/grandminecraftarmor.png"});
Item.createArmorItem("grandminecraftchestplate", "§c Великий нагрудник майнкрафта§r \n 35 защита", {name: "grandminecraftchestplate", meta: 0}, {type: "chestplate", armor: 35, durability: 3000, texture: "armor/grandminecraftarmor.png"});
Item.createArmorItem("grandminecraftleggings", "§c Великие поножи майнкрафта §r  \n 34 защита", {name: "grandminecraftleggings", meta: 0}, {type: "leggings", armor: 34, durability: 3000, texture: "armor/grandminecraftarmor_0.png"});
Item.createArmorItem("grandminecraftboots", "§c Великие ботинки майнкрафта §r \n 28 защита", {name: "grandminecraftboots", meta: 0}, {type: "boots", armor: 28, durability: 2000, texture: "armor/grandminecraftarmor.png"});

Recipes.addShaped({id: ItemID.grandminecrafthelmet, count: 1, data: 0}, [ "abc", "def", "   "], ['a', ItemID.aerhelmet, 0, 'b', ItemID.aquahelmet, 0, 'c', ItemID.ignishelmet, 0, 'd', ItemID.terrahelmet, 0, 'e', ItemID.hollyhelmet, 0, 'f', ItemID.cometitehelmet, 0]);

Recipes.addShaped({id: ItemID.grandminecraftchestplate, count: 1, data: 0}, [ "abc", "def", "   "], ['a', ItemID.aerchestplate, 0, 'b', ItemID.aquachestplate, 0, 'c', ItemID.ignischestplate, 0, 'd', ItemID.terrachestplate, 0, 'e', ItemID.hollychestplate, 0, 'f', ItemID.cometitechestplate, 0]);

Recipes.addShaped({id: ItemID.grandminecraftleggings, count: 1, data: 0}, [ "abc", "def", "   "], ['a', ItemID.aerleggings, 0, 'b', ItemID.aqualeggings, 0, 'c', ItemID.ignisleggings, 0, 'd', ItemID.terraleggings, 0, 'e', ItemID.hollyleggings, 0, 'f', ItemID.cometiteleggings, 0]);

Recipes.addShaped({id: ItemID.grandminecraftboots, count: 1, data: 0}, [ "abc", "def", "   "], ['a', ItemID.aerboots, 0, 'b', ItemID.aquaboots, 0, 'c', ItemID.ignisboots, 0, 'd', ItemID.terraboots, 0, 'e', ItemID.hollyboots, 0, 'f', ItemID.cometiteboots, 0]);

Recipes.addShaped({id: ItemID.grandminecraftsword, count: 1, data: 0}, [ "abc", "def", "ghi"], ['a', ItemID.cometitesword, 0, 'b', ItemID.aquasword, 0, 'c', ItemID.ignissword, 0, 'd', ItemID.terrasword, 0, 'e', ItemID.hollysword, 0, 'f', ItemID.starsword, 0, 'g', ItemID.omegabiomesword, 0, 'h', ItemID.herosword, 0, 'i', ItemID.enchantedsword, 0]);

Recipes.addShaped({id: ItemID.grandminecraftpickaxe, count: 1, data: 0}, [ "abc", "def", "   "], ['a', ItemID.aerpickaxe, 0, 'b', ItemID.aquapickaxe, 0, 'c', ItemID.ignispickaxe, 0, 'd', ItemID.terrapickaxe, 0, 'e', ItemID.hollypickaxe, 0, 'f', ItemID.cometitepickaxe, 0]);

Recipes.addShaped({id: ItemID.grandminecraftaxe, count: 1, data: 0}, [ "abc", "def", "   "], ['a', ItemID.aeraxe, 0, 'b', ItemID.aquaaxe, 0, 'c', ItemID.ignisaxe, 0, 'd', ItemID.terraaxe, 0, 'e', ItemID.hollyaxe, 0, 'f', ItemID.cometiteaxe, 0]);

Recipes.addShaped({id: ItemID.grandminecraftshovel, count: 1, data: 0}, [ "abc", "def", "   "], ['a', ItemID.aershovel, 0, 'b', ItemID.aquashovel, 0, 'c', ItemID.ignisshovel, 0, 'd', ItemID.terrashovel, 0, 'e', ItemID.hollyshovel, 0, 'f', ItemID.cometiteshovel, 0]);


IDRegistry.genItemID("krackenblade");
Item.createItem("krackenblade", "§a Лезвие Кракена §r \n 145 урон ", {name: "krackenblade", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("krackenblade", {durability: 3400, level: 4, efficiency: 8, damage: 145, enchantability: 14});
ToolAPI.setTool(ItemID.krackenblade, "krackenblade", ToolType.sword);

Recipes.addShaped({id: ItemID.krackenblade, count: 1, data: 0}, [ " aa", "aaa", "ba "], ['a', ItemID.krackeningot, 0, 'b', ItemID.hollyingot, 0]);

IDRegistry.genItemID("grandbiomesword");
Item.createItem("grandbiomesword", "§1 Великий клинок биома §r \n 200 урон ", {name: "grandbiomesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("grandbiomesword", {durability: 3400, level: 4, efficiency: 8, damage: 200, enchantability: 14});
ToolAPI.setTool(ItemID.grandbiomesword, "grandbiomesword", ToolType.sword);

Recipes.addShaped({id: ItemID.grandbiomesword, count: 1, data: 0}, [ " a ", "b b", " d "], ['a', ItemID.omegabiomesword, 0, 'b', ItemID.cosmicsingularity, 0, 'd', ItemID.grandminecraftsword, 0]);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.grandbiomesword){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.aersword){ 
Entity.addEffect(victim, 25, 1, 200, true, true);
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.aquasword){ 
Entity.addEffect(victim, 19, 1, 200, true, true);
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.terrasword){ 
Entity.addEffect(victim, 2, 1, 200, true, true);
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.ignissword){ 
Entity.setFire(victim, 200);
}
});

IDRegistry.genItemID("elementalsword");
Item.createItem("elementalsword", "§1 Меч элементов §r \n 200 урон ", {name: "elementalsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("elementalsword", {durability: 3400, level: 4, efficiency: 8, damage: 200, enchantability: 14});
ToolAPI.setTool(ItemID.elementalsword, "elementalsword", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.elementalsword){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

IDRegistry.genItemID("swordofDNil");
Item.createItem("swordofDNil", "§a Меч дельты Нила §r \n 10 урон ", {name: "swordofDNil", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("swordofDNil", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.swordofDNil, "swordofDNil", ToolType.sword);

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.swordofDNil, soul);
}
});

IDRegistry.genItemID("ahalalui");
Item.createItem("ahalalui", "§a Ахалалуи §r \n 10 урон ", {name: "ahalalui", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ahalalui", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.ahalalui, "ahalalui", ToolType.sword);

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.ahalalui, soul);
}
});

IDRegistry.genItemID("kartzon");
Item.createItem("kartzon", "§1 Картзон§r \n 40 урон \n Копает в диаметре 5 метров", {name: "kartzon", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("kartzon", {durability: 3400, level: 4, efficiency: 8, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.kartzon, "kartzon", ToolType.sword);
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.01);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.kartzon, soul);
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.kartzon){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.kartzon)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x+2, y-2, z-2, true);
World.destroyBlock(x+2, y-2, z-1, true);
World.destroyBlock(x+2, y-2, z, true);
World.destroyBlock(x+2, y-2, z+1, true);
World.destroyBlock(x+2, y-2, z+2, true);

World.destroyBlock(x+1, y-2, z-2, true);
World.destroyBlock(x+1, y-2, z-1, true);
World.destroyBlock(x+1, y-2, z, true);
World.destroyBlock(x+1, y-2, z+1, true);
World.destroyBlock(x+1, y-2, z+2, true);

World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y-2, z-1, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y-2, z+1, true);
World.destroyBlock(x, y-2, z+2, true);

World.destroyBlock(x-1, y-2, z-2, true);
World.destroyBlock(x-1, y-2, z-1, true);
World.destroyBlock(x-1, y-2, z, true);
World.destroyBlock(x-1, y-2, z+1, true);
World.destroyBlock(x-1, y-2, z+2, true);

World.destroyBlock(x-2, y-2, z-2, true);
World.destroyBlock(x-2, y-2, z-1, true);
World.destroyBlock(x-2, y-2, z, true);
World.destroyBlock(x-2, y-2, z+1, true);
World.destroyBlock(x-2, y-2, z+2, true);

//00000

World.destroyBlock(x+2, y-1, z-2, true);
World.destroyBlock(x+2, y-1, z-1, true);
World.destroyBlock(x+2, y-1, z, true);
World.destroyBlock(x+2, y-1, z+1, true);
World.destroyBlock(x+2, y-1, z+2, true);

World.destroyBlock(x+1, y-1, z-2, true);
World.destroyBlock(x+1, y-1, z-1, true);
World.destroyBlock(x+1, y-1, z, true);
World.destroyBlock(x+1, y-1, z+1, true);
World.destroyBlock(x+1, y-1, z+2, true);

World.destroyBlock(x, y-1, z-2, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y-1, z+2, true);

World.destroyBlock(x-1, y-1, z-2, true);
World.destroyBlock(x-1, y-1, z-1, true);
World.destroyBlock(x-1, y-1, z, true);
World.destroyBlock(x-1, y-1, z+1, true);
World.destroyBlock(x-1, y-1, z+2, true);

World.destroyBlock(x-2, y-1, z-2, true);
World.destroyBlock(x-2, y-1, z-1, true);
World.destroyBlock(x-2, y-1, z, true);
World.destroyBlock(x-2, y-1, z+1, true);
World.destroyBlock(x-2, y-1, z+2, true);

//хххххххххххххх

World.destroyBlock(x+2, y, z-2, true);
World.destroyBlock(x+2, y, z-1, true);
World.destroyBlock(x+2, y, z, true);
World.destroyBlock(x+2, y, z+1, true);
World.destroyBlock(x+2, y, z+2, true);

World.destroyBlock(x+1, y, z-2, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x+1, y, z+2, true);

World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z+2, true);

World.destroyBlock(x-1, y, z-2, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x-1, y, z+2, true);

World.destroyBlock(x-2, y, z-2, true);
World.destroyBlock(x-2, y, z-1, true);
World.destroyBlock(x-2, y, z, true);
World.destroyBlock(x-2, y, z+1, true);
World.destroyBlock(x-2, y, z+2, true);

//77777777777

World.destroyBlock(x+2, y+1, z-2, true);
World.destroyBlock(x+2, y+1, z-1, true);
World.destroyBlock(x+2, y+1, z, true);
World.destroyBlock(x+2, y+1, z+1, true);
World.destroyBlock(x+2, y+1, z+2, true);

World.destroyBlock(x+1, y+1, z-2, true);
World.destroyBlock(x+1, y+1, z-1, true);
World.destroyBlock(x+1, y+1, z, true);
World.destroyBlock(x+1, y+1, z+1, true);
World.destroyBlock(x+1, y+1, z+2, true);

World.destroyBlock(x, y+1, z-2, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y+1, z+2, true);

World.destroyBlock(x-1, y+1, z-2, true);
World.destroyBlock(x-1, y+1, z-1, true);
World.destroyBlock(x-1, y+1, z, true);
World.destroyBlock(x-1, y+1, z+1, true);
World.destroyBlock(x-1, y+1, z+2, true);

World.destroyBlock(x-2, y+1, z-2, true);
World.destroyBlock(x-2, y+1, z-1, true);
World.destroyBlock(x-2, y+1, z, true);
World.destroyBlock(x-2, y+1, z+1, true);
World.destroyBlock(x-2, y+1, z+2, true);

//666999

World.destroyBlock(x+2, y+2, z-2, true);
World.destroyBlock(x+2, y+2, z-1, true);
World.destroyBlock(x+2, y+2, z, true);
World.destroyBlock(x+2, y+2, z+1, true);
World.destroyBlock(x+2, y+2, z+2, true);

World.destroyBlock(x+1, y+2, z-2, true);
World.destroyBlock(x+1, y+2, z-1, true);
World.destroyBlock(x+1, y+2, z, true);
World.destroyBlock(x+1, y+2, z+1, true);
World.destroyBlock(x+1, y+2, z+2, true);

World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y+2, z-1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+2, z+1, true);
World.destroyBlock(x, y+2, z+2, true);

World.destroyBlock(x-1, y+2, z-2, true);
World.destroyBlock(x-1, y+2, z-1, true);
World.destroyBlock(x-1, y+2, z, true);
World.destroyBlock(x-1, y+2, z+1, true);
World.destroyBlock(x-1, y+2, z+2, true);

World.destroyBlock(x-2, y+2, z-2, true);
World.destroyBlock(x-2, y+2, z-1, true);
World.destroyBlock(x-2, y+2, z, true);
World.destroyBlock(x-2, y+2, z+1, true);
World.destroyBlock(x-2, y+2, z+2, true);
}
});

IDRegistry.genItemID("krackensh");
Item.createThrowableItem("krackensh", "§a Кракен §r \n 6 урон \n Метательное оружие", {name:"krackensh"}, {stack:64});

Item.registerThrowableFunction("krackensh", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 6);
} 
} 
);

IDRegistry.genItemID("truekrackensh");
Item.createThrowableItem("truekrackensh", "§a Истинный Кракен §r \n 100 урон \n Метательное оружие", {name:"truekrackensh"}, {stack:64});

Item.registerThrowableFunction("truekrackensh", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 100);
} 
} 
);

Recipes.addShaped({id: ItemID.truekrackensh, count: 1, data: 0}, [ "bab", "a a", "bab"], ['a', ItemID.krackensh, 0, 'b', ItemID.krackeningot, 0]);

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

IDRegistry.genItemID("jackbomb");
Item.createThrowableItem("jackbomb", "§a Взрывная бомба Джека §r \n 100 урон \n Метательное оружие", {name:"jackbomb"}, {stack:64});

Item.registerThrowableFunction("jackbomb", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 100);
} 
} 
);

IDRegistry.genItemID("horsemansword");
Item.createItem("horsemansword", "§a Меч всадника §r \n 310 урон ", {name: "horsemansword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("horsemansword", {durability: 3400, level: 4, efficiency: 8, damage: 310, enchantability: 14});
ToolAPI.setTool(ItemID.horsemansword, "horsemansword", ToolType.sword);

IDRegistry.genItemID("northpole");
Item.createItem("northpole", "§a Северный полюс §r \n 310 урон ", {name: "northpole", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("northpole", {durability: 3400, level: 4, efficiency: 8, damage: 310, enchantability: 14});
ToolAPI.setTool(ItemID.northpole, "northpole", ToolType.sword);

IDRegistry.genItemID("huskentrophy");
Item.createItem("huskentrophy", "§a Энтропия бродяги §r \n 320 урон ", {name: "huskentrophy", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("huskentrophy", {durability: 3400, level: 4, efficiency: 8, damage: 320, enchantability: 14});
ToolAPI.setTool(ItemID.huskentrophy, "huskentrophy", ToolType.sword);

IDRegistry.genItemID("rdrill");
Item.createItem("rdrill", "§a Раздаточная дробилка §r \n 330 урон ", {name: "rdrill", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("rdrill", {durability: 3400, level: 4, efficiency: 8, damage: 330, enchantability: 14});
ToolAPI.setTool(ItemID.rdrill, "rdrill", ToolType.sword);

IDRegistry.genItemID("earther");
Item.createItem("earther", "§1 Землянин §r \n 400 урон ", {name: "earther", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("earther", {durability: 3400, level: 4, efficiency: 8, damage: 330, enchantability: 14});
ToolAPI.setTool(ItemID.earther, "earther", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.earther){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

IDRegistry.genItemID("starevil");
Item.createItem("starevil", "§1 Гнев звездных богов §r \n 390 урон ", {name: "starevil", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("starevil", {durability: 3400, level: 4, efficiency: 8, damage: 390, enchantability: 14});
ToolAPI.setTool(ItemID.starevil, "starevil", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.starevil){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

IDRegistry.genItemID("meowmere");
Item.createItem("meowmere", "§1 Мяумур §r \n 420 урон ", {name: "meowmere", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("meowmere", {durability: 3400, level: 4, efficiency: 8, damage: 420, enchantability: 14});
ToolAPI.setTool(ItemID.meowmere, "meowmere", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.meowmere){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

Recipes.addShaped({id: ItemID.meowmere, count: 1, data: 0}, [ " aa", "aaa", "ba "], ['a', ItemID.meowingot, 0, 'b', 280, 0]);

IDRegistry.genItemID("murrrsama");
Item.createItem("murrrsama", "§1 Мурррсама §r \n 450 урон ", {name: "murrrsama", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("murrrsama", {durability: 3400, level: 4, efficiency: 8, damage: 450, enchantability: 14});
ToolAPI.setTool(ItemID.murrrsama, "murrrsama", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.murrrsama){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

Recipes.addShaped({id: ItemID.murrrsama, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.meowingot, 0, 'b', ItemID.murasama, 0]);

IDRegistry.genItemID("hollycollider");
Item.createItem("hollycollider", "§1 Священный коллайдер §r \n 480 урон ", {name: "hollycollider", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("hollycollider", {durability: 3400, level: 4, efficiency: 8, damage: 480, enchantability: 14});
ToolAPI.setTool(ItemID.hollycollider, "hollycollider", ToolType.sword);

IDRegistry.genItemID("heatedamputation");
Item.createItem("heatedamputation", "§1 Расплавленный ампутатор §r \n 470 урон ", {name: "heatedamputation", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("heatedamputation", {durability: 3400, level: 4, efficiency: 8, damage: 470, enchantability: 14});
ToolAPI.setTool(ItemID.heatedamputation, "heatedamputation", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.hollycollider){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.heatedamputation){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

IDRegistry.genItemID("ryusukesword");
Item.createItem("ryusukesword", "§1 Меч Рйусуке §r \n 490 урон \n Поджигает", {name: "ryusukesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ryusukesword", {durability: 3400, level: 4, efficiency: 8, damage: 470, enchantability: 14});
ToolAPI.setTool(ItemID.ryusukesword, "ryusukesword", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.ryusukesword){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.ryusukesword){ 
Entity.setFire(victim, 1000);
}
});

IDRegistry.genItemID("flowerpickaxe");
Item.createItem("flowerpickaxe", "§1 Цветущая кирка §r \n 510 урон \n Эффективней флоритовой кирки в 2 раза", {name: "flowerpickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("florite", {durability: 3400, level: 12, efficiency: 16, damage: 510, enchantability: 14});
ToolAPI.setTool(ItemID.floritepickaxe, "florite", ToolType.pickaxe);

IDRegistry.genItemID("dpickaxe");
Item.createItem("dpickaxe", "§1 Доблестная кирка §r \n 385 урон \n Эффективней веномусовой кирки в 2 раза", {name: "dpickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("d", {durability: 3400, level: 12, efficiency: 16, damage: 385, enchantability: 14});
ToolAPI.setTool(ItemID.dpickaxe, "d", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.flowerpickaxe, count: 1, data: 0}, [ "aaa", "aba", " b "], ['a', ItemID.floriteingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.dpickaxe, count: 1, data: 0}, [ "aaa", "cbc", " d "], ['a', ItemID.venomusingot, 0, 'b', 280, 0, 'c', ItemID.cosmicsingularity, 0, 'd', ItemID.ignispickaxe, 0]);

Recipes.addShaped({id: ItemID.dpickaxe, count: 1, data: 0}, [ "aaa", "cbc", " d "], ['a', ItemID.venomusingot, 0, 'b', 280, 0, 'c', ItemID.cosmicsingularity, 0, 'd', ItemID.aquapickaxe, 0]);

Recipes.addShaped({id: ItemID.dpickaxe, count: 1, data: 0}, [ "aaa", "cbc", " d "], ['a', ItemID.venomusingot, 0, 'b', 280, 0, 'c', ItemID.cosmicsingularity, 0, 'd', ItemID.aerpickaxe, 0]);

Recipes.addShaped({id: ItemID.dpickaxe, count: 1, data: 0}, [ "aaa", "cbc", " d "], ['a', ItemID.venomusingot, 0, 'b', 280, 0, 'c', ItemID.cosmicsingularity, 0, 'd', ItemID.terrapickaxe, 0]);



IDRegistry.genItemID("exelsus");
Item.createItem("exelsus", "§1 Эксельсус §r \n 550 урон ", {name: "exelsus", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("exelsus", {durability: 3400, level: 4, efficiency: 8, damage: 550, enchantability: 14});
ToolAPI.setTool(ItemID.exelsus, "exelsus", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.exelsus){ 
if(Math.random() < 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
}
});

IDRegistry.genItemID("dragonevil");
Item.createItem("dragonevil", "§1 Ярость дракона §r \n 620 урон ", {name: "dragonevil", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dragonevil", {durability: 3400, level: 4, efficiency: 8, damage: 620, enchantability: 14});
ToolAPI.setTool(ItemID.dragonevil, "dragonevil", ToolType.sword);

IDRegistry.genItemID("profanedtrident");
Item.createItem("profanedtrident", "§1 Оскверненный трезубец §r \n 650 урон ", {name: "profanedtrident", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("profanedtrident", {durability: 3400, level: 4, efficiency: 8, damage: 650, enchantability: 14});
ToolAPI.setTool(ItemID.profanedtrident, "profanedtrident", ToolType.sword);

IDRegistry.genItemID("burningsky");
Item.createItem("burningsky", "§1 Горящие небеса §r \n 600 урон ", {name: "burningsky", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("burningsky", {durability: 3400, level: 4, efficiency: 8, damage: 600, enchantability: 14});
ToolAPI.setTool(ItemID.burningsky, "burningsky", ToolType.sword);

IDRegistry.genItemID("galaxia");
Item.createItem("galaxia", "§1 Галаксия §r \n 290 урон", {name: "galaxia", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("galaxia", {durability: 3400, level: 4, efficiency: 8, damage: 290, enchantability: 14});
ToolAPI.setTool(ItemID.galaxia, "galaxia", ToolType.sword);
Recipes.addShaped({id: ItemID.galaxia, count: 1, data: 0}, [ "bbb", "bac", "ccc"], ['a', ItemID.omegabiomesword, 0, 'b', ItemID.cosmiliteingot, 0, 'c', ItemID.fantaplasm, 0]);

IDRegistry.genItemID("Ark_of_the_Cosmos");
Item.createItem("Ark_of_the_Cosmos", "§1 Ковчег Космоса §r \n 845 урон §1 \n С помощью этого меча вы чувствуете связь с космосом... \n Вы чувствуете как приобретаете силу богов...", {name: "Ark_of_the_Cosmos", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("Ark_of_the_Cosmos", {durability: 3400, level: 4, efficiency: 8, damage: 845, enchantability: 14});
ToolAPI.setTool(ItemID.Ark_of_the_Cosmos, "Ark_of_the_Cosmos", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.Ark_of_the_Cosmos)
{
Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 30000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 250, 30000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 10, 20)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 50, 30000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 50, 30000)

}
});

IDRegistry.genItemID("Omikrone_Ark_of_the_Cosmos");
Item.createItem("Omikrone_Ark_of_the_Cosmos", "§1 Омикроновый Ковчег Космоса §r \n 900 урон §1 \n С помощью этого меча вы чувствуете связь с космосом... \n Вы чувствуете как приобретаете силу богов...\n§4 Усилен древним металлом", {name: "Omikrone_Ark_of_the_Cosmos", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("Omikrone_Ark_of_the_Cosmos", {durability: 3400, level: 4, efficiency: 8, damage: 900, enchantability: 14});
ToolAPI.setTool(ItemID.Omikrone_Ark_of_the_Cosmos, "Omikrone_Ark_of_the_Cosmos", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.Omikrone_Ark_of_the_Cosmos)
{
Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 30000)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 250, 30000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 50, 20)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 100, 30000)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 100, 30000)

}
});

Recipes.addShaped({id: ItemID.Ark_of_the_Cosmos, count: 1, data: 0}, [ "gac", "dfe", "cbc"], ['a', ItemID.elementalark, 0, 'b', ItemID.galaxia, 0, 'c', ItemID.fragmentoftruncatissoul, 0, 'd', ItemID.endothermicenergy, 0, 'e', ItemID.nightmarefuel, 0, 'f', BlockID.goldyore, 0, 'g', ItemID.galaxiteingot, 0]);

Recipes.addShaped({id: ItemID.Omikrone_Ark_of_the_Cosmos, count: 1, data: 0}, [ "bbb", "bab", "bbb"], ['a', ItemID.Ark_of_the_Cosmos, 0, 'b', ItemID.omikroneingot, 0]);

IDRegistry.genItemID("earth");
Item.createItem("earth", "§1 Земля §r \n 850 урон ", {name: "earth", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("earth", {durability: 3400, level: 4, efficiency: 8, damage: 850, enchantability: 14});
ToolAPI.setTool(ItemID.earth, "earth", ToolType.sword);

IDRegistry.genItemID("animus");
Item.createItem("animus", "§1 Анимус §r \n 800 урон ", {name: "animus", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("animus", {durability: 3400, level: 4, efficiency: 8, damage: 800, enchantability: 14});
ToolAPI.setTool(ItemID.animus, "animus", ToolType.sword);

IDRegistry.genItemID("dragondestroy");
Item.createItem("dragondestroy", "§1 Земля §r \n 700 урон ", {name: "dragondestroy", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dragondestroy", {durability: 3400, level: 4, efficiency: 8, damage: 700, enchantability: 14});
ToolAPI.setTool(ItemID.dragondestroy, "dragondestroy", ToolType.sword);

IDRegistry.genItemID("paladinhammer");
Item.createItem("paladinhammer", "§1 Истинный паладинский маг-молот могущества Триактиса §r \n 1000 урон ", {name: "paladinhammer", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("paladinhammer", {durability: 3400, level: 4, efficiency: 8, damage: 1000, enchantability: 14});
ToolAPI.setTool(ItemID.paladinhammer, "paladinhammer", ToolType.sword);

IDRegistry.genItemID("redsun");
Item.createItem("redsun", "§1 Красное солнце §r \n 750 урон ", {name: "redsun", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("redsun", {durability: 3400, level: 4, efficiency: 8, damage: 750, enchantability: 14});
ToolAPI.setTool(ItemID.redsun, "redsun", ToolType.sword);

IDRegistry.genItemID("azatot");
Item.createItem("azatot", "§1 Азатот §r \n 900 урон ", {name: "azatot", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("azatot", {durability: 3400, level: 4, efficiency: 8, damage: 900, enchantability: 14});
ToolAPI.setTool(ItemID.azatot, "azatot", ToolType.sword);

IDRegistry.genItemID("crystalpickaxe");
Item.createItem("crystalpickaxe", "§1 Кристальный разрушитель §r \n 780 урон", {name: "dpickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("crystalpickaxe", {durability: 3400, level: 14, efficiency: 5000, damage: 780, enchantability: 14});
ToolAPI.setTool(ItemID.crystalpickaxe, "crystalpickaxe", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.crystalpickaxe, count: 1, data: 0}, [ "abc", "   ", "   "], ['a', ItemID.flowerpickaxe, 0, 'b', ItemID.shadowspecingot, 0, 'c', ItemID.dpickaxe, 0]);

IDRegistry.genItemID("truepaladinhammer");
Item.createItem("truepaladinhammer", "§1 Истинный молот паладина §r \n 400 урон ", {name: "truepaladinhammer", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("truepaladinhammer", {durability: 3400, level: 4, efficiency: 8, damage: 400, enchantability: 14});
ToolAPI.setTool(ItemID.truepaladinhammer, "truepaladinhammer", ToolType.sword);

Recipes.addShaped({id: ItemID.truepaladinhammer, count: 1, data: 0}, [ "aba", "cdc", "   "], ['a', ItemID.igniscore, 0, 'b', ItemID.palladiumsword, 0, 'c', ItemID.chaosingot, 0, 'd', ItemID.calamitydust, 0]); 

Recipes.addShaped({id: ItemID.paladinhammer, count: 1, data: 0}, [ "aaa", "aba", "aca"], ['a', ItemID.shadowspecingot, 0, 'b', ItemID.truepaladinhammer, 0, 'c', ItemID.hollyingot, 0]); 

IDRegistry.genItemID("lightningbolt");
Item.createItem("lightningbolt", "§a Φωτιά του Δία §r \n 310 урон", {name: "lightningbolt", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("lightningbolt", {durability: 3400, level: 4, efficiency: 8, damage: 310, enchantability: 14});
ToolAPI.setTool(ItemID.lightningbolt, "lightningbolt", ToolType.sword);


IDRegistry.genItemID("germesboots");
Item.createArmorItem("germesboots", "§c Ботинки Гермеса §r \n 45 защита", {name: "germesboots", meta: 0}, {type: "boots", armor: 45, durability: 600, texture: "armor/germesboots.png"});


Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();

if (boots.id == ItemID.germesboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 100, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.lightningbolt){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});

IDRegistry.genItemID("kronsword");
Item.createItem("kronsword", "§a Изначальный меч §r \n 400 урон", {name: "kronsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("kronsword", {durability: 3400, level: 4, efficiency: 8, damage: 400, enchantability: 14});
ToolAPI.setTool(ItemID.kronsword, "kronsword", ToolType.sword);

IDRegistry.genItemID("krslsword");
Item.createItem("krslsword", "§a Непроницаемый меч §r \n 380 урон \n Поджигает", {name: "krslsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("krslsword", {durability: 3400, level: 4, efficiency: 8, damage: 380, enchantability: 14});
ToolAPI.setTool(ItemID.krslsword, "krslsword", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.krslsword){ 
Entity.setFire(victim, 1000);
}
});

IDRegistry.genItemID("oahusword");
Item.createItem("oahusword", "§a Потерянный меч §r \n 350 урон \n Стреляет молниями", {name: "oahusword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("oahusword", {durability: 3400, level: 4, efficiency: 8, damage: 350, enchantability: 14});
ToolAPI.setTool(ItemID.oahusword, "oahusword", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.oahusword){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});

IDRegistry.genItemID("ptahstaff");
Item.createItem("ptahstaff", "Посох Анкха \n Призывает голема", {name: "ptahstaff", meta: 0}, {stack: 64});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.ptahstaff){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 20);
 }
});

IDRegistry.genItemID("firefalls");
Item.createItem("firefalls", "Тлеющие небеса", {name: "firefalls", meta: 0}, {stack: 64});


IDRegistry.genItemID("firerisboots");
Item.createArmorItem("firerisboots", "§c Ботинки Фиреруса §r \n 110 защита \n§6 Огнеусточевые", {name: "firerisboots", meta: 0}, {type: "boots", armor: 110, durability: 600, texture: "armor/firerisboots.png"});

IDRegistry.genItemID("gfboots");
Item.createArmorItem("gfboots", "§c Искрящие бегуны §r \n 160 защита \n Огнеусточевые и супер быстрые", {name: "gfboots", meta: 0}, {type: "boots", armor: 160, durability: 600, texture: "armor/gfboots.png"});

Recipes.addShaped({id: ItemID.gfboots, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.germesboots, 0, 'b', ItemID.firerisboots, 0]);

IDRegistry.genItemID("ugfboots");
Item.createArmorItem("ugfboots", "§c Бегуны поджигателя земель §r \n 165 защита \n Огнеусточевые и супер быстрые, поджигают землю за собой", {name: "gfboots", meta: 0}, {type: "boots", armor: 165, durability: 600, texture: "armor/gfboots.png"});

Recipes.addShaped({id: ItemID.ugfboots, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.gfboots, 0, 'b', ItemID.azatotdust, 0]);


Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();

if (boots.id == ItemID.firerisboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 100, 100)
    }
    
    if (boots.id == ItemID.gfboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 100, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 100, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    }
    
    if (boots.id == ItemID.ugfboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 100, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 100, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    World.setBlock(pos.x,pos.y, pos.z, 51, 0); 
    }
});



Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.firefalls){


var ent = Entity.spawn(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.1, 0);

var et = Entity.spawn(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.1, 0);

var en = Entity.spawn(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.1, 0);

var egh = Entity.spawn(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.1, 0);

var n = Entity.spawn(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.1, 0);
var er = Entity.spawn(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.1, 0);

var em = Entity.spawn(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.1, 0);

var ep = Entity.spawn(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.1, 0);

var emi = Entity.spawn(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.1, 0);
var epo = Entity.spawn(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.1, 0);

var ezi = Entity.spawn(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.1, 0);
var elj = Entity.spawn(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.1, 0);
var etk = Entity.spawn(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.1, 0);
var esk = Entity.spawn(coords.x-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.1, 0);

}});

IDRegistry.genItemID("verumazatot");
Item.createItem("verumazatot", "§1 እውነት ነው  Азатот §r \n 1500 урон ", {name: "verumazatot", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("verumazatot", {durability: 3400, level: 4, efficiency: 8, damage: 900, enchantability: 14});
ToolAPI.setTool(ItemID.verumazatot, "verumazatot", ToolType.sword);

Recipes.addShaped({id: ItemID.verumazatot, count: 1, data: 0}, [ "bbb", "bab", "bbb"], ['a', ItemID.azatot, 0, 'b', ItemID.azatotdust, 0]);

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.verumazatot){


var ent = Entity.spawn(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.1, 0);

var et = Entity.spawn(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.1, 0);

var en = Entity.spawn(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.1, 0);

var egh = Entity.spawn(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.1, 0);

var n = Entity.spawn(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.1, 0);
var er = Entity.spawn(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.1, 0);

var em = Entity.spawn(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.1, 0);

var ep = Entity.spawn(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.1, 0);

var emi = Entity.spawn(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.1, 0);
var epo = Entity.spawn(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.1, 0);

var ezi = Entity.spawn(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.1, 0);
var elj = Entity.spawn(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.1, 0);
var etk = Entity.spawn(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.1, 0);
var esk = Entity.spawn(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.1, 0);

}});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.verumazatot){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});

IDRegistry.genItemID("otherplanet");
Item.createItem("otherplanet", "§1 Внеземной §r \n 2000 урон ", {name: "otherplanet", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("otherplanet", {durability: 3400, level: 4, efficiency: 8, damage: 2000, enchantability: 14});
ToolAPI.setTool(ItemID.otherplanet, "otherplanet", ToolType.sword);
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.otherplanet){
var ent = Entity.spawn(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.1, 0);
var et = Entity.spawn(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.1, 0);
var en = Entity.spawn(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.1, 0);
var egh = Entity.spawn(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.1, 0);
var n = Entity.spawn(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.1, 0);
var er = Entity.spawn(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.1, 0);
var em = Entity.spawn(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.1, 0);
var ep = Entity.spawn(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.1, 0);
var emi = Entity.spawn(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.1, 0);
var epo = Entity.spawn(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.1, 0);
var ezi = Entity.spawn(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.1, 0);
var elj = Entity.spawn(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.1, 0);
var etk = Entity.spawn(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.1, 0);
var esk = Entity.spawn(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.1, 0);
}});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.otherplanet){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});

IDRegistry.genItemID("starkiller");
Item.createItem("starkiller", "§1 Погибель сверхновых §r \n 2100 урон ", {name: "starkiller", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("starkiller", {durability: 3400, level: 4, efficiency: 8, damage: 2500, enchantability: 14});
ToolAPI.setTool(ItemID.starkiller, "starkiller", ToolType.sword);
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.starkiller){
var ent = Entity.spawn(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.1, 0);
var et = Entity.spawn(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.1, 0);
var en = Entity.spawn(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.1, 0);
var egh = Entity.spawn(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.1, 0);
var n = Entity.spawn(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.1, 0);
var er = Entity.spawn(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.1, 0);
var em = Entity.spawn(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.1, 0);
var ep = Entity.spawn(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.1, 0);
var emi = Entity.spawn(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.1, 0);
var epo = Entity.spawn(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.1, 0);
var ezi = Entity.spawn(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.1, 0);
var elj = Entity.spawn(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.1, 0);
var etk = Entity.spawn(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.1, 0);
var esk = Entity.spawn(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.1, 0);
}});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.starkiller){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});

IDRegistry.genItemID("ankhsword");
Item.createItem("ankhsword", "§1 Меч Анкх §r \n 2000 урон ", {name: "ankhsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ankhsword", {durability: 3400, level: 4, efficiency: 8, damage: 2000, enchantability: 14});
ToolAPI.setTool(ItemID.ankhsword, "ankhsword", ToolType.sword);

IDRegistry.genItemID("True_Ark_of_the_Cosmos");
Item.createItem("True_Ark_of_the_Cosmos", "§6 Ковчег Космоса §r \n 30000 урон §6 \n Вы чувствуете связь с Мультивселенной...\n Вы чувствуете силу Арка проникающую в вас через этот меч...", {name: "Ark_of_the_Cosmos", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("True_Ark_of_the_Cosmos", {durability: 1000000, level: 30000, efficiency: 1000, damage: 30000, enchantability: 14});
ToolAPI.setTool(ItemID.True_Ark_of_the_Cosmos, "True_Ark_of_the_Cosmos", ToolType.sword);



IDRegistry.genItemID("ArkHelmet");
IDRegistry.genItemID("ArkCheatplate");
IDRegistry.genItemID("ArkLeggings");
IDRegistry.genItemID("ArkBoots");

Item.createArmorItem("ArkHelmet", "§6Шлем Арка §r \n 7500 защита", {name: "ArkHelmet", meta: 0}, {type: "helmet", armor: 7500, durability: 1000000, texture: "armor/ArkArmor.png"},{isTech: true});
Item.createArmorItem("ArkCheatplate", "§6 Нагрудник Арка §r \n 7700 защита", {name: "ArkCheatplate", meta: 0}, {type: "chestplate", armor: 7700, durability: 1000000, texture: "armor/ArkArmor.png"},{isTech: true});
Item.createArmorItem("ArkLeggings", "§6 Поножи Арка §r  \n 7600 защита", {name: "ArkLeggings", meta: 0}, {type: "leggings", armor: 7600, durability: 1000000, texture: "armor/ArkArmor0.png"},{isTech: true});
Item.createArmorItem("ArkBoots", "§6 Ботинки Арка §r \n 7500 защита", {name: "ArkBoots", meta: 0}, {type: "boots", armor: 7500, durability: 1000000, texture: "armor/ArkArmor.png"},{isTech: true});


Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();

if (helmet.id == ItemID.ArkHelmet && chest.id == ItemID.ArkCheatplate && legs.id == ItemID.ArkLeggings && boots.id == ItemID.ArkBoots) {
    
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.saturation, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 250, 100)

Particles.addParticle(pos.x, pos.y + 1, pos.z, 6); 

Player.setFlyingEnabled (true);
    }
    });
    
    
    IDRegistry.genItemID("creativechunk");
Item.createItem("creativechunk", "§6 Семя креатива", {name: "creativechunk", meta: 0}, {isTech: false}, {stack: 64});


Recipes.addShaped({id: ItemID.creativechunk, count: 2, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.creativechunk, 0]);

IDRegistry.genItemID("TinEverestraSword");
Item.createItem("TinEverestraSword", "§2 Меч Вселенной §r \n 511111 урон", {name: "TinEverestraSword", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("TinEverestraSword", {durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111});
ToolAPI.setTool(ItemID.TinEverestraSword, "TinEverestraSword", ToolType.sword);
Recipes.addShaped({id: ItemID.TinEverestraSword, count: 1, data: 0}, [ "bbb", "bab", "bbb"], ['a', ItemID.creativechunk, 0, 'b', 3, 0]);



IDRegistry.genItemID("HellSword");
Item.createItem("HellSword", "§4 Меч Вселенной §r \n 511111 урон", {name: "HellSword", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("HellSword", {durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111});
ToolAPI.setTool(ItemID.HellSword, "HellSword", ToolType.sword);
Recipes.addShaped({id: ItemID.HellSword, count: 1, data: 0}, [ "bbb", "bab", "bbb"], ['a', ItemID.creativechunk, 0, 'b', 87, 0]);



IDRegistry.genItemID("EndSword");
Item.createItem("EndSword", "§5 Меч Вселенной §r \n 511111 урон", {name: "EndSword", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("EndSword", {durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111});
ToolAPI.setTool(ItemID.EndSword, "EndSword", ToolType.sword);
Recipes.addShaped({id: ItemID.EndSword, count: 1, data: 0}, [ "bbb", "bab", "bbb"], ['a', ItemID.creativechunk, 0, 'b', 121, 0]);




IDRegistry.genItemID("AzatothSword");
Item.createItem("AzatothSword", "§1 Меч Вселенной §r \n 511111 урон", {name: "AzatothSword", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("AzatothSword", {durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111});
ToolAPI.setTool(ItemID.AzatothSword, "AzatothSword", ToolType.sword);
Recipes.addShaped({id: ItemID.AzatothSword, count: 1, data: 0}, [ "bbb", "bab", "bbb"], ['a', ItemID.creativechunk, 0, 'b', BlockID.azatotmateria, 0]);


IDRegistry.genItemID("AstralSworda");
Item.createItem("AstralSworda", "§d Меч Вселенной §r \n 511111 урон", {name: "AstralSworda", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("AstralSworda", {durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111});
ToolAPI.setTool(ItemID.AstralSworda, "AstralSworda", ToolType.sword);
Recipes.addShaped({id: ItemID.AstralSworda, count: 1, data: 0}, [ "bbb", "cac", "ddd"], ['a', ItemID.creativechunk, 0, 'b', BlockID.astralyellow, 0, 'c', BlockID.astralmid, 0, 'd', BlockID.astralpink, 0]);





IDRegistry.genItemID("MultiverseSword");
Item.createItem("MultiverseSword", "§6 Меч Мультивселенной §r \n 6495038 урон", {name: "MultiverseSword", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("MultiverseSword", {durability: 6495038, level: 6495038, efficiency: 6495038, damage: 6495038, enchantability: 6495038});
ToolAPI.setTool(ItemID.MultiverseSword, "MultiverseSword", ToolType.sword);
Recipes.addShaped({id: ItemID.MultiverseSword, count: 1, data: 0}, [ "abc", "de ", "   "], ['a', ItemID.TinEverestraSword, 0, 'b', ItemID.HellSword, 0, 'c', ItemID.EndSword, 0, 'd', ItemID.AstralSworda, 0, 'e', ItemID.AzatothSword, 0]);

    Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.MultiverseSword)
{


}
});





// included from: \bookpart.js
IDRegistry.genItemID("hollybotbook");
Item.createItem("hollybotbook", "המנגנון הארור", {name: "hollybotbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("naidabook");
Item.createItem("naidabook", "אלת הצמחים", {name: "naidabook", meta: 0}, {stack: 64});

IDRegistry.genItemID("krakenbook");
Item.createItem("krakenbook", "תמנון ענק ", {name: "krakenbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("elementalguardianbook");
Item.createItem("elementalguardianbook", "שומר אלמנטים", {name: "elementalguardianbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("arsenalguardianbook");
Item.createItem("arsenalguardianbook", "שומר הארסנל", {name: "arsenalguardianbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("arsenalcreatorbook");
Item.createItem("arsenalcreatorbook", "יוצר ארסנל", {name: "arsenalcreatorbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("captainofarkofthecosmos");
Item.createItem("captainofarkofthecosmos", "קפטן ארון הקוסמוס", {name: "captainofarkofthecosmos", meta: 0}, {stack: 64});

IDRegistry.genItemID("devourerdeorumbook");
Item.createItem("devourerdeorumbook", "טורף האלים", {name: "devourerdeorumbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("seederusbook");
Item.createItem("seederusbook", "אלוהים של פוריות", {name: "seederusbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("ekatebrinebook");
Item.createItem("ekatebrinebook", "מלכת השלג", {name: "ekatebrinebook", meta: 0}, {stack: 64});

IDRegistry.genItemID("calamitatisbook");
Item.createItem("calamitatisbook", "אסון", {name: "calamitatisbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("ciciditdeabook");
Item.createItem("ciciditdeabook", "אלוהות מחוללת", {name: "ciciditdeabook", meta: 0}, {stack: 64});

IDRegistry.genItemID("venomkultistbook");
Item.createItem("venomkultistbook", "רפואה זיהומית", {name: "venomkultistbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("haturbook");
Item.createItem("haturbook", "ኸአጠኢረ", {name: "haturbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("verumdevourerdeorumbook");
Item.createItem("verumdevourerdeorumbook", "הטורף האמיתי של האלים", {name: "verumdevourerdeorumbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("truncatisbook");
Item.createItem("truncatisbook", "ג 'ונגל הדרקון", {name: "truncatisbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("verumcalamitatisbook");
Item.createItem("verumcalamitatisbook", "איסטינרה האסון האמיתי ", {name: "verumcalamitatisbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("azatotbook");
Item.createItem("azatotbook", "אבל בשביל זה", {name: "azatotbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("chtulhubook");
Item.createItem("chtulhubook", "אלוהים תמנון הדרקון", {name: "chtulhubook", meta: 0}, {stack: 64});

IDRegistry.genItemID("arktludumthnbook");
Item.createItem("arktludumthnbook", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.arktludumthnbook, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.cosmicsingularity, 0, 'b', 340, 0]);

IDRegistry.genItemID("arktludumthnbooktwo");
Item.createItem("arktludumthnbooktwo", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

Recipes.addShaped({id: ItemID.arktludumthnbooktwo, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbook, 0, 'b', ItemID.hollybotbook, 0]);

IDRegistry.genItemID("arktludumthnbookthree");
Item.createItem("arktludumthnbookthree", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

Recipes.addShaped({id: ItemID.arktludumthnbookthree, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbooktwo, 0, 'b', ItemID.naidabook, 0]);

IDRegistry.genItemID("arktludumthnbookfour");
Item.createItem("arktludumthnbookfour", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

Recipes.addShaped({id: ItemID.arktludumthnbookfour, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookthree, 0, 'b', ItemID.krakenbook, 0]);




IDRegistry.genItemID("arktludumthnbookfive");
Item.createItem("arktludumthnbookfive", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookfive, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookfour, 0, 'b', ItemID.elementalguardianbook, 0]);

IDRegistry.genItemID("arktludumthnbooksix");
Item.createItem("arktludumthnbooksix", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbooksix, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookfive, 0, 'b', ItemID.arsenalguardianbook, 0]);

IDRegistry.genItemID("arktludumthnbookseven");
Item.createItem("arktludumthnbookseven", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookseven, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbooksix, 0, 'b', ItemID.arsenalcreatorbook, 0]);

IDRegistry.genItemID("arktludumthnbookeight");
Item.createItem("arktludumthnbookeight", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookeight, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookseven, 0, 'b', ItemID.captainofarkofthecosmos, 0]);

IDRegistry.genItemID("arktludumthnbooknine");
Item.createItem("arktludumthnbooknine", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbooknine, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookeight, 0, 'b', ItemID.devourerdeorumbook, 0]);

IDRegistry.genItemID("arktludumthnbookseederus");
Item.createItem("arktludumthnbookseederus", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookseederus, count: 1, data: 0}, [ " a ", " b ", " c "], ['a', ItemID.arktludumthnbooknine, 0, 'b', ItemID.seederusbook, 0, 'c', ItemID.ekatebrinebook, 0]);

IDRegistry.genItemID("arktludumthnbookcalamitatis");
Item.createItem("arktludumthnbookcalamitatis", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookcalamitatis, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookseederus, 0, 'b', ItemID.calamitatisbook, 0]);

IDRegistry.genItemID("arktludumthnbookvenomcultist");
Item.createItem("arktludumthnbookvenomcultist", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookvenomcultist, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookcalamitatis, 0, 'b', ItemID.venomkultistbook, 0]);

IDRegistry.genItemID("arktludumthnbookhatur");
Item.createItem("arktludumthnbookhatur", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookhatur, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookvenomcultist, 0, 'b', ItemID.haturbook, 0]);

IDRegistry.genItemID("arktludumthnbookciciditdea");
Item.createItem("arktludumthnbookciciditdea", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookciciditdea, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookhatur, 0, 'b', ItemID.ciciditdeabook, 0]);

IDRegistry.genItemID("arktludumthnbookverumdevourerdeorum");
Item.createItem("arktludumthnbookverumdevourerdeorum", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookverumdevourerdeorum, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookciciditdea, 0, 'b', ItemID.verumdevourerdeorumbook, 0]);

IDRegistry.genItemID("arktludumthnbooktruncatis");
Item.createItem("arktludumthnbooktruncatis", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbooktruncatis, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookverumdevourerdeorum, 0, 'b', ItemID.truncatisbook, 0]);

IDRegistry.genItemID("arktludumthnbookverumcalamitatis");
Item.createItem("arktludumthnbookverumcalamitatis", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookverumcalamitatis, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbooktruncatis, 0, 'b', ItemID.verumcalamitatisbook, 0]);

IDRegistry.genItemID("arktludumthnbookazatot");
Item.createItem("arktludumthnbookazatot", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookazatot, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookverumcalamitatis, 0, 'b', ItemID.azatotbook, 0]);

IDRegistry.genItemID("arktludumthnbookchtulhu");
Item.createItem("arktludumthnbookchtulhu", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookchtulhu, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookazatot, 0, 'b', ItemID.chtulhubook, 0]);


IDRegistry.genItemID("arktludumthnbookfinal");
Item.createItem("arktludumthnbookfinal", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: false});
Recipes.addShaped({id: ItemID.arktludumthnbookfinal, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', ItemID.arktludumthnbookchtulhu, 0]);




// included from: \summon.js
IDRegistry.genItemID("hollybot");
Item.createItem("hollybot", "§b Проклятый механизм \n §r Ошибка в коде вызвала необратимые последствия", {name: "Hollybot", data: 0});

Recipes.addShaped({id: ItemID.hollybot, count: 1, data: 0}, [ "abc", "b b", "dbe"], ['a', ItemID.aquacore, 0, 'b', ItemID.cometiteingot, 0, 'c', ItemID.aercore, 0, 'd', ItemID.terracore, 0, 'e', ItemID.igniscore, 0]);


   IDRegistry.genItemID("Naida");
Item.createItem("Naida", "§b Живая вода \n §r Говорят Наида любила розы, но после того как Нотч \n уничтожил их что бы создать мак, Наида впала в ярость", {name: "Naida", data: 0});

Recipes.addShaped({id: ItemID.Naida, count: 1, data: 0}, [ " a ", "cbc", " c "], ['a', ItemID.hollyingot, 0, 'b', 373, 0, 'c', 337, 0]);

IDRegistry.genItemID("Kracken");
Item.createItem("Kracken", "§b Наживка для Кракена", {name: "Kracken", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.Kracken, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', BlockID.ship, 0, 'b', 367, 0, 'c', 368, 0]);

IDRegistry.genItemID("elementalguardiansword");
Item.createItem("elementalguardiansword", "Меч Хранителя Элементов", {name: "elementalguardiansword", meta: 0}, {stack: 1});

IDRegistry.genItemID("ElementalGuardian");
Item.createItem("ElementalGuardian", "§b Печать Элементов ", {name: "ElementalGuardian", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.ElementalGuardian, count: 1, data: 0}, [ "aba", "bbb", "aba"], ['a', ItemID.elementalcore, 0, 'b', ItemID.krackeningot, 0]);

IDRegistry.genItemID("ArsenalGuardian");
Item.createItem("ArsenalGuardian", "§b Меч из нисших миров", {name: "ArsenalGuardian", meta: 0}, {stack: 1});


Recipes.addShaped({id: ItemID.ArsenalGuardian, count: 1, data: 0}, [ " a ", "bcd", "cec"], ['a', ItemID.evilfragment, 0, 'b', ItemID.energyfragment, 0, 'c', ItemID.krackeningot, 0, 'd', ItemID.coldfragment, 0, 'e', ItemID.millionfragment, 0]);

IDRegistry.genItemID("ArsenalCreator");
Item.createItem("ArsenalCreator", "§b Низины миров", {name: "ArsenalCreator", meta: 0}, {stack: 64});

IDRegistry.genItemID("CaptainOfArkOfTheCosmos");
Item.createItem("CaptainOfArkOfTheCosmos", "§b Сфера космоса", {name: "cosmicsphere", meta: 0}, {stack: 64});

IDRegistry.genItemID("DevourerDeorum");
Item.createItem("DevourerDeorum", "Стелла Сфаэра", {name: "stellasfaera", meta: 0}, {stack: 64});

IDRegistry.genItemID("Seederus");
Item.createItem("Seederus", "§b Проклятый амулет", {name: "Seederus", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Seederus, count: 1, data: 0}, [ " a ", "b c", " d "], ['a', 86, 0, 'b', ItemID.ectoplasm, 0, 'c', ItemID.hollyingot, 0, 'd', ItemID.astralingot, 0]);

IDRegistry.genItemID("Ekatebrina");
Item.createItem("Ekatebrina", "§b Странная снежинка", {name: "Ekatebrina", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Ekatebrina, count: 1, data: 0}, [ " a ", "b c", " d "], ['a', 35, 0, 'b', ItemID.ectoplasm, 0, 'c', ItemID.hollyingot, 0, 'd', ItemID.astralingot, 0]);

IDRegistry.genItemID("Calamitatis");
Item.createItem("Calamitatis", "§b Око Опустошителя", {name: "Calamitatis", meta: 0}, {stack: 64});

IDRegistry.genItemID("VenomCultist");
Item.createItem("VenomCultist", "§b Украденный талисман", {name: "VenomCultist", meta: 0}, {stack: 64});

IDRegistry.genItemID("Hatur");
Item.createItem("Hatur", "§b Проклятая печать", {name: "Hatur", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Calamitatis, count: 1, data: 0}, [ "aba", "bcd", "dee"], ['a', ItemID.termoenergy, 0, 'b', ItemID.nightmarefuel, 0, 'c', 87, 0, 'd', ItemID.ignisessence, 0, 'e', ItemID.hollyingot, 0]);

Recipes.addShaped({id: ItemID.VenomCultist, count: 1, data: 0}, [ "abc", "b b", "dbe"], ['a', ItemID.evilfragment, 0, 'b', ItemID.chaosingot, 0, 'c', ItemID.energyfragment, 0, 'd', ItemID.coldfragment, 0, 'e', ItemID.millionfragment, 0]);

Recipes.addShaped({id: ItemID.Hatur, count: 1, data: 0}, [ "abc", "b f", "dfe"], ['a', ItemID.evilfragment, 0, 'b', ItemID.chaosingot, 0, 'c', ItemID.energyfragment, 0, 'd', ItemID.coldfragment, 0, 'e', ItemID.millionfragment, 0, 'f', ItemID.venomdye, 0]);

IDRegistry.genItemID("CiciditDea");
Item.createItem("CiciditDea", "§b Оскверненное ядро", {name: "CiciditDea", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.CiciditDea, count: 1, data: 0}, [ "aba", "b b", "aba"], ['a', ItemID.venomusingot, 0, 'b', ItemID.meowingot, 0]);

IDRegistry.genItemID("VerumDevourerDeorum");
Item.createItem("VerumDevourerDeorum", "§b Искривленная пустота", {name: "VerumDevourerDeorum", meta: 0}, {stack: 64});

IDRegistry.genItemID("Truncatis");
Item.createItem("Truncatis", "§b Яйцо дракона", {name: "dragonegg", meta: 0}, {stack: 64});

IDRegistry.genItemID("VerumCalamitatis");
Item.createItem("VerumCalamitatis", "§b Глаз бедствия", {name: "VerumCalamitatis", meta: 0}, {stack: 64});

IDRegistry.genItemID("Zeus");
Item.createItem("Zeus", "Манипулятор погоды", {name: "Zeus", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Zeus, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', ItemID.astralingot, 0, 'b', 20, 0, 'c', 42, 0]);

IDRegistry.genItemID("Kron");
Item.createItem("Kron", "§b Древняя реликвия", {name: "Kron", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Kron, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.venomdye, 0]);

IDRegistry.genItemID("Chtulhu");
Item.createItem("Chtulhu", "§b Некрономикон", {name: "Chtulhu", meta: 0}, {stack: 64});

IDRegistry.genItemID("VerumPtah");
Item.createItem("VerumPtah", "§b Проклятье фараона", {name: "VerumPtah", meta: 0}, {stack: 64});

IDRegistry.genItemID("Ark");
Item.createItem("Ark", "Арктлудумзн", {name: "Ark", meta: 0}, {stack: 64});



// included from: \mobs\holybot.js
let hollybotSound = null;
let HolybotSounds = [];

Callback.addCallback("ItemUse", function(coords, item){
    coords = coords.relative;
    if(item.id == ItemID.hollybot){
        Entity.spawn(coords.x,coords.y,coords.z,"ark:holybot");
        Game.message("Призван проклятый механизмм");
        PlaySongVarFile("Holybot.mp3", HolybotSounds);
    }
});

Callback.addCallback("EntiyHurt", function(attacker, entity, damageValue, damageType){
    if(Entity.getTypeAddon(entity) == "ark:holybot"){
        if(!hollybotSound == 1){
            PlaySongVarFile("Holybot", ".mp3", HolybotSounds);
        };
    };
});

Callback.addCallback("EntityDeath", function(entity,attacker,damageType){
    if(Entity.getTypeAddon(entity) == "ark:holybot"){
        var random = Math.random();
        coords = Entity.getPosition(entity);
        BlockSourse.getCurrentWorldGenRegion();
        BlockSourse.spawnDroppedItem(coords.x, coords.y, coords.z, ItemID.hollyingot, randomInteger(5, 15));
        if(random<= 0.25){
            BlockSourse.spawnDroppedItem(coords.x, coords.y, coords.z, ItemID.horngodhelmet, 1);
        } else if(random <=0.5){
            BlockSourse.spawnDroppedItem(coords.x. coords.y, coords.z, ItemID.horngodchestplate, 1);
        } else if(random<=0.75){
            BlockSourse.spawnDroppedItem(coords.x, coords.y, coords.z, ItemID.horngodleggins, 1);
        } else {
            BlockSourse.spawnDroppedItem(coords.x, coords.y, coords.z, ItemID.horngodboots);
        };
        StopSound(HolybotSounds);
    };
});

