/* =====================================================
   PRATHIKSHA PORTFOLIO — V2
   No character. More personality. More story.
===================================================== */

const cursor = document.querySelector(".cursor-glow");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
}

/* Reveal sections as they enter the viewport */
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -30px 0px"
});

revealItems.forEach((item) => observer.observe(item));

/* Active navigation link */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      );
    });
  });
}, {
  threshold: 0.35
});

sections.forEach((section) => sectionObserver.observe(section));

/* Subtle cursor enlargement on interactive elements */
document.querySelectorAll("a, button, .skill, .project, .beyond-card").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    if (cursor) {
      cursor.style.width = "280px";
      cursor.style.height = "280px";
    }
  });

  el.addEventListener("mouseleave", () => {
    if (cursor) {
      cursor.style.width = "220px";
      cursor.style.height = "220px";
    }
  });
});

/* Project details modal */
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalLabel = document.getElementById("modalLabel");

const projectDetails = {
  hostel: {
    label: "01 · IN PROGRESS",
    title: "HostelHub",
    text: "A hostel management project I'm currently building. The goal is to make hostel life easier and more organized through a clean, useful digital experience."
  },
  ideas: {
    label: "02 · EXPLORING",
    title: "What if?",
    text: "A collection of ideas around real-world problems — including smart healthcare, blood availability and smarter everyday systems. These are the kinds of problems that make me ask what technology could do differently."
  }
};

function openProject(key) {
  const data = projectDetails[key];
  if (!data || !modal) return;

  modalLabel.textContent = data.label;
  modalTitle.textContent = data.title;
  modalText.textContent = data.text;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProject() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("click", () => {
    openProject(project.dataset.project);
  });
});

document.querySelectorAll("[data-close]").forEach((element) => {
  element.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProject();
});

/* Small parallax effect for the hero artwork */
const heroArt = document.querySelector(".hero-art");

if (heroArt && window.matchMedia("(min-width: 901px)").matches) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;

    heroArt.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* Smooth anchor links */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* V5 hero interaction */
const identityCard=document.querySelector(".identity-card");
if(identityCard&&window.matchMedia("(min-width:901px)").matches){document.addEventListener("mousemove",e=>{const x=(e.clientX/window.innerWidth-.5)*10;const y=(e.clientY/window.innerHeight-.5)*10;identityCard.style.marginLeft=x+"px";identityCard.style.marginTop=y+"px"})}
document.querySelectorAll(".hero-chip").forEach(chip=>{chip.addEventListener("mouseenter",()=>chip.style.transform="translateY(-7px) scale(1.04)");chip.addEventListener("mouseleave",()=>chip.style.transform="")});


/* V8: Tech World card tilt */
document.querySelectorAll(".tech-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 800) return;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 4;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -4;
    card.style.transform = `translateY(-9px) rotateX(${y}deg) rotateY(${x}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
