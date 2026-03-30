document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mobileNavToggle");
  const menu = document.getElementById("navbarNav");

  if (!toggle || !menu) return;

  const setOpen = (isOpen) => {
    menu.classList.toggle("is-open", isOpen);
    menu.setAttribute("aria-hidden", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  const isCurrentlyOpen = () => menu.classList.contains("is-open");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!isCurrentlyOpen());
  });

  menu.addEventListener("click", (e) => {
    // Close after clicking any link/button inside the dropdown
    const target = e.target;
    if (target && (target.tagName === "A" || target.tagName === "BUTTON")) {
      setOpen(false);
    }
  });

  document.addEventListener("click", () => {
    if (isCurrentlyOpen()) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isCurrentlyOpen()) setOpen(false);
  });

  // Ensure menu doesn't stay open if user resizes to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992 && isCurrentlyOpen()) setOpen(false);
  });
});

