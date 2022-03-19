let AltarAPI = {
  AltarBase:{
    98: 1,
    112: 2,
  },

  Catalizator:{
    22: 5,
    57: 7,
    41: 10,
    42: 3,
    133: 9,
  },

  Recipes:{

  },

  BaseBlock(blockid, power){
    if(typeof(blockid) == "number"){
      this.AltarBase[blockid] = power;
    } else {
      this.AltarBase[BlockID.blockid] = power;
    };
  },

  BaseBlockArr(blockidArr, powerArr){
    for(let i = 0; i < blockidArr.length; i++){
      if(typeof(blockid) == "number"){
        this.AltarBase[blockidArr[i]] = powerArr[i];
      } else {
        this.AltarBase[BlockID.blockidArr[i]] = powerArr[i];
      };
    }
  },

  CatalizatorBlock(blockid, power){
    if(typeof(blockid) == "number"){
      this.Catalizator[blockid] = power;
    } else{
      this.Catalizator[BlockID.blockid] = power;
    };
  },

  CatalizatorBlockArr(blockidArr, powerArr){
    for(let i = 0; i < blockidArr.length; i++){
      if(typeof(blockid) == "number"){
        this.Catalizator[blockidArr[i]] = powerArr[i];
      } else {
        this.Catalizator[BlockID.blockidArr[i]] = powerArr[i];
      };
    };
  },

  CatalizatorBlockDelete(blockid){
    if(typeof(blockid) == "number"){
      delete this.Catalizator[blockid];
    } else{
      delete this.Catalizator[BlockID.blockid];
    };
  },

  CatalizatorBlocDeletekArr(blockidArr){
    for(let i = 0; i < blockidArr.length; i++){
      if(typeof(blockid) == "number"){
        delete this.Catalizator[blockidArr[i]];
      } else {
        delete this.Catalizator[BlockID.blockidArr[i]];
      };
    };
  },

  BaseBlockDelete(blockid){
    if(typeof(blockid) == "number"){
      delete this.AltarBase[blockid];
    } else {
      delete this.AltarBase[BlockID.blockid];
    };
  },

  BaseBlocDeletekArr(blockidArr){
    for(let i = 0; i < blockidArr.length; i++){
      if(typeof(blockid) == "number"){
        delete this.Base[blockidArr[i]];
      } else {
        delete this.Base[BlockID.blockidArr[i]];
      };
    };
  },

  AddAltarRecipe(sc, s0, s1, s2, s3, s4, s5, s6, s7, output){
    this.Recipes[output] = [sc, s0, s1, s2, s3, s4, s5, s6, s7]
  },
};