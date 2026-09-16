const headingMessages = [
    "Clocktype. Tik Tok!",
    "clock centers toggle time pause",
    "drag clock hands to reposition"
];
const headingEl = document.querySelector(".infotext");
let headingIndex = 0;

setInterval(() => {
    headingEl.classList.add("fade-out");
    setTimeout(() => {
        headingIndex = (headingIndex + 1) % headingMessages.length;
        headingEl.textContent = headingMessages[headingIndex];
        headingEl.classList.remove("fade-out");
    }, 600);
}, 6000);
