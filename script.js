const img = document.getElementById("sojamaggus");
const bubble = document.getElementById("speech-bubble");
const userInput = document.getElementById("userInput");
const talkButton = document.getElementById("talkButton");

// Antwortliste mit Söder-Parodie
const responses = {
  fleisch: [
    "Mehr Tofu, weniger Leberkäs!",
    "Ein Braten aus Seitan ist auch ein Festschmaus.",
    "Fleisch ist für mich nur Pflanzeneiweiß mit Umweg.",
    "Vegane Würstchen retten die Welt!",
    "Schnitzel? Lieber aus Linsen!"
  ],
  windräder: [
    "Drehen sich schneller als Söders Meinung!",
    "Mehr Windräder, weniger heiße Luft.",
    "Windkraft ist die echte bayerische Blasmusik.",
    "Jeder braucht eine Windmühle auf dem Balkon!",
    "Windräder + Tofu = Glückseligkeit"
  ],
  bayern: [
    "Weißwurst mit Sojamilch – auch eine Tradition!",
    "Bayern braucht mehr Brezn aus Vollkorn.",
    "Servus mit 🌱, nicht mit 🥩.",
    "Grünes Bayern für alle!",
    "Bayerische Politik, jetzt vegan!"
  ],
  default: [
    "Ich bin der Tofu unter den Politikern!",
    "Mehr Bio, weniger Blabla!",
    "Klimaschutz ist kein Schmarrn!",
    "Jeder sollte mal einen Pflanzenburger probieren!",
    "Grün ist das neue Schwarz in Bayern!",
    "Rettet die Kühe – esst mehr Linsen!",
    "Meine Meinung weht wie ein Windrad!",
    "Erneuerbare Energien sind sexy!",
    "Blubb blubb, aber bitte nachhaltig!",
    "Vegane Politik rockt!"
  ]
};

function talk() {
  let input = userInput.value.trim().toLowerCase();
  let pool = responses.default;

  for (let key in responses) {
    if (input.includes(key)) {
      pool = responses[key];
      break;
    }
  }

  const answer = pool[Math.floor(Math.random() * pool.length)];
  bubble.textContent = answer;

  let count = 0;
  const interval = setInterval(() => {
    img.src = (count % 2 === 0) ? "sojamaggus_open.PNG" : "sojamaggus_closed.PNG";
    count++;
    if (count > 6) {
      clearInterval(interval);
      img.src = "sojamaggus_closed.PNG";
    }
  }, 300);

  userInput.value = '';
}

talkButton.addEventListener('click', talk);
