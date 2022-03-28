Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.territeore, 0, 10);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.heartore, 0, 6);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        if(World.getBiome(coords.x,coords.y,coords.z)==HollyLands.id){ 
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.hollyore, 0, 10);
        }
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        if(World.getBlockID(coords.x+1,coords.y,coords.z)==11){ 
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ignisusore, 0, 10);
    }
}
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        if(World.getBlockID(coords.x+1,coords.y,coords.z)==12){ 
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aquatiteore, 0, 10);
    }
}
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        var coordus = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if(World.getBlockID(coordus.x+1,coordus.y,coordus.z)==13){ 
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aquatiteore, 0, 10);
    }
}
}
)



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(random.nextInt(1000) < 20){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if(World.getBlockID(coords.x,coords.y,coords.z)==12){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.aquatiteore, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(random.nextInt(1000) < 20){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if(World.getBlockID(coords.x,coords.y,coords.z)==11){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.ignisusore, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(random.nextInt(1000) < 20){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if(World.getBlockID(coords.x,coords.y,coords.z)==13){ 
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.aquatiteore, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(random.nextInt(1000) < 20){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+100,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+100,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+100,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+100,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+100,  coords.z-1, BlockID.cloud, 0);
       
       World.setBlock(coords.x,coords.y+101,  coords.z, BlockID.aeriteore, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z, BlockID.aeriteore, 0);
       World.setBlock(coords.x+2,coords.y+101,  coords.z, BlockID.aeriteore, 0);
       World.setBlock(coords.x,coords.y+101,  coords.z-1, BlockID.aeriteore, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z-1, BlockID.aeriteore, 0);
       World.setBlock(coords.x+3,coords.y+101,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+101,  coords.z+1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z+1, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+101,  coords.z+1, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+101,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z-2, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+101,  coords.z-2, BlockID.cloud, 0);
       World.setBlock(coords.x-1,coords.y+101,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x-1,coords.y+101,  coords.z, BlockID.cloud, 0);
       
       World.setBlock(coords.x,coords.y+102,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+102,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+102,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+102,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+102,  coords.z-1, BlockID.cloud, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 100, 255);
    if(random.nextInt(1000) < 20){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+100,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+100,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+100,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+100,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+100,  coords.z-1, BlockID.cloud, 0);
       
       World.setBlock(coords.x,coords.y+101,  coords.z, BlockID.aeriteore, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z, BlockID.aeriteore, 0);
       World.setBlock(coords.x+2,coords.y+101,  coords.z, BlockID.aeriteore, 0);
       World.setBlock(coords.x,coords.y+101,  coords.z-1, BlockID.aeriteore, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z-1, BlockID.aeriteore, 0);
       World.setBlock(coords.x+3,coords.y+101,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+101,  coords.z+1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z+1, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+101,  coords.z+1, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+101,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+101,  coords.z-2, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+101,  coords.z-2, BlockID.cloud, 0);
       World.setBlock(coords.x-1,coords.y+101,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x-1,coords.y+101,  coords.z, BlockID.cloud, 0);
       
       World.setBlock(coords.x,coords.y+102,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+102,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x+2,coords.y+102,  coords.z, BlockID.cloud, 0);
       World.setBlock(coords.x,coords.y+102,  coords.z-1, BlockID.cloud, 0);
       World.setBlock(coords.x+1,coords.y+102,  coords.z-1, BlockID.cloud, 0);
       
       World.setBlock(coords.x,coords.y+102,  coords.z, 54, 0);
       
       ItemGeneration.fillChest(coords.x, coords.y+102, coords.z, BlockSource.getCurrentWorldGenRegion(), random);
}}});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+150,  coords.z, BlockID.cometdirt, 0);
       World.setBlock(coords.x+1,coords.y+150,  coords.z, BlockID.cometdirt, 0);
       World.setBlock(coords.x+2,coords.y+150,  coords.z, BlockID.cometdirt, 0);
       World.setBlock(coords.x,coords.y+150,  coords.z-1, BlockID.cometdirt, 0);
       World.setBlock(coords.x+1,coords.y+150,  coords.z-1, BlockID.cometdirt, 0);
       
       World.setBlock(coords.x,coords.y+151,  coords.z, BlockID.cometiteore, 0);
       World.setBlock(coords.x+1,coords.y+151,  coords.z, BlockID.cometiteore, 0);
       World.setBlock(coords.x+2,coords.y+151,  coords.z, BlockID.cometiteore, 0);
       World.setBlock(coords.x,coords.y+151,  coords.z-1, BlockID.cometiteore, 0);
       World.setBlock(coords.x+1,coords.y+151,  coords.z-1, BlockID.cometiteore, 0);
       World.setBlock(coords.x+3,coords.y+151,  coords.z, BlockID.cometgrass, 0);
       World.setBlock(coords.x+2,coords.y+151,  coords.z+1, BlockID.cometgrass, 0);
       World.setBlock(coords.x+1,coords.y+151,  coords.z+1, BlockID.cometgrass, 0);
       World.setBlock(coords.x,coords.y+151,  coords.z+1, BlockID.cometgrass, 0);
       World.setBlock(coords.x+2,coords.y+151,  coords.z-1, BlockID.cometgrass, 0);
       World.setBlock(coords.x+1,coords.y+151,  coords.z-2, BlockID.cometgrass, 0);
       World.setBlock(coords.x,coords.y+151,  coords.z-2, BlockID.cometgrass, 0);
       World.setBlock(coords.x-1,coords.y+151,  coords.z-1, BlockID.cometgrass, 0);
       World.setBlock(coords.x-1,coords.y+151,  coords.z, BlockID.cometgrass, 0);
       
       World.setBlock(coords.x,coords.y+152,  coords.z, BlockID.cometgrass, 0);
       World.setBlock(coords.x+1,coords.y+152,  coords.z, BlockID.cometgrass, 0);
       World.setBlock(coords.x+2,coords.y+152,  coords.z, BlockID.cometgrass, 0);
       World.setBlock(coords.x,coords.y+152,  coords.z-1, BlockID.cometgrass, 0);
       World.setBlock(coords.x+1,coords.y+152,  coords.z-1, BlockID.cometgrass, 0);
}}});
