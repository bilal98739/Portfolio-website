// ===============================
// script.js — Portfolio Interactivity
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // === Smooth Scroll ===
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // === Project Filter ===
  const filterInput = document.getElementById("project-filter");
  const projects = document.querySelectorAll(".project");

  if (filterInput) {
    filterInput.addEventListener("input", e => {
      const filterText = e.target.value.toLowerCase();
      projects.forEach(project => {
        const title = project.querySelector("h3").textContent.toLowerCase();
        const tags = project.dataset.tags.toLowerCase();
        project.style.display = (title.includes(filterText) || tags.includes(filterText)) 
          ? "block" 
          : "none";
      });
    });
  }

  // === Contact Form Message ===
  const form = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      // Simple success feedback
      formMessage.textContent = "✅ Thank you! Your message has been sent.";
      formMessage.style.color = "green";

      // Clear form
      form.reset();

      // Remove message after 4 seconds
      setTimeout(() => {
        formMessage.textContent = "";
      }, 4000);
    });
  }

  // === Scroll Animation (Reveal Sections) ===
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  sections.forEach(section => observer.observe(section));

  // === Gallery Interactivity and Random Images ===
// === Gallery Interactivity and Random Images ===
document.addEventListener("DOMContentLoaded", () => {
  const galleryList = document.querySelector(".gallery-list");
  const categories = ["technology", "nature", "city", "architecture", "abstract", "travel"];

  function loadRandomImages() {
    if (!galleryList) return;
    galleryList.innerHTML = ""; // Clear old images

    for (let i = 0; i < 6; i++) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];

      // ✅ Use Unsplash source that always works
      const img = document.createElement("img");
      img.src = `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?q=80&w=400&h=300&fit=crop`;
      img.alt = `${randomCategory} photo`;
      img.loading = "lazy";

      img.onerror = () => {
        img.src = `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 999)}`;
      };

      galleryList.appendChild(img);
    }
  }

  const galleryHeading = document.getElementById("gallery-heading");
  if (galleryHeading) galleryHeading.addEventListener("click", loadRandomImages);

  // Run once on page load
  loadRandomImages();
});
