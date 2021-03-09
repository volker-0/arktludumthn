LIBRARY({
    name: "SettingsManager",
    version: 2,
    shared: true,
    api: "CoreEngine"
});

var settings = [];
var SETTINGS_PATH = "/storage/emulated/0/games/com.mojang/minecraftpe/options.txt";
var prev_opened = false;


var SettingsManager = {
    load: function(){
        settings = FileTools.ReadKeyValueFile(SETTINGS_PATH);
    },
    
    getSetting: function(name){
        if(!(name in settings)) 
            return null;
        else 
            return settings[name];
    },
    
    getRenderDistance: function(){
        return settings["gfx_renderdistance_new"] / 16;
    },
    
    getPlayerName: function(){
        return settings["mp_username"];
    },
    
    getLanguage: function(){
        return settings["game_language"];
    },
    
    isLeftHanded: function(){
        return settings["ctrl_islefthanded"];
    },
    
    getSoundsVolume: function(){
        return settings["audio_sound"];
    },
    
    getMusicVolume: function(){
        return settings["audio_music"];
    }
};


SettingsManager.load();


Callback.addCallback("NativeGuiChanged", function (screenName) {
    var currently_opened = screenName.startsWith("screen_world_controls_and_settings")
        ||screenName.startsWith("screen_controls_and_settings");
    if(prev_opened && !currently_opened){
        SettingsManager.load();
    }
    prev_opened = currently_opened;
});


EXPORT("SettingsManager", SettingsManager);
