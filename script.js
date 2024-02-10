const proposalMessage = document.getElementById("proposal-message");
const acceptButton = document.getElementById("accept-button");
const rejectButton = document.getElementById("reject-button");

proposalMessage.innerText = "Because I love you so much and I feel very much attracted to you.?";

acceptButton.addEventListener("click", () => {
  proposalMessage.innerText = "Thank you! You've made me the happiest person alive! 💖";
  acceptButton.innerText = "Yay! 💍";
  rejectButton.style.display = "none";
});

rejectButton.addEventListener("click", () => {
  proposalMessage.innerText = "I understand. It's okay. I will always cherish the time we spent together. 😔";
  acceptButton.innerText = "Let's be friends 🤗";
  rejectButton.style.display = "none";
});

rejectButton.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - rejectButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - rejectButton.offsetHeight);
  rejectButton.style.setProperty("--randomX", `${randomX}px`);
  rejectButton.style.setProperty("--randomY", `${randomY}px`);
  rejectButton.style.left = randomX + "px";
  rejectButton.style.top = randomY + "px";
  rejectButton.style.position = "absolute";
  rejectButton.style.pointerEvents = "none"; // Prevents clicking
});
