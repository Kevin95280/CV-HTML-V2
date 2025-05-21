document.addEventListener("DOMContentLoaded", () => {
    const t = document.getElementById("secret-btn");
    t.addEventListener("click", () => {
        document.getElementById("secret").classList.add("on");
        t.classList.add("off");
    });
});
