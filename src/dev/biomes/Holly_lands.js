let HollyLands = new CustomBiome("Holly_lands");

HollyLands.setFoliageColor(82, 196, 168);

HollyLands.setGrassColor(24, 196, 153);

HollyLands.setSkyColor(16, 232, 228);

HollyLands.setServerJson(JSON.stringify({
  "minecraft:overworld_height": {
    "noise_type": "default"
  },
  "overworld": {},
  "Holly_lands": {},
  "minecraft:surface_parameters": {
    "sea_material": "minecraft:block_hollywater_still",
  },
  "minecraft:overworld_generation_rules": {
    "hills_transformation": "jungle_hills",
    "generate_for_climates": [ 
      ["cold", 5 ],
      ["medium", 20 ],
      ["warm", 35 ],
    ]
  }
}));