var EssenceAPI = {
	registerDropEntity(idEntity, idEssence, countMax){
		countMax = countMax || 3;
		Callback.addCallback("EntityDeath", function(entity){
			if(Entity.getType(entity) == idEntity){
				let coords = Entity.getPosition(entity);
				let soul = parseInt(Math.random() * countMax);
				BlockSource.getDefaultForActor(entity).spawnDroppedItem(coords.x, coords.y, coords.z, idEssence, soul, 0, null);
			}
		});
	},
	registerDropEntityArr(idEntityArr, idEssence, countMax){
		countMax = countMax || 3;
		Callback.addCallback("EntityDeath", function(entity){
			if(idEntityArr.indexOf(Entity.getType(entity)) != -1){
				let coords = Entity.getPosition(entity);
				let soul = parseInt(Math.random() * countMax);
				BlockSource.getDefaultForActor(entity).spawnDroppedItem(coords.x, coords.y, coords.z, idEssence, soul, 0, null);
			}
		});
	},
	registerPlayerAttackEffect(id, random, idEffect, level, time){
		level = level || 1;
		time = time || 20;
		Callback.addCallback("PlayerAttack", function(player, victim){ 
			let item = Entity.getCarriedItem(player);
			if(item.id == id){ 
				if(Math.random() < random){ 	
					Entity.addEffect(victim, idEffect, level, time, true, true);
				}
			}
		});
	}
};