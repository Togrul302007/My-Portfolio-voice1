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
                "Here is Tahir's Linkedln Account"
            );
            window.speechSynthesis.speak(response);

    };
    if (speech.includes("github") || speech.includes("git")) {
            document.getElementById("github").click();

            const response = new SpeechSynthesisUtterance(
                "Here is Tahir's Github Account"
            );
            window.speechSynthesis.speak(response);

    };

};


let kap1 = document.querySelector(".project-2 .git");
function ka1(){
    window.location.href = "https://togrul302007.github.io/Kaptalbank-Demo-1/"
}

kap1.addEventListener("click",ka1)


let cley1 = document.querySelector(".project-5 .git");

function cle1(){
    window.location.href = "https://togrul302007.github.io/Product/"
}

cley1.addEventListener("click",cle1)

//https://togrul302007.github.io/infotech/

let info1 = document.querySelector(".project-3 .git");

function inf1(){
    window.location.href = "https://togrul302007.github.io/infotech/"
}

info1.addEventListener("click",inf1)

//https://togrul302007.github.io/Weather-App/

let weat1 = document.querySelector(".project-1 .git");

function wea1(){
    window.location.href = "https://togrul302007.github.io/Weather-App/"
}

weat1.addEventListener("click",wea1)
