// ==========================================
// Get HTML Elements
// ==========================================

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// ==========================================
// Send Button Click
// ==========================================

sendBtn.addEventListener("click", sendMessage);

// ==========================================
// Press Enter Key
// ==========================================

userInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});

// ==========================================
// Main Function
// ==========================================

function sendMessage() {

    // Get User Input

    const message = userInput.value.trim();

    // Empty Input

    if (message === "") {

        return;

    }

    // Display User Message

    addUserMessage(message);

    // Clear Input

    userInput.value = "";

    // Search Answer

    searchAnswer(message);

}

// ==========================================
// Display User Message
// ==========================================

function addUserMessage(message) {

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerHTML = message;

    chatBox.appendChild(div);

    scrollBottom();

}

// ==========================================
// Search Answer
// ==========================================

function searchAnswer(question) {

    // Convert Lowercase

    question = question.toLowerCase();

    // Typing Animation

    showTyping();

    // Wait 1 second

    setTimeout(function () {

        removeTyping();

        let answer = null;

        // Loop Through All Data

        for (let i = 0; i < chatbotData.length; i++) {

            // Current Object

            const item = chatbotData[i];

            // Loop Keywords

            for (let j = 0; j < item.keywords.length; j++) {

                const keyword = item.keywords[j];

                // Check Keyword

                if (question.includes(keyword)) {

                    answer = item.answer;

                    break;

                }

            }

            // Stop Searching

            if (answer !== null) {

                break;

            }

        }

        // Not Found

        if (answer === null) {

            answer =
                "❌ Sorry! I don't have information about this RAG topic.";

        }

        // Display Bot Answer

        addBotMessage(answer);

    }, 1000);

}

// ==========================================
// Bot Message
// ==========================================

function addBotMessage(message) {

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = message;

    chatBox.appendChild(div);

    scrollBottom();

}

// ==========================================
// Typing Animation
// ==========================================

function showTyping() {

    const typing = document.createElement("div");

    typing.className = "typing";

    typing.id = "typing";

    typing.innerHTML = `

        <span></span>

        <span></span>

        <span></span>

    `;

    chatBox.appendChild(typing);

    scrollBottom();

}

// ==========================================
// Remove Typing
// ==========================================

function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {

        typing.remove();

    }

}

// ==========================================
// Auto Scroll
// ==========================================

function scrollBottom() {

    chatBox.scrollTop = chatBox.scrollHeight;

}