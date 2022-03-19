IDRegistry.genBlockID("creatoraltar");
Block.createBlock("creatoraltar", [{name: "Алтарь созидания", texture: ["creatoraltar", 0], inCreative: true}]);

let AltarMesh = new RenderMesh(__dir__ + "resources/res/models/altar.obj", "obj", null);

AltarMesh.setBlockTexture("creatoraltar", 0);

let AltarModel = new BlockRenderer.Model(AltarMesh);

let ICRenderAltar = new ICRender.Model(AltarModel);

BlockRenderer.setStaticICRender(BlockID.creatoraltar, -1, ICRenderAltar);