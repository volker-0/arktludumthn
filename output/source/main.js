var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
importLib("ToolLib");
IMPORT("SettingsManager");
//IMPORT("DungeonAPI");
IMPORT("SoundAPI");
//IMPORT("RechargeLib");
IMPORT("BaublesAPI");
var folder = __dir__ + "/sounds/";
var MusicPlayer = new MediaPlayer();
MediaPlayer.register("Holybot.music", folder + "Holybot.mp3");
var EssenceAPI = {
    registerDropEntity: function (idEntity, idEssence, countMax) {
        countMax = countMax || 3;
        Callback.addCallback("EntityDeath", function (entity) {
            if (Entity.getType(entity) == idEntity) {
                var coords = Entity.getPosition(entity);
                var soul = parseInt(Math.random() * countMax);
                BlockSource.getDefaultForActor(entity).spawnDroppedItem(coords.x, coords.y, coords.z, idEssence, soul, 0, null);
            }
        });
    },
    registerDropEntityArr: function (idEntityArr, idEssence, countMax) {
        countMax = countMax || 3;
        Callback.addCallback("EntityDeath", function (entity) {
            if (idEntityArr.indexOf(Entity.getType(entity)) != -1) {
                var coords = Entity.getPosition(entity);
                var soul = parseInt(Math.random() * countMax);
                BlockSource.getDefaultForActor(entity).spawnDroppedItem(coords.x, coords.y, coords.z, idEssence, soul, 0, null);
            }
        });
    },
    registerPlayerAttackEffect: function (id, random, idEffect, level, time) {
        level = level || 1;
        time = time || 20;
        Callback.addCallback("PlayerAttack", function (player, victim) {
            var item = Entity.getCarriedItem(player);
            if (item.id == id) {
                if (Math.random() < random) {
                    Entity.addEffect(victim, idEffect, level, time, true, true);
                }
            }
        });
    }
};
function ItemGenerate() {
    this.items = [];
    this.addItem = function (id, random, count, data) {
        random = random || 1;
        count = count || {};
        count.min = count.min || 1;
        count.max = count.max || 1;
        data = data || 0;
        this.items.push({ id: id, random: random, count: count, data: data });
    };
    this.fillChest = function (x, y, z, region, random) {
        region = region || BlockSource.getCurrentWorldGenRegion();
        random = random || new java.util.Random();
        var container = World.getContainer(x, y, z, region);
        if (!container)
            return;
        for (var i in this.items) {
            var obj = this.items[i];
            if (random.nextFloat() <= obj.random) {
                container.setSlot(random.nextInt(27), obj.id, Math.floor(Math.random() * (obj.count.max - obj.count.min)) + obj.count.min, obj.data, null);
            }
        }
    };
}
ArmorAPI = {
    Armor: {},
    RegisterArmor: function (id, def) {
        this.Armor[id] = def;
    },
};
ArmorAPI.RegisterArmor(ItemID.aerchestplate, 2);
Callback.addCallback("EntityHurt", function (attacker, entity, damageValue, damageType) {
    if (damageType == 2 || damageType == 3 || damageType == 11) {
        var defense = 0;
        var startHealth_1 = Entity.getMaxHealth(entity);
        for (var i = 0; i < 4; i++) {
            if (Entity.getArmorSlot(entity, i).id in ArmorAPI.Armor) {
                for (var id in ArmorAPI.Armor) {
                    if (Entity.getArmorSlot(entity, i).id == id) {
                        defense += ArmorAPI.Armor[id];
                        break;
                    }
                }
                ;
            }
            ;
        }
        ;
        if (damageValue > defense) {
            if (damageValue < Entity.getHealth(entity) + defense) {
                Entity.setMaxHealth(entity, startHealth_1 + defense);
                Entity.setHealth(entity, Entity.getHealth(entity) + defense);
                runOnMainThread(function () {
                    Entity.setMaxHealth(entity, startHealth_1);
                });
            }
            ;
        }
        else {
            Entity.setMaxHealth(entity, Entity.getMaxHealth(entity) + damageValue - 1);
            Entity.healEntity(entity, damageValue - 1);
            runOnMainThread(function () {
                Entity.setMaxHealth(entity, startHealth_1);
            });
        }
        ;
    }
    ;
});
var Panel = {
    window: new UI.Window({
        location: {
            x: 0,
            y: 110,
            width: 50,
            height: 200
        },
        elements: {
            "0": { type: "button", visual: true, x: -1000, y: 0, size: 1000 }
        },
        drawing: [
            { type: "bitmap", x: 0, y: 0, bitmap: "button_time_stop", width: 997, height: 600 }
        ]
    }),
    container: new ItemContainer(),
    enabled: false,
    open: function (client) {
        //this.container.closeFor(client);
        this.window.setAsGameOverlay(true);
        this.container.openFor(client, this.window);
    },
    close: function (client) {
        this.container.closeFor(client);
    },
};
var TimeStop = function (time, enabled) {
};
var GoldParticle = Particles.registerParticleType({
    texture: "nitor",
    size: [0.25, 2],
    lifetime: [60, 60],
    color: [0.77, 0.67, 0, 0.4],
    render: 0,
});
var EmeraldParticle = Particles.registerParticleType({
    texture: "nitor",
    size: [0.25, 2],
    lifetime: [60, 60],
    color: [0, 0.69, 0.17, 0.4],
    render: 0,
});
var IronParticle = Particles.registerParticleType({
    texture: "nitor",
    size: [0.25, 2],
    lifetime: [60, 60],
    color: [0.7, 0.7, 0.7, 0.4],
    render: 0,
});
var LypisParticle = Particles.registerParticleType({
    texture: "nitor",
    size: [0.25, 2],
    lifetime: [60, 60],
    color: [0.11, 0.31, 0.74, 0.4],
    render: 0,
});
var DiamondParticle = Particles.registerParticleType({
    texture: "nitor",
    size: [0.25, 2],
    lifetime: [60, 60],
    color: [0.12, 0.74, 0.70, 0.4],
    render: 0,
});
var AltarAPI = {
    AltarBase: {
        98: 1,
        112: 2,
    },
    Catalizator: {
        22: [5, LypisParticle],
        57: [7, DiamondParticle],
        41: [10, GoldParticle],
        42: [3, IronParticle],
        133: [9, EmeraldParticle],
    },
    Recipes: [],
    BaseBlock: function (blockid, power) {
        this.AltarBase[blockid] = power;
    },
    BaseBlockArr: function (blockidArr, powerArr) {
        for (var i = 0; i < blockidArr.length; i++) {
            this.AltarBase[blockidArr[i]] = powerArr[i];
        }
        ;
    },
    CatalizatorBlock: function (blockid, power, particle) {
        this.Catalizator[blockid] = [power, particle];
    },
    CatalizatorBlockArr: function (blockidArr, powerArr, particleArr) {
        for (var i = 0; i < blockidArr.length; i++) {
            this.Catalizator[blockidArr[i]] = [powerArr[i], particleArr[i]];
        }
        ;
    },
    CatalizatorBlockDelete: function (blockid) {
        delete this.Catalizator[blockid];
    },
    CatalizatorBlocDeletekArr: function (blockidArr) {
        for (var i = 0; i < blockidArr.length; i++) {
            delete this.Catalizator[blockidArr[i]];
        }
        ;
    },
    BaseBlockDelete: function (blockid) {
        delete this.AltarBase[blockid];
    },
    BaseBlocDeletekArr: function (blockidArr) {
        for (var i = 0; i < blockidArr.length; i++) {
            delete this.Base[blockidArr[i]];
        }
        ;
    },
    AddAltarRecipe: function (recipe) {
        if (!recipe.input) {
            Logger.Log("Input is not correct! (Altar)", "ARK");
            return;
        }
        ;
        if (!recipe.output) {
            Logger.Log("Output is not correct! (Altar)", "ARK");
            return;
        }
        ;
        for (var i = 0; i < 9; i++) {
            var copy = recipe.input[i];
            if (recipe.input[i] == undefined) {
                recipe.input[i] = { id: 0, data: 0, count: 1 };
            }
            else {
                copy.count = 1;
            }
            ;
        }
        ;
        recipe.output.count = 1;
        var input = [];
        for (var i = 0; i < 9; i++) {
            input[i] = recipe.input[i];
        }
        ;
        var output = [recipe.output];
        var recipefull = { input: input, output: output, energy: recipe.energy };
        this.Recipes.push(recipefull);
    },
};
var cloud = Block.createSpecialType({
    base: 35,
    lightopacity: 6,
    destroytime: 1,
    opaque: false
}, "wool");
var dimens = Block.createSpecialType({
    base: 2,
    solid: true,
    destroytime: 0.1,
    explosionres: 1,
    opaque: true
});
IDRegistry.genBlockID("aeriteore");
Block.createBlock("aeriteore", [{ name: "Аэритовая руда", texture: [["aeriteore", 0], ["aeriteore", 0], ["aeriteore", 0], ["aeriteore", 0], ["aeriteore", 0], ["aeriteore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.aeriteore, "stone", 3, true);
Block.setDestroyLevel(BlockID.aeriteore, 1);
Block.registerDropFunction("aeriteore", function (coords, blockID, blockData, level) {
    if (level > 0) {
        return [[BlockID.aeriteore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("aquatiteore");
Block.createBlock("aquatiteore", [{ name: "Акватитовая руда", texture: [["aquatiteore", 0], ["aquatiteore", 0], ["aquatiteore", 0], ["aquatiteore", 0], ["aquatiteore", 0], ["aquatiteore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.aquatiteore, "stone", 3, true);
Block.setDestroyLevel(BlockID.aquatiteore, 1);
Block.registerDropFunction("aquatiteore", function (coords, blockID, blockData, level) {
    if (level > 1) {
        return [[BlockID.aquatiteore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("ignisusore");
Block.createBlock("ignisusore", [{ name: "Игнисусовая руда", texture: [["ignisusore", 0], ["ignisusore", 0], ["ignisusore", 0], ["ignisusore", 0], ["ignisusore", 0], ["ignisusore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.ignisusore, "stone", 3, true);
Block.setDestroyLevel(BlockID.ignisusore, 1);
Block.registerDropFunction("ignisusore", function (coords, blockID, blockData, level) {
    if (level > 2) {
        return [[BlockID.ignisusore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("ignisusnetherore");
Block.createBlock("ignisusnetherore", [{ name: "Игнисусовая руда", texture: [["ignisusnetherore", 0], ["ignisusnetherore", 0], ["ignisusnetherore", 0], ["ignisusnetherore", 0], ["ignisusnetherore", 0], ["ignisusnetherore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.ignisusnetherore, "stone", 3, true);
Block.setDestroyLevel(BlockID.ignisusnetherore, 1);
Block.registerDropFunction("ignisusnetherore", function (coords, blockID, blockData, level) {
    if (level > 3) {
        return [[BlockID.ignisusnetherore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("territeore");
Block.createBlock("territeore", [{ name: "Территовая руда", texture: [["territeore", 0], ["territeore", 0], ["territeore", 0], ["territeore", 0], ["territeore", 0], ["territeore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.territeore, "stone", 3, true);
Block.setDestroyLevel(BlockID.territeore, 1);
Block.registerDropFunction("territeore", function (coords, blockID, blockData, level) {
    if (level > 2) {
        return [[BlockID.territeore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("hollyore");
Block.createBlock("hollyore", [{ name: "Святая руда", texture: [["hollyore", 0], ["hollyore", 0], ["hollyore", 0], ["hollyore", 0], ["hollyore", 0], ["hollyore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.hollyore, "stone", 2, true);
Block.setDestroyLevel(BlockID.hollyore, 2);
Block.registerDropFunction("hollyore", function (coords, blockID, blockData, level) {
    if (level > 2) {
        return [[BlockID.hollyore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("cometiteore");
Block.createBlock("cometiteore", [{ name: "Кометитовая руда", texture: [["cometiteore", 0], ["cometiteore", 0], ["cometiteore", 0], ["cometiteore", 0], ["cometiteore", 0], ["cometiteore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.cometiteore, "stone", 3, true);
Block.setDestroyLevel(BlockID.cometiteore, 4);
Block.registerDropFunction("cometiteore", function (coords, blockID, blockData, level) {
    if (level > 4) {
        return [[BlockID.cometiteore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("heartore");
Block.createBlock("heartore", [{ name: "Руда жизни", texture: [["heartore", 0], ["heartore", 0], ["heartore", 0], ["heartore", 0], ["heartore", 0], ["heartore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.heartore, "stone", 3, true);
Block.setDestroyLevel(BlockID.heartore, 4);
Block.registerDropFunction("heartore", function (coords, blockID, blockData, level) {
    if (level > 4) {
        return [[BlockID.heartore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("astralore");
Block.createBlock("astralore", [{ name: "Астральная руда", texture: [["starore", 0], ["starore", 0], ["starore", 0], ["starore", 0], ["starore", 0], ["starore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.astralore, "stone", 3, true);
Block.setDestroyLevel(BlockID.astralore, 1);
Block.registerDropFunction("astralore", function (coords, blockID, blockData, level) {
    if (level > 8) {
        return [[BlockID.astralore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("chaosore");
Block.createBlock("chaosore", [{ name: "Руда хаоса", texture: [["chaosore", 0], ["chaosore", 0], ["chaosore", 0], ["chaosore", 0], ["chaosore", 0], ["chaosore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.chaosore, "stone", 3, true);
Block.setDestroyLevel(BlockID.chaosore, 1);
Block.registerDropFunction("chaosore", function (coords, blockID, blockData, level) {
    if (level > 10) {
        return [[BlockID.chaosore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("floriteore");
Block.createBlock("floriteore", [{ name: "Флоритовая руда", texture: [["floriteore", 0], ["floriteore", 0], ["floriteore", 0], ["floriteore", 0], ["floriteore", 0], ["floriteore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.floriteore, "stone", 3, true);
Block.setDestroyLevel(BlockID.floriteore, 1);
Block.registerDropFunction("floriteore", function (coords, blockID, blockData, level) {
    if (level > 10) {
        return [[BlockID.floriteore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("goldyore");
Block.createBlock("goldyore", [{ name: "Злотоносная руда", texture: [["goldyore", 0], ["goldyore", 0], ["goldyore", 0], ["goldyore", 0], ["goldyore", 0], ["goldyore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.goldyore, "stone", 3, true);
Block.setDestroyLevel(BlockID.goldyore, 1);
Block.registerDropFunction("goldyore", function (coords, blockID, blockData, level) {
    if (level > 11) {
        return [[BlockID.goldyore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("depthore");
Block.createBlock("depthore", [{ name: "Глубинная руда", texture: [["depthore", 0], ["depthore", 0], ["depthore", 0], ["depthore", 0], ["depthore", 0], ["depthore", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.depthore, "stone", 3, true);
Block.setDestroyLevel(BlockID.depthore, 1);
Block.registerDropFunction("depthore", function (coords, blockID, blockData, level) {
    if (level > 12) {
        return [[BlockID.depthore, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("cloud");
Block.createBlock("cloud", [{ name: "Облако", texture: [["cloud", 0], ["cloud", 0], ["cloud", 0], ["cloud", 0], ["cloud", 0], ["cloud", 0]], inCreative: true }], cloud);
IDRegistry.genBlockID("cometgrass");
Block.createBlock("cometgrass", [{ name: "Земля с травой кометы", texture: [["cometdirt", 0], ["cometgrasstop", 0], ["cometgrass", 0], ["cometgrass", 0], ["cometgrass", 0], ["cometgrass", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.cometgrass, "dirt", 3, true);
IDRegistry.genBlockID("cometdirt");
Block.createBlock("cometdirt", [{ name: "Земля  кометы", texture: [["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.cometdirt, "dirt", 3, true);
IDRegistry.genBlockID("steb");
Block.createBlock("steb", [{ name: "Блок стебля гигантской розы", texture: [["steb", 0], ["steb", 0], ["steb", 0], ["steb", 0], ["steb", 0], ["steb", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.steb, "wood", 3, true);
IDRegistry.genBlockID("ship");
Block.createBlock("ship", [{ name: "Блок шипа гигантской розы", texture: [["ship", 0], ["ship", 0], ["ship", 0], ["ship", 0], ["ship", 0], ["ship", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.ship, "wood", 3, true);
IDRegistry.genBlockID("rose");
Block.createBlock("rose", [{ name: "Блок цветка гигантской розы", texture: [["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.rose, "wood", 3, true);
IDRegistry.genBlockID("heartblock");
Block.createBlock("heartblock", [{ name: "Жизненно важный блок", texture: [["heartblock", 0], ["heartblock", 0], ["heartblock", 0], ["heartblock", 0], ["heartblock", 0], ["heartblock", 0]], inCreative: true }]);
IDRegistry.genBlockID("azatotmateria");
Block.createBlock("azatotmateria", [{ name: "Материя Азатота", texture: [["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0], ["azatotmateria", 0]], inCreative: true }], dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotmateria, "stone", 3, true);
Block.setDestroyLevel(BlockID.azatotmateria, 1);
Block.registerDropFunction("azatotmateria", function (coords, blockID, blockData, level) {
    if (level > 13) {
        return [[BlockID.azatotmateria, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("azatotbricks");
Block.createBlock("azatotbricks", [{ name: "Кирпичи Азатота", texture: [["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0], ["azatotbricks", 0]], inCreative: true }], dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotbricks, "stone", 3, true);
Block.setDestroyLevel(BlockID.azatotbricks, 1);
Block.registerDropFunction("azatotbricks", function (coords, blockID, blockData, level) {
    if (level > 13) {
        return [[BlockID.azatotbricks, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("azatotaltar");
Block.createBlock("azatotaltar", [{ name: "Алтарь Азатота", texture: [["azatotbricks", 0], ["azatotaltartop", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0]], inCreative: true }], dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotaltar, "stone", 3, true);
Block.setDestroyLevel(BlockID.azatotaltar, 1);
Block.registerDropFunction("azatotaltar", function (coords, blockID, blockData, level) {
    if (level > 5000) {
        return [[BlockID.azatotbricks, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("azatotaltaractivated");
Block.createBlock("azatotaltaractivated", [{ name: "Активированный алтарь Азатота", texture: [["azatotbricks", 0], ["azatotaltaractivated", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0]], inCreative: true }], dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotaltaractivated, "stone", 3, true);
Block.setDestroyLevel(BlockID.azatotaltaractivated, 1);
Block.registerDropFunction("azatotaltaractivated", function (coords, blockID, blockData, level) {
    if (level > 13) {
        return [[BlockID.azatotaltaroff, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("azatotaltaroff");
Block.createBlock("azatotaltaroff", [{ name: "Использованный алтарь Азатота", texture: [["azatotbricks", 0], ["azatotaltaroff", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0], ["azatotaltar", 0]], inCreative: true }], dimens);
ToolAPI.registerBlockMaterial(BlockID.azatotaltaroff, "stone", 3, true);
Block.setDestroyLevel(BlockID.azatotaltaroff, 1);
Block.registerDropFunction("azatotaltaroff", function (coords, blockID, blockData, level) {
    if (level > 13) {
        return [[BlockID.azatotaltaroff, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("astralyellow");
Block.createBlock("astralyellow", [{ name: "Материя Астрала", texture: [["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0], ["astralyellow", 0]], inCreative: false }], dimens);
ToolAPI.registerBlockMaterial(BlockID.astralyellow, "stone", 3, true);
Block.setDestroyLevel(BlockID.astralyellow, 1);
Block.registerDropFunction("astralyellow", function (coords, blockID, blockData, level) {
    if (level > 13) {
        return [[BlockID.astralyellow, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("astralpink");
Block.createBlock("astralpink", [{ name: "Материя Астрала", texture: [["astralpink", 0], ["astralpink", 0], ["astralpink", 0], ["astralpink", 0], ["astralpink", 0], ["astralpink", 0]], inCreative: false }], dimens);
ToolAPI.registerBlockMaterial(BlockID.astralpink, "stone", 3, true);
Block.setDestroyLevel(BlockID.astralpink, 1);
Block.registerDropFunction("astralpink", function (coords, blockID, blockData, level) {
    if (level > 13) {
        return [[BlockID.astralpink, 1, 0]];
    }
    return [];
}, 1);
IDRegistry.genBlockID("astralmid");
Block.createBlock("astralmid", [{ name: "Материя Астрала", texture: [["astralmid", 0], ["astralmid", 0], ["astralmid", 0], ["astralmid", 0], ["astralmid", 0], ["astralmid", 0]], inCreative: false }], dimens);
ToolAPI.registerBlockMaterial(BlockID.astralmid, "stone", 3, true);
Block.setDestroyLevel(BlockID.astralmid, 1);
Block.registerDropFunction("astralmid", function (coords, blockID, blockData, level) {
    if (level > 13) {
        return [[BlockID.astralmid, 1, 0]];
    }
    return [];
}, 1);
var AltarBlocks = [{ x: -3, y: 0, z: -2 },
    { x: -3, y: 0, z: -1 },
    { x: -3, y: 0, z: 0 },
    { x: -3, y: 0, z: 1 },
    { x: -3, y: 0, z: 2 },
    { x: -2, y: 0, z: -3 },
    { x: -2, y: 0, z: -2 },
    { x: -2, y: 1, z: -2 },
    { x: -2, y: 2, z: -2 },
    { x: -2, y: 3, z: -2 },
    { x: -2, y: 0, z: -1 },
    { x: -2, y: 0, z: 0 },
    { x: -2, y: 1, z: 0 },
    { x: -2, y: 2, z: 0 },
    { x: -2, y: 0, z: 1 },
    { x: -2, y: 0, z: 2 },
    { x: -2, y: 1, z: 2 },
    { x: -2, y: 2, z: 2 },
    { x: -2, y: 3, z: 2 },
    { x: -2, y: 0, z: 3 },
    { x: -1, y: 0, z: -3 },
    { x: -1, y: 0, z: -2 },
    { x: -1, y: 0, z: -1 },
    { x: -1, y: 0, z: 0 },
    { x: -1, y: 0, z: 1 },
    { x: -1, y: 0, z: 2 },
    { x: -1, y: 0, z: 3 },
    { x: 0, y: 0, z: -3 },
    { x: 0, y: 0, z: -2 },
    { x: 0, y: 1, z: -2 },
    { x: 0, y: 2, z: -2 },
    { x: 0, y: 0, z: -1 },
    { x: 0, y: 0, z: 0 },
    { x: 0, y: 0, z: 1 },
    { x: 0, y: 0, z: 2 },
    { x: 0, y: 1, z: 2 },
    { x: 0, y: 2, z: 2 },
    { x: 0, y: 0, z: 3 },
    { x: 1, y: 0, z: -3 },
    { x: 1, y: 0, z: -2 },
    { x: 1, y: 0, z: -1 },
    { x: 1, y: 0, z: 0 },
    { x: 1, y: 0, z: 1 },
    { x: 1, y: 0, z: 2 },
    { x: 1, y: 0, z: 3 },
    { x: 2, y: 0, z: -3 },
    { x: 2, y: 0, z: -2 },
    { x: 2, y: 1, z: -2 },
    { x: 2, y: 2, z: -2 },
    { x: 2, y: 3, z: -2 },
    { x: 2, y: 0, z: -1 },
    { x: 2, y: 0, z: 0 },
    { x: 2, y: 1, z: 0 },
    { x: 2, y: 2, z: 0 },
    { x: 2, y: 0, z: 1 },
    { x: 2, y: 0, z: 2 },
    { x: 2, y: 1, z: 2 },
    { x: 2, y: 2, z: 2 },
    { x: 2, y: 3, z: 2 },
    { x: 2, y: 0, z: 3 },
    { x: 3, y: 0, z: -2 },
    { x: 3, y: 0, z: -1 },
    { x: 3, y: 0, z: 0 },
    { x: 3, y: 0, z: 1 },
    { x: 3, y: 0, z: 2 }];
var AltarCatalizator = [
    { x: 2, y: 2, z: 0 },
    { x: 2, y: 3, z: 2 },
    { x: 0, y: 2, z: 2 },
    { x: -2, y: 3, z: 2 },
    { x: -2, y: 2, z: 0 },
    { x: -2, y: 3, z: -2 },
    { x: 0, y: 2, z: -2 },
    { x: 2, y: 3, z: -2 }
];
var AltarItems = [
    { x: .5, y: 1.29, z: -0.125 },
    { x: .9375, y: 1.25, z: .0625 },
    { x: 1.125, y: 1.29, z: .5 },
    { x: .93752, y: 1.25, z: .9375 },
    { x: .5, y: 1.29, z: 1.125 },
    { x: .06252, y: 1.25, z: .9375 },
    { x: -0.125, y: 1.29, z: .5 },
    { x: .0625, y: 1.25, z: .0625 }
];
IDRegistry.genBlockID("creatoraltar");
Block.createBlock("creatoraltar", [{ name: "Алтарь созидания", inCreative: false }]);
var AltarMesh = new RenderMesh();
var AltarModel = new BlockRenderer.Model(AltarMesh);
var ICRenderAltar = new ICRender.Model();
AltarMesh.setBlockTexture("creatoraltar", 0);
AltarMesh.importFromFile(__dir__ + "resources/res/models/altar.obj", "obj", null);
ICRenderAltar.addEntry(AltarModel);
BlockRenderer.setStaticICRender(BlockID.creatoraltar, -1, ICRenderAltar);
IDRegistry.genItemID("icon_altar");
Item.createItem("icon_altar", "Алтарь созидания", { name: "altaricon" });
Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
    if (item.id == ItemID.icon_altar) {
        BlockSource.getDefaultForActor(player).setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.creatoraltar, 1);
        item.count--;
    }
    ;
});
var AltarGui = new UI.StandardWindow({
    standard: {
        header: { text: { text: "Алтарь созидания" }, color: android.graphics.Color.rgb(185, 142, 77) },
        inventory: { standard: true },
        background: {
            bitmap: "altar_background",
        }
    },
    params: {
        textures: {}
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "AltarStar", width: 997, height: 600 }
    ],
    elements: {
        "slot0": { type: "slot", x: 465, y: 20, size: 70, maxStackSize: 1 },
        "slot1": { type: "slot", x: 625, y: 40, size: 70, maxStackSize: 1 },
        "slot2": { type: "slot", x: 790, y: 265, size: 70, maxStackSize: 1 },
        "slot3": { type: "slot", x: 625, y: 480, size: 70, maxStackSize: 1 },
        "slot4": { type: "slot", x: 465, y: 510, size: 70, maxStackSize: 1 },
        "slot5": { type: "slot", x: 300, y: 480, size: 70, maxStackSize: 1 },
        "slot6": { type: "slot", x: 140, y: 265, size: 70, maxStackSize: 1 },
        "slot7": { type: "slot", x: 300, y: 40, size: 70, maxStackSize: 1 },
        "slotCenter": { type: "slot", x: 465, y: 265, size: 70, maxStackSize: 1 },
        "AltarText": { type: "text", x: 0, y: 0, text: "\u0421\u0438\u043B\u0430 \u0430\u043B\u0442\u0430\u0440\u044F: 0" },
    }
});
TileEntity.registerPrototype(BlockID.creatoraltar, {
    useNetworkItemContainer: true,
    defaultValues: {
        isCraftng: false,
        CraftingTime: 100,
        CraftingItem: null,
        AltarPower: 0,
        ItemsParticles: [],
        BlockPos: [],
        BlockParticles: [],
    },
    getScreenName: function (player, coords) {
        return "main";
    },
    getScreenByName: function (screenName) {
        return AltarGui;
    },
    tick: function () {
        //Получение предметов в слотах
        if (World.getThreadTime() % 10 == 0) {
            this.networkData.putInt("itemCenterId", this.container.getSlot("slotCenter").id);
            this.networkData.putInt("itemCenterData", this.container.getSlot("slotCenter").data);
            for (var i = 0; i <= 7; i++) {
                var slot = "slot" + i;
                var id = "item".concat(i, "Id");
                var data = "item".concat(i, "Data");
                this.networkData.putInt(id, this.container.getSlot(slot).id);
                this.networkData.putInt(data, this.container.getSlot(slot).data);
            }
            ;
        }
        ;
        if (World.getWorldTime() % 20 == 0) {
            //Получение силы алтаря
            this.GetAltarPower();
            //Проверка рецепта
            this.GetRecipe();
        }
        ;
        //Крафт
        if (this.data.isCraftng) {
            this.data.CraftingTime--;
            this.sendPacket("AnimateParticles", { Particles: this.data.BlockParticles, coords: { x: this.x, y: this.y, z: this.z }, Pos: this.data.BlockPos, CraftingTime: this.data.CraftingTime });
            this.Craft();
        }
        ;
        this.networkData.sendChanges();
    },
    GetAltarPower: function () {
        this.data.AltarPower = 0;
        this.data.BlockPos = [];
        this.data.BlockParticles = [];
        var AltarSource = new BlockSource.getDefaultForDimension(this.dimension);
        var Structure;
        for (var i = 0; i < AltarBlocks.length; i++) {
            if (AltarSource.getBlock(this.x + AltarBlocks[i].x, this.y + AltarBlocks[i].y - 1, this.z + AltarBlocks[i].z).id in AltarAPI.AltarBase) {
                Structure = true;
            }
            else {
                Structure = false;
                break;
            }
            ;
        }
        ;
        if (Structure) {
            for (var key in AltarAPI.AltarBase) {
                if (AltarSource.getBlock(this.x, this.y - 1, this.z).id == key) {
                    this.data.AltarPower += AltarAPI.AltarBase[key];
                    break;
                }
                ;
            }
            ;
            for (var i = 0; i < AltarCatalizator.length; i++) {
                if (AltarSource.getBlock(this.x + AltarCatalizator[i].x, this.y + AltarCatalizator[i].y, this.z + AltarCatalizator[i].z).id in AltarAPI.Catalizator) {
                    for (var key in AltarAPI.Catalizator) {
                        if (AltarSource.getBlock(this.x + AltarCatalizator[i].x, this.y + AltarCatalizator[i].y, this.z + AltarCatalizator[i].z).id == key) {
                            var copy = AltarAPI.Catalizator[key];
                            this.data.BlockPos.push(AltarCatalizator[i]);
                            this.data.BlockParticles.push(copy[1]);
                            this.data.AltarPower += copy[0];
                            break;
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;
        this.container.sendChanges();
        this.container.setText("AltarText", "\u0421\u0438\u043B\u0430 \u0430\u043B\u0442\u0430\u0440\u044F: ".concat(this.data.AltarPower));
    },
    GetRecipe: function () {
        var test = false;
        var RecipeEnergy;
        var Recipe;
        var itemsArr = [this.container.getSlot("slotCenter"), this.container.getSlot("slot0"), this.container.getSlot("slot1"), this.container.getSlot("slot2"), this.container.getSlot("slot3"), this.container.getSlot("slot4"), this.container.getSlot("slot5"), this.container.getSlot("slot6"), this.container.getSlot("slot7")];
        for (var i = 0; i < AltarAPI.Recipes.length; i++) {
            var copy = AltarAPI.Recipes[i];
            RecipeEnergy = copy.energy;
            for (var a = 0; a < 9; a++) {
                if (copy.input[a].id == itemsArr[a].id && copy.input[a].data == itemsArr[a].data) {
                    test = true;
                    Recipe = copy.output;
                    continue;
                }
                ;
                test = false;
                break;
            }
            ;
            if (this.data.AltarPower >= RecipeEnergy && test) {
                for (var i_1 = 0; i_1 <= 7; i_1++) {
                    var name = "slot" + i_1;
                    if (this.container.getSlot(name).id != 0) {
                        this.data.ItemsParticles.push(AltarItems[i_1]);
                    }
                }
                ;
                this.data.CraftingItem = Recipe;
                this.data.isCraftng = true;
                break;
            }
            ;
        }
        ;
    },
    Craft: function () {
        if (this.data.CraftingTime <= 0) {
            this.data.isCraftng = false;
            this.data.CraftingTime = 100;
            this.container.setSlot("slotCenter", this.container.getSlot("slotCenter").id, this.container.getSlot("slotCenter").count - 1, this.container.getSlot("slotCenter").data, this.container.getSlot("slotCenter").extra);
            for (var i = 0; i <= 7; i++) {
                var name = "slot" + i;
                this.container.setSlot(name, this.container.getSlot(name).id, this.container.getSlot(name).count - 1, this.container.getSlot(name).data, this.container.getSlot(name).extra);
            }
            ;
            this.container.validateAll();
            Logger.Log(JSON.stringify(this.data.CraftingItem));
            this.container.setSlot("slotCenter", this.data.CraftingItem[0].id, 1, this.data.CraftingItem[0].data, this.container.getSlot("slotCentert").extra);
            this.container.sendChanges();
        }
        ;
    },
    client: {
        events: {
            AnimateParticles: function (Data) {
                if (Data.CraftingTime >= 50) {
                    for (var i = 0; i < Data.Pos.length; i++) {
                        var LocalData = Data.Pos[i];
                        Particles.addParticle(Data.Particles[i], Data.coords.x + LocalData.x + .5, Data.coords.y + LocalData.y + .5, Data.coords.z + LocalData.z + .5, (LocalData.x * (-1)) / 60, ((LocalData.y * (-1)) + 0.78) / 60, (LocalData.z * (-1)) / 60);
                    }
                    ;
                }
            },
        },
        updateModel: function () {
            this.modelCenter.describeItem({
                id: Network.serverToLocalId(this.networkData.getInt("itemCenterId")), count: 1, data: this.networkData.getInt("itemCenterData"), size: 0.4
            });
            //item0
            var id0 = Network.serverToLocalId(this.networkData.getInt("item0Id"));
            var data0 = this.networkData.getInt("item0Data");
            this.model0.describeItem({
                id: id0, count: 1, data: data0, size: 0.25
            });
            //item1
            var id1 = Network.serverToLocalId(this.networkData.getInt("item1Id"));
            var data1 = this.networkData.getInt("item1Data");
            this.model1.describeItem({
                id: id1, count: 1, data: data1, size: 0.2
            });
            //item2
            var id2 = Network.serverToLocalId(this.networkData.getInt("item2Id"));
            var data2 = this.networkData.getInt("item2Data");
            this.model2.describeItem({
                id: id2, count: 1, data: data2, size: 0.25
            });
            //item3
            var id3 = Network.serverToLocalId(this.networkData.getInt("item3Id"));
            var data3 = this.networkData.getInt("item3Data");
            this.model3.describeItem({
                id: id3, count: 1, data: data3, size: 0.2
            });
            //item4
            var id4 = Network.serverToLocalId(this.networkData.getInt("item4Id"));
            var data4 = this.networkData.getInt("item4Data");
            this.model4.describeItem({
                id: id4, count: 1, data: data4, size: 0.25
            });
            //item5
            var id5 = Network.serverToLocalId(this.networkData.getInt("item5Id"));
            var data5 = this.networkData.getInt("item5Data");
            this.model5.describeItem({
                id: id5, count: 1, data: data5, size: 0.2
            });
            //item6
            var id6 = Network.serverToLocalId(this.networkData.getInt("item6Id"));
            var data6 = this.networkData.getInt("item6Data");
            this.model6.describeItem({
                id: id6, count: 1, data: data6, size: 0.25
            });
            //item7
            var id7 = Network.serverToLocalId(this.networkData.getInt("item7Id"));
            var data7 = this.networkData.getInt("item7Data");
            this.model7.describeItem({
                id: id7, count: 1, data: data7, size: 0.2
            });
        },
        load: function () {
            this.modelCenter = new Animation.Item(this.x + .5, this.y + 1.23, this.z + .5);
            this.model0 = new Animation.Item(this.x + .5, this.y + 1.29, this.z - 0.125);
            this.model1 = new Animation.Item(this.x + .9375, this.y + 1.25, this.z + .0625);
            this.model2 = new Animation.Item(this.x + 1.125, this.y + 1.29, this.z + .5);
            this.model3 = new Animation.Item(this.x + .9375, this.y + 1.25, this.z + .9375);
            this.model4 = new Animation.Item(this.x + .5, this.y + 1.29, this.z + 1.125);
            this.model5 = new Animation.Item(this.x + .0625, this.y + 1.25, this.z + .9375);
            this.model6 = new Animation.Item(this.x - 0.125, this.y + 1.29, this.z + .5);
            this.model7 = new Animation.Item(this.x + .0625, this.y + 1.25, this.z + .0625);
            this.updateModel();
            this.modelCenter.load();
            for (var i = 0; i <= 7; i++) {
                var name = "model" + i;
                var copy = this[name];
                copy.load();
            }
            ;
            this.modelCenter.loadCustom(function () {
                this.setItemRotation(this.__rotation[0], this.__rotation[1] + Math.PI / 50, this.__rotation[2]);
                this.refresh();
            });
            for (var i = 0; i <= 7; i++) {
                var name = "model" + i;
                var copy = this[name];
                copy.loadCustom(function () {
                    this.setItemRotation(this.__rotation[0], this.__rotation[1] + Math.PI / 30, this.__rotation[2]);
                    this.refresh();
                });
            }
            ;
            var that = this;
            this.networkData.addOnDataChangedListener(function (data, isExternal) {
                that.updateModel();
            });
        },
        unload: function () {
            this.modelCenter.destroy();
            this.model0.destroy();
            this.model1.destroy();
            this.model2.destroy();
            this.model3.destroy();
            this.model4.destroy();
            this.model5.destroy();
            this.model6.destroy();
            this.model7.destroy();
        },
    },
});
LiquidRegistry.registerLiquid("Hollywater", "Святая вода", ["holywater"]);
Block.createLiquidBlock("Hollywater", {
    name: "Святая вода",
    still: {
        texture: ["holywater", 0]
    },
    flowing: {
        texture: ["holywater", 0]
    },
    bucket: {
        texture: { name: "holywaterBucket", meta: 0 },
    },
});
//Block.registerEntityInsideFunction("Hollywater_still", function(blockCoords, block, entity){
//  Entity.addEffect(entity, 10, 1, 40, true, false);
//});
var HollyRiver = new CustomBiome("holly_river");
HollyRiver.setFoliageColor(0.32, 0.77, 0.66);
HollyRiver.setGrassColor(0.09, 0.76, 0.6);
HollyRiver.setServerJson(JSON.stringify({
    "minecraft:climate": {
        "downfall": 0.5,
        "snow_accumulation": [
            0,
            0.125
        ],
        "temperature": 0.5
    },
    "minecraft:overworld_height": {
        "noise_type": "river"
    },
    "overworld": {},
    "river": {},
    "minecraft:surface_parameters": {
        "sea_floor_depth": 7,
        "sea_floor_material": "minecraft:gravel",
        "foundation_material": "minecraft:stone",
        "mid_material": "minecraft:dirt",
        "top_material": "minecraft:grass",
        "sea_material": "minecraft:block_Hollywater_still"
    }
}));
HollyRiver.setClientJson(JSON.stringify({
    "water_surface_color": "#3f515d",
    "water_fog_color": "#294252",
    "water_surface_transparency": 0.3,
    "water_fog_distance": 10,
    "fog_identifier": "ark:holy"
}));
var HollyLands = new CustomBiome("holly_lands");
HollyLands.setFoliageColor(0.32, 0.77, 0.66);
HollyLands.setGrassColor(0.09, 0.76, 0.6);
HollyLands.setServerJson(JSON.stringify({
    "minecraft:climate": {
        "downfall": 0.0,
        "snow_accumulation": [
            0.0,
            0.0
        ],
        "temperature": 5,
        "blue_spores": 0,
        "red_spores": 0,
        "white_ash": 0,
        "ash": 0
    },
    "minecraft:overworld_height": {
        "noise_type": "default"
    },
    "animal": {},
    "monster": {},
    "overworld": {},
    "holly_lands": {},
    "forest": {},
    "minecraft:surface_parameters": {
        "top_material": "minecraft:grass",
        "mid_material": "minecraft:dirt",
        "foundation_material": "minecraft:stone",
        "sea_floor_material": "minecraft:clay",
        "sea_material": "minecraft:block_Hollywater_still",
        "sea_floor_depth": 7
    },
    "minecraft:overworld_generation_rules": {
        "hills_transformation": "holly_lands",
        "river_transformation": "holly_river",
        "generate_for_climates": [
            [
                "warm",
                1
            ],
            [
                "medium",
                2
            ]
        ],
        "mutate_transformation": "holly_lands",
        "shore_transformation": "beach"
    }
}));
HollyLands.setClientJson(JSON.stringify({
    "water_surface_color": "#3f515d",
    "water_fog_color": "#294252",
    "water_surface_transparency": 0.3,
    "water_fog_distance": 10,
    "fog_identifier": "ark:holy"
}));
IDRegistry.genItemID("aeriteingot");
Item.createItem("aeriteingot", "Аэритовый слиток", { name: "aeriteingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("territeingot");
Item.createItem("territeingot", "Территовый слиток", { name: "territeingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("ignisusingot");
Item.createItem("ignisusingot", "Игнисуситовый слиток", { name: "ignisusingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("aquatiteingot");
Item.createItem("aquatiteingot", "Акватитовый слиток", { name: "aquatiteingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("cometiteingot");
Item.createItem("cometiteingot", "Кометитовый слиток", { name: "cometiteingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("hollyingot");
Item.createItem("hollyingot", "Святой слиток", { name: "hollyingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("elementalingot");
Item.createItem("elementalingot", "Элементарный слиток", { name: "elementalingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("cosmicsingularity");
Item.createItem("cosmicsingularity", "Космическая сингулярность", { name: "cosmicsingulary", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("krackeningot");
Item.createItem("krackeningot", "Слиток кракена", { name: "krackeningot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("cosmiliteingot");
Item.createItem("cosmiliteingot", "Космилитовый слиток \n В этом слитке сосредоточена некая космическая энергия \n вы чувствуете ее...", { name: "cosmiliteingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("omikroneingot");
Item.createItem("omikroneingot", "Омикрон слиток \n Сплав закаленного железа и... какого то материала \n  существовавшего еще до сотворения вселенной...", { name: "omikroneingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("heartingot");
Item.createItem("heartingot", "Слиток жизни", { name: "heartingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("palladiumingot");
Item.createItem("palladiumingot", "Палладиевый слиток", { name: "palladiumingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("astralingot");
Item.createItem("astralingot", "Астральный слиток", { name: "staringot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("chaosingot");
Item.createItem("chaosingot", "Слиток хаоса", { name: "chaosingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("venomusingot");
Item.createItem("venomusingot", "Слиток веномуса", { name: "venomusingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("meowingot");
Item.createItem("meowingot", "Мяуслиток", { name: "meowingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("floriteingot");
Item.createItem("floriteingot", "Флоритовый слиток", { name: "floriteingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("galaxiteingot");
Item.createItem("galaxiteingot", "Галакситовый слиток", { name: "verumcosmiliteingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("goldyingot");
Item.createItem("goldyingot", " Злотоносный слиток", { name: "goldyingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("shadowspecingot");
Item.createItem("shadowspecingot", "Шедоуспеховый слиток", { name: "shadowspecingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("azatotingot");
Item.createItem("azatotingot", "Слиток Азатота", { name: "azatotingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("depthingot");
Item.createItem("depthingot", "Глубоководный слиток", { name: "depthingot", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("ignissword");
IDRegistry.genItemID("ignispickaxe");
IDRegistry.genItemID("ignisaxe");
IDRegistry.genItemID("ignisshovel");
Item.createItem("ignissword", "§a Огненный меч §r \n 10 урон", { name: "ignissword", meta: 0 }, { stack: 1 });
Item.createItem("ignispickaxe", "§2 Огненная кирка", { name: "ignispickaxe", meta: 0 }, { stack: 1 });
Item.createItem("ignisaxe", "§2 Огненный топор", { name: "ignisaxe", meta: 0 }, { stack: 1 });
Item.createItem("ignisshovel", "§2 Огненная лопата", { name: "ignisshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("ignis", { durability: 1600, level: 5, efficiency: 8, damage: 10, enchantability: 14 });
ToolAPI.setTool(ItemID.ignissword, "ignis", ToolType.sword);
ToolAPI.setTool(ItemID.ignispickaxe, "ignis", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ignisaxe, "ignis", ToolType.axe);
ToolAPI.setTool(ItemID.ignisshovel, "ignis", ToolType.shovel);
IDRegistry.genItemID("ignishelmet");
IDRegistry.genItemID("ignischestplate");
IDRegistry.genItemID("ignisleggings");
IDRegistry.genItemID("ignisboots");
Item.createArmorItem("ignishelmet", "§c Огненный шлем §r \n 6 защита", { name: "ignishelmet", meta: 0 }, { type: "helmet", armor: 6, durability: 300, texture: "armor/ignisarmor.png" });
Item.createArmorItem("ignischestplate", "§c Огненный нагрудник §r \n 7 защита", { name: "ignischestplate", meta: 0 }, { type: "chestplate", armor: 7, durability: 600, texture: "armor/ignisarmor.png" });
Item.createArmorItem("ignisleggings", "§c Огненные поножи §r  \n 6 защита", { name: "ignisleggings", meta: 0 }, { type: "leggings", armor: 6, durability: 500, texture: "armor/ignisarmor0.png" });
Item.createArmorItem("ignisboots", "§c Огненные ботинки §r \n 6 защита", { name: "ignisboots", meta: 0 }, { type: "boots", armor: 6, durability: 500, texture: "armor/ignisarmor.png" });
IDRegistry.genItemID("terrasword");
IDRegistry.genItemID("terrapickaxe");
IDRegistry.genItemID("terraaxe");
IDRegistry.genItemID("terrashovel");
Item.createItem("terrasword", "§a Природный меч §r \n 5 урон", { name: "terrasword", meta: 0 }, { stack: 1 });
Item.createItem("terrapickaxe", "§2 Природная кирка", { name: "terrapickaxe", meta: 0 }, { stack: 1 });
Item.createItem("terraaxe", "§2 Природный топор", { name: "terraaxe", meta: 0 }, { stack: 1 });
Item.createItem("terrashovel", "§2 Природная лопата", { name: "terrashovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("terra", { durability: 3400, level: 4, efficiency: 8, damage: 5, enchantability: 14 });
ToolAPI.setTool(ItemID.terrasword, "terra", ToolType.sword);
ToolAPI.setTool(ItemID.terrapickaxe, "terra", ToolType.pickaxe);
ToolAPI.setTool(ItemID.terraaxe, "terra", ToolType.axe);
ToolAPI.setTool(ItemID.terrashovel, "terra", ToolType.shovel);
IDRegistry.genItemID("terrahelmet");
IDRegistry.genItemID("terrachestplate");
IDRegistry.genItemID("terraleggings");
IDRegistry.genItemID("terraboots");
Item.createArmorItem("terrahelmet", "§c Земляной шлем §r \n 3 защита", { name: "terrahelmet", meta: 0 }, { type: "helmet", armor: 3, durability: 130, texture: "armor/terraarmor.png" });
Item.createArmorItem("terrachestplate", "§c Земляной нагрудник §r \n 3 защита", { name: "terrachestplate", meta: 0 }, { type: "chestplate", armor: 3, durability: 210, texture: "armor/terraarmor.png" });
Item.createArmorItem("terraleggings", "§c Земляные поножи §r  \n 3 защита", { name: "terraleggings", meta: 0 }, { type: "leggings", armor: 3, durability: 190, texture: "armor/terraarmor0.png" });
Item.createArmorItem("terraboots", "§c Земляные ботинки §r \n 3 защита", { name: "terraboots", meta: 0 }, { type: "boots", armor: 3, durability: 165, texture: "armor/terraarmor.png" });
IDRegistry.genItemID("aquasword");
IDRegistry.genItemID("aquapickaxe");
IDRegistry.genItemID("aquaaxe");
IDRegistry.genItemID("aquashovel");
Item.createItem("aquasword", "§a Акватический меч §r \n 7 урон", { name: "aquasword", meta: 0 }, { stack: 1 });
Item.createItem("aquapickaxe", "§2 Акватическая кирка", { name: "aquapickaxe", meta: 0 }, { stack: 1 });
Item.createItem("aquaaxe", "§2 Акватический топор", { name: "aquaaxe", meta: 0 }, { stack: 1 });
Item.createItem("aquashovel", "§2 Акватическая лопата", { name: "aquashovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("aqua", { durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14 });
ToolAPI.setTool(ItemID.aquasword, "aqua", ToolType.sword);
ToolAPI.setTool(ItemID.aquapickaxe, "aqua", ToolType.pickaxe);
ToolAPI.setTool(ItemID.aquaaxe, "aqua", ToolType.axe);
ToolAPI.setTool(ItemID.aquashovel, "aqua", ToolType.shovel);
IDRegistry.genItemID("aquahelmet");
IDRegistry.genItemID("aquachestplate");
IDRegistry.genItemID("aqualeggings");
IDRegistry.genItemID("aquaboots");
Item.createArmorItem("aquahelmet", "§c Акватический шлем §r \n 4 защита", { name: "aquahelmet", meta: 0 }, { type: "helmet", armor: 4, durability: 200, texture: "armor/aquaarmor.png" });
Item.createArmorItem("aquachestplate", "§c Акватический нагрудник §r \n 5 защита", { name: "aquachestplate", meta: 0 }, { type: "chestplate", armor: 5, durability: 400, texture: "armor/aquaarmor.png" });
Item.createArmorItem("aqualeggings", "§c Акватическая поножи §r  \n 5 защита", { name: "aqualeggings", meta: 0 }, { type: "leggings", armor: 5, durability: 300, texture: "armor/aquaarmor0.png" });
Item.createArmorItem("aquaboots", "§c Акватические ботинки §r \n 3 защита", { name: "aquaboots", meta: 0 }, { type: "boots", armor: 5, durability: 300, texture: "armor/aquaarmor.png" });
IDRegistry.genItemID("aersword");
IDRegistry.genItemID("aerpickaxe");
IDRegistry.genItemID("aeraxe");
IDRegistry.genItemID("aershovel");
Item.createItem("aersword", "§a Аэролитовый меч §r \n 7 урон", { name: "aersword", meta: 0 }, { stack: 1 });
Item.createItem("aerpickaxe", "§2 Аэролитовая кирка", { name: "aerpickaxe", meta: 0 }, { stack: 1 });
Item.createItem("aeraxe", "§2 Аэролитовый топор", { name: "aeraxe", meta: 0 }, { stack: 1 });
Item.createItem("aershovel", "§2 Аэролитовая лопата", { name: "aershovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("aer", { durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14 });
ToolAPI.setTool(ItemID.aersword, "aer", ToolType.sword);
ToolAPI.setTool(ItemID.aerpickaxe, "aer", ToolType.pickaxe);
ToolAPI.setTool(ItemID.aeraxe, "aer", ToolType.axe);
ToolAPI.setTool(ItemID.aershovel, "aer", ToolType.shovel);
IDRegistry.genItemID("aerhelmet");
IDRegistry.genItemID("aerchestplate");
IDRegistry.genItemID("aerleggings");
IDRegistry.genItemID("aerboots");
Item.createArmorItem("aerhelmet", "§c Аэролитовый шлем §r \n 4 защита", { name: "aerhelmet", meta: 0 }, { type: "helmet", armor: 4, durability: 200, texture: "armor/aerarmor.png" });
Item.createArmorItem("aerchestplate", "§c Аэролитовый нагрудник §r \n 5 защита", { name: "aerchestplate", meta: 0 }, { type: "chestplate", armor: 5, durability: 400, texture: "armor/aerarmor.png" });
Item.createArmorItem("aerleggings", "§c Аэролитовая поножи §r  \n 5 защита", { name: "aerleggings", meta: 0 }, { type: "leggings", armor: 5, durability: 300, texture: "armor/aerarmor0.png" });
Item.createArmorItem("aerboots", "§c Аэролитовая ботинки §r \n 3 защита", { name: "aerboots", meta: 0 }, { type: "boots", armor: 5, durability: 300, texture: "armor/aerarmor.png" });
IDRegistry.genItemID("cometitesword");
IDRegistry.genItemID("cometitepickaxe");
IDRegistry.genItemID("cometiteaxe");
IDRegistry.genItemID("cometiteshovel");
Item.createItem("cometitesword", "§a Кометитовый меч §r \n 20 урон", { name: "cometitesword", meta: 0 }, { stack: 1 });
Item.createItem("cometitepickaxe", "§2 Кометитовая кирка", { name: "cometitepickaxe", meta: 0 }, { stack: 1 });
Item.createItem("cometiteaxe", "§2 Кометитовый топор", { name: "cometiteaxe", meta: 0 }, { stack: 1 });
Item.createItem("cometiteshovel", "§2 Йенериумная лопата", { name: "cometiteshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("cometite", { durability: 3400, level: 6, efficiency: 8, damage: 20, enchantability: 14 });
ToolAPI.setTool(ItemID.cometitesword, "cometite", ToolType.sword);
ToolAPI.setTool(ItemID.cometitepickaxe, "cometite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.cometiteaxe, "cometite", ToolType.axe);
ToolAPI.setTool(ItemID.cometiteshovel, "cometite", ToolType.shovel);
IDRegistry.genItemID("cometitehelmet");
IDRegistry.genItemID("cometitechestplate");
IDRegistry.genItemID("cometiteleggings");
IDRegistry.genItemID("cometiteboots");
Item.createArmorItem("cometitehelmet", "§c Кометитовый шлем §r \n 6 защита", { name: "cometitehelmet", meta: 0 }, { type: "helmet", armor: 6, durability: 650, texture: "armor/cometitearmor.png" });
Item.createArmorItem("cometitechestplate", "§c Кометитовый нагрудник §r \n 7 защита", { name: "cometitechestplate", meta: 0 }, { type: "chestplate", armor: 7, durability: 750, texture: "armor/cometitearmor.png" });
Item.createArmorItem("cometiteleggings", "§c Кометитовые поножи §r  \n 7 защита", { name: "cometiteleggings", meta: 0 }, { type: "leggings", armor: 7, durability: 700, texture: "armor/cometitearmor0.png" });
Item.createArmorItem("cometiteboots", "§c Кометитовые ботинки §r \n 6 защита", { name: "cometiteboots", meta: 0 }, { type: "boots", armor: 6, durability: 600, texture: "armor/cometitearmor.png" });
IDRegistry.genItemID("hollysword");
IDRegistry.genItemID("hollypickaxe");
IDRegistry.genItemID("hollyaxe");
IDRegistry.genItemID("hollyshovel");
Item.createItem("hollysword", "§a Святой меч §r \n 25 урон", { name: "hollysword", meta: 0 }, { stack: 1 });
Item.createItem("hollypickaxe", "§2 Святая кирка", { name: "hollypickaxe", meta: 0 }, { stack: 1 });
Item.createItem("hollyaxe", "§2 Святой топор", { name: "hollyaxe", meta: 0 }, { stack: 1 });
Item.createItem("hollyshovel", "§2 Святая лопата", { name: "hollyshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("holly", { durability: 3400, level: 7, efficiency: 8, damage: 25, enchantability: 14 });
ToolAPI.setTool(ItemID.hollysword, "holly", ToolType.sword);
ToolAPI.setTool(ItemID.hollypickaxe, "holly", ToolType.pickaxe);
ToolAPI.setTool(ItemID.hollyaxe, "holly", ToolType.axe);
ToolAPI.setTool(ItemID.hollyshovel, "holly", ToolType.shovel);
IDRegistry.genItemID("hollyhelmet");
IDRegistry.genItemID("hollychestplate");
IDRegistry.genItemID("hollyleggings");
IDRegistry.genItemID("hollyboots");
Item.createArmorItem("hollyhelmet", "§c Святой шлем §r \n 7 защита", { name: "hollyhelmet", meta: 0 }, { type: "helmet", armor: 7, durability: 650, texture: "armor/hollyarmor.png" });
Item.createArmorItem("hollychestplate", "§c Святой нагрудник §r \n 8 защита", { name: "hollychestplate", meta: 0 }, { type: "chestplate", armor: 8, durability: 750, texture: "armor/hollyarmor.png" });
Item.createArmorItem("hollyleggings", "§c Святые поножи §r  \n 8 защита", { name: "hollyleggings", meta: 0 }, { type: "leggings", armor: 8, durability: 700, texture: "armor/hollyarmor0.png" });
Item.createArmorItem("hollyboots", "§c Святые ботинки §r \n 7 защита", { name: "hollyboots", meta: 0 }, { type: "boots", armor: 7, durability: 600, texture: "armor/hollyarmor.png" });
IDRegistry.genItemID("grandminecraftsword");
IDRegistry.genItemID("grandminecraftpickaxe");
IDRegistry.genItemID("grandminecraftaxe");
IDRegistry.genItemID("grandminecraftshovel");
Item.createItem("grandminecraftsword", "§a Великий меч майнкрафта §r \n 150 урон", { name: "grandminecraftsword", meta: 0 }, { stack: 1 });
Item.createItem("grandminecraftpickaxe", "§2 Великая кирка майнкрафта", { name: "grandminecraftpickaxe", meta: 0 }, { stack: 1 });
Item.createItem("grandminecraftaxe", "§2 Великий топор майнкрафта", { name: "grandminecraftaxe", meta: 0 }, { stack: 1 });
Item.createItem("grandminecraftshovel", "§2 Великая лопата майнкрафта", { name: "grandminecraftshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("grandminecraft", { durability: 3400, level: 8, efficiency: 20, damage: 150, enchantability: 14 });
ToolAPI.setTool(ItemID.grandminecraftsword, "grandminecraft", ToolType.sword);
ToolAPI.setTool(ItemID.grandminecraftpickaxe, "grandminecraft", ToolType.pickaxe);
ToolAPI.setTool(ItemID.grandminecraftaxe, "grandminecraft", ToolType.axe);
ToolAPI.setTool(ItemID.grandminecraftshovel, "grandminecraft", ToolType.shovel);
IDRegistry.genItemID("grandminecrafthelmet");
IDRegistry.genItemID("grandminecraftchestplate");
IDRegistry.genItemID("grandminecraftleggings");
IDRegistry.genItemID("grandminecraftboots");
Item.createArmorItem("grandminecrafthelmet", "§c Великий шлем майнкрафта §r \n 30 защита", { name: "grandminecrafthelmet", meta: 0 }, { type: "helmet", armor: 30, durability: 3000, texture: "armor/grandminecraftarmor.png" });
Item.createArmorItem("grandminecraftchestplate", "§c Великий нагрудник майнкрафта§r \n 35 защита", { name: "grandminecraftchestplate", meta: 0 }, { type: "chestplate", armor: 35, durability: 3000, texture: "armor/grandminecraftarmor.png" });
Item.createArmorItem("grandminecraftleggings", "§c Великие поножи майнкрафта §r  \n 34 защита", { name: "grandminecraftleggings", meta: 0 }, { type: "leggings", armor: 34, durability: 3000, texture: "armor/grandminecraftarmor_0.png" });
Item.createArmorItem("grandminecraftboots", "§c Великие ботинки майнкрафта §r \n 28 защита", { name: "grandminecraftboots", meta: 0 }, { type: "boots", armor: 28, durability: 2000, texture: "armor/grandminecraftarmor.png" });
IDRegistry.genItemID("krackensword");
IDRegistry.genItemID("krackenpickaxe");
IDRegistry.genItemID("krackenaxe");
IDRegistry.genItemID("krackenshovel");
Item.createItem("krackensword", "§a Меч Кракена §r \n 125 урон", { name: "krackensword", meta: 0 }, { stack: 1 });
Item.createItem("krackenpickaxe", "§2 Кирка Кракена", { name: "krackenpickaxe", meta: 0 }, { stack: 1 });
Item.createItem("krackenaxe", "§2 Топор Кракена", { name: "krackenaxe", meta: 0 }, { stack: 1 });
Item.createItem("krackenshovel", "§2 Лопата Кракена", { name: "krackenshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("kracken", { durability: 1600, level: 8, efficiency: 8, damage: 125, enchantability: 14 });
ToolAPI.setTool(ItemID.krackensword, "kracken", ToolType.sword);
ToolAPI.setTool(ItemID.krackenpickaxe, "kracken", ToolType.pickaxe);
ToolAPI.setTool(ItemID.krackenaxe, "kracken", ToolType.axe);
ToolAPI.setTool(ItemID.krackenshovel, "kracken", ToolType.shovel);
IDRegistry.genItemID("krackenhelmet");
IDRegistry.genItemID("krackenchestplate");
IDRegistry.genItemID("krackenleggings");
IDRegistry.genItemID("krackenboots");
Item.createArmorItem("krackenhelmet", "§c Шлем Кракена §r \n 9 защита", { name: "krackenhelmet", meta: 0 }, { type: "helmet", armor: 9, durability: 300, texture: "armor/krackenarmor.png" });
Item.createArmorItem("krackenchestplate", "§c Нагрудник Кракена §r \n 10 защита", { name: "krackenchestplate", meta: 0 }, { type: "chestplate", armor: 10, durability: 600, texture: "armor/krackenarmor.png" });
Item.createArmorItem("krackenleggings", "§c Поножи Кракена §r  \n 10 защита", { name: "krackenleggings", meta: 0 }, { type: "leggings", armor: 10, durability: 500, texture: "armor/krackenarmor0.png" });
Item.createArmorItem("krackenboots", "§c Ботинки Кракена §r \n 9 защита", { name: "krackenboots", meta: 0 }, { type: "boots", armor: 9, durability: 500, texture: "armor/krackenarmor.png" });
IDRegistry.genItemID("palladiumsword");
IDRegistry.genItemID("palladiumpickaxe");
IDRegistry.genItemID("palladiumaxe");
IDRegistry.genItemID("palladiumshovel");
Item.createItem("palladiumsword", "§a Палладиевый боевой молот §r \n 7 урон", { name: "palladiumsword", meta: 0 }, { stack: 1 });
Item.createItem("palladiumpickaxe", "§2 Палладиумная кирка", { name: "palladiumpickaxe", meta: 0 }, { stack: 1 });
Item.createItem("palladiumaxe", "§2 Палладиумный топор", { name: "palladiumaxe", meta: 0 }, { stack: 1 });
Item.createItem("palladiumshovel", "§2 Палладиумная лопата", { name: "palladiumshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("palladium", { durability: 3400, level: 3, efficiency: 8, damage: 7, enchantability: 14 });
ToolAPI.setTool(ItemID.palladiumsword, "palladium", ToolType.sword);
ToolAPI.setTool(ItemID.palladiumpickaxe, "palladium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.palladiumaxe, "palladium", ToolType.axe);
ToolAPI.setTool(ItemID.palladiumshovel, "palladium", ToolType.shovel);
IDRegistry.genItemID("palladiumhelmet");
IDRegistry.genItemID("palladiumchestplate");
IDRegistry.genItemID("palladiumleggings");
IDRegistry.genItemID("palladiumboots");
Item.createArmorItem("palladiumhelmet", "§c Палладиумный шлем §r \n 5 защита", { name: "palladiumhelmet", meta: 0 }, { type: "helmet", armor: 5, durability: 650, texture: "armor/palladiumarmor.png" });
Item.createArmorItem("palladiumchestplate", "§c Палладиумный нагрудник §r \n 5 защита", { name: "palladiumchestplate", meta: 0 }, { type: "chestplate", armor: 5, durability: 750, texture: "armor/palladiumarmor.png" });
Item.createArmorItem("palladiumleggings", "§c Палладиумные поножи §r  \n 5 защита", { name: "palladiumleggings", meta: 0 }, { type: "leggings", armor: 5, durability: 700, texture: "armor/palladiumarmor0.png" });
Item.createArmorItem("palladiumboots", "§c Палладиумные ботинки §r \n 5 защита", { name: "palladiumboots", meta: 0 }, { type: "boots", armor: 5, durability: 600, texture: "armor/palladiumarmor.png" });
IDRegistry.genItemID("horngodhelmet");
IDRegistry.genItemID("horngodchestplate");
IDRegistry.genItemID("horngodleggings");
IDRegistry.genItemID("horngodboots");
Item.createArmorItem("horngodhelmet", "§c Шлем Рогатого Бога §r \n 8 защита \n Остатки века чудес", { name: "horngodhelmet", meta: 0 }, { type: "helmet", armor: 8, durability: 200, texture: "armor/horngodarmor.png" });
Item.createArmorItem("horngodchestplate", "§c Нагрудник Рогатого Бога §r \n 9 защита \n Остатки века чудес", { name: "horngodchestplate", meta: 0 }, { type: "chestplate", armor: 9, durability: 400, texture: "armor/horngodarmor.png" });
Item.createArmorItem("horngodleggings", "§c Поножи Рогатого Бога §r  \n 8 защита \n Остатки века чудес", { name: "horngodleggings", meta: 0 }, { type: "leggings", armor: 8, durability: 300, texture: "armor/horngodarmor0.png" });
Item.createArmorItem("horngodboots", "§c Ботинки Рогатого Бога §r \n 8 защита \n Остатки века чудес", { name: "horngodboots", meta: 0 }, { type: "boots", armor: 8, durability: 300, texture: "armor/horngodarmor.png" });
IDRegistry.genItemID("gitareaxe");
Item.createItem("gitareaxe", "§a Гитара-топор §r \n 88 урон ", { name: "gitareaxe", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("gitareaxe", { durability: 3400, level: 4, efficiency: 8, damage: 88, enchantability: 14 });
ToolAPI.setTool(ItemID.gitareaxe, "gitareaxe", ToolType.sword);
IDRegistry.genItemID("seeder");
Item.createItem("seeder", "§a Сеятель §r \n 80 урон ", { name: "seeder", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("seeder", { durability: 3400, level: 4, efficiency: 8, damage: 80, enchantability: 14 });
ToolAPI.setTool(ItemID.seeder, "seeder", ToolType.sword);
IDRegistry.genItemID("astralsword");
IDRegistry.genItemID("astralpickaxe");
IDRegistry.genItemID("astralaxe");
IDRegistry.genItemID("astralshovel");
Item.createItem("astralsword", "§a Астральный меч §r \n 305 урон", { name: "astralsword", meta: 0 }, { stack: 1 });
Item.createItem("astralpickaxe", "§2 Астральная кирка", { name: "astralpickaxe", meta: 0 }, { stack: 1 });
Item.createItem("astralaxe", "§2 Астральный топор", { name: "astralaxe", meta: 0 }, { stack: 1 });
Item.createItem("astralshovel", "§2 Астральная лопата", { name: "astralshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("astral", { durability: 3400, level: 10, efficiency: 8, damage: 305, enchantability: 14 });
ToolAPI.setTool(ItemID.astralsword, "astral", ToolType.sword);
ToolAPI.setTool(ItemID.astralpickaxe, "astral", ToolType.pickaxe);
ToolAPI.setTool(ItemID.astralaxe, "astral", ToolType.axe);
ToolAPI.setTool(ItemID.astralshovel, "astral", ToolType.shovel);
IDRegistry.genItemID("astralhelmet");
IDRegistry.genItemID("astralchestplate");
IDRegistry.genItemID("astralleggings");
IDRegistry.genItemID("astralboots");
Item.createArmorItem("astralhelmet", "§c Астральный шлем §r \n 41 защита", { name: "astralhelmet", meta: 0 }, { type: "helmet", armor: 41, durability: 650, texture: "armor/astralarmor.png" });
Item.createArmorItem("astralchestplate", "§c Астральный нагрудник §r \n 42 защита", { name: "astralchestplate", meta: 0 }, { type: "chestplate", armor: 42, durability: 750, texture: "armor/astralarmor.png" });
Item.createArmorItem("astralleggings", "§c Астральные поножи §r  \n 42 защита", { name: "astralleggings", meta: 0 }, { type: "leggings", armor: 42, durability: 700, texture: "armor/astralarmor0.png" });
Item.createArmorItem("astralboots", "§c Астральные ботинки §r \n 41 защита", { name: "astralboots", meta: 0 }, { type: "boots", armor: 41, durability: 600, texture: "armor/astralarmor.png" });
IDRegistry.genItemID("chaossword");
IDRegistry.genItemID("chaospickaxe");
IDRegistry.genItemID("chaosaxe");
IDRegistry.genItemID("chaosshovel");
Item.createItem("chaossword", "§a Меч хаоса §r \n 350 урон", { name: "chaossword", meta: 0 }, { stack: 1 });
Item.createItem("chaospickaxe", "§2 Хаотический разрушитель", { name: "chaospickaxe", meta: 0 }, { stack: 1 });
Item.createItem("chaosaxe", "§2 Топор хаоса", { name: "chaosaxe", meta: 0 }, { stack: 1 });
Item.createItem("chaosshovel", "§2 Лопата хаоса", { name: "chaosshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("chaos", { durability: 3400, level: 11, efficiency: 8, damage: 350, enchantability: 14 });
ToolAPI.setTool(ItemID.chaossword, "chaos", ToolType.sword);
ToolAPI.setTool(ItemID.chaospickaxe, "chaos", ToolType.pickaxe);
ToolAPI.setTool(ItemID.chaosaxe, "chaos", ToolType.axe);
ToolAPI.setTool(ItemID.chaosshovel, "chaos", ToolType.shovel);
IDRegistry.genItemID("chaoshelmet");
IDRegistry.genItemID("chaoschestplate");
IDRegistry.genItemID("chaosleggings");
IDRegistry.genItemID("chaosboots");
Item.createArmorItem("chaoshelmet", "§c Темнодемонический шлем §r \n 50 защита", { name: "chaoshelmet", meta: 0 }, { type: "helmet", armor: 50, durability: 650, texture: "armor/chaosarmor.png" });
Item.createArmorItem("chaoschestplate", "§c Темнодемонический нагрудник §r \n 55 защита", { name: "chaoschestplate", meta: 0 }, { type: "chestplate", armor: 55, durability: 750, texture: "armor/chaosarmor.png" });
Item.createArmorItem("chaosleggings", "§c Темнодемонические поножи §r  \n 55 защита", { name: "chaosleggings", meta: 0 }, { type: "leggings", armor: 55, durability: 700, texture: "armor/chaosarmor0.png" });
Item.createArmorItem("chaosboots", "§c Темнодемонические ботинки §r \n 50 защита", { name: "chaosboots", meta: 0 }, { type: "boots", armor: 50, durability: 600, texture: "armor/chaosarmor.png" });
IDRegistry.genItemID("omikronesword");
IDRegistry.genItemID("omikronepickaxe");
IDRegistry.genItemID("omikroneaxe");
IDRegistry.genItemID("omikroneshovel");
Item.createItem("omikronesword", "§a Омикроновый меч §r \n 260 урон", { name: "omikronesword", meta: 0 }, { stack: 1 });
Item.createItem("omikronepickaxe", "§2 Омикроновая кирка", { name: "omikronepickaxe", meta: 0 }, { stack: 1 });
Item.createItem("omikroneaxe", "§2 Омикроновый топор", { name: "omikroneaxe", meta: 0 }, { stack: 1 });
Item.createItem("omikroneshovel", "§2 Омикроновая лопата", { name: "omikroneshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("omikrone", { durability: 3400, level: 9, efficiency: 8, damage: 260, enchantability: 14 });
ToolAPI.setTool(ItemID.omikronesword, "omikrone", ToolType.sword);
ToolAPI.setTool(ItemID.omikronepickaxe, "omikrone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.omikroneaxe, "omikrone", ToolType.axe);
ToolAPI.setTool(ItemID.omikroneshovel, "omikrone", ToolType.shovel);
IDRegistry.genItemID("omikronehelmet");
IDRegistry.genItemID("omikronechestplate");
IDRegistry.genItemID("omikroneleggings");
IDRegistry.genItemID("omikroneboots");
Item.createArmorItem("omikronehelmet", "§c Омикроновый шлем §r \n 42 защита", { name: "omikronehelmet", meta: 0 }, { type: "helmet", armor: 42, durability: 650, texture: "armor/omikronearmor.png" });
Item.createArmorItem("omikronechestplate", "§c Омикроновый нагрудник §r \n 44 защита", { name: "omikronechestplate", meta: 0 }, { type: "chestplate", armor: 44, durability: 750, texture: "armor/omikronearmor.png" });
Item.createArmorItem("omikroneleggings", "§c Омикроновые поножи §r  \n 44 защита", { name: "omikroneleggings", meta: 0 }, { type: "leggings", armor: 44, durability: 700, texture: "armor/omikronearmor0.png" });
Item.createArmorItem("omikroneboots", "§c Омикроновые ботинки §r \n 42 защита", { name: "omikroneboots", meta: 0 }, { type: "boots", armor: 42, durability: 600, texture: "armor/omikronearmor.png" });
IDRegistry.genItemID("venomussword");
IDRegistry.genItemID("venomuspickaxe");
IDRegistry.genItemID("venomusaxe");
IDRegistry.genItemID("venomusshovel");
Item.createItem("venomussword", "§a Веномусовый меч §r \n 380 урон", { name: "venomussword", meta: 0 }, { stack: 1 });
Item.createItem("venomuspickaxe", "§2 Веномусовая кирка", { name: "venomuspickaxe", meta: 0 }, { stack: 1 });
Item.createItem("venomusaxe", "§2 Веномусовый топор", { name: "venomusaxe", meta: 0 }, { stack: 1 });
Item.createItem("venomusshovel", "§2 Веномусовая лопата", { name: "venomusshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("venomus", { durability: 3400, level: 11, efficiency: 8, damage: 380, enchantability: 14 });
ToolAPI.setTool(ItemID.venomussword, "venomus", ToolType.sword);
ToolAPI.setTool(ItemID.venomuspickaxe, "venomus", ToolType.pickaxe);
ToolAPI.setTool(ItemID.venomusaxe, "venomus", ToolType.axe);
ToolAPI.setTool(ItemID.venomusshovel, "venomus", ToolType.shovel);
IDRegistry.genItemID("venomushelmet");
IDRegistry.genItemID("venomuschestplate");
IDRegistry.genItemID("venomusleggings");
IDRegistry.genItemID("venomusboots");
Item.createArmorItem("venomushelmet", "§c Веномусовый шлем §r \n 55 защита", { name: "venomushelmet", meta: 0 }, { type: "helmet", armor: 55, durability: 650, texture: "armor/venomusarmor.png" });
Item.createArmorItem("venomuschestplate", "§c Веномусовый нагрудник §r \n 60 защита", { name: "venomuschestplate", meta: 0 }, { type: "chestplate", armor: 60, durability: 750, texture: "armor/venomusarmor.png" });
Item.createArmorItem("venomusleggings", "§c Веномусовые поножи §r  \n 60 защита", { name: "venomusleggings", meta: 0 }, { type: "leggings", armor: 60, durability: 700, texture: "armor/venomusarmor0.png" });
Item.createArmorItem("venomusboots", "§c Веномусовые ботинки §r \n 55 защита", { name: "venomusboots", meta: 0 }, { type: "boots", armor: 55, durability: 600, texture: "armor/venomusarmor.png" });
IDRegistry.genItemID("meowsword");
IDRegistry.genItemID("meowpickaxe");
IDRegistry.genItemID("meowaxe");
IDRegistry.genItemID("meowshovel");
Item.createItem("meowsword", "§a Мяумеч §r \n 400 урон", { name: "meowsword", meta: 0 }, { stack: 1 });
Item.createItem("meowpickaxe", "§2 Мяукирка", { name: "meowpickaxe", meta: 0 }, { stack: 1 });
Item.createItem("meowaxe", "§2 Мяутопор", { name: "meowaxe", meta: 0 }, { stack: 1 });
Item.createItem("meowshovel", "§2 Мяулопата", { name: "meowshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("meow", { durability: 3400, level: 11, efficiency: 8, damage: 400, enchantability: 14 });
ToolAPI.setTool(ItemID.meowsword, "meow", ToolType.sword);
ToolAPI.setTool(ItemID.meowpickaxe, "meow", ToolType.pickaxe);
ToolAPI.setTool(ItemID.meowaxe, "meow", ToolType.axe);
ToolAPI.setTool(ItemID.meowshovel, "meow", ToolType.shovel);
IDRegistry.genItemID("meowhelmet");
IDRegistry.genItemID("meowchestplate");
IDRegistry.genItemID("meowleggings");
IDRegistry.genItemID("meowboots");
Item.createArmorItem("meowhelmet", "§c Мяушлем §r \n 60 защита", { name: "meowhelmet", meta: 0 }, { type: "helmet", armor: 60, durability: 650, texture: "armor/meowarmor.png" });
Item.createArmorItem("meowchestplate", "§c Мяунагрудник §r \n 65 защита", { name: "meowchestplate", meta: 0 }, { type: "chestplate", armor: 65, durability: 750, texture: "armor/meowarmor.png" });
Item.createArmorItem("meowleggings", "§c Мяупоножи §r  \n 65 защита", { name: "meowleggings", meta: 0 }, { type: "leggings", armor: 65, durability: 700, texture: "armor/meowarmor0.png" });
Item.createArmorItem("meowboots", "§c Мяуботинки §r \n 60 защита", { name: "meowboots", meta: 0 }, { type: "boots", armor: 60, durability: 600, texture: "armor/meowarmor.png" });
IDRegistry.genItemID("floritesword");
IDRegistry.genItemID("floritepickaxe");
IDRegistry.genItemID("floriteaxe");
IDRegistry.genItemID("floriteshovel");
Item.createItem("floritesword", "§a Флоритовый меч §r \n 500 урон", { name: "floritesword", meta: 0 }, { stack: 1 });
Item.createItem("floritepickaxe", "§2 Флоритовая кирка", { name: "floritepickaxe", meta: 0 }, { stack: 1 });
Item.createItem("floriteaxe", "§2 Флоритовый топор", { name: "floriteaxe", meta: 0 }, { stack: 1 });
Item.createItem("floriteshovel", "§2 Флоритовая лопата", { name: "floriteshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("florite", { durability: 3400, level: 11, efficiency: 8, damage: 500, enchantability: 14 });
ToolAPI.setTool(ItemID.floritesword, "florite", ToolType.sword);
ToolAPI.setTool(ItemID.floritepickaxe, "florite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.floriteaxe, "florite", ToolType.axe);
ToolAPI.setTool(ItemID.floriteshovel, "florite", ToolType.shovel);
IDRegistry.genItemID("floritehelmet");
IDRegistry.genItemID("floritechestplate");
IDRegistry.genItemID("floriteleggings");
IDRegistry.genItemID("floriteboots");
Item.createArmorItem("floritehelmet", "§c Флоритовый шлем §r \n 65 защита", { name: "floritehelmet", meta: 0 }, { type: "helmet", armor: 65, durability: 650, texture: "armor/floritearmor.png" });
Item.createArmorItem("floritechestplate", "§c Флоритовый нагрудник §r \n 70 защита", { name: "floritechestplate", meta: 0 }, { type: "chestplate", armor: 70, durability: 750, texture: "armor/floritearmor.png" });
Item.createArmorItem("floriteleggings", "§c Флоритовые поножи §r  \n 70 защита", { name: "floriteleggings", meta: 0 }, { type: "leggings", armor: 70, durability: 700, texture: "armor/floritearmor0.png" });
Item.createArmorItem("floriteboots", "§c Флоритовые ботинки §r \n 64 защита", { name: "floriteboots", meta: 0 }, { type: "boots", armor: 64, durability: 600, texture: "armor/floritearmor.png" });
IDRegistry.genItemID("flowerpickaxe");
Item.createItem("flowerpickaxe", "§1 Цветущая кирка §r \n 510 урон \n Эффективней флоритовой кирки в 2 раза", { name: "flowerpickaxe", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("florite", { durability: 3400, level: 12, efficiency: 16, damage: 510, enchantability: 14 });
ToolAPI.setTool(ItemID.floritepickaxe, "florite", ToolType.pickaxe);
IDRegistry.genItemID("galaxitesword");
IDRegistry.genItemID("galaxitepickaxe");
IDRegistry.genItemID("galaxiteaxe");
IDRegistry.genItemID("galaxiteshovel");
Item.createItem("galaxitesword", "§a Галакситовый меч §r \n 600 урон", { name: "galaxitesword", meta: 0 }, { stack: 1 });
Item.createItem("galaxitepickaxe", "§2 Галакситовая кирка", { name: "galaxitepickaxe", meta: 0 }, { stack: 1 });
Item.createItem("galaxiteaxe", "§2 Галакситовый топор", { name: "galaxiteaxe", meta: 0 }, { stack: 1 });
Item.createItem("galaxiteshovel", "§2 Галакситовая лопата", { name: "galaxiteshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("galaxite", { durability: 3400, level: 12, efficiency: 8, damage: 600, enchantability: 14 });
ToolAPI.setTool(ItemID.galaxitesword, "galaxite", ToolType.sword);
ToolAPI.setTool(ItemID.galaxitepickaxe, "galaxite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.galaxiteaxe, "galaxite", ToolType.axe);
ToolAPI.setTool(ItemID.galaxiteshovel, "galaxite", ToolType.shovel);
IDRegistry.genItemID("galaxitehelmet");
IDRegistry.genItemID("galaxitechestplate");
IDRegistry.genItemID("galaxiteleggings");
IDRegistry.genItemID("galaxiteboots");
Item.createArmorItem("galaxitehelmet", "§c Галакситовый шлем §r \n 75 защита", { name: "galaxitehelmet", meta: 0 }, { type: "helmet", armor: 75, durability: 650, texture: "armor/galaxitearmor.png" });
Item.createArmorItem("galaxitechestplate", "§c Галакситовый нагрудник §r \n 80 защита", { name: "galaxitechestplate", meta: 0 }, { type: "chestplate", armor: 80, durability: 750, texture: "armor/galaxitearmor.png" });
Item.createArmorItem("galaxiteleggings", "§c Галакситовые поножи §r  \n 80 защита", { name: "galaxiteleggings", meta: 0 }, { type: "leggings", armor: 80, durability: 700, texture: "armor/galaxitearmor0.png" });
Item.createArmorItem("galaxiteboots", "§c Галакситовые ботинки §r \n 75 защита", { name: "galaxiteboots", meta: 0 }, { type: "boots", armor: 75, durability: 600, texture: "armor/galaxitearmor.png" });
IDRegistry.genItemID("goldysword");
IDRegistry.genItemID("goldypickaxe");
IDRegistry.genItemID("goldyaxe");
IDRegistry.genItemID("goldyshovel");
Item.createItem("goldysword", "§a Злотоносный меч §r \n 650 урон", { name: "goldysword", meta: 0 }, { stack: 1 });
Item.createItem("goldypickaxe", "§2 Злотоносная кирка", { name: "goldypickaxe", meta: 0 }, { stack: 1 });
Item.createItem("goldyaxe", "§2 Злотоносный топор", { name: "goldyaxe", meta: 0 }, { stack: 1 });
Item.createItem("goldyshovel", "§2 Злотоносная лопата", { name: "goldyshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("goldy", { durability: 3400, level: 12, efficiency: 8, damage: 650, enchantability: 14 });
ToolAPI.setTool(ItemID.goldysword, "goldy", ToolType.sword);
ToolAPI.setTool(ItemID.goldypickaxe, "goldy", ToolType.pickaxe);
ToolAPI.setTool(ItemID.goldyaxe, "goldy", ToolType.axe);
ToolAPI.setTool(ItemID.goldyshovel, "goldy", ToolType.shovel);
IDRegistry.genItemID("goldyhelmet");
IDRegistry.genItemID("goldychestplate");
IDRegistry.genItemID("goldyleggings");
IDRegistry.genItemID("goldyboots");
Item.createArmorItem("goldyhelmet", "§c Злотоносный шлем §r \n 85 защита", { name: "goldyhelmet", meta: 0 }, { type: "helmet", armor: 85, durability: 650, texture: "armor/goldyarmor.png" });
Item.createArmorItem("goldychestplate", "§c Злотоносный нагрудник §r \n 90 защита", { name: "goldychestplate", meta: 0 }, { type: "chestplate", armor: 90, durability: 750, texture: "armor/goldyarmor.png" });
Item.createArmorItem("goldyleggings", "§c Злотоносные поножи §r  \n 90 защита", { name: "goldyleggings", meta: 0 }, { type: "leggings", armor: 90, durability: 700, texture: "armor/goldyarmor0.png" });
Item.createArmorItem("goldyboots", "§c Злотоносные ботинки §r \n 85 защита", { name: "goldyboots", meta: 0 }, { type: "boots", armor: 85, durability: 600, texture: "armor/goldyarmor.png" });
IDRegistry.genItemID("shadowspecsword");
IDRegistry.genItemID("shadowspecpickaxe");
IDRegistry.genItemID("shadowspecaxe");
IDRegistry.genItemID("shadowspecshovel");
Item.createItem("shadowspecsword", "§a Шедоуспеховый меч §r \n 750 урон", { name: "shadowspecsword", meta: 0 }, { stack: 1 });
Item.createItem("shadowspecpickaxe", "§2 Шедоуспеховая кирка", { name: "shadowspecpickaxe", meta: 0 }, { stack: 1 });
Item.createItem("shadowspecaxe", "§2 Шедоуспеховый топор", { name: "shadowspecaxe", meta: 0 }, { stack: 1 });
Item.createItem("shadowspecshovel", "§2 Шедоуспеховая лопата", { name: "shadowspecshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("shadowspec", { durability: 3400, level: 14, efficiency: 8, damage: 750, enchantability: 14 });
ToolAPI.setTool(ItemID.shadowspecsword, "shadowspec", ToolType.sword);
ToolAPI.setTool(ItemID.shadowspecpickaxe, "shadowspec", ToolType.pickaxe);
ToolAPI.setTool(ItemID.shadowspecaxe, "shadowspec", ToolType.axe);
ToolAPI.setTool(ItemID.shadowspecshovel, "shadowspec", ToolType.shovel);
IDRegistry.genItemID("shadowspechelmet");
IDRegistry.genItemID("shadowspecchestplate");
IDRegistry.genItemID("shadowspecleggings");
IDRegistry.genItemID("shadowspecboots");
Item.createArmorItem("shadowspechelmet", "§c Шедоуспеховый шлем §r \n 100 защита", { name: "shadowspechelmet", meta: 0 }, { type: "helmet", armor: 100, durability: 650, texture: "armor/shadowspecarmor.png" });
Item.createArmorItem("shadowspecchestplate", "§c Шедоуспеховый нагрудник §r \n 105 защита", { name: "shadowspecchestplate", meta: 0 }, { type: "chestplate", armor: 105, durability: 750, texture: "armor/shadowspecarmor.png" });
Item.createArmorItem("shadowspecleggings", "§c Шедоуспеховые поножи §r  \n 105 защита", { name: "shadowspecleggings", meta: 0 }, { type: "leggings", armor: 105, durability: 700, texture: "armor/shadowspecarmor0.png" });
Item.createArmorItem("shadowspecboots", "§c Шедоуспеховые ботинки §r \n 100 защита", { name: "shadowspecboots", meta: 0 }, { type: "boots", armor: 100, durability: 600, texture: "armor/shadowspecarmor.png" });
IDRegistry.genItemID("azatotsword");
IDRegistry.genItemID("azatotpickaxe");
IDRegistry.genItemID("azatotaxe");
IDRegistry.genItemID("azatotshovel");
Item.createItem("azatotsword", "§a Меч Азатота §r \n 1050 урон", { name: "azatotsword", meta: 0 }, { stack: 1 });
Item.createItem("azatotpickaxe", "§2 Кирка Азатота", { name: "azatotpickaxe", meta: 0 }, { stack: 1 });
Item.createItem("azatotaxe", "§2 Топор Азатота", { name: "azatotaxe", meta: 0 }, { stack: 1 });
Item.createItem("azatotshovel", "§2 Лопата Азатота", { name: "azatotshovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("azatot", { durability: 3400, level: 4, efficiency: 8, damage: 1050, enchantability: 14 });
ToolAPI.setTool(ItemID.azatotsword, "azatot", ToolType.sword);
ToolAPI.setTool(ItemID.azatotpickaxe, "azatot", ToolType.pickaxe);
ToolAPI.setTool(ItemID.azatotaxe, "azatot", ToolType.axe);
ToolAPI.setTool(ItemID.azatotshovel, "azatot", ToolType.shovel);
IDRegistry.genItemID("azatothelmet");
IDRegistry.genItemID("azatotchestplate");
IDRegistry.genItemID("azatotleggings");
IDRegistry.genItemID("azatotboots");
Item.createArmorItem("azatothelmet", "§c Шлем Азатота §r \n 180 защита", { name: "azatothelmet", meta: 0 }, { type: "helmet", armor: 180, durability: 650, texture: "armor/azatotarmor.png" });
Item.createArmorItem("azatotchestplate", "§c Нагрудник Азатота §r \n 200 защита", { name: "azatotchestplate", meta: 0 }, { type: "chestplate", armor: 200, durability: 750, texture: "armor/azatotarmor.png" });
Item.createArmorItem("azatotleggings", "§c Поножи Азатота §r  \n 200 защита", { name: "azatotleggings", meta: 0 }, { type: "leggings", armor: 200, durability: 700, texture: "armor/azatotarmor0.png" });
Item.createArmorItem("azatotboots", "§c Ботинки Азатота §r \n 180 защита", { name: "azatotboots", meta: 0 }, { type: "boots", armor: 180, durability: 600, texture: "armor/azatotarmor.png" });
IDRegistry.genItemID("chtulhusword");
IDRegistry.genItemID("chtulhupickaxe");
IDRegistry.genItemID("chtulhuaxe");
IDRegistry.genItemID("chtulhushovel");
Item.createItem("chtulhusword", "§a Меч Ктулху §r \n 2000 урон", { name: "chtulhusword", meta: 0 }, { stack: 1 });
Item.createItem("chtulhupickaxe", "§2 Кирка Ктулху", { name: "chtulhupickaxe", meta: 0 }, { stack: 1 });
Item.createItem("chtulhuaxe", "§2 Топор Ктулху", { name: "chtulhuaxe", meta: 0 }, { stack: 1 });
Item.createItem("chtulhushovel", "§2 Лопата Ктулху", { name: "chtulhushovel", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("chtulhu", { durability: 3400, level: 13, efficiency: 8, damage: 2000, enchantability: 14 });
ToolAPI.setTool(ItemID.chtulhusword, "chtulhu", ToolType.sword);
ToolAPI.setTool(ItemID.chtulhupickaxe, "chtulhu", ToolType.pickaxe);
ToolAPI.setTool(ItemID.chtulhuaxe, "chtulhu", ToolType.axe);
ToolAPI.setTool(ItemID.chtulhushovel, "chtulhu", ToolType.shovel);
IDRegistry.genItemID("chtulhuhelmet");
IDRegistry.genItemID("chtulhuchestplate");
IDRegistry.genItemID("chtulhuleggings");
IDRegistry.genItemID("chtulhuboots");
Item.createArmorItem("chtulhuhelmet", "§c Шлем Ктулху §r \n 220 защита", { name: "chtulhuhelmet", meta: 0 }, { type: "helmet", armor: 220, durability: 650, texture: "armor/chtulhuarmor.png" });
Item.createArmorItem("chtulhuchestplate", "§c Нагрудник Ктулху §r \n 240 защита", { name: "chtulhuchestplate", meta: 0 }, { type: "chestplate", armor: 240, durability: 750, texture: "armor/chtulhuarmor.png" });
Item.createArmorItem("chtulhuleggings", "§c Поножи Ктулху §r  \n 240 защита", { name: "chtulhuleggings", meta: 0 }, { type: "leggings", armor: 240, durability: 700, texture: "armor/chtulhuarmor0.png" });
Item.createArmorItem("chtulhuboots", "§c Ботинки Ктулху §r \n 220 защита", { name: "chtulhuboots", meta: 0 }, { type: "boots", armor: 220, durability: 600, texture: "armor/chtulhuarmor.png" });
IDRegistry.genItemID("ArkHelmet");
IDRegistry.genItemID("ArkCheatplate");
IDRegistry.genItemID("ArkLeggings");
IDRegistry.genItemID("ArkBoots");
Item.createArmorItem("ArkHelmet", "§6Шлем Арка §r \n 7500 защита", { name: "ArkHelmet", meta: 0 }, { type: "helmet", armor: 7500, durability: 1000000, texture: "armor/ArkArmor.png" }, { isTech: true });
Item.createArmorItem("ArkCheatplate", "§6 Нагрудник Арка §r \n 7700 защита", { name: "ArkCheatplate", meta: 0 }, { type: "chestplate", armor: 7700, durability: 1000000, texture: "armor/ArkArmor.png" }, { isTech: true });
Item.createArmorItem("ArkLeggings", "§6 Поножи Арка §r  \n 7600 защита", { name: "ArkLeggings", meta: 0 }, { type: "leggings", armor: 7600, durability: 1000000, texture: "armor/ArkArmor0.png" }, { isTech: true });
Item.createArmorItem("ArkBoots", "§6 Ботинки Арка §r \n 7500 защита", { name: "ArkBoots", meta: 0 }, { type: "boots", armor: 7500, durability: 1000000, texture: "armor/ArkArmor.png" }, { isTech: true });
Armor.registerOnTickListener(ItemID.ArkHelmet, function (item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.damageBoost, 250, 100);
    Entity.addEffect(player, Native.PotionEffect.damageResistance, 250, 100);
});
Armor.registerOnTickListener(ItemID.ArkCheatplate, function (item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.jump, 4, 100);
    Entity.addEffect(player, Native.PotionEffect.movementSpeed, 10, 100);
});
Armor.registerOnTickListener(ItemID.ArkLeggings, function (item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.regeneration, 250, 100);
    Entity.addEffect(player, Native.PotionEffect.saturation, 250, 100);
});
Armor.registerOnTickListener(ItemID.ArkBoots, function (item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.waterBreathing, 250, 100);
    Entity.addEffect(player, Native.PotionEffect.fireResistance, 250, 100);
});
Callback.addCallback("LocalTick", function () {
    var player = Player.get();
    var helmet = Entity.getArmorSlot(player, 0);
    var chest = Entity.getArmorSlot(player, 1);
    var legs = Entity.getArmorSlot(player, 2);
    var boots = Entity.getArmorSlot(player, 3);
    var pos = Entity.getPosition(player);
    if (helmet.id == ItemID.ArkHelmet && chest.id == ItemID.ArkCheatplate && legs.id == ItemID.ArkLeggings && boots.id == ItemID.ArkBoots) {
        Particles.addParticle(pos.x, pos.y + 1, pos.z, 6);
        Player.setFlyingEnabled(true);
    }
    else if (new PlayerActor(Player.get()).getGameMode() == 0) {
        Player.setFlyingEnabled(false);
    }
});
IDRegistry.genItemID("germesboots");
Item.createArmorItem("germesboots", "§c Ботинки Гермеса §r \n 45 защита", { name: "germesboots", meta: 0 }, { type: "boots", armor: 45, durability: 600, texture: "armor/germesboots.png" });
Armor.registerOnTakeOnListener(ItemID.germesboots, function (item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.movementSpeed, 15, 9999999);
    Entity.addEffect(player, Native.PotionEffect.jump, 1, 999999999);
});
Armor.registerOnTakeOffListener(ItemID.germesboots, function (item, slot, player) {
    Entity.clearEffect(player, Native.PotionEffect.movementSpeed);
    Entity.clearEffect(player, Native.PotionEffect.jump);
});
IDRegistry.genItemID("firerisboots");
Item.createArmorItem("firerisboots", "§c Ботинки Фиреруса §r \n 110 защита \n§6 Огнеусточевые", { name: "firerisboots", meta: 0 }, { type: "boots", armor: 110, durability: 600, texture: "armor/firerisboots.png" });
Armor.registerOnTakeOnListener(ItemID.firerisboots, function (item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.fireResistance, 100, 9999999999);
});
Armor.registerOnTakeOffListener(ItemID.firerisboots, function (item, slot, player) {
    Entity.clearEffect(player, Native.PotionEffect.fireResistance);
});
IDRegistry.genItemID("gfboots");
Item.createArmorItem("gfboots", "§c Искрящие бегуны §r \n 160 защита \n Огнеусточевые и супер быстрые", { name: "gfboots", meta: 0 }, { type: "boots", armor: 160, durability: 600, texture: "armor/gfboots.png" });
Armor.registerOnTakeOnListener(ItemID.gfboots, function (item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.fireResistance, 100, 9999999999);
    Entity.addEffect(player, Native.PotionEffect.movementSpeed, 10, 9999999999);
    Entity.addEffect(player, Native.PotionEffect.jump, 4, 9999999999);
});
Armor.registerOnTakeOffListener(ItemID.gfboots, function (item, slot, player) {
    Entity.clearEffect(player, Native.PotionEffect.fireResistance);
    Entity.clearEffect(player, Native.PotionEffect.movementSpeed);
    Entity.clearEffect(player, Native.PotionEffect.jump);
});
IDRegistry.genItemID("ugfboots");
Item.createArmorItem("ugfboots", "§c Бегуны поджигателя земель §r \n 165 защита \n Огнеусточевые и супер быстрые, поджигают землю за собой", { name: "gfboots", meta: 0 }, { type: "boots", armor: 165, durability: 600, texture: "armor/gfboots.png" });
Armor.registerOnTakeOnListener(ItemID.ugfboots, function (item, slot, player) {
    Entity.addEffect(player, Native.PotionEffect.fireResistance, 10, 9999999999);
    Entity.addEffect(player, Native.PotionEffect.movementSpeed, 10, 9999999999);
    Entity.addEffect(player, Native.PotionEffect.jump, 4, 9999999999);
});
Armor.registerOnTakeOffListener(ItemID.ugfboots, function (item, slot, player) {
    Entity.clearEffect(player, Native.PotionEffect.fireResistance);
    Entity.clearEffect(player, Native.PotionEffect.movementSpeed);
    Entity.clearEffect(player, Native.PotionEffect.jump);
});
Armor.registerOnTickListener(ItemID.ugfboots, function (item, slot, player) {
    var pos = Entity.getPosition(player);
    if (BlockSource.getDefaultForActor(player).getBlock(pos.x, pos.y - 1, pos.z) != 0)
        BlockSource.getDefaultForActor(player).setBlock(pos.x, pos.y - 1, pos.z, 51, 0);
});
IDRegistry.genItemID("elementalguardiansword");
Item.createItem("elementalguardiansword", "Меч Хранителя Элементов", { name: "elementalguardiansword", meta: 0 }, { stack: 1 }, { isTech: true });
IDRegistry.genItemID("elementalheart");
Item.createFoodItem("elementalheart", "§e Элементарное сердце §1 \n 6 еды \n Увеличивает жизни на 10", { name: "elementalheart", meta: 0 }, { food: 6 });
Callback.addCallback("FoodEaten", function (heal, satRatio, player) {
    var Ph = Entity.getMaxHealth(player);
    if (Entity.getCarriedItem(player).id == ItemID.elementalheart) {
        Entity.setMaxHealth(player, Ph + 10);
        if (Entity.getMaxHealth(player) == 1000)
            return false;
    }
});
IDRegistry.genItemID("aeressence");
Item.createItem("aeressence", "Аэритовая эссенция", { name: "aeressence", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("aquaessence");
Item.createItem("aquaessence", "Акватическая эссенция", { name: "aquaessence", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("ignisessence");
Item.createItem("ignisessence", "Игнитовая эссенция", { name: "ignisessence", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("terraessence");
Item.createItem("terraessence", "Территовая эссенция", { name: "terraessence", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("profanedessence");
Item.createItem("profanedessence", "Нечестивая эссенция", { name: "profanedessence", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("calamityessence");
Item.createItem("calamityessence", "Эссенция бедствия", { name: "calamityessence", meta: 0 }, { stack: 64 });
//aqua
EssenceAPI.registerDropEntityArr([17, 21, 28, 37, 49], ItemID.aquaessence);
//ignis
EssenceAPI.registerDropEntityArr([42, 48, 43, 33, 47, 36, 38], ItemID.ignisessence);
//aer
EssenceAPI.registerDropEntityArr([21, 28, 46, 19, 53, 52], ItemID.aeressence);
//terra
EssenceAPI.registerDropEntityArr([15, 11, 10, 16, 18, 12, 23, 24, 25, 27, 26, 13, 22, 14, 20, 36, 35, 40, 38, 34, 37, 39, 55, 45, 32, 44, 33], ItemID.terraessence);
IDRegistry.genItemID("aercore");
Item.createItem("aercore", "Аэритовое ядро", { name: "aercore", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("aquacore");
Item.createItem("aquacore", "Акватическое ядро", { name: "aquacore", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("igniscore");
Item.createItem("igniscore", "Игнитовое ядро", { name: "igniscore", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("terracore");
Item.createItem("terracore", "Территовое ядро", { name: "terracore", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("elementalcore");
Item.createItem("elementalcore", "Элементарное ядро \n Элементарно, Ватсон!", { name: "elementalcore", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("starsword");
Item.createItem("starsword", "§a Звездная сила §r \n 15 урон", { name: "starsword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("starsword", { durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14 });
ToolAPI.setTool(ItemID.starsword, "starsword", ToolType.sword);
IDRegistry.genItemID("enchantedsword");
Item.createItem("enchantedsword", "§a Заколдованный меч §r \n 15 урон", { name: "enchantedsword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("enchantedsword", { durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14 });
ToolAPI.setTool(ItemID.enchantedsword, "enchantedsword", ToolType.sword);
Block.registerDropFunctionForID(1, function (coords, blockID, blockData, level) {
    if (Math.random() < 0.002) {
        var drop = [];
        drop.push([ItemID.enchantedsword, 1, 0]);
        return drop;
    }
    if (level > 0) {
        var drop = [];
        drop.push([4, 1, 0]);
        return drop;
    }
});
IDRegistry.genItemID("brokenherosword");
Item.createItem("brokenherosword", "§a Сломанный меч героя §r \n 3 урон", { name: "brokenherosword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("brokenherosword", { durability: 3400, level: 4, efficiency: 8, damage: 3, enchantability: 14 });
ToolAPI.setTool(ItemID.brokenherosword, "brokenherosword", ToolType.sword);
EssenceAPI.registerDropEntityArr([32, 45, 40, 38, 46, 52, 44, 47, 33, 34, 48], ItemID.brokenherosword);
IDRegistry.genItemID("exalibur");
Item.createItem("exalibur", "§1 Экскалибур §r \n 40 урон", { name: "exalibur", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("exalibur", { durability: 3400, level: 4, efficiency: 8, damage: 40, enchantability: 14 });
ToolAPI.setTool(ItemID.exalibur, "exalibur", ToolType.sword);
IDRegistry.genItemID("ancientark");
Item.createItem("ancientark", "§1 Ковчег древних §r \n 72 урон \n §1 Когда вы держите этот меч, вы чувствуете что-то... \n что-то неземное...", { name: "ancientark", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("ancientark", { durability: 3400, level: 4, efficiency: 8, damage: 72, enchantability: 14 });
ToolAPI.setTool(ItemID.ancientark, "ancientark", ToolType.sword);
IDRegistry.genItemID("trueexalibur");
Item.createItem("trueexalibur", "§1 Истинный экскалибур §r \n 45 урон", { name: "trueexalibur", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("trueexalibur", { durability: 3400, level: 4, efficiency: 8, damage: 45, enchantability: 14 });
ToolAPI.setTool(ItemID.trueexalibur, "trueexalibur", ToolType.sword);
IDRegistry.genItemID("herosword");
Item.createItem("herosword", "§a Меч героя §r \n 6 урон", { name: "herosword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("herosword", { durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14 });
ToolAPI.setTool(ItemID.herosword, "herosword", ToolType.sword);
IDRegistry.genItemID("trueancientark");
Item.createItem("trueancientark", "§1 Истинный ковчег древних §r \n 85 урон \n §1 И снова то чувство... оно стало сильнее...", { name: "trueancientark", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("trueancientark", { durability: 3400, level: 4, efficiency: 8, damage: 95, enchantability: 14 });
ToolAPI.setTool(ItemID.trueancientark, "trueancientark", ToolType.sword);
IDRegistry.genItemID("elementalark");
Item.createItem("elementalark", "§1 Ковчег элементов §r \n 110 урон \n §1 Вы чувствуете что совсем близко к чему то... \n Чему то неземному, космическому, великому...", { name: "elementalark", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("elementalark", { durability: 3400, level: 4, efficiency: 8, damage: 110, enchantability: 14 });
ToolAPI.setTool(ItemID.elementalark, "elementalark", ToolType.sword);
IDRegistry.genItemID("biomesword");
Item.createItem("biomesword", "§a Клинок биомов §r \n 15 урон ", { name: "biomesword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("biomesword", { durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14 });
ToolAPI.setTool(ItemID.biomesword, "biomesword", ToolType.sword);
IDRegistry.genItemID("truebiomesword");
Item.createItem("truebiomesword", "§a Истинный клинок биомов §r \n 38 урон ", { name: "truebiomesword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("truebiomesword", { durability: 3400, level: 4, efficiency: 8, damage: 38, enchantability: 14 });
ToolAPI.setTool(ItemID.truebiomesword, "truebiomesword", ToolType.sword);
IDRegistry.genItemID("omegabiomesword");
Item.createItem("omegabiomesword", "§a Омега клинок биомов §r \n 49 урон ", { name: "omegabiomesword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("omegabiomesword", { durability: 3400, level: 4, efficiency: 8, damage: 49, enchantability: 14 });
ToolAPI.setTool(ItemID.omegabiomesword, "omegabiomesword", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.exalibur, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.trueexalibur, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.ancientark, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.trueancientark, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.elementalark, .5, 7);
IDRegistry.genItemID("muramasa");
Item.createItem("muramasa", "§a Мурамаса §r \n 10 урон ", { name: "muramasa", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("muramasa", { durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14 });
ToolAPI.setTool(ItemID.muramasa, "muramasa", ToolType.sword);
EssenceAPI.registerDropEntity(32, ItemID.muramasa, .02);
IDRegistry.genItemID("murasama");
Item.createItem("murasama", "§a Мурасама §r \n 15 урон ", { name: "murasama", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("murasama", { durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14 });
ToolAPI.setTool(ItemID.murasama, "murasama", ToolType.sword);
IDRegistry.genItemID("rootenbroadsword");
Item.createItem("rootenbroadsword", "§a Гнилой тесак §r \n 5 урон ", { name: "rootenbroadsword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("rootenbroadsword", { durability: 3400, level: 4, efficiency: 8, damage: 5, enchantability: 14 });
ToolAPI.setTool(ItemID.rootenbroadsword, "rootenbroadsword", ToolType.sword);
EssenceAPI.registerDropEntity(32, ItemID.rootenbroadsword, 1);
IDRegistry.genItemID("taigasword");
Item.createItem("taigasword", "§a Меч тайги §r \n 6 урон ", { name: "taigasword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("taigasword", { durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14 });
ToolAPI.setTool(ItemID.taigasword, "taigasword", ToolType.sword);
IDRegistry.genItemID("krackenkatana");
Item.createItem("krackenkatana", "§a Катана Кракена §r \n 138 урон ", { name: "krackenkatana", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("krackenkatana", { durability: 3400, level: 4, efficiency: 8, damage: 138, enchantability: 14 });
ToolAPI.setTool(ItemID.krackenkatana, "krackenkatana", ToolType.sword);
IDRegistry.genItemID("krackenblade");
Item.createItem("krackenblade", "§a Лезвие Кракена §r \n 145 урон ", { name: "krackenblade", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("krackenblade", { durability: 3400, level: 4, efficiency: 8, damage: 145, enchantability: 14 });
ToolAPI.setTool(ItemID.krackenblade, "krackenblade", ToolType.sword);
IDRegistry.genItemID("grandbiomesword");
Item.createItem("grandbiomesword", "§1 Великий клинок биома §r \n 200 урон ", { name: "grandbiomesword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("grandbiomesword", { durability: 3400, level: 4, efficiency: 8, damage: 200, enchantability: 14 });
ToolAPI.setTool(ItemID.grandbiomesword, "grandbiomesword", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.grandbiomesword, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.aersword, .5, 25);
EssenceAPI.registerPlayerAttackEffect(ItemID.aquasword, .5, 19);
Callback.addCallback("PlayerAttack", function (player, victim) {
    var item = Entity.getCarriedItem(player);
    if (item.id == ItemID.ignissword) {
        Entity.setFire(victim, 200);
    }
});
IDRegistry.genItemID("elementalsword");
Item.createItem("elementalsword", "§1 Меч элементов §r \n 200 урон ", { name: "elementalsword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("elementalsword", { durability: 3400, level: 4, efficiency: 8, damage: 200, enchantability: 14 });
ToolAPI.setTool(ItemID.elementalsword, "elementalsword", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.elementalsword, .5, 7);
IDRegistry.genItemID("ArsenalGuardian");
Item.createItem("ArsenalGuardian", "§b Меч из нисших миров", { name: "ArsenalGuardian", meta: 0 }, { stack: 1 });
IDRegistry.genItemID("swordofDNil");
Item.createItem("swordofDNil", "§a Меч дельты Нила §r \n 10 урон ", { name: "swordofDNil", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("swordofDNil", { durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14 });
ToolAPI.setTool(ItemID.swordofDNil, "swordofDNil", ToolType.sword);
EssenceAPI.registerDropEntity(47, ItemID.swordofDNil, 3);
IDRegistry.genItemID("ahalalui");
Item.createItem("ahalalui", "§a Ахалалуи §r \n 10 урон ", { name: "ahalalui", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("ahalalui", { durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14 });
ToolAPI.setTool(ItemID.ahalalui, "ahalalui", ToolType.sword);
EssenceAPI.registerDropEntity(47, ItemID.ahalalui, 3);
IDRegistry.genItemID("kartzon");
Item.createItem("kartzon", "§1 Картзон§r \n 40 урон \n Копает в диаметре 5 метров", { name: "kartzon", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("kartzon", { durability: 3400, level: 4, efficiency: 8, damage: 40, enchantability: 14 });
ToolAPI.setTool(ItemID.kartzon, "kartzon", ToolType.sword);
EssenceAPI.registerDropEntity(47, ItemID.kartzon, .01);
EssenceAPI.registerPlayerAttackEffect(ItemID.kartzon, .5, 7);
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (Entity.getCarriedItem(player).id == ItemID.kartzon) {
        x = coords.x;
        y = coords.y;
        z = coords.z;
        var bs = BlockSource.getDefaultForActor(player);
        bs.destroyBlock(x, y - 2, z, true);
        bs.destroyBlock(x + 2, y - 2, z - 2, true);
        bs.destroyBlock(x + 2, y - 2, z - 1, true);
        bs.destroyBlock(x + 2, y - 2, z, true);
        bs.destroyBlock(x + 2, y - 2, z + 1, true);
        bs.destroyBlock(x + 2, y - 2, z + 2, true);
        bs.destroyBlock(x + 1, y - 2, z - 2, true);
        bs.destroyBlock(x + 1, y - 2, z - 1, true);
        bs.destroyBlock(x + 1, y - 2, z, true);
        bs.destroyBlock(x + 1, y - 2, z + 1, true);
        bs.destroyBlock(x + 1, y - 2, z + 2, true);
        bs.destroyBlock(x, y - 2, z - 2, true);
        bs.destroyBlock(x, y - 2, z - 1, true);
        bs.destroyBlock(x, y - 2, z, true);
        bs.destroyBlock(x, y - 2, z + 1, true);
        bs.destroyBlock(x, y - 2, z + 2, true);
        bs.destroyBlock(x - 1, y - 2, z - 2, true);
        bs.destroyBlock(x - 1, y - 2, z - 1, true);
        bs.destroyBlock(x - 1, y - 2, z, true);
        bs.destroyBlock(x - 1, y - 2, z + 1, true);
        bs.destroyBlock(x - 1, y - 2, z + 2, true);
        bs.destroyBlock(x - 2, y - 2, z - 2, true);
        bs.destroyBlock(x - 2, y - 2, z - 1, true);
        bs.destroyBlock(x - 2, y - 2, z, true);
        bs.destroyBlock(x - 2, y - 2, z + 1, true);
        bs.destroyBlock(x - 2, y - 2, z + 2, true);
        //00000
        bs.destroyBlock(x + 2, y - 1, z - 2, true);
        bs.destroyBlock(x + 2, y - 1, z - 1, true);
        bs.destroyBlock(x + 2, y - 1, z, true);
        bs.destroyBlock(x + 2, y - 1, z + 1, true);
        bs.destroyBlock(x + 2, y - 1, z + 2, true);
        bs.destroyBlock(x + 1, y - 1, z - 2, true);
        bs.destroyBlock(x + 1, y - 1, z - 1, true);
        bs.destroyBlock(x + 1, y - 1, z, true);
        bs.destroyBlock(x + 1, y - 1, z + 1, true);
        bs.destroyBlock(x + 1, y - 1, z + 2, true);
        bs.destroyBlock(x, y - 1, z - 2, true);
        bs.destroyBlock(x, y - 1, z - 1, true);
        bs.destroyBlock(x, y - 1, z, true);
        bs.destroyBlock(x, y - 1, z + 1, true);
        bs.destroyBlock(x, y - 1, z + 2, true);
        bs.destroyBlock(x - 1, y - 1, z - 2, true);
        bs.destroyBlock(x - 1, y - 1, z - 1, true);
        bs.destroyBlock(x - 1, y - 1, z, true);
        bs.destroyBlock(x - 1, y - 1, z + 1, true);
        bs.destroyBlock(x - 1, y - 1, z + 2, true);
        bs.destroyBlock(x - 2, y - 1, z - 2, true);
        bs.destroyBlock(x - 2, y - 1, z - 1, true);
        bs.destroyBlock(x - 2, y - 1, z, true);
        bs.destroyBlock(x - 2, y - 1, z + 1, true);
        bs.destroyBlock(x - 2, y - 1, z + 2, true);
        //хххххххххххххх
        bs.destroyBlock(x + 2, y, z - 2, true);
        bs.destroyBlock(x + 2, y, z - 1, true);
        bs.destroyBlock(x + 2, y, z, true);
        bs.destroyBlock(x + 2, y, z + 1, true);
        bs.destroyBlock(x + 2, y, z + 2, true);
        bs.destroyBlock(x + 1, y, z - 2, true);
        bs.destroyBlock(x + 1, y, z - 1, true);
        bs.destroyBlock(x + 1, y, z, true);
        bs.destroyBlock(x + 1, y, z + 1, true);
        bs.destroyBlock(x + 1, y, z + 2, true);
        bs.destroyBlock(x, y, z - 2, true);
        bs.destroyBlock(x, y, z - 1, true);
        bs.destroyBlock(x, y, z, true);
        bs.destroyBlock(x, y, z + 1, true);
        bs.destroyBlock(x, y, z + 2, true);
        bs.destroyBlock(x - 1, y, z - 2, true);
        bs.destroyBlock(x - 1, y, z - 1, true);
        bs.destroyBlock(x - 1, y, z, true);
        bs.destroyBlock(x - 1, y, z + 1, true);
        bs.destroyBlock(x - 1, y, z + 2, true);
        bs.destroyBlock(x - 2, y, z - 2, true);
        bs.destroyBlock(x - 2, y, z - 1, true);
        bs.destroyBlock(x - 2, y, z, true);
        bs.destroyBlock(x - 2, y, z + 1, true);
        bs.destroyBlock(x - 2, y, z + 2, true);
        //77777777777
        bs.destroyBlock(x + 2, y + 1, z - 2, true);
        bs.destroyBlock(x + 2, y + 1, z - 1, true);
        bs.destroyBlock(x + 2, y + 1, z, true);
        bs.destroyBlock(x + 2, y + 1, z + 1, true);
        bs.destroyBlock(x + 2, y + 1, z + 2, true);
        bs.destroyBlock(x + 1, y + 1, z - 2, true);
        bs.destroyBlock(x + 1, y + 1, z - 1, true);
        bs.destroyBlock(x + 1, y + 1, z, true);
        bs.destroyBlock(x + 1, y + 1, z + 1, true);
        bs.destroyBlock(x + 1, y + 1, z + 2, true);
        bs.destroyBlock(x, y + 1, z - 2, true);
        bs.destroyBlock(x, y + 1, z - 1, true);
        bs.destroyBlock(x, y + 1, z, true);
        bs.destroyBlock(x, y + 1, z + 1, true);
        bs.destroyBlock(x, y + 1, z + 2, true);
        bs.destroyBlock(x - 1, y + 1, z - 2, true);
        bs.destroyBlock(x - 1, y + 1, z - 1, true);
        bs.destroyBlock(x - 1, y + 1, z, true);
        bs.destroyBlock(x - 1, y + 1, z + 1, true);
        bs.destroyBlock(x - 1, y + 1, z + 2, true);
        bs.destroyBlock(x - 2, y + 1, z - 2, true);
        bs.destroyBlock(x - 2, y + 1, z - 1, true);
        bs.destroyBlock(x - 2, y + 1, z, true);
        bs.destroyBlock(x - 2, y + 1, z + 1, true);
        bs.destroyBlock(x - 2, y + 1, z + 2, true);
        //666999
        bs.destroyBlock(x + 2, y + 2, z - 2, true);
        bs.destroyBlock(x + 2, y + 2, z - 1, true);
        bs.destroyBlock(x + 2, y + 2, z, true);
        bs.destroyBlock(x + 2, y + 2, z + 1, true);
        bs.destroyBlock(x + 2, y + 2, z + 2, true);
        bs.destroyBlock(x + 1, y + 2, z - 2, true);
        bs.destroyBlock(x + 1, y + 2, z - 1, true);
        bs.destroyBlock(x + 1, y + 2, z, true);
        bs.destroyBlock(x + 1, y + 2, z + 1, true);
        bs.destroyBlock(x + 1, y + 2, z + 2, true);
        bs.destroyBlock(x, y + 2, z - 2, true);
        bs.destroyBlock(x, y + 2, z - 1, true);
        bs.destroyBlock(x, y + 2, z, true);
        bs.destroyBlock(x, y + 2, z + 1, true);
        bs.destroyBlock(x, y + 2, z + 2, true);
        bs.destroyBlock(x - 1, y + 2, z - 2, true);
        bs.destroyBlock(x - 1, y + 2, z - 1, true);
        bs.destroyBlock(x - 1, y + 2, z, true);
        bs.destroyBlock(x - 1, y + 2, z + 1, true);
        bs.destroyBlock(x - 1, y + 2, z + 2, true);
        bs.destroyBlock(x - 2, y + 2, z - 2, true);
        bs.destroyBlock(x - 2, y + 2, z - 1, true);
        bs.destroyBlock(x - 2, y + 2, z, true);
        bs.destroyBlock(x - 2, y + 2, z + 1, true);
        bs.destroyBlock(x - 2, y + 2, z + 2, true);
    }
});
IDRegistry.genItemID("krackensh");
Item.createThrowableItem("krackensh", "§a Кракен §r \n 6 урон \n Метательное оружие", { name: "krackensh" }, { stack: 64 });
Item.registerThrowableFunction("krackensh", function (projectile, item, target) {
    if (target.entity == -1) { }
    else {
        var targetEntity = target.entity;
        Entity.damageEntity(targetEntity, 6);
    }
});
IDRegistry.genItemID("truekrackensh");
Item.createThrowableItem("truekrackensh", "§a Истинный Кракен §r \n 100 урон \n Метательное оружие", { name: "truekrackensh" }, { stack: 64 });
Item.registerThrowableFunction("truekrackensh", function (projectile, item, target) {
    if (target.entity == -1) { }
    else {
        var targetEntity = target.entity;
        Entity.damageEntity(targetEntity, 100);
    }
});
IDRegistry.genItemID("astral");
Item.createItem("astral", "§a Астрал §r \n 280 урон ", { name: "astral", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("astral", { durability: 3400, level: 4, efficiency: 8, damage: 280, enchantability: 14 });
ToolAPI.setTool(ItemID.astral, "astral", ToolType.sword);
IDRegistry.genItemID("heavensword");
Item.createItem("heavensword", "§1 Меч Гавани §r \n 300 урон ", { name: "heavensword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("heavensword", { durability: 3400, level: 4, efficiency: 8, damage: 300, enchantability: 14 });
ToolAPI.setTool(ItemID.heavensword, "heavensword", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.aersword, .5, 7);
IDRegistry.genItemID("jackbomb");
Item.createThrowableItem("jackbomb", "§a Взрывная бомба Джека §r \n 100 урон \n Метательное оружие", { name: "jackbomb" }, { stack: 64 });
Item.registerThrowableFunction("jackbomb", function (projectile, item, target) {
    if (target.entity == -1) { }
    else {
        var targetEntity = target.entity;
        Entity.damageEntity(targetEntity, 100);
    }
});
IDRegistry.genItemID("rdrill");
Item.createItem("rdrill", "§a Раздаточная дробилка §r \n 330 урон ", { name: "rdrill", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("rdrill", { durability: 3400, level: 4, efficiency: 8, damage: 330, enchantability: 14 });
ToolAPI.setTool(ItemID.rdrill, "rdrill", ToolType.sword);
IDRegistry.genItemID("earther");
Item.createItem("earther", "§1 Землянин §r \n 400 урон ", { name: "earther", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("earther", { durability: 3400, level: 4, efficiency: 8, damage: 330, enchantability: 14 });
ToolAPI.setTool(ItemID.earther, "earther", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.earther, .5, 7);
IDRegistry.genItemID("starevil");
Item.createItem("starevil", "§1 Гнев звездных богов §r \n 390 урон ", { name: "starevil", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("starevil", { durability: 3400, level: 4, efficiency: 8, damage: 390, enchantability: 14 });
ToolAPI.setTool(ItemID.starevil, "starevil", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.starevil, .5, 7);
IDRegistry.genItemID("meowmere");
Item.createItem("meowmere", "§1 Мяумур §r \n 420 урон ", { name: "meowmere", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("meowmere", { durability: 3400, level: 4, efficiency: 8, damage: 420, enchantability: 14 });
ToolAPI.setTool(ItemID.meowmere, "meowmere", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.meowmere, .5, 7);
IDRegistry.genItemID("murrrsama");
Item.createItem("murrrsama", "§1 Мурррсама §r \n 450 урон ", { name: "murrrsama", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("murrrsama", { durability: 3400, level: 4, efficiency: 8, damage: 450, enchantability: 14 });
ToolAPI.setTool(ItemID.murrrsama, "murrrsama", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.murrrsama, .5, 7);
IDRegistry.genItemID("hollycollider");
Item.createItem("hollycollider", "§1 Священный коллайдер §r \n 480 урон ", { name: "hollycollider", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("hollycollider", { durability: 3400, level: 4, efficiency: 8, damage: 480, enchantability: 14 });
ToolAPI.setTool(ItemID.hollycollider, "hollycollider", ToolType.sword);
IDRegistry.genItemID("heatedamputation");
Item.createItem("heatedamputation", "§1 Расплавленный ампутатор §r \n 470 урон ", { name: "heatedamputation", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("heatedamputation", { durability: 3400, level: 4, efficiency: 8, damage: 470, enchantability: 14 });
ToolAPI.setTool(ItemID.heatedamputation, "heatedamputation", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.hollycollider, .5, 7);
EssenceAPI.registerPlayerAttackEffect(ItemID.heatedamputation, .5, 7);
IDRegistry.genItemID("ryusukesword");
Item.createItem("ryusukesword", "§1 Меч Рйусуке §r \n 490 урон \n Поджигает", { name: "ryusukesword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("ryusukesword", { durability: 3400, level: 4, efficiency: 8, damage: 470, enchantability: 14 });
ToolAPI.setTool(ItemID.ryusukesword, "ryusukesword", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.ryusukesword, .5, 7);
Callback.addCallback("PlayerAttack", function (player, victim) {
    var item = Entity.getCarriedItem(player);
    if (item.id == ItemID.ryusukesword) {
        Entity.setFire(victim, 1000);
    }
});
IDRegistry.genItemID("horsemansword");
Item.createItem("horsemansword", "§a Меч всадника §r \n 310 урон ", { name: "horsemansword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("horsemansword", { durability: 3400, level: 4, efficiency: 8, damage: 310, enchantability: 14 });
ToolAPI.setTool(ItemID.horsemansword, "horsemansword", ToolType.sword);
IDRegistry.genItemID("northpole");
Item.createItem("northpole", "§a Северный полюс §r \n 310 урон ", { name: "northpole", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("northpole", { durability: 3400, level: 4, efficiency: 8, damage: 310, enchantability: 14 });
ToolAPI.setTool(ItemID.northpole, "northpole", ToolType.sword);
IDRegistry.genItemID("huskentrophy");
Item.createItem("huskentrophy", "§a Энтропия бродяги §r \n 320 урон ", { name: "huskentrophy", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("huskentrophy", { durability: 3400, level: 4, efficiency: 8, damage: 320, enchantability: 14 });
ToolAPI.setTool(ItemID.huskentrophy, "huskentrophy", ToolType.sword);
IDRegistry.genItemID("dpickaxe");
Item.createItem("dpickaxe", "§1 Доблестная кирка §r \n 385 урон \n Эффективней веномусовой кирки в 2 раза", { name: "dpickaxe", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("d", { durability: 3400, level: 12, efficiency: 16, damage: 385, enchantability: 14 });
ToolAPI.setTool(ItemID.dpickaxe, "d", ToolType.pickaxe);
IDRegistry.genItemID("exelsus");
Item.createItem("exelsus", "§1 Эксельсус §r \n 550 урон ", { name: "exelsus", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("exelsus", { durability: 3400, level: 4, efficiency: 8, damage: 550, enchantability: 14 });
ToolAPI.setTool(ItemID.exelsus, "exelsus", ToolType.sword);
EssenceAPI.registerPlayerAttackEffect(ItemID.exelsus, .5, 7);
IDRegistry.genItemID("dragonevil");
Item.createItem("dragonevil", "§1 Ярость дракона §r \n 620 урон ", { name: "dragonevil", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("dragonevil", { durability: 3400, level: 4, efficiency: 8, damage: 620, enchantability: 14 });
ToolAPI.setTool(ItemID.dragonevil, "dragonevil", ToolType.sword);
IDRegistry.genItemID("profanedtrident");
Item.createItem("profanedtrident", "§1 Оскверненный трезубец §r \n 650 урон ", { name: "profanedtrident", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("profanedtrident", { durability: 3400, level: 4, efficiency: 8, damage: 650, enchantability: 14 });
ToolAPI.setTool(ItemID.profanedtrident, "profanedtrident", ToolType.sword);
IDRegistry.genItemID("burningsky");
Item.createItem("burningsky", "§1 Горящие небеса §r \n 600 урон ", { name: "burningsky", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("burningsky", { durability: 3400, level: 4, efficiency: 8, damage: 600, enchantability: 14 });
ToolAPI.setTool(ItemID.burningsky, "burningsky", ToolType.sword);
IDRegistry.genItemID("galaxia");
Item.createItem("galaxia", "§1 Галаксия §r \n 290 урон", { name: "galaxia", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("galaxia", { durability: 3400, level: 4, efficiency: 8, damage: 290, enchantability: 14 });
ToolAPI.setTool(ItemID.galaxia, "galaxia", ToolType.sword);
IDRegistry.genItemID("Ark_of_the_Cosmos");
Item.createItem("Ark_of_the_Cosmos", "§1 Ковчег Космоса §r \n 845 урон §1 \n С помощью этого меча вы чувствуете связь с космосом... \n Вы чувствуете как приобретаете силу богов...", { name: "Ark_of_the_Cosmos", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("Ark_of_the_Cosmos", { durability: 3400, level: 4, efficiency: 8, damage: 845, enchantability: 14 });
ToolAPI.setTool(ItemID.Ark_of_the_Cosmos, "Ark_of_the_Cosmos", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
    if (item.id == ItemID.Ark_of_the_Cosmos) {
        Entity.addEffect(player, Native.PotionEffect.jump, 2, 1000);
        Entity.addEffect(player, Native.PotionEffect.movementSpeed, 25, 1000);
        Entity.addEffect(player, Native.PotionEffect.damageBoost, 10, 20);
        Entity.addEffect(player, Native.PotionEffect.regeneration, 50, 1000);
        Entity.addEffect(player, Native.PotionEffect.damageResistance, 50, 1000);
    }
});
IDRegistry.genItemID("Omikrone_Ark_of_the_Cosmos");
Item.createItem("Omikrone_Ark_of_the_Cosmos", "§1 Омикроновый Ковчег Космоса §r \n 900 урон §1 \n С помощью этого меча вы чувствуете связь с космосом... \n Вы чувствуете как приобретаете силу богов...\n§4 Усилен древним металлом", { name: "Omikrone_Ark_of_the_Cosmos", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("Omikrone_Ark_of_the_Cosmos", { durability: 3400, level: 4, efficiency: 8, damage: 900, enchantability: 14 });
ToolAPI.setTool(ItemID.Omikrone_Ark_of_the_Cosmos, "Omikrone_Ark_of_the_Cosmos", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
    if (item.id == ItemID.Omikrone_Ark_of_the_Cosmos) {
        Entity.addEffect(player, Native.PotionEffect.jump, 4, 1000);
        Entity.addEffect(player, Native.PotionEffect.movementSpeed, 25, 1000);
        Entity.addEffect(player, Native.PotionEffect.damageBoost, 50, 20);
        Entity.addEffect(player, Native.PotionEffect.regeneration, 100, 1000);
        Entity.addEffect(player, Native.PotionEffect.damageResistance, 100, 1000);
    }
});
IDRegistry.genItemID("earth");
Item.createItem("earth", "§1 Земля §r \n 850 урон ", { name: "earth", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("earth", { durability: 3400, level: 4, efficiency: 8, damage: 850, enchantability: 14 });
ToolAPI.setTool(ItemID.earth, "earth", ToolType.sword);
IDRegistry.genItemID("animus");
Item.createItem("animus", "§1 Анимус §r \n 800 урон ", { name: "animus", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("animus", { durability: 3400, level: 4, efficiency: 8, damage: 800, enchantability: 14 });
ToolAPI.setTool(ItemID.animus, "animus", ToolType.sword);
IDRegistry.genItemID("dragondestroy");
Item.createItem("dragondestroy", "§1 Убийца драконов §r \n 700 урон ", { name: "dragondestroy", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("dragondestroy", { durability: 3400, level: 4, efficiency: 8, damage: 700, enchantability: 14 });
ToolAPI.setTool(ItemID.dragondestroy, "dragondestroy", ToolType.sword);
IDRegistry.genItemID("paladinhammer");
Item.createItem("paladinhammer", "§1 Истинный паладинский маг-молот могущества Триактиса §r \n 1000 урон ", { name: "paladinhammer", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("paladinhammer", { durability: 3400, level: 4, efficiency: 8, damage: 1000, enchantability: 14 });
ToolAPI.setTool(ItemID.paladinhammer, "paladinhammer", ToolType.sword);
IDRegistry.genItemID("redsun");
Item.createItem("redsun", "§1 Красное солнце §r \n 750 урон ", { name: "redsun", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("redsun", { durability: 3400, level: 4, efficiency: 8, damage: 750, enchantability: 14 });
ToolAPI.setTool(ItemID.redsun, "redsun", ToolType.sword);
IDRegistry.genItemID("azatot");
Item.createItem("azatot", "§1 Азатот §r \n 900 урон ", { name: "azatot", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("azatot", { durability: 3400, level: 4, efficiency: 8, damage: 900, enchantability: 14 });
ToolAPI.setTool(ItemID.azatot, "azatot", ToolType.sword);
IDRegistry.genItemID("crystalpickaxe");
Item.createItem("crystalpickaxe", "§1 Кристальный разрушитель §r \n 780 урон", { name: "dpickaxe", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("crystalpickaxe", { durability: 3400, level: 14, efficiency: 5000, damage: 780, enchantability: 14 });
ToolAPI.setTool(ItemID.crystalpickaxe, "crystalpickaxe", ToolType.pickaxe);
IDRegistry.genItemID("truepaladinhammer");
Item.createItem("truepaladinhammer", "§1 Истинный молот паладина §r \n 400 урон ", { name: "truepaladinhammer", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("truepaladinhammer", { durability: 3400, level: 4, efficiency: 8, damage: 400, enchantability: 14 });
ToolAPI.setTool(ItemID.truepaladinhammer, "truepaladinhammer", ToolType.sword);
IDRegistry.genItemID("lightningbolt");
Item.createItem("lightningbolt", "§a Φωτιά του Δία §r \n 310 урон", { name: "lightningbolt", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("lightningbolt", { durability: 3400, level: 4, efficiency: 8, damage: 310, enchantability: 14 });
ToolAPI.setTool(ItemID.lightningbolt, "lightningbolt", ToolType.sword);
Callback.addCallback("PlayerAttack", function (player, victim) {
    var item = Entity.getCarriedItem(player);
    if (item.id == ItemID.lightningbolt) {
        var coords = Entity.getPosition(victim);
        Entity.spawn(coords.x, coords.y, coords.z, 93);
    }
});
IDRegistry.genItemID("kronsword");
Item.createItem("kronsword", "§a Изначальный меч §r \n 400 урон", { name: "kronsword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("kronsword", { durability: 3400, level: 4, efficiency: 8, damage: 400, enchantability: 14 });
ToolAPI.setTool(ItemID.kronsword, "kronsword", ToolType.sword);
IDRegistry.genItemID("krslsword");
Item.createItem("krslsword", "§a Непроницаемый меч §r \n 380 урон \n Поджигает", { name: "krslsword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("krslsword", { durability: 3400, level: 4, efficiency: 8, damage: 380, enchantability: 14 });
ToolAPI.setTool(ItemID.krslsword, "krslsword", ToolType.sword);
Callback.addCallback("PlayerAttack", function (player, victim) {
    var item = Entity.getCarriedItem(player);
    if (item.id == ItemID.krslsword) {
        Entity.setFire(victim, 1000);
    }
});
IDRegistry.genItemID("oahusword");
Item.createItem("oahusword", "§a Потерянный меч §r \n 350 урон \n Стреляет молниями", { name: "oahusword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("oahusword", { durability: 3400, level: 4, efficiency: 8, damage: 350, enchantability: 14 });
ToolAPI.setTool(ItemID.oahusword, "oahusword", ToolType.sword);
Callback.addCallback("PlayerAttack", function (player, victim) {
    var item = Entity.getCarriedItem(player);
    if (item.id == ItemID.oahusword) {
        var coords = Entity.getPosition(victim);
        BlockSource.getDefaultForActor(player).spawnEntity(coords.x, coords.y, coords.z, 93);
    }
});
IDRegistry.genItemID("ptahstaff");
Item.createItem("ptahstaff", "Посох Анкха \n Призывает голема", { name: "ptahstaff", meta: 0 }, { stack: 64 });
Callback.addCallback("PlayerAttack", function (player, victim) {
    var item = Entity.getCarriedItem(player);
    if (item.id == ItemID.ptahstaff) {
        var coords = Entity.getPosition(victim);
        BlockSource.getDefaultForActor(player).spawnEntity(coords.x, coords.y, coords.z, 20);
    }
});
IDRegistry.genItemID("firefalls");
Item.createItem("firefalls", "Тлеющие небеса", { name: "firefalls", meta: 0 }, { stack: 64 });
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
    if (item.id == ItemID.firefalls) {
        var region = BlockSource.getDefaultForActor(player);
        var ent = region.spawnEntity(coords.x + 2, coords.y + 10, coords.z - 2, 94);
        Entity.setVelocity(ent, 0, -0.1, 0);
        var et = region.spawnEntity(coords.x - 2, coords.y + 10, coords.z - 2, 94);
        Entity.setVelocity(et, 0, -0.1, 0);
        var en = region.spawnEntity(coords.x + 2, coords.y + 10, coords.z + 2, 94);
        Entity.setVelocity(en, 0, -0.1, 0);
        var egh = region.spawnEntity(coords.x - 2, coords.y + 10, coords.z + 2, 94);
        Entity.setVelocity(egh, 0, -0.1, 0);
        var n = region.spawnEntity(coords.x, coords.y + 10, coords.z - 3, 94);
        Entity.setVelocity(n, 0, -0.1, 0);
        var er = region.spawnEntity(coords.x, coords.y + 10, coords.z + 3, 94);
        Entity.setVelocity(er, 0, -0.1, 0);
        var em = region.spawnEntity(coords.x + 3, coords.y + 10, coords.z, 94);
        Entity.setVelocity(em, 0, -0.1, 0);
        var ep = region.spawnEntity(coords.x - 3, coords.y + 10, coords.z, 94);
        Entity.setVelocity(ep, 0, -0.1, 0);
        var emi = region.spawnEntity(coords.x + 4, coords.y + 10, coords.z, 94);
        Entity.setVelocity(emi, 0, -0.1, 0);
        var epo = region.spawnEntity(coords.x - 4, coords.y + 10, coords.z, 94);
        Entity.setVelocity(epo, 0, -0.1, 0);
        var ezi = region.spawnEntity(coords.x - 3, coords.y + 10, coords.z - 3, 94);
        Entity.setVelocity(ezi, 0, -0.1, 0);
        var elj = region.spawnEntity(coords.x + 3, coords.y + 10, coords.z + 3, 94);
        Entity.setVelocity(elj, 0, -0.1, 0);
        var etk = region.spawnEntity(coords.x + 4, coords.y + 10, coords.z + 4, 94);
        Entity.setVelocity(etk, 0, -0.1, 0);
        var esk = region.spawnEntity(coords.x +
            -4, coords.y + 10, coords.z - 4, 94);
        Entity.setVelocity(esk, 0, -0.1, 0);
    }
});
IDRegistry.genItemID("verumazatot");
Item.createItem("verumazatot", "§1 እውነት ነው  Азатот §r \n 1500 урон ", { name: "verumazatot", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("verumazatot", { durability: 3400, level: 4, efficiency: 8, damage: 900, enchantability: 14 });
ToolAPI.setTool(ItemID.verumazatot, "verumazatot", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
    if (item.id == ItemID.verumazatot) {
        var region = BlockSource.getDefaultForActor(player);
        var ent = region.spawnEntity(coords.x + 2, coords.y + 10, coords.z - 2, 94);
        Entity.setVelocity(ent, 0, -0.1, 0);
        var et = region.spawnEntity(coords.x - 2, coords.y + 10, coords.z - 2, 94);
        Entity.setVelocity(et, 0, -0.1, 0);
        var en = region.spawnEntity(coords.x + 2, coords.y + 10, coords.z + 2, 94);
        Entity.setVelocity(en, 0, -0.1, 0);
        var egh = region.spawnEntity(coords.x - 2, coords.y + 10, coords.z + 2, 94);
        Entity.setVelocity(egh, 0, -0.1, 0);
        var n = region.spawnEntity(coords.x, coords.y + 10, coords.z - 3, 94);
        Entity.setVelocity(n, 0, -0.1, 0);
        var er = region.spawnEntity(coords.x, coords.y + 10, coords.z + 3, 94);
        Entity.setVelocity(er, 0, -0.1, 0);
        var em = region.spawnEntity(coords.x + 3, coords.y + 10, coords.z, 94);
        Entity.setVelocity(em, 0, -0.1, 0);
        var ep = region.spawnEntity(coords.x - 3, coords.y + 10, coords.z, 94);
        Entity.setVelocity(ep, 0, -0.1, 0);
        var emi = region.spawnEntity(coords.x + 4, coords.y + 10, coords.z, 94);
        Entity.setVelocity(emi, 0, -0.1, 0);
        var epo = region.spawnEntity(coords.x - 4, coords.y + 10, coords.z, 94);
        Entity.setVelocity(epo, 0, -0.1, 0);
        var ezi = region.spawnEntity(coords.x - 3, coords.y + 10, coords.z - 3, 94);
        Entity.setVelocity(ezi, 0, -0.1, 0);
        var elj = region.spawnEntity(coords.x + 3, coords.y + 10, coords.z + 3, 94);
        Entity.setVelocity(elj, 0, -0.1, 0);
        var etk = region.spawnEntity(coords.x + 4, coords.y + 10, coords.z + 4, 94);
        Entity.setVelocity(etk, 0, -0.1, 0);
        var esk = region.spawnEntity(coords.x +
            -4, coords.y + 10, coords.z - 4, 94);
        Entity.setVelocity(esk, 0, -0.1, 0);
    }
});
Callback.addCallback("PlayerAttack", function (player, victim) {
    var item = Entity.getCarriedItem(player);
    if (item.id == ItemID.verumazatot) {
        var coords = Entity.getPosition(victim);
        var region = BlockSource.getDefaultForActor(player);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
    }
});
IDRegistry.genItemID("otherplanet");
Item.createItem("otherplanet", "§1 Внеземной §r \n 2000 урон ", { name: "otherplanet", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("otherplanet", { durability: 3400, level: 4, efficiency: 8, damage: 2000, enchantability: 14 });
ToolAPI.setTool(ItemID.otherplanet, "otherplanet", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
    if (item.id == ItemID.otherplanet) {
        var region = BlockSource.getDefaultForActor(player);
        var ent = Entity.spawn(coords.x + 2, coords.y + 10, coords.z - 2, 94);
        Entity.setVelocity(ent, 0, -0.1, 0);
        var et = region.spawnEntity(coords.x - 2, coords.y + 10, coords.z - 2, 94);
        Entity.setVelocity(et, 0, -0.1, 0);
        var en = region.spawnEntity(coords.x + 2, coords.y + 10, coords.z + 2, 94);
        Entity.setVelocity(en, 0, -0.1, 0);
        var egh = region.spawnEntity(coords.x - 2, coords.y + 10, coords.z + 2, 94);
        Entity.setVelocity(egh, 0, -0.1, 0);
        var n = region.spawnEntity(coords.x, coords.y + 10, coords.z - 3, 94);
        Entity.setVelocity(n, 0, -0.1, 0);
        var er = region.spawnEntity(coords.x, coords.y + 10, coords.z + 3, 94);
        Entity.setVelocity(er, 0, -0.1, 0);
        var em = region.spawnEntity(coords.x + 3, coords.y + 10, coords.z, 94);
        Entity.setVelocity(em, 0, -0.1, 0);
        var ep = region.spawnEntity(coords.x - 3, coords.y + 10, coords.z, 94);
        Entity.setVelocity(ep, 0, -0.1, 0);
        var emi = region.spawnEntity(coords.x + 4, coords.y + 10, coords.z, 94);
        Entity.setVelocity(emi, 0, -0.1, 0);
        var epo = region.spawnEntity(coords.x - 4, coords.y + 10, coords.z, 94);
        Entity.setVelocity(epo, 0, -0.1, 0);
        var ezi = region.spawnEntity(coords.x - 3, coords.y + 10, coords.z - 3, 94);
        Entity.setVelocity(ezi, 0, -0.1, 0);
        var elj = region.spawnEntity(coords.x + 3, coords.y + 10, coords.z + 3, 94);
        Entity.setVelocity(elj, 0, -0.1, 0);
        var etk = region.spawnEntity(coords.x + 4, coords.y + 10, coords.z + 4, 94);
        Entity.setVelocity(etk, 0, -0.1, 0);
        var esk = region.spawnEntity(coords.x +
            -4, coords.y + 10, coords.z - 4, 94);
        Entity.setVelocity(esk, 0, -0.1, 0);
    }
});
Callback.addCallback("PlayerAttack", function (player, victim) {
    var item = Entity.getCarriedItem(player);
    if (item.id == ItemID.otherplanet) {
        var coords = Entity.getPosition(victim);
        var region = BlockSource.getDefaultForActor(player);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
    }
});
IDRegistry.genItemID("starkiller");
Item.createItem("starkiller", "§1 Погибель сверхновых §r \n 2100 урон ", { name: "starkiller", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("starkiller", { durability: 3400, level: 4, efficiency: 8, damage: 2500, enchantability: 14 });
ToolAPI.setTool(ItemID.starkiller, "starkiller", ToolType.sword);
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
    if (item.id == ItemID.starkiller) {
        var region = BlockSource.getDefaultForActor(player);
        var ent = region.spawnEntity(coords.x + 2, coords.y + 10, coords.z - 2, 94);
        Entity.setVelocity(ent, 0, -0.1, 0);
        var et = region.spawnEntity(coords.x - 2, coords.y + 10, coords.z - 2, 94);
        Entity.setVelocity(et, 0, -0.1, 0);
        var en = region.spawnEntity(coords.x + 2, coords.y + 10, coords.z + 2, 94);
        Entity.setVelocity(en, 0, -0.1, 0);
        var egh = region.spawnEntity(coords.x - 2, coords.y + 10, coords.z + 2, 94);
        Entity.setVelocity(egh, 0, -0.1, 0);
        var n = region.spawnEntity(coords.x, coords.y + 10, coords.z - 3, 94);
        Entity.setVelocity(n, 0, -0.1, 0);
        var er = region.spawnEntity(coords.x, coords.y + 10, coords.z + 3, 94);
        Entity.setVelocity(er, 0, -0.1, 0);
        var em = region.spawnEntity(coords.x + 3, coords.y + 10, coords.z, 94);
        Entity.setVelocity(em, 0, -0.1, 0);
        var ep = region.spawnEntity(coords.x - 3, coords.y + 10, coords.z, 94);
        Entity.setVelocity(ep, 0, -0.1, 0);
        var emi = region.spawnEntity(coords.x + 4, coords.y + 10, coords.z, 94);
        Entity.setVelocity(emi, 0, -0.1, 0);
        var epo = region.spawnEntity(coords.x - 4, coords.y + 10, coords.z, 94);
        Entity.setVelocity(epo, 0, -0.1, 0);
        var ezi = region.spawnEntity(coords.x - 3, coords.y + 10, coords.z - 3, 94);
        Entity.setVelocity(ezi, 0, -0.1, 0);
        var elj = region.spawnEntity(coords.x + 3, coords.y + 10, coords.z + 3, 94);
        Entity.setVelocity(elj, 0, -0.1, 0);
        var etk = region.spawnEntity(coords.x + 4, coords.y + 10, coords.z + 4, 94);
        Entity.setVelocity(etk, 0, -0.1, 0);
        var esk = region.spawnEntity(coords.x +
            -4, coords.y + 10, coords.z - 4, 94);
        Entity.setVelocity(esk, 0, -0.1, 0);
    }
});
Callback.addCallback("PlayerAttack", function (player, victim) {
    var item = Entity.getCarriedItem(player);
    if (item.id == ItemID.starkiller) {
        var coords = Entity.getPosition(victim);
        var region = BlockSource.getDefaultForActor(player);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
        region.spawnEntity(coords.x, coords.y, coords.z, 93);
    }
});
IDRegistry.genItemID("ankhsword");
Item.createItem("ankhsword", "§1 Меч Анкх §r \n 2000 урон ", { name: "ankhsword", meta: 0 }, { stack: 1 });
ToolAPI.addToolMaterial("ankhsword", { durability: 3400, level: 4, efficiency: 8, damage: 2000, enchantability: 14 });
ToolAPI.setTool(ItemID.ankhsword, "ankhsword", ToolType.sword);
IDRegistry.genItemID("True_Ark_of_the_Cosmos");
Item.createItem("True_Ark_of_the_Cosmos", "§6 Ковчег Космоса §r \n 30000 урон §6 \n Вы чувствуете связь с Мультивселенной...\n Вы чувствуете силу Арка проникающую в вас через этот меч...", { name: "Ark_of_the_Cosmos", meta: 0 }, { isTech: true }, { stack: 1 });
ToolAPI.addToolMaterial("True_Ark_of_the_Cosmos", { durability: 1000000, level: 30000, efficiency: 1000, damage: 30000, enchantability: 14 });
ToolAPI.setTool(ItemID.True_Ark_of_the_Cosmos, "True_Ark_of_the_Cosmos", ToolType.sword);
IDRegistry.genItemID("TinEverestraSword");
Item.createItem("TinEverestraSword", "§2 Меч Вселенной §r \n 511111 урон", { name: "TinEverestraSword", meta: 0 }, { isTech: true }, { stack: 1 });
ToolAPI.addToolMaterial("TinEverestraSword", { durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111 });
ToolAPI.setTool(ItemID.TinEverestraSword, "TinEverestraSword", ToolType.sword);
IDRegistry.genItemID("HellSword");
Item.createItem("HellSword", "§4 Меч Вселенной §r \n 511111 урон", { name: "HellSword", meta: 0 }, { isTech: true }, { stack: 1 });
ToolAPI.addToolMaterial("HellSword", { durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111 });
ToolAPI.setTool(ItemID.HellSword, "HellSword", ToolType.sword);
IDRegistry.genItemID("EndSword");
Item.createItem("EndSword", "§5 Меч Вселенной §r \n 511111 урон", { name: "EndSword", meta: 0 }, { isTech: true }, { stack: 1 });
ToolAPI.addToolMaterial("EndSword", { durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111 });
ToolAPI.setTool(ItemID.EndSword, "EndSword", ToolType.sword);
IDRegistry.genItemID("AzatothSword");
Item.createItem("AzatothSword", "§1 Меч Вселенной §r \n 511111 урон", { name: "AzatothSword", meta: 0 }, { isTech: true }, { stack: 1 });
ToolAPI.addToolMaterial("AzatothSword", { durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111 });
ToolAPI.setTool(ItemID.AzatothSword, "AzatothSword", ToolType.sword);
IDRegistry.genItemID("AstralSworda");
Item.createItem("AstralSworda", "§d Меч Вселенной §r \n 511111 урон", { name: "AstralSworda", meta: 0 }, { isTech: true }, { stack: 1 });
ToolAPI.addToolMaterial("AstralSworda", { durability: 511111, level: 511111, efficiency: 511111, damage: 511111, enchantability: 511111 });
ToolAPI.setTool(ItemID.AstralSworda, "AstralSworda", ToolType.sword);
IDRegistry.genItemID("MultiverseSword");
Item.createItem("MultiverseSword", "§6 Меч Мультивселенной §r \n 6495038 урон", { name: "MultiverseSword", meta: 0 }, { isTech: true }, { stack: 1 });
ToolAPI.addToolMaterial("MultiverseSword", { durability: 6495038, level: 6495038, efficiency: 6495038, damage: 6495038, enchantability: 6495038 });
ToolAPI.setTool(ItemID.MultiverseSword, "MultiverseSword", ToolType.sword);
IDRegistry.genItemID("Hollybot");
Item.createItem("Hollybot", "§b Проклятый механизм \n §r Ошибка в коде вызвала необратимые последствия", { name: "Hollybot", data: 0 });
IDRegistry.genItemID("Naida");
Item.createItem("Naida", "§b Живая вода \n §r Говорят Наида любила розы, но после того как Нотч \n уничтожил их что бы создать мак, Наида впала в ярость", { name: "Naida", data: 0 });
IDRegistry.genItemID("Phantom");
Item.createItem("Phantom", "Фантом в бутылке", { name: "Phantom", meta: 0 }, { stack: 1 });
IDRegistry.genItemID("Kracken");
Item.createItem("Kracken", "§b Наживка для Кракена", { name: "Kracken", meta: 0 }, { stack: 1 });
IDRegistry.genItemID("ElementalGuardian");
Item.createItem("ElementalGuardian", "§b Печать Элементов ", { name: "ElementalGuardian", meta: 0 }, { stack: 1 });
IDRegistry.genItemID("ArsenalCreator");
Item.createItem("ArsenalCreator", "§b Низины миров", { name: "ArsenalCreator", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("CaptainOfArkOfTheCosmos");
Item.createItem("CaptainOfArkOfTheCosmos", "§b Сфера космоса", { name: "cosmicsphere", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("Paladin");
Item.createItem("Paladin", "Призыв паладина", { name: "Paladin", meta: 0 }, { stack: 1 });
IDRegistry.genItemID("VenomCultist");
Item.createItem("VenomCultist", "§b Украденный талисман", { name: "VenomCultist", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("Hatur");
Item.createItem("Hatur", "§b Проклятая печать", { name: "Hatur", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("CiciditDea");
Item.createItem("CiciditDea", "§b Оскверненное ядро", { name: "CiciditDea", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("Seederus");
Item.createItem("Seederus", "§b Проклятый амулет", { name: "Seederus", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("Ekatebrina");
Item.createItem("Ekatebrina", "§b Странная снежинка", { name: "Ekatebrina", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("Calamitatis");
Item.createItem("Calamitatis", "§b Око Опустошителя", { name: "Calamitatis", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("VerumDevourerDeorum");
Item.createItem("VerumDevourerDeorum", "§b Искривленная пустота", { name: "VerumDevourerDeorum", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("Truncatis");
Item.createItem("Truncatis", "§b Яйцо дракона", { name: "dragonegg", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("VerumCalamitatis");
Item.createItem("VerumCalamitatis", "§b Глаз бедствия", { name: "VerumCalamitatis", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("Zeus");
Item.createItem("Zeus", "Манипулятор погоды", { name: "Zeus", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("Kron");
Item.createItem("Kron", "§b Древняя реликвия", { name: "Kron", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("Chtulhu");
Item.createItem("Chtulhu", "§b Некрономикон", { name: "Chtulhu", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("Ark");
Item.createItem("Ark", "Арктлудумзн", { name: "Ark", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("VerumPtah");
Item.createItem("VerumPtah", "§b Проклятье фараона", { name: "VerumPtah", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("ectoplasm");
Item.createItem("ectoplasm", "Эктоплазма", { name: "ectoplasm", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("DevourerDeorum");
Item.createItem("DevourerDeorum", "Стелла Сфаэра", { name: "stellasfaera", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("venomdye");
Item.createItem("venomdye", "Веномиозное пятно", { name: "venomdye", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("godjeoda");
Item.createItem("godjeoda", "Божественная жеода", { name: "godjeoda", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("nightmarefuel");
Item.createItem("nightmarefuel", "Кошмарное топливо", { name: "nightmarefuel", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("termoenergy");
Item.createItem("termoenergy", "Термоэнергия", { name: "termoenergy", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("endothermicenergy");
Item.createItem("endothermicenergy", "Эндотермическая энергия", { name: "endothermicenergy", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("chtulhuleather");
Item.createItem("chtulhuleather", "Кожа Ктулху", { name: "chtulhuleather", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("creativechunk");
Item.createItem("creativechunk", "§6 Семя креатива", { name: "creativechunk", meta: 0 }, { isTech: true }, { stack: 64 });
IDRegistry.genItemID("livingshard");
Item.createItem("livingshard", "Живой осколок", { name: "livingshard", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("evilfragment");
Item.createItem("evilfragment", "Истинная ярость", { name: "evilfragment", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("energyfragment");
Item.createItem("energyfragment", "Чистая энергия", { name: "energyfragment", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("coldfragment");
Item.createItem("coldfragment", "Магический мороз", { name: "coldfragment", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("millionfragment");
Item.createItem("millionfragment", "Сила множества", { name: "millionfragment", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("fragmentoftruncatissoul");
Item.createItem("fragmentoftruncatissoul", "Фрагмент души Трункатиса", { name: "fragmentoftruncatissoul", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("stardust");
Item.createItem("stardust", "Звездная пыль", { name: "stardust", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("blackmagicdust");
Item.createItem("blackmagicdust", "Черная волшебная пыль", { name: "blackmagicdust", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("calamitydust");
Item.createItem("calamitydust", "Пыль бедствия", { name: "calamitydust", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("azatotdust");
Item.createItem("azatotdust", "Демоническая пыль", { name: "azatotdust", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("lifecrystal");
Item.createFoodItem("lifecrystal", "§e Кристалл жизни §1 \n 1еда \n Увеличивает жизни на 2", { name: "lifecrystal", meta: 0 }, { food: 1 });
Callback.addCallback("FoodEaten", function (heal, satRatio, player) {
    var Ph = Entity.getMaxHealth(player);
    if (Entity.getCarriedItem(player).id == ItemID.lifecrystal) {
        Entity.setMaxHealth(player, Ph + 2);
        if (Entity.getMaxHealth(player) == 40)
            return false;
    }
});
IDRegistry.genItemID("fireheart");
Item.createFoodItem("fireheart", "§e Живой огонь §1 \n 4 еды \n Увеличивает жизни на 4", { name: "fireheart", meta: 0 }, { food: 4 });
Callback.addCallback("FoodEaten", function (heal, satRatio, player) {
    var Ph = Entity.getMaxHealth(player);
    if (Entity.getCarriedItem(player).id == ItemID.fireheart) {
        Entity.setMaxHealth(player, Ph + 4);
        if (Entity.getMaxHealth(player) == 40)
            return false;
    }
});
IDRegistry.genItemID("overworld");
Item.createItem("overworld", "Портал обратно", { name: "overworld", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("azatotshears");
Item.createItem("azatotshears", "Резатель пространства", { name: "azatotshears", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("astralshears");
Item.createItem("astralshears", "Межпространственный резатель", { name: "astralshears", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("hollybotbook");
Item.createItem("hollybotbook", "המנגנון הארור", { name: "hollybotbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("naidabook");
Item.createItem("naidabook", "אלת הצמחים", { name: "naidabook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("krakenbook");
Item.createItem("krakenbook", "תמנון ענק ", { name: "krakenbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("elementalguardianbook");
Item.createItem("elementalguardianbook", "שומר אלמנטים", { name: "elementalguardianbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("arsenalguardianbook");
Item.createItem("arsenalguardianbook", "שומר הארסנל", { name: "arsenalguardianbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("arsenalcreatorbook");
Item.createItem("arsenalcreatorbook", "יוצר ארסנל", { name: "arsenalcreatorbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("captainofarkofthecosmos");
Item.createItem("captainofarkofthecosmos", "קפטן ארון הקוסמוס", { name: "captainofarkofthecosmos", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("devourerdeorumbook");
Item.createItem("devourerdeorumbook", "טורף האלים", { name: "devourerdeorumbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("seederusbook");
Item.createItem("seederusbook", "אלוהים של פוריות", { name: "seederusbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("ekatebrinebook");
Item.createItem("ekatebrinebook", "מלכת השלג", { name: "ekatebrinebook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("calamitatisbook");
Item.createItem("calamitatisbook", "אסון", { name: "calamitatisbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("ciciditdeabook");
Item.createItem("ciciditdeabook", "אלוהות מחוללת", { name: "ciciditdeabook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("venomkultistbook");
Item.createItem("venomkultistbook", "רפואה זיהומית", { name: "venomkultistbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("haturbook");
Item.createItem("haturbook", "ኸአጠኢረ", { name: "haturbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("verumdevourerdeorumbook");
Item.createItem("verumdevourerdeorumbook", "הטורף האמיתי של האלים", { name: "verumdevourerdeorumbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("truncatisbook");
Item.createItem("truncatisbook", "ג 'ונגל הדרקון", { name: "truncatisbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("verumcalamitatisbook");
Item.createItem("verumcalamitatisbook", "איסטינרה האסון האמיתי ", { name: "verumcalamitatisbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("azatotbook");
Item.createItem("azatotbook", "אבל בשביל זה", { name: "azatotbook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("chtulhubook");
Item.createItem("chtulhubook", "אלוהים תמנון הדרקון", { name: "chtulhubook", meta: 0 }, { stack: 64 });
IDRegistry.genItemID("arktludumthnbook");
Item.createItem("arktludumthnbook", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", meta: 0 }, { stack: 1 });
IDRegistry.genItemID("arktludumthnbooktwo");
Item.createItem("arktludumthnbooktwo", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
Recipes.addShaped({ id: ItemID.arktludumthnbooktwo, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbook, 0, 'b', ItemID.hollybotbook, 0]);
IDRegistry.genItemID("arktludumthnbookthree");
Item.createItem("arktludumthnbookthree", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
Recipes.addShaped({ id: ItemID.arktludumthnbookthree, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbooktwo, 0, 'b', ItemID.naidabook, 0]);
IDRegistry.genItemID("arktludumthnbookfour");
Item.createItem("arktludumthnbookfour", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookfive");
Item.createItem("arktludumthnbookfive", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbooksix");
Item.createItem("arktludumthnbooksix", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookseven");
Item.createItem("arktludumthnbookseven", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookeight");
Item.createItem("arktludumthnbookeight", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbooknine");
Item.createItem("arktludumthnbooknine", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookseederus");
Item.createItem("arktludumthnbookseederus", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookcalamitatis");
Item.createItem("arktludumthnbookcalamitatis", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookvenomcultist");
Item.createItem("arktludumthnbookvenomcultist", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookhatur");
Item.createItem("arktludumthnbookhatur", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookciciditdea");
Item.createItem("arktludumthnbookciciditdea", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookverumdevourerdeorum");
Item.createItem("arktludumthnbookverumdevourerdeorum", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbooktruncatis");
Item.createItem("arktludumthnbooktruncatis", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookverumcalamitatis");
Item.createItem("arktludumthnbookverumcalamitatis", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookazatot");
Item.createItem("arktludumthnbookazatot", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookchtulhu");
Item.createItem("arktludumthnbookchtulhu", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: true });
IDRegistry.genItemID("arktludumthnbookfinal");
Item.createItem("arktludumthnbookfinal", "Arktludumzn Mets Ihafu", { name: "arktludumthnbook", data: 0 }, { isTech: false });
ModAPI.addAPICallback("GuideAPI", function (api) {
    var GuideAPI = api.GuideAPI;
    var GuideHelper = api.GuideHelper;
    var PageControllers = api.PageControllers;
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                        { text: "Это финальная книга продиктованная своим пророкам - Арк'Небийу первобогом Арком", size: 18, color: android.graphics.Color.RED },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                        { text: "Другие миры", size: 26, link: "worlds", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                        { text: "Ковчег Космоса", size: 26, link: "aotc", color: android.graphics.Color.BLUE },
                        { text: "Мечи Вселенных", size: 26, link: "universeSwords", color: android.graphics.Color.RED },
                        { text: "Броня Арка", size: 26, link: "ArkArmor", color: android.graphics.Color.RED },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "aotc": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ark_of_the_Cosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Копия меча которым пользуется сам Арк", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Подробнее про историю этого меча можно прочитать", size: 18 },
                        { text: "тут", size: 18, link: "kkk", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "universeSwords": {
                preLink: "ar",
                nextLink: "MS",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.TinEverestraSword, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.HellSword, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.EndSword, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.AzatothSword, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.AstralSworda, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Эти мечи созданы из начала каждого из своих миров: Яви, Ада, Энда, Азатота и Астрала", size: 18 }
                    ]
                },
            },
            "MS": {
                preLink: "universeSwords",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.MultiverseSword, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Объединив все мечи миров (замечу то что не мечи всех миров, ибо миров намного больше) вы получите меч всей нашей Мультивселенной за которой лежит Пустота - Арктлудумзна", size: 18 }
                    ]
                },
            },
            "ArkArmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArkHelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.ArkCheatplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.ArkLeggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.ArkBoots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Эта броня модет дать вам часть силы Великого Йедэнбёга Арка", size: 18 }
                    ]
                },
            },
            "bosses": {
                preLink: "default",
                nextLink: "bossestwo",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                        { text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE },
                        { text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE },
                        { text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE },
                        { text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "bossestwo": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE },
                        { text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE },
                        { text: "Трункатис", size: 26, link: "truncatis", color: android.graphics.Color.BLUE },
                        { text: "Верум Каламитатис", size: 26, link: "vc", color: android.graphics.Color.BLUE },
                        { text: "Азатот", size: 26, link: "azatot", color: android.graphics.Color.BLUE },
                        { text: "Ктулху", size: 26, link: "chtulhu", color: android.graphics.Color.BLUE },
                        { text: "Арк", size: 26, link: "Ark", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - Ковчег Космоса. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал Ковчег Космоса и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "calamitatis": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Calamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 11000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18 },
                    ]
                }
            },
            "VenCul": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VenomCultist, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18 },
                        { text: "Количество жизней: 12000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Заразное пятно", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18 },
                    ]
                }
            },
            "six": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kron, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существ: Человек, маги", size: 18 },
                        { text: "Количество жизней: 4000 у каждого", size: 18 },
                        { text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18 },
                        { text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18 },
                    ]
                }
            },
            "hatur": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hatur, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хастур", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Бог, один из Древних", size: 18 },
                        { text: "Количество жизней: 14000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18 },
                    ]
                }
            },
            "cicdea": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CiciditDea, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший Бог", size: 18 },
                        { text: "Количество жизней: 16000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18 },
                    ]
                }
            },
            "vdd": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VerumDevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 15000?", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18 },
                    ]
                }
            },
            "truncatis": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Truncatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Трункатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 20000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Фрагмент души Трункатиса, Ярость дракона(меч), Горящие небеса (меч), Оскверненный трезубец", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Трункатис это самый первый дракон, отец дракона Эндера. За счет того что он служит Арку, он обладает огромной силой, а так же может принимать форму человека.", size: 18 },
                    ]
                }
            },
            "vc": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VerumCalamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Верум Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 25000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Уничтожение дракона(меч), Красное солнце (меч), Анимус (меч), Земля (меч), Азатот (меч), Истинный Паладинский Маг-Молот Могущества Триактиса (молот(оружие)), эссенция бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной. Она решила отомстить и последовав примеру Наиды превратила ад в то что вы видите сейчас. Так же Катаклисмус и Кладис это ее сестры, которых она возродила. Та Каламитатис что вы победили была лишь клоном, Каламитатис создала их для собственной безопасности, нет уверенности что и эта Каламитатис была настоящей...", size: 18 },
                    ]
                }
            },
            "azatot": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.azatotingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Азатот", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший бог, древний бог", size: 18 },
                        { text: "Количество жизней: 30000", size: 18 },
                        { text: "Урон: 10", size: 18 },
                        { text: "Дроп: Пыль Азатота, ботинки Фиреруса, Тлеющие небеса (магическая книга(оружие))", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Азатот рожден самим Йог-Сототом, так же известным как бытие, тоесть Азатот сын бытия. Бог демонов. Живет в своем собственном мире на краю вселенной.", size: 18 },
                    ]
                }
            },
            "chtulhu": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Chtulhu, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Ктулху", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший бог, древний бог", size: 18 },
                        { text: "Количество жизней: 35000", size: 18 },
                        { text: "Урон: 10", size: 18 },
                        { text: "Дроп: Кожа Ктулху, Внеземной (меч), Гибель Сверхновой (меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Ктулху древний бог, был заточен под древний город Р'льех под океаном еще до появления людей.", size: 18 },
                    ]
                }
            },
            "Ark": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ark, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Арк", size: 20, color: android.graphics.Color.RED },
                        { text: "Тип существа: Первобог (Йедэнбёг)", size: 18 },
                        { text: "Количество жизней: 1000000 (333333 в первой и второй фазе, 333334 в третьей фазе", size: 18 },
                        { text: "Урон: 100 в первой фазе, 25 в третьей и второй", size: 18 },
                        { text: "Дроп: Броня Арка, Сеся Креатива, Ковчег Космоса (истинный)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Арк один из первых богов созданных Струнами (Создателями), тоесть древнее его никого нет ибо Струны не имеют возраста, потому что они пришли из места где его не существует и создали время для нашей вселенной. Арк один из самых известных Йедэнбёгов так как он создал большую часть вселенной, создал квадраллионы, квинтиллионы, а может и больше планет и жизнь на них, устанавливал мир между ними и создал Закон Вселенной, что то типо конституции во всей нашей вселенной.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE },
                        { text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                        { text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE },
                        { text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE },
                        { text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE },
                        { text: "Первобог", size: 26, link: "firstgod", color: android.graphics.Color.BLUE },
                        { text: "Создатель", size: 26, link: "creator", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
            "god": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18 }
                    ]
                }
            },
            "demon": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Демон", size: 20, color: android.graphics.Color.BLUE },
                        { text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18 }
                    ]
                }
            },
            "angel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Ангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18 }
                    ]
                }
            },
            "archangel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Архангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18 }
                    ]
                }
            },
            "verumgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Высший бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18 }
                    ]
                }
            },
            "firstgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Первобог (Йедэнбёг)", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Это самые первые боги в нашей вселенной, они имеют полный контроль над ней. Обычно эти боги не учавствуют в жизни вселенной, но Арк внес огромный вклад в нее, так же известны другие Йедэнбёги: Эйбелл(сестра Арка), Йокто (создатель молекул и материи вцелом, поэтому он чувствует все что с ней происходит и так как большая часть вселенной это материя, он имеет огромную силу, в том числе он знает все что делаете вы ибо вы состоите из материи), Розетте (дочь Арка и Барнарды), Барнарда, Сомбреро (сын Эйбелл), Реаллорд (раньше был Струной), Колумнас Креатура (сын Арка, мертв), Игел (сын Колумнас Креатура) и Йхарон (создатель разума, но не смог его доделать ибо создавая сумашествие сошел с ума сам, за него разум доделал Колумнас Креатура)", size: 18 }
                    ]
                }
            },
            "creator": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель (Струна)", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существами их назвать нельзя ибо они создали жизнь, а также нашу вселенную с ее законами: временем, пространством и т.д. сами они ''пришли'' из места где этого нет - Пустота, там нету ни времени, ни пространства, так что попав туда человек просто перестанет существовать. Для струн всё время и пространство едино, они знают что было, будет и могло бы быть (тоесть другие вселенные) Струны есть всегда и везде, по сути они и есть наша вселенная, они ее часть, а она часть их. Это сложно понять, как и объяснить каково быть Создателем", size: 18 }
                    ]
                }
            },
            "worlds": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Другие миры", size: 30, color: android.graphics.Color.RED },
                        { text: "Другие миры паралельные нашему, созданые богами, они существуют и в некоторые из них вы можете попасть...", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Астрал", size: 26, link: "astral", color: android.graphics.Color.BLUE },
                        { text: "Азатот", size: 26, link: "azw", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "astral": {
                preLink: "worlds",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Астрал", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Астрал, так же известный как Гавань или Космическая Гавань, это мир созданный Арком в награду для Верум Девоурер Деорума. Верум Девоурер Деорум может делать там что угодно. Мир состоит из розовых туманностей и нескольких звезд.", size: 18 }
                    ]
                }
            },
            "azw": {
                preLink: "worlds",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Азатот", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Мир созданный Азатотом где он может править. Мир состоит из живой материи Азатота. Так же Азатот постоянно завоевывает и соединяет со своим миров другие миры.", size: 18 }
                    ]
                }
            },
        },
    });
});
Callback.addCallback("tick", function () {
    var pos = Player.getPosition();
    var vr = parseInt(Math.random() * 61);
    var v = parseInt(Math.random() * 61);
    pos = GenerationUtils.findSurface(pos.x - 30.5 + vr, pos.y, pos.z - 30, 5 + v);
    if (World.getBlockID(pos.x, pos.y, pos.z) == 2) {
        if (Math.random() < .0006) {
            //Entity.spawnCustom("Paladin", pos.x+10, pos.y + 1, pos.z);
        }
    }
    if (World.getBlockID(pos.x, pos.y, pos.z) == 2) {
        if (Math.random() < .0006) {
            //Entity.spawnCustom("Phantom", pos.x+10, pos.y + 1, pos.z);
        }
    }
    if (World.getBlockID(pos.x, pos.y, pos.z) == 2) {
        if (Math.random() < .0006) {
            //Entity.spawnCustom("PhantomSpirit", pos.x+10, pos.y + 1, pos.z);
        }
    }
});
ModAPI.addAPICallback("GuideAPI", function (api) {
    var GuideAPI = api.GuideAPI;
    var GuideHelper = api.GuideHelper;
    var PageControllers = api.PageControllers;
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
        }
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
        }
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
        }
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
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
                            { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                            { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                        ]
                    },
                    right: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                            { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                            { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                            { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                        ]
                    }
                },
                "items": {
                    preLink: "default",
                    nextLink: "cometite",
                    left: {
                        controller: PageControllers.ITEM_PAGE,
                        items: [
                            { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                            { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                            { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                            { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        ],
                        elements: [
                            { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                        ]
                    }
                },
                "cometite": {
                    preLink: "items",
                    left: {
                        controller: PageControllers.ITEM_PAGE,
                        items: [
                            { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        ],
                        elements: [
                            { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                        ]
                    }
                },
                "ar": {
                    preLink: "default",
                    left: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                            { text: "Артефакты это вещи с необычными способностями", size: 18 },
                        ]
                    },
                    right: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                            { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                        ]
                    }
                },
                "hearts": {
                    preLink: "ar",
                    nextLink: "fireheart",
                    left: {
                        controller: PageControllers.ITEM_PAGE,
                        items: [
                            { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        ],
                        elements: [
                            { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                            { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                        ]
                    }
                },
                "fireheart": {
                    preLink: "hearts",
                    nextLink: "elheart",
                    left: {
                        controller: PageControllers.ITEM_PAGE,
                        items: [
                            { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        ],
                        elements: [
                            { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                        ]
                    }
                },
                "fireheart": {
                    preLink: "fireheart",
                    left: {
                        controller: PageControllers.ITEM_PAGE,
                        items: [
                            { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        ],
                        elements: [
                            { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                        ]
                    }
                },
                "horngodarmor": {
                    preLink: "ar",
                    left: {
                        controller: PageControllers.ITEM_PAGE,
                        items: [
                            { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                            { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                            { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                            { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        ],
                        elements: [
                            { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                            { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                        ]
                    },
                    right: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                        ]
                    }
                },
                "bosses": {
                    preLink: "default",
                    left: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                            { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                        ]
                    },
                    right: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                            { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                            { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                            { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        ]
                    }
                },
                "hollybot": {
                    preLink: "bosses",
                    left: {
                        controller: PageControllers.ITEM_PAGE,
                        items: [
                            { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        ],
                        elements: [
                            { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Тип существа: Механизм", size: 18 },
                            { text: "Количество жизней: 100", size: 18 },
                            { text: "Урон: 3", size: 18 },
                            { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                        ]
                    },
                    right: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                        ]
                    }
                },
                "naida": {
                    preLink: "bosses",
                    left: {
                        controller: PageControllers.ITEM_PAGE,
                        items: [
                            { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        ],
                        elements: [
                            { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Тип существа: Языческая богиня", size: 18 },
                            { text: "Количество жизней: 1000", size: 18 },
                            { text: "Урон: 3", size: 18 },
                            { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                        ]
                    },
                    right: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                        ]
                    }
                },
                "kracken": {
                    preLink: "bosses",
                    left: {
                        controller: PageControllers.ITEM_PAGE,
                        items: [
                            { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        ],
                        elements: [
                            { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                            { text: "Количество жизней: 3000", size: 18 },
                            { text: "Урон: 3", size: 18 },
                            { text: "Дроп: Слиток Кракена", size: 18 }
                        ]
                    },
                    right: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                        ]
                    }
                },
                "elg": {
                    preLink: "bosses",
                    left: {
                        controller: PageControllers.ITEM_PAGE,
                        items: [
                            { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        ],
                        elements: [
                            { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                            { text: "Количество жизней: 6000", size: 18 },
                            { text: "Урон: 5", size: 18 },
                            { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                        ]
                    },
                    right: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                        ]
                    }
                },
                "mobtype": {
                    preLink: "default",
                    left: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                            { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                        ]
                    },
                    right: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                            { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                            { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                            { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        ]
                    }
                },
                "mechanism": {
                    preLink: "mobtype",
                    left: {
                        controller: PageControllers.BASIC_PAGE,
                        items: [],
                        elements: [
                            { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                        ]
                    }
                },
                "smallgod": {
                    preLink: "mobtype",
                    left: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                        ]
                    }
                },
                "monster": {
                    preLink: "mobtype",
                    left: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                        ]
                    }
                },
                "men": {
                    preLink: "mobtype",
                    left: {
                        controller: PageControllers.BASIC_PAGE,
                        elements: [
                            { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                            { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                        ]
                    }
                },
            },
        });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                        { text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "calamitatis": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Calamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 11000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                        { text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE },
                        { text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE },
                        { text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "calamitatis": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Calamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 11000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18 },
                    ]
                }
            },
            "VenCul": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VenomCultist, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, поклоняется древнему богу ኸአጠኢረ, который дает ему силы", size: 18 },
                        { text: "Количество жизней: 12000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Заразное пятно", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Заразный Культист это человек служащий богу ኸአጠኢረ, который взамен дает огромную силу.", size: 18 },
                    ]
                }
            },
            "six": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kron, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существ: Человек, маги", size: 18 },
                        { text: "Количество жизней: 4000 у каждого", size: 18 },
                        { text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18 },
                        { text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                        { text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE },
                        { text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE },
                        { text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE },
                        { text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "calamitatis": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Calamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 11000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18 },
                    ]
                }
            },
            "VenCul": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VenomCultist, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18 },
                        { text: "Количество жизней: 12000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Заразное пятно", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18 },
                    ]
                }
            },
            "six": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kron, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существ: Человек, маги", size: 18 },
                        { text: "Количество жизней: 4000 у каждого", size: 18 },
                        { text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18 },
                        { text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18 },
                    ]
                }
            },
            "hatur": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hatur, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хастур", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Бог, один из Древних", size: 18 },
                        { text: "Количество жизней: 14000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                        { text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
            "god": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                        { text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE },
                        { text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE },
                        { text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE },
                        { text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE },
                        { text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "calamitatis": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Calamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 11000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18 },
                    ]
                }
            },
            "VenCul": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VenomCultist, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18 },
                        { text: "Количество жизней: 12000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Заразное пятно", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18 },
                    ]
                }
            },
            "six": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kron, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существ: Человек, маги", size: 18 },
                        { text: "Количество жизней: 4000 у каждого", size: 18 },
                        { text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18 },
                        { text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18 },
                    ]
                }
            },
            "hatur": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hatur, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хастур", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Бог, один из Древних", size: 18 },
                        { text: "Количество жизней: 14000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18 },
                    ]
                }
            },
            "cicdea": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CiciditDea, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший Бог", size: 18 },
                        { text: "Количество жизней: 16000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали הטורף האמיתי של האלים что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда הטורף האמיתי של האלים  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE },
                        { text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                        { text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE },
                        { text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE },
                        { text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
            "god": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18 }
                    ]
                }
            },
            "demon": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Демон", size: 20, color: android.graphics.Color.BLUE },
                        { text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18 }
                    ]
                }
            },
            "angel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Ангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18 }
                    ]
                }
            },
            "archangel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Архангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18 }
                    ]
                }
            },
            "verumgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Высший бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                nextLink: "bossestwo",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                        { text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE },
                        { text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE },
                        { text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE },
                        { text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "bossestwo": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE },
                        { text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - የኪስሞስ ታቦት. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал የኪስሞስ ታቦት и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "calamitatis": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Calamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 11000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18 },
                    ]
                }
            },
            "VenCul": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VenomCultist, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18 },
                        { text: "Количество жизней: 12000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Заразное пятно", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18 },
                    ]
                }
            },
            "six": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kron, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существ: Человек, маги", size: 18 },
                        { text: "Количество жизней: 4000 у каждого", size: 18 },
                        { text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18 },
                        { text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18 },
                    ]
                }
            },
            "hatur": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hatur, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хастур", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Бог, один из Древних", size: 18 },
                        { text: "Количество жизней: 14000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18 },
                    ]
                }
            },
            "cicdea": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CiciditDea, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший Бог", size: 18 },
                        { text: "Количество жизней: 16000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18 },
                    ]
                }
            },
            "vdd": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VerumDevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 15000?", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE },
                        { text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                        { text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE },
                        { text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE },
                        { text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
            "god": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18 }
                    ]
                }
            },
            "demon": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Демон", size: 20, color: android.graphics.Color.BLUE },
                        { text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18 }
                    ]
                }
            },
            "angel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Ангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18 }
                    ]
                }
            },
            "archangel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Архангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18 }
                    ]
                }
            },
            "verumgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Высший бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                        { text: "Ковчег Космоса", size: 26, link: "aotc", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "aotc": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ark_of_the_Cosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Копия меча которым пользуется сам Арк", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Подробнее про историю этого меча можно прочитать", size: 18 },
                        { text: "тут", size: 18, link: "kkk", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                nextLink: "bossestwo",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                        { text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE },
                        { text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE },
                        { text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE },
                        { text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "bossestwo": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE },
                        { text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE },
                        { text: "Трункатис", size: 26, link: "truncatis", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - Ковчег Космоса. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал Ковчег Космоса и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "calamitatis": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Calamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 11000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18 },
                    ]
                }
            },
            "VenCul": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VenomCultist, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18 },
                        { text: "Количество жизней: 12000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Заразное пятно", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18 },
                    ]
                }
            },
            "six": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kron, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существ: Человек, маги", size: 18 },
                        { text: "Количество жизней: 4000 у каждого", size: 18 },
                        { text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18 },
                        { text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18 },
                    ]
                }
            },
            "hatur": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hatur, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хастур", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Бог, один из Древних", size: 18 },
                        { text: "Количество жизней: 14000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18 },
                    ]
                }
            },
            "cicdea": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CiciditDea, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший Бог", size: 18 },
                        { text: "Количество жизней: 16000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18 },
                    ]
                }
            },
            "vdd": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VerumDevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 15000?", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18 },
                    ]
                }
            },
            "truncatis": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Truncatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Трункатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 20000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Фрагмент души Трункатиса, Ярость дракона(меч), Горящие небеса (меч), Оскверненный трезубец", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Трункатис это самый первый дракон, отец дракона Эндера. За счет того что он служит Арку, он обладает огромной силой, а так же может принимать форму человека.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE },
                        { text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                        { text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE },
                        { text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE },
                        { text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
            "god": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18 }
                    ]
                }
            },
            "demon": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Демон", size: 20, color: android.graphics.Color.BLUE },
                        { text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18 }
                    ]
                }
            },
            "angel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Ангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18 }
                    ]
                }
            },
            "archangel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Архангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18 }
                    ]
                }
            },
            "verumgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Высший бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                        { text: "Ковчег Космоса", size: 26, link: "aotc", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "aotc": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ark_of_the_Cosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Копия меча которым пользуется сам Арк", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Подробнее про историю этого меча можно прочитать", size: 18 },
                        { text: "тут", size: 18, link: "kkk", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                nextLink: "bossestwo",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                        { text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE },
                        { text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE },
                        { text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE },
                        { text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "bossestwo": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE },
                        { text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE },
                        { text: "Трункатис", size: 26, link: "truncatis", color: android.graphics.Color.BLUE },
                        { text: "Верум Каламитатис", size: 26, link: "vc", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - Ковчег Космоса. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал Ковчег Космоса и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "calamitatis": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Calamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 11000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18 },
                    ]
                }
            },
            "VenCul": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VenomCultist, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18 },
                        { text: "Количество жизней: 12000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Заразное пятно", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18 },
                    ]
                }
            },
            "six": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kron, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существ: Человек, маги", size: 18 },
                        { text: "Количество жизней: 4000 у каждого", size: 18 },
                        { text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18 },
                        { text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18 },
                    ]
                }
            },
            "hatur": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hatur, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хастур", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Бог, один из Древних", size: 18 },
                        { text: "Количество жизней: 14000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18 },
                    ]
                }
            },
            "cicdea": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CiciditDea, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший Бог", size: 18 },
                        { text: "Количество жизней: 16000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18 },
                    ]
                }
            },
            "vdd": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VerumDevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 15000?", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18 },
                    ]
                }
            },
            "truncatis": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Truncatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Трункатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 20000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Фрагмент души Трункатиса, Ярость дракона(меч), Горящие небеса (меч), Оскверненный трезубец", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Трункатис это самый первый дракон, отец дракона Эндера. За счет того что он служит Арку, он обладает огромной силой, а так же может принимать форму человека.", size: 18 },
                    ]
                }
            },
            "vc": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VerumCalamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Верум Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 25000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Уничтожение дракона(меч), Красное солнце (меч), Анимус (меч), Земля (меч), Азатот (меч), Истинный Паладинский Маг-Молот Могущества Триактиса (молот(оружие)), эссенция бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной. Она решила отомстить и последовав примеру Наиды превратила ад в то что вы видите сейчас. Так же Катаклисмус и Кладис это ее сестры, которых она возродила. Та Каламитатис что вы победили была лишь клоном, Каламитатис создала их для собственной безопасности, нет уверенности что и эта Каламитатис была настоящей...", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE },
                        { text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                        { text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE },
                        { text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE },
                        { text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
            "god": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18 }
                    ]
                }
            },
            "demon": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Демон", size: 20, color: android.graphics.Color.BLUE },
                        { text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18 }
                    ]
                }
            },
            "angel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Ангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18 }
                    ]
                }
            },
            "archangel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Архангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18 }
                    ]
                }
            },
            "verumgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Высший бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                        { text: "Другие миры", size: 26, link: "worlds", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                        { text: "Ковчег Космоса", size: 26, link: "aotc", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "aotc": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ark_of_the_Cosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Копия меча которым пользуется сам Арк", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Подробнее про историю этого меча можно прочитать", size: 18 },
                        { text: "тут", size: 18, link: "kkk", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                nextLink: "bossestwo",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                        { text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE },
                        { text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE },
                        { text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE },
                        { text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "bossestwo": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE },
                        { text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE },
                        { text: "Трункатис", size: 26, link: "truncatis", color: android.graphics.Color.BLUE },
                        { text: "Верум Каламитатис", size: 26, link: "vc", color: android.graphics.Color.BLUE },
                        { text: "Азатот", size: 26, link: "azatot", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - Ковчег Космоса. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал Ковчег Космоса и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "calamitatis": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Calamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 11000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18 },
                    ]
                }
            },
            "VenCul": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VenomCultist, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18 },
                        { text: "Количество жизней: 12000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Заразное пятно", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18 },
                    ]
                }
            },
            "six": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kron, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существ: Человек, маги", size: 18 },
                        { text: "Количество жизней: 4000 у каждого", size: 18 },
                        { text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18 },
                        { text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18 },
                    ]
                }
            },
            "hatur": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hatur, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хастур", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Бог, один из Древних", size: 18 },
                        { text: "Количество жизней: 14000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18 },
                    ]
                }
            },
            "cicdea": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CiciditDea, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший Бог", size: 18 },
                        { text: "Количество жизней: 16000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18 },
                    ]
                }
            },
            "vdd": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VerumDevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 15000?", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18 },
                    ]
                }
            },
            "truncatis": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Truncatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Трункатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 20000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Фрагмент души Трункатиса, Ярость дракона(меч), Горящие небеса (меч), Оскверненный трезубец", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Трункатис это самый первый дракон, отец дракона Эндера. За счет того что он служит Арку, он обладает огромной силой, а так же может принимать форму человека.", size: 18 },
                    ]
                }
            },
            "vc": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VerumCalamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Верум Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 25000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Уничтожение дракона(меч), Красное солнце (меч), Анимус (меч), Земля (меч), Азатот (меч), Истинный Паладинский Маг-Молот Могущества Триактиса (молот(оружие)), эссенция бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной. Она решила отомстить и последовав примеру Наиды превратила ад в то что вы видите сейчас. Так же Катаклисмус и Кладис это ее сестры, которых она возродила. Та Каламитатис что вы победили была лишь клоном, Каламитатис создала их для собственной безопасности, нет уверенности что и эта Каламитатис была настоящей...", size: 18 },
                    ]
                }
            },
            "azatot": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.azatotingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Азатот", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший бог, древний бог", size: 18 },
                        { text: "Количество жизней: 30000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Пыль Азатота, ботинки Фиреруса, Тлеющие небеса (магическая книга(оружие))", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Азатот рожден самим Йог-Сототом, так же известным как бытие, тоесть Азатот сын бытия. Бог демонов. Живет в своем собственном мире на краю вселенной.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE },
                        { text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                        { text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE },
                        { text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE },
                        { text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
            "god": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18 }
                    ]
                }
            },
            "demon": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Демон", size: 20, color: android.graphics.Color.BLUE },
                        { text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18 }
                    ]
                }
            },
            "angel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Ангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18 }
                    ]
                }
            },
            "archangel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Архангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18 }
                    ]
                }
            },
            "verumgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Высший бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18 }
                    ]
                }
            },
            "worlds": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Другие миры", size: 30, color: android.graphics.Color.RED },
                        { text: "Другие миры паралельные нашему, созданые богами, они существуют и в некоторые из них вы можете попасть...", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Астрал", size: 26, link: "astral", color: android.graphics.Color.BLUE },
                        { text: "Азатот", size: 26, link: "azw", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "astral": {
                preLink: "worlds",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Астрал", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Астрал, так же известный как Гавань или Космическая Гавань, это мир созданный Арком в награду для Верум Девоурер Деорума. Верум Девоурер Деорум может делать там что угодно. Мир состоит из розовых туманностей и нескольких звезд.", size: 18 }
                    ]
                }
            },
            "azw": {
                preLink: "worlds",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Азатот", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Мир созданный Азатотом где он может править. Мир состоит из живой материи Азатота. Так же Азатот постоянно завоевывает и соединяет со своим миров другие миры.", size: 18 }
                    ]
                }
            },
        },
    });
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
                        { text: "Arktludumthn", size: 30, color: android.graphics.Color.RED },
                        { text: "Arktludumzn Mets Ihafu это книга о богах и существах из мода Arktludumthn", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Руды, предметы", size: 26, link: "items", color: android.graphics.Color.BLUE },
                        { text: "Артефакты", size: 26, link: "ar", color: android.graphics.Color.BLUE },
                        { text: "Боссы", size: 26, link: "bosses", color: android.graphics.Color.BLUE },
                        { text: "Типы существ", size: 26, link: "mobtype", color: android.graphics.Color.BLUE },
                        { text: "Другие миры", size: 26, link: "worlds", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "items": {
                preLink: "default",
                nextLink: "cometite",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ignisusingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aquatiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.aeriteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.territeingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Слитки стихий", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Террит, Аэрит, Акватит и Игнисусит. Террит можно найти как и обычную руду в шахте, самая слабая из стихийных руд. Акватит можно найти везде где есть песок или гравий. Аэрит находится где то наверху. Игнисусит можно найти редко в лаве или в аду", size: 18 }
                    ]
                }
            },
            "cometite": {
                preLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.cometiteingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кометит", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Кометит можно найти если забраться выше облаков, что делает его добычу довольно таки затруднительной, но он потом понадобится для создания проклятого механизма.", size: 18 }
                    ]
                }
            },
            "ar": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Артефакты", size: 30, color: android.graphics.Color.RED },
                        { text: "Артефакты это вещи с необычными способностями", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кристальное сердце", size: 26, link: "hearts", color: android.graphics.Color.BLUE },
                        { text: "Броня Рогатого Бога", size: 26, link: "horngodarmor", color: android.graphics.Color.BLUE },
                        { text: "Ковчег Космоса", size: 26, link: "aotc", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hearts": {
                preLink: "ar",
                nextLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.lifecrystal, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кристалл жизни", size: 20, color: android.graphics.Color.BLUE },
                        { text: "При съедании повышает здоровье, делается из живого слитка и блока, которые делаются из редкой живой руды", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "hearts",
                nextLink: "elheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.fireheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Огненное сердце", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Повышает в два раза больше здоровья чем обычное сердце. Делается из игнисуситовых слитков и жизненно важного блока", size: 18 }
                    ]
                }
            },
            "fireheart": {
                preLink: "fireheart",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.elementalheart, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сердце элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Увеличивает здоровье на 10. Выпадает из Хранителя Элементов", size: 18 }
                    ]
                }
            },
            "horngodarmor": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.horngodhelmet, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodchestplate, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodleggings, data: 0, clicker: { onClick: function () { alert("null"); } } },
                        { id: ItemID.horngodboots, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Броня Рогатого Бога", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 },
                        { text: "Защита: шлем +8, нагрудник +9, поножи +8, ботинки +8 } +33", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Эту броню одевал Дрэйден по праздникам. Хоть ее защита и больше чем у алмазной, Дрэйдон использовал ее как праздничный наряд.", size: 18 },
                    ]
                }
            },
            "aotc": {
                preLink: "ar",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ark_of_the_Cosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Копия меча которым пользуется сам Арк", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Подробнее про историю этого меча можно прочитать", size: 18 },
                        { text: "тут", size: 18, link: "kkk", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "bosses": {
                preLink: "default",
                nextLink: "bossestwo",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Проклятый механизм", size: 26, link: "hollybot", color: android.graphics.Color.BLUE },
                        { text: "Наида", size: 26, link: "naida", color: android.graphics.Color.BLUE },
                        { text: "Кракен", size: 26, link: "kracken", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Элементов", size: 26, link: "elg", color: android.graphics.Color.BLUE },
                        { text: "Хранитель Арсенала", size: 26, link: "arg", color: android.graphics.Color.BLUE },
                        { text: "Создатель Арсенала", size: 26, link: "arc", color: android.graphics.Color.BLUE },
                        { text: "Коммандир Ковчега Космоса", size: 26, link: "kkk", color: android.graphics.Color.BLUE },
                        { text: "Девоурер Деорум", size: 26, link: "ddeshka", color: android.graphics.Color.BLUE },
                        { text: "Сидиерус", size: 26, link: "seederus", color: android.graphics.Color.BLUE },
                        { text: "Екатебрина", size: 26, link: "ekatebrina", color: android.graphics.Color.BLUE },
                        { text: "Зевс", size: 26, link: "zeus", color: android.graphics.Color.BLUE },
                        { text: "Каламитатис", size: 26, link: "calamitatis", color: android.graphics.Color.BLUE },
                        { text: "Заразный Культист", size: 26, link: "VenCul", color: android.graphics.Color.BLUE },
                        { text: "Изначальное пять", size: 26, link: "six", color: android.graphics.Color.BLUE },
                        { text: "Хастур", size: 26, link: "hatur", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "bossestwo": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Боссы", size: 30, color: android.graphics.Color.RED },
                        { text: "Здесь описаны существа которые являются боссами, вы можете призвать их и сразится. Осторожно у боссов редко может появится кнопка возрождения", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа", size: 26, link: "cicdea", color: android.graphics.Color.BLUE },
                        { text: "Верум Девоурер Деорум", size: 26, link: "vdd", color: android.graphics.Color.BLUE },
                        { text: "Трункатис", size: 26, link: "truncatis", color: android.graphics.Color.BLUE },
                        { text: "Верум Каламитатис", size: 26, link: "vc", color: android.graphics.Color.BLUE },
                        { text: "Азатот", size: 26, link: "azatot", color: android.graphics.Color.BLUE },
                        { text: "Ктулху", size: 26, link: "chtulhu", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "hollybot": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hollybot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Проклятый механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Механизм", size: 18 },
                        { text: "Количество жизней: 100", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Святой слиток, броня Рогатого Бога", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Одно из первых созданий Дрэйдена. Когда Дрэйден родился в семье богов планеты Нибиру обнаружилось что у него нет божественной силы и тогда он начал заниматься механикой. Проклятый механизм был создан когда Дрэйдону было всего 382 года (для богов это детский возраст). Ошибка в программе заставила проклятый механизм восстать против своего создателя, но отец Дрэйдона смог вовремя обезвредить механизм и отправить на Землю.", size: 18 },
                    ]
                }
            },
            "naida": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Naida, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Наида", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Языческая богиня", size: 18 },
                        { text: "Количество жизней: 1000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Живой осколок, Сеятель (меч), Гитара-Топор (оружие)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Наида это языческая богиня растений. Ее любимым растением всегда были розы, но однажды бог Нотч создавший розы уничтожил их что бы создать еще больше растений, но Наида была против этого и зло поглотило ее, она уничтожила все растения в аду превратив его в голую землю. Да когда то ад был процветающим местом... До сих пор Наида пытается отомстить Нотчу и думаю она не будет рада тому что ее призовут. На месте ее смерти вырастает огромная роза.", size: 18 },
                    ]
                }
            },
            "kracken": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kracken, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Кракен", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр, наполовину Языческий Бог", size: 18 },
                        { text: "Количество жизней: 3000", size: 18 },
                        { text: "Урон: 3", size: 18 },
                        { text: "Дроп: Слиток Кракена", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Кракен это морское чудовище способное управлять водой, похоже на кальмара. Сын уже давно умершего и неизвестного языческого бога.", size: 18 },
                    ]
                }
            },
            "elg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ElementalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Элементов", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный силой от самого Арка", size: 18 },
                        { text: "Количество жизней: 6000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Меч элементов, Истинная ярость, Чистая энергия, Магический мороз, Сила множества, Сердце элементов", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Элементов это инопланетянин с планеты Бисуому призванный самим Арком что бы охранять равновесие между первородными элементами", size: 18 },
                    ]
                }
            },
            "arg": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalGuardian, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хранитель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин)", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Космилитовый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хранитель Арсенала брат Хранителя Элементов, он межгалактический торговец оружием. Был наделен космической силой, но не от Арка", size: 18 },
                    ]
                }
            },
            "arc": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.ArsenalCreator, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Создатель Арсенала", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от Арка", size: 18 },
                        { text: "Количество жизней: 7000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Омикроновый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Создатель Арсенала это человек создавший первое орукжие во вселенной - Ковчег Космоса. Это оружие было настолько сильное что Арк выкупил его за огромную силу которой он наделил Создателя Арсенала, а после Создатель начал работать на Арка.", size: 18 },
                    ]
                }
            },
            "kkk": {
                preLink: "bosses",
                nextLink: "kkktwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CaptainOfArkOfTheCosmos, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Коммандир Ковчега Космоса", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек (инопланетянин), наделенный огромной силой от своего брата Создателя Арсенала", size: 18 },
                        { text: "Количество жизней: 8000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Стелла Сфаэра", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Коммандир Ковчега Космоса это брат Создателя Арсенала и дядя Хранителя Элементов и Хранителя Арсенала, пора бы рассказать историю этой семьи... Все началось с того что Создатель Арсенала создал Ковчег Космоса и сам первобог Арк нанял его как кузнеца для мощнейших оружий вселенной. Арк запретил Создателю общаться и видеть свою семью, а вскоре и вообще начал использовать его как раба, но Создателю удалось сбежать и за это Арк начал уничтожать Бисуому, родную планету Создателя, конечно для уничтожения понадобился не один день и Создатель успел долететь до брата - Коммандира Ковчега Космоса, он умолял его улететь с планеты, но Коммандир не мог оставить жителей планеты погибать и тогда они построили космический корабль известный как Ковчег Космоса. Они спасли не все население, но большую ее часть и успешно улетели на Нибиру, планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "kkktwo": {
                preLink: "kkk",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: " планету солнечной системы, которой сейчас уже не существует. Через много лет после этого Арк смог найти одного из сыновей Создателя - Хранителя Элементов и хотел убить его что бы отомстить, но хранитель кое что знал, он знал что вселенная может разрушится из-за неаккуратности одного первобога и тогда он предложил поддерживать вселенную с помощью своей магии, Арк оставил его в живых, но заставил Хранителя и всю его семью забыть свои имена, так как с помощью них можно было создать одно заклинание которое поможет сбежать Хранителю Элементов.", size: 18 },
                    ]
                }
            },
            "ddeshka": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.DevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр из другого мира наделенный магией и оружием", size: 18 },
                        { text: "Количество жизней: 9000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Астрал (меч), Меч Гавани, Звездная пыль, Эктоплазма, Фантаплазма, Палладиевый слиток", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Девоурер Деорум очень сильное существо из другого мира известного как Астрал или Гавань. Он настолько силен что может пожирать планеты, конечно не за один раз. Был изгнан своим отцом что бы Девоурер Деорум начал самостоятельную жизнь.", size: 18 },
                    ]
                }
            },
            "seederus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Seederus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Сидиерус", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Взрывная бомба Джека, Меч всадника, Черная волшебная пыль, Кошмарное топливо", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Сидиерус это лорд Растений. Имеет полную власть над растениями. Отец Наиды.", size: 18 },
                    ]
                }
            },
            "ekatebrina": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Ekatebrina, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Екатебрина", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Северный полюс, Термоэнергия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Екатебрина лорд холода. Известна в сказках как Снежная Королева, конечно в сказках есть неточности.", size: 18 },
                    ]
                }
            },
            "zeus": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Zeus, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Зевс", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Лорд", size: 18 },
                        { text: "Количество жизней: 10000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Φωτιά του Δία, Ботинки Гермеса", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Зевс лорд молнии. Тут о нем писать особо нечего, потому что он и так известен по древнегреческой мифологии.", size: 18 },
                    ]
                }
            },
            "calamitatis": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Calamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 11000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Энтропия бродяги, Пыль бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной", size: 18 },
                    ]
                }
            },
            "VenCul": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VenomCultist, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Заразный Культист", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, поклоняется древнему богу Хастуру, который дает ему силы", size: 18 },
                        { text: "Количество жизней: 12000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Заразное пятно", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Заразный Культист это человек служащий богу Хастуру, который взамен дает огромную силу.", size: 18 },
                    ]
                }
            },
            "six": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Kron, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Изначальное пять", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существ: Человек, маги", size: 18 },
                        { text: "Количество жизней: 4000 у каждого", size: 18 },
                        { text: "Урон: Крон - 10, Каан - 3, все остальные - 5", size: 18 },
                        { text: "Дроп: Изначальный меч, Потерянный меч, Посох Анкха, Непроницаемый меч", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Изначальное пять это секта состоящая из пяти человек - Крона, Кро́та, Оаху, Каана и Птаха. Все они маги. У каждого своя атака: Крон - мечом, Крот - стрелами, Оаху - молниями, Каан - скоростью, Птах - призывает Големов Птаха и после смерти призывает дух своего брата Крсл'а.", size: 18 },
                    ]
                }
            },
            "hatur": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Hatur, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Хастур", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Бог, один из Древних", size: 18 },
                        { text: "Количество жизней: 14000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Мяуслиток, Звездная ярость, Землянин", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Хастур это древний бог обладающий огромной силой, заточен на луне но может телепатически общаться со своими культистами. ", size: 18 },
                    ]
                }
            },
            "cicdea": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.CiciditDea, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Цицидит Деа", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший Бог", size: 18 },
                        { text: "Количество жизней: 16000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Божественная жеода, Оскверненная эссенция, Расплавленный ампутатор(коса(оружие)), Святой коллайдер(меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Цицидит Деа это высшая богиня родившаяся неестественным путем. Когда Люцифер создал демонов Тетраграмматон послал ангелов что бы те уничтожили их. Когда огромное количество демонов и ангелов схлиснулись в битве произошел огромный взрыв внутри которого родилась Цицидит Деа, из-за того что она имела такое произхождение ее сразу осквернили и послали Верум Девоурер Деорума что бы он убил ее, но Цицидит Деа была устойчива к высочайшей температуре и спряталась на солнце, куда  Верум Девоурер Деорум  не мог добраться, потому что был обычным монстром. Цицидит Деа нейтральная богиня, она убивает тех кто покушается на ее артефакты и помогает тем кто поклоняется ей. Может призывать Гибридов - полуангелов полудемонов", size: 18 },
                    ]
                }
            },
            "vdd": {
                preLink: "bosses",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VerumDevourerDeorum, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Верум Девоурер Деорум", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 15000?", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Галакситовый слиток, Эксельсус (меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Верум Девоурер Деорум когда то был обычным космическим монстром пожирающим все что мог. Он голодал и практически умер, но Арк нашел его, выкормил и наделил особой силой что бы тот служил ему и убивал тех кого прикажет Арк. Но Верум Девоурер Деорум был слишком медненен и тогда Арк нашел существо именовавшее себя Бесконечная Пустота, она могла создавать порталы в любую точку вселенной или в любую другую вселенную, Арк соединил ее с Верум Девоурер Деорумом и теперь он может оказаться где захочет и даже создал свою вселенную - Астрал или как ее еще называют Гавань (Космическая Гавань). От того что он пожирал не только обычных существ, но и богов, он стал невероятно силен.", size: 18 },
                    ]
                }
            },
            "truncatis": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Truncatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Трункатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Монстр", size: 18 },
                        { text: "Количество жизней: 20000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Фрагмент души Трункатиса, Ярость дракона(меч), Горящие небеса (меч), Оскверненный трезубец", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Трункатис это самый первый дракон, отец дракона Эндера. За счет того что он служит Арку, он обладает огромной силой, а так же может принимать форму человека.", size: 18 },
                    ]
                }
            },
            "vc": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.VerumCalamitatis, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Верум Каламитатис", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Человек, проклята и обладает магии", size: 18 },
                        { text: "Количество жизней: 25000", size: 18 },
                        { text: "Урон: 5", size: 18 },
                        { text: "Дроп: Уничтожение дракона(меч), Красное солнце (меч), Анимус (меч), Земля (меч), Азатот (меч), Истинный Паладинский Маг-Молот Могущества Триактиса (молот(оружие)), эссенция бедствия", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Настоящее имя Каламитатис неизвестно, родители с детства учили ее магии и использовании ее в плохих целях, однажды люди узнали о том что семья Каламитатис использует магию и сожгли их пощадив только Каламитатис потому что ей было всего 5 лет. Через много лет она смогла изучить магию которую еще использовали первобоги, что сделало ее очень сильной. Она решила отомстить и последовав примеру Наиды превратила ад в то что вы видите сейчас. Так же Катаклисмус и Кладис это ее сестры, которых она возродила. Та Каламитатис что вы победили была лишь клоном, Каламитатис создала их для собственной безопасности, нет уверенности что и эта Каламитатис была настоящей...", size: 18 },
                    ]
                }
            },
            "azatot": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.azatotingot, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Азатот", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший бог, древний бог", size: 18 },
                        { text: "Количество жизней: 30000", size: 18 },
                        { text: "Урон: 10", size: 18 },
                        { text: "Дроп: Пыль Азатота, ботинки Фиреруса, Тлеющие небеса (магическая книга(оружие))", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Азатот рожден самим Йог-Сототом, так же известным как бытие, тоесть Азатот сын бытия. Бог демонов. Живет в своем собственном мире на краю вселенной.", size: 18 },
                    ]
                }
            },
            "chtulhu": {
                preLink: "bossestwo",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        { id: ItemID.Chtulhu, data: 0, clicker: { onClick: function () { alert("null"); } } },
                    ],
                    elements: [
                        { text: "Ктулху", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Тип существа: Высший бог, древний бог", size: 18 },
                        { text: "Количество жизней: 35000", size: 18 },
                        { text: "Урон: 10", size: 18 },
                        { text: "Дроп: Кожа Ктулху, Внеземной (меч), Гибель Сверхновой (меч)", size: 18 }
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Ктулху древний бог, был заточен под древний город Р'льех под океаном еще до появления людей.", size: 18 },
                    ]
                }
            },
            "mobtype": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Типы существ", size: 30, color: android.graphics.Color.RED },
                        { text: "Существа делятся на типы например: боги, демоны, ангелы и т.д. Здесь описаны типы", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 26, link: "men", color: android.graphics.Color.BLUE },
                        { text: "Монстр", size: 26, link: "monster", color: android.graphics.Color.BLUE },
                        { text: "Механизм", size: 26, link: "mechanism", color: android.graphics.Color.BLUE },
                        { text: "Языческий бог", size: 26, link: "smallgod", color: android.graphics.Color.BLUE },
                        { text: "Демон", size: 26, link: "demon", color: android.graphics.Color.BLUE },
                        { text: "Ангел", size: 26, link: "angel", color: android.graphics.Color.BLUE },
                        { text: "Лорд", size: 26, link: "lord", color: android.graphics.Color.BLUE },
                        { text: "Архангел", size: 26, link: "archangel", color: android.graphics.Color.BLUE },
                        { text: "Бог", size: 26, link: "god", color: android.graphics.Color.BLUE },
                        { text: "Высший бог", size: 26, link: "verumgod", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "mechanism": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [],
                    elements: [
                        { text: "Механизм", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Существа типа механизм, не являются живыми существами, они не имеют души и разума, все что они делают написано программой. Как правило созданы не с помощью магии или божественных/ангельских сил, а с помощью обычной науки.", size: 18 }
                    ]
                }
            },
            "smallgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Языческий бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Обычно созданы более высшими богами или ангелами, так же могут быть дальними родственниками высших богов. Хорошо владеют магией определенной стихии.", size: 18 }
                    ]
                }
            },
            "monster": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Монстр", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Созданы языческими богами, ангелами или демонами. Под тип монстра подходит очень много существ. Все они появились с помощью магии и иногда имеют магические способности. Как правило враждебны. Монстрами являются сущесва ниже по типу чем языческие боги, но не являющиеся животными или людьми", size: 18 }
                    ]
                }
            },
            "men": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Человек", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Люди одни из нисших существ, не наделены никакими магическими способностями, только если они не потомки более сильных существ. По силе в иерархии занимают одно место с монстрами и животными, хоть и монстры чуть сильнее, а животные слабее. Так же к типу человек относятся инопланетяне и люди/инопланетяне из других миров", size: 18 }
                    ]
                }
            },
            "lord": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Лорд", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Лорды это создатели или предки языческих богов. Имеют полную власть над своей стихией. Обычно как и языческие боги живут на земле.", size: 18 }
                    ]
                }
            },
            "god": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Боги практически всемогущие. Имеют силу изменять реальность, вселенную и ее составляющие", size: 18 }
                    ]
                }
            },
            "demon": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Демон", size: 20, color: android.graphics.Color.BLUE },
                        { text: "По сути демоны это человеческая душа, но она измучена в аду. Демонов создал архангел Люцифер что бы доказать Тетраграмматону что люди не такие хорошие как он думал, первые демоны - Князья Ада были намного сильнее обычных и были слабее архангелов, но сильнее лордов. Обычные демоны это измученные в аду души, они слабее Князей Ада и сильнее языческих богов, но слабее ангелов.", size: 18 }
                    ]
                }
            },
            "angel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Ангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Ангелы это довольно таки сильные существа. Были созданы Тетраграмматоном для того что бы служить ему. У ангелов довольно много способностей: управление временем, стихиями, телепортация, полет, перемещение со скоростью света и более, управление человеческим разумом и не только...", size: 18 }
                    ]
                }
            },
            "archangel": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Архангел", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Архангелы одни из первых созданий Тетраграмматона. По силе практически равны богу, но боги могут управлять архангелами не смотря на сколько силен архангел.", size: 18 }
                    ]
                }
            },
            "verumgod": {
                preLink: "mobtype",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Высший бог", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Намного сильнее богов, первые создания первобогов и третий вид существ появившийся во вселенной. Практически всемогущи, могут создавать и уничтожать целые галактики мгновенно, имеют силу создавать свои вселенные, но они будут нестабильны.", size: 18 }
                    ]
                }
            },
            "worlds": {
                preLink: "default",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Другие миры", size: 30, color: android.graphics.Color.RED },
                        { text: "Другие миры паралельные нашему, созданые богами, они существуют и в некоторые из них вы можете попасть...", size: 18 },
                    ]
                },
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Астрал", size: 26, link: "astral", color: android.graphics.Color.BLUE },
                        { text: "Азатот", size: 26, link: "azw", color: android.graphics.Color.BLUE },
                    ]
                }
            },
            "astral": {
                preLink: "worlds",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Астрал", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Астрал, так же известный как Гавань или Космическая Гавань, это мир созданный Арком в награду для Верум Девоурер Деорума. Верум Девоурер Деорум может делать там что угодно. Мир состоит из розовых туманностей и нескольких звезд.", size: 18 }
                    ]
                }
            },
            "azw": {
                preLink: "worlds",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        { text: "Азатот", size: 20, color: android.graphics.Color.BLUE },
                        { text: "Мир созданный Азатотом где он может править. Мир состоит из живой материи Азатота. Так же Азатот постоянно завоевывает и соединяет со своим миров другие миры.", size: 18 }
                    ]
                }
            },
        },
    });
});
IDRegistry.genItemID("StopClock");
Item.createItem("StopClock", "Хронометр", { name: "chrono", meta: 0 }, { stack: 1 });
Baubles.registerBauble({
    id: ItemID.StopClock,
    type: BaubleType.charm,
    onEquip: function (client) {
        alert("onEquip " + client.getPlayerUid());
        Panel.open(client);
    },
    onTakeOff: function (client) {
        alert("onTakeOff");
        Panel.close(client);
    },
    tick: function () { }
});
var Azatot = new Dimensions.CustomDimension("Azatot", 685);
Azatot.setSkyColor(0, 0, .2);
Azatot.setFogColor(0, 0, .2);
Azatot.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0,
            maxY: 150,
            yConversion: [[0, -3], [.1, -.2], [0.5, .1], [.9, -.2], [2, -1]],
            material: { base: BlockID.azatotmateria, surface: { id: BlockID.azatotmateria, data: 0, width: 4 }, cover: BlockID.azatotmateria },
            noise: {
                octaves: { count: 4, weight: .9, scale: [.015, .02752, .015] }
            }
        }
    ]
}));
var Astral = new Dimensions.CustomDimension("Astral", 686);
Astral.setSkyColor(1, .8, 1);
Astral.setFogColor(1, 1, 0);
Astral.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0,
            maxY: 150,
            yConversion: [[0, -3], [.1, -.2], [0.5, .1], [.9, -.2], [2, -1]],
            material: { base: BlockID.astralpink, surface: { id: BlockID.astralyellow, data: 0, width: 4 }, cover: BlockID.astralmid },
            noise: {
                octaves: { count: 4, weight: .9, scale: [.015, .02752, .015] }
            }
        }
    ]
}));
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
    if (item.id == ItemID.astralshears) {
        Dimensions.transfer(player, Astral.id);
    }
    if (item.id == ItemID.overworld) {
        Dimensions.transfer(player, 0);
    }
    if (item.id == ItemID.azatotshears) {
        Dimensions.transfer(player, Azatot.id);
    }
});
var ItemGeneration = new ItemGenerate();
ItemGeneration.addItem(ItemID.aquatiteingot, 1, { max: 3 });
ItemGeneration.addItem(ItemID.aeriteingot, .6, { max: 6 });
ItemGeneration.addItem(ItemID.aeressence, .4, { max: 5 });
ItemGeneration.addItem(ItemID.starsword, .5, { max: 1 });
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 5; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.territeore, 0, 10);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 20);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.heartore, 0, 6);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        if (World.getBiome(coords.x, coords.y, coords.z) == HollyLands.id) {
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.hollyore, 0, 10);
        }
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        if (World.getBlockID(coords.x + 1, coords.y, coords.z) == 11) {
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ignisusore, 0, 10);
        }
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        if (World.getBlockID(coords.x + 1, coords.y, coords.z) == 12) {
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aquatiteore, 0, 10);
        }
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for (var i = 0; i < 5; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
        var coordus = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlockID(coordus.x + 1, coordus.y, coordus.z) == 13) {
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aquatiteore, 0, 10);
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if (random.nextInt(1000) < 20) {
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlockID(coords.x, coords.y, coords.z) == 12) {
            World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.aquatiteore, 0);
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if (random.nextInt(1000) < 20) {
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlockID(coords.x, coords.y, coords.z) == 11) {
            World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.ignisusore, 0);
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if (random.nextInt(1000) < 20) {
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlockID(coords.x, coords.y, coords.z) == 13) {
            World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.aquatiteore, 0);
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if (random.nextInt(1000) < 20) {
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
            World.setBlock(coords.x, coords.y + 100, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 100, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x + 2, coords.y + 100, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 100, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 100, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 101, coords.z, BlockID.aeriteore, 0);
            World.setBlock(coords.x + 1, coords.y + 101, coords.z, BlockID.aeriteore, 0);
            World.setBlock(coords.x + 2, coords.y + 101, coords.z, BlockID.aeriteore, 0);
            World.setBlock(coords.x, coords.y + 101, coords.z - 1, BlockID.aeriteore, 0);
            World.setBlock(coords.x + 1, coords.y + 101, coords.z - 1, BlockID.aeriteore, 0);
            World.setBlock(coords.x + 3, coords.y + 101, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x + 2, coords.y + 101, coords.z + 1, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 101, coords.z + 1, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 101, coords.z + 1, BlockID.cloud, 0);
            World.setBlock(coords.x + 2, coords.y + 101, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 101, coords.z - 2, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 101, coords.z - 2, BlockID.cloud, 0);
            World.setBlock(coords.x - 1, coords.y + 101, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x - 1, coords.y + 101, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 102, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 102, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x + 2, coords.y + 102, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 102, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 102, coords.z - 1, BlockID.cloud, 0);
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 100, 255);
    if (random.nextInt(1000) < 20) {
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
            World.setBlock(coords.x, coords.y + 100, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 100, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x + 2, coords.y + 100, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 100, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 100, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 101, coords.z, BlockID.aeriteore, 0);
            World.setBlock(coords.x + 1, coords.y + 101, coords.z, BlockID.aeriteore, 0);
            World.setBlock(coords.x + 2, coords.y + 101, coords.z, BlockID.aeriteore, 0);
            World.setBlock(coords.x, coords.y + 101, coords.z - 1, BlockID.aeriteore, 0);
            World.setBlock(coords.x + 1, coords.y + 101, coords.z - 1, BlockID.aeriteore, 0);
            World.setBlock(coords.x + 3, coords.y + 101, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x + 2, coords.y + 101, coords.z + 1, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 101, coords.z + 1, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 101, coords.z + 1, BlockID.cloud, 0);
            World.setBlock(coords.x + 2, coords.y + 101, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 101, coords.z - 2, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 101, coords.z - 2, BlockID.cloud, 0);
            World.setBlock(coords.x - 1, coords.y + 101, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x - 1, coords.y + 101, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 102, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 102, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x + 2, coords.y + 102, coords.z, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 102, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x + 1, coords.y + 102, coords.z - 1, BlockID.cloud, 0);
            World.setBlock(coords.x, coords.y + 102, coords.z, 54, 0);
            ItemGeneration.fillChest(coords.x, coords.y + 102, coords.z, BlockSource.getCurrentWorldGenRegion(), random);
        }
    }
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if (Math.random() < 0.2) {
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
            World.setBlock(coords.x, coords.y + 150, coords.z, BlockID.cometdirt, 0);
            World.setBlock(coords.x + 1, coords.y + 150, coords.z, BlockID.cometdirt, 0);
            World.setBlock(coords.x + 2, coords.y + 150, coords.z, BlockID.cometdirt, 0);
            World.setBlock(coords.x, coords.y + 150, coords.z - 1, BlockID.cometdirt, 0);
            World.setBlock(coords.x + 1, coords.y + 150, coords.z - 1, BlockID.cometdirt, 0);
            World.setBlock(coords.x, coords.y + 151, coords.z, BlockID.cometiteore, 0);
            World.setBlock(coords.x + 1, coords.y + 151, coords.z, BlockID.cometiteore, 0);
            World.setBlock(coords.x + 2, coords.y + 151, coords.z, BlockID.cometiteore, 0);
            World.setBlock(coords.x, coords.y + 151, coords.z - 1, BlockID.cometiteore, 0);
            World.setBlock(coords.x + 1, coords.y + 151, coords.z - 1, BlockID.cometiteore, 0);
            World.setBlock(coords.x + 3, coords.y + 151, coords.z, BlockID.cometgrass, 0);
            World.setBlock(coords.x + 2, coords.y + 151, coords.z + 1, BlockID.cometgrass, 0);
            World.setBlock(coords.x + 1, coords.y + 151, coords.z + 1, BlockID.cometgrass, 0);
            World.setBlock(coords.x, coords.y + 151, coords.z + 1, BlockID.cometgrass, 0);
            World.setBlock(coords.x + 2, coords.y + 151, coords.z - 1, BlockID.cometgrass, 0);
            World.setBlock(coords.x + 1, coords.y + 151, coords.z - 2, BlockID.cometgrass, 0);
            World.setBlock(coords.x, coords.y + 151, coords.z - 2, BlockID.cometgrass, 0);
            World.setBlock(coords.x - 1, coords.y + 151, coords.z - 1, BlockID.cometgrass, 0);
            World.setBlock(coords.x - 1, coords.y + 151, coords.z, BlockID.cometgrass, 0);
            World.setBlock(coords.x, coords.y + 152, coords.z, BlockID.cometgrass, 0);
            World.setBlock(coords.x + 1, coords.y + 152, coords.z, BlockID.cometgrass, 0);
            World.setBlock(coords.x + 2, coords.y + 152, coords.z, BlockID.cometgrass, 0);
            World.setBlock(coords.x, coords.y + 152, coords.z - 1, BlockID.cometgrass, 0);
            World.setBlock(coords.x + 1, coords.y + 152, coords.z - 1, BlockID.cometgrass, 0);
        }
    }
});
Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 255);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ignisusnetherore, 0, 10);
    }
});
Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for (var i = 0; i < 10; i++) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 250);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.chaosore, 0, 20);
    }
});
Recipes.addFurnace(BlockID.aeriteore, ItemID.aeriteingot, 1);
Recipes.addFurnace(BlockID.territeore, ItemID.territeingot, 1);
Recipes.addFurnace(BlockID.aquatiteore, ItemID.aquatiteingot, 1);
Recipes.addFurnace(BlockID.ignisusore, ItemID.ignisusingot, 1);
Recipes.addFurnace(BlockID.ignisusnetherore, ItemID.ignisusingot, 1);
Recipes.addFurnace(BlockID.cometiteore, ItemID.cometiteingot, 1);
Recipes.addFurnace(BlockID.heartore, ItemID.heartingot, 1);
Recipes.addFurnace(BlockID.chaosore, ItemID.chaosingot, 1);
Recipes.addFurnace(BlockID.goldyore, ItemID.goldyingot, 1);
Recipes.addFurnace(BlockID.depthore, ItemID.depthingot, 1);
Recipes.addFurnace(BlockID.depthore, ItemID.depthingot, 1);
Recipes.addFurnace(BlockID.hollyore, ItemID.hollyingot, 1);
Recipes.addShaped({ id: ItemID.Kracken, count: 1, data: 0 }, ["aba", "bcb", "aba"], ['a', BlockID.ship, 0, 'b', 367, 0, 'c', 368, 0]);
Recipes.addShaped({ id: ItemID.ArsenalCreator, count: 1, data: 0 }, ["aba", "b b", "aba"], ['a', ItemID.ArsenalGuardian, 0, 'b', ItemID.cosmiliteingot, 0]);
Recipes.addShaped({ id: ItemID.CaptainOfArkOfTheCosmos, count: 1, data: 0 }, ["aba", "b b", "aba"], ['a', ItemID.omikroneingot, 0, 'b', ItemID.cosmiliteingot, 0]);
Recipes.addShaped({ id: ItemID.lifecrystal, count: 1, data: 0 }, ["a a", "aba", " a "], ['a', ItemID.heartingot, 0, 'b', BlockID.heartblock, 0]);
Recipes.addShaped({ id: ItemID.fireheart, count: 1, data: 0 }, ["a a", "aba", " a "], ['a', ItemID.ignisusingot, 0, 'b', BlockID.heartblock, 0]);
Recipes.addShaped({ id: ItemID.truekrackensh, count: 1, data: 0 }, ["bab", "a a", "bab"], ['a', ItemID.krackensh, 0, 'b', ItemID.krackeningot, 0]);
Recipes.addShaped({ id: ItemID.astralingot, count: 1, data: 0 }, [" b ", " a ", "   "], ['a', ItemID.stardust, 0, 'b', BlockID.astralore, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookfour, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookthree, 0, 'b', ItemID.krakenbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookfive, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookfour, 0, 'b', ItemID.elementalguardianbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbooksix, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookfive, 0, 'b', ItemID.arsenalguardianbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookseven, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbooksix, 0, 'b', ItemID.arsenalcreatorbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookeight, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookseven, 0, 'b', ItemID.captainofarkofthecosmos, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbooknine, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookeight, 0, 'b', ItemID.devourerdeorumbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookseederus, count: 1, data: 0 }, [" a ", " b ", " c "], ['a', ItemID.arktludumthnbooknine, 0, 'b', ItemID.seederusbook, 0, 'c', ItemID.ekatebrinebook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookcalamitatis, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookseederus, 0, 'b', ItemID.calamitatisbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookvenomcultist, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookcalamitatis, 0, 'b', ItemID.venomkultistbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookhatur, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookvenomcultist, 0, 'b', ItemID.haturbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookciciditdea, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookhatur, 0, 'b', ItemID.ciciditdeabook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookverumdevourerdeorum, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookciciditdea, 0, 'b', ItemID.verumdevourerdeorumbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbooktruncatis, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookverumdevourerdeorum, 0, 'b', ItemID.truncatisbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookverumcalamitatis, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbooktruncatis, 0, 'b', ItemID.verumcalamitatisbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookazatot, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookverumcalamitatis, 0, 'b', ItemID.azatotbook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookchtulhu, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookazatot, 0, 'b', ItemID.chtulhubook, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookfinal, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbookchtulhu, 0, 'b', ItemID.creativechunk, 0]);
Recipes.addShaped({ id: ItemID.CiciditDea, count: 1, data: 0 }, ["aba", "b b", "aba"], ['a', ItemID.venomusingot, 0, 'b', ItemID.meowingot, 0]);
Recipes.addShaped({ id: ItemID.Seederus, count: 1, data: 0 }, [" a ", "b c", " d "], ['a', 86, 0, 'b', ItemID.ectoplasm, 0, 'c', ItemID.hollyingot, 0, 'd', ItemID.astralingot, 0]);
Recipes.addShaped({ id: ItemID.Ekatebrina, count: 1, data: 0 }, [" a ", "b c", " d "], ['a', 35, 0, 'b', ItemID.ectoplasm, 0, 'c', ItemID.hollyingot, 0, 'd', ItemID.astralingot, 0]);
Recipes.addShaped({ id: ItemID.floriteingot, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.profanedessence, 0, 'b', BlockID.floriteore, 0]);
Recipes.addShaped({ id: ItemID.floritesword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.floriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.floritepickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.floriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.floriteaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.floriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.floriteshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.floriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.creativechunk, count: 2, data: 0 }, ["   ", " a ", "   "], ['a', ItemID.creativechunk, 0]);
Recipes.addShaped({ id: ItemID.crystalpickaxe, count: 1, data: 0 }, ["abc", "   ", "   "], ['a', ItemID.flowerpickaxe, 0, 'b', ItemID.shadowspecingot, 0, 'c', ItemID.dpickaxe, 0]);
Recipes.addShaped({ id: ItemID.astralshears, count: 1, data: 0 }, ["   ", " ab", "   "], ['a', ItemID.creativechunk, 0, 'b', ItemID.azatotshears, 0]);
Recipes.addShaped({ id: ItemID.shadowspecsword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.shadowspecingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.shadowspecpickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.shadowspecingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.shadowspecaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.shadowspecingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.shadowspecshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.shadowspecingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.Kron, count: 1, data: 0 }, ["aa ", "aa ", "   "], ['a', ItemID.venomdye, 0]);
Recipes.addShaped({ id: ItemID.azatotingot, count: 1, data: 0 }, ["abc ", "def", "gff"], ['a', ItemID.calamitydust, 0, 'b', ItemID.calamityessence, 0, 'c', ItemID.endothermicenergy, 0, 'd', ItemID.fragmentoftruncatissoul, 0, 'e', ItemID.godjeoda, 0, 'f', ItemID.shadowspecingot, 0, 'g', ItemID.venomusingot, 0]);
Recipes.addShaped({ id: ItemID.azatotshears, count: 1, data: 0 }, ["  a", " aa", "aa "], ['a', ItemID.azatotingot, 0]);
Recipes.addShaped({ id: ItemID.shadowspechelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.shadowspecingot, 0]);
Recipes.addShaped({ id: ItemID.shadowspecchestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.shadowspecingot, 0]);
Recipes.addShaped({ id: ItemID.shadowspecleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.shadowspecingot, 0]);
Recipes.addShaped({ id: ItemID.shadowspecboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.shadowspecingot, 0]);
Recipes.addShaped({ id: ItemID.shadowspecingot, count: 1, data: 0 }, ["abc", "def", "   "], ['a', ItemID.elementalingot, 0, 'b', ItemID.calamityessence, 0, 'c', ItemID.fragmentoftruncatissoul, 0, 'd', ItemID.nightmarefuel, 0, 'e', ItemID.endothermicenergy, 0, 'f', ItemID.fantaplasm, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbook, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.cosmicsingularity, 0, 'b', 340, 0]);
Recipes.addShaped({ id: ItemID.arktludumthnbookthree, count: 1, data: 0 }, [" a ", " b ", "   "], ['a', ItemID.arktludumthnbooktwo, 0, 'b', ItemID.naidabook, 0]);
Recipes.addShaped({ id: ItemID.azatot, count: 1, data: 0 }, ["aaa", "aba", "aca"], ['a', ItemID.shadowspecingot, 0, 'b', ItemID.earther, 0, 'c', ItemID.igniscore, 0]);
Recipes.addShaped({ id: ItemID.truepaladinhammer, count: 1, data: 0 }, ["aba", "cdc", "   "], ['a', ItemID.igniscore, 0, 'b', ItemID.palladiumsword, 0, 'c', ItemID.chaosingot, 0, 'd', ItemID.calamitydust, 0]);
Recipes.addShaped({ id: ItemID.paladinhammer, count: 1, data: 0 }, ["aaa", "aba", "aca"], ['a', ItemID.shadowspecingot, 0, 'b', ItemID.truepaladinhammer, 0, 'c', ItemID.hollyingot, 0]);
Recipes.addShaped({ id: ItemID.VerumCalamitatis, count: 1, data: 0 }, ["aba", "b b", "aba"], ['a', ItemID.fragmentoftruncatissoul, 0, 'b', ItemID.goldyingot, 0]);
Recipes.addShaped({ id: ItemID.Zeus, count: 1, data: 0 }, ["aba", "bcb", "aba"], ['a', ItemID.astralingot, 0, 'b', 20, 0, 'c', 42, 0]);
Recipes.addShaped({ id: ItemID.ugfboots, count: 1, data: 0 }, ["ab ", "   ", "   "], ['a', ItemID.gfboots, 0, 'b', ItemID.azatotdust, 0]);
Recipes.addShaped({ id: ItemID.gfboots, count: 1, data: 0 }, ["ab ", "   ", "   "], ['a', ItemID.germesboots, 0, 'b', ItemID.firerisboots, 0]);
Recipes.addShaped({ id: ItemID.azatotsword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.azatotdust, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.azatotpickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.azatotdust, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.azatotaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.azatotdust, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.azatotshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.azatotdust, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.azatothelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.azatotdust, 0]);
Recipes.addShaped({ id: ItemID.azatotchestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.azatotdust, 0]);
Recipes.addShaped({ id: ItemID.azatotleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.azatotdust, 0]);
Recipes.addShaped({ id: ItemID.azatotboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.azatotdust, 0]);
Recipes.addShaped({ id: ItemID.verumazatot, count: 1, data: 0 }, ["bbb", "bab", "bbb"], ['a', ItemID.azatot, 0, 'b', ItemID.azatotdust, 0]);
Recipes.addShaped({ id: ItemID.chtulhusword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.depthingot, 0, 'b', ItemID.chtulhuleather, 0]);
Recipes.addShaped({ id: ItemID.chtulhupickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.depthingot, 0, 'b', ItemID.chtulhuleather, 0]);
Recipes.addShaped({ id: ItemID.chtulhuaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.depthingot, 0, 'b', ItemID.chtulhuleather, 0]);
Recipes.addShaped({ id: ItemID.chtulhushovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.depthingot, 0, 'b', ItemID.chtulhuleather, 0]);
Recipes.addShaped({ id: ItemID.chtulhuhelmet, count: 1, data: 0 }, ["aba", "b b", "   "], ['a', ItemID.chtulhuleather, 0, 'b', ItemID.depthingot, 0]);
Recipes.addShaped({ id: ItemID.chtulhuchestplate, count: 1, data: 0 }, ["b b", "aba", "bab"], ['a', ItemID.chtulhuleather, 0, 'b', ItemID.depthingot, 0]);
Recipes.addShaped({ id: ItemID.chtulhuleggings, count: 1, data: 0 }, ["bab", "a a", "b b"], ['a', ItemID.chtulhuleather, 0, 'b', ItemID.depthingot, 0]);
Recipes.addShaped({ id: ItemID.chtulhuboots, count: 1, data: 0 }, ["   ", "b b", "a a"], ['a', ItemID.chtulhuleather, 0, 'b', ItemID.depthingot, 0]);
Recipes.addShaped({ id: ItemID.TinEverestraSword, count: 1, data: 0 }, ["bbb", "bab", "bbb"], ['a', ItemID.creativechunk, 0, 'b', 3, 0]);
Recipes.addShaped({ id: ItemID.HellSword, count: 1, data: 0 }, ["bbb", "bab", "bbb"], ['a', ItemID.creativechunk, 0, 'b', 87, 0]);
Recipes.addShaped({ id: ItemID.EndSword, count: 1, data: 0 }, ["bbb", "bab", "bbb"], ['a', ItemID.creativechunk, 0, 'b', 121, 0]);
Recipes.addShaped({ id: ItemID.AzatothSword, count: 1, data: 0 }, ["bbb", "bab", "bbb"], ['a', ItemID.creativechunk, 0, 'b', BlockID.azatotmateria, 0]);
Recipes.addShaped({ id: ItemID.AstralSworda, count: 1, data: 0 }, ["bbb", "cac", "ddd"], ['a', ItemID.creativechunk, 0, 'b', BlockID.astralyellow, 0, 'c', BlockID.astralmid, 0, 'd', BlockID.astralpink, 0]);
Recipes.addShaped({ id: ItemID.MultiverseSword, count: 1, data: 0 }, ["abc", "de ", "   "], ['a', ItemID.TinEverestraSword, 0, 'b', ItemID.HellSword, 0, 'c', ItemID.EndSword, 0, 'd', ItemID.AstralSworda, 0, 'e', ItemID.AzatothSword, 0]);
Recipes.addShaped({ id: ItemID.Ark, count: 1, data: 0 }, ["aaa", "aba", "aaa"], ['a', ItemID.azatotdust, 0, 'b', BlockID.azatotmateria, 0]);
Recipes.addShaped({ id: ItemID.floritehelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.floriteingot, 0]);
Recipes.addShaped({ id: ItemID.floritechestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.floriteingot, 0]);
Recipes.addShaped({ id: ItemID.floriteleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.floriteingot, 0]);
Recipes.addShaped({ id: ItemID.floriteboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.floriteingot, 0]);
Recipes.addShaped({ id: ItemID.flowerpickaxe, count: 1, data: 0 }, ["aaa", "aba", " b "], ['a', ItemID.floriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.dpickaxe, count: 1, data: 0 }, ["aaa", "cbc", " d "], ['a', ItemID.venomusingot, 0, 'b', 280, 0, 'c', ItemID.cosmicsingularity, 0, 'd', ItemID.ignispickaxe, 0]);
Recipes.addShaped({ id: ItemID.dpickaxe, count: 1, data: 0 }, ["aaa", "cbc", " d "], ['a', ItemID.venomusingot, 0, 'b', 280, 0, 'c', ItemID.cosmicsingularity, 0, 'd', ItemID.aquapickaxe, 0]);
Recipes.addShaped({ id: ItemID.dpickaxe, count: 1, data: 0 }, ["aaa", "cbc", " d "], ['a', ItemID.venomusingot, 0, 'b', 280, 0, 'c', ItemID.cosmicsingularity, 0, 'd', ItemID.aerpickaxe, 0]);
Recipes.addShaped({ id: ItemID.dpickaxe, count: 1, data: 0 }, ["aaa", "cbc", " d "], ['a', ItemID.venomusingot, 0, 'b', 280, 0, 'c', ItemID.cosmicsingularity, 0, 'd', ItemID.terrapickaxe, 0]);
Recipes.addShaped({ id: ItemID.galaxitesword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.galaxiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.galaxitepickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.galaxiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.galaxiteaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.galaxiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.galaxiteshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.galaxiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.galaxitehelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.galaxiteingot, 0]);
Recipes.addShaped({ id: ItemID.galaxitechestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.galaxiteingot, 0]);
Recipes.addShaped({ id: ItemID.galaxiteleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.galaxiteingot, 0]);
Recipes.addShaped({ id: ItemID.galaxiteboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.galaxiteingot, 0]);
Recipes.addShaped({ id: ItemID.VerumDevourerDeorum, count: 1, data: 0 }, ["aba", "b b", "aba"], ['a', ItemID.floriteingot, 0, 'b', ItemID.godjeoda, 0]);
Recipes.addShaped({ id: ItemID.galaxia, count: 1, data: 0 }, ["bbb", "bac", "ccc"], ['a', ItemID.omegabiomesword, 0, 'b', ItemID.cosmiliteingot, 0, 'c', ItemID.fantaplasm, 0]);
Recipes.addShaped({ id: ItemID.goldysword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.goldyingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.goldypickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.goldyingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.goldyaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.goldyingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.goldyshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.goldyingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.goldyhelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.goldyingot, 0]);
Recipes.addShaped({ id: ItemID.goldychestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.goldyingot, 0]);
Recipes.addShaped({ id: ItemID.goldyleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.goldyingot, 0]);
Recipes.addShaped({ id: ItemID.goldyboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.goldyingot, 0]);
Recipes.addShaped({ id: ItemID.Ark_of_the_Cosmos, count: 1, data: 0 }, ["gac", "dfe", "cbc"], ['a', ItemID.elementalark, 0, 'b', ItemID.galaxia, 0, 'c', ItemID.fragmentoftruncatissoul, 0, 'd', ItemID.endothermicenergy, 0, 'e', ItemID.nightmarefuel, 0, 'f', BlockID.goldyore, 0, 'g', ItemID.galaxiteingot, 0]);
Recipes.addShaped({ id: ItemID.Omikrone_Ark_of_the_Cosmos, count: 1, data: 0 }, ["bbb", "bab", "bbb"], ['a', ItemID.Ark_of_the_Cosmos, 0, 'b', ItemID.omikroneingot, 0]);
Recipes.addShaped({ id: ItemID.endothermicenergy, count: 1, data: 0 }, ["ab ", "   ", "   "], ['a', ItemID.termoenergy, 0, 'b', 432, 0]);
//ignis
Recipes.addShaped({ id: ItemID.ignissword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.ignisusingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.ignispickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.ignisusingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.ignisaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.ignisusingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.ignisshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.ignisusingot, 0, 'b', 280, 0]);
//armor
Recipes.addShaped({ id: ItemID.ignishelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.ignisusingot, 0]);
Recipes.addShaped({ id: ItemID.ignischestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.ignisusingot, 0]);
Recipes.addShaped({ id: ItemID.ignisleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.ignisusingot, 0]);
Recipes.addShaped({ id: ItemID.ignisboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.ignisusingot, 0]);
//aqua
Recipes.addShaped({ id: ItemID.aquasword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.aquatiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.aquapickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.aquatiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.aquaaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.aquatiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.aquashovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.aquatiteingot, 0, 'b', 280, 0]);
//armor
Recipes.addShaped({ id: ItemID.aquahelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.aquatiteingot, 0]);
Recipes.addShaped({ id: ItemID.aquachestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.aquatiteingot, 0]);
Recipes.addShaped({ id: ItemID.aqualeggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.aquatiteingot, 0]);
Recipes.addShaped({ id: ItemID.aquaboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.aquatiteingot, 0]);
//aer
Recipes.addShaped({ id: ItemID.aersword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.aeriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.aerpickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.aeriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.aeraxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.aeriteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.aershovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.aeriteingot, 0, 'b', 280, 0]);
//armor
Recipes.addShaped({ id: ItemID.aerhelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.aeriteingot, 0]);
Recipes.addShaped({ id: ItemID.aerchestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.aeriteingot, 0]);
Recipes.addShaped({ id: ItemID.aerleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.aeriteingot, 0]);
Recipes.addShaped({ id: ItemID.aerboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.aeriteingot, 0]);
//terra
Recipes.addShaped({ id: ItemID.terrasword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.territeingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.terrapickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.territeingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.terraaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.territeingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.terrashovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.territeingot, 0, 'b', 280, 0]);
//armor
Recipes.addShaped({ id: ItemID.terrahelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.territeingot, 0]);
Recipes.addShaped({ id: ItemID.terrachestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.territeingot, 0]);
Recipes.addShaped({ id: ItemID.terraleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.territeingot, 0]);
Recipes.addShaped({ id: ItemID.terraboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.territeingot, 0]);
//cometite
Recipes.addShaped({ id: ItemID.cometitesword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.cometiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.cometitepickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.cometiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.cometiteaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.cometiteingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.cometiteshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.cometiteingot, 0, 'b', 280, 0]);
//armor
Recipes.addShaped({ id: ItemID.cometitehelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.cometiteingot, 0]);
Recipes.addShaped({ id: ItemID.cometitechestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.cometiteingot, 0]);
Recipes.addShaped({ id: ItemID.cometiteleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.cometiteingot, 0]);
Recipes.addShaped({ id: ItemID.cometiteboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.cometiteingot, 0]);
//holly
Recipes.addShaped({ id: ItemID.hollysword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.hollyingot, 0, 'b', ItemID.cometiteingot, 0]);
Recipes.addShaped({ id: ItemID.hollypickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.hollyingot, 0, 'b', ItemID.cometiteingot, 0]);
Recipes.addShaped({ id: ItemID.hollyaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.hollyingot, 0, 'b', ItemID.cometiteingot, 0]);
Recipes.addShaped({ id: ItemID.hollyshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.hollyingot, 0, 'b', ItemID.cometiteingot, 0]);
//armor
Recipes.addShaped({ id: ItemID.hollyhelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.hollyingot, 0]);
Recipes.addShaped({ id: ItemID.hollychestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.hollyingot, 0]);
Recipes.addShaped({ id: ItemID.hollyleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.hollyingot, 0]);
Recipes.addShaped({ id: ItemID.hollyboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.hollyingot, 0]);
//grandminecraft
Recipes.addShaped({ id: ItemID.grandminecrafthelmet, count: 1, data: 0 }, ["abc", "def", "   "], ['a', ItemID.aerhelmet, 0, 'b', ItemID.aquahelmet, 0, 'c', ItemID.ignishelmet, 0, 'd', ItemID.terrahelmet, 0, 'e', ItemID.hollyhelmet, 0, 'f', ItemID.cometitehelmet, 0]);
Recipes.addShaped({ id: ItemID.grandminecraftchestplate, count: 1, data: 0 }, ["abc", "def", "   "], ['a', ItemID.aerchestplate, 0, 'b', ItemID.aquachestplate, 0, 'c', ItemID.ignischestplate, 0, 'd', ItemID.terrachestplate, 0, 'e', ItemID.hollychestplate, 0, 'f', ItemID.cometitechestplate, 0]);
Recipes.addShaped({ id: ItemID.grandminecraftleggings, count: 1, data: 0 }, ["abc", "def", "   "], ['a', ItemID.aerleggings, 0, 'b', ItemID.aqualeggings, 0, 'c', ItemID.ignisleggings, 0, 'd', ItemID.terraleggings, 0, 'e', ItemID.hollyleggings, 0, 'f', ItemID.cometiteleggings, 0]);
Recipes.addShaped({ id: ItemID.grandminecraftboots, count: 1, data: 0 }, ["abc", "def", "   "], ['a', ItemID.aerboots, 0, 'b', ItemID.aquaboots, 0, 'c', ItemID.ignisboots, 0, 'd', ItemID.terraboots, 0, 'e', ItemID.hollyboots, 0, 'f', ItemID.cometiteboots, 0]);
//tool
Recipes.addShaped({ id: ItemID.grandminecraftsword, count: 1, data: 0 }, ["abc", "def", "ghi"], ['a', ItemID.cometitesword, 0, 'b', ItemID.aquasword, 0, 'c', ItemID.ignissword, 0, 'd', ItemID.terrasword, 0, 'e', ItemID.hollysword, 0, 'f', ItemID.starsword, 0, 'g', ItemID.omegabiomesword, 0, 'h', ItemID.herosword, 0, 'i', ItemID.enchantedsword, 0]);
Recipes.addShaped({ id: ItemID.grandminecraftpickaxe, count: 1, data: 0 }, ["abc", "def", "   "], ['a', ItemID.aerpickaxe, 0, 'b', ItemID.aquapickaxe, 0, 'c', ItemID.ignispickaxe, 0, 'd', ItemID.terrapickaxe, 0, 'e', ItemID.hollypickaxe, 0, 'f', ItemID.cometitepickaxe, 0]);
Recipes.addShaped({ id: ItemID.grandminecraftaxe, count: 1, data: 0 }, ["abc", "def", "   "], ['a', ItemID.aeraxe, 0, 'b', ItemID.aquaaxe, 0, 'c', ItemID.ignisaxe, 0, 'd', ItemID.terraaxe, 0, 'e', ItemID.hollyaxe, 0, 'f', ItemID.cometiteaxe, 0]);
Recipes.addShaped({ id: ItemID.grandminecraftshovel, count: 1, data: 0 }, ["abc", "def", "   "], ['a', ItemID.aershovel, 0, 'b', ItemID.aquashovel, 0, 'c', ItemID.ignisshovel, 0, 'd', ItemID.terrashovel, 0, 'e', ItemID.hollyshovel, 0, 'f', ItemID.cometiteshovel, 0]);
//kracken
Recipes.addShaped({ id: ItemID.krackensword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.krackeningot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.krackenpickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.krackeningot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.krackenaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.krackeningot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.krackenshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.krackeningot, 0, 'b', 280, 0]);
//armor
Recipes.addShaped({ id: ItemID.krackenhelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.krackeningot, 0]);
Recipes.addShaped({ id: ItemID.krackenchestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.krackeningot, 0]);
Recipes.addShaped({ id: ItemID.krackenleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.krackeningot, 0]);
Recipes.addShaped({ id: ItemID.krackenboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.krackeningot, 0]);
Recipes.addShaped({ id: ItemID.cosmilitehelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.cosmiliteingot, 0]);
Recipes.addShaped({ id: ItemID.cosmilitechestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.cosmiliteingot, 0]);
Recipes.addShaped({ id: ItemID.cosmiliteleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.cosmiliteingot, 0]);
Recipes.addShaped({ id: ItemID.cosmiliteboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.cosmiliteingot, 0]);
Recipes.addShaped({ id: ItemID.cosmilitesword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.evilfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmilitepickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.evilfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmiliteaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.evilfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmiliteshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.evilfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmilitesword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.energyfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmilitepickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.energyfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmiliteaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.energyfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmiliteshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.energyfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmilitesword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.coldfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmilitepickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.coldfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmiliteaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.coldfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmiliteshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.coldfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmilitesword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.millionfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmilitepickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.millionfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmiliteaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.millionfragment, 0]);
Recipes.addShaped({ id: ItemID.cosmiliteshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.cosmiliteingot, 0, 'b', ItemID.millionfragment, 0]);
Recipes.addShaped({ id: ItemID.palladiumsword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.palladiumingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.palladiumpickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.palladiumingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.palladiumaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.palladiumingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.palladiumshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.palladiumingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.palladiumhelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.palladiumingot, 0]);
Recipes.addShaped({ id: ItemID.palladiumchestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.palladiumingot, 0]);
Recipes.addShaped({ id: ItemID.palladiumleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.palladiumingot, 0]);
Recipes.addShaped({ id: ItemID.palladiumboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.palladiumingot, 0]);
Recipes.addShaped({ id: ItemID.astralsword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.astralingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.astralpickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.astralingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.astralaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.astralingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.astralshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.astralingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.astralhelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.astralingot, 0]);
Recipes.addShaped({ id: ItemID.astralchestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.astralingot, 0]);
Recipes.addShaped({ id: ItemID.astralleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.astralingot, 0]);
Recipes.addShaped({ id: ItemID.astralboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.astralingot, 0]);
Recipes.addShaped({ id: ItemID.chaossword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.chaosingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.chaospickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.chaosingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.chaosaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.chaosingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.chaosshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.chaosingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.chaoshelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.chaosingot, 0]);
Recipes.addShaped({ id: ItemID.chaoschestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.chaosingot, 0]);
Recipes.addShaped({ id: ItemID.chaosleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.chaosingot, 0]);
Recipes.addShaped({ id: ItemID.chaosboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.chaosingot, 0]);
Recipes.addShaped({ id: ItemID.omikronesword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.omikroneingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.omikronepickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.omikroneingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.omikroneaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.omikroneingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.omikroneshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.omikroneingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.omikronehelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.omikroneingot, 0]);
Recipes.addShaped({ id: ItemID.omikronechestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.omikroneingot, 0]);
Recipes.addShaped({ id: ItemID.omikroneleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.omikroneingot, 0]);
Recipes.addShaped({ id: ItemID.omikroneboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.omikroneingot, 0]);
Recipes.addShaped({ id: ItemID.venomussword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.venomusingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.venomuspickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.venomusingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.venomusaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.venomusingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.venomusshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.venomusingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.venomushelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.venomusingot, 0]);
Recipes.addShaped({ id: ItemID.venomuschestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.venomusingot, 0]);
Recipes.addShaped({ id: ItemID.venomusleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.venomusingot, 0]);
Recipes.addShaped({ id: ItemID.venomusboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.venomusingot, 0]);
Recipes.addShaped({ id: ItemID.meowsword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', ItemID.meowingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.meowpickaxe, count: 1, data: 0 }, ["aaa", " b ", " b "], ['a', ItemID.meowingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.meowaxe, count: 1, data: 0 }, ["aa ", "ab ", " b "], ['a', ItemID.meowingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.meowshovel, count: 1, data: 0 }, [" a ", " b ", " b "], ['a', ItemID.meowingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.meowhelmet, count: 1, data: 0 }, ["aaa", "a a", "   "], ['a', ItemID.meowingot, 0]);
Recipes.addShaped({ id: ItemID.meowchestplate, count: 1, data: 0 }, ["a a", "aaa", "aaa"], ['a', ItemID.meowingot, 0]);
Recipes.addShaped({ id: ItemID.meowleggings, count: 1, data: 0 }, ["aaa", "a a", "a a"], ['a', ItemID.meowingot, 0]);
Recipes.addShaped({ id: ItemID.meowboots, count: 1, data: 0 }, ["   ", "a a", "a a"], ['a', ItemID.meowingot, 0]);
Recipes.addShaped({ id: ItemID.venomusingot, count: 1, data: 0 }, ["   ", "abc", "   "], ['a', ItemID.hollyingot, 0, 'b', ItemID.ectoplasm, 0, 'c', ItemID.venomdye, 0]);
Recipes.addShaped({ id: ItemID.meowmere, count: 1, data: 0 }, [" aa", "aaa", "ba "], ['a', ItemID.meowingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.murrrsama, count: 1, data: 0 }, ["aaa", "aba", "aaa"], ['a', ItemID.meowingot, 0, 'b', ItemID.murasama, 0]);
Recipes.addShaped({ id: ItemID.Calamitatis, count: 1, data: 0 }, ["aba", "bcd", "dee"], ['a', ItemID.termoenergy, 0, 'b', ItemID.nightmarefuel, 0, 'c', 87, 0, 'd', ItemID.ignisessence, 0, 'e', ItemID.hollyingot, 0]);
Recipes.addShaped({ id: ItemID.VenomCultist, count: 1, data: 0 }, ["abc", "b b", "dbe"], ['a', ItemID.evilfragment, 0, 'b', ItemID.chaosingot, 0, 'c', ItemID.energyfragment, 0, 'd', ItemID.coldfragment, 0, 'e', ItemID.millionfragment, 0]);
Recipes.addShaped({ id: ItemID.Hatur, count: 1, data: 0 }, ["abc", "b f", "dfe"], ['a', ItemID.evilfragment, 0, 'b', ItemID.chaosingot, 0, 'c', ItemID.energyfragment, 0, 'd', ItemID.coldfragment, 0, 'e', ItemID.millionfragment, 0, 'f', ItemID.venomdye, 0]);
Recipes.addShaped({ id: ItemID.exalibur, count: 1, data: 0 }, [" aa", "aaa", "ba "], ['a', ItemID.hollyingot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.ancientark, count: 1, data: 0 }, ["abc", "d e", "f g"], ['a', ItemID.aquaessence, 0, 'b', ItemID.exalibur, 0, 'c', ItemID.aeressence, 0, 'd', ItemID.enchantedsword, 0, 'e', ItemID.starsword, 0, 'f', ItemID.terraessence, 0, 'g', ItemID.ignisessence, 0]);
Recipes.addShaped({ id: ItemID.Hollybot, count: 1, data: 0 }, ["abc", "b b", "dbe"], ['a', ItemID.aquacore, 0, 'b', ItemID.cometiteingot, 0, 'c', ItemID.aercore, 0, 'd', ItemID.terracore, 0, 'e', ItemID.igniscore, 0]);
Recipes.addShaped({ id: ItemID.trueexalibur, count: 1, data: 0 }, ["   ", "ab ", "   "], ['a', ItemID.exalibur, 0, 'b', ItemID.brokenherosword, 0]);
Recipes.addShaped({ id: ItemID.herosword, count: 1, data: 0 }, ["bab", "aca", "bab"], ['a', 5, 0, 'b', ItemID.terraessence, 0, 'c', ItemID.brokenherosword, 0]);
Recipes.addShaped({ id: ItemID.trueancientark, count: 1, data: 0 }, [" a ", "b c", " d "], ['a', ItemID.ancientark, 0, 'b', ItemID.elementalcore, 0, 'd', ItemID.brokenherosword, 0, 'c', ItemID.livingshard, 0]);
Recipes.addShaped({ id: ItemID.elementalingot, count: 1, data: 0 }, ["ab ", "сd ", "   "], ['a', ItemID.aeriteingot, 0, 'b', ItemID.territeingot, 0, 'c', ItemID.ignisusingot, 0, 'd', ItemID.aquatiteingot, 0]);
Recipes.addShaped({ id: ItemID.cosmicsingularity, count: 1, data: 0 }, ["ab ", "cd ", "   "], ['a', ItemID.aeressence, 0, 'b', ItemID.terraessence, 0, 'c', ItemID.ignisessence, 0, 'd', ItemID.aquaessence, 0]);
Recipes.addShaped({ id: ItemID.elementalark, count: 1, data: 0 }, [" a ", " b ", "c d"], ['a', ItemID.cosmicsingularity, 0, 'b', ItemID.trueancientark, 0, 'c', ItemID.elementalcore, 0, 'd', ItemID.elementalingot, 0]);
Recipes.addShaped({ id: ItemID.biomesword, count: 1, data: 0 }, ["abc", "def", "ghi"], ['a', 1, 0, 'b', 3, 0, 'c', 12, 0, 'd', 12, 1, 'e', 80, 0, 'f', 87, 0, 'g', 121, 0, 'h', 201, 0, 'i', 268, 0]);
Recipes.addShaped({ id: ItemID.truebiomesword, count: 1, data: 0 }, ["   ", "abc", "   "], ['a', ItemID.livingshard, 0, 'b', ItemID.biomesword, 0, 'c', ItemID.ectoplasm, 0]);
Recipes.addShaped({ id: ItemID.omegabiomesword, count: 1, data: 0 }, [" a ", "b c", " d "], ['a', ItemID.truebiomesword, 0, 'b', ItemID.elementalcore, 0, 'c', ItemID.elementalingot, 0, 'd', ItemID.cosmicsingularity, 0]);
Recipes.addShaped({ id: ItemID.Naida, count: 1, data: 0 }, [" a ", "cbc", " c "], ['a', ItemID.hollyingot, 0, 'b', 373, 0, 'c', 337, 0]);
Recipes.addShaped({ id: ItemID.murasama, count: 1, data: 0 }, ["   ", "ab ", "   "], ['a', ItemID.muramasa, 0, 'b', ItemID.brokenherosword, 0]);
Recipes.addShaped({ id: ItemID.rootenbroadsword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', 367, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.taigasword, count: 1, data: 0 }, [" a ", " a ", " b "], ['a', 17, 1, 'b', 5, 1]);
//core 
Recipes.addShaped({ id: ItemID.aquacore, count: 1, data: 0 }, ["aa ", "aa ", "   "], ['a', ItemID.aquaessence, 0]);
Recipes.addShaped({ id: ItemID.igniscore, count: 1, data: 0 }, ["aa ", "aa ", "   "], ['a', ItemID.ignisessence, 0]);
Recipes.addShaped({ id: ItemID.terracore, count: 1, data: 0 }, ["aa ", "aa ", "   "], ['a', ItemID.terraessence, 0]);
Recipes.addShaped({ id: ItemID.aercore, count: 1, data: 0 }, ["aa ", "aa ", "   "], ['a', ItemID.aeressence, 0]);
Recipes.addShaped({ id: ItemID.krackenkatana, count: 1, data: 0 }, [" aa", "aaa", "ba "], ['a', ItemID.krackeningot, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.krackenblade, count: 1, data: 0 }, [" aa", "aaa", "ba "], ['a', ItemID.krackeningot, 0, 'b', ItemID.hollyingot, 0]);
Recipes.addShaped({ id: ItemID.grandbiomesword, count: 1, data: 0 }, [" a ", "b b", " d "], ['a', ItemID.omegabiomesword, 0, 'b', ItemID.cosmicsingularity, 0, 'd', ItemID.grandminecraftsword, 0]);
Recipes.addShaped({ id: ItemID.ElementalGuardian, count: 1, data: 0 }, ["aba", "bbb", "aba"], ['a', ItemID.elementalcore, 0, 'b', ItemID.krackeningot, 0]);
Recipes.addShaped({ id: ItemID.ArsenalGuardian, count: 1, data: 0 }, [" a ", "bcd", "cec"], ['a', ItemID.evilfragment, 0, 'b', ItemID.energyfragment, 0, 'c', ItemID.krackeningot, 0, 'd', ItemID.coldfragment, 0, 'e', ItemID.millionfragment, 0]);
AltarAPI.BaseBlock(BlockID.azatotbricks, 50);
//cores
AltarAPI.AddAltarRecipe({
    input: {
        2: { id: ItemID.aercore, data: 0 },
        4: { id: ItemID.terracore, data: 0 },
        6: { id: ItemID.igniscore, data: 0 },
        8: { id: ItemID.aquacore, data: 0 },
    },
    output: { id: ItemID.elementalcore, data: 0 },
    energy: 10
});
AltarAPI.AddAltarRecipe({
    input: {
        1: { id: ItemID.aeressence, data: 0 },
        2: { id: ItemID.aeriteingot, data: 0 },
        3: { id: ItemID.aeressence, data: 0 },
        4: { id: ItemID.aeriteingot, data: 0 },
        5: { id: ItemID.aeressence, data: 0 },
        6: { id: ItemID.aeriteingot, data: 0 },
        7: { id: ItemID.aeressence, data: 0 },
        8: { id: ItemID.aeriteingot, data: 0 },
    },
    output: { id: ItemID.aercore, data: 0 },
    energy: 10
});
AltarAPI.AddAltarRecipe({
    input: {
        1: { id: ItemID.terraessence, data: 0 },
        2: { id: ItemID.territeingot, data: 0 },
        3: { id: ItemID.terraessence, data: 0 },
        4: { id: ItemID.territeingot, data: 0 },
        5: { id: ItemID.terraessence, data: 0 },
        6: { id: ItemID.territeingot, data: 0 },
        7: { id: ItemID.terraessence, data: 0 },
        8: { id: ItemID.territeingot, data: 0 },
    },
    output: { id: ItemID.terracore, data: 0 },
    energy: 10
});
AltarAPI.AddAltarRecipe({
    input: {
        1: { id: ItemID.ignisessence, data: 0 },
        2: { id: ItemID.ignisusingot, data: 0 },
        3: { id: ItemID.ignisessence, data: 0 },
        4: { id: ItemID.ignisusingot, data: 0 },
        5: { id: ItemID.ignisessence, data: 0 },
        6: { id: ItemID.ignisusingot, data: 0 },
        7: { id: ItemID.ignisessence, data: 0 },
        8: { id: ItemID.ignisusingot, data: 0 },
    },
    output: { id: ItemID.igniscore, data: 0 },
    energy: 10
});
AltarAPI.AddAltarRecipe({
    input: {
        1: { id: ItemID.aquaessence, data: 0 },
        2: { id: ItemID.aquatiteingot, data: 0 },
        3: { id: ItemID.aquaessence, data: 0 },
        4: { id: ItemID.aquatiteingot, data: 0 },
        5: { id: ItemID.aquaessence, data: 0 },
        6: { id: ItemID.aquatiteingot, data: 0 },
        7: { id: ItemID.aquaessence, data: 0 },
        8: { id: ItemID.aquatiteingot, data: 0 },
    },
    output: { id: ItemID.aquacore, data: 0 },
    energy: 10
});
AltarAPI.AddAltarRecipe({
    input: {
        0: { id: ItemID.elementalcore, data: 0 },
        2: { id: ItemID.aeriteingot, data: 0 },
        4: { id: ItemID.territeingot, data: 0 },
        6: { id: ItemID.ignisusingot, data: 0 },
        8: { id: ItemID.aquatiteingot, data: 0 },
    },
    output: { id: ItemID.elementalingot, data: 0 },
    energy: 10
});
AltarAPI.AddAltarRecipe({
    input: {
        2: { id: ItemID.aeressence, data: 0 },
        4: { id: ItemID.terraessence, data: 0 },
        6: { id: ItemID.ignisessence, data: 0 },
        8: { id: ItemID.aquaessence, data: 0 },
    },
    output: { id: ItemID.cosmicsingularity, data: 0 },
    energy: 10
});
//biome sword
AltarAPI.AddAltarRecipe({
    input: {
        0: { id: 268, data: 0 },
        1: { id: 80, data: 0 },
        2: { id: 1, data: 0 },
        3: { id: 12, data: 0 },
        4: { id: 87, data: 0 },
        5: { id: -217, data: 0 },
        6: { id: -249, data: 0 },
        7: { id: 24, data: 0 },
        8: { id: 3, data: 0 },
    },
    output: { id: ItemID.biomesword, data: 0 },
    energy: 25
});
AltarAPI.AddAltarRecipe({
    input: {
        0: { id: ItemID.biomesword, data: 0 },
        1: { id: ItemID.livingshard, data: 0 },
        2: { id: ItemID.ectoplasm, data: 0 },
        3: { id: ItemID.livingshard, data: 0 },
        4: { id: ItemID.ectoplasm, data: 0 },
        5: { id: ItemID.livingshard, data: 0 },
        6: { id: ItemID.ectoplasm, data: 0 },
        7: { id: ItemID.livingshard, data: 0 },
        8: { id: ItemID.ectoplasm, data: 0 },
    },
    output: { id: ItemID.truebiomesword, data: 0 },
    energy: 30
});
AltarAPI.AddAltarRecipe({
    input: {
        0: { id: ItemID.truebiomesword, data: 0 },
        1: { id: ItemID.krackeningot, data: 0 },
        3: { id: ItemID.cosmicsingularity, data: 0 },
        5: { id: ItemID.elementalingot, data: 0 },
        7: { id: ItemID.elementalcore, data: 0 },
    },
    output: { id: ItemID.omegabiomesword, data: 0 },
    energy: 50
});
//ancient ark
AltarAPI.AddAltarRecipe({
    input: {
        0: { id: ItemID.livingshard, data: 0 },
        1: { id: ItemID.exalibur, data: 0 },
        2: { id: ItemID.aeressence, data: 0 },
        3: { id: ItemID.enchantedsword, data: 0 },
        4: { id: ItemID.terraessence, data: 0 },
        5: { id: ItemID.brokenherosword, data: 0 },
        6: { id: ItemID.ignisessence, data: 0 },
        7: { id: ItemID.starsword, data: 0 },
        8: { id: ItemID.aquaessence, data: 0 },
    },
    output: { id: ItemID.ancientark, data: 0 },
    energy: 50
});
Callback.addCallback("ItemUse", function (coords, item) {
    coords = coords.relative;
    if (item.id == ItemID.Hollybot) {
        Entity.spawn(coords.x, coords.y, coords.z, "ark:holybot");
        Game.message("Призван проклятый механизмм");
        MusicPlayer.play("Holybot.music");
    }
    ;
});
Callback.addCallback("EntityDeath", function (entity, attacker, damageType) {
    if (Entity.getTypeAddon(entity) == "ark:holybot") {
        MusicPlayer.stop();
    }
    ;
});
Callback.addCallback("ItemUse", function (coords, item) {
    coords = coords.relative;
    if (item.id == ItemID.Naida) {
        Entity.spawn(coords.x, coords.y, coords.z, "ark:naida");
        Game.message("Призвана Наида");
    }
    ;
});
Callback.addCallback("ItemUse", function (coords, item) {
    coords = coords.relative;
    if (item.id == ItemID.Kracken) {
        Entity.spawn(coords.x, coords.y, coords.z, "ark:kraken");
        Game.message("Призван Кракен");
    }
    ;
});
ModAPI.addAPICallback("AncientWondersAPI", function (api) {
    var AncientWonders = api.AncientWonders;
    var MagicCore = api.MagicCore;
    var Wands = api.Wands;
    //удвоение стоимости активации всех свитков
    (function () {
        var srolls = Object.keys(Wands.prot);
        for (var id in srolls) {
            var parameters = Object.keys(Wands.prot[srolls[id]].activate);
            for (var parameter in parameters) {
                if (parameter != "aspects")
                    Wands.prot[srolls[id]].activate[parameters[parameter]] = Wands.prot[srolls[id]].activate[parameters[parameter]] * 2;
            }
        }
    })();
    //удвоение параметров класса
    //magic
    AncientWonders.addParameterRegister("mage", "magic", 0, 200, 0);
    AncientWonders.addParameterRegister("warrior", "magic", 0, 30, 0);
    api.AncientWonders.addParameterRegister("necromancer", "magic", 0, 100, 0);
    //protection 
    AncientWonders.addParameterRegister("mage", "protection", 0, 80, 0);
    AncientWonders.addParameterRegister("warrior", "protection", 0, 200, 0);
    api.AncientWonders.addParameterRegister("necromancer", "protection", 0, 60, 0);
    //necromancer 
    AncientWonders.addParameterRegister("mage", "necromancer", 0, 20, 0);
    AncientWonders.addParameterRegister("warrior", "necromancer", 0, 10, 0);
    AncientWonders.addParameterRegister("necromancer", "necromancer", 0, 200, 0);
    //damage type
    function attack(ent, fire, wate, earth, aer, orgDmg, dmg, arm) {
        var damage = orgDmg;
        if (arm["fire"])
            damage -= (orgDmg - dmg) - (dmg / fire);
        if (arm["wate"])
            damage -= (orgDmg - dmg) - (dmg / wate);
        if (arm["earth"])
            damage -= (orgDmg - dmg) - (dmg / earth);
        if (arm["aer"])
            damage -= (orgDmg - dmg) - (dmg / aer);
        if (damage >= 1)
            Entity.damageEntity(ent, damage);
    }
    MagicCore.registerArmorMagicType("wate", {
        damage: function (ent, type, orgDmg, dmg, arm) {
            attack(ent, 1, .1, .1, .4, orgDmg, dmg, arm);
        }
    });
    MagicCore.registerArmorMagicType("earth", {
        damage: function (ent, type, orgDmg, dmg, arm) {
            attack(ent, .2, 0, .1, 1, orgDmg, dmg, arm);
        }
    });
    MagicCore.registerArmorMagicType("fire", {
        damage: function (ent, type, orgDmg, dmg, arm) {
            attack(ent, .9, .1, 1, .5, orgDmg, dmg, arm);
        }
    });
    MagicCore.registerArmorMagicType("aer", {
        damage: function (ent, type, orgDmg, dmg, arm) {
            attack(ent, .6, 1, .1, .2, orgDmg, dmg, arm);
        }
    });
    //armor aer
    MagicCore.setArmor(ItemID.aerhelmet, "magic", 40);
    MagicCore.setArmor(ItemID.aerchestplate, "magic", 40);
    MagicCore.setArmor(ItemID.aerleggings, "magic", 40);
    MagicCore.setArmor(ItemID.aerboots, "magic", 40);
    MagicCore.setArmorMagic(ItemID.aerhelmet, "aer", 1);
    MagicCore.setArmorMagic(ItemID.aerchestplate, "aer", 2);
    MagicCore.setArmorMagic(ItemID.aerleggings, "aer", 1);
    MagicCore.setArmorMagic(ItemID.aerboots, "aer", 1);
    //armor aqua
    MagicCore.setArmor(ItemID.aquahelmet, "magic", 40);
    MagicCore.setArmor(ItemID.aquachestplate, "magic", 40);
    MagicCore.setArmor(ItemID.aqualeggings, "magic", 40);
    MagicCore.setArmor(ItemID.aquaboots, "magic", 40);
    MagicCore.setArmorMagic(ItemID.aquahelmet, "aer", 1);
    MagicCore.setArmorMagic(ItemID.aquachestplate, "aer", 2);
    MagicCore.setArmorMagic(ItemID.aqualeggings, "aer", 1);
    MagicCore.setArmorMagic(ItemID.aquaboots, "aer", 1);
});
ModAPI.addAPICallback("RecipeViewer", function (api) {
    IDRegistry.genItemID("icon_altar");
    Item.createItem("icon_altar", "Алтарь созидания", { name: "altaricon" }, { isTech: true });
    var AltarRecipe = /** @class */ (function (_super) {
        __extends(AltarRecipe, _super);
        function AltarRecipe() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AltarRecipe.prototype.getAllList = function () {
            var AltarRecipes = AltarAPI.Recipes;
            return AltarRecipes;
        };
        ;
        AltarRecipe.prototype.onOpen = function (elements, recipe) {
            var text = elements.get("TextEnergy");
            text.description.text = "\u041D\u0443\u0436\u043D\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u0438: ".concat(recipe.energy);
        };
        ;
        return AltarRecipe;
    }(api.RecipeType));
    ;
    var CreatorAltarRecipe = new AltarRecipe("Алтарь созидания", ItemID.icon_altar, {
        params: {},
        drawing: [
            { type: "bitmap", x: 0, y: 0, bitmap: "AltarStar", width: 997, height: 600 }
        ],
        elements: {
            input0: { type: "slot", x: 465, y: 265, size: 70 },
            input1: { type: "slot", x: 465, y: 20, size: 70 },
            input2: { type: "slot", x: 625, y: 40, size: 70 },
            input3: { type: "slot", x: 790, y: 265, size: 70 },
            input4: { type: "slot", x: 625, y: 480, size: 70 },
            input5: { type: "slot", x: 465, y: 510, size: 70 },
            input6: { type: "slot", x: 300, y: 480, size: 70 },
            input7: { type: "slot", x: 140, y: 265, size: 70 },
            input8: { type: "slot", x: 300, y: 40, size: 70 },
            output0: { type: "slot", x: 0, y: 0, size: 70 },
            TextEnergy: { type: "text", x: 80, y: 0, font: { size: 30 }, text: "\u041D\u0443\u0436\u043D\u043E \u044D\u043D\u0435\u0440\u0433\u0438\u0438: " }
        }
    });
    api.RecipeTypeRegistry.register("creatoraltar", CreatorAltarRecipe);
});
Item.addCreativeGroup("terra_armor", "Земля", [
    ItemID.terrahelmet,
    ItemID.terrachestplate,
    ItemID.terraleggings,
    ItemID.terraboots,
    ItemID.terrasword,
    ItemID.terrapickaxe,
    ItemID.terraaxe,
    ItemID.terrashovel
]);
Item.addCreativeGroup("ignis_armor", "Огонь", [
    ItemID.ignishelmet,
    ItemID.ignischestplate,
    ItemID.ignisleggings,
    ItemID.ignisboots,
    ItemID.ignissword,
    ItemID.ignispickaxe,
    ItemID.ignisaxe,
    ItemID.ignisshovel
]);
Item.addCreativeGroup("aer_armor", "Воздух", [
    ItemID.aerhelmet,
    ItemID.aerchestplate,
    ItemID.aerleggings,
    ItemID.aerboots,
    ItemID.aersword,
    ItemID.aerpickaxe,
    ItemID.aeraxe,
    ItemID.aershovel
]);
Item.addCreativeGroup("aqua_armor", "Вода", [
    ItemID.aquahelmet,
    ItemID.aquachestplate,
    ItemID.aqualeggings,
    ItemID.aquaboots,
    ItemID.aquasword,
    ItemID.aquapickaxe,
    ItemID.aquaaxe,
    ItemID.aquashovel
]);
Item.addCreativeGroup("comet_armor", "Кометит", [
    ItemID.cometitehelmet,
    ItemID.cometitechestplate,
    ItemID.cometiteleggings,
    ItemID.cometiteboots,
    ItemID.cometitesword,
    ItemID.cometitepickaxe,
    ItemID.cometiteaxe,
    ItemID.cometiteshovel
]);
Item.addCreativeGroup("holly_armor", "Святое", [
    ItemID.hollyhelmet,
    ItemID.hollychestplate,
    ItemID.hollyleggings,
    ItemID.hollyboots,
    ItemID.hollysword,
    ItemID.exalibur,
    ItemID.hollypickaxe,
    ItemID.hollyaxe,
    ItemID.hollyshovel
]);
Item.addCreativeGroup("minecraft_armor", "Майнкрафт", [
    ItemID.grandminecrafthelmet,
    ItemID.grandminecraftchestplate,
    ItemID.grandminecraftleggings,
    ItemID.grandminecraftboots,
    ItemID.grandminecraftsword,
    ItemID.grandminecraftpickaxe,
    ItemID.grandminecraftaxe,
    ItemID.grandminecraftshovel
]);
Item.addCreativeGroup("kraken_armor", "Кракен", [
    ItemID.krackenhelmet,
    ItemID.krackenchestplate,
    ItemID.krackenleggings,
    ItemID.krackenboots,
    ItemID.krackensword,
    ItemID.krackenkatana,
    ItemID.krackenblade,
    ItemID.krackenpickaxe,
    ItemID.krackenaxe,
    ItemID.krackenshovel
]);
Item.addCreativeGroup("paladium_armor", "Паладиум", [
    ItemID.palladiumhelmet,
    ItemID.palladiumchestplate,
    ItemID.palladiumleggings,
    ItemID.palladiumboots,
    ItemID.palladiumsword,
    ItemID.palladiumpickaxe,
    ItemID.palladiumaxe,
    ItemID.palladiumshovel
]);
Item.addCreativeGroup("horngod_armor", "Рогатый бог", [
    ItemID.horngodhelmet,
    ItemID.horngodchestplate,
    ItemID.horngodleggings,
    ItemID.horngodboots,
    ItemID.horngodsword,
    ItemID.horngodpickaxe,
    ItemID.horngodaxe,
    ItemID.horngodshovel
]);
Item.addCreativeGroup("astral_armor", "Астрал", [
    ItemID.astralhelmet,
    ItemID.astralchestplate,
    ItemID.astralleggings,
    ItemID.astralboots,
    ItemID.astralsword,
    ItemID.astralpickaxe,
    ItemID.astralaxe,
    ItemID.astralshovel
]);
Item.addCreativeGroup("chaos_armor", "Хаос", [
    ItemID.chaoshelmet,
    ItemID.chaoschestplate,
    ItemID.chaosleggings,
    ItemID.chaosboots,
    ItemID.chaossword,
    ItemID.chaospickaxe,
    ItemID.chaosaxe,
    ItemID.chaosshovel
]);
Item.addCreativeGroup("omicron_armor", "Омикрон", [
    ItemID.omikronhelmet,
    ItemID.omikronchestplate,
    ItemID.omikronleggings,
    ItemID.omikronboots,
    ItemID.omikronsword,
    ItemID.omikronpickaxe,
    ItemID.omikronaxe,
    ItemID.omikronshovel
]);
Item.addCreativeGroup("venomus_armor", "Веномус", [
    ItemID.venomushelmet,
    ItemID.venomuschestplate,
    ItemID.venomusleggings,
    ItemID.venomusboots,
    ItemID.venomussword,
    ItemID.venomuspickaxe,
    ItemID.venomusaxe,
    ItemID.venomusshovel
]);
Item.addCreativeGroup("meow_armor", "Мяу", [
    ItemID.meowhelmet,
    ItemID.meowchestplate,
    ItemID.meowleggings,
    ItemID.meowboots,
    ItemID.meowsword,
    ItemID.meowmere,
    ItemID.murrrsama,
    ItemID.meowpickaxe,
    ItemID.meowaxe,
    ItemID.meowshovel
]);
Item.addCreativeGroup("florite_armor", "Флорит", [
    ItemID.floritehelmet,
    ItemID.floritechestplate,
    ItemID.floriteleggings,
    ItemID.floriteboots,
    ItemID.floritesword,
    ItemID.floritepickaxe,
    ItemID.floriteaxe,
    ItemID.floriteshovel
]);
Item.addCreativeGroup("galaxite_armor", "Галаксит", [
    ItemID.galaxitehelmet,
    ItemID.galaxitechestplate,
    ItemID.galaxiteleggings,
    ItemID.galaxiteboots,
    ItemID.galaxitesword,
    ItemID.galaxitepickaxe,
    ItemID.galaxiteaxe,
    ItemID.galaxiteshovel
]);
Item.addCreativeGroup("goldy_armor", "Злотоносная", [
    ItemID.goldyhelmet,
    ItemID.goldychestplate,
    ItemID.goldyleggings,
    ItemID.goldyboots,
    ItemID.goldysword,
    ItemID.goldypickaxe,
    ItemID.goldyaxe,
    ItemID.goldyshovel
]);
Item.addCreativeGroup("shadowspec_armor", "Шедоуспех", [
    ItemID.shadowspechelmet,
    ItemID.shadowspecchestplate,
    ItemID.shadowspecleggings,
    ItemID.shadowspecboots,
    ItemID.shadowspecsword,
    ItemID.shadowspecpickaxe,
    ItemID.shadowspecaxe,
    ItemID.shadowspecshovel
]);
Item.addCreativeGroup("azatot_armor", "Азатот", [
    ItemID.azatothelmet,
    ItemID.azatotchestplate,
    ItemID.azatotleggings,
    ItemID.azatotboots,
    ItemID.azatotsword,
    ItemID.azatotpickaxe,
    ItemID.azatotaxe,
    ItemID.azatotshovel
]);
Item.addCreativeGroup("chtulhu_armor", "Ктулху", [
    ItemID.chtulhuhelmet,
    ItemID.chtulhuchestplate,
    ItemID.chtulhuleggings,
    ItemID.chtulhuboots,
    ItemID.chtulhusword,
    ItemID.chtulhupickaxe,
    ItemID.chtulhuaxe,
    ItemID.chtulhushovel
]);
Item.addCreativeGroup("ark_armor", "Арк", [
    ItemID.ArkHelmet,
    ItemID.ArkChestplate,
    ItemID.ArkLeggings,
    ItemID.ArkBoots
]);
Item.addCreativeGroup("shard", "Осколки", [
    ItemID.livingshard,
    ItemID.evilfragment,
    ItemID.energyfragment,
    ItemID.coldfragment,
    ItemID.fragmentoftruncatissoul,
    ItemID.millionfragment,
    ItemID.stardust,
    ItemID.blackmagicdust,
    ItemID.calamitydust,
    ItemID.azatotdust
]);
Item.addCreativeGroup("decor_block", "Декоративные блоки", [
    BlockID.cloud,
    BlockID.cometgrass,
    BlockID.cometdirt,
    BlockID.steb,
    BlockID.ship,
    BlockID.rose,
    BlockID.heartblock,
    BlockID.azatotmateria,
    BlockID.azatotbricks,
    BlockID.azatotaltar,
    BlockID.azatotaltaractivated,
    BlockID.azatotaltaroff,
    BlockID.astralyellow,
    BlockID.astralpink,
    BlockID.astralmid
]);
Item.addCreativeGroup("ore", "Руды", [
    BlockID.aeriteore,
    BlockID.aquatiteore,
    BlockID.ignisusore,
    BlockID.ignisusnetherore,
    BlockID.territeore,
    BlockID.cometiteore,
    BlockID.heartore,
    BlockID.hollyore,
    BlockID.astralore,
    BlockID.chaosore,
    BlockID.floriteore,
    BlockID.goldyore,
    BlockID.depthore,
]);
Item.addCreativeGroup("armor_magic", "Магическая броня", [
    ItemID.germesboots,
    ItemID.firerisboots,
    ItemID.gfboots,
    ItemID.ugfboots
]);
Item.addCreativeGroup("core", "Ядра", [
    ItemID.aercore,
    ItemID.aquacore,
    ItemID.igniscore,
    ItemID.terracore,
    ItemID.elementalcore
]);
Item.addCreativeGroup("essence", "Эссенции", [
    ItemID.aeressence,
    ItemID.aquaessence,
    ItemID.ignisessence,
    ItemID.terraessence,
    ItemID.profanedessence,
    ItemID.calamityessence,
]);
Item.addCreativeGroup("teleport", "Телепортеры", [
    ItemID.overworld,
    ItemID.azatotshears,
    ItemID.astralshears
]);
Item.addCreativeGroup("summon boss", "Призыв босcов", [
    ItemID.Hollybot,
    ItemID.Naida,
    ItemID.Phantom,
    ItemID.Kracken,
    ItemID.ElementalGuardian,
    ItemID.ArsenalCreator,
    ItemID.CaptainOfArkOfTheCosmos,
    ItemID.Paladin,
    ItemID.VenomCultist,
    ItemID.Hatur,
    ItemID.CiciditDea,
    ItemID.Seederus,
    ItemID.Ekatebrina,
    ItemID.Calamitatis,
    ItemID.VerumDevourerDeorum,
    ItemID.Truncatis,
    ItemID.VerumCalamitatis,
    ItemID.Zeus,
    ItemID.Kron,
    ItemID.Chtulhu,
    ItemID.Ark,
    ItemID.VerumPtah
]);
Item.addCreativeGroup("food", "Сердца", [
    ItemID.lifecrystal,
    ItemID.fireheart,
    ItemID.elementalheart,
]);
Item.addCreativeGroup("ingot", "Слитки", [
    ItemID.aeriteingot,
    ItemID.territeingot,
    ItemID.ignisusingot,
    ItemID.aquatiteingot,
    ItemID.cometiteingot,
    ItemID.hollyingot,
    ItemID.elementalingot,
    ItemID.cosmicsingularity,
    ItemID.krackeningot,
    ItemID.cosmiliteingot,
    ItemID.omikroneingot,
    ItemID.heartingot,
    ItemID.palladiumingot,
    ItemID.astralingot,
    ItemID.chaosingot,
    ItemID.venomusingot,
    ItemID.meowingot,
    ItemID.floriteingot,
    ItemID.goldyingot,
    ItemID.shadowspecingot,
    ItemID.azatotingot,
    ItemID.depthingot,
    ItemID.galaxiteingot
]);
Item.addCreativeGroup("sword", "Оружие", [
    ItemID.starsword,
    ItemID.enchantedsword,
    ItemID.brokenherosword,
    ItemID.ancientark,
    ItemID.trueexalibur,
    ItemID.herosword,
    ItemID.trueancientark,
    ItemID.elementalark,
    ItemID.biomesword,
    ItemID.truebiomesword,
    ItemID.omegabiomesword,
    ItemID.muramasa,
    ItemID.murasama,
    ItemID.rootenbroadsword,
    ItemID.taigasword,
    ItemID.grandbiomesword,
    ItemID.elementalsword,
    ItemID.ArsenalGuardian,
    ItemID.swordofDNil,
    ItemID.ahalalui,
    ItemID.kartzon,
    ItemID.krackensh,
    ItemID.truekrackensh,
    ItemID.astral,
    ItemID.heavensword,
    ItemID.jackbomb,
    ItemID.rdrill,
    ItemID.earther,
    ItemID.starevil,
    ItemID.hollycollider,
    ItemID.heatedamputation,
    ItemID.ryusukesword,
    ItemID.horsemansword,
    ItemID.northpole,
    ItemID.huskentrophy,
    ItemID.dpickaxe,
    ItemID.exelsus,
    ItemID.dragonevil,
    ItemID.profanedtrident,
    ItemID.burningsky,
    ItemID.galaxia,
    ItemID.Ark_of_the_Cosmos,
    ItemID.Omikrone_Ark_of_the_Cosmos,
    ItemID.earth,
    ItemID.animus,
    ItemID.dragondestroy,
    ItemID.paladinhammer,
    ItemID.redsun,
    ItemID.azatot,
    ItemID.crystalpickaxe,
    ItemID.truepaladinhammer,
    ItemID.lightningbolt,
    ItemID.kronsword,
    ItemID.krslsword,
    ItemID.oahusword,
    ItemID.ptahstaff,
    ItemID.firefall,
    ItemID.verumazatot,
    ItemID.otherplanet,
    ItemID.starkiller,
    ItemID.ankhsword,
    ItemID.True_Ark_of_the_Cosmos,
    ItemID.TinEverestraSword,
    ItemID.HellSword,
    ItemID.EndSword,
    ItemID.AzatothSword,
    ItemID.AstralSworda,
    ItemID.MultiverseSword,
]);
Item.addCreativeGroup("books", "Книги", [
    ItemID.hollybotbook,
    ItemID.naidabook,
    ItemID.krakenbook,
    ItemID.elementalguardianbook,
    ItemID.arsenalguardianbook,
    ItemID.arsenalcreatorbook,
    ItemID.captainofarkofthecosmos,
    ItemID.devourerdeorumbook,
    ItemID.seederusbook,
    ItemID.ekatebrinebook,
    ItemID.calamitatisbook,
    ItemID.ciciditdeabook,
    ItemID.venomkultistbook,
    ItemID.haturbook,
    ItemID.verumdevourerdeorumbook,
    ItemID.truncatisbook,
    ItemID.verumcalamitatisbook,
    ItemID.azatotbook,
    ItemID.chtulhubook,
    ItemID.arktludumthnbook,
    ItemID.arktludumthnbooktwo,
    ItemID.arktludumthnbookthree,
    ItemID.arktludumthnbookfour,
    ItemID.arktludumthnbookfive,
    ItemID.arktludumthnbooksix,
    ItemID.arktludumthnbookseven,
    ItemID.arktludumthnbookeight,
    ItemID.arktludumthnbooknine,
    ItemID.arktludumthnbookseederus,
    ItemID.arktludumthnbookcalamitatis,
    ItemID.arktludumthnbookvenomcultist,
    ItemID.arktludumthnbookhatur,
    ItemID.arktludumthnbookciciditdea,
    ItemID.arktludumthnbookverumdevourerdeorum,
    ItemID.arktludumthnbooktruncatis,
    ItemID.arktludumthnbookverumcalamitatis,
    ItemID.arktludumthnbookazatot,
    ItemID.arktludumthnbookchtulhu,
    ItemID.arktludumthnbookfinal
]);
