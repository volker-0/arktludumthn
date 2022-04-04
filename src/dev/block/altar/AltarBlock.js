IDRegistry.genBlockID("creatoraltar");
Block.createBlock("creatoraltar", [{name: "Алтарь созидания", inCreative: true}]);

let AltarMesh = new RenderMesh();
let AltarModel = new BlockRenderer.Model(AltarMesh);
let ICRenderAltar = new ICRender.Model();

AltarMesh.setBlockTexture("creatoraltar", 0);
AltarMesh.importFromFile(__dir__ + "resources/res/models/altar.obj", "obj", null);

ICRenderAltar.addEntry(AltarModel);

BlockRenderer.setStaticICRender(BlockID.creatoraltar, -1, ICRenderAltar);
ItemModel.getFor(ItemID.creatoraltar, -1).setSpriteUiRender(true);
ItemModel.getFor(ItemID.creatoraltar, -1).setModUiSpriteName("altaricon", 0);