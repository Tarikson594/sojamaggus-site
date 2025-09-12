const sojamaggus = document.getElementById('sojamaggus');
const speechBubble = document.getElementById('speech-bubble');
const form = document.getElementById('contact-form');
const messageInput = document.getElementById('message');

// Funktion, um die Figur sprechen zu lassen
function speak(text) {
    speechBubble.textContent = text;
    speechBubble.style.display = 'block';
    
    let open = true;
    const interval = setInterval(() => {
        sojamaggus.src = open ? 'images/sojamaggus_open.PNG' : 'images/sojamaggus_closed.PNG';
        open = !open;
    }, 300); // Mundwechsel alle 300ms

    // Nach 2 Sekunden stoppen
    setTimeout(() => {
        clearInterval(interval);
        sojamaggus.src = 'images/sojamaggus_closed.PNG';
    }, 2000);
}

// Formular-Submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = messageInput.value.trim();
    if (!userMessage) return;

    // Beispiel: Figur „antwortet“ automatisch (hier kann man API oder Logik einsetzen)
    const response = generateResponse(userMessage);
    speak(response);

    messageInput.value = '';
});

// Einfache Logik für Antworten
function generateResponse(message) {
    // Hier einfache Beispiele, kann beliebig erweitert werden
    const lower = message.toLowerCase();
    if (lower.includes('hallo')) return 'Hallo! Schön dich zu sehen!';
    if (lower.includes('wie geht')) return 'Mir geht es super, danke der Nachfrage!';
    return 'Blubb blubb!'; // Default-Antwort
}
