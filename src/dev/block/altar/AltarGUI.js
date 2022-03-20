let AltarGui = new UI.StandardWindow({
  standard: {
    header: { text: { text: "Алтарь созидания" },color: android.graphics.Color.rgb(185, 142, 77) },
    inventory: { standard: true },
    background: {
      bitmap:"altar_background",
    }
  },
  params:{
    textures: {
    }
  },
  drawing: [
    { type: "bitmap", x: 0, y: 0, bitmap: "AltarStar", width: 999, height:600 }
  ],
  elements:{
    "slot0" : {type: "slot", x: 465, y: 20, size: 70, maxStackSize: 1},
    "slot1" : {type: "slot", x: 625, y: 40, size: 70, maxStackSize: 1},
    "slot2" : {type: "slot", x: 790, y: 265, size: 70, maxStackSize: 1},
    "slot3" : {type: "slot", x: 625, y: 480, size: 70, maxStackSize: 1},
    "slot4" : {type: "slot", x: 465, y: 510, size: 70, maxStackSize: 1},
    "slot5" : {type: "slot", x: 300, y: 480, size: 70, maxStackSize: 1},
    "slot6" : {type: "slot", x: 140, y: 265, size: 70, maxStackSize: 1},
    "slot7" : {type: "slot", x: 300, y: 40, size: 70, maxStackSize: 1},
    "slotCenter" : {type: "slot", x: 465, y: 265, size: 70, maxStackSize: 1},
    "AltarText" : {type: "text", x:0, y: 0, text: `Сила алтаря: 0`},
  }
});



TileEntity.registerPrototype(BlockID.creatoraltar, {
  useNetworkItemContainer: true,

  defaultValues:{
    isCraftng: false,
    CraftingTime: 100,
    CraftingItem: null,
    AltarPower: 0,
    RotationCenter: 0,
    Rotation0: 0,
    Rotation1: 0,
    Rotation2: 0,
    Rotation3: 0,
    Rotation4: 0,
    Rotation5: 0,
    Rotation6: 0,
    Rotation7: 0,
  },

  getScreenName: function(player, coords) {
    return "main";
},

  getScreenByName: function(screenName) {
    return AltarGui;
  },
  tick: function(){
    //Получение предметов в слотах
    if (World.getThreadTime() % 10 == 0) {
      this.networkData.putInt("itemCenterId", this.container.getSlot("slotCenter").id);
      this.networkData.putInt("itemCenterData", this.container.getSlot("slotCenter").data);
      for(let i =0; i<=7; i++){
        let slot = "slot"+i;
        let id = `item${i}Id`;
        let data = `item${i}Data`;
        this.networkData.putInt(id, this.container.getSlot(slot).id);
        this.networkData.putInt(data, this.container.getSlot(slot).data);
      };
    };
    if(World.getWorldTime()%20 == 0){
      //Получение силы алтаря
      this.GetAltarPower();
      //Проверка рецепта
      this.GetRecipe();
    };
    //Крафт
    if(this.data.isCraftng){
      this.data.CraftingTime--;
      this.Craft();
    };
    this.networkData.sendChanges();
  },

  GetAltarPower: function(){
    this.data.AltarPower = 0;
    let AltarSource = new BlockSource.getDefaultForDimension(this.dimension);
    let Structure;
    for (let i = 0; i < AltarBlocks.length; i++) {
      if(AltarSource.getBlock(this.x + AltarBlocks[i].x, this.y + AltarBlocks[i].y - 1, this.z + AltarBlocks[i].z).id in AltarAPI.AltarBase){
        Structure = true;
      }else{
        Structure = false;
        break;
      };
    };
    if(Structure){
      for(let key in AltarAPI.AltarBase){
        if(AltarSource.getBlock(this.x, this.y - 1, this.z).id == key){
          this.data.AltarPower += AltarAPI.AltarBase[key];
          break;
        };
      };
      for (let i = 0; i < AltarCatalizator.length; i++) {
        if(AltarSource.getBlock(this.x + AltarCatalizator[i].x, this.y + AltarCatalizator[i].y, this.z + AltarCatalizator[i].z).id in AltarAPI.Catalizator){
          for(let key in AltarAPI.Catalizator){
            if(AltarSource.getBlock(this.x + AltarCatalizator[i].x, this.y + AltarCatalizator[i].y, this.z + AltarCatalizator[i].z).id == key){
              this.data.AltarPower += AltarAPI.Catalizator[key];
              break;
            };
          };
        };
      };
    };
    this.container.sendChanges();
    this.container.setText("AltarText", `Сила алтаря: ${this.data.AltarPower}`);
  },

  GetRecipe: function(){
    let itemsArr = [this.container.getSlot("slotCenter").id, this.container.getSlot("slot0").id, this.container.getSlot("slot1").id, this.container.getSlot("slot2").id, this.container.getSlot("slot3").id, this.container.getSlot("slot4").id, this.container.getSlot("slot5").id, this.container.getSlot("slot6").id, this.container.getSlot("slot7").id,];
    for(recipe in AltarAPI.Recipes){
      let copy = AltarAPI.Recipes[recipe];
      if(JSON.stringify(copy.items) == JSON.stringify(itemsArr)){
        if(this.data.AltarPower>= copy.energy){
          this.data.CraftingItem = recipe;
          this.data.isCraftng = true;
          break;
        };
      } else{
        this.data.isCraftng = false;
        this.data.CraftingTime = 100;
      };
    };
  },

  Craft:function(){
    if(this.data.CraftingTime <= 0){
      this.data.isCraftng = false;
      this.data.CraftingTime = 100;
      this.container.setSlot("slotCenter", this.container.getSlot("slotCenter").id, this.container.getSlot("slotCenter").count - 1, this.container.getSlot("slotCenter").data, this.container.getSlot("slotCenter").extra);
      for(let i =0; i<=7; i++){
        let name = "slot"+i;
        this.container.setSlot(name, this.container.getSlot(name).id, this.container.getSlot(name).count - 1, this.container.getSlot(name).data, this.container.getSlot(name).extra);
      };
      this.container.validateAll();
      this.container.setSlot("slotCenter", this.data.CraftingItem, 1, this.container.getSlot("slotCenter").data, this.container.getSlot("slotCentert").extra);
      this.container.sendChanges();
    };
  },

  client:{
    updateModel: function() {
      let idCenter = Network.serverToLocalId(this.networkData.getInt("itemCenterId"));
      let dataCenter = this.networkData.getInt("itemCenterData");
      this.modelCenter.describeItem({
          id: Network.serverToLocalId(this.networkData.getInt("itemCenterId")), count: 1, data: this.networkData.getInt("itemCenterData"), size: 0.4
      });
      for(let i =0; i<=7; i++){
        let name = "model"+i;
        let copy = this[name];
        copy.loadCustom(function(){
          this.setItemRotation(this.__rotation[0], this.__rotation[1] + Math.PI/30, this.__rotation[2]);
          this.refresh();
        });
      };
    },

    load: function() {
      this.modelCenter = new Animation.Item(this.x + .5, this.y + 1.23, this.z + .5);
      this.model0 = new Animation.Item(this.x + .5, this.y + 1.29, this.z - 0.125);
      this.model1 = new Animation.Item(this.x + .9375, this.y + 1.25, this.z + .0625);
      this.model2 = new Animation.Item(this.x + 1.125, this.y + 1.29, this.z + .5);
      this.model3 = new Animation.Item(this.x + .9375, this.y + 1.25, this.z + .9375);
      this.model4 = new Animation.Item(this.x + .5, this.y + 1.29, this.z + 1.125);
      this.model5 = new Animation.Item(this.x + .0625, this.y + 1.25, this.z + .9375);
      this.model6 = new Animation.Item(this.x - 0.125, this.y + 1.29, this.z + .5);
      this.model7 = new Animation.Item(this.x + .0625, this.y + 1.25, this.z + .0625);
      this.updateModel();
      this.modelCenter.load();
      for(let i =0; i<=7; i++){
        let name = "model"+i;
        let copy = this[name];
        copy.load();
      };

      this.modelCenter.loadCustom(function(){
        this.setItemRotation(this.__rotation[0], this.__rotation[1] + Math.PI/50, this.__rotation[2]);
        this.refresh();
      });

      for(let i =0; i<=7; i++){
        let name = "model"+i;
        let copy = this[name];
        copy.loadCustom(function(){
          this.setItemRotation(this.__rotation[0], this.__rotation[1] + Math.PI/30, this.__rotation[2]);
          this.refresh();
        });
      };

      var that = this;
      this.networkData.addOnDataChangedListener(function(data, isExternal) {
          that.updateModel();
      });
    },

    unload: function() {
      this.modelCenter.destroy();
      this.model0.destroy();
      this.model1.destroy();
      this.model2.destroy();
      this.model3.destroy();
      this.model4.destroy();
      this.model5.destroy();
      this.model6.destroy();
      this.model7.destroy();
    },
  },

});
