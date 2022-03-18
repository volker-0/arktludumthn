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
  elements:{}
});

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
