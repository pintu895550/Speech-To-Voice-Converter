let speech = new SpeechSynthesisUtterance();
let btn = document.querySelector("#button");
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; 
    voices.forEach((voice, i) => {
        let option = document.createElement("option");
        option.textContent = option.textContent = voice.name + " (" + voice.lang + ")";
        option.value = i;
        voiceSelect.appendChild(option);
    });

    
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});


btn.addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
