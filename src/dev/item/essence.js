IDRegistry.genItemID("aeressence");
Item.createItem("aeressence", "Аэритовая эссенция", {name: "aeressence", meta: 0}, {stack: 64});

IDRegistry.genItemID("aquaessence");
Item.createItem("aquaessence", "Акватическая эссенция", {name: "aquaessence", meta: 0}, {stack: 64});

IDRegistry.genItemID("ignisessence");
Item.createItem("ignisessence", "Игнитовая эссенция", {name: "ignisessence", meta: 0}, {stack: 64});

IDRegistry.genItemID("terraessence");
Item.createItem("terraessence", "Территовая эссенция", {name: "terraessence", meta: 0}, {stack: 64});

IDRegistry.genItemID("profanedessence");
Item.createItem("profanedessence", "Нечестивая эссенция", {name: "profanedessence", meta: 0}, {stack: 64});

IDRegistry.genItemID("calamityessence");
Item.createItem("calamityessence", "Эссенция бедствия", {name: "calamityessence", meta: 0}, {stack: 64});



//aqua
EssenceAPI.registerDropEntityArr([17, 21, 28, 37, 49], ItemID.aquaessence);
//ignis
EssenceAPI.registerDropEntityArr([42, 48, 43, 33, 47, 36, 38], ItemID.ignisessence);
//aer
EssenceAPI.registerDropEntityArr([21, 28, 46, 19, 53, 52], ItemID.aeressence);
//terra
EssenceAPI.registerDropEntityArr([15, 11, 10, 16, 18, 12, 23, 24, 25, 27, 26, 13, 22, 14, 20, 36, 35, 40, 38, 34, 37, 39, 55, 45, 32, 44, 33], ItemID.terraessence);
