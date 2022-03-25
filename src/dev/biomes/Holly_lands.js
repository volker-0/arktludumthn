let HollyLands = new CustomBiome("holly_lands");

HollyLands.setFoliageColor(0.32, 0.77, 0.66);

HollyLands.setGrassColor(0.09, 0.76, 0.6);

//HollyLands.setSkyColor(0.06, 0.91, 0.89);

HollyLands.setServerJson(JSON.stringify({
      "minecraft:climate": {
        "downfall": 0.0,
        "snow_accumulation": [
          0.0,
          0.0
        ],
        "temperature": 5,
        "blue_spores": 0,
        "red_spores": 0,
        "white_ash": 0,
        "ash": 0
      },
      "minecraft:overworld_height": {
        "noise_type": "default"
      },
      "animal": {},
      "monster": {},
      "overworld": {},
      "desolation": {},
      "minecraft:surface_parameters": {
        "top_material": "minecraft:grass",
        "mid_material": "minecraft:dirt",
        "foundation_material": "minecraft:stone",
        "sea_floor_material": "minecraft:clay",
        "sea_material": "minecraft:block_Hollywater_still",
        "sea_floor_depth": 7
      },
      "minecraft:overworld_generation_rules": {
        "hills_transformation": "forest_hills",
        "river_transformation": "river",
        "generate_for_climates": [
          [
            "warm",
            25
          ],
          [
            "medium",
            32
          ]
        ],
        "mutate_transformation": "birch_forest",
        "shore_transformation": "beach"
      } 
}));

HollyLands.setClientJson(JSON.stringify({
  "water_surface_color": "#3f515d",
  "water_fog_color": "#294252",
  "water_surface_transparency": 0.3,
  "water_fog_distance": 10,
  "fog_identifier": "ark:holy"
}));