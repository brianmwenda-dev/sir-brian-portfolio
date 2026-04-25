// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form
const form = document.getElementById("contact-form");
const btn = document.getElementById("sendBtn");
const popup = document.getElementById("success-popup");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  // LOADING STATE
  btn.classList.add("loading");

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      popup.style.display = "flex";
    } else {
      alert("Something went wrong. Try again.");
    }

  } catch (error) {
    alert("Network error. Check connection.");
  }

  btn.classList.remove("loading");
});

/* CLOSE POPUP */
function closePopup() {
  popup.style.display = "none";
}

/*TYPING EFFECT*/

const text = "IT Practitioner | Developer | Problem Solver";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}

typingEffect();

/*SCROLL ANIMATION*/

const elements = document.querySelectorAll(".glass");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modal-image");
const modalVideo = document.getElementById("modal-video");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");

const closeBtn = document.querySelector(".close-btn");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
let mediaList = [];

/* SAMPLE PROJECT DATA */
const projectsData = {
  laundry: {
    title: "Laundry Management System",
    description: "Manages customers, services, and payments efficiently.",
    media: [
      { type: "image", src: "assets/images/laundry1.png" },
      { type: "image", src: "assets/images/laundry2.png" },
      { type: "video", src: "assets/videos/laundry.mp4" }
    ]
  }
};

/* OPEN MODAL */
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const projectKey = card.getAttribute("data-project");

    const project = projectsData[projectKey];
    mediaList = project.media;
    currentIndex = 0;

    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description;

    showSlide();
    modal.style.display = "flex";
  });
});

/* SHOW MEDIA */
function showSlide() {
  const item = mediaList[currentIndex];

  if (item.type === "image") {
    modalImg.style.display = "block";
    modalVideo.style.display = "none";
    modalImg.src = item.src;
  } else {
    modalImg.style.display = "none";
    modalVideo.style.display = "block";
    modalVideo.src = item.src;
  }
}

/* NEXT */
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % mediaList.length;
  showSlide();
};

/* PREV */
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + mediaList.length) % mediaList.length;
  showSlide();
};

/* CLOSE */
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5
  });
}

const heroText = "IT Practitioner • Developer • Problem Solver";
let j = 0;

function typeHero() {
  if (j < heroText.length) {
    document.getElementById("hero-typing").innerHTML += heroText.charAt(j);
    j++;
    setTimeout(typeHero, 40);
  }
}
typeHero();

