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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
  ____                        _     _     ____   ___
 / ___|  ___  _   _ _ __   __| |   / \   |  _ \ |_ _|
 \___ \ / _ \| | | | '_ \ / _` |  / _ \  | |_) | | |
  ___) | (_) | |_| | | | | (_| | / ___ \ |  __/  | |
 |____/ \___/ \__,_|_| |_|\__,_|/_/   \_\|_|    |___|
                                                                
    SoundAPI 3.0 ©WolfTeam ( https://vk.com/wolf___team )
    GitHub: https://github.com/Wolf-Team/SoundAPI
*/
LIBRARY({
    name: "SoundAPI",
    version: 30,
    api: "CoreEngine",
    shared: true
});
var IC = this;
var MIN_RADUIS = 2;
var DEFAULT_RADIUS = 5;
EXPORT("DEFAULT_RADIUS", DEFAULT_RADIUS);
function getConfig() {
    var dir = __packdir__ + "SoundAPI";
    var file = dir + "/config.json";
    if (FileTools.isExists(file))
        return FileTools.ReadJSON(file);
    if (!FileTools.isExists(dir))
        FileTools.mkdir(dir);
    var defaultConfig = {
        experementalCalculateVolume: false
    };
    FileTools.WriteJSON(file, defaultConfig, true);
    return defaultConfig;
}
var config = getConfig();
function exportModule(constructor) {
    alert("exportModule:" + constructor.name);
    EXPORT(constructor.name, constructor);
}
/**
 * Don't export namespace
 */
var Utils;
(function (Utils) {
    var Updatable = /** @class */ (function () {
        function Updatable() {
            this.remove = false;
        }
        Updatable.prototype.getUpdatable = function () {
            var _this = this;
            return {
                remove: false,
                update: function () {
                    if (_this.remove)
                        return (this.remove = _this.remove);
                    _this.update(Debug.sysTime());
                }
            };
        };
        Updatable.prototype.addServerUpdatable = function () {
            this.remove = false;
            IC.Updatable.addUpdatable(this.getUpdatable());
        };
        Updatable.prototype.addClientUpdatable = function () {
            this.remove = false;
            IC.Updatable.addLocalUpdatable(this.getUpdatable());
        };
        return Updatable;
    }());
    Utils.Updatable = Updatable;
})(Utils || (Utils = {}));
/// <reference path="../Utils/Updatable.ts" />
var Attach;
(function (Attach) {
    Attach[Attach["PLAYER"] = 0] = "PLAYER";
    Attach[Attach["ENTITY"] = 1] = "ENTITY";
    Attach[Attach["COORDS"] = 2] = "COORDS";
})(Attach || (Attach = {}));
;
EXPORT("Attach", Attach);
var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["PLAY"] = 0] = "PLAY";
    PlayerState[PlayerState["PAUSE"] = 1] = "PAUSE";
    PlayerState[PlayerState["STOP"] = 2] = "STOP";
})(PlayerState || (PlayerState = {}));
;
EXPORT("PlayerState", PlayerState);
var SoundAPIPlayer = /** @class */ (function (_super) {
    __extends(SoundAPIPlayer, _super);
    function SoundAPIPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attach = Attach.PLAYER;
        _this.entity = 0;
        _this.coords = { x: 0, y: 0, z: 0 };
        _this.dimension = 0;
        _this.radius = 5;
        _this.volume = 1;
        _this.state = PlayerState.STOP;
        return _this;
    }
    SoundAPIPlayer.prototype.play = function () {
        this.state = PlayerState.PLAY;
        this.remove = false;
        return this;
    };
    SoundAPIPlayer.prototype.pause = function () {
        this.state = PlayerState.PAUSE;
        return this;
    };
    SoundAPIPlayer.prototype.stop = function () {
        this.state = PlayerState.STOP;
        this.remove = true;
        return this;
    };
    SoundAPIPlayer.prototype.getState = function () {
        return this.state;
    };
    SoundAPIPlayer.prototype.setVolume = function (volume) { this.volume = volume; };
    ;
    SoundAPIPlayer.prototype.getVolume = function () { return this.volume; };
    ;
    SoundAPIPlayer.prototype.attachToCoord = function (pos, dimension, radius) {
        if (radius === void 0) { radius = DEFAULT_RADIUS; }
        if (!Utils.inWorld())
            throw new Error("You can attach the Player to the coordinates only in the world.");
        this.attach = Attach.COORDS;
        this.coords = pos;
        this.dimension = dimension;
        this.radius = radius;
        this.registerUpdatable();
        return this;
    };
    SoundAPIPlayer.prototype.attachToEntity = function (ent, radius) {
        if (radius === void 0) { radius = DEFAULT_RADIUS; }
        if (!Utils.inWorld())
            throw new Error("You can attach the Player to an entity only in the world.");
        if (ent == IC.Player.get())
            return this.attachToPlayer();
        this.attach = Attach.ENTITY;
        this.entity = ent;
        this.radius = radius;
        this.registerUpdatable();
        return this;
    };
    SoundAPIPlayer.prototype.attachToPlayer = function () {
        this.attach = Attach.PLAYER;
        if (World.isWorldLoaded())
            this.entity = IC.Player.get();
        return this;
    };
    SoundAPIPlayer.prototype.getAttach = function () { return this.attach; };
    SoundAPIPlayer.prototype.getPosition = function () {
        return this.attach == Attach.ENTITY ? Entity.getPosition(this.entity) : this.coords;
    };
    SoundAPIPlayer.prototype.getDimension = function () {
        return this.attach == Attach.ENTITY ? Entity.getDimension(this.entity) : this.dimension;
    };
    SoundAPIPlayer.prototype.getEntity = function () { return this.entity; };
    SoundAPIPlayer.prototype.getRadius = function () { return Math.max(this.radius, MIN_RADUIS); };
    //Updatable
    SoundAPIPlayer.prototype.tick = function (time) { };
    ;
    SoundAPIPlayer.prototype.update = function (time) {
        this.tick(time);
    };
    ;
    SoundAPIPlayer.prototype.registerUpdatable = function () {
        this.addClientUpdatable();
        return this;
    };
    SoundAPIPlayer = __decorate([
        exportModule
    ], SoundAPIPlayer);
    return SoundAPIPlayer;
}(Utils.Updatable));
/* https://developer.android.com/reference/android/media/MediaPlayer */
/// <reference path="Player.ts" />
var jMediaPlayer = android.media.MediaPlayer;
var MediaPlayer = /** @class */ (function (_super) {
    __extends(MediaPlayer, _super);
    function MediaPlayer() {
        var _this = _super.call(this) || this;
        _this.media = new jMediaPlayer();
        _this.path = null;
        _this.sid = null;
        _this.completionEvent = function () { };
        _this.media.setOnCompletionListener(new jMediaPlayer.OnCompletionListener({
            onCompletion: function () {
                _super.prototype.stop.call(_this);
                _this.completionEvent();
            }
        }));
        return _this;
    }
    MediaPlayer_1 = MediaPlayer;
    MediaPlayer.register = function (sid, path) {
        if (this.list.hasOwnProperty(sid))
            throw new Error("Path \"" + sid + "\" was been registered!");
        this.list[sid] = path;
    };
    MediaPlayer.unregister = function (sid) {
        if (!this.list.hasOwnProperty(sid))
            throw new Error("Path \"" + sid + "\" was not been registered!");
        delete this.list[sid];
    };
    MediaPlayer.get = function (sid) {
        if (!this.list.hasOwnProperty(sid))
            throw new Error("Path \"" + sid + " \" is not registered!");
        return this.list[sid];
    };
    MediaPlayer.prototype.setSource = function (src) {
        this.media.reset();
        this.path = src;
        Utils.Logger.LogA("Path: " + this.path, "MediaPlayer");
        this.media.setDataSource(this.path);
        this.media.prepare();
    };
    MediaPlayer.prototype.play = function (sid) {
        if (sid)
            this.setSid(sid);
        if (this.path === null)
            throw new Error("Sourse not set");
        var volume = this.calcVolume();
        this.media.setVolume(volume.left, volume.right);
        this.media.start();
        return _super.prototype.play.call(this);
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
        return _super.prototype.pause.call(this);
    };
    MediaPlayer.prototype.stop = function () {
        this.media.stop();
        this.media.prepare();
        return _super.prototype.stop.call(this);
    };
    MediaPlayer.prototype.setLooping = function (looping) {
        this.media.setLooping(looping);
    };
    MediaPlayer.prototype.setOnCompletion = function (action) {
        this.completionEvent = action;
        return this;
    };
    MediaPlayer.prototype.getSid = function () {
        return this.sid;
    };
    MediaPlayer.prototype.setSid = function (sid) {
        this.sid = sid;
        this.setSource(MediaPlayer_1.get(sid));
    };
    MediaPlayer.prototype.release = function () {
        this.stop();
        this.media.release();
    };
    MediaPlayer.prototype.calcVolume = function () {
        var volume = Utils.getMusicVolume(this.getVolume());
        var attach = this.getAttach();
        switch (attach) {
            case Attach.ENTITY:
                volume = Utils.calcVolume(volume, this.getRadius(), this.getEntity());
                break;
            case Attach.COORDS:
                volume = Utils.calcVolume(volume, this.getRadius(), this.getPosition());
                break;
        }
        return volume;
    };
    MediaPlayer.prototype.tick = function () {
        if (this.getState() != PlayerState.PLAY)
            return;
        var volume = this.calcVolume();
        this.media.setVolume(volume.left, volume.right);
    };
    var MediaPlayer_1;
    MediaPlayer.list = {};
    MediaPlayer = MediaPlayer_1 = __decorate([
        exportModule
    ], MediaPlayer);
    return MediaPlayer;
}(SoundAPIPlayer));
var jSoundPool = android.media.SoundPool;
var AudioAttributes = android.media.AudioAttributes;
var AudioManager = android.media.AudioManager;
var defaultSettings = {
    stream_type: AudioManager.STREAM_MUSIC,
    srcQuality: 0,
    content_type: AudioAttributes.CONTENT_TYPE_SONIFICATION
};
var SoundLoop;
(function (SoundLoop) {
    SoundLoop[SoundLoop["INFINITE"] = -1] = "INFINITE";
    SoundLoop[SoundLoop["NONE"] = 0] = "NONE";
})(SoundLoop || (SoundLoop = {}));
EXPORT("SoundLoop", SoundLoop);
var SoundPool = /** @class */ (function () {
    function SoundPool(soundPool) {
        this.list = {};
        this.soundPool = soundPool;
    }
    SoundPool_1 = SoundPool;
    SoundPool.initAudioAttributes = function (type, flags) {
        if (type === void 0) { type = AudioAttributes.CONTENT_TYPE_SONIFICATION; }
        var builder = new AudioAttributes.Builder();
        builder.setUsage(AudioAttributes.USAGE_GAME);
        builder.setContentType(type);
        if (flags)
            builder.setFlags(flags);
        return builder.build();
    };
    SoundPool.init_21 = function (maxStreams, type, flags) {
        var builder = new jSoundPool.Builder();
        builder.setMaxStreams(maxStreams);
        builder.setAudioAttributes(this.initAudioAttributes(type, flags));
        return builder.build();
    };
    SoundPool.init_1 = function (maxStreams, streamType, srcQuality) {
        if (streamType === void 0) { streamType = AudioManager.STREAM_MUSIC; }
        if (srcQuality === void 0) { srcQuality = 0; }
        return new jSoundPool(maxStreams, streamType, srcQuality);
    };
    SoundPool.init = function (maxStreams, settings) {
        if (settings === void 0) { settings = defaultSettings; }
        return new SoundPool_1(android.os.Build.VERSION.SDK_INT >= 21 ?
            this.init_21(maxStreams, settings.content_type, settings.flags) :
            this.init_1(maxStreams, settings.stream_type, settings.srcQuality));
    };
    SoundPool.prototype.register = function (sid, file, priority) {
        if (priority === void 0) { priority = 1; }
        if (this.list.hasOwnProperty(sid))
            throw new Error("Path \"" + sid + "\" was been registered!");
        this.list[sid] = {
            id: this.soundPool.load(file, priority),
            sid: sid,
            file: file,
            duration: Utils.getDuration(file)
        };
    };
    SoundPool.prototype.unregister = function (sid) {
        if (!this.list.hasOwnProperty(sid))
            throw new Error("Path \"" + sid + "\" was not been registered!");
        this.soundPool.unload(this.list[sid].id);
        delete this.list[sid];
    };
    SoundPool.prototype.getPlayer = function (sid) {
        return new SoundPlayer(this.soundPool, this.list[sid]);
    };
    SoundPool.prototype.play = function (sid, loop) {
        if (loop === void 0) { loop = SoundLoop.NONE; }
        return this.getPlayer(sid).play(loop);
    };
    SoundPool.prototype.pause = function () {
        this.soundPool.autoPause();
    };
    SoundPool.prototype.resume = function () {
        this.soundPool.autoResume();
    };
    SoundPool.prototype.release = function () {
        this.soundPool.release();
    };
    var SoundPool_1;
    SoundPool = SoundPool_1 = __decorate([
        exportModule
    ], SoundPool);
    return SoundPool;
}());
/// <reference path="SoundPool.ts" />
var SoundPlayer = /** @class */ (function (_super) {
    __extends(SoundPlayer, _super);
    function SoundPlayer(soundPool, soundInfo) {
        var _this = _super.call(this) || this;
        _this.soundPool = soundPool;
        _this.soundInfo = soundInfo;
        _this.timer = new Utils.Timer({
            endTimer: function () {
                _this.stop();
            }
        });
        _this.completionEvent = function () { };
        _this.duration = 0;
        return _this;
    }
    SoundPlayer.prototype.play = function (loop) {
        if (loop === void 0) { loop = SoundLoop.NONE; }
        if (this.startTime == null) {
            var volume = this.calcVolume();
            var priority = loop == SoundLoop.INFINITE ? 2 : loop == SoundLoop.NONE ? 0 : 1;
            this.streamId = this.soundPool.play(this.soundInfo.id, volume.left, volume.right, priority, loop, 1);
            this.startTime = Debug.sysTime();
            this.loop = loop;
            this.duration = this.soundInfo.duration * (this.loop + 1);
            this.timer.start(this.duration);
        }
        else {
            this.timer.start(this.duration - this.startTime + this.pauseTime);
            this.startTime += Debug.sysTime() - this.pauseTime;
            this.soundPool.resume(this.streamId);
        }
        return _super.prototype.play.call(this);
    };
    SoundPlayer.prototype.pause = function () {
        this.soundPool.pause(this.streamId);
        this.pauseTime = Debug.sysTime();
        this.timer.stop();
        return _super.prototype.pause.call(this);
    };
    SoundPlayer.prototype.stop = function () {
        this.soundPool.stop(this.streamId);
        this.startTime = this.streamId = this.pauseTime = 0;
        this.timer.stop();
        this.completionEvent();
        return _super.prototype.stop.call(this);
    };
    SoundPlayer.prototype.setOnCompletion = function (action) {
        this.completionEvent = action;
        return this;
    };
    ;
    SoundPlayer.prototype.calcVolume = function () {
        var volume = Utils.getSoundVolume(this.getVolume());
        var attach = this.getAttach();
        switch (attach) {
            case Attach.ENTITY:
                volume = Utils.calcVolume(volume, this.getRadius(), this.getEntity());
                break;
            case Attach.COORDS:
                volume = Utils.calcVolume(volume, this.getRadius(), this.getPosition());
                break;
        }
        return volume;
    };
    SoundPlayer.prototype.tick = function (time) {
        if (!this.streamId || this.getState() != PlayerState.PLAY)
            return;
        var volume = this.calcVolume();
        this.soundPool.setVolume(this.streamId, volume.left, volume.right);
    };
    SoundPlayer = __decorate([
        exportModule
    ], SoundPlayer);
    return SoundPlayer;
}(SoundAPIPlayer));
var NetworkPlayer = /** @class */ (function (_super) {
    __extends(NetworkPlayer, _super);
    function NetworkPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkPlayer.prototype.init = function () {
        this.nEntity = this.getNetworkEntity();
    };
    NetworkPlayer.prototype.send = function (name, data) {
        if (this.nEntity)
            this.nEntity.send(name, data);
    };
    NetworkPlayer.prototype.pause = function () {
        this.send("pause", {});
        return _super.prototype.pause.call(this);
    };
    NetworkPlayer.prototype.stop = function () {
        this.send("stop", {});
        return _super.prototype.stop.call(this);
    };
    NetworkPlayer.prototype.attachToCoord = function (pos, dimension, radius) {
        if (radius === void 0) { radius = DEFAULT_RADIUS; }
        this.send("attachToCoord", { pos: pos, dimension: dimension, radius: radius });
        return _super.prototype.attachToCoord.call(this, pos, dimension, radius);
    };
    NetworkPlayer.prototype.attachToEntity = function (ent, radius) {
        if (radius === void 0) { radius = DEFAULT_RADIUS; }
        this.send("attachToEntity", { ent: ent, radius: radius });
        return _super.prototype.attachToEntity.call(this, ent, radius);
    };
    NetworkPlayer.prototype.attachToPlayer = function () {
        throw new Error();
    };
    NetworkPlayer.prototype.update = function (time) {
        if (this.getAttach() == Attach.ENTITY) {
            var coords = this.getPosition();
            this.nEntity.getClients().
                setupDistancePolicy(coords.x, coords.y, coords.z, this.getDimension(), this.radius);
        }
        this.tick(time);
    };
    NetworkPlayer.prototype.destroy = function () {
        this.nEntity.remove();
        this.remove = true;
    };
    NetworkPlayer.prototype.registerUpdatable = function () {
        this.addServerUpdatable();
        return this;
    };
    NetworkPlayer = __decorate([
        exportModule
    ], NetworkPlayer);
    return NetworkPlayer;
}(SoundAPIPlayer));
/// <reference path="NetworkPlayer.ts" />
var NetworkMediaPlayer = /** @class */ (function (_super) {
    __extends(NetworkMediaPlayer, _super);
    function NetworkMediaPlayer(source, radius) {
        if (radius === void 0) { radius = DEFAULT_RADIUS; }
        var _this = _super.call(this) || this;
        _this.remove = false;
        _this.sid = null;
        _this.completionEvent = function () { };
        if (typeof source == "number")
            _this.attachToEntity(source, radius);
        else
            _this.attachToCoord(source.position, source.dimension, radius);
        return _this;
    }
    NetworkMediaPlayer_1 = NetworkMediaPlayer;
    NetworkMediaPlayer.getPlayer = function (info) {
        var player = new MediaPlayer();
        switch (info.attach) {
            case Attach.ENTITY:
            case Attach.PLAYER:
                player.attachToEntity(info.entity, info.radius);
                break;
            case Attach.COORDS:
                player.attachToCoord(info.position, info.dimension, info.radius);
                break;
        }
        if (info.sid)
            player.setSid(info.sid);
        if (info.state == PlayerState.PLAY)
            player.play();
        return player;
    };
    NetworkMediaPlayer.prototype.getSid = function () {
        return this.sid;
    };
    NetworkMediaPlayer.prototype.play = function (sid) {
        if (sid)
            this.sid = sid;
        else if (this.sid === null)
            throw new Error("Sourse not set");
        this.send("play", { sid: sid });
        return _super.prototype.play.call(this);
    };
    NetworkMediaPlayer.prototype.setOnCompletion = function (action) {
        this.completionEvent = action;
        return this;
    };
    NetworkMediaPlayer.prototype.OnCompletion = function () {
        this.completionEvent();
    };
    NetworkMediaPlayer.prototype.getNetworkEntity = function () {
        return new NetworkEntity(NetworkMediaPlayer_1.entityType, this);
    };
    var NetworkMediaPlayer_1;
    NetworkMediaPlayer.entityType = (function () {
        var type = new NetworkEntityType("network_media_player");
        type.setClientListSetupListener(function (list, target, entity) {
            //target = From new NetworkEntity(type, target)
            var coords = target.getPosition();
            list.setupDistancePolicy(coords.x, coords.y, coords.z, target.getDimension(), target.getRadius());
        });
        type.setClientAddPacketFactory(function (target, entity, client) {
            //target = From new NetworkEntity(type, target)
            return {
                attach: target.getAttach(),
                position: target.getPosition(),
                entity: target.getEntity(),
                dimension: target.getDimension(),
                radius: target.getRadius(),
                sid: target.getSid(),
                state: target.getState()
            };
        });
        type.setClientEntityAddedListener(function (entity, packet) {
            //packet = From setClientAddPacketFactory((...) => packet)
            var player = NetworkMediaPlayer_1.getPlayer(packet);
            player.setOnCompletion(function () {
                entity.send("stop", {});
            });
            return player;
        });
        type.setClientEntityRemovedListener(function (target, entity, object) {
            alert(object);
            //target = From setClientEntityAddedListener((...) => target)
            target.release();
        });
        type.addClientPacketListener("play", function (target, e, packet) {
            target.play(packet.sid);
        });
        type.addClientPacketListener("pause", function (target) {
            target.pause();
        });
        type.addClientPacketListener("stop", function (target) {
            target.stop();
        });
        type.addServerPacketListener("stop", function (target, entity, client, data, meta) {
            target.pause();
            target.OnCompletion();
        });
        return type;
    })();
    NetworkMediaPlayer = NetworkMediaPlayer_1 = __decorate([
        exportModule
    ], NetworkMediaPlayer);
    return NetworkMediaPlayer;
}(NetworkPlayer));
var NetworkSoundPlayer = /** @class */ (function (_super) {
    __extends(NetworkSoundPlayer, _super);
    function NetworkSoundPlayer(name, sid) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.sid = sid;
        return _this;
    }
    NetworkSoundPlayer_1 = NetworkSoundPlayer;
    NetworkSoundPlayer.getPlayer = function (info) {
        var player = NetworkSoundPool.getSoundPool(info.name).getPlayer(info.sid);
        switch (info.attach) {
            case Attach.ENTITY:
            case Attach.PLAYER:
                player.attachToEntity(info.entity, info.radius);
                break;
            case Attach.COORDS:
                player.attachToCoord(info.position, info.dimension, info.radius);
                break;
        }
        return player;
    };
    NetworkSoundPlayer.prototype.play = function (loop) {
        if (loop === void 0) { loop = SoundLoop.NONE; }
        this.send("play", { loop: loop });
        return _super.prototype.play.call(this);
    };
    NetworkSoundPlayer.prototype.getNetworkEntity = function () {
        return new NetworkEntity(NetworkSoundPlayer_1.entityType, this);
    };
    NetworkSoundPlayer.prototype.setOnCompletion = function (action) {
        throw new Error("Method not implemented.");
        return this;
    };
    var NetworkSoundPlayer_1;
    NetworkSoundPlayer.entityType = (function () {
        var type = new NetworkEntityType("network_sound_player");
        type.setClientListSetupListener(function (list, target, entity) {
            var coords = target.getPosition();
            list.setupDistancePolicy(coords.x, coords.y, coords.z, target.getDimension(), target.getRadius());
        });
        type.setClientAddPacketFactory(function (target) {
            return {
                name: target.name,
                attach: target.getAttach(),
                position: target.getPosition(),
                entity: target.getEntity(),
                dimension: target.getDimension(),
                radius: target.getRadius(),
                sid: target.sid,
                state: target.getState()
            };
        });
        type.setClientEntityAddedListener(function (entity, target) {
            return NetworkSoundPlayer_1.getPlayer(target).setOnCompletion(function () {
                entity.send("stop", {});
            });
        });
        type.setClientEntityRemovedListener(function (target) {
            target.stop();
        });
        type.addClientPacketListener("play", function (target, e, data) {
            target.play(data.loop);
        });
        type.addServerPacketListener("stop", function (target, entity) {
            entity.remove();
        });
        return type;
    })();
    NetworkSoundPlayer = NetworkSoundPlayer_1 = __decorate([
        exportModule
    ], NetworkSoundPlayer);
    return NetworkSoundPlayer;
}(NetworkPlayer));
var NetworkSoundPool = /** @class */ (function () {
    function NetworkSoundPool(name, soundPool) {
        this.name = name;
        this.soundPool = soundPool;
    }
    NetworkSoundPool_1 = NetworkSoundPool;
    NetworkSoundPool.getSoundPool = function (name) {
        return this.pools[name];
    };
    NetworkSoundPool.register = function (name, streams, settings) {
        if (this.pools.hasOwnProperty(name))
            throw new Error("NetworkSoundPool with name \"" + name + "\" was been register.");
        // Create SoundPool
        this.pools[name] = SoundPool.init(streams, settings);
        return this.list[name] = new NetworkSoundPool_1(name, this.pools[name]);
    };
    NetworkSoundPool.get = function (name) {
        return this.list[name] || null;
    };
    NetworkSoundPool.getOrRegister = function (name, streams, settings) {
        return this.get(name) || this.register(name, streams, settings);
    };
    NetworkSoundPool.prototype.getPlayer = function (sid) {
        return new NetworkSoundPlayer(this.name, sid);
    };
    NetworkSoundPool.prototype.play = function (sid, source, radius, loop) {
        if (radius === void 0) { radius = DEFAULT_RADIUS; }
        if (loop === void 0) { loop = SoundLoop.NONE; }
        var player = this.getPlayer(sid);
        if (typeof source == "number")
            player.attachToEntity(source, radius);
        else
            player.attachToCoord(source.position, source.dimension, radius);
        player.play(loop);
        return player;
    };
    NetworkSoundPool.prototype.register = function (sid, path, priority) {
        if (priority === void 0) { priority = 1; }
        this.soundPool.register(sid, path, priority);
    };
    NetworkSoundPool.prototype.unregister = function (sid) {
        this.soundPool.unregister(sid);
    };
    var NetworkSoundPool_1;
    NetworkSoundPool.pools = {};
    NetworkSoundPool.list = {};
    NetworkSoundPool = NetworkSoundPool_1 = __decorate([
        exportModule
    ], NetworkSoundPool);
    return NetworkSoundPool;
}());
/**
 * Don't export namespace
 */
var Utils;
(function (Utils) {
    var File = java.io.File;
    var FileWatcherModify = /** @class */ (function () {
        function FileWatcherModify(path) {
            var _this = this;
            this.path = path;
            this._event = function () { };
            this.endTimer = function () {
                var lastModifed = _this.lastModified();
                if (lastModifed != _this._lastModifed)
                    _this._event(lastModifed, _this._lastModifed);
                _this._lastModifed = lastModifed;
            };
            this._file = new File(this.path);
            this._lastModifed = this.lastModified();
            this._timer = new Utils.Timer(this);
        }
        FileWatcherModify.prototype.lastModified = function () {
            return this._file.lastModified();
        };
        FileWatcherModify.prototype.setOnEvent = function (action) {
            this._event = action;
        };
        FileWatcherModify.prototype.start = function () {
            this._timer.start(1000, Utils.TimerLoop.INFINITE);
        };
        FileWatcherModify.prototype.stop = function () {
            this._timer.stop();
        };
        return FileWatcherModify;
    }());
    Utils.FileWatcherModify = FileWatcherModify;
})(Utils || (Utils = {}));
/**
 * Don't export namespace
 */
var Utils;
(function (Utils) {
    var Logger;
    (function (Logger) {
        var TAG = "SoundAPI";
        function Log(message, tag) {
            if (!tag)
                tag = TAG;
            else
                tag = TAG + "][" + tag;
            IC.Logger.Log(message, tag);
        }
        Logger.Log = Log;
        function LogA(message, tag) {
            Log(message, tag);
            if (Game.isDeveloperMode)
                alert(message);
        }
        Logger.LogA = LogA;
    })(Logger = Utils.Logger || (Utils.Logger = {}));
})(Utils || (Utils = {}));
/**
 * Don't export namespace
 */
var Utils;
(function (Utils) {
    var Thread = java.lang.Thread;
    var Runnable = java.lang.Runnable;
    var TimerLoop;
    (function (TimerLoop) {
        TimerLoop[TimerLoop["INFINITE"] = -1] = "INFINITE";
        TimerLoop[TimerLoop["NONE"] = 0] = "NONE";
    })(TimerLoop = Utils.TimerLoop || (Utils.TimerLoop = {}));
    var Timer = /** @class */ (function () {
        function Timer(hundler) {
            var _this = this;
            this._loop = 1;
            this._time = 0;
            this._run = false;
            if (typeof hundler == "function")
                hundler = { endTimer: hundler };
            this._handler = hundler;
            this._thread = new Thread(new Runnable({
                run: function () {
                    var time = Debug.sysTime();
                    while (_this._run && (_this._loop == TimerLoop.INFINITE || _this._loop--)) {
                        if (_this._handler.startTimer)
                            _this._handler.startTimer();
                        while (_this._run) {
                            if (Debug.sysTime() - time < _this._time)
                                continue;
                            _this._handler.endTimer();
                        }
                        if (_this._loop == 0)
                            _this._run = false;
                    }
                }
            }));
        }
        Timer.prototype.start = function (time, loop) {
            if (loop === void 0) { loop = TimerLoop.NONE; }
            this._loop = loop == TimerLoop.INFINITE ? loop : loop + 1;
            this._run = true;
            this._time = time;
            this._thread.start();
        };
        Timer.prototype.stop = function () {
            this._loop = 0;
            this._run = false;
        };
        return Timer;
    }());
    Utils.Timer = Timer;
})(Utils || (Utils = {}));
/**
 * Don't export namespace
 */
var Utils;
(function (Utils) {
    var cacheDurstion = {};
    function readDuration(file) {
        var mmr = new android.media.MediaMetadataRetriever();
        mmr.setDataSource(file);
        var duration = parseInt(mmr.extractMetadata(android.media.MediaMetadataRetriever.METADATA_KEY_DURATION));
        return duration;
    }
    function getDuration(file, ignoreCahce) {
        if (ignoreCahce === void 0) { ignoreCahce = false; }
        if (ignoreCahce || !cacheDurstion.hasOwnProperty(file))
            cacheDurstion[file] = readDuration(file);
        return cacheDurstion[file];
    }
    Utils.getDuration = getDuration;
    function inWorld() {
        return World.isWorldLoaded() || Network.inRemoteWorld();
    }
    Utils.inWorld = inWorld;
})(Utils || (Utils = {}));
/**
 * Don't export namespace
 */
var Utils;
(function (Utils) {
    var Vector;
    (function (Vector) {
        function getDistance(A, B) {
            return Math.sqrt(Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2) + Math.pow(A.z - B.z, 2));
        }
        Vector.getDistance = getDistance;
    })(Vector = Utils.Vector || (Utils.Vector = {}));
})(Utils || (Utils = {}));
/**
 * Don't export namespace
 */
var Utils;
(function (Utils) {
    var Volume;
    (function (Volume) {
        var settings_path = FileTools.root + "/games/com.mojang/minecraftpe/options.txt";
        var SoundVolume = 1;
        var MusicVolume = 1;
        function resetMCPEVolume() {
            var settings = FileTools.ReadKeyValueFile(settings_path);
            var GlobalVolume = parseFloat(settings["audio_main"]);
            SoundVolume = parseFloat(settings['audio_sound']) * GlobalVolume;
            MusicVolume = parseFloat(settings['audio_music']) * GlobalVolume;
        }
        resetMCPEVolume();
        var watcher = new Utils.FileWatcherModify(settings_path);
        watcher.setOnEvent(resetMCPEVolume);
        watcher.start();
        function getSoundVolume() {
            return SoundVolume;
        }
        Volume.getSoundVolume = getSoundVolume;
        function getMusicVolume() {
            return MusicVolume;
        }
        Volume.getMusicVolume = getMusicVolume;
    })(Volume = Utils.Volume || (Utils.Volume = {}));
    function calcVolume(volume, radius, source, listener) {
        if (listener === void 0) { listener = Player.get(); }
        radius -= MIN_RADUIS;
        if (typeof source == "number")
            source = Entity.getPosition(source);
        var listenerPosition = Entity.getPosition(listener);
        var distance = Math.max(0, Utils.Vector.getDistance(source, listenerPosition) - MIN_RADUIS);
        var dVolume = Math.max(0, 1 - (distance / radius));
        return { left: volume.left * dVolume, right: volume.right * dVolume };
    }
    Utils.calcVolume = calcVolume;
    function getMusicVolume(volumePlayer) {
        var volume = Volume.getMusicVolume() * volumePlayer;
        return { left: volume, right: volume };
    }
    Utils.getMusicVolume = getMusicVolume;
    function getSoundVolume(volumePlayer) {
        var volume = Volume.getSoundVolume() * volumePlayer;
        return { left: volume, right: volume };
    }
    Utils.getSoundVolume = getSoundVolume;
})(Utils || (Utils = {}));
