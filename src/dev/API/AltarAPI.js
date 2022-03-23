let AltarAPI = {
  AltarBase:{
    98: 1,
    112: 2,
  },

  Catalizator:{
    22: [5,LypisParticle],
    57: [7, DiamondParticle],
    41: [10, GoldParticle],
    42: [3, IronParticle],
    133: [9, EmeraldParticle],
  },

  Recipes:{

  },

  BaseBlock(blockid, power){
    this.AltarBase[blockid] = power;
  },

  BaseBlockArr(blockidArr, powerArr){
    for(let i = 0; i < blockidArr.length; i++){
      this.AltarBase[blockidArr[i]] = powerArr[i];
    };
  },

  CatalizatorBlock(blockid, power, particle){
    this.Catalizator[blockid] = [power, particle];
  },

  CatalizatorBlockArr(blockidArr, powerArr){
    for(let i = 0; i < blockidArr.length; i++){
      this.Catalizator[blockidArr[i]] = powerArr[i];
    };
  },

  CatalizatorBlockDelete(blockid){
    delete this.Catalizator[blockid];
  },

  CatalizatorBlocDeletekArr(blockidArr){
    for(let i = 0; i < blockidArr.length; i++){
      delete this.Catalizator[blockidArr[i]];
    };
  },

  BaseBlockDelete(blockid){
    delete this.AltarBase[blockid];
  },

  BaseBlocDeletekArr(blockidArr){
    for(let i = 0; i < blockidArr.length; i++){
      delete this.Base[blockidArr[i]];
    };
  },

  AddAltarRecipe(sc, s0, s1, s2, s3, s4, s5, s6, s7, output, energy){
    this.Recipes[output] = {
      items:[sc, s0, s1, s2, s3, s4, s5, s6, s7],
      energy: energy,
    };
  },
};