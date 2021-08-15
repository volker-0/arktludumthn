importLib("ToolType","*");
IMPORT("SettingsManager");
IMPORT("DungeonAPI");
//IMPORT("RechargeLib");

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

function StopSound(arr) {
	for(var i in arr) {
		var SP = arr[i];
		try {
			if(SP.sound.isPlaying()) {
				SP.sound.stop();
			};
			SP.sound.release();
		} catch(e) {};
	};
	arr = []
};

function PlaySongVarFile(name, format, vaar) {
	try {
		var media = null;
		for(var i in vaar){
			var SP = vaar[i];
			if(!SP.isPlaying()) {
				media = SP;
				break;
			};
		};
		if(media == null) {
			media = new android.media.MediaPlayer();
			vaar.push(media);
		};
		media.reset();
		media.setDataSource(__dir__ + "sounds/"+name);
		media.prepare();
		media.start();
		return media;
	} catch(err) {};
	return media;
};