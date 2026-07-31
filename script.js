
let historyData = [];

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const historyBtn = document.getElementById("historyBtn");
const resetBtn = document.getElementById("resetBtn");


sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});


historyBtn.addEventListener("click", function () {

    const panel = document.getElementById("historyPanel");

    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }

});


resetBtn.addEventListener("click", resetChat);

function sendMessage() {

    // Get User Input
    const message = userInput.value.trim();

   
    if (message === "") {
        return;
    }

    
    addUserMessage(message);

  
    historyData.push(message);

    
    displayHistory();

  
    userInput.value = "";

   
    searchAnswer(message);

}



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

function addUserMessage(message) {

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerHTML = message;

    chatBox.appendChild(div);

    scrollBottom();

}

function searchAnswer(question) {

    question = question.toLowerCase();

    showTyping();
    setTimeout(function () {

        removeTyping();

        let answer = null;

   
        for (let i = 0; i < chatbotData.length; i++) {

            const item = chatbotData[i];

         
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

    
        if (answer === null) {

            answer =
                "❌ Sorry! I don't have information about this RAG topic.";

        }

  
        addBotMessage(answer);

    }, 1000);

}

function addBotMessage(message) {

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = message;

    chatBox.appendChild(div);

    scrollBottom();

}

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

function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {
        typing.remove();
    }

}


function scrollBottom() {

    chatBox.scrollTop = chatBox.scrollHeight;

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

}