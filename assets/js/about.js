
document.addEventListener("DOMContentLoaded", function () {
  const showcase = document.querySelector("[data-service-showcase]");

  if (!showcase || !window.OAKLINE_CONFIG || !Array.isArray(window.OAKLINE_CONFIG.services)) {
    return;
  }

  const services = window.OAKLINE_CONFIG.services;
  if (!services.length) return;

  const image = document.querySelector("[data-service-showcase-image]");
  const badge = document.querySelector("[data-service-showcase-badge]");
  const kicker = document.querySelector("[data-service-showcase-kicker]");
  const title = document.querySelector("[data-service-showcase-title]");
  const text = document.querySelector("[data-service-showcase-text]");
  const link = document.querySelector("[data-service-showcase-link]");
  const prev = document.querySelector("[data-service-showcase-prev]");
  const next = document.querySelector("[data-service-showcase-next]");

  let index = 0;

  function renderSlide(i) {
    const service = services[i];
    if (!service) return;

    if (image) {
      image.style.opacity = "0";
      setTimeout(function () {
        image.src = service.image;
        image.alt = service.name + " category image";
        image.style.opacity = "1";
      }, 140);
    }

    if (badge) {
      badge.textContent = "Category " + String(i + 1).padStart(2, "0");
    }

    if (kicker) {
      kicker.textContent = "Service category";
    }

    if (title) {
      title.textContent = service.name;
    }

    if (text) {
      text.textContent = service.summary;
    }

    if (link) {
      link.href = service.url;
      link.textContent = "Learn more";
    }
  }

  if (next) {
    next.addEventListener("click", function () {
      index = (index + 1) % services.length;
      renderSlide(index);
    });
  }

  if (prev) {
    prev.addEventListener("click", function () {
      index = (index - 1 + services.length) % services.length;
      renderSlide(index);
    });
  }

  renderSlide(index);
});






document.addEventListener("DOMContentLoaded", function () {
  if (window.Oakline) {
    window.Oakline.createFAQSchema("#about-faq .accordion-item");
  }
});
