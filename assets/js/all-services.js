document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll("[data-hero-count]");

  if (!counters.length) return;

  function formatNumber(value) {
    return String(value).padStart(2, "0");
  }

  function animateCounter(counter) {
    const target = Number(counter.getAttribute("data-hero-count")) || 0;
    const duration = 1100;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      counter.textContent = formatNumber(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = formatNumber(target);
      }
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  counters.forEach(function (counter) {
    observer.observe(counter);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  if (window.Oakline) {
    window.Oakline.createFAQSchema("#services-faq .accordion-item");
  }
});
