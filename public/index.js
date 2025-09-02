document.addEventListener("DOMContentLoaded", () => {
    const t = document.getElementById("secret-btn");
    t.addEventListener("click", () => {
        document.getElementById("secret").classList.add("on");
        t.classList.add("off");
    });
});

document.querySelectorAll('.toggle').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    details.classList.toggle('hidden');
    button.textContent = details.classList.contains('hidden') ? '+' : '−';
  });
});

