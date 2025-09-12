const sojamaggus = document.getElementById('sojamaggus');
const speechBubble = document.getElementById('speech-bubble');
const form = document.getElementById('contact-form');
const messageInput = document.getElementById('message');

function speak(text) {
    speechBubble.textContent = text;
    speechBubble.style.display = 'block';
    
    let open = true;
    const interval = setInterval(() => {
        sojamaggus.src = open ? 'sojamaggus_open.PNG' : 'sojamaggus_closed.PNG';
        open = !open;
    }, 300);

    setTimeout(() => {
        clearInterval(interval);
        sojamaggus.src = 'sojamaggus_closed.PNG';
    }, 2000);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = messageInput.value.trim();
    if (!userMessage) return;

    const response = generateResponse(userMessage);
    speak(response);

    messageInput.value = '';
});

function generateResponse(message) {
    const lower = message.toLowerCase();
    if (lower.includes('hallo')) return 'Hallo! Schön dich zu sehen!';
    if (lower.includes('wie geht')) return 'Mir geht es super, danke der Nachfrage!';
    return 'Blubb blubb!';
}

