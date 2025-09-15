const img = document.getElementById("sojamaggus");
const bubble = document.getElementById("speech-bubble");
const userInput = document.getElementById("userInput");

// Kategorien mit Antworten
const responses = {
  fleisch: [
    "Tofütümmelei<Leberkäsloser",
    "Söder ist im Landtag häufiger abwesend als Fleisch auf meinem Teller",
    "Söder & Aiwanger = Bayrische gemischtes Hack",
    "Die einzige Möglichkeit den selbstverliebten Söder zum Veganismus zu bekommen ist Gesichtstofu",
    "Wer von Tofuterror spricht hat vielleicht auch BSE Langzeitschäden",
    "Wann endlich FSK18 label für #söderisst",
    "Mehr Tofu, weniger Leberkäs!",
    "Ein Braten aus Seitan ist auch ein Festschmaus.",
    "Fleisch ist für mich nur Eiweiß mit Umweg.",
    "Fleisch ist nur Gemüse, das den falschen Weg gegangen ist.",
    "Ich bin gegen ein Tempehlimit!- Achso Tempo?! - Na dann bin ich dafür",
  ],
  windräder: [
    "Drehen sich schneller als Söders Meinung!",
    "Mehr Windräder, weniger heiße Luft.",
    "Windkraft ist besser als bayerische Blasmusik...und macht weniger Lärm",
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
  klimawandel: [
    "Das Klima wartet nicht auf Koalitionsverträge.",
    "Klimaschutz ist kein Schmarrn!",
    "Ein Grad mehr ist einer zu viel.",
    "Lieber Eis am Stiel als Eis am Pol, das wegschmilzt!",
    "CO2 ist der wahre Bierzelt-Sprenger.",
    "Wir wollen weniger Vebrenner subventionieren, weil München sonst irgendwann am Meer tut liegen",
    "Erst wenn die letzte Kuh gemolken, das letzte Schwein geschlachtet und die günstigste Maß 50,49€ kostet, werdet ihr lernen, dass wir unser Klime schützen müssen",
    "Seitdem der Söder Bäume umarmt ist Naturschutz wichtiger denn je"
  ],
  Raumfahrt: [
    "Wie kann jemand ins All wollen wenn ihn schon Sternchen triggern.",
    "Ein Sternchenverbot ist schon gewagt für jemanden der unbedingt ins All will",
    "CSU-Raumfahrtprogramm: erst a Grill auf die ISS, dann a Sau",
    "Wem eine eigene Raumfahrt wichtiger ist als die Behebung der Stellwerkstörung kann nicht so bürgernah sein ",
    "„Die Grünen woll’n Verbote. Mir in Bayern ham a besseres Konzept: mir ham Tradition – die verbietet eh alles Neue."
  ],
  frauen: [
    "Frauen an die Macht – Männer an den Herd (mit Tofu).",
    "Was macht ein CSU Politiker wenn ihn die Frauenquote gefährdet? Er nimmt ihnen den Unterleib weg",
    "Starke Frauen, starke Klimapolitik.",
    "Frauenpower rettet die Welt, Männer reden drüber.",
    "Ohne Frauen kein Fortschritt – auch kein veganer!"
  ],
  gendern: [
    "Liebe Bürger*innen, Tofuesser*innen und Klimaaktivist*innen!",
    "Gendern ist wie Recycling – macht Sinn, auch wenn’s manchen nervt.",
    "Ich gendere sogar meinen Sojajoghurt.",
    "Sprache formt Bewusstsein – auch im Bierzelt.",
    "Gendern ist der Veggie-Day der Sprache."
  ],
  diegruenen: [
    "Die Grünen sind wie Bio-Märkte: manchmal teuer, aber notwendig.",
    "Grüne Politik ist der Dünger fürs Klima.",
    "Die Grünen liefern Windräder, Söder liefert Weißwürste.",
    "Die Grünen sind die Brezn – Söder der Leberkäs.",
    "Mit den Grünen wird die Zukunft veganisiert!"
  ],
  default: [
    "Ich bin der Tofu unter den Politikern!",
    "Mehr Bio, weniger Blabla!",
    "Klimaschutz ist kein Schmarrn!",
    "Vegane Weißwürste für alle!",
    "Soja ist das neue Bier.",
    "Jeder sollte mal einen Pflanzenburger probieren!",
    "Grün ist das neue Schwarz in Bayern!",
    "Rettet die Kühe – esst mehr Linsen!",
    "Meine Meinung weht wie ein Windrad!",
    "Erneuerbare Energien sind sexy!",
    "Vegane Politik rockt!",
    "Mehr Fahrradwege für alle!",
    "Tofu ist das neue Weißbier!",
    "Nachhaltigkeit ist Pflicht, kein Trend!",
    "Wind, Sonne, Tofu – meine drei Säulen!",
    "Bäume pflanzen, nicht Parolen!",
    "Fleischlos glücklich durch Bayern!"
  ]
};

// Easter Eggs
const easterEggs = {
  söder: [
    "Söder? Der isst bestimmt heimlich Tofu!",
    "Söder wechselt seine Meinung schneller als ich meinen Soja-Joghurt.",
    "Söder im Dirndl wäre auch ein Klimaretter.",
    "Söder und Soja – klingt fast gleich, schmeckt aber anders!"
  ],
  csu: [
    "Die CSU ist wie ein altes Rezept: viel Fleisch, wenig Zukunft.",
    "CSU heißt: Currywurst statt Klimaschutz.",
    "Die CSU hat Angst vor Windrädern – ich hab nur Angst vor leerem Tofu-Regal!"
  ],
  afd: [
    "AfD? Das ist wie Schweinsbraten ohne Senf – überflüssig.",
    "Die AfD glaubt nicht an den Klimawandel – ich glaub nicht an Schweinshaxe."
  ]
};

// Keywords für Kategorien
const keywords = {
  fleisch: ["fleisch", "schnitzel", "braten", "wurst"],
  windräder: ["windrad", "windräder", "windkraft"],
  bayern: ["bayern", "münchen", "lederhose", "weißwurst"],
  klimawandel: ["klima", "erwärmung", "co2", "klimawandel"],
  parteien: ["partei", "parteien", "spd", "fdp", "linke"],
  frauen: ["frau", "frauen", "mädchen"],
  gendern: ["gender", "gendern", "genderstern", "innen"],
  diegruenen: ["grüne", "die grünen", "baerbock", "habeck"]
};

// Hauptfunktion
function talk() {
  const input = userInput.value.trim().toLowerCase();

  // Easter Eggs prüfen
  for (const egg in easterEggs) {
    if (input.includes(egg)) {
      const pool = easterEggs[egg];
      bubble.textContent = pool[Math.floor(Math.random() * pool.length)];
      animateMouth();
      userInput.value = '';
      return;
    }
  }

  // Normale Kategorien prüfen
  let matched = [];
  for (const cat in keywords) {
    for (const kw of keywords[cat]) {
      if (input.includes(kw)) {
        matched.push(...responses[cat]);
        break;
      }
    }
  }

  // Falls keine Kategorie passt → default
  if (matched.length === 0) matched = responses.default;

  // Zufällige Antwort aus Pool
  const answer = matched[Math.floor(Math.random() * matched.length)];
  bubble.textContent = answer;

  animateMouth();
  userInput.value = '';
}

// Mund-Animation
function animateMouth() {
  let count = 0;
  const interval = setInterval(() => {
    img.src = (count % 2 === 0) ? "sojamaggus_open.PNG" : "sojamaggus_closed.PNG";
    count++;
    if (count > 6) {
      clearInterval(interval);
      img.src = "sojamaggus_closed.PNG";
    }
  }, 300);
}

// Event-Listener für alle Buttons
document.addEventListener("DOMContentLoaded", () => {
  // Inspiration-Buttons
  const bubbles = document.querySelectorAll("#hint-buttons .bubble");
  bubbles.forEach((b) => {
    b.addEventListener("click", () => {
      userInput.value = b.textContent;
      talk();
    });
  });

  // Sag-was-Button
  const talkButton = document.querySelector("#input-area button");
  talkButton.addEventListener("click", talk);
});

