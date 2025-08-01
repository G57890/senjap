window.onload = function () {
  // تفعيل فتح التفاصيل عند الضغط على toggle-area
  const toggles = document.querySelectorAll(".toggle-area");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      const parent = e.target.closest(".p-div");
      parent.classList.toggle("open");
    });
  });

  // دعم السحب للأعلى والأسفل لفتح أو إغلاق التفاصيل (جوالات)
  document.querySelectorAll(".p-div").forEach(div => {
    let startY = 0;
    let endY = 0;

    div.addEventListener("touchstart", (e) => {
      startY = e.touches[0].clientY;
    });

    div.addEventListener("touchend", (e) => {
      endY = e.changedTouches[0].clientY;
      const distance = endY - startY;

      if (distance < -30) {
        // سحب للأعلى - افتح التفاصيل
        div.classList.add("open");
      } else if (distance > 30) {
        // سحب للأسفل - سكّر التفاصيل
        div.classList.remove("open");
      }
    });
  });

  // تفعيل العنصر في التنقل بناءً على موقع القسم الفعلي (مش الـ h1 فقط)
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".a-nav");

    let activeIndex = -1;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 60 && rect.bottom > 60) {
        activeIndex = index;
      }
    });

    if (activeIndex !== -1) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLinks[activeIndex].classList.add("active");
    }
  });
};

