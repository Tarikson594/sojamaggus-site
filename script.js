/********** Daten (keine DOM-Abfragen hier) **********/
const responses = {
  fleisch: [
    "Mehr Tofu, weniger Leberkäs!",
    "Ein Braten aus Seitan ist auch ein Festschmaus.",
    "Fleisch ist für mich nur Pflanzeneiweiß mit Umweg.",
    "Fleisch ist nur Gemüse, das den falschen Weg gegangen ist.",
    "Ein Schnitzel? Lieber ein Sojaschnitzel!",
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
  klimawandel: [
    "Das Klima wartet nicht auf Koalitionsverträge.",
    "Klimaschutz ist kein Schmarrn!",
    "Ein Grad mehr ist einer zu viel.",
    "Lieber Eis am Stiel als Eis am Pol, das wegschmilzt!",
    "CO2 ist der wahre Bierzelt-Sprenger."
  ],
  parteien: [
    "Parteien reden viel, ich rede Tofu.",
    "Politik ohne Klima ist wie Brezn ohne Salz.",
    "Die CSU schwört auf Schweinsbraten – ich auf Sojaschnetzel.",
    "Parteien drehen sich – fast wie Windräder, nur ohne Strom.",
    "Parteien sind wie Weißwürste: nach 12 Uhr schwer verdaulich."
  ],
  frauen: [
    "Frauen an die Macht – Männer an den Herd (mit Tofu).",
    "Gleichberechtigung ist kein Beilagensalat.",
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

/********** DOM & Logik (erst nach Laden) **********/
document.addEventListener("DOMContentLoaded", () => {
  // sichere DOM-Referenzen (können null sein, deshalb guards)
  const img = document.getElementById("sojamaggus");
  const speechBubble = document.getElementById("speech-bubble");
  const userInputEl = document.getElementById("userInput");
  const talkBtn = document.querySelector("#input-area button");

  // Animate mouth (prüft, ob Bild vorhanden)
  function animateMouth() {
    if (!img) return;
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

  // zentrale Funktion, um Text in Sprechblase zu setzen
  function showBubbleText(text) {
    if (speechBubble) speechBubble.textContent = text;
  }

  // talk() definieren und global verfügbar machen (HTML onclick="talk()" weiter möglich)
  function talk() {
    const input = (userInputEl && userInputEl.value) ? userInputEl.value.trim().toLowerCase() : "";

    // EasterEggs prüfen (Vorrang)
    for (const eggKey of Object.keys(easterEggs)) {
      if (input.includes(eggKey)) {
        const pool = easterEggs[eggKey];
        const ans = pool[Math.floor(Math.random() * pool.length)];
        showBubbleText(ans);
        animateMouth();
        if (userInputEl) userInputEl.value = '';
        return;
      }
    }

    // Kategorien prüfen (multi-match möglich)
    let matched = [];
    for (const cat of Object.keys(keywords)) {
      for (const kw of keywords[cat]) {
        if (input.includes(kw)) {
          if (responses[cat]) matched.push(...responses[cat]);
          break;
        }
      }
    }

    if (matched.length === 0) matched = responses.default.slice();

    const answer = matched[Math.floor(Math.random() * matched.length)];
    showBubbleText(answer);
    animateMouth();
    if (userInputEl) userInputEl.value = '';
  }

  // macht talk() global (wichtig, falls HTML onclick="talk()" verwendet wird)
  window.talk = talk;

  // Enter-Taste im Eingabefeld -> talk()
  if (userInputEl) {
    userInputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        talk();
      }
    });
  }

  // Button-Klick im Input-Bereich (falls vorhanden, doppelt schadet nicht)
  if (talkBtn) {
    talkBtn.addEventListener("click", (e) => {
      e.preventDefault();
      talk();
    });
  }

  // Bubbles: unterstütze mehrere mögliche Container-IDs (robust)
  const selector = "#hint-buttons .bubble, #inspiration-bubbles .bubble, #hint-bubbles .bubble";
  const bubbleEls = document.querySelectorAll(selector);
  bubbleEls.forEach(b => {
    b.addEventListener("click", () => {
      if (userInputEl) userInputEl.value = b.textContent.trim();
      talk();
    });
  });

}); // DOMContentLoaded Ende
