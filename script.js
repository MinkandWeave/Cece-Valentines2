const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msg = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  msg.textContent = "You make my world softer, happier, and brighter 💖";
  confetti();
});

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 320 - 160;
  const y = Math.random() * 220 - 110;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  msg.textContent = "That option was never real 😌";
});

function confetti() {
  const emojis = ["💖", "💘", "✨", "🦭", "🐰", "🌸"];
  for (let i = 0; i < 28; i++) {
    const el = document.createElement("div");
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.position = "fixed";
    el.style.left = window.innerWidth / 2 + "px";
    el.style.top = window.innerHeight / 2 + "px";
    el.style.fontSize = 18 + Math.random() * 24 + "px";
    el.style.pointerEvents = "none";
    el.style.transition = "transform 1s ease, opacity 1s ease";
    document.body.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transform = `translate(${Math.random() * 420 - 210}px, ${-320 - Math.random() * 200}px) rotate(${Math.random() * 360}deg)`;
      el.style.opacity = "0";
    });

    setTimeout(() => el.remove(), 1000);
  }
}
