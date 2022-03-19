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
      //slotCenter
      this.networkData.putInt("itemCenterId", this.container.getSlot("slotCenter").id);
      this.networkData.putInt("itemCenterData", this.container.getSlot("slotCenter").data);
      //slot0
      this.networkData.putInt("item0Id", this.container.getSlot("slot0").id);
      this.networkData.putInt("item0Data", this.container.getSlot("slot0").data);
      //slot1
      this.networkData.putInt("item1Id",   this.container.getSlot("slot1").id);
      this.networkData.putInt("item1Data", this.container.getSlot("slot1").data);
      //slot2
      this.networkData.putInt("item2Id",   this.container.getSlot("slot2").id);
      this.networkData.putInt("item2Data", this.container.getSlot("slot2").data);
      //slot3
      this.networkData.putInt("item3Id",   this.container.getSlot("slot3").id);
      this.networkData.putInt("item3Data", this.container.getSlot("slot3").data);
      //slot4
      this.networkData.putInt("item4Id",   this.container.getSlot("slot4").id);
      this.networkData.putInt("item4Data", this.container.getSlot("slot4").data);
      //slot5
      this.networkData.putInt("item5Id",   this.container.getSlot("slot5").id);
      this.networkData.putInt("item5Data", this.container.getSlot("slot5").data);
      //slot6
      this.networkData.putInt("item6Id",   this.container.getSlot("slot6").id);
      this.networkData.putInt("item6Data", this.container.getSlot("slot6").data);
      //slot7
      this.networkData.putInt("item7Id",   this.container.getSlot("slot7").id);
      this.networkData.putInt("item7Data", this.container.getSlot("slot7").data);

      this.networkData.sendChanges();
    };
    //Получение силы алтаря
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
    //Проверка рецепта
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
    //Крафт
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

  client:{
    updateModel: function() {
      //itemCenter
      let idCenter = Network.serverToLocalId(this.networkData.getInt("itemCenterId"));
      let dataCenter = this.networkData.getInt("itemCenterData");
      this.modelCenter.describeItem({
          id: idCenter, count: 1, data: dataCenter, size: 0.25
      });
      //item0
      let id0 = Network.serverToLocalId(this.networkData.getInt("item0Id"));
      let data0 = this.networkData.getInt("item0Data");
      this.model0.describeItem({
          id: id0, count: 1, data: data0, size: 0.1
      });
      //item1
      let id1 = Network.serverToLocalId(this.networkData.getInt("item1Id"));
      let data1 = this.networkData.getInt("item1Data");
      this.model1.describeItem({
          id: id1, count: 1, data: data1, size: 0.1
      });
      //item2
      let id2 = Network.serverToLocalId(this.networkData.getInt("item2Id"));
      let data2 = this.networkData.getInt("item2Data");
      this.model2.describeItem({
          id: id2, count: 1, data: data2, size: 0.1
      });
      //item3
      let id3 = Network.serverToLocalId(this.networkData.getInt("item3Id"));
      let data3 = this.networkData.getInt("item3Data");
      this.model3.describeItem({
          id: id3, count: 1, data: data3, size: 0.1
      });
      //item4
      let id4 = Network.serverToLocalId(this.networkData.getInt("item4Id"));
      let data4 = this.networkData.getInt("item4Data");
      this.model4.describeItem({
          id: id4, count: 1, data: data4, size: 0.1
      });
      //item5
      let id5 = Network.serverToLocalId(this.networkData.getInt("item5Id"));
      let data5 = this.networkData.getInt("item5Data");
      this.model5.describeItem({
          id: id5, count: 1, data: data5, size: 0.1
      });
      //item6
      let id6 = Network.serverToLocalId(this.networkData.getInt("item6Id"));
      let data6 = this.networkData.getInt("item6Data");
      this.model6.describeItem({
          id: id6, count: 1, data: data6, size: 0.1
      });
      //item7
      let id7 = Network.serverToLocalId(this.networkData.getInt("item7Id"));
      let data7 = this.networkData.getInt("item7Data");
      this.model7.describeItem({
          id: id7, count: 1, data: data7, size: 0.1
      });
    },

    load: function() {
      this.modelCenter = new Animation.Item(this.x + .5, this.y + 1.5, this.z + .5);
      this.model0 = new Animation.Item(this.x + .5, this.y + 1.5, this.z + .5);
      this.model1 = new Animation.Item(this.x + .5, this.y + 1.5, this.z + .5);
      this.model2 = new Animation.Item(this.x + .5, this.y + 1.5, this.z + .5);
      this.model3 = new Animation.Item(this.x + .9375, this.y + 1.5, this.z + .9375);
      this.model4 = new Animation.Item(this.x, this.y + 1.5, this.z + 1.125);
      this.model5 = new Animation.Item(this.x + .0625, this.y + 1.5, this.z + .9375);
      this.model6 = new Animation.Item(this.x - .125, this.y + 1.5, this.z);
      this.model7 = new Animation.Item(this.x + .0625, this.y + 1.5, this.z + .0625);
      this.updateModel();
      this.modelCenter.load();
      this.model0.load();
      this.model1.load();
      this.model2.load();
      this.model3.load();
      this.model4.load();
      this.model5.load();
      this.model6.load();
      this.model7.load();

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
    }
  },

});
