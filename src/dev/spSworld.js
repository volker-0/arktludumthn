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


