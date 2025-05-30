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
        body: JSON.stringify({ 
            userMessage, 
            history: messageHistory 
        })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    })
    .then(data => {
        const botResponse = data.botResponse;
        
        // Check if the response contains "DISCONNECT"
        if (botResponse.includes("DISCONNECT")) {
            cancel(botResponse); // Pass the AI message to the cancel function
            return;
        }

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

// Function to handle pressing Enter key
const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent newline in textarea
        handleChat(); // Trigger the handleChat function
    }
}

// Event listener for the send button
sendChatBtn.addEventListener("click", handleChat);

// Event listener for Enter key press in textarea
chatInput.addEventListener("keydown", handleKeyPress);

// Function to handle cancellation and display messages
function cancel(aiMessage) {
    let chatbotcomplete = document.querySelector(".chatBot");
    if (chatbotcomplete.style.display !== 'none') {
        chatbotcomplete.style.display = "none";
        
        // Create and append the disconnect message
        let disconnectMessage = document.createElement("div");
        disconnectMessage.classList.add('disconnect-message');
        
        let mainMessage = document.createElement("p");
        mainMessage.textContent = 'Chat has been disconnected.';
        mainMessage.classList.add('disconnect-main');
        
        let aiMessageElement = document.createElement("p");
        aiMessageElement.textContent = aiMessage;
        aiMessageElement.classList.add('disconnect-ai-message');
        
        let subMessage = document.createElement("p");
        subMessage.textContent = 'DISCONNECTED';
        subMessage.classList.add('disconnect-sub');
        
        disconnectMessage.appendChild(mainMessage);
        disconnectMessage.appendChild(aiMessageElement);
        disconnectMessage.appendChild(subMessage);
        document.body.appendChild(disconnectMessage);
    }
}
