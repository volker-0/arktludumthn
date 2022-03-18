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

IDRegistry.genItemID("arktludumthnbooktwo");
Item.createItem("arktludumthnbooktwo", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

Recipes.addShaped({id: ItemID.arktludumthnbooktwo, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbook, 0, 'b', ItemID.hollybotbook, 0]);

IDRegistry.genItemID("arktludumthnbookthree");
Item.createItem("arktludumthnbookthree", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

Recipes.addShaped({id: ItemID.arktludumthnbookthree, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.arktludumthnbooktwo, 0, 'b', ItemID.naidabook, 0]);

IDRegistry.genItemID("arktludumthnbookfour");
Item.createItem("arktludumthnbookfour", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookfive");
Item.createItem("arktludumthnbookfive", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbooksix");
Item.createItem("arktludumthnbooksix", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookseven");
Item.createItem("arktludumthnbookseven", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookeight");
Item.createItem("arktludumthnbookeight", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbooknine");
Item.createItem("arktludumthnbooknine", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookseederus");
Item.createItem("arktludumthnbookseederus", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookcalamitatis");
Item.createItem("arktludumthnbookcalamitatis", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookvenomcultist");
Item.createItem("arktludumthnbookvenomcultist", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookhatur");
Item.createItem("arktludumthnbookhatur", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookciciditdea");
Item.createItem("arktludumthnbookciciditdea", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookverumdevourerdeorum");
Item.createItem("arktludumthnbookverumdevourerdeorum", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbooktruncatis");
Item.createItem("arktludumthnbooktruncatis", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookverumcalamitatis");
Item.createItem("arktludumthnbookverumcalamitatis", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookazatot");
Item.createItem("arktludumthnbookazatot", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookchtulhu");
Item.createItem("arktludumthnbookchtulhu", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: true});

IDRegistry.genItemID("arktludumthnbookfinal");
Item.createItem("arktludumthnbookfinal", "Arktludumzn Mets Ihafu", {name: "arktludumthnbook", data: 0},{isTech: false});

ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;

GuideAPI.registerGuide("arktludumthnbookfinal", { 
item: ItemID.arktludumthnbookfinal, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
						{text: "Это финальная книга продиктованная своим пророкам - Арк'Небийу первобогом Арком", size: 18, color: android.graphics.Color.RED},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						    {text: "Другие миры", size: 26, link: "worlds", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
					    {text: "Ковчег Космоса", size: 26, link: "aotc", color: android.graphics.Color.BLUE},
					    {text: "Мечи Вселенных", size: 26, link: "universeSwords", color: android.graphics.Color.RED},
					    {text: "Броня Арка", size: 26, link: "ArkArmor", color: android.graphics.Color.RED},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
			
			
			
			 "aotc": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ark_of_the_Cosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
    {text: "Копия меча которым пользуется сам Арк", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Подробнее про историю этого меча можно прочитать", size: 18},
					    {text: "тут", size: 18, link: "kkk", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			
			
			 "universeSwords": {
				preLink: "ar",
				nextLink: "MS",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.TinEverestraSword, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.HellSword, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.EndSword, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.AzatothSword, data: 0, clicker: {onClick: function(){alert("null");}}},
                         {id: ItemID.AstralSworda, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
    {text: "Эти мечи созданы из начала каждого из своих миров: Яви, Ада, Энда, Азатота и Астрала", size: 18}
 ]
 },
 
 
			},
			
			
			 "MS": {
				preLink: "universeSwords",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.MultiverseSword, data: 0, clicker: {onClick: function(){alert("null");}}},
 ],
 elements: [
    {text: "Объединив все мечи миров (замечу то что не мечи всех миров, ибо миров намного больше) вы получите меч всей нашей Мультивселенной за которой лежит Пустота - Арктлудумзна", size: 18}
 ]
 },
 
 
			},
			
			
			
			 "ArkArmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArkHelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.ArkCheatplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.ArkLeggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.ArkBoots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
    {text: "Эта броня модет дать вам часть силы Великого Йедэнбёга Арка", size: 18}
 ]
 },
 
 
			},
			
		
			
			
			
	
	"bosses": {
		preLink: "default",
				nextLink: "bossestwo",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
					    {text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE},
					    {text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE},
					    {text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE},
					    {text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE},
					
			]
				}
			},
			
			"bossestwo": {
		preLink: "bosses",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE},
					    {text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE},
					    {text: "Трункатис", size: 26, link: "truncatis", color: android.graphics.Color.BLUE},
					    {text: "Верум Каламитатис", size: 26, link: "vc", color: android.graphics.Color.BLUE},
					    {text: "Азатот", size: 26, link: "azatot", color: android.graphics.Color.BLUE},
					    {text: "Ктулху", size: 26, link: "chtulhu", color: android.graphics.Color.BLUE},
					    {text: "Арк", size: 26, link: "Ark", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - Ковчег Космоса. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал Ковчег Космоса и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},	
	"calamitatis": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Calamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 11000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18},
			]
				}
	},
	
	"VenCul": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VenomCultist, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18},
    {text: "Количество жизней: 12000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Заразное пятно", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18},
			]
				}
	},
	
	"six": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kron, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существ: Человек, маги", size: 18},
    {text: "Количество жизней: 4000 у каждого", size: 18},
      {text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18},
        {text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18},
			]
				}
	},
	
	"hatur": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hatur, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хастур", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Бог, один из Древних", size: 18},
    {text: "Количество жизней: 14000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18},
			]
				}
	},
	
	"cicdea": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CiciditDea, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший Бог", size: 18},
    {text: "Количество жизней: 16000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18},
			]
				}
	},
	
	"vdd": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VerumDevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 15000?", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18},
			]
				}
	},
	
	"truncatis": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Truncatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Трункатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 20000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Фрагмент души Трункатиса, Ярость дракона(меч), Горящие небеса (меч), Оскверненный трезубец", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Трункатис это самый первый дракон, отец дракона Эндера. За счет того что он служит Арку, он обладает огромной силой, а так же может принимать форму человека.", size: 18},
			]
				}
	},
	
	"vc": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VerumCalamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Верум Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 25000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Уничтожение дракона(меч), Красное солнце (меч), Анимус (меч), Земля (меч), Азатот (меч), Истинный Паладинский Маг-Молот Могущества Триактиса (молот(оружие)), эссенция бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной. Она решила отомстить и последовав примеру Наиды превратила ад в то что вы видите сейчас. Так же Катаклисмус и Кладис это ее сестры, которых она возродила. Та Каламитатис что вы победили была лишь клоном, Каламитатис создала их для собственной безопасности, нет уверенности что и эта Каламитатис была настоящей...", size: 18},
			]
				}
	},
	
	"azatot": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.azatotingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Азатот", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший бог, древний бог", size: 18},
    {text: "Количество жизней: 30000", size: 18},
      {text: "Урон: 10", size: 18},
        {text: "Дроп: Пыль Азатота, ботинки Фиреруса, Тлеющие небеса (магическая книга(оружие))", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Азатот рожден самим Йог-Сототом, так же известным как бытие, тоесть Азатот сын бытия. Бог демонов. Живет в своем собственном мире на краю вселенной.", size: 18},
			]
				}
	},
	
	"chtulhu": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Chtulhu, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Ктулху", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший бог, древний бог", size: 18},
    {text: "Количество жизней: 35000", size: 18},
      {text: "Урон: 10", size: 18},
        {text: "Дроп: Кожа Ктулху, Внеземной (меч), Гибель Сверхновой (меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Ктулху древний бог, был заточен под древний город Р'льех под океаном еще до появления людей.", size: 18},
			]
				}
	},
	
	
	
	
	"Ark": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ark, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Арк", size: 20, color: android.graphics.Color.RED},
  {text: "Тип существа: Первобог (Йедэнбёг)", size: 18},
    {text: "Количество жизней: 1000000 (333333 в первой и второй фазе, 333334 в третьей фазе", size: 18},
      {text: "Урон: 100 в первой фазе, 25 в третьей и второй", size: 18},
        {text: "Дроп: Броня Арка, Сеся Креатива, Ковчег Космоса (истинный)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Арк один из первых богов созданных Струнами (Создателями), тоесть древнее его никого нет ибо Струны не имеют возраста, потому что они пришли из места где его не существует и создали время для нашей вселенной. Арк один из самых известных Йедэнбёгов так как он создал большую часть вселенной, создал квадраллионы, квинтиллионы, а может и больше планет и жизнь на них, устанавливал мир между ними и создал Закон Вселенной, что то типо конституции во всей нашей вселенной.", size: 18},
			]
				}
	},
	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE},
					    {text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					    {text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE},
					    {text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE},
					    {text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE},
					    {text: "Первобог", size: 26, link: "firstgod", color: android.graphics.Color.BLUE},
					    {text: "Создатель", size: 26, link: "creator", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
 
     "god": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18}
 ]
 }
 },
 
      "demon": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Демон", size: 20, color: android.graphics.Color.BLUE},
  {text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18}
 ]
 }
 },
 
      "angel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Ангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18}
 ]
 }
 },
 
      "archangel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Архангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18}
 ]
 }
 },
 
      "verumgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Высший бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18}
 ]
 }
 },
 
 
       "firstgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Первобог (Йедэнбёг)", size: 20, color: android.graphics.Color.BLUE},
  {text: "Это самые первые боги в нашей вселенной, они имеют полный контроль над ней. Обычно эти боги не учавствуют в жизни вселенной, но Арк внес огромный вклад в нее, так же известны другие Йедэнбёги: Эйбелл(сестра Арка), Йокто (создатель молекул и материи вцелом, поэтому он чувствует все что с ней происходит и так как большая часть вселенной это материя, он имеет огромную силу, в том числе он знает все что делаете вы ибо вы состоите из материи), Розетте (дочь Арка и Барнарды), Барнарда, Сомбреро (сын Эйбелл), Реаллорд (раньше был Струной), Колумнас Креатура (сын Арка, мертв), Игел (сын Колумнас Креатура) и Йхарон (создатель разума, но не смог его доделать ибо создавая сумашествие сошел с ума сам, за него разум доделал Колумнас Креатура)", size: 18}
 ]
 }
 },
 
 
        "creator": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Создатель (Струна)", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существами их назвать нельзя ибо они создали жизнь, а также нашу вселенную с ее законами: временем, пространством и т.д. сами они ''пришли'' из места где этого нет - Пустота, там нету ни времени, ни пространства, так что попав туда человек просто перестанет существовать. Для струн всё время и пространство едино, они знают что было, будет и могло бы быть (тоесть другие вселенные) Струны есть всегда и везде, по сути они и есть наша вселенная, они ее часть, а она часть их. Это сложно понять, как и объяснить каково быть Создателем", size: 18}
 ]
 }
 },
 
 "worlds": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Другие миры", size: 30, color: android.graphics.Color.RED},
						{text: "Другие миры паралельные нашему, созданые богами, они существуют и в некоторые из них вы можете попасть...", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Астрал", size: 26, link: "astral", color: android.graphics.Color.BLUE},
					    {text: "Азатот", size: 26, link: "azw", color: android.graphics.Color.BLUE},
			
			]
				}
			},
			
			      "astral": {
				preLink: "worlds",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Астрал", size: 20, color: android.graphics.Color.BLUE},
  {text: "Астрал, так же известный как Гавань или Космическая Гавань, это мир созданный Арком в награду для Верум Девоурер Деорума. Верум Девоурер Деорум может делать там что угодно. Мир состоит из розовых туманностей и нескольких звезд.", size: 18}
 ]
 }
 },
 
       "azw": {
				preLink: "worlds",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Азатот", size: 20, color: android.graphics.Color.BLUE},
  {text: "Мир созданный Азатотом где он может править. Мир состоит из живой материи Азатота. Так же Азатот постоянно завоевывает и соединяет со своим миров другие миры.", size: 18}
 ]
 }
 },
	
	},
	})
	});
	
	Callback.addCallback("tick", function(){
    var pos = Player.getPosition()
    var vr = parseInt(Math.random() * 61);
    var v = parseInt(Math.random() * 61);
    pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
	if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(Math.random() < .0006){
//Entity.spawnCustom("Paladin", pos.x+10, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(Math.random() < .0006){
//Entity.spawnCustom("Phantom", pos.x+10, pos.y + 1, pos.z);
}
}

if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(Math.random() < .0006){
//Entity.spawnCustom("PhantomSpirit", pos.x+10, pos.y + 1, pos.z);
}
}
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	






















ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
		
GuideAPI.registerGuide("arktludumthnbook", { 
item: ItemID.arktludumthnbook, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
	},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	}

})

//HOLLYBOT∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

GuideAPI.registerGuide("arktludumthnbookthree", { 
item: ItemID.arktludumthnbookthree, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
	
	}
	})
	
	
	
	//Холибот∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
	
	GuideAPI.registerGuide("arktludumthnbooktwo", { 
item: ItemID.arktludumthnbooktwo, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
	}
	})
	
	//KRACKEN∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
	
	GuideAPI.registerGuide("arktludumthnbookfour", { 
item: ItemID.arktludumthnbookfour, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
	
	},
	}),
	
	//ELEMENTALGUARDIAN
	
	GuideAPI.registerGuide("arktludumthnbookfive", { 
item: ItemID.arktludumthnbookfive, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
	
	},
	})
	
	//ARSENALGUARDIAN
	
	GuideAPI.registerGuide("arktludumthnbooksix", { 
item: ItemID.arktludumthnbooksix, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
	
	},
	})
	
	//ARSENALCREATOR
	
	GuideAPI.registerGuide("arktludumthnbookseven", { 
item: ItemID.arktludumthnbookseven, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
	
	},
	})
	
	//KKK∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
	
	GuideAPI.registerGuide("arktludumthnbookeight", { 
item: ItemID.arktludumthnbookeight, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
	
	},
	})
	
	//,,,,,,,DevDeo&@@_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
	
	GuideAPI.registerGuide("arktludumthnbooknine", { 
item: ItemID.arktludumthnbooknine, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
	
	},
	})
	
	//Seederus&&&Ekaterina
	
	GuideAPI.registerGuide("arktludumthnbookseederus", { 
item: ItemID.arktludumthnbookseederus, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
	
	},
	})
	
	//КаЛАМИТАТИС
	
	GuideAPI.registerGuide("arktludumthnbookcalamitatis", { 
item: ItemID.arktludumthnbookcalamitatis, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
					    {text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},	
	"calamitatis": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Calamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 11000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18},
			]
				}
	},
	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
	
	},
	})
	
	//VCultist=∆∆∆∆∆∆∆∆∆∆\∆∆∆∆∆∆∆∆∆∆
	
	GuideAPI.registerGuide("arktludumthnbookvenomcultist", { 
item: ItemID.arktludumthnbookvenomcultist, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
					    {text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE},
					    {text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE},
					    {text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},	
	"calamitatis": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Calamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 11000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18},
			]
				}
	},
	
	"VenCul": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VenomCultist, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, поклоняется древнему богу ኸአጠኢረ, который дает ему силы", size: 18},
    {text: "Количество жизней: 12000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Заразное пятно", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Заразный Культист это человек служащий богу ኸአጠኢረ, который взамен дает огромную силу.", size: 18},
			]
				}
	},
	
	"six": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kron, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существ: Человек, маги", size: 18},
    {text: "Количество жизней: 4000 у каждого", size: 18},
      {text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18},
        {text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18},
			]
				}
	},
	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
	
	},
	})
	
	//ኸአጠኢረ  ኸአጠኢረ  ኸአጠኢረ  ኸአጠኢረ  ኸአጠኢረ
	
	GuideAPI.registerGuide("arktludumthnbookhatur", { 
item: ItemID.arktludumthnbookhatur, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
					    {text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE},
					    {text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE},
					    {text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE},
					    {text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},	
	"calamitatis": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Calamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 11000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18},
			]
				}
	},
	
	"VenCul": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VenomCultist, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18},
    {text: "Количество жизней: 12000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Заразное пятно", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18},
			]
				}
	},
	
	"six": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kron, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существ: Человек, маги", size: 18},
    {text: "Количество жизней: 4000 у каждого", size: 18},
      {text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18},
        {text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18},
			]
				}
	},
	
	"hatur": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hatur, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хастур", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Бог, один из Древних", size: 18},
    {text: "Количество жизней: 14000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18},
			]
				}
	},
	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					    {text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
 
     "god": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18}
 ]
 }
 },
	
	},
	})
	
	//CICIDIT DEA, AIR BURNING!!!!
	
	GuideAPI.registerGuide("arktludumthnbookciciditdea", { 
item: ItemID.arktludumthnbookciciditdea, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
					    {text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE},
					    {text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE},
					    {text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE},
					    {text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE},
					    {text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},	
	"calamitatis": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Calamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 11000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18},
			]
				}
	},
	
	"VenCul": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VenomCultist, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18},
    {text: "Количество жизней: 12000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Заразное пятно", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18},
			]
				}
	},
	
	"six": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kron, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существ: Человек, маги", size: 18},
    {text: "Количество жизней: 4000 у каждого", size: 18},
      {text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18},
        {text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18},
			]
				}
	},
	
	"hatur": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hatur, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хастур", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Бог, один из Древних", size: 18},
    {text: "Количество жизней: 14000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18},
			]
				}
	},
	
	"cicdea": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CiciditDea, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший Бог", size: 18},
    {text: "Количество жизней: 16000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали הטורף האמיתי של האלים что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда הטורף האמיתי של האלים  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18},
			]
				}
	},
	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE},
					    {text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					    {text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE},
					    {text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE},
					    {text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
 
     "god": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18}
 ]
 }
 },
 
      "demon": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Демон", size: 20, color: android.graphics.Color.BLUE},
  {text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18}
 ]
 }
 },
 
      "angel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Ангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18}
 ]
 }
 },
 
      "archangel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Архангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18}
 ]
 }
 },
 
      "verumgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Высший бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18}
 ]
 }
 },
	
	},
	})
	
	//VerumDeoD_¥€¢£∆∆∆∆∆∆∆∆∆∆∆∆][][][∆|∆
	
	GuideAPI.registerGuide("arktludumthnbookverumdevourerdeorum", { 
item: ItemID.arktludumthnbookverumdevourerdeorum, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
	
	"bosses": {
		preLink: "default",
		nextLink:"bossestwo",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
					    {text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE},
					    {text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE},
					    {text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE},
					    {text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
			
			"bossestwo": {
		preLink: "bosses",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE},
					    {text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE},
					
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},
	
	"calamitatis": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Calamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 11000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18},
			]
				}
	},
	
	"VenCul": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VenomCultist, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18},
    {text: "Количество жизней: 12000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Заразное пятно", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18},
			]
				}
	},
	
	"six": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kron, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существ: Человек, маги", size: 18},
    {text: "Количество жизней: 4000 у каждого", size: 18},
      {text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18},
        {text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18},
			]
				}
	},
	
	"hatur": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hatur, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хастур", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Бог, один из Древних", size: 18},
    {text: "Количество жизней: 14000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18},
			]
				}
	},
	
	"cicdea": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CiciditDea, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший Бог", size: 18},
    {text: "Количество жизней: 16000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18},
			]
				}
	},
	
	"vdd": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VerumDevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 15000?", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18},
			]
				}
	},
	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE},
					    {text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					    {text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE},
					    {text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE},
					    {text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
 
     "god": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18}
 ]
 }
 },
 
      "demon": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Демон", size: 20, color: android.graphics.Color.BLUE},
  {text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18}
 ]
 }
 },
 
      "angel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Ангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18}
 ]
 }
 },
 
      "archangel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Архангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18}
 ]
 }
 },
 
      "verumgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Высший бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18}
 ]
 }
 },
	
	},
	})
	
	//Трункатис
	
	GuideAPI.registerGuide("arktludumthnbooktruncatis", { 
item: ItemID.arktludumthnbooktruncatis, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
					    {text: "Ковчег Космоса", size: 26, link: "aotc", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
			
			
			
			 "aotc": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ark_of_the_Cosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
    {text: "Копия меча которым пользуется сам Арк", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Подробнее про историю этого меча можно прочитать", size: 18},
					    {text: "тут", size: 18, link: "kkk", color: android.graphics.Color.BLUE},
			]
				}
			},
			
		
			
			
			
	
	"bosses": {
		preLink: "default",
				nextLink: "bossestwo",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
					    {text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE},
					    {text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE},
					    {text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE},
					    {text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
			
			"bossestwo": {
		preLink: "bosses",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE},
					    {text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE},
					    {text: "Трункатис", size: 26, link: "truncatis", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - Ковчег Космоса. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал Ковчег Космоса и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},	
	"calamitatis": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Calamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 11000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18},
			]
				}
	},
	
	"VenCul": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VenomCultist, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18},
    {text: "Количество жизней: 12000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Заразное пятно", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18},
			]
				}
	},
	
	"six": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kron, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существ: Человек, маги", size: 18},
    {text: "Количество жизней: 4000 у каждого", size: 18},
      {text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18},
        {text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18},
			]
				}
	},
	
	"hatur": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hatur, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хастур", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Бог, один из Древних", size: 18},
    {text: "Количество жизней: 14000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18},
			]
				}
	},
	
	"cicdea": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CiciditDea, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший Бог", size: 18},
    {text: "Количество жизней: 16000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18},
			]
				}
	},
	
	"vdd": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VerumDevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 15000?", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18},
			]
				}
	},
	
	"truncatis": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Truncatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Трункатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 20000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Фрагмент души Трункатиса, Ярость дракона(меч), Горящие небеса (меч), Оскверненный трезубец", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Трункатис это самый первый дракон, отец дракона Эндера. За счет того что он служит Арку, он обладает огромной силой, а так же может принимать форму человека.", size: 18},
			]
				}
	},
	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE},
					    {text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					    {text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE},
					    {text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE},
					    {text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
 
     "god": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18}
 ]
 }
 },
 
      "demon": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Демон", size: 20, color: android.graphics.Color.BLUE},
  {text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18}
 ]
 }
 },
 
      "angel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Ангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18}
 ]
 }
 },
 
      "archangel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Архангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18}
 ]
 }
 },
 
      "verumgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Высший бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18}
 ]
 }
 },
	
	},
	})
	
	//VerumCalamitatus*is*Calamitatis*Verum*is..
	
	GuideAPI.registerGuide("arktludumthnbookverumcalamitatis", { 
item: ItemID.arktludumthnbookverumcalamitatis, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
					    {text: "Ковчег Космоса", size: 26, link: "aotc", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
			
			
			
			 "aotc": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ark_of_the_Cosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
    {text: "Копия меча которым пользуется сам Арк", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Подробнее про историю этого меча можно прочитать", size: 18},
					    {text: "тут", size: 18, link: "kkk", color: android.graphics.Color.BLUE},
			]
				}
			},
			
		
			
			
			
	
	"bosses": {
		preLink: "default",
				nextLink: "bossestwo",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
					    {text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE},
					    {text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE},
					    {text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE},
					    {text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE},
					
			]
				}
			},
			
			"bossestwo": {
		preLink: "bosses",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE},
					    {text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE},
					    {text: "Трункатис", size: 26, link: "truncatis", color: android.graphics.Color.BLUE},
					    {text: "Верум Каламитатис", size: 26, link: "vc", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - Ковчег Космоса. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал Ковчег Космоса и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},	
	"calamitatis": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Calamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 11000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18},
			]
				}
	},
	
	"VenCul": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VenomCultist, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18},
    {text: "Количество жизней: 12000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Заразное пятно", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18},
			]
				}
	},
	
	"six": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kron, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существ: Человек, маги", size: 18},
    {text: "Количество жизней: 4000 у каждого", size: 18},
      {text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18},
        {text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18},
			]
				}
	},
	
	"hatur": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hatur, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хастур", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Бог, один из Древних", size: 18},
    {text: "Количество жизней: 14000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18},
			]
				}
	},
	
	"cicdea": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CiciditDea, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший Бог", size: 18},
    {text: "Количество жизней: 16000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18},
			]
				}
	},
	
	"vdd": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VerumDevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 15000?", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18},
			]
				}
	},
	
	"truncatis": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Truncatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Трункатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 20000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Фрагмент души Трункатиса, Ярость дракона(меч), Горящие небеса (меч), Оскверненный трезубец", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Трункатис это самый первый дракон, отец дракона Эндера. За счет того что он служит Арку, он обладает огромной силой, а так же может принимать форму человека.", size: 18},
			]
				}
	},
	
	"vc": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VerumCalamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Верум Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 25000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Уничтожение дракона(меч), Красное солнце (меч), Анимус (меч), Земля (меч), Азатот (меч), Истинный Паладинский Маг-Молот Могущества Триактиса (молот(оружие)), эссенция бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной. Она решила отомстить и последовав примеру Наиды превратила ад в то что вы видите сейчас. Так же Катаклисмус и Кладис это ее сестры, которых она возродила. Та Каламитатис что вы победили была лишь клоном, Каламитатис создала их для собственной безопасности, нет уверенности что и эта Каламитатис была настоящей...", size: 18},
			]
				}
	},
	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE},
					    {text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					    {text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE},
					    {text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE},
					    {text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
 
     "god": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18}
 ]
 }
 },
 
      "demon": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Демон", size: 20, color: android.graphics.Color.BLUE},
  {text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18}
 ]
 }
 },
 
      "angel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Ангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18}
 ]
 }
 },
 
      "archangel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Архангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18}
 ]
 }
 },
 
      "verumgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Высший бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18}
 ]
 }
 },
	
	},
	})
	
	//АЗАТОТХ
	
	GuideAPI.registerGuide("arktludumthnbookazatot", { 
item: ItemID.arktludumthnbookazatot, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						    {text: "Другие миры", size: 26, link: "worlds", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
					    {text: "Ковчег Космоса", size: 26, link: "aotc", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
			
			
			
			 "aotc": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ark_of_the_Cosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
    {text: "Копия меча которым пользуется сам Арк", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Подробнее про историю этого меча можно прочитать", size: 18},
					    {text: "тут", size: 18, link: "kkk", color: android.graphics.Color.BLUE},
			]
				}
			},
			
		
			
			
			
	
	"bosses": {
		preLink: "default",
				nextLink: "bossestwo",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
					    {text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE},
					    {text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE},
					    {text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE},
					    {text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE},
					
			]
				}
			},
			
			"bossestwo": {
		preLink: "bosses",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE},
					    {text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE},
					    {text: "Трункатис", size: 26, link: "truncatis", color: android.graphics.Color.BLUE},
					    {text: "Верум Каламитатис", size: 26, link: "vc", color: android.graphics.Color.BLUE},
					    {text: "Азатот", size: 26, link: "azatot", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - Ковчег Космоса. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал Ковчег Космоса и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},	
	"calamitatis": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Calamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 11000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18},
			]
				}
	},
	
	"VenCul": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VenomCultist, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18},
    {text: "Количество жизней: 12000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Заразное пятно", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18},
			]
				}
	},
	
	"six": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kron, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существ: Человек, маги", size: 18},
    {text: "Количество жизней: 4000 у каждого", size: 18},
      {text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18},
        {text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18},
			]
				}
	},
	
	"hatur": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hatur, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хастур", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Бог, один из Древних", size: 18},
    {text: "Количество жизней: 14000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18},
			]
				}
	},
	
	"cicdea": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CiciditDea, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший Бог", size: 18},
    {text: "Количество жизней: 16000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18},
			]
				}
	},
	
	"vdd": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VerumDevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 15000?", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18},
			]
				}
	},
	
	"truncatis": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Truncatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Трункатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 20000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Фрагмент души Трункатиса, Ярость дракона(меч), Горящие небеса (меч), Оскверненный трезубец", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Трункатис это самый первый дракон, отец дракона Эндера. За счет того что он служит Арку, он обладает огромной силой, а так же может принимать форму человека.", size: 18},
			]
				}
	},
	
	"vc": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VerumCalamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Верум Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 25000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Уничтожение дракона(меч), Красное солнце (меч), Анимус (меч), Земля (меч), Азатот (меч), Истинный Паладинский Маг-Молот Могущества Триактиса (молот(оружие)), эссенция бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной. Она решила отомстить и последовав примеру Наиды превратила ад в то что вы видите сейчас. Так же Катаклисмус и Кладис это ее сестры, которых она возродила. Та Каламитатис что вы победили была лишь клоном, Каламитатис создала их для собственной безопасности, нет уверенности что и эта Каламитатис была настоящей...", size: 18},
			]
				}
	},
	
	"azatot": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.azatotingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Азатот", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший бог, древний бог", size: 18},
    {text: "Количество жизней: 30000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Пыль Азатота, ботинки Фиреруса, Тлеющие небеса (магическая книга(оружие))", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Азатот рожден самим Йог-Сототом, так же известным как бытие, тоесть Азатот сын бытия. Бог демонов. Живет в своем собственном мире на краю вселенной.", size: 18},
			]
				}
	},
	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE},
					    {text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					    {text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE},
					    {text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE},
					    {text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
 
     "god": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18}
 ]
 }
 },
 
      "demon": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Демон", size: 20, color: android.graphics.Color.BLUE},
  {text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18}
 ]
 }
 },
 
      "angel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Ангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18}
 ]
 }
 },
 
      "archangel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Архангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18}
 ]
 }
 },
 
      "verumgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Высший бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18}
 ]
 }
 },
 
 "worlds": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Другие миры", size: 30, color: android.graphics.Color.RED},
						{text: "Другие миры паралельные нашему, созданые богами, они существуют и в некоторые из них вы можете попасть...", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Астрал", size: 26, link: "astral", color: android.graphics.Color.BLUE},
					    {text: "Азатот", size: 26, link: "azw", color: android.graphics.Color.BLUE},
			
			]
				}
			},
			
			      "astral": {
				preLink: "worlds",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Астрал", size: 20, color: android.graphics.Color.BLUE},
  {text: "Астрал, так же известный как Гавань или Космическая Гавань, это мир созданный Арком в награду для Верум Девоурер Деорума. Верум Девоурер Деорум может делать там что угодно. Мир состоит из розовых туманностей и нескольких звезд.", size: 18}
 ]
 }
 },
 
       "azw": {
				preLink: "worlds",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Азатот", size: 20, color: android.graphics.Color.BLUE},
  {text: "Мир созданный Азатотом где он может править. Мир состоит из живой материи Азатота. Так же Азатот постоянно завоевывает и соединяет со своим миров другие миры.", size: 18}
 ]
 }
 },
	
	},
	})
	
	//КТУЛХУФ'ТАГН
	
	GuideAPI.registerGuide("arktludumthnbookchtulhu", { 
item: ItemID.arktludumthnbookchtulhu, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "btn_close", 
}, 

				
pages: {
 
			"default": {
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Arktludumthn", size: 30, color: android.graphics.Color.RED},
						{text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE},
					    {text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE},
						    {text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE},
						    {text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE},
						    {text: "Другие миры", size: 26, link: "worlds", color: android.graphics.Color.BLUE},
						
						
						
			]
				}
			},
			
			"items": {
				preLink: "default",
				nextLink: "cometite",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ignisusingot, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.aquatiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.aeriteingot, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.territeingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE},
  {text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18}
 ]
 }
	},
	
	"cometite": {
				preLink: "items",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.cometiteingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кометит", size: 20, color: android.graphics.Color.BLUE},
  {text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18}
 ]
 }
	},
	
	"ar": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Артефакты", size: 30, color: android.graphics.Color.RED},
						{text: "Артефакты это вещи с необычными способностями", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE},
					    {text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE},
					    {text: "Ковчег Космоса", size: 26, link: "aotc", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hearts": {
				preLink: "ar",
				nextLink: "fireheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.lifecrystal, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE},
  {text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18}
 ]
 }
	},
	
	"fireheart": {
				preLink: "hearts",
				nextLink: "elheart",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.fireheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE},
  {text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18}
 ]
 }
 },
 
 "fireheart": {
				preLink: "fireheart",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.elementalheart, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18}
 ]
 }
 },
 

 
 "horngodarmor": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.horngodhelmet, data: 0, clicker: {onClick: function(){alert("null");}}},
          {id: ItemID.horngodchestplate, data: 0, clicker: {onClick: function(){alert("null");}}},
               {id: ItemID.horngodleggings, data: 0, clicker: {onClick: function(){alert("null");}}},
                    {id: ItemID.horngodboots, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE},
  {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18},
    {text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18},
			]
				}
			},
			
			
			
			 "aotc": {
				preLink: "ar",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ark_of_the_Cosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
    {text: "Копия меча которым пользуется сам Арк", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Подробнее про историю этого меча можно прочитать", size: 18},
					    {text: "тут", size: 18, link: "kkk", color: android.graphics.Color.BLUE},
			]
				}
			},
			
		
			
			
			
	
	"bosses": {
		preLink: "default",
				nextLink: "bossestwo",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE},
					    {text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE},
					    {text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE},
					    {text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE},
					    {text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE},
					    {text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE},
					    {text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE},
					    {text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE},
					    {text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE},
					    {text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE},
					    {text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE},
					    {text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE},
					    {text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE},
					    {text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE},
					
			]
				}
			},
			
			"bossestwo": {
		preLink: "bosses",
				
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Боссы", size: 30, color: android.graphics.Color.RED},
						{text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE},
					    {text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE},
					    {text: "Трункатис", size: 26, link: "truncatis", color: android.graphics.Color.BLUE},
					    {text: "Верум Каламитатис", size: 26, link: "vc", color: android.graphics.Color.BLUE},
					    {text: "Азатот", size: 26, link: "azatot", color: android.graphics.Color.BLUE},
					    {text: "Ктулху", size: 26, link: "chtulhu", color: android.graphics.Color.BLUE},
			]
				}
			},
			
			"hollybot": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hollybot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Механизм", size: 18},
    {text: "Количество жизней: 100", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18},
			]
				}
	},
	
	"naida": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Naida, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Наида", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Языческая богиня", size: 18},
    {text: "Количество жизней: 1000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18},
			]
				}
	},
	
	"kracken": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kracken, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Кракен", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18},
    {text: "Количество жизней: 3000", size: 18},
      {text: "Урон: 3", size: 18},
        {text: "Дроп: Слиток Кракена", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18},
			]
				}
	},
	
	"elg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ElementalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18},
    {text: "Количество жизней: 6000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18},
			]
				}
	},
	
	"arg": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalGuardian, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин)", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Космилитовый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18},
			]
				}
	},
	
	"arc": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.ArsenalCreator, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18},
    {text: "Количество жизней: 7000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Омикроновый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - Ковчег Космоса. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18},
			]
				}
	},
	
	"kkk": {
				preLink: "bosses",
				nextLink: "kkktwo",
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18},
    {text: "Количество жизней: 8000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Стелла Сфаэра", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал Ковчег Космоса и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"kkktwo": {
				preLink: "kkk",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
{text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18},
			]
				}
	},
	
	"ddeshka": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.DevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18},
    {text: "Количество жизней: 9000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18},
			]
				}
	},
	
	"seederus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Seederus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18},
			]
				}
	},
	
	"ekatebrina": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Ekatebrina, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Северный полюс, Термоэнергия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18},
			]
				}
	},
	
	"zeus": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Zeus, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Зевс", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Лорд", size: 18},
    {text: "Количество жизней: 10000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18},
			]
				}
	},	
	"calamitatis": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Calamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 11000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18},
			]
				}
	},
	
	"VenCul": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VenomCultist, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18},
    {text: "Количество жизней: 12000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Заразное пятно", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18},
			]
				}
	},
	
	"six": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Kron, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существ: Человек, маги", size: 18},
    {text: "Количество жизней: 4000 у каждого", size: 18},
      {text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18},
        {text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18},
			]
				}
	},
	
	"hatur": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Hatur, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Хастур", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Бог, один из Древних", size: 18},
    {text: "Количество жизней: 14000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18},
			]
				}
	},
	
	"cicdea": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.CiciditDea, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший Бог", size: 18},
    {text: "Количество жизней: 16000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18},
			]
				}
	},
	
	"vdd": {
				preLink: "bosses",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VerumDevourerDeorum, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 15000?", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18},
			]
				}
	},
	
	"truncatis": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Truncatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Трункатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Монстр", size: 18},
    {text: "Количество жизней: 20000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Фрагмент души Трункатиса, Ярость дракона(меч), Горящие небеса (меч), Оскверненный трезубец", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Трункатис это самый первый дракон, отец дракона Эндера. За счет того что он служит Арку, он обладает огромной силой, а так же может принимать форму человека.", size: 18},
			]
				}
	},
	
	"vc": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.VerumCalamitatis, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Верум Каламитатис", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Человек, проклята и обладает магии", size: 18},
    {text: "Количество жизней: 25000", size: 18},
      {text: "Урон: 5", size: 18},
        {text: "Дроп: Уничтожение дракона(меч), Красное солнце (меч), Анимус (меч), Земля (меч), Азатот (меч), Истинный Паладинский Маг-Молот Могущества Триактиса (молот(оружие)), эссенция бедствия", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной. Она решила отомстить и последовав примеру Наиды превратила ад в то что вы видите сейчас. Так же Катаклисмус и Кладис это ее сестры, которых она возродила. Та Каламитатис что вы победили была лишь клоном, Каламитатис создала их для собственной безопасности, нет уверенности что и эта Каламитатис была настоящей...", size: 18},
			]
				}
	},
	
	"azatot": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.azatotingot, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Азатот", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший бог, древний бог", size: 18},
    {text: "Количество жизней: 30000", size: 18},
      {text: "Урон: 10", size: 18},
        {text: "Дроп: Пыль Азатота, ботинки Фиреруса, Тлеющие небеса (магическая книга(оружие))", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Азатот рожден самим Йог-Сототом, так же известным как бытие, тоесть Азатот сын бытия. Бог демонов. Живет в своем собственном мире на краю вселенной.", size: 18},
			]
				}
	},
	
	"chtulhu": {
				preLink: "bossestwo",
				
			left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.Chtulhu, data: 0, clicker: {onClick: function(){alert("null");}}},

 ],
 elements: [
 {text: "Ктулху", size: 20, color: android.graphics.Color.BLUE},
  {text: "Тип существа: Высший бог, древний бог", size: 18},
    {text: "Количество жизней: 35000", size: 18},
      {text: "Урон: 10", size: 18},
        {text: "Дроп: Кожа Ктулху, Внеземной (меч), Гибель Сверхновой (меч)", size: 18}
 ]
 },
 
 right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Ктулху древний бог, был заточен под древний город Р'льех под океаном еще до появления людей.", size: 18},
			]
				}
	},
	
	
	
	
	
	"mobtype": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Типы существ", size: 30, color: android.graphics.Color.RED},
						{text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE},
					    {text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE},
					    {text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE},
					    {text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE},
					    {text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE},
					    {text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE},
					    {text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE},
					    {text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE},
					    {text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE},
					    {text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE},
					
					
			]
				}
			},
	
	"mechanism": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 items: [ 


 ],
 elements: [
 {text: "Механизм", size: 20, color: android.graphics.Color.BLUE},
  {text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18}
 ]
 }
 },
 
 "smallgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18}
 ]
 }
 },
 
  "monster": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Монстр", size: 20, color: android.graphics.Color.BLUE},
  {text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18}
 ]
 }
 },
 
   "men": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Человек", size: 20, color: android.graphics.Color.BLUE},
  {text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18}
 ]
 }
 },
 
    "lord": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Лорд", size: 20, color: android.graphics.Color.BLUE},
  {text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18}
 ]
 }
 },
 
     "god": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18}
 ]
 }
 },
 
      "demon": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Демон", size: 20, color: android.graphics.Color.BLUE},
  {text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18}
 ]
 }
 },
 
      "angel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Ангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18}
 ]
 }
 },
 
      "archangel": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Архангел", size: 20, color: android.graphics.Color.BLUE},
  {text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18}
 ]
 }
 },
 
      "verumgod": {
				preLink: "mobtype",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Высший бог", size: 20, color: android.graphics.Color.BLUE},
  {text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18}
 ]
 }
 },
 
 "worlds": {
				preLink: "default",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Другие миры", size: 30, color: android.graphics.Color.RED},
						{text: "Другие миры паралельные нашему, созданые богами, они существуют и в некоторые из них вы можете попасть...", size: 18},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
					    {text: "Астрал", size: 26, link: "astral", color: android.graphics.Color.BLUE},
					    {text: "Азатот", size: 26, link: "azw", color: android.graphics.Color.BLUE},
			
			]
				}
			},
			
			      "astral": {
				preLink: "worlds",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Астрал", size: 20, color: android.graphics.Color.BLUE},
  {text: "Астрал, так же известный как Гавань или Космическая Гавань, это мир созданный Арком в награду для Верум Девоурер Деорума. Верум Девоурер Деорум может делать там что угодно. Мир состоит из розовых туманностей и нескольких звезд.", size: 18}
 ]
 }
 },
 
       "azw": {
				preLink: "worlds",
				
			left: {
 controller: PageControllers.BASIC_PAGE,
 
 elements: [
 {text: "Азатот", size: 20, color: android.graphics.Color.BLUE},
  {text: "Мир созданный Азатотом где он может править. Мир состоит из живой материи Азатота. Так же Азатот постоянно завоевывает и соединяет со своим миров другие миры.", size: 18}
 ]
 }
 },
	
	},
	})
	
	
	

});
