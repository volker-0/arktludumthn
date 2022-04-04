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

  Recipes:[],

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

  CatalizatorBlockArr(blockidArr, powerArr, particleArr){
    for(let i = 0; i < blockidArr.length; i++){
      this.Catalizator[blockidArr[i]] = [powerArr[i], particleArr[i]];
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

  AddAltarRecipe(recipe){
    if (!recipe.input) {
        Logger.Log("Input is not correct! (Altar)", "ARK");
        return;
    };

    if (!recipe.output) {
      Logger.Log("Output is not correct! (Altar)", "ARK");
        return;
    };

    for(let i = 0; i<9; i++){
      let copy = recipe.input[i];
      if(recipe.input[i]==undefined){
        recipe.input[i] = {id:0, data:0, count:1};
      } else{
        copy.count = 1;
      };
    };
    recipe.output.count = 1;

    let input= [];

    for(let i = 0; i<9; i++){
      input[i] = recipe.input[i];
    };

    let output =[recipe.output];

    let recipefull = {input:input, output:output, energy: recipe.energy};
    
    this.Recipes.push(recipefull);
  },
};