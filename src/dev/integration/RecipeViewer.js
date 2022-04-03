ModAPI.addAPICallback("RecipeViewer", (api) => {
  class AltarRecipe extends api.RecipeType {
    constructor(){};

    getAllList(){
      const AltarRecipes = AltarAPI.Recipes;
      return AltarRecipes;
    };
  };

  const CreatorAltarRecipe = new AltarRecipe("Алтарь созидания", BlockID.creatoraltar, {
    params: {},
    drawing: [],
    elements: {
        slot0 : {x: 465, y: 265, size: 70},
        slot1 : {x: 465, y: 20, size: 70},
        slot2 : {x: 625, y: 40, size: 70},
        slot3 : {x: 790, y: 265, size: 70},
        slot4 : {x: 625, y: 480, size: 70},
        slot5 : {x: 465, y: 510, size: 70},
        slot6 : {x: 300, y: 480, size: 70},
        slot7 : {x: 140, y: 265, size: 70},
        slot8 : {x: 300, y: 40, size: 70},

        output0: {x: 0, y: 0, size: 70},
    }
  });

  api.RecipeTypeRegistry.register("creatoraltar", CreatorAltarRecipe);
});