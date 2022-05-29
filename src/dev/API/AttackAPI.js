AttackAPI ={
  Attack:[

  ],
  VoidAttack:[

  ],
  RegisterAttack: function(id, data, def){
    this.Armor.push({id:id, data:data, def:def});
  },
  RegisterVoidAttack: function(id, data, def){
    this.Baubles.push({id:id, data:data, def:def});
  },
};