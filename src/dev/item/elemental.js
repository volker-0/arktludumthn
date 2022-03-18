IDRegistry.genItemID("elementalguardiansword");
Item.createItem("elementalguardiansword", "Меч Хранителя Элементов", {name: "elementalguardiansword", meta: 0}, {stack: 1}, {isTech: true});

IDRegistry.genItemID("elementalheart");
Item.createFoodItem("elementalheart", "§e Элементарное сердце §1 \n 6 еды \n Увеличивает жизни на 10", {name: "elementalheart", meta: 0}, {food: 6});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){
var Ph = Entity.getMaxHealth(player);
if(Entity.getCarriedItem(player).id==ItemID.elementalheart){
Entity.setMaxHealth(player, Ph+10);    
if(Entity.getMaxHealth(player) == 1000)return false    
}});
