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
  BaseBlock(blockid, power){
    this.AltarBase[blockid] = power;
  },
  CatalizatorBlock(blockid, power){
    this.Catalizator[blockid] = power;
  },
  CatalizatorBlockDelete(blockid){
    delete this.Catalizator[blockid];
  },
  BaseBlockDelete(blockid){
    delete this.AltarBase[blockid];
  },
};