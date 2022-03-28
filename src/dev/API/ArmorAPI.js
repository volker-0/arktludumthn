var ArmorAPI ={
  RegisterArmor: function(id, def){
    Armor.registerOnHurtListener(id, function(item, slot, player, value, type){
      let absorption = Entity.getAttribute(player, "health");
      Game.message(`start ${absorption.getValue()}`);
      //absorption.setMaxValue(value);
      absorption.setValue(value+ 5);
      Game.message(`default ${absorption.getDefaultValue()}`);
      Game.message(`max ${absorption.getMaxValue()}`);
      Game.message(`min ${absorption.getMinValue()}`);
      Game.message(`end ${absorption.getValue()}`);
    })
  },
};

ArmorAPI.RegisterArmor(ItemID.aerchestplate, 10)