let AltarGui = new UI.StandardWindow({
  standard: {
    header: { text: { text: "Алтарь созидания" } },
    inventory: { standard: true },
    background: { standart: true }
  },
  params:{
    textures: {
    }
  },
  drawing: [
    { type: "bitmap", x: 0, y: 0, bitmap: "altar_background", width: 1000, height:600 }
  ],
  elements:{
    "slot0" : {type: "slot", x: 465, y: 20, size: 70, maxStackSize: 1},
    "slot1" : {type: "slot", x: 675, y: 95, size: 70, maxStackSize: 1},
    "slot2" : {type: "slot", x: 790, y: 265, size: 70, maxStackSize: 1},
    "slot3" : {type: "slot", x: 675, y: 435, size: 70, maxStackSize: 1},
    "slot4" : {type: "slot", x: 465, y: 510, size: 70, maxStackSize: 1},
    "slot5" : {type: "slot", x: 255, y: 435, size: 70, maxStackSize: 1},
    "slot6" : {type: "slot", x: 140, y: 265, size: 70, maxStackSize: 1},
    "slot7" : {type: "slot", x: 255, y: 95, size: 70, maxStackSize: 1},
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
  },

  getScreenName: function(player, coords) {
    return "main";
},

  getScreenByName: function(screenName) {
    return AltarGui;
  },
  tick: function(){
    if(World.getWorldTime()%20 == 0){
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
    };
    if(this.data.isCraftng){
      this.data.CraftingTime--;
      if(this.data.CraftingTime <= 0){
        this.data.isCraftng = false;
        this.data.CraftingTime = 100;
        this.container.setSlot("slotCenter", this.container.getSlot("slotCenter").id, this.container.getSlot("slotCenter").count - 1, this.container.getSlot("slotCenter").data, this.container.getSlot("slotCenter").extra);
        this.container.setSlot("slot0", this.container.getSlot("slot0").id, this.container.getSlot("slot0").count - 1, this.container.getSlot("slot0").data, this.container.getSlot("slot0").extra);
        this.container.setSlot("slot1", this.container.getSlot("slot1").id, this.container.getSlot("slot1").count - 1, this.container.getSlot("slot1").data, this.container.getSlot("slot1").extra);
        this.container.setSlot("slot2", this.container.getSlot("slot2").id, this.container.getSlot("slot2").count - 1, this.container.getSlot("slot2").data, this.container.getSlot("slot2").extra);
        this.container.setSlot("slot3", this.container.getSlot("slot3").id, this.container.getSlot("slot3").count - 1, this.container.getSlot("slot3").data, this.container.getSlot("slot3").extra);
        this.container.setSlot("slot4", this.container.getSlot("slot4").id, this.container.getSlot("slot4").count - 1, this.container.getSlot("slot4").data, this.container.getSlot("slot4").extra);
        this.container.setSlot("slot5", this.container.getSlot("slot5").id, this.container.getSlot("slot5").count - 1, this.container.getSlot("slot5").data, this.container.getSlot("slot5").extra);
        this.container.setSlot("slot6", this.container.getSlot("slot6").id, this.container.getSlot("slot6").count - 1, this.container.getSlot("slot6").data, this.container.getSlot("slot6").extra);
        this.container.setSlot("slot7", this.container.getSlot("slot7").id, this.container.getSlot("slot7").count - 1, this.container.getSlot("slot7").data, this.container.getSlot("slot7").extra);
        this.container.validateAll();
        this.container.setSlot("slotCenter", this.data.CraftingItem, 1, this.container.getSlot("slotCenter").data, this.container.getSlot("slotCentert").extra);
        this.container.sendChanges();
      }
    }
  },

});
