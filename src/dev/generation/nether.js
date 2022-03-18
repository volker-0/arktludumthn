Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 255);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ignisusnetherore, 0, 10);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 250);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.chaosore, 0, 20);
    }
}
)
