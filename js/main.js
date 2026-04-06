// ===============================
// READ MORE TOGGLE
// ===============================
const initReadMore = () => {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const desc = btn.previousElementSibling;

      if (!desc) return;

      desc.classList.toggle("expanded");

      btn.textContent = desc.classList.contains("expanded")
        ? "Show Less"
        : "Read More";
    });
  });
};

// ===============================
// NAVBAR (BURGER MENU)
// ===============================
const initNavbar = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav ul li a");

  if (!burger || !nav) return;

  // Toggle burger
  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    burger.classList.toggle("toggle-burger");
  });

  // Klik menu → auto close
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });

  // Klik luar → auto close
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      closeNav();
    }
  });

  const closeNav = () => {
    nav.classList.remove("active");
    burger.classList.remove("toggle-burger");
  };
};

// ===============================
// CLEAR FORM ON RELOAD
// ===============================
const resetFormsOnReload = () => {
  window.addEventListener("beforeunload", () => {
    document.querySelectorAll("form").forEach((form) => form.reset());
  });
};

// ===============================
// INIT ALL
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  initReadMore();
  initNavbar();
  resetFormsOnReload();
  typingEffect();
});

// ===============================
// TYPING EFFECT (2 WARNA)
// ===============================
const typingEffect = () => {
  const firstName = "Rahmat";
  const lastName = "Hidayat";

  const firstEl = document.getElementById("typing-first");
  const lastEl = document.getElementById("typing-last");

  let i = 0;
  let j = 0;

  const typeFirst = () => {
    if (i < firstName.length) {
      firstEl.textContent += firstName.charAt(i);
      i++;
      setTimeout(typeFirst, 80);
    } else {
      setTimeout(typeLast, 200); // jeda dikit biar smooth
    }
  };

  const typeLast = () => {
    if (j < lastName.length) {
      lastEl.textContent += lastName.charAt(j);
      j++;
      setTimeout(typeLast, 80);
    }
  };

  typeFirst();
};