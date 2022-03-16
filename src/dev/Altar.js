let AltarPower;

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

const AltarCatalizator = [
  {x: 2, y:2, z:0},
  {x: 2, y:3, z:2},
  {x: 0, y:2, z:2},
  {x: -2, y:3, z:2},
  {x: -2, y:2, z:0},
  {x: -2, y:3, z:-2},
  {x: 0, y:2, z:-2},
  {x: 2, y:3, z:-2}
]

let AltarBase = {
  98: 1,
  112: 2,
};

let Catalizator = {
  22: 5,
  57: 7,
  41: 10,
  42: 3,
}

function BaseBlock(blockid, power){
  AltarBase[blockid] = power;
};

BaseBlock(BlockID.azatotbricks, 50);

IDRegistry.genBlockID("creatoraltar");
Block.createBlock("creatoraltar", [{name: "Алтарь созидания", texture: [["creatoraltar", 0], ["creatoraltar", 0], ["creatoraltar", 0], ["creatoraltar", 0], ["creatoraltar", 0], ["creatoraltar", 0]], inCreative: true}]);

const AltarGui = new UI.StandardWindow({
  standard: {
    header: { text: { text: "Алтарь созидания" } },
    inventory: { standard: true },
    background: { standard: true }
  }
});

TileEntity.registerPrototype(BlockID.creatoraltar, {
  getGuiScreen: function(){
    return AltarGui;
  }

});

Callback.addCallback("ItemUse", function(coords){
  if(World.getBlock(coords.x, coords.y, coords.z).id == BlockID.creatoraltar){
    AltarPower = 0;
    let Structure;
    for (let i = 0; i < AltarBlocks.length; i++) {
      if(World.getBlock(coords.x + AltarBlocks[i].x, coords.y + AltarBlocks[i].y - 1, coords.z + AltarBlocks[i].z).id in AltarBase){
        Structure = true;
      }else{
        Structure = false;
        break;
      };
    };
    if(Structure){
      for(let key in AltarBase){
        if(World.getBlock(coords.x, coords.y - 1, coords.z).id == key){
          AltarPower += AltarBase[key];
          break;
        };
      };
      for (let i = 0; i < AltarCatalizator.length; i++) {
        if(World.getBlock(coords.x + AltarCatalizator[i].x, coords.y + AltarCatalizator[i].y, coords.z + AltarCatalizator[i].z).id in Catalizator){
          for(let key in Catalizator){
            if(World.getBlock(coords.x + AltarCatalizator[i].x, coords.y + AltarCatalizator[i].y, coords.z + AltarCatalizator[i].z).id == key){
              AltarPower += Catalizator[key];
              break;
            };
          };
        };
      };
    };
  };
});