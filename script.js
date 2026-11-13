const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

document.querySelectorAll(".billing-option").forEach((option) => {
  option.addEventListener("click", () => {
    const billingPeriod = option.dataset.billing;
    document.querySelectorAll(".billing-option").forEach((button) => {
      const isActive = button === option;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    document.querySelectorAll(".price strong[data-monthly]").forEach((price) => {
      price.textContent = `$${price.dataset[billingPeriod]}`;
    });
  });
});

const demoForm = document.querySelector("#demo-form");
const successMessage = document.querySelector("#form-success");

demoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!demoForm.reportValidity()) return;

  const name = new FormData(demoForm).get("name").trim();
  successMessage.textContent = `Thanks, ${name}! Your demo request is ready. We’ll be in touch soon.`;
  successMessage.hidden = false;
  demoForm.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
