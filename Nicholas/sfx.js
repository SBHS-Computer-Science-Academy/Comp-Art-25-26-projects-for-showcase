// AI MADE -> Way too many bugs with the sfx, AI debugged

var SFX = { jumpscare: null };


var JUMPSCARE_URL = "https://codehs.com/uploads/50cd2229412a23f4e6fe03edc6976efb";

function sfx_init() {
  if (typeof loadSound !== "function") {
    console.log("p5.sound missing");
    return;
  }
  SFX.jumpscare = loadSound(JUMPSCARE_URL,);
}

function sfx_jumpscare() {
  if (!SFX.jumpscare) return;
  if (SFX.jumpscare.isLoaded && !SFX.jumpscare.isLoaded()) return;

 
  try { SFX.jumpscare.stop(); } catch (e) {}
  SFX.jumpscare.play();
}

function audio_unlock() {
  try {
    if (typeof userStartAudio === "function") userStartAudio();
    else if (typeof getAudioContext === "function") getAudioContext().resume();
  } catch (e) {}
}