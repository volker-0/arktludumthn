IDRegistry.genItemID("starsword");
Item.createItem("starsword", "§a Звездная сила §r \n 15 урон", {name: "starsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("starsword", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.starsword, "starsword", ToolType.sword);

IDRegistry.genItemID("enchantedsword");
Item.createItem("enchantedsword", "§a Заколдованный меч §r \n 15 урон", {name: "enchantedsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("enchantedsword", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.enchantedsword, "enchantedsword", ToolType.sword);

Block.registerDropFunctionForID(1, function(coords, blockID, blockData, level){
		if(Math.random() < 0.002){
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
EssenceAPI.registerDropEntityArr([32, 45, 40, 38, 46, 52, 44, 47, 33, 34, 48], ItemID.brokenherosword);



IDRegistry.genItemID("exalibur");
Item.createItem("exalibur", "§1 Экскалибур §r \n 40 урон", {name: "exalibur", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("exalibur", {durability: 3400, level: 4, efficiency: 8, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.exalibur, "exalibur", ToolType.sword);



IDRegistry.genItemID("ancientark");
Item.createItem("ancientark", "§1 Ковчег древних §r \n 72 урон \n §1 Когда вы держите этот меч, вы чувствуете что-то... \n что-то неземное...", {name: "ancientark", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ancientark", {durability: 3400, level: 4, efficiency: 8, damage: 72, enchantability: 14});
ToolAPI.setTool(ItemID.ancientark, "ancientark", ToolType.sword);



IDRegistry.genItemID("trueexalibur");
Item.createItem("trueexalibur", "§1 Истинный экскалибур §r \n 45 урон", {name: "trueexalibur", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("trueexalibur", {durability: 3400, level: 4, efficiency: 8, damage: 45, enchantability: 14});
ToolAPI.setTool(ItemID.trueexalibur, "trueexalibur", ToolType.sword);



IDRegistry.genItemID("herosword");
Item.createItem("herosword", "§a Меч героя §r \n 6 урон", {name: "herosword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("herosword", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.herosword, "herosword", ToolType.sword);



IDRegistry.genItemID("trueancientark");
Item.createItem("trueancientark", "§1 Истинный ковчег древних §r \n 85 урон \n §1 И снова то чувство... оно стало сильнее...", {name: "trueancientark", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("trueancientark", {durability: 3400, level: 4, efficiency: 8, damage: 95, enchantability: 14});
ToolAPI.setTool(ItemID.trueancientark, "trueancientark", ToolType.sword);



IDRegistry.genItemID("elementalark");
Item.createItem("elementalark", "§1 Ковчег элементов §r \n 110 урон \n §1 Вы чувствуете что совсем близко к чему то... \n Чему то неземному, космическому, великому...", {name: "elementalark", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("elementalark", {durability: 3400, level: 4, efficiency: 8, damage: 110, enchantability: 14});
ToolAPI.setTool(ItemID.elementalark, "elementalark", ToolType.sword);



IDRegistry.genItemID("biomesword");
Item.createItem("biomesword", "§a Клинок биомов §r \n 15 урон ", {name: "biomesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("biomesword", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.biomesword, "biomesword", ToolType.sword);



IDRegistry.genItemID("truebiomesword");
Item.createItem("truebiomesword", "§a Истинный клинок биомов §r \n 38 урон ", {name: "truebiomesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("truebiomesword", {durability: 3400, level: 4, efficiency: 8, damage: 38, enchantability: 14});
ToolAPI.setTool(ItemID.truebiomesword, "truebiomesword", ToolType.sword);



IDRegistry.genItemID("omegabiomesword");
Item.createItem("omegabiomesword", "§a Омега клинок биомов §r \n 49 урон ", {name: "omegabiomesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("omegabiomesword", {durability: 3400, level: 4, efficiency: 8, damage: 49, enchantability: 14});
ToolAPI.setTool(ItemID.omegabiomesword, "omegabiomesword", ToolType.sword);

EssenceAPI.registerPlayerAttackEffect(ItemID.exalibur, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.trueexalibur, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.ancientark, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.trueancientark, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.elementalark, .5, 7);



IDRegistry.genItemID("muramasa");
Item.createItem("muramasa", "§a Мурамаса §r \n 10 урон ", {name: "muramasa", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("muramasa", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.muramasa, "muramasa", ToolType.sword);
EssenceAPI.registerDropEntity(32, ItemID.muramasa, .02)

IDRegistry.genItemID("murasama");
Item.createItem("murasama", "§a Мурасама §r \n 15 урон ", {name: "murasama", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("murasama", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.murasama, "murasama", ToolType.sword);



IDRegistry.genItemID("rootenbroadsword");
Item.createItem("rootenbroadsword", "§a Гнилой тесак §r \n 5 урон ", {name: "rootenbroadsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("rootenbroadsword", {durability: 3400, level: 4, efficiency: 8, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.rootenbroadsword, "rootenbroadsword", ToolType.sword);
EssenceAPI.registerDropEntity(32, ItemID.rootenbroadsword, 1)



IDRegistry.genItemID("taigasword");
Item.createItem("taigasword", "§a Меч тайги §r \n 6 урон ", {name: "taigasword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("taigasword", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.taigasword, "taigasword", ToolType.sword);



IDRegistry.genItemID("krackenkatana");
Item.createItem("krackenkatana", "§a Катана Кракена §r \n 138 урон ", {name: "krackenkatana", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("krackenkatana", {durability: 3400, level: 4, efficiency: 8, damage: 138, enchantability: 14});
ToolAPI.setTool(ItemID.krackenkatana, "krackenkatana", ToolType.sword);



IDRegistry.genItemID("krackenblade");
Item.createItem("krackenblade", "§a Лезвие Кракена §r \n 145 урон ", {name: "krackenblade", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("krackenblade", {durability: 3400, level: 4, efficiency: 8, damage: 145, enchantability: 14});
ToolAPI.setTool(ItemID.krackenblade, "krackenblade", ToolType.sword);



IDRegistry.genItemID("grandbiomesword");
Item.createItem("grandbiomesword", "§1 Великий клинок биома §r \n 200 урон ", {name: "grandbiomesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("grandbiomesword", {durability: 3400, level: 4, efficiency: 8, damage: 200, enchantability: 14});
ToolAPI.setTool(ItemID.grandbiomesword, "grandbiomesword", ToolType.sword);

EssenceAPI.registerPlayerAttackEffect(ItemID.grandbiomesword, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.aersword, .5, 25);
EssenceAPI.registerPlayerAttackEffect(ItemID.aquasword, .5, 19);
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Entity.getCarriedItem(player);
if (item.id == ItemID.ignissword){ 
Entity.setFire(victim, 200);
}
});



IDRegistry.genItemID("elementalsword");
Item.createItem("elementalsword", "§1 Меч элементов §r \n 200 урон ", {name: "elementalsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("elementalsword", {durability: 3400, level: 4, efficiency: 8, damage: 200, enchantability: 14});
ToolAPI.setTool(ItemID.elementalsword, "elementalsword", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.elementalsword, .5, 7);



IDRegistry.genItemID("ArsenalGuardian");
Item.createItem("ArsenalGuardian", "§b Меч из нисших миров", {name: "ArsenalGuardian", meta: 0}, {stack: 1});



IDRegistry.genItemID("swordofDNil");
Item.createItem("swordofDNil", "§a Меч дельты Нила §r \n 10 урон ", {name: "swordofDNil", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("swordofDNil", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.swordofDNil, "swordofDNil", ToolType.sword);
EssenceAPI.registerDropEntity(47,ItemID.swordofDNil, 3)

IDRegistry.genItemID("ahalalui");
Item.createItem("ahalalui", "§a Ахалалуи §r \n 10 урон ", {name: "ahalalui", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ahalalui", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.ahalalui, "ahalalui", ToolType.sword);
EssenceAPI.registerDropEntity(47,ItemID.ahalalui, 3)

IDRegistry.genItemID("kartzon");
Item.createItem("kartzon", "§1 Картзон§r \n 40 урон \n Копает в диаметре 5 метров", {name: "kartzon", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("kartzon", {durability: 3400, level: 4, efficiency: 8, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.kartzon, "kartzon", ToolType.sword);
EssenceAPI.registerDropEntity(47,ItemID.kartzon, .01)
EssenceAPI.registerPlayerAttackEffect(ItemID.kartzon, .5, 7);
Callback.addCallback("DestroyBlock", function(coords, block, player){
if(Entity.getCarriedItem(player).id==ItemID.kartzon)
{
x = coords.x;
y = coords.y;
z = coords.z;
let bs = BlockSource.getDefaultForActor(player);
bs.destroyBlock(x, y-2, z, true);
bs.destroyBlock(x+2, y-2, z-2, true);
bs.destroyBlock(x+2, y-2, z-1, true);
bs.destroyBlock(x+2, y-2, z, true);
bs.destroyBlock(x+2, y-2, z+1, true);
bs.destroyBlock(x+2, y-2, z+2, true);

bs.destroyBlock(x+1, y-2, z-2, true);
bs.destroyBlock(x+1, y-2, z-1, true);
bs.destroyBlock(x+1, y-2, z, true);
bs.destroyBlock(x+1, y-2, z+1, true);
bs.destroyBlock(x+1, y-2, z+2, true);

bs.destroyBlock(x, y-2, z-2, true);
bs.destroyBlock(x, y-2, z-1, true);
bs.destroyBlock(x, y-2, z, true);
bs.destroyBlock(x, y-2, z+1, true);
bs.destroyBlock(x, y-2, z+2, true);

bs.destroyBlock(x-1, y-2, z-2, true);
bs.destroyBlock(x-1, y-2, z-1, true);
bs.destroyBlock(x-1, y-2, z, true);
bs.destroyBlock(x-1, y-2, z+1, true);
bs.destroyBlock(x-1, y-2, z+2, true);

bs.destroyBlock(x-2, y-2, z-2, true);
bs.destroyBlock(x-2, y-2, z-1, true);
bs.destroyBlock(x-2, y-2, z, true);
bs.destroyBlock(x-2, y-2, z+1, true);
bs.destroyBlock(x-2, y-2, z+2, true);

//00000

bs.destroyBlock(x+2, y-1, z-2, true);
bs.destroyBlock(x+2, y-1, z-1, true);
bs.destroyBlock(x+2, y-1, z, true);
bs.destroyBlock(x+2, y-1, z+1, true);
bs.destroyBlock(x+2, y-1, z+2, true);

bs.destroyBlock(x+1, y-1, z-2, true);
bs.destroyBlock(x+1, y-1, z-1, true);
bs.destroyBlock(x+1, y-1, z, true);
bs.destroyBlock(x+1, y-1, z+1, true);
bs.destroyBlock(x+1, y-1, z+2, true);

bs.destroyBlock(x, y-1, z-2, true);
bs.destroyBlock(x, y-1, z-1, true);
bs.destroyBlock(x, y-1, z, true);
bs.destroyBlock(x, y-1, z+1, true);
bs.destroyBlock(x, y-1, z+2, true);

bs.destroyBlock(x-1, y-1, z-2, true);
bs.destroyBlock(x-1, y-1, z-1, true);
bs.destroyBlock(x-1, y-1, z, true);
bs.destroyBlock(x-1, y-1, z+1, true);
bs.destroyBlock(x-1, y-1, z+2, true);

bs.destroyBlock(x-2, y-1, z-2, true);
bs.destroyBlock(x-2, y-1, z-1, true);
bs.destroyBlock(x-2, y-1, z, true);
bs.destroyBlock(x-2, y-1, z+1, true);
bs.destroyBlock(x-2, y-1, z+2, true);

//хххххххххххххх

bs.destroyBlock(x+2, y, z-2, true);
bs.destroyBlock(x+2, y, z-1, true);
bs.destroyBlock(x+2, y, z, true);
bs.destroyBlock(x+2, y, z+1, true);
bs.destroyBlock(x+2, y, z+2, true);

bs.destroyBlock(x+1, y, z-2, true);
bs.destroyBlock(x+1, y, z-1, true);
bs.destroyBlock(x+1, y, z, true);
bs.destroyBlock(x+1, y, z+1, true);
bs.destroyBlock(x+1, y, z+2, true);

bs.destroyBlock(x, y, z-2, true);
bs.destroyBlock(x, y, z-1, true);
bs.destroyBlock(x, y, z, true);
bs.destroyBlock(x, y, z+1, true);
bs.destroyBlock(x, y, z+2, true);

bs.destroyBlock(x-1, y, z-2, true);
bs.destroyBlock(x-1, y, z-1, true);
bs.destroyBlock(x-1, y, z, true);
bs.destroyBlock(x-1, y, z+1, true);
bs.destroyBlock(x-1, y, z+2, true);

bs.destroyBlock(x-2, y, z-2, true);
bs.destroyBlock(x-2, y, z-1, true);
bs.destroyBlock(x-2, y, z, true);
bs.destroyBlock(x-2, y, z+1, true);
bs.destroyBlock(x-2, y, z+2, true);

//77777777777

bs.destroyBlock(x+2, y+1, z-2, true);
bs.destroyBlock(x+2, y+1, z-1, true);
bs.destroyBlock(x+2, y+1, z, true);
bs.destroyBlock(x+2, y+1, z+1, true);
bs.destroyBlock(x+2, y+1, z+2, true);

bs.destroyBlock(x+1, y+1, z-2, true);
bs.destroyBlock(x+1, y+1, z-1, true);
bs.destroyBlock(x+1, y+1, z, true);
bs.destroyBlock(x+1, y+1, z+1, true);
bs.destroyBlock(x+1, y+1, z+2, true);

bs.destroyBlock(x, y+1, z-2, true);
bs.destroyBlock(x, y+1, z-1, true);
bs.destroyBlock(x, y+1, z, true);
bs.destroyBlock(x, y+1, z+1, true);
bs.destroyBlock(x, y+1, z+2, true);

bs.destroyBlock(x-1, y+1, z-2, true);
bs.destroyBlock(x-1, y+1, z-1, true);
bs.destroyBlock(x-1, y+1, z, true);
bs.destroyBlock(x-1, y+1, z+1, true);
bs.destroyBlock(x-1, y+1, z+2, true);

bs.destroyBlock(x-2, y+1, z-2, true);
bs.destroyBlock(x-2, y+1, z-1, true);
bs.destroyBlock(x-2, y+1, z, true);
bs.destroyBlock(x-2, y+1, z+1, true);
bs.destroyBlock(x-2, y+1, z+2, true);

//666999

bs.destroyBlock(x+2, y+2, z-2, true);
bs.destroyBlock(x+2, y+2, z-1, true);
bs.destroyBlock(x+2, y+2, z, true);
bs.destroyBlock(x+2, y+2, z+1, true);
bs.destroyBlock(x+2, y+2, z+2, true);

bs.destroyBlock(x+1, y+2, z-2, true);
bs.destroyBlock(x+1, y+2, z-1, true);
bs.destroyBlock(x+1, y+2, z, true);
bs.destroyBlock(x+1, y+2, z+1, true);
bs.destroyBlock(x+1, y+2, z+2, true);

bs.destroyBlock(x, y+2, z-2, true);
bs.destroyBlock(x, y+2, z-1, true);
bs.destroyBlock(x, y+2, z, true);
bs.destroyBlock(x, y+2, z+1, true);
bs.destroyBlock(x, y+2, z+2, true);

bs.destroyBlock(x-1, y+2, z-2, true);
bs.destroyBlock(x-1, y+2, z-1, true);
bs.destroyBlock(x-1, y+2, z, true);
bs.destroyBlock(x-1, y+2, z+1, true);
bs.destroyBlock(x-1, y+2, z+2, true);

bs.destroyBlock(x-2, y+2, z-2, true);
bs.destroyBlock(x-2, y+2, z-1, true);
bs.destroyBlock(x-2, y+2, z, true);
bs.destroyBlock(x-2, y+2, z+1, true);
bs.destroyBlock(x-2, y+2, z+2, true);
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



IDRegistry.genItemID("astral");
Item.createItem("astral", "§a Астрал §r \n 280 урон ", {name: "astral", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("astral", {durability: 3400, level: 4, efficiency: 8, damage: 280, enchantability: 14});
ToolAPI.setTool(ItemID.astral, "astral", ToolType.sword);

IDRegistry.genItemID("heavensword");
Item.createItem("heavensword", "§1 Меч Гавани §r \n 300 урон ", {name: "heavensword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("heavensword", {durability: 3400, level: 4, efficiency: 8, damage: 300, enchantability: 14});
ToolAPI.setTool(ItemID.heavensword, "heavensword", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.aersword, .5, 7);



IDRegistry.genItemID("jackbomb");
Item.createThrowableItem("jackbomb", "§a Взрывная бомба Джека §r \n 100 урон \n Метательное оружие", {name:"jackbomb"}, {stack:64});

Item.registerThrowableFunction("jackbomb", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 100);
} 
} 
);

IDRegistry.genItemID("rdrill");
Item.createItem("rdrill", "§a Раздаточная дробилка §r \n 330 урон ", {name: "rdrill", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("rdrill", {durability: 3400, level: 4, efficiency: 8, damage: 330, enchantability: 14});
ToolAPI.setTool(ItemID.rdrill, "rdrill", ToolType.sword);

IDRegistry.genItemID("earther");
Item.createItem("earther", "§1 Землянин §r \n 400 урон ", {name: "earther", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("earther", {durability: 3400, level: 4, efficiency: 8, damage: 330, enchantability: 14});
ToolAPI.setTool(ItemID.earther, "earther", ToolType.sword);

EssenceAPI.registerPlayerAttackEffect(ItemID.earther, .5, 7);

IDRegistry.genItemID("starevil");
Item.createItem("starevil", "§1 Гнев звездных богов §r \n 390 урон ", {name: "starevil", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("starevil", {durability: 3400, level: 4, efficiency: 8, damage: 390, enchantability: 14});
ToolAPI.setTool(ItemID.starevil, "starevil", ToolType.sword);

EssenceAPI.registerPlayerAttackEffect(ItemID.starevil, .5, 7);

IDRegistry.genItemID("meowmere");
Item.createItem("meowmere", "§1 Мяумур §r \n 420 урон ", {name: "meowmere", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("meowmere", {durability: 3400, level: 4, efficiency: 8, damage: 420, enchantability: 14});
ToolAPI.setTool(ItemID.meowmere, "meowmere", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.meowmere, .5, 7);

IDRegistry.genItemID("murrrsama");
Item.createItem("murrrsama", "§1 Мурррсама §r \n 450 урон ", {name: "murrrsama", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("murrrsama", {durability: 3400, level: 4, efficiency: 8, damage: 450, enchantability: 14});
ToolAPI.setTool(ItemID.murrrsama, "murrrsama", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.murrrsama, .5, 7);



IDRegistry.genItemID("hollycollider");
Item.createItem("hollycollider", "§1 Священный коллайдер §r \n 480 урон ", {name: "hollycollider", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("hollycollider", {durability: 3400, level: 4, efficiency: 8, damage: 480, enchantability: 14});
ToolAPI.setTool(ItemID.hollycollider, "hollycollider", ToolType.sword);

IDRegistry.genItemID("heatedamputation");
Item.createItem("heatedamputation", "§1 Расплавленный ампутатор §r \n 470 урон ", {name: "heatedamputation", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("heatedamputation", {durability: 3400, level: 4, efficiency: 8, damage: 470, enchantability: 14});
ToolAPI.setTool(ItemID.heatedamputation, "heatedamputation", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.hollycollider, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.heatedamputation, .5, 7);



IDRegistry.genItemID("ryusukesword");
Item.createItem("ryusukesword", "§1 Меч Рйусуке §r \n 490 урон \n Поджигает", {name: "ryusukesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ryusukesword", {durability: 3400, level: 4, efficiency: 8, damage: 470, enchantability: 14});
ToolAPI.setTool(ItemID.ryusukesword, "ryusukesword", ToolType.sword);

EssenceAPI.registerPlayerAttackEffect(ItemID.ryusukesword, .5, 7);
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Entity.getCarriedItem(player);
if (item.id == ItemID.ryusukesword){ 
Entity.setFire(victim, 1000);
}
});



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



IDRegistry.genItemID("dpickaxe");
Item.createItem("dpickaxe", "§1 Доблестная кирка §r \n 385 урон \n Эффективней веномусовой кирки в 2 раза", {name: "dpickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("d", {durability: 3400, level: 12, efficiency: 16, damage: 385, enchantability: 14});
ToolAPI.setTool(ItemID.dpickaxe, "d", ToolType.pickaxe);



IDRegistry.genItemID("exelsus");
Item.createItem("exelsus", "§1 Эксельсус §r \n 550 урон ", {name: "exelsus", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("exelsus", {durability: 3400, level: 4, efficiency: 8, damage: 550, enchantability: 14});
ToolAPI.setTool(ItemID.exelsus, "exelsus", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.exelsus, .5, 7);



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



IDRegistry.genItemID("Ark_of_the_Cosmos");
Item.createItem("Ark_of_the_Cosmos", "§1 Ковчег Космоса §r \n 845 урон §1 \n С помощью этого меча вы чувствуете связь с космосом... \n Вы чувствуете как приобретаете силу богов...", {name: "Ark_of_the_Cosmos", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("Ark_of_the_Cosmos", {durability: 3400, level: 4, efficiency: 8, damage: 845, enchantability: 14});
ToolAPI.setTool(ItemID.Ark_of_the_Cosmos, "Ark_of_the_Cosmos", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
if (item.id==ItemID.Ark_of_the_Cosmos)
{
Entity.addEffect(player, Native.PotionEffect.jump, 2, 1000)
Entity.addEffect(player, Native.PotionEffect.movementSpeed, 25, 1000)
Entity.addEffect(player, Native.PotionEffect.damageBoost, 10, 20)
Entity.addEffect(player, Native.PotionEffect.regeneration, 50, 1000)
Entity.addEffect(player, Native.PotionEffect.damageResistance, 50, 1000)

}
});



IDRegistry.genItemID("Omikrone_Ark_of_the_Cosmos");
Item.createItem("Omikrone_Ark_of_the_Cosmos", "§1 Омикроновый Ковчег Космоса §r \n 900 урон §1 \n С помощью этого меча вы чувствуете связь с космосом... \n Вы чувствуете как приобретаете силу богов...\n§4 Усилен древним металлом", {name: "Omikrone_Ark_of_the_Cosmos", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("Omikrone_Ark_of_the_Cosmos", {durability: 3400, level: 4, efficiency: 8, damage: 900, enchantability: 14});
ToolAPI.setTool(ItemID.Omikrone_Ark_of_the_Cosmos, "Omikrone_Ark_of_the_Cosmos", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
if (item.id==ItemID.Omikrone_Ark_of_the_Cosmos)
{
Entity.addEffect(player, Native.PotionEffect.jump, 4, 1000)
Entity.addEffect(player, Native.PotionEffect.movementSpeed, 25, 1000)
Entity.addEffect(player, Native.PotionEffect.damageBoost, 50, 20)
Entity.addEffect(player, Native.PotionEffect.regeneration, 100, 1000)
Entity.addEffect(player, Native.PotionEffect.damageResistance, 100, 1000)

}
});



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



IDRegistry.genItemID("truepaladinhammer");
Item.createItem("truepaladinhammer", "§1 Истинный молот паладина §r \n 400 урон ", {name: "truepaladinhammer", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("truepaladinhammer", {durability: 3400, level: 4, efficiency: 8, damage: 400, enchantability: 14});
ToolAPI.setTool(ItemID.truepaladinhammer, "truepaladinhammer", ToolType.sword);



IDRegistry.genItemID("lightningbolt");
Item.createItem("lightningbolt", "§a Φωτιά του Δία §r \n 310 урон", {name: "lightningbolt", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("lightningbolt", {durability: 3400, level: 4, efficiency: 8, damage: 310, enchantability: 14});
ToolAPI.setTool(ItemID.lightningbolt, "lightningbolt", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Entity.getCarriedItem(player);
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
let item = Entity.getCarriedItem(player);
if (item.id == ItemID.krslsword){ 
Entity.setFire(victim, 1000);
}
});

IDRegistry.genItemID("oahusword");
Item.createItem("oahusword", "§a Потерянный меч §r \n 350 урон \n Стреляет молниями", {name: "oahusword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("oahusword", {durability: 3400, level: 4, efficiency: 8, damage: 350, enchantability: 14});
ToolAPI.setTool(ItemID.oahusword, "oahusword", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Entity.getCarriedItem(player);
if (item.id == ItemID.oahusword){ 
 var coords = Entity.getPosition(victim);
BlockSource.getDefaultForActor(player).spawnEntity(coords.x, coords.y, coords.z, 93);
 }
});

IDRegistry.genItemID("ptahstaff");
Item.createItem("ptahstaff", "Посох Анкха \n Призывает голема", {name: "ptahstaff", meta: 0}, {stack: 64});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Entity.getCarriedItem(player);
if (item.id == ItemID.ptahstaff){ 
 var coords = Entity.getPosition(victim);
BlockSource.getDefaultForActor(player).spawnEntity(coords.x, coords.y, coords.z, 20);
 }
});



IDRegistry.genItemID("firefalls");
Item.createItem("firefalls", "Тлеющие небеса", {name: "firefalls", meta: 0}, {stack: 64});



Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
if(item.id==ItemID.firefalls){
let region = BlockSource.getDefaultForActor(player)


var ent = region.spawnEntity(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.1, 0);

var et = region.spawnEntity(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.1, 0);

var en = region.spawnEntity(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.1, 0);

var egh = region.spawnEntity(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.1, 0);

var n = region.spawnEntity(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.1, 0);
var er = region.spawnEntity(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.1, 0);

var em = region.spawnEntity(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.1, 0);

var ep = region.spawnEntity(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.1, 0);

var emi = region.spawnEntity(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.1, 0);
var epo = region.spawnEntity(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.1, 0);

var ezi = region.spawnEntity(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.1, 0);
var elj = region.spawnEntity(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.1, 0);
var etk = region.spawnEntity(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.1, 0);
var esk = region.spawnEntity(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.1, 0);

}});



IDRegistry.genItemID("verumazatot");
Item.createItem("verumazatot", "§1 እውነት ነው  Азатот §r \n 1500 урон ", {name: "verumazatot", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("verumazatot", {durability: 3400, level: 4, efficiency: 8, damage: 900, enchantability: 14});
ToolAPI.setTool(ItemID.verumazatot, "verumazatot", ToolType.sword);

Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
if(item.id==ItemID.verumazatot){
let region = BlockSource.getDefaultForActor(player)

var ent = region.spawnEntity(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.1, 0);

var et = region.spawnEntity(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.1, 0);

var en = region.spawnEntity(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.1, 0);

var egh = region.spawnEntity(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.1, 0);

var n = region.spawnEntity(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.1, 0);
var er = region.spawnEntity(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.1, 0);

var em = region.spawnEntity(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.1, 0);

var ep = region.spawnEntity(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.1, 0);

var emi = region.spawnEntity(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.1, 0);
var epo = region.spawnEntity(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.1, 0);

var ezi = region.spawnEntity(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.1, 0);
var elj = region.spawnEntity(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.1, 0);
var etk = region.spawnEntity(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.1, 0);
var esk = region.spawnEntity(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.1, 0);

}});



Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Entity.getCarriedItem(player);
if (item.id == ItemID.verumazatot){ 
 var coords = Entity.getPosition(victim);
 let region = BlockSource.getDefaultForActor(player)
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
 }
});



IDRegistry.genItemID("otherplanet");
Item.createItem("otherplanet", "§1 Внеземной §r \n 2000 урон ", {name: "otherplanet", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("otherplanet", {durability: 3400, level: 4, efficiency: 8, damage: 2000, enchantability: 14});
ToolAPI.setTool(ItemID.otherplanet, "otherplanet", ToolType.sword);

Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
if(item.id==ItemID.otherplanet){
let region = BlockSource.getDefaultForActor(player)
var ent = Entity.spawn(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.1, 0);
var et = region.spawnEntity(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.1, 0);
var en = region.spawnEntity(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.1, 0);
var egh = region.spawnEntity(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.1, 0);
var n = region.spawnEntity(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.1, 0);
var er = region.spawnEntity(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.1, 0);
var em = region.spawnEntity(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.1, 0);
var ep = region.spawnEntity(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.1, 0);
var emi = region.spawnEntity(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.1, 0);
var epo = region.spawnEntity(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.1, 0);
var ezi = region.spawnEntity(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.1, 0);
var elj = region.spawnEntity(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.1, 0);
var etk = region.spawnEntity(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.1, 0);
var esk = region.spawnEntity(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.1, 0);
}});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Entity.getCarriedItem(player);
if (item.id == ItemID.otherplanet){ 
 let coords = Entity.getPosition(victim);
 let region = BlockSource.getDefaultForActor(player);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
 }
});

IDRegistry.genItemID("starkiller");
Item.createItem("starkiller", "§1 Погибель сверхновых §r \n 2100 урон ", {name: "starkiller", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("starkiller", {durability: 3400, level: 4, efficiency: 8, damage: 2500, enchantability: 14});
ToolAPI.setTool(ItemID.starkiller, "starkiller", ToolType.sword);

Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
if(item.id==ItemID.starkiller){
let region = BlockSource.getDefaultForActor(player);

var ent = region.spawnEntity(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.1, 0);
var et = region.spawnEntity(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.1, 0);
var en = region.spawnEntity(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.1, 0);
var egh = region.spawnEntity(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.1, 0);
var n = region.spawnEntity(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.1, 0);
var er = region.spawnEntity(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.1, 0);
var em = region.spawnEntity(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.1, 0);
var ep = region.spawnEntity(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.1, 0);
var emi = region.spawnEntity(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.1, 0);
var epo = region.spawnEntity(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.1, 0);
var ezi = region.spawnEntity(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.1, 0);
var elj = region.spawnEntity(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.1, 0);
var etk = region.spawnEntity(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.1, 0);
var esk = region.spawnEntity(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.1, 0);
}});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Entity.getCarriedItem(player);
if (item.id == ItemID.starkiller){ 
 var coords = Entity.getPosition(victim);
let region = BlockSource.getDefaultForActor(player);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
region.spawnEntity(coords.x, coords.y, coords.z, 93);
 }
});
IDRegistry.genItemID("ankhsword");
Item.createItem("ankhsword", "§1 Меч Анкх §r \n 2000 урон ", {name: "ankhsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ankhsword", {durability: 3400, level: 4, efficiency: 8, damage: 2000, enchantability: 14});
ToolAPI.setTool(ItemID.ankhsword, "ankhsword", ToolType.sword);

IDRegistry.genItemID("True_Ark_of_the_Cosmos");
Item.createItem("True_Ark_of_the_Cosmos", "§6 Ковчег Космоса §r \n 30000 урон §6 \n Вы чувствуете связь с Мультивселенной...\n Вы чувствуете силу Арка проникающую в вас через этот меч...", {name: "Ark_of_the_Cosmos", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("True_Ark_of_the_Cosmos", {durability: 1000000, level: 30000, efficiency: 1000, damage: 30000, enchantability: 14});
ToolAPI.setTool(ItemID.True_Ark_of_the_Cosmos, "True_Ark_of_the_Cosmos", ToolType.sword);

IDRegistry.genItemID("TinEverestraSword");
Item.createItem("TinEverestraSword", "§2 Меч Вселенной §r \n 511111 урон", {name: "TinEverestraSword", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("TinEverestraSword", {durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111});
ToolAPI.setTool(ItemID.TinEverestraSword, "TinEverestraSword", ToolType.sword);



IDRegistry.genItemID("HellSword");
Item.createItem("HellSword", "§4 Меч Вселенной §r \n 511111 урон", {name: "HellSword", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("HellSword", {durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111});
ToolAPI.setTool(ItemID.HellSword, "HellSword", ToolType.sword);



IDRegistry.genItemID("EndSword");
Item.createItem("EndSword", "§5 Меч Вселенной §r \n 511111 урон", {name: "EndSword", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("EndSword", {durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111});
ToolAPI.setTool(ItemID.EndSword, "EndSword", ToolType.sword);




IDRegistry.genItemID("AzatothSword");
Item.createItem("AzatothSword", "§1 Меч Вселенной §r \n 511111 урон", {name: "AzatothSword", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("AzatothSword", {durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111});
ToolAPI.setTool(ItemID.AzatothSword, "AzatothSword", ToolType.sword);


IDRegistry.genItemID("AstralSworda");
Item.createItem("AstralSworda", "§d Меч Вселенной §r \n 511111 урон", {name: "AstralSworda", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("AstralSworda", {durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111});
ToolAPI.setTool(ItemID.AstralSworda, "AstralSworda", ToolType.sword);




IDRegistry.genItemID("MultiverseSword");
Item.createItem("MultiverseSword", "§6 Меч Мультивселенной §r \n 6495038 урон", {name: "MultiverseSword", meta: 0}, {isTech: true}, {stack: 1});
ToolAPI.addToolMaterial("MultiverseSword", {durability: 6495038, level: 6495038, efficiency: 6495038, damage: 6495038, enchantability: 6495038});
ToolAPI.setTool(ItemID.MultiverseSword, "MultiverseSword", ToolType.sword);




