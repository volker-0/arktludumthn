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
    "slotCenter" : {type: "slot", x: 465, y: 265, size: 70, maxStackSize: 1}
  }
});

//x 465  y 20
//

TileEntity.registerPrototype(BlockID.creatoraltar, {
  useNetworkItemContainer: true,

  getScreenName: function(player, coords) {
    return "main";
},

  getScreenByName: function(screenName) {
    return AltarGui;
  },
  tick: function(){
      if(World.getWorldTime()%100 == 0){
        let AltarSource = new BlockSource.getDefaultForDimension(this.dimension);
        AltarPower = 0;
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
            AltarPower += AltarAPI.AltarBase[key];
            break;
          };
        };
        for (let i = 0; i < AltarCatalizator.length; i++) {
          if(AltarSource.getBlock(this.x + AltarCatalizator[i].x, this.y + AltarCatalizator[i].y, this.z + AltarCatalizator[i].z).id in AltarAPI.Catalizator){
            for(let key in AltarAPI.Catalizator){
              if(AltarSource.getBlock(this.x + AltarCatalizator[i].x, this.y + AltarCatalizator[i].y, this.z + AltarCatalizator[i].z).id == key){
                AltarPower += AltarAPI.Catalizator[key];
                break;
              };
            };
          };
        };
      };
    };
  },
});
