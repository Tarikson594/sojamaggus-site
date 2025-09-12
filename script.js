const img = document.getElementById("sojamaggus");
const bubble = document.getElementById("speech-bubble");
const userInput = document.getElementById("userInput");
const talkButton = document.getElementById("talkButton");

// Erweiterte Antwortliste (50+ Sätze)
const responses = {
  fleisch: [
    "Mehr Tofu, weniger Leberkäs!",
    "Ein Braten aus Seitan ist auch ein Festschmaus.",
    "Fleisch ist für mich nur Pflanzeneiweiß mit Umweg.",
    "Vegane Würstchen retten die Welt!",
    "Schnitzel? Lieber aus Linsen!",
    "Ein Burger aus Bohnen ist besser als jedes Steak.",
    "Keine Angst vor Tempeh – das schmeckt sogar Söder!",
    "Fleischersatz macht Bayern grüner.",
    "Linsen statt Leberkäs – gesünder für alle!",
    "Die Kühe danken es uns, wenn wir Tofu essen!"
  ],
  windräder: [
    "Drehen sich schneller als Söders Meinung!",
    "Mehr Windräder, weniger heiße Luft.",
    "Windkraft ist die echte bayerische Blasmusik.",
    "Jeder braucht eine Windmühle auf dem Balkon!",
    "Windräder + Tofu = Glückseligkeit",
    "Windkraft rettet die Welt – und macht Bayern cool!",
    "Drehen, drehen, drehen – aber nachhaltig!",
    "Mehr Rotorblätter, weniger Bürokratie!",
    "Windenergie ist der neue Weißwurst-Turbo.",
    "Ein Windrad pro Haushalt – meine Vision!"
  ],
  bayern: [
    "Weißwurst mit Sojamilch – auch eine Tradition!",
    "Bayern braucht mehr Brezn aus Vollkorn.",
    "Servus mit 🌱, nicht mit 🥩.",
    "Grünes Bayern für alle!",
    "Bayerische Politik, jetzt vegan!",
    "Bayern ist schöner mit Fahrradwegen.",
    "Rettet die Alpen, pflanzt Bäume!",
    "Mehr Solar auf die Dächer, weniger Diesel!",
    "Tradition trifft Nachhaltigkeit – das ist Bayern!",
    "Bayern kann grün und modern sein!"
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
    "Vegane Politik rockt!",
    "Mehr Fahrradwege für alle!",
    "Solaranlagen statt Hotspots!",
    "Bäume pflanzen, nicht Parolen!",
    "Tofu ist das neue Weißbier!",
    "Nachhaltigkeit ist kein Trend, sondern Pflicht!",
    "Energie sparen macht frei – wie Bayern!",
    "Wer Linsen isst, liebt die Umwelt!",
    "Mülltrennung ist mein Lieblingssport!",
    "Wind, Sonne, Tofu – meine drei Säulen!",
    "Grüne Politik schmeckt wie ein Brezn-Snack!",
    "Bio ist cool – probier es aus!",
    "Mein Herz schlägt für Pflanzen!",
    "Klimaschutz kann sexy sein!",
    "Weniger CO₂, mehr Lebensfreude!",
    "Bayern wird veganfreundlich!",
    "Ein Windrad pro Dorf, bitte!",
    "Seitan statt Söders Sprüche!",
    "Mehr Pflanzen, weniger Politiker-Drama!",
    "Nachhaltigkeit ist keine Hexerei!",
    "Vegane Weißwürste? Na klar!",
    "Blubb blubb für erneuerbare Energien!",
    "Fleischlos glücklich durch Bayern!",
    "Klimafreundlich leben rockt!",
    "Sonnenenergie statt Sorgenenergie!",
    "Mehr Gemüse, weniger Politikstress!",
    "Ich liebe grüne Innovation!",
    "Bayern wird bio – und alle applaudieren!",
    "Windräder über Alles!",
    "Tempeh über Tofu – nur ein Scherz!",
    "Nachhaltig ist trendy!",
    "Klimaschutz ist mein Lieblingssport!",
    "Blubb blubb, die Welt wird besser!",
    "Grün ist das neue Weiß!",
    "Jeder kann Tofu essen, keiner muss weinen!",
    "Mein Gemüse rockt Bayern!",
    "Erneuerbare Energie ist mein Herzschlag!",
    "Söder würde Tofu lieben!",
    "Bayern, aber vegan!",
    "Mehr Pflanzenpower, weniger Politik-Power!",
    "Blubb blubb – für eine bessere Zukunft!"
  ]
};

// Keywords für Kategorien
const keywords = {
  fleisch: ["fleisch", "burger", "schnitzel", "tofu", "tempeh", "vegan", "seitan", "würstchen", "braten", "kühe", "linsen"],
  windräder: ["windräder", "windkraft", "energie", "rotor", "wind", "strom", "erneuerbar", "solar", "kraftwerk"],
  bayern: ["bayern", "weißwurst", "brezn", "alpen", "münchen", "politik", "land", "tradition", "sojamilch", "dach"]
};

function talk() {
  let input = userInput.value.trim().toLowerCase();
  let pool = responses.default;

  // Kategorie basierend auf Keywords auswählen
  outer: for (let category in keywords) {
    for (let kw of keywords[category]) {
      if (input.includes(kw)) {
        pool = responses[category];
        break outer;
      }
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
