importLib("ToolType","*");
IMPORT("SettingsManager");
IMPORT("DungeonAPI");
IMPORT("SoundAPI")
//IMPORT("RechargeLib");

const folder = __dir__ + "/sounds/";
const MusicPlayer = new MediaPlayer();

MediaPlayer.register("Holybot.music", folder + "Holybot.mp3");

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

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};
