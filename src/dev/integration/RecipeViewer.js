ModAPI.addAPICallback("RecipeViewer", (api) => {

  IDRegistry.genItemID("icon_altar");
  Item.createItem("icon_altar", "Алтарь созидания", {name: "altaricon"}, {isTech: true});

  class AltarRecipe extends api.RecipeType {
    getAllList(){
      const AltarRecipes = AltarAPI.Recipes;
      return AltarRecipes;
    };
    onOpen(elements, recipe){
      let text =elements.get("TextEnergy");
      text.description.text = `Нужно энергии: ${recipe.energy}`
    };
  };

  const CreatorAltarRecipe = new AltarRecipe("Алтарь созидания", ItemID.icon_altar, {
    params: {},
    drawing: [
      { type: "bitmap", x: 0, y: 0, bitmap: "AltarStar", width: 997, height:600 }
    ],
    elements: {
      input0 : {type: "slot", x: 465, y: 265, size: 70},
      input1 : {type: "slot", x: 465, y: 20, size: 70},
      input2 : {type: "slot", x: 625, y: 40, size: 70},
      input3 : {type: "slot", x: 790, y: 265, size: 70},
      input4 : {type: "slot", x: 625, y: 480, size: 70},
      input5 : {type: "slot", x: 465, y: 510, size: 70},
      input6 : {type: "slot", x: 300, y: 480, size: 70},
      input7 : {type: "slot", x: 140, y: 265, size: 70},
      input8 : {type: "slot", x: 300, y: 40, size: 70},

      output0: {type: "slot", x: 0, y: 0, size: 70},

      TextEnergy:{type: "text", x: 80, y: 0, font: {size: 30}, text:`Нужно энергии: `}
    }
  });

  api.RecipeTypeRegistry.register("creatoraltar",CreatorAltarRecipe);
});