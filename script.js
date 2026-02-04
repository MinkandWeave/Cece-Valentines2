const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msg = document.getElementById("message");

yesBtn.addEventListener("click", () => {
  msg.textContent = "YAY 💖💖 It’s a date, Cece 😌";
  confetti();
});

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  msg.textContent = "That button is just for decoration 😌";
});

function confetti() {
  const emojis = ["💖", "💘", "✨", "🌸", "🥰"];
  for (let i = 0; i < 25; i++) {
    const el = document.createElement("div");
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.position = "fixed";
    el.style.left = window.innerWidth / 2 + "px";
    el.style.top = window.innerHeight / 2 + "px";
    el.style.fontSize = 18 + Math.random() * 22 + "px";
    el.style.pointerEvents = "none";
    el.style.transition = "transform 1s ease, opacity 1s ease";
    document.body.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transform = `translate(${Math.random() * 400 - 200}px, ${-300 - Math.random() * 200}px) rotate(${Math.random() * 360}deg)`;
      el.style.opacity = "0";
    });

    setTimeout(() => el.remove(), 1000);
  }
}
