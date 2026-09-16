const headingMessages = [
    "Clocktype. Tik Tok!",
    "Press center of each clock to pause/play",
    "Drag clock hands around to reposition"
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
