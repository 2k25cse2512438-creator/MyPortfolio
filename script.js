
/* ---------- TYPING EFFECT ---------- */

const roleText = document.querySelector(".hero h2");

const roles = [
    "Aspiring Software Developer",
    "Computer Science Student",
    "Future Problem Solver"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
        roleText.textContent = currentRole.slice(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeRole, 1400);
            return;
        }
    } else {
        roleText.textContent = currentRole.slice(0, characterIndex - 1);
        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeRole, deleting ? 45 : 90);
}

typeRole();


/* ---------- SCROLL REVEAL ---------- */

const sections = document.querySelectorAll(".section");

sections.forEach(function(section) {
    section.classList.add("reveal");
});

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    observer.observe(section);
});


/* ---------- AUTOMATIC FOOTER YEAR ---------- */

const footer = document.querySelector("footer p");

footer.innerHTML = `Made with curiosity and code 💙 | ${new Date().getFullYear()}`;
