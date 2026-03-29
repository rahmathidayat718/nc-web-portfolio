const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const desc = btn.previousElementSibling;

    desc.classList.toggle("expanded");

    if (desc.classList.contains("expanded")) {
      btn.textContent = "Show Less";
    } else {
      btn.textContent = "Read More";
    }
  });
});

// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav ul li a");

  // 🔥 toggle burger
  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    burger.classList.toggle("toggle-burger");
  });

  // 🔥 klik menu → auto close
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      burger.classList.remove("toggle-burger");
    });
  });

  // 🔥 klik luar → auto close
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove("active");
      burger.classList.remove("toggle-burger");
    }
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
