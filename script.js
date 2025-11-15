const body = document.body;
const lightbutton = document.getElementById("lights-button");
let songbutton = "";
let decoratebutton = "";
let cakebutton = "";
let candlebutton = "";
let Birthdaycake = "";
let Candlecake = "";
let Messagebutton = "";
const paragraph = document.getElementById("paragraph");
const lights = document.getElementById("string-lights");
const greetings = document.getElementById("greetings");
const greettext = document.getElementById("greet-text");
const greetname = document.getElementById("greet-name");
const cake = document.getElementById("cake");
const Birthdaymsg = document.getElementById("message");

const bottombanner = document.getElementById("bottom-banner");

function turnOnLights() {
    body.style.transition = "background-color 5s ease"
    body.style.backgroundColor = "#e3d4ba";
    for (let i = 0; i < 5;i++) {
        const lampimage = document.createElement("img");
        lampimage.className = "lamp";
        lampimage.src = "static/lamp.png";
        lights.appendChild(lampimage);
    }
    const lamps = lights.querySelectorAll(".lamp");
    setTimeout(() => {
    lamps.forEach((lamp, i) => {
    setTimeout(() => lamp.classList.add("visible"), i * 200); 
    });
    }, 50);
    lightbutton.style.display = "none";
    const newbutton = document.createElement("button");
    newbutton.className = "buttons hidden";
    newbutton.id = "song-button";
    newbutton.addEventListener("click", turnOnMusic);
    newbutton.textContent = "Play Music";
    bottombanner.appendChild(newbutton);
    songbutton = document.getElementById("song-button");
    setTimeout(() => {
        songbutton.classList.remove("hidden");
        songbutton.classList.add("visible");  
    }, 3000);
}

function turnOnMusic() {
    songbutton.style.display = "none";
    const song = document.getElementById("song");
    const newbutton = document.createElement("button");
    newbutton.className = "buttons hidden";
    newbutton.id = "decorate-button";
    newbutton.addEventListener("click", turnOnText);
    newbutton.textContent = "Lets Decorate";
    bottombanner.appendChild(newbutton);
    decoratebutton = document.getElementById("decorate-button")
    setTimeout(() => {
        decoratebutton.classList.remove("hidden");
        decoratebutton.classList.add("visible");  
    }, 3000);
    song.play();
}

function turnOnText() {
    const leftbanner = document.getElementById("banner-left");
    const rightbanner = document.getElementById("banner-right");
    leftbanner.classList.remove("hidden");
    rightbanner.classList.remove("hidden");
    leftbanner.classList.add("visible");
    rightbanner.classList.add("visible");
    const html1 = '<h3 id="name"><span style="font-size:20px; display:flex; justify-self:center">Hey</span>Aicor</h3>'
    const html2 = '<p id="wishes" style="color:red; font-weight: bold;">🎂 Happy Birthday 🎂</p>';
    greetname.innerHTML += html1;
    setTimeout(() => {
        greettext.innerHTML += html2;  
    }, 4000);
    decoratebutton.style.display = "none";
    const newbutton = document.createElement("button");
    newbutton.className = "buttons hidden";
    newbutton.id = "cake-button";
    newbutton.addEventListener("click", deleciousCake);
    newbutton.textContent = "Most Delecious Cake Ever";
    bottombanner.appendChild(newbutton);
    cakebutton = document.getElementById("cake-button");
    setTimeout(() => {
        cakebutton.classList.remove("hidden");
        cakebutton.classList.add("visible");  
    }, 6000);
}

function deleciousCake() {
    cakebutton.style.display = "none";
    const html = '<dotlottie-wc src="https://lottie.host/4c493da4-353e-417d-8e6d-4149ff988a75/N2Ve78NRmO.lottie" class="hidden" id="birthday-cake" style="width: 300px;height: 300px" autoplay loop></dotlottie-wc>';
    cake.innerHTML += html;
    Birthdaycake = document.getElementById("birthday-cake");
    requestAnimationFrame(() => {
        Birthdaycake.classList.remove("hidden");
        Birthdaycake.classList.add("visible");
    });
    const newbutton = document.createElement("button");
    newbutton.className = "buttons hidden";
    newbutton.id = "candle-button";
    newbutton.addEventListener("click", lightCandle);
    newbutton.textContent = "Blow Out Candles";
    bottombanner.appendChild(newbutton);
    candlebutton = document.getElementById("candle-button");
    setTimeout(() => {
        candlebutton.classList.remove("hidden");
        candlebutton.classList.add("visible");  
    }, 3000);
}

function lightCandle() {
    candlebutton.style.display = "none";
    requestAnimationFrame(() => {
        Birthdaycake.classList.remove("visible");
        Birthdaycake.classList.add("hidden");
    });
    setTimeout(() => {
        Birthdaycake.style.display = "none";
        const html = '<dotlottie-wc src="https://lottie.host/98075917-dce2-4130-bae7-39598c2be8a9/Im49mHxdUG.lottie" class="visible" id="candle-cake" style="width: 300px;height: 300px" autoplay loop></dotlottie-wc>';
        cake.innerHTML += html; 
        Candlecake = document.getElementById("candle-cake");
    }, 1000);
    const newbutton = document.createElement("button");
    newbutton.className = "buttons hidden";
    newbutton.id = "message-button";
    newbutton.addEventListener("click", message);
    newbutton.textContent = "Message For You";
    bottombanner.appendChild(newbutton);
    Messagebutton = document.getElementById("message-button");
    setTimeout(() => {
        Messagebutton.classList.remove("hidden");
        Messagebutton.classList.add("visible");  
    }, 3000);
}

function message() {
    requestAnimationFrame(() => {
        Messagebutton.classList.remove("visible");
        Messagebutton.classList.add("hidden");
    });
    setTimeout(() => {
        Messagebutton.style.display = "none";
    }, 2000);
   const paragraphs = [
    "Today is a special day for you",
    "Another year has passed quietly…",
    "in the blink of an eye...",
    "So I wanted to make this for you today",
    "to thank you",
    "for the friendship we share,",
    "and for the letters you sent.",
    "They helped make my days", 
    "a little brighter.",
    "They reached me on days",
    "I didn’t even realise I needed them.",
    "Here’s what I hope for you...",
    "Whatever you're",
    "dreaming about this year,",
    "I hope you chase it softly,",
    "in your own way,",
    "without letting the world", 
    "change who you are.",
    "I hope you eventually live the life",
    "you truly want to live,",
    "and I hope you're always",
    "kind to yourself.",
    "Lastly...",
    "I'd like to wish you once more...",
    "a very Happy Birthday🌹",
    ];

    paragraphs.forEach((text,index) => {
        setTimeout(() => {
            paragraph.textContent = text;
            paragraph.classList.replace("hidden", "visible");
            setTimeout(() => {
                paragraph.classList.replace("visible", "hidden");
                setTimeout(() => {
                    paragraph.textContent = "";
                }, 3000);
            }, 4000);
             
        }, index * 8000);
    });
    Candlecake.style.display = "block";
}