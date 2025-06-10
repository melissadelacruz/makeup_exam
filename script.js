document.addEventListener("DOMContentLoaded", () => {
    const chatContainer = document.getElementById("chat");
    const form = document.getElementById("chat-form");
    const input = document.getElementById("user-input");
  
    const replies = [
      "Cool!", "Awesome!", "Noice", "Killer idea",
      "Lowkey fire", "Fire", "Goated idea", "I hear you...", "Sounds like a plan"
    ];
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const message = input.value.trim();
      if (!message) {
        alert("Type something!");
        return;
      }
  
      addMessage("You: " + message, "user");
      input.value = "";
  
      setTimeout(() => {
        const reply = replies[Math.floor(Math.random() * replies.length)];
        addMessage("Bot: " + reply, "bot");
      }, 500);
    });
  
    function addMessage(text, sender) {
      const msg = document.createElement("div");
      msg.classList.add("message", sender);
      msg.textContent = text;
      chatContainer.appendChild(msg);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });
  