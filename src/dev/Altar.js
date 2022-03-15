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

Callback.addCallback("ItemUse", function(coords){
  if(World.getBlock(coords.x, coords.y, coords.z).id == BlockID.creatoraltar){
    let Structure;
    for (let i = 0; i < AltarBlocks.length; i++) {
      if(World.getBlock(coords.x + AltarBlocks[i].x, coords.y + AltarBlocks[i].y - 1, coords.z + AltarBlocks[i].z).id == 112){
        Structure = true;
      }else{
        Structure = false;
        Game.message(coords.x + AltarBlocks[i].x);
        Game.message(coords.y + AltarBlocks[i].y - 1);
        Game.message(coords.z + AltarBlocks[i].z);
        Game.message(World.getBlock(coords.x - AltarBlocks[i].x, coords.y - AltarBlocks[i].y - 1, coords.z - AltarBlocks[i].z).id);
        break;
      };
    };
    Game.message(String(Structure));
  };
});