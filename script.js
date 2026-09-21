 //Dark || Light mode

let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});


document.addEventListener("DOMContentLoaded", () => {
    const cursorGlow = document.querySelector(".cursor-glow");

    if (cursorGlow) {
        document.addEventListener("mousemove", (e) => {
            cursorGlow.style.left = e.clientX + "px";
            cursorGlow.style.top = e.clientY + "px";
            cursorGlow.style.opacity = "1";
        });
    } else {
        console.log("cursor-glow element not found");
    }
});