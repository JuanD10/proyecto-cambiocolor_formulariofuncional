document.addEventListener("DOMContentLoaded", () => {
  const colorBtn = document.getElementById("color-btn");
  const colorLabel = document.getElementById("color-label");
  const body = document.body;

  const navbar = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav a");
  const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");

  function applyRandomColor() {
    const bgColor = getRandomColor();
    const textColor = getContrastingColor(bgColor);

  
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
    colorLabel.textContent = bgColor;

  
    navbar.style.backgroundColor = bgColor;
    navbar.style.color = textColor;

    navLinks.forEach(link => link.style.color = textColor);
    mobileMenuLinks.forEach(link => link.style.color = textColor);
  }

  function getRandomColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getContrastingColor(hexColor) {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#ffffff";
  }

  applyRandomColor();


  colorBtn.addEventListener("click", applyRandomColor);
});



//

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});
