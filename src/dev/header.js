importLib("ToolLib");
IMPORT("SettingsManager");
//IMPORT("DungeonAPI");
IMPORT("SoundAPI")
//IMPORT("RechargeLib");
IMPORT("BaublesAPI");

const folder = __dir__ + "/sounds/";
const MusicPlayer = new MediaPlayer();

MediaPlayer.register("Holybot.music", folder + "Holybot.mp3");

const Bauble =["amulet", "ring", "belt", "head", "body", "charm"]