IDRegistry.genItemID("hollybot");
Item.createItem("hollybot", "§b Проклятый механизм \n §r Ошибка в коде вызвала необратимые последствия", {name: "Hollybot", data: 0});

Recipes.addShaped({id: ItemID.hollybot, count: 1, data: 0}, [ "abc", "b b", "dbe"], ['a', ItemID.aquacore, 0, 'b', ItemID.cometiteingot, 0, 'c', ItemID.aercore, 0, 'd', ItemID.terracore, 0, 'e', ItemID.igniscore, 0]);


   IDRegistry.genItemID("Naida");
Item.createItem("Naida", "§b Живая вода \n §r Говорят Наида любила розы, но после того как Нотч \n уничтожил их что бы создать мак, Наида впала в ярость", {name: "Naida", data: 0});

Recipes.addShaped({id: ItemID.Naida, count: 1, data: 0}, [ " a ", "cbc", " c "], ['a', ItemID.hollyingot, 0, 'b', 373, 0, 'c', 337, 0]);

IDRegistry.genItemID("Kracken");
Item.createItem("Kracken", "§b Наживка для Кракена", {name: "Kracken", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.Kracken, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', BlockID.ship, 0, 'b', 367, 0, 'c', 368, 0]);

IDRegistry.genItemID("elementalguardiansword");
Item.createItem("elementalguardiansword", "Меч Хранителя Элементов", {name: "elementalguardiansword", meta: 0}, {stack: 1});

IDRegistry.genItemID("ElementalGuardian");
Item.createItem("ElementalGuardian", "§b Печать Элементов ", {name: "ElementalGuardian", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.ElementalGuardian, count: 1, data: 0}, [ "aba", "bbb", "aba"], ['a', ItemID.elementalcore, 0, 'b', ItemID.krackeningot, 0]);

IDRegistry.genItemID("ArsenalGuardian");
Item.createItem("ArsenalGuardian", "§b Меч из нисших миров", {name: "ArsenalGuardian", meta: 0}, {stack: 1});


Recipes.addShaped({id: ItemID.ArsenalGuardian, count: 1, data: 0}, [ " a ", "bcd", "cec"], ['a', ItemID.evilfragment, 0, 'b', ItemID.energyfragment, 0, 'c', ItemID.krackeningot, 0, 'd', ItemID.coldfragment, 0, 'e', ItemID.millionfragment, 0]);

IDRegistry.genItemID("ArsenalCreator");
Item.createItem("ArsenalCreator", "§b Низины миров", {name: "ArsenalCreator", meta: 0}, {stack: 64});

IDRegistry.genItemID("CaptainOfArkOfTheCosmos");
Item.createItem("CaptainOfArkOfTheCosmos", "§b Сфера космоса", {name: "cosmicsphere", meta: 0}, {stack: 64});

IDRegistry.genItemID("DevourerDeorum");
Item.createItem("DevourerDeorum", "Стелла Сфаэра", {name: "stellasfaera", meta: 0}, {stack: 64});

IDRegistry.genItemID("Seederus");
Item.createItem("Seederus", "§b Проклятый амулет", {name: "Seederus", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Seederus, count: 1, data: 0}, [ " a ", "b c", " d "], ['a', 86, 0, 'b', ItemID.ectoplasm, 0, 'c', ItemID.hollyingot, 0, 'd', ItemID.astralingot, 0]);

IDRegistry.genItemID("Ekatebrina");
Item.createItem("Ekatebrina", "§b Странная снежинка", {name: "Ekatebrina", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Ekatebrina, count: 1, data: 0}, [ " a ", "b c", " d "], ['a', 35, 0, 'b', ItemID.ectoplasm, 0, 'c', ItemID.hollyingot, 0, 'd', ItemID.astralingot, 0]);

IDRegistry.genItemID("Calamitatis");
Item.createItem("Calamitatis", "§b Око Опустошителя", {name: "Calamitatis", meta: 0}, {stack: 64});

IDRegistry.genItemID("VenomCultist");
Item.createItem("VenomCultist", "§b Украденный талисман", {name: "VenomCultist", meta: 0}, {stack: 64});

IDRegistry.genItemID("Hatur");
Item.createItem("Hatur", "§b Проклятая печать", {name: "Hatur", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Calamitatis, count: 1, data: 0}, [ "aba", "bcd", "dee"], ['a', ItemID.termoenergy, 0, 'b', ItemID.nightmarefuel, 0, 'c', 87, 0, 'd', ItemID.ignisessence, 0, 'e', ItemID.hollyingot, 0]);

Recipes.addShaped({id: ItemID.VenomCultist, count: 1, data: 0}, [ "abc", "b b", "dbe"], ['a', ItemID.evilfragment, 0, 'b', ItemID.chaosingot, 0, 'c', ItemID.energyfragment, 0, 'd', ItemID.coldfragment, 0, 'e', ItemID.millionfragment, 0]);

Recipes.addShaped({id: ItemID.Hatur, count: 1, data: 0}, [ "abc", "b f", "dfe"], ['a', ItemID.evilfragment, 0, 'b', ItemID.chaosingot, 0, 'c', ItemID.energyfragment, 0, 'd', ItemID.coldfragment, 0, 'e', ItemID.millionfragment, 0, 'f', ItemID.venomdye, 0]);

IDRegistry.genItemID("CiciditDea");
Item.createItem("CiciditDea", "§b Оскверненное ядро", {name: "CiciditDea", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.CiciditDea, count: 1, data: 0}, [ "aba", "b b", "aba"], ['a', ItemID.venomusingot, 0, 'b', ItemID.meowingot, 0]);

IDRegistry.genItemID("VerumDevourerDeorum");
Item.createItem("VerumDevourerDeorum", "§b Искривленная пустота", {name: "VerumDevourerDeorum", meta: 0}, {stack: 64});

IDRegistry.genItemID("Truncatis");
Item.createItem("Truncatis", "§b Яйцо дракона", {name: "dragonegg", meta: 0}, {stack: 64});

IDRegistry.genItemID("VerumCalamitatis");
Item.createItem("VerumCalamitatis", "§b Глаз бедствия", {name: "VerumCalamitatis", meta: 0}, {stack: 64});

IDRegistry.genItemID("Zeus");
Item.createItem("Zeus", "Манипулятор погоды", {name: "Zeus", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Zeus, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', ItemID.astralingot, 0, 'b', 20, 0, 'c', 42, 0]);

IDRegistry.genItemID("Kron");
Item.createItem("Kron", "§b Древняя реликвия", {name: "Kron", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.Kron, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.venomdye, 0]);

IDRegistry.genItemID("Chtulhu");
Item.createItem("Chtulhu", "§b Некрономикон", {name: "Chtulhu", meta: 0}, {stack: 64});

IDRegistry.genItemID("VerumPtah");
Item.createItem("VerumPtah", "§b Проклятье фараона", {name: "VerumPtah", meta: 0}, {stack: 64});

IDRegistry.genItemID("Ark");
Item.createItem("Ark", "Арктлудумзн", {name: "Ark", meta: 0}, {stack: 64});
