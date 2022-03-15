const AltarBlocks =[{x: -3,y :0, z :-2},
                    {x: -3,y :0, z :-1},
                    {x: -3,y :0, z :0},
                    {x: -3,y :0, z :1},
                    {x: -3,y :0, z :2},
                    {x: -2,y :0, z :-3},
                    {x: -2,y :0, z :-2},
                    {x: -2,y :1, z :-2},
                    {x: -2,y :2, z :-2},
                    {x: -2,y :3, z :-2},
                    {x: -2,y :0, z :-1},
                    {x: -2,y :0, z :0},
                    {x: -2,y :1, z :0},
                    {x: -2,y :2, z :0},
                    {x: -2,y :0, z :1},
                    {x: -2,y :0, z :2},
                    {x: -2,y :1, z :2},
                    {x: -2,y :2, z :2},
                    {x: -2,y :3, z :2},
                    {x: -2,y :0, z :3},
                    {x: -1,y :0, z :-3},
                    {x: -1,y :0, z :-2},
                    {x: -1,y :0, z :-1},
                    {x: -1,y :0, z :0},
                    {x: -1,y :0, z :1},
                    {x: -1,y :0, z :2},
                    {x: -1,y :0, z :3},
                    {x: 0, y :0, z :-3},
                    {x: 0, y :0, z :-2},
                    {x: 0, y :1, z :-2},
                    {x: 0, y :2, z :-2},
                    {x: 0, y :0, z :-1},
                    {x: 0, y :0, z :0},
                    {x: 0, y :0, z :1},
                    {x: 0, y :0, z :2},
                    {x: 0, y :1, z :2},
                    {x: 0, y :2, z :2},
                    {x: 0, y :0, z :3},
                    {x: 1, y :0, z :-3},
                    {x: 1, y :0, z :-2},
                    {x: 1, y :0, z :-1},
                    {x: 1, y :0, z :0},
                    {x: 1, y :0, z :1},
                    {x: 1, y :0, z :2},
                    {x: 1, y :0, z :3},
                    {x: 2, y :0, z :-3},
                    {x: 2, y :0, z :-2},
                    {x: 2, y :1, z :-2},
                    {x: 2, y :2, z :-2},
                    {x: 2, y :3, z :-2},
                    {x: 2, y :0, z :-1},
                    {x: 2, y :0, z :0},
                    {x: 2, y :1, z :0},
                    {x: 2, y :2, z :0},
                    {x: 2, y :0, z :1},
                    {x: 2, y :0, z :2},
                    {x: 2, y :1, z :2},
                    {x: 2, y :2, z :2},
                    {x: 2, y :3, z :2},
                    {x: 2, y :0, z :3},
                    {x: 3, y :0, z :-2},
                    {x: 3, y :0, z :-1},
                    {x: 3, y :0, z :0},
                    {x: 3, y :0, z :1},
                    {x: 3, y :0, z :2}];

IDRegistry.genBlockID("creatoraltar");
Block.createBlock("creatoraltar", [{name: "Алтарь созидания", texture: [["creatoraltar", 0], ["creatoraltar", 0], ["creatoraltar", 0], ["creatoraltar", 0], ["creatoraltar", 0], ["creatoraltar", 0]], inCreative: true}]);

Callback.addCallback("ItemUse", function(coords, block){
  if(block.id == BlockID.block){
    let Structure
    coords = coords.relative;
    for(let coord of AltarBlocks){
      if(World.getBlock(coords.x - coord.x, coords.y - coord.y - 1, coords.z - coord.z) == 112){
        Structure = true;
      }else{
        Structure = false;
        break;
      };
    };
    Game.message(Structure);
  };
});