const chatInput = document.querySelector('.chat-input textarea');
const sendChatBtn = document.querySelector('.chat-input button');
const chatbox = document.querySelector(".chatbox");

let userMessage;
let messageHistory = []; // Array to store the chat history

// Function to create chat message elements
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = `<p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

// Function to generate response and maintain chat history
const generateResponse = (incomingChatLi) => {
    const messageElement = incomingChatLi.querySelector("p");

    fetch('https://thereakokgaming-github-io.onrender.com/api/chat', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userMessage, messageHistory })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    })
    .then(data => {
        const botResponse = data.botResponse;
        messageElement.textContent = botResponse;

        // Add bot response to the chat history
        messageHistory.push({ role: "assistant", content: botResponse });
    })
    .catch((error) => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again!";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

// Function to handle sending of user message and triggering response
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) {
        return;
    }

    // Append user message to chatbox and message history
    chatbox.appendChild(createChatLi(userMessage, "chat-outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Add user message to message history
    messageHistory.push({ role: "user", content: userMessage });

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "chat-incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);

    // Clear the chat input after sending the message
    chatInput.value = '';
}

// Event listener for the send button
sendChatBtn.addEventListener("click", handleChat);

// Optional cancel function
function cancel() {
    let chatbotcomplete = document.querySelector(".chatBot");
    if (chatbotcomplete.style.display != 'none') {
        chatbotcomplete.style.display = "none";
        let lastMsg = document.createElement("p");
        lastMsg.textContent = 'Thanks for using our Chatbot!';
        lastMsg.classList.add('lastMessage');
        document.body.appendChild(lastMsg);
    }
}