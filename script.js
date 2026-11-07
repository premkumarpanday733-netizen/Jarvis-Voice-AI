
const reply = document.getElementById("reply");
const talkBtn = document.getElementById("talkBtn");

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "hi-IN";
    speechSynthesis.cancel();
    speechSynthesis.speak(speech);
}

function startJarvis() {
    reply.innerText = "Jarvis तैयार हो रहा है...";
    speak("Hello Sir. Jarvis system is ready.");
}

talkBtn.addEventListener("click", startJarvis);
