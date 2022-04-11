IDRegistry.genBlockID("creatoraltar");
Block.createBlock("creatoraltar", [{name: "Алтарь созидания", inCreative: false}]);

let AltarMesh = new RenderMesh();
let AltarModel = new BlockRenderer.Model(AltarMesh);
let ICRenderAltar = new ICRender.Model();

AltarMesh.setBlockTexture("creatoraltar", 0);
AltarMesh.importFromFile(__dir__ + "resources/res/models/altar.obj", "obj", null);

ICRenderAltar.addEntry(AltarModel);

BlockRenderer.setStaticICRender(BlockID.creatoraltar, -1, ICRenderAltar);

IDRegistry.genItemID("icon_altar");
Item.createItem("icon_altar", "Алтарь созидания", {name: "altaricon"});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
  if(item.id == ItemID.icon_altar){
    BlockSource.getDefaultForActor(player).setBlock(coords.x, coords.y, coords.z, BlockID.creatoraltar, 1);
    item.count--;
  };
})