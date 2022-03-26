let HollyRiver = new CustomBiome("holly_river");

HollyRiver.setFoliageColor(0.32, 0.77, 0.66);

HollyRiver.setGrassColor(0.09, 0.76, 0.6);

HollyRiver.setServerJson(JSON.stringify({
  "minecraft:climate": {
    "downfall": 0.5,
    "snow_accumulation": [
      0,
      0.125
    ],
    "temperature": 0.5
  },
  "minecraft:overworld_height": {
    "noise_type": "river"
  },
  "overworld": {},
  "river": {},
  "minecraft:surface_parameters": {
    "sea_floor_depth": 7,
    "sea_floor_material": "minecraft:gravel",
    "foundation_material": "minecraft:stone",
    "mid_material": "minecraft:dirt",
    "top_material": "minecraft:grass",
    "sea_material": "minecraft:block_Hollywater_still"
  }
}));

HollyRiver.setClientJson(JSON.stringify({
"water_surface_color": "#3f515d",
"water_fog_color": "#294252",
"water_surface_transparency": 0.3,
"water_fog_distance": 10,
"fog_identifier": "ark:holy"
}));



let HollyLands = new CustomBiome("holly_lands");

HollyLands.setFoliageColor(0.32, 0.77, 0.66);

HollyLands.setGrassColor(0.09, 0.76, 0.6);

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
      "holly_lands": {},
      "forest": {},
      "minecraft:surface_parameters": {
        "top_material": "minecraft:grass",
        "mid_material": "minecraft:dirt",
        "foundation_material": "minecraft:stone",
        "sea_floor_material": "minecraft:clay",
        "sea_material": "minecraft:block_Hollywater_still",
        "sea_floor_depth": 7
      },
      "minecraft:overworld_generation_rules": {
        "hills_transformation": "holly_lands",
        "river_transformation": "holly_river",
        "generate_for_climates": [
          [
            "warm",
            1
          ],
          [
            "medium",
            2
          ]
        ],
        "mutate_transformation": "holly_lands",
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