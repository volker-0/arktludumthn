AltarAPI.BaseBlock(BlockID.azatotbricks, 50);

//cores
AltarAPI.AddAltarRecipe({
  input:{
    2:{id:ItemID.aercore, data:0},
    4:{id:ItemID.terracore, data:0},
    6:{id:ItemID.igniscore, data:0},
    8:{id:ItemID.aquacore, data:0},
  },
  output:{id:ItemID.elementalcore, data:0},
  energy:10
});

AltarAPI.AddAltarRecipe({
  input:{
    1:{id:ItemID.aeressence, data:0},
    2:{id:ItemID.aeriteingot, data:0},
    3:{id:ItemID.aeressence, data:0},
    4:{id:ItemID.aeriteingot, data:0},
    5:{id:ItemID.aeressence, data:0},
    6:{id:ItemID.aeriteingot, data:0},
    7:{id:ItemID.aeressence, data:0},
    8:{id:ItemID.aeriteingot, data:0},
  },
  output:{id:ItemID.aercore, data:0},
  energy:10
});

AltarAPI.AddAltarRecipe({
  input:{
    1:{id:ItemID.terraessence, data:0},
    2:{id:ItemID.territeingot, data:0},
    3:{id:ItemID.terraessence, data:0},
    4:{id:ItemID.territeingot, data:0},
    5:{id:ItemID.terraessence, data:0},
    6:{id:ItemID.territeingot, data:0},
    7:{id:ItemID.terraessence, data:0},
    8:{id:ItemID.territeingot, data:0},
  },
  output:{id:ItemID.terracore, data:0},
  energy:10
});

AltarAPI.AddAltarRecipe({
  input:{
    1:{id:ItemID.ignisessence, data:0},
    2:{id:ItemID.ignisusingot, data:0},
    3:{id:ItemID.ignisessence, data:0},
    4:{id:ItemID.ignisusingot, data:0},
    5:{id:ItemID.ignisessence, data:0},
    6:{id:ItemID.ignisusingot, data:0},
    7:{id:ItemID.ignisessence, data:0},
    8:{id:ItemID.ignisusingot, data:0},
  },
  output:{id:ItemID.igniscore, data:0},
  energy:10
});

AltarAPI.AddAltarRecipe({
  input:{
    1:{id:ItemID.aquaessence, data:0},
    2:{id:ItemID.aquatiteingot, data:0},
    3:{id:ItemID.aquaessence, data:0},
    4:{id:ItemID.aquatiteingot, data:0},
    5:{id:ItemID.aquaessence, data:0},
    6:{id:ItemID.aquatiteingot, data:0},
    7:{id:ItemID.aquaessence, data:0},
    8:{id:ItemID.aquatiteingot, data:0},
  },
  output:{id:ItemID.aquacore, data:0},
  energy:10
});

AltarAPI.AddAltarRecipe({
  input:{
    0:{id:ItemID.elementalcore, data:0},
    2:{id:ItemID.aeriteingot, data:0},
    4:{id:ItemID.territeingot, data:0},
    6:{id:ItemID.ignisusingot, data:0},
    8:{id:ItemID.aquatiteingot, data:0},
  },
  output:{id:ItemID.elementalingot, data:0},
  energy:10
});

AltarAPI.AddAltarRecipe({
  input:{
    2:{id:ItemID.aeressence, data:0},
    4:{id:ItemID.terraessence, data:0},
    6:{id:ItemID.ignisessence, data:0},
    8:{id:ItemID.aquaessence, data:0},
  },
  output:{id:ItemID.cosmicsingularity, data:0},
  energy:10
});

//biome sword
AltarAPI.AddAltarRecipe({
  input:{
    0:{id:268, data:0},
    1:{id:80, data:0},
    2:{id:1, data:0},
    3:{id:12, data:0},
    4:{id:87, data:0},
    5:{id:-217, data:0},
    6:{id:-249, data:0},
    7:{id:24, data:0},
    8:{id:3, data:0},
  },
  output:{id:ItemID.biomesword, data:0},
  energy:25
});

AltarAPI.AddAltarRecipe({
  input:{
    0:{id:ItemID.biomesword, data:0},
    1:{id:ItemID.livingshard, data:0},
    2:{id:ItemID.ectoplasm, data:0},
    3:{id:ItemID.livingshard, data:0},
    4:{id:ItemID.ectoplasm, data:0},
    5:{id:ItemID.livingshard, data:0},
    6:{id:ItemID.ectoplasm, data:0},
    7:{id:ItemID.livingshard, data:0},
    8:{id:ItemID.ectoplasm, data:0},
  },
  output:{id:ItemID.truebiomesword, data:0},
  energy:30
});

AltarAPI.AddAltarRecipe({
  input:{
    0:{id:ItemID.truebiomesword, data:0},
    1:{id:ItemID.krackeningot, data:0},
    3:{id:ItemID.cosmicsingularity, data:0},
    5:{id:ItemID.elementalingot, data:0},
    7:{id:ItemID.elementalcore, data:0},
  },
  output:{id:ItemID.omegabiomesword, data:0},
  energy:50
});

//ancient ark
AltarAPI.AddAltarRecipe({
  input:{
    0:{id:ItemID.livingshard, data:0},
    1:{id:ItemID.exalibur, data:0},
    2:{id:ItemID.aeressence, data:0},
    3:{id:ItemID.enchantedsword, data:0},
    4:{id:ItemID.terraessence, data:0},
    5:{id:ItemID.brokenherosword, data:0},
    6:{id:ItemID.ignisessence, data:0},
    7:{id:ItemID.starsword, data:0},
    8:{id:ItemID.aquaessence, data:0},
  },
  output:{id:ItemID.truebiomesword, data:0},
  energy:50
});

AltarAPI.AddAltarRecipe(ItemID.livingshard, ItemID.exalibur, ItemID.aeressence, ItemID.enchantedsword, ItemID.terraessence, ItemID.brokenherosword, ItemID.ignisessence, ItemID.starsword, ItemID.aquaessence, ItemID.ancientark, 50);

