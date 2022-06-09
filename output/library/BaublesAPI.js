/*
     ____              _     _                    _____ _____
    |  _ \            | |   | |             /\   |  __ \_   _|
    | |_) | __ _ _   _| |__ | | ___  ___   /  \  | |__) || |
    |  _ < / _` | | | | '_ \| |/ _ \/ __| / /\ \ |  ___/ | |
    | |_) | (_| | |_| | |_) | |  __/\__ \/ ____ \| |    _| |_
    |____/ \__,_|\__,_|_.__/|_|\___||___/_/    \_\_|   |_____|
                                         
    BaublesAPI library
     
    Условия использования:
      - Запрещено распространение библиотеки на сторонних источниках
        без ссылки на официальное сообщество(https://vk.com/forestry_pe)
      - Запрещено изменение кода библиотеки
      - Запрещено явное копирование кода в другие библиотеки или моды
      - Используя библиотеку вы автоматически соглашаетесь с описанными
        выше условиями
             
    ©DDCompany (https://vk.com/forestry_pe)
*/
LIBRARY({
    name: "BaublesAPI",
    version: 2,
    shared: true,
    api: "CoreEngine",
});
var LOG_TAG = "BAUBLES-API";
var GUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Baubles"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [],
    elements: {
        "player": {
            type: "image",
            bitmap: "baubles.player",
            scale: 1,
            x: 550,
            y: 80
        },
        "amulet": {
            type: "slot", x: 550 - 65, y: 85, bitmap: "baubles.slot.amulet",
            isValid: function (id) {
                return Baubles.getType(id) === BaubleType.amulet;
            }
        },
        "ring0": {
            type: "slot", x: 550 - 65, y: 80 + 173 - 65, bitmap: "baubles.slot.ring",
            isValid: function (id) {
                return Baubles.getType(id) === BaubleType.ring;
            }
        },
        "ring1": {
            type: "slot", x: 550 + 144 + 5, y: 80 + 173 - 65, bitmap: "baubles.slot.ring",
            isValid: function (id) {
                return Baubles.getType(id) === BaubleType.ring;
            }
        },
        "belt": {
            type: "slot", x: 550 + 38 + 4, y: 80 + 175 + 15, bitmap: "baubles.slot.belt",
            isValid: function (id) {
                return Baubles.getType(id) === BaubleType.belt;
            }
        },
        "head": {
            type: "slot", x: 550 + 144 + 5, y: 85, bitmap: "baubles.slot.head",
            isValid: function (id) {
                return Baubles.getType(id) === BaubleType.head;
            }
        },
        "body": {
            type: "slot", x: 550 + 38 + 4, y: 80 + 55 + 5, bitmap: "baubles.slot.body",
            isValid: function (id) {
                return Baubles.getType(id) === BaubleType.body;
            }
        },
        "charm": {
            type: "slot", x: 550 + 38 + 4, y: 80 + 55 + 5 + 60, bitmap: "baubles.slot.charm",
            isValid: function (id) {
                return Baubles.getType(id) === BaubleType.charm;
            }
        }
    }
});
var BUTTON_GUI = new UI.Window({
    location: {
        x: 10,
        y: UI.getScreenHeight() - 70,
        width: 60,
        height: 60
    },
    drawing: [],
    elements: {
        "btn": {
            type: "button",
            x: 0,
            y: 0,
            bitmap: "baubles.open_btn",
            bitmap2: "baubles.open_btn_pressed",
            scale: 1000 / 26,
            clicker: {
                onClick: function () {
                    Threading.initThread("Baubles UI open request", function () {
                        Baubles.openGui();
                    });
                }
            }
        }
    }
});
var BaubleType;
(function (BaubleType) {
    BaubleType["amulet"] = "amulet";
    BaubleType["ring"] = "ring";
    BaubleType["belt"] = "belt";
    BaubleType["head"] = "head";
    BaubleType["body"] = "body";
    BaubleType["charm"] = "charm";
})(BaubleType || (BaubleType = {}));
var Baubles = /** @class */ (function () {
    function Baubles() {
    }
    Baubles.registerBauble = function (obj) {
        if (!obj.onEquip) {
            obj.onEquip = function () {
            };
        }
        if (!obj.onTakeOff) {
            obj.onTakeOff = function () {
            };
        }
        if (!obj.tick) {
            obj.tick = function () {
            };
        }
        this.descriptions[obj.id] = obj;
    };
    Baubles.setupClientSide = function () {
        ItemContainer.registerScreenFactory("baubles.ui", function (container, name) { return name === "main" ? GUI : null; });
    };
    Baubles.setupServerSide = function () {
        var _this = this;
        Network.addServerPacket("baubles.open_ui", function (client) { return _this.openGuiFor(client); });
    };
    Baubles.setupContainer = function (playerUid, container) {
        Logger.Log(container)
        if (container === void 0) { container = new ItemContainer(); }
        container.setClientContainerTypeName("baubles.ui");
        var slots = ["amulet", "ring0", "ring1", "belt", "head", "body", "charm"];
        for (var _i = 0; _i < slots.length; _i++) {
            var name_1 = slots[_i];
            container.setDirtySlotListener(name_1, function (container, name, slot) {
                var _a, _b;
                var data = Baubles.data[playerUid];
                var old = data.cache[name];
                if ((!old && slot.id != 0) || slot.id !== old) {
                    var client = Network.getClientForPlayer(playerUid);
                    if (old) {
                        (_a = Baubles.getDesc(old)) === null || _a === void 0 ? void 0 : _a.onTakeOff(client, data.container, name);
                    }else{
                        (_b = Baubles.getDesc(slot.id)) === null || _b === void 0 ? void 0 : _b.onEquip(client, data.container, name);
                    }
                    data.cache[name] = slot.id;
                }
            });
            container.setSlotAddTransferPolicy(name_1, function (container, name, id, amount) {
                var baubleType = name === "ring0" || name === "ring1" ? "ring" : name;
                return Baubles.getType(id) === baubleType ?
                    Math.min(amount, Item.getMaxStack(id) - container.getSlot(name).count) : 0;
            });
        }
        return container;
    };
    Baubles.getContainer = function (client) {
        var uid = client.getPlayerUid();
        var bauble = this.data[uid];
        if (!bauble) {
            bauble = this.data[uid] = {
                container: this.setupContainer(client.getPlayerUid()),
                cache: {},
            };
        }
        return bauble.container;
    };
    Baubles.tick = function () {
        var _a;
        for (var uid in Baubles.data) {
            var client = Network.getClientForPlayer(parseInt(uid));
            if (!client) {
                continue;
            }
            var data = Baubles.data[uid];
            var cache = data.cache;
            for (var slot in cache) {
                (_a = Baubles.getDesc(cache[slot])) === null || _a === void 0 ? void 0 : _a.tick(client, data.container, slot);
            }
        }
    };
    Baubles.openGui = function () {
        Network.sendToServer("baubles.open_ui", {});
    };
    Baubles.openGuiFor = function (client) {
        Baubles.getContainer(client)
            .openFor(client, "main");
    };
    Baubles.getDesc = function (id) {
        return this.descriptions[id] || null;
    };
    Baubles.getType = function (id) {
        var desc = this.descriptions[id];
        if (!desc) {
            return null;
        }
        return desc.type;
    };
    Baubles.reset = function () {
        Baubles.data = {};
    };
    Baubles.getDataFor = function (playerUid) {
        return this.data[playerUid] || null;
    };
    Baubles.btnContainer = new UI.Container();
    Baubles.descriptions = {};
    Baubles.data = {};
    return Baubles;
}());
Baubles.setupClientSide();
Baubles.setupServerSide();
Callback.addCallback("tick", function () { return Baubles.tick(); });
Callback.addCallback("LevelLeft", function () { return Baubles.reset(); });
Callback.addCallback("EntityDeath", function (entity) {
    if (Entity.getType(entity) == 63) { //player
        var data = Baubles.getDataFor(entity);
        if (!data) {
            return;
        }
        var client = Network.getClientForPlayer(entity);
        if (!client) {
            return;
        }
        var pos = Entity.getPosition(entity);
        var blockSource = BlockSource.getDefaultForActor(entity);
        var container = data.container;
        for (var i in data.cache) {
            var bauble = Baubles.descriptions[data.cache[i]];
            if (bauble.onTakeOff) {
                bauble.onTakeOff(client, data.container, i);
            }
            container.dropSlot(blockSource, i, pos.x, pos.y, pos.z);
        }
    }
});
Callback.addCallback("ServerPlayerLoaded", function (player) {
    var client = Network.getClientForPlayer(player);
    if (!client) {
        return;
    }
    var data = Baubles.getDataFor(client.getPlayerUid());
    if (!data) {
        return;
    }
    var cache = data.cache;
    for (var slot in cache) {
        var desc = Baubles.getDesc(cache[slot]);
        if (!desc) {
            continue;
        }
        desc.onEquip(client, data.container, slot);
    }
});
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === "inventory_screen_pocket" || screenName === "inventory_screen") {
        Baubles.btnContainer.openAs(BUTTON_GUI);
    }
    else {
        Baubles.btnContainer.close();
    }
});
EXPORT("Baubles", Baubles);
EXPORT("BaubleType", BaubleType);
Saver.addSavesScope("Baubles", function (scope) {
    var _a;
    if (!scope._format) {
        Logger.Log("Old saves detected. Converting...", LOG_TAG);
        // @ts-ignore
        var container = scope.container;
        if (!container) {
            return;
        }
        var cache = {};
        var slots = container.slots;
        for (var slotName in slots) {
            cache[slotName] = slots[slotName].id;
        }
        Baubles.data = (_a = {},
            _a[Player.get()] = {
                // @ts-ignore
                container: new ItemContainer(scope.container),
                cache: cache,
            },
            _a);
        return;
    }
    var data = scope.data;
    Baubles.data = data;
    for (var uid in data) {
        Baubles.setupContainer(parseInt(uid), data[uid].container);
    }
}, function () {
    return { data: Baubles.data, _format: 1 };
});
