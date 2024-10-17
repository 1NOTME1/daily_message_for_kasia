document.addEventListener("DOMContentLoaded", function() {
    const messages = {
    "miłosne": [
        "Kocham Cię bardziej niż wczoraj, ale mniej niż jutro ❤️",
        "Nie mogę przestać myśleć o Tobie 😘 Jesteś moim spełnionym marzeniem ✨",
        "Jesteś moim światłem w ciemności i promieniem słońca każdego dnia ☀️",
        // Nowe wiadomości
        "Twoje oczy są jak najpiękniejsze gwiazdy na niebie ✨",
        "Każda chwila spędzona z Tobą to skarb 💖",
        "Twój uśmiech rozjaśnia mój dzień 😊"
    ],
    "motywujące": [
        "Wierz w siebie 💪 Jesteś zdolna do większych rzeczy, niż myślisz!",
        "Nie poddawaj się! Jesteś silna i wiem, że osiągniesz wszystko, czego pragniesz 🌟",
        "Każdy dzień to nowa szansa na spełnianie marzeń ✨ Zawsze będę przy Tobie 🤗",
        // Nowe wiadomości
        "Twoja determinacja jest inspirująca 🔥",
        "Masz w sobie nieskończony potencjał 🌟 Nie zapominaj o tym!",
        "Wierzę w Ciebie i w Twoje marzenia 🌈"
    ],
    "wspierające": [
        "Jestem tutaj, by Cię wspierać, bez względu na wszystko 🤝",
        "Wiem, że czasami jest ciężko, ale zawsze możesz na mnie liczyć ❤️",
        "Nigdy nie jesteś sama, zawsze masz mnie po swojej stronie 🤗",
        // Nowe wiadomości
        "Pamiętaj, że po burzy zawsze wychodzi słońce ☀️",
        "Jesteś silniejsza, niż myślisz 💪",
        "Zawsze będę Twoim wsparciem, niezależnie od okoliczności 🤍"
    ]
};


    let selectedCategory = null;
    let message = "";
    const messageElement = document.getElementById('message');
    let index = 0;

    const typeMessage = () => {
        if (index < message.length) {
            messageElement.textContent += message.charAt(index);
            index++;
            setTimeout(typeMessage, 40);
        }
    };

    const card = document.querySelector('.card');
    const categorySelect = document.getElementById('categorySelect');

    // Ustal datę początkową na 16 października 2024
    const startDate = new Date(2024, 9, 16); // Miesiące są indeksowane od 0 (0 = styczeń)

    // Pobierz dzisiejszą datę i ustaw godzinę na 0:00:00
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Oblicz różnicę dni od daty początkowej
    let daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

    // Jeśli daysDiff jest ujemne (dzisiejsza data przed startDate), ustaw na 0
    if (daysDiff < 0) {
        daysDiff = 0;
    }

    // Funkcja do pobierania wiadomości na podstawie kategorii i dnia
    const getMessageForToday = (category) => {
        const categoryMessages = messages[category];
        const messageIndex = daysDiff % categoryMessages.length;
        return categoryMessages[messageIndex];
    };

    // Nasłuchiwanie zmiany wyboru kategorii
    categorySelect.addEventListener('change', function() {
        selectedCategory = categorySelect.value;
    });

    card.addEventListener('click', function(event) {
        // Sprawdzamy, czy kliknięto na select lub jego dziecko
        if (event.target.closest('#categorySelect')) {
            return;
        }

        if (!card.classList.contains('active')) {
            // Odwracanie karty z przodu na tył

            // Sprawdzamy, czy kategoria została wybrana
            if (!selectedCategory) {
                alert("Proszę wybrać kategorię przed odwróceniem karty.");
                return;
            }

            // Odwracamy kartę na tył
            card.classList.add('active');

            // Pobieramy wiadomość dla wybranej kategorii na dzisiejszy dzień
            message = getMessageForToday(selectedCategory);

            messageElement.textContent = "";
            index = 0;
            typeMessage();
        } else {
            // Odwracanie karty z tyłu na przód

            // Odwracamy kartę na przód
            card.classList.remove('active');
        }
    });

    // Animacja spadających emotikon
    setInterval(() => {
        const emojiArray = ['🌸', '💗', '🌺', '❤️', '🌹', '💕'];
        const emojiCount = Math.floor(Math.random() * 3) + 3;
        for (let i = 0; i < emojiCount; i++) {
            const emoji = document.createElement("div");
            emoji.className = "emoji";
            emoji.textContent = emojiArray[Math.floor(Math.random() * emojiArray.length)];
            emoji.style.left = Math.random() * 100 + "vw";
            emoji.style.animationDuration = Math.random() * 3 + 2 + "s";
            emoji.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(emoji);

            emoji.addEventListener("animationend", () => {
                emoji.remove();
            });
        }
    }, 400);

    const updateCountdown = () => {
        const now = new Date();
        const nextMidnight = new Date(now);
        nextMidnight.setHours(24, 0, 0, 0);

        const timeRemaining = nextMidnight - now;

        if (timeRemaining > 0) {
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            document.getElementById('countdown').textContent = `Nowa wiadomość dostępna za: ${hours}h ${minutes}m ${seconds}s`;
        } else {
            document.getElementById('countdown').textContent = "Nowa wiadomość jest dostępna!";
        }
    };

    setInterval(updateCountdown, 1000);
});
