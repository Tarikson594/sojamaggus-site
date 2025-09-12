const img = document.getElementById("sojamaggus");
const bubble = document.getElementById("speech-bubble");
const userInput = document.getElementById("userInput");
const talkBtn = document.getElementById("talkBtn");

const responses = {
  fleisch: [
    "Mehr Tofu, weniger Leberkäs!",
    "Ein Braten aus Seitan ist auch ein Festschmaus.",
    "Fleisch ist für mich nur Pflanzeneiweiß mit Umweg."
  ],
  windräder: [
    "Drehen sich schneller als Söders Meinung!",
    "Mehr Windräder, weniger heiße Luft.",
    "Windkraft ist die echte bayerische Blasmusik."
  ],
  bayern: [
    "Weißwurst mit Sojamilch – auch eine Tradition!",
    "Bayern braucht mehr Brezn aus Vollkorn.",
    "Servus mit 🌱, nicht mit 🥩."
  ],
  default: [
    "Ich bin der Tofu unter den Politikern!",
    "Mehr Bio, weniger Blabla!",
    "Klimaschutz ist kein Schmarrn!"
  ]
};

talkBtn.addEventListener("click", talk);

function talk() {
  let input = userInput.value.trim().toLowerCase();
  let pool = responses.default;

  for (let key in responses) {
    if (input.includes(key)) pool = responses[key];
  }

  bubble.textContent = pool[Math.floor(Math.random() * pool.length)];

  let count = 0;
  const interval = setInterval(() => {
    img.src = (count % 2 === 0) ? "images/sojamaggus_open.png" : "images/sojamaggus_closed.png";
    count++;
    if (count > 6) clearInterval(interval);
  }, 200);
}
