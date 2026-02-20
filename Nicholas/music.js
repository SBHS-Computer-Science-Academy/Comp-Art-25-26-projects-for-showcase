var AUDIO = { musicMuted: false, sfxMuted: false, unlocked: true };

function music_setMuted(muted) { AUDIO.musicMuted = !!muted; }

function sfx_setMuted(muted) { AUDIO.sfxMuted = !!muted; }