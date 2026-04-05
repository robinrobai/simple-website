document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('chatbotToggle');
  const closeBtn = document.getElementById('chatbotClose');
  const window = document.getElementById('chatbotWindow');
  const input = document.getElementById('chatbotInput');
  const sendBtn = document.getElementById('chatbotSend');
  const messagesContainer = document.getElementById('chatbotMessages');

  // Toggle chatbot visibility
  toggleBtn.addEventListener('click', () => {
    window.classList.toggle('active');
  });

  closeBtn.addEventListener('click', () => {
    window.classList.remove('active');
  });

  // Handle sending messages
  const sendMessage = () => {
    const text = input.value.trim();
    if (!text) return;

    // Add user message
    addMessage(text, 'user-message');
    input.value = '';

    // Scroll to bottom
    scrollToBottom();

    // Simulate bot thinking and replying
    setTimeout(() => {
      const responses = [
        "That's interesting! Tell me more.",
        "I'm a simple demo bot, but I think our website is great!",
        "Thanks for reaching out to us.",
        "We are always looking to innovate.",
        "Have you checked out our features yet?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse, 'bot-message');
      scrollToBottom();
    }, 1000);
  };

  sendBtn.addEventListener('click', sendMessage);
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
});