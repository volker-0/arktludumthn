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
