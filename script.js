// Add animation styles
document.head.insertAdjacentHTML(
  "beforeend",
  `
            <style>
                @keyframes slideDown {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes fadeInScale {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            </style>
        `
);
// DOM Elements
const cartBtn = document.querySelector(".cart-btn");
const cartCount = document.getElementById("cart-count");
const modalOverlay = document.querySelector(".modal-overlay");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Cart array to store items
let cart = [];

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Add animation styles
const style = document.createElement("style");
style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
document.head.appendChild(style);

const heroBtn = document.querySelector(".hero-btn");
if (heroBtn) {
  heroBtn.addEventListener("click", function (e) {
    // Jika anchor, cegah default agar tidak lompat langsung
    e.preventDefault();
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}
