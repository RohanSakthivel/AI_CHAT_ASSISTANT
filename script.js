let isSpeaking = true;
function getAiResponse(userInput) {
    for (const pair of dataset.qa_pairs) {
        if (userInput.toLowerCase() === pair.question.toLowerCase()) {
            return pair.answer;
        }
    }
    return dataset.qa_pairs[dataset.qa_pairs.length - 1].answer; // Default response
}

function appendMessage(message, sender) {
    const chat = document.getElementById("chat");
    const messageElement = document.createElement("div");
    messageElement.innerText = `${sender}: ${message}`;
    chat.appendChild(messageElement);
}

function speak(text) {
    const speechUtterance = new SpeechSynthesisUtterance();
    speechUtterance.text = text;
    speechSynthesis.speak(speechUtterance);
}
function switchImage() {
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");

    if (image1.style.display === "none") {
        image1.style.display = "block";
        image2.style.display = "none";
    } else {
        image1.style.display = "none";
        image2.style.display = "block";
    }
}
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    appendMessage(userInput, "User");

    const aiResponse = getAiResponse(userInput);
    appendMessage(aiResponse, "ChatBot");

    speak(aiResponse); // Speak the chatbot's response
        var image1 = document.getElementById("image1");
        var image2 = document.getElementById("image2");

        if (image1.style.display === "none") {
            image1.style.display = "block";
            image2.style.display = "none";
        } else {
            image1.style.display = "none";
            image2.style.display = "block";
        }
}

   


        