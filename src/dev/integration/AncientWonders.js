ModAPI.addAPICallback("AncientWondersAPI", function(api){
	const AncientWonders = api.AncientWonders;
	const MagicCore = api.MagicCore;
	const Wands = api.Wands;
	//удвоение стоимости активации всех свитков
	(function(){
		let srolls = Object.keys(Wands.prot);
		for(let id in srolls){
			let parameters = Object.keys(Wands.prot[srolls[id]].activate);
			for(let parameter in parameters){
				if(parameter != "aspects")
					Wands.prot[srolls[id]].activate[parameters[parameter]] = Wands.prot[srolls[id]].activate[parameters[parameter]]*2;
			}
		}
	})();
	//удвоение параметров класса
	//magic
  AncientWonders.addParameterRegister("mage", "magic", 0, 200, 0)
  AncientWonders.addParameterRegister("warrior", "magic", 0, 30, 0)
  api.AncientWonders.addParameterRegister("necromancer", "magic", 0, 100, 0);
   
  //protection 
  AncientWonders.addParameterRegister("mage", "protection", 0, 80, 0)
  AncientWonders.addParameterRegister("warrior", "protection", 0, 200, 0)
  api.AncientWonders.addParameterRegister("necromancer", "protection", 0, 60, 0)
   
  //necromancer 
  AncientWonders.addParameterRegister("mage", "necromancer", 0, 20, 0)
  AncientWonders.addParameterRegister("warrior", "necromancer", 0, 10, 0)
  AncientWonders.addParameterRegister("necromancer", "necromancer", 0, 200, 0)
   
	//damage type
	function attack(ent, fire, wate, earth, aer, orgDmg, dmg, arm){
		let damage = orgDmg;
		if(arm["fire"])
			damage -= (orgDmg-dmg) - (dmg/fire)
		if(arm["wate"])
			damage -= (orgDmg-dmg) - (dmg/wate)
		if(arm["earth"])
			damage -= (orgDmg-dmg) - (dmg/earth)
		if(arm["aer"])
			damage -= (orgDmg-dmg) - (dmg/aer)
		if(damage >= 1)
			Entity.damageEntity(ent, damage);
	}
	MagicCore.registerArmorMagicType("wate", {
		damage(ent, type, orgDmg, dmg, arm){
			attack(ent, 1, .1, .1, .4, orgDmg, dmg, arm)
		}
	});
	MagicCore.registerArmorMagicType("earth",
{
		damage(ent, type, orgDmg, dmg, arm){
			attack(ent, .2, 0, .1, 1, orgDmg, dmg, arm)
		}
	});
	MagicCore.registerArmorMagicType("fire", {
		damage(ent, type, orgDmg, dmg, arm){
			attack(ent, .9, .1, 1, .5, orgDmg, dmg, arm)
		}
	});
	MagicCore.registerArmorMagicType("aer", {
		damage(ent, type, orgDmg, dmg, arm){
			attack(ent, .6, 1, .1, .2, orgDmg, dmg, arm)
		}
	});
   
  //armor aer
  MagicCore.setArmor(ItemID.aerhelmet, "magic", 40);
  MagicCore.setArmor(ItemID.aerchestplate, "magic", 40);
  MagicCore.setArmor(ItemID.aerleggings, "magic", 40);
  MagicCore.setArmor(ItemID.aerboots, "magic", 40);
  
  MagicCore.setArmorMagic(ItemID.aerhelmet, "aer", 1);
  MagicCore.setArmorMagic(ItemID.aerchestplate, "aer", 2);
  MagicCore.setArmorMagic(ItemID.aerleggings, "aer", 1);
  MagicCore.setArmorMagic(ItemID.aerboots, "aer", 1);
  
  
  //armor aqua
  MagicCore.setArmor(ItemID.aquahelmet, "magic", 40);
  MagicCore.setArmor(ItemID.aquachestplate, "magic", 40);
  MagicCore.setArmor(ItemID.aqualeggings, "magic", 40);
  MagicCore.setArmor(ItemID.aquaboots, "magic", 40);
  
  
  MagicCore.setArmorMagic(ItemID.aquahelmet, "aer", 1);
  MagicCore.setArmorMagic(ItemID.aquachestplate, "aer", 2);
  MagicCore.setArmorMagic(ItemID.aqualeggings, "aer", 1);
  MagicCore.setArmorMagic(ItemID.aquaboots, "aer", 1);
});
