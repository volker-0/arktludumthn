LiquidRegistry.registerLiquid("Hollywater", "Святая вода", ["holywater"]);

Block.createLiquidBlock("Hollywater",
{
  name: "Святая вода",
  still: {
    texture: ["holywater", 0]
  },
  flowing: {
    texture: ["holywater", 0]
  },
  bucket: {
    texture: { name: "holywaterBucket", meta: 0 }, 
  },
});

Block.registerEntityInsideFunction("Hollywater_still", function(blockCoords, block, entity){
  Entity.addEffect(entity, 10, 1, 40, true, false);
});