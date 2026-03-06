const btn = document.getElementById("voiceBtn");
let icon = document.querySelector("#voiceBtn p");
let butt = document.querySelector("#voiceBtn span");

let isListening = false;   
let greeted = false;      
let cvDownloaded = false;

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

let stopTimer;

btn.addEventListener("click", () => {

    icon.classList.toggle("close");
    btn.classList.toggle("animate");

    function startListening() {
        recognition.start();

        stopTimer = setTimeout(() => {
            recognition.stop();
            icon.classList.remove("close");
            btn.classList.remove("animate");
            isListening = false;
        }, 3000);
    }

    if (!isListening) {

        if (!greeted) {
            const greeting = new SpeechSynthesisUtterance("Hi Toğrul");
            greeting.lang = "en-US";

            window.speechSynthesis.speak(greeting);

            greeting.onend = () => {
                startListening();   // 🔥 hər şey burada idarə olunur
            };

            greeted = true;
        } else {
            startListening();       // 🔥 eyni funksiya
        }

        isListening = true;

    } else {
        clearTimeout(stopTimer);
        recognition.stop();
        isListening = false;
    }
});

recognition.onresult = function (event) {
    const speech = event.results[0][0].transcript.toLowerCase();

    if (speech.includes("about")) {
        document.getElementById("about")
            .scrollIntoView({ behavior: "smooth" });

        const response = new SpeechSynthesisUtterance("Here is About Toğrul");
        window.speechSynthesis.speak(response);
    }

    if (speech.includes("contact")) {
        document.getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });

        const response = new SpeechSynthesisUtterance("Here is Contact with Toğrul");
        window.speechSynthesis.speak(response);
    }
    if (speech.includes("certificates")) {
        document.getElementById("certificates")
            .scrollIntoView({ behavior: "smooth" });

        const response = new SpeechSynthesisUtterance("Here are Toğrul's certificates");
        window.speechSynthesis.speak(response);
    }

    if (speech.includes("projects")) {
        document.getElementById("projects")
            .scrollIntoView({ behavior: "smooth" });

        const response = new SpeechSynthesisUtterance("Here is Toğrul's projects");
        window.speechSynthesis.speak(response);
    }
    if (speech.includes("download") || speech.includes("cv")) {

        if (!cvDownloaded) {
            document.getElementById("downloadCV").click();

            const response = new SpeechSynthesisUtterance(
                "Your CV is being downloaded"
            );
            window.speechSynthesis.speak(response);

            cvDownloaded = true; 
        } else {
            const response = new SpeechSynthesisUtterance(
                "The CV has already been downloaded"
            );
            window.speechSynthesis.speak(response);
        }
    };
    if(speech.includes("refresh") || speech.includes("reload")){
        location.reload(true);

        const response = new SpeechSynthesisUtterance(
                "The page has already been reloaded"
            );
            window.speechSynthesis.speak(response);
    };
    if (speech.includes("linkedln") || speech.includes("linkedin")) {
            document.getElementById("linkedln").click();

            const response = new SpeechSynthesisUtterance(
                "Here is Toghrul's Linkedln Account"
            );
            window.speechSynthesis.speak(response);

    };
    if (speech.includes("github") || speech.includes("git")) {
            document.getElementById("github").click();

            const response = new SpeechSynthesisUtterance(
                "Here is Toghrul's Github Account"
            );
            window.speechSynthesis.speak(response);

    };

};
