// ==========================================
// ChatBot JavaScript
// ==========================================

// ------------------------------------------
// Variables
// ------------------------------------------

let historyData = [];

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const historyBtn = document.getElementById("historyBtn");
const resetBtn = document.getElementById("resetBtn");

// ==========================================
// Event Listeners
// ==========================================

// Send Button
sendBtn.addEventListener("click", sendMessage);

// Enter Key
userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// History Button
historyBtn.addEventListener("click", function () {

    const panel = document.getElementById("historyPanel");

    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }

});

// Reset Button
resetBtn.addEventListener("click", resetChat);

// ==========================================
// Main Function
// ==========================================

function sendMessage() {

    // Get User Input
    const message = userInput.value.trim();

    // Empty Validation
    if (message === "") {
        return;
    }

    // Show User Message
    addUserMessage(message);

    // Store Search History
    historyData.push(message);

    // Display History
    displayHistory();

    // Clear Input Box
    userInput.value = "";

    // Search Answer
    searchAnswer(message);

}

// ==========================================
// Display Search History
// ==========================================

function displayHistory() {

    const historyList = document.getElementById("historyList");

    historyList.innerHTML = "";

    historyData.forEach(function (item) {

        const li = document.createElement("li");

        li.innerHTML = "🔍 " + item;

        li.onclick = function () {
            userInput.value = item;
        };

        historyList.appendChild(li);

    });

}

// ==========================================
// Reset Chat
// ==========================================

function resetChat() {

    const confirmReset = confirm("Do you want to clear the chat?");

    if (!confirmReset) {
        return;
    }

    chatBox.innerHTML = `

        <div class="bot-message">

            👋 Hello!

            <br><br>

            I am your RAG Technology Assistant.

            <br><br>

            Ask me anything about RAG Technology.

        </div>

    `;

    historyData = [];

    displayHistory();

}

// ==========================================
// Add User Message
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

    // Convert to Lowercase
    question = question.toLowerCase();

    // Show Typing Animation
    showTyping();

    // Wait for 1 Second
    setTimeout(function () {

        removeTyping();

        let answer = null;

        // Loop Through Knowledge Base
        for (let i = 0; i < chatbotData.length; i++) {

            const item = chatbotData[i];

            // Loop Keywords
            for (let j = 0; j < item.keywords.length; j++) {

                const keyword = item.keywords[j];

                if (question.includes(keyword)) {

                    answer = item.answer;

                    break;

                }

            }

            if (answer !== null) {
                break;
            }

        }

        // No Match
        if (answer === null) {

            answer =
                "❌ Sorry! I don't have information about this RAG topic.";

        }

        // Show Bot Response
        addBotMessage(answer);

    }, 1000);

}

// ==========================================
// Add Bot Message
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
// Remove Typing Animation
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

function resetChat() {

    const result = confirm("Are you sure you want to clear the chat?");

    if (!result) {
        return;
    }

    chatBox.innerHTML = "";

    const welcome = document.createElement("div");

    welcome.className = "bot-message";

    welcome.innerHTML = `
        👋 Hello!

        <br><br>

        I am your RAG Technology Assistant.

        <br><br>

        Ask me anything about RAG Technology.
    `;

    chatBox.appendChild(welcome);

    historyData = [];

    displayHistory();

    userInput.value = "";

    userInput.focus();

}
function addBotMessage(message) {

    const wrapper = document.createElement("div");

    wrapper.className = "message bot";

    wrapper.innerHTML = `
        <div class="avatar bot-avatar">
            🤖
        </div>

        <div class="bot-message">
            <p>${message}</p>
            <small class="time">${getCurrentTime()}</small>
        </div>
    `;

    chatBox.appendChild(wrapper);

    scrollBottom();
}function getCurrentTime() {

    return new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

}function scrollBottom() {

    chatBox.scrollTop = chatBox.scrollHeight;

}