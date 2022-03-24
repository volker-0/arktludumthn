importLib("ToolLib");
IMPORT("SettingsManager");
//IMPORT("DungeonAPI");
IMPORT("SoundAPI")
//IMPORT("RechargeLib");

const folder = __dir__ + "/sounds/";
const MusicPlayer = new MediaPlayer();

MediaPlayer.register("Holybot.music", folder + "Holybot.mp3");