IDRegistry.genItemID("lifecrystal");
Item.createFoodItem("lifecrystal", "§e Кристалл жизни §1 \n 1еда \n Увеличивает жизни на 2", {name: "lifecrystal", meta: 0}, {food: 1});

Callback.addCallback("FoodEaten",function(heal, satRatio,player){
let Ph = Entity.getMaxHealth(player);
if(Entity.getCarriedItem(player).id==ItemID.lifecrystal){
Entity.setMaxHealth(player, Ph+2);    
if(Entity.getMaxHealth(player) == 40)return false    
}});

IDRegistry.genItemID("fireheart");
Item.createFoodItem("fireheart", "§e Живой огонь §1 \n 4 еды \n Увеличивает жизни на 4", {name: "fireheart", meta: 0}, {food: 4});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){
let Ph = Entity.getMaxHealth(player);
if(Entity.getCarriedItem(player).id==ItemID.fireheart){
Entity.setMaxHealth(player, Ph+4);    
if(Entity.getMaxHealth(player) == 40)return false    
}});




