IDRegistry.genItemID("hollybotbook");
Item.createItem("hollybotbook", "המנגנון הארור", {name: "hollybotbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("naidabook");
Item.createItem("naidabook", "אלת הצמחים", {name: "naidabook", meta: 0}, {stack: 64});

IDRegistry.genItemID("krakenbook");
Item.createItem("krakenbook", "תמנון ענק ", {name: "krakenbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("elementalguardianbook");
Item.createItem("elementalguardianbook", "שומר אלמנטים", {name: "elementalguardianbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("arsenalguardianbook");
Item.createItem("arsenalguardianbook", "שומר הארסנל", {name: "arsenalguardianbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("arsenalcreatorbook");
Item.createItem("arsenalcreatorbook", "יוצר ארסנל", {name: "arsenalcreatorbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("captainofarkofthecosmos");
Item.createItem("captainofarkofthecosmos", "קפטן ארון הקוסמוס", {name: "captainofarkofthecosmos", meta: 0}, {stack: 64});

IDRegistry.genItemID("devourerdeorumbook");
Item.createItem("devourerdeorumbook", "טורף האלים", {name: "devourerdeorumbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("seederusbook");
Item.createItem("seederusbook", "אלוהים של פוריות", {name: "seederusbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("ekatebrinebook");
Item.createItem("ekatebrinebook", "מלכת השלג", {name: "ekatebrinebook", meta: 0}, {stack: 64});

IDRegistry.genItemID("calamitatisbook");
Item.createItem("calamitatisbook", "אסון", {name: "calamitatisbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("ciciditdeabook");
Item.createItem("ciciditdeabook", "אלוהות מחוללת", {name: "ciciditdeabook", meta: 0}, {stack: 64});

IDRegistry.genItemID("venomkultistbook");
Item.createItem("venomkultistbook", "רפואה זיהומית", {name: "venomkultistbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("haturbook");
Item.createItem("haturbook", "ኸአጠኢረ", {name: "haturbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("verumdevourerdeorumbook");
Item.createItem("verumdevourerdeorumbook", "הטורף האמיתי של האלים", {name: "verumdevourerdeorumbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("truncatisbook");
Item.createItem("truncatisbook", "ג 'ונגל הדרקון", {name: "truncatisbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("verumcalamitatisbook");
Item.createItem("verumcalamitatisbook", "איסטינרה האסון האמיתי ", {name: "verumcalamitatisbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("azatotbook");
Item.createItem("azatotbook", "אבל בשביל זה", {name: "azatotbook", meta: 0}, {stack: 64});

IDRegistry.genItemID("chtulhubook");
Item.createItem("chtulhubook", "אלוהים תמנון הדרקון", {name: "chtulhubook", meta: 0}, {stack: 64});

IDRegistry.genItemID("arktludumthnbook");
Item.createItem("arktludumthnbook", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.arktludumthnbook, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.cosmicsingularity, 0, 'b', 340, 0]);

IDRegistry.genItemID("arktludumthnbooktwo");
Item.createItem("arktludumthnbooktwo", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

Recipes.addShaped({id: ItemID.arktludumthnbooktwo, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbook, 0, 'b', ItemID.hollybotbook, 0]);

IDRegistry.genItemID("arktludumthnbookthree");
Item.createItem("arktludumthnbookthree", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

Recipes.addShaped({id: ItemID.arktludumthnbookthree, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbooktwo, 0, 'b', ItemID.naidabook, 0]);

IDRegistry.genItemID("arktludumthnbookfour");
Item.createItem("arktludumthnbookfour", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

Recipes.addShaped({id: ItemID.arktludumthnbookfour, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookthree, 0, 'b', ItemID.krakenbook, 0]);




IDRegistry.genItemID("arktludumthnbookfive");
Item.createItem("arktludumthnbookfive", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookfive, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookfour, 0, 'b', ItemID.elementalguardianbook, 0]);

IDRegistry.genItemID("arktludumthnbooksix");
Item.createItem("arktludumthnbooksix", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbooksix, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookfive, 0, 'b', ItemID.arsenalguardianbook, 0]);

IDRegistry.genItemID("arktludumthnbookseven");
Item.createItem("arktludumthnbookseven", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookseven, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbooksix, 0, 'b', ItemID.arsenalcreatorbook, 0]);

IDRegistry.genItemID("arktludumthnbookeight");
Item.createItem("arktludumthnbookeight", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookeight, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookseven, 0, 'b', ItemID.captainofarkofthecosmos, 0]);

IDRegistry.genItemID("arktludumthnbooknine");
Item.createItem("arktludumthnbooknine", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbooknine, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookeight, 0, 'b', ItemID.devourerdeorumbook, 0]);

IDRegistry.genItemID("arktludumthnbookseederus");
Item.createItem("arktludumthnbookseederus", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookseederus, count: 1, data: 0}, [ " a ", " b ", " c "], ['a', ItemID.arktludumthnbooknine, 0, 'b', ItemID.seederusbook, 0, 'c', ItemID.ekatebrinebook, 0]);

IDRegistry.genItemID("arktludumthnbookcalamitatis");
Item.createItem("arktludumthnbookcalamitatis", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookcalamitatis, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookseederus, 0, 'b', ItemID.calamitatisbook, 0]);

IDRegistry.genItemID("arktludumthnbookvenomcultist");
Item.createItem("arktludumthnbookvenomcultist", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookvenomcultist, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookcalamitatis, 0, 'b', ItemID.venomkultistbook, 0]);

IDRegistry.genItemID("arktludumthnbookhatur");
Item.createItem("arktludumthnbookhatur", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookhatur, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookvenomcultist, 0, 'b', ItemID.haturbook, 0]);

IDRegistry.genItemID("arktludumthnbookciciditdea");
Item.createItem("arktludumthnbookciciditdea", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookciciditdea, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookhatur, 0, 'b', ItemID.ciciditdeabook, 0]);

IDRegistry.genItemID("arktludumthnbookverumdevourerdeorum");
Item.createItem("arktludumthnbookverumdevourerdeorum", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookverumdevourerdeorum, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookciciditdea, 0, 'b', ItemID.verumdevourerdeorumbook, 0]);

IDRegistry.genItemID("arktludumthnbooktruncatis");
Item.createItem("arktludumthnbooktruncatis", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbooktruncatis, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookverumdevourerdeorum, 0, 'b', ItemID.truncatisbook, 0]);

IDRegistry.genItemID("arktludumthnbookverumcalamitatis");
Item.createItem("arktludumthnbookverumcalamitatis", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookverumcalamitatis, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbooktruncatis, 0, 'b', ItemID.verumcalamitatisbook, 0]);

IDRegistry.genItemID("arktludumthnbookazatot");
Item.createItem("arktludumthnbookazatot", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookazatot, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookverumcalamitatis, 0, 'b', ItemID.azatotbook, 0]);

IDRegistry.genItemID("arktludumthnbookchtulhu");
Item.createItem("arktludumthnbookchtulhu", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});
Recipes.addShaped({id: ItemID.arktludumthnbookchtulhu, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbookazatot, 0, 'b', ItemID.chtulhubook, 0]);


IDRegistry.genItemID("arktludumthnbookfinal");
Item.createItem("arktludumthnbookfinal", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: false});
Recipes.addShaped({id: ItemID.arktludumthnbookfinal, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', ItemID.arktludumthnbookchtulhu, 0]);

