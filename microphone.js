if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;

    const startButton = document.getElementById('startButtons');
    const speechInput = document.getElementById('user-input');
    const audio = document.getElementById('audio');

    startButton.addEventListener('click', () => {
        recognition.start();
        startButton.disabled = true;
    });

    recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript;
        speechInput.value = transcript;
    };

    recognition.onend = () => {
        startButton.disabled = false;
    };

    recognition.onaudiostart = () => {
        audio.srcObject = recognition.stream;
        audio.play();
    };

    recognition.onaudioend = () => {
        audio.pause();
        audio.srcObject = null;
    };
} else {
    console.log('Web Speech API is not supported in this browser.');
}
