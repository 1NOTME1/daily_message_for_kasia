document.addEventListener("DOMContentLoaded", function() {
    const messages = {
    "miłosne": [
        "Kocham Cię najbardziej na świecie❤️",
        "Nie mogę przestać myśleć o tobie 🥰 Jesteś moim spełnionym marzeniem ✨",
        "Kocham się wpatrywać w twoje brązowe oczy niczym galaktyka🌌😊 pełne głębi i piękna, które hipnotyzują za każdym spojrzeniem😶‍🌫️💞",
        "Myśl o tym, że mam tak cudowną dziewczynę sprawia, że chcę być dla niej jeszcze lepszą wersją siebie💖",
        "Twój uśmiech jest najpiękniejszą rzeczą, jaką mogę sobie wyobrazić🤭🥰",
        "To niesamowite, że los podarował mi tak mądrą, ambitną, piękną i odważną dziewczynę, od której nauczyłem się tak wiele w tak krótkim czasie💗",
        "Każda chwila spędzona z tobą to najcenniejszy skarb w moim życiu💎❤️",
        "Kocham słuchać jak opowiadasz i śmiejesz się💖 uwielbiam twoje głosówki😊",
        "Twoja obecność sprawia, że wszystko staje się lepsze🌟💖",
        "Nie mogę się doczekać, aż znów cię zobaczę i przytulę🤗💞",
        "Każdego dnia kocham cię coraz bardziej💗✨"
    ],

    "motywujące": [
        "Wierz w siebie, jesteś zdolna do większych rzeczy, niż myślisz😊❤️‍🔥",
        "Nie zniechęcaj się, gdy stoi przed tobą przeszkoda😊 Jesteś silna i odważna, wiem, że sobie poradzisz ze wszystkim, a ja będę cię wspierał jak tylko mogę❤️‍🔥🌟",
        "🌸Bardzo się cieszę, że jesteś w moim życiu, bo jest bardziej radosne💗🌸",
        "Bardzo przydatną umiejętnością jest bycie świadomym, jakie emocje lub stan aktualnie odczuwasz, ponieważ gdy to wiesz, możesz spróbować ją poczuć, zastanowić się czy ci służy, a jeśli nie, to ją świadomie zgasić poprzez zaakceptowanie i przekierowanie swojej uwagi na coś innego💝",
        "[Only you can decide how this situation will affect you] jedno z najbardziej przydatnych zdań, które staram się pamiętać i mam je nawet zapisane na ekranie blokady💕",
        "Gdy przydarzy ci się jakaś zła sytuacja, nawet taka, której nie da się naprawić, zawsze uważam, że nawet z bardzo złych sytuacji można wyciągnąć najmniejszy plus, który w tym ogromnym minusie się znajduje. Warto go zapamiętać, bo nie raz przydał mi się w przyszłości, a sytuacja minusowa staje się chociaż minimalnie lżejsza, jeśli wiesz, że coś udało się z niej wyciągnąć🙂‍↕️💗",
        "Twoja determinacja jest inspirująca🔥❤️",
        "Każde wyzwanie to kolejna okazja do wzrostu🌱💖",
        "Wiem, że możesz wszystko, co tylko sobie postanowisz✨💗",
        "Nigdy nie trać wiary w siebie, bo jesteś niezwykła🌟🥰"
    ],

    "wspierające": [
        "Wiem, że czasami są cięższe dni, ale zawsze możesz na mnie liczyć i zawsze będę przy tobie💞 Jeśli nie fizycznie, to na pewno psychicznie😊❤️",
        "Jestem z ciebie bardzo dumny💗💗 Nawet gdy wszyscy mówią, że niewystarczająco się starasz, ja wiem, że robisz bardzo dużo i często przez to nie masz czasu dla siebie🙁❤️ Ja to widzę i bardzo cię kocham, Kasia💗❤️",
        "Zawsze będę cię wspierał w twoich celach i postanowieniach🌸❤️‍🔥 Chcę ci dawać wszystko, co najlepsze i potrzebne💝❤️",
        "Zawsze, gdy masz jakieś ważne wydarzenie następnego dnia, wyobrażam i manifestuję je w swojej głowie tak dokładnie, jak tylko potrafię, ponieważ wierzę, że myśli i to, co się chronicznie powtarza w głowie, kreuje rzeczywistość😊❤️",
        "Pamiętaj, zależy mi na tobie tak bardzo, że jestem w stanie tego samego dnia wsiąść w pociąg, by się u ciebie pojawić, jeśli tylko byś tego potrzebowała😶‍🌫️❤️",
        "Jestem tu dla ciebie, niezależnie od wszystkiego🤗💞",
        "Twoje uczucia są dla mnie najważniejsze, zawsze możesz ze mną porozmawiać😊💗",
        "Nie jesteś sama w tym, zawsze masz mnie u swojego boku💖",
        "Twoje szczęście jest moim priorytetem🌸🥰"
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
