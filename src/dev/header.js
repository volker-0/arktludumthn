importLib("ToolLib");
//IMPORT("DungeonAPI");
IMPORT("SoundAPI")
IMPORT("RechargeLib");
IMPORT("BaublesAPI");

const folder = __dir__ + "/sounds/";
const MusicPlayer = new MediaPlayer();

MediaPlayer.register("Holybot.music", folder + "Holybot.mp3");

const Bauble = ["amulet", "ring0", "ring1", "belt", "head", "body", "charm"]