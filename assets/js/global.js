(function () {
  "use strict";

  var config = window.OAKLINE_CONFIG || {};

  function get(path) {
    return String(path || "").split(".").reduce(function (current, key) {
      return current && current[key] !== undefined ? current[key] : "";
    }, config);
  }

  function iconPath(name) {
    var icons = {
      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6.27 6.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/>',
      mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/>',
      menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
      x: '<path d="M18 6 6 18M6 6l12 12"/>',
      "chevron-down": '<path d="m6 9 6 6 6-6"/>',
      "arrow-up-right": '<path d="M7 7h10v10M7 17 17 7"/>',
      "arrow-left": '<path d="m12 19-7-7 7-7M19 12H5"/>',
      "arrow-right": '<path d="M5 12h14M12 5l7 7-7 7"/>',
      leaf: '<path d="M11 20A7 7 0 0 1 4 13c0-5 7-9 16-9 0 9-4 16-9 16Z"/><path d="M4 13c4 0 8 1 11 4"/>',
      "tree-pine": '<path d="m17 14 3 4H4l3-4M15 10l4 4H5l4-4M13 6l4 4H7l4-4M12 18v4"/>',
      check: '<path d="m20 6-11 11-5-5"/>',
      "shield-check": '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-5"/>',
      search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
      "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
      clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
      "clipboard-list": '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M8 11h8M8 16h5"/>',
      send: '<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
      "circle-dollar-sign": '<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/>',
      calendar: '<path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
      route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h4a3 3 0 0 0 0-6h-2a3 3 0 0 1 0-6h4"/><circle cx="18" cy="5" r="3"/>',
      "scan-search": '<path d="M7 3H5a2 2 0 0 0-2 2v2M17 3h2a2 2 0 0 1 2 2v2M7 21H5a2 2 0 0 1-2-2v-2M17 21h2a2 2 0 0 0 2-2v-2"/><circle cx="11" cy="11" r="3"/><path d="m21 21-4.3-4.3"/>',
      sprout: '<path d="M7 20h10M12 20V10"/><path d="M18 7c-3.5 0-6 2.5-6 6 3.5 0 6-2.5 6-6Z"/><path d="M6 7c3.5 0 6 2.5 6 6-3.5 0-6-2.5-6-6Z"/>',
      "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
      cookie: '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-4-4 4 4 0 0 1-6-6Z"/><circle cx="8.5" cy="10.5" r=".5"/><circle cx="12.5" cy="15.5" r=".5"/><circle cx="16" cy="12" r=".5"/>',
      info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
      "sliders-horizontal": '<path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3"/><path d="M14 2v4M8 10v4M16 18v4"/>',
      scissors: '<circle cx="6" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><path d="M8.12 8.12 12 12M20 4 8.12 15.88M14.8 14.8 20 20"/>',
      disc: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>',
      "cloud-lightning": '<path d="M6 18.5A4.5 4.5 0 1 1 7.1 9.6 6 6 0 1 1 18 14h1a3 3 0 0 1 0 6h-2"/><path d="m13 11-3 6h4l-2 5"/>',
      shrub: '<path d="M12 22v-7"/><path d="M8 15a5 5 0 1 1 4-8 5 5 0 1 1 4 8H8Z"/><path d="M6 19h12"/>',
      "heart-pulse": '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3.5 12H8l1.5-3 3 6 1.5-3h6.5"/>',
      "list-check": '<path d="m3 17 2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8"/>',
      "building-2": '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M3 22h18M10 6h4M10 10h4M10 14h4"/>'
    };
    return icons[name] || icons.info;
  }

  function renderIcons(root) {
    (root || document).querySelectorAll("[data-lucide]").forEach(function (node) {
      var name = node.getAttribute("data-lucide");
      node.innerHTML = '<svg aria-hidden="true" class="icon icon-' + name + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + iconPath(name) + "</svg>";
    });
  }

  function applyConfig(root) {
    (root || document).querySelectorAll("[data-config]").forEach(function (node) {
      node.textContent = get(node.getAttribute("data-config"));
    });
    (root || document).querySelectorAll("[data-config-attr]").forEach(function (node) {
      node.getAttribute("data-config-attr").split(";").forEach(function (entry) {
        var parts = entry.split(":");
        if (parts.length === 2) {
          node.setAttribute(parts[0].trim(), get(parts[1].trim()));
        }
      });
    });
  }

  function serviceLinks(className) {
    return (config.services || []).map(function (service) {
      return '<a class="' + className + '" href="' + service.url + '">' + service.name + "</a>";
    }).join("");
  }

  function buildHeader() {
    var target = document.querySelector("[data-site-header]");
    if (!target) return;
    var page = document.body.getAttribute("data-page") || "";
    var current = function (key) { return page === key ? ' aria-current="page"' : ""; };
    target.innerHTML = [
      '<header class="site-header" data-header>',
      '<div class="header-shell">',
      '<a class="brand-link" href="index.html" aria-label="Oakline home"><img src="assets/images/logo.svg" alt="Oakline logo"><span><strong data-config="brand.name"></strong><small data-config="brand.tagline"></small></span></a>',
      '<nav class="desktop-nav" aria-label="Primary navigation">',
      '<a href="index.html"' + current("home") + '>Home</a>',
      '<a href="about.html"' + current("about") + '>About</a>',
      '<div class="nav-dropdown"><a href="all-services.html"' + current("services") + '>Services <span data-lucide="chevron-down"></span></a><div class="dropdown-panel">' + serviceLinks("dropdown-link") + "</div></div>",
      '<a href="contact.html"' + current("contact") + '>Contact</a>',
      "</nav>",
      '<div class="header-actions">',
      '<a class="icon-btn" data-config-attr="href:contact.phoneHref" aria-label="Call Oakline" title="Call Oakline"><span data-lucide="phone"></span></a>',
      '<a class="icon-btn" href="contact.html" aria-label="Open contact page" title="Contact Oakline"><span data-lucide="mail"></span></a>',
      '<a class="mobile-call" data-config-attr="href:contact.phoneHref" aria-label="Call Oakline"><span data-lucide="phone"></span></a>',
      '<button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" data-menu-toggle><span data-lucide="menu"></span></button>',
      "</div>",
      "</div>",
      '<div class="mobile-menu" data-mobile-menu>',
      '<div class="mobile-menu-inner">',
      '<button class="menu-close" type="button" aria-label="Close menu" data-menu-toggle><span data-lucide="x"></span></button>',
      '<a class="mobile-brand" href="index.html"><img src="assets/images/logo.svg" alt="Oakline logo"><span data-config="brand.name"></span></a>',
      '<nav aria-label="Mobile navigation"><a href="index.html">Home</a><a href="about.html">About</a><a href="all-services.html">All Services</a>' + serviceLinks("mobile-service-link") + '<a href="contact.html">Contact</a></nav>',
      '<div class="mobile-menu-cta"><a class="btn btn-primary" href="contact.html">Start your request</a><a class="btn btn-ghost-dark" data-config-attr="href:contact.phoneHref"><span data-config="contact.phoneDisplay"></span></a></div>',
      "</div>",
      "</div>",
      "</header>"
    ].join("");
  }

  function buildFooter() {
    var target = document.querySelector("[data-site-footer]");
    if (!target) return;
    var nav = (config.navigation && config.navigation.main || []).map(function (item) {
      return '<a href="' + item.url + '">' + item.label + "</a>";
    }).join("");
    var legal = (config.legal && config.legal.links || []).map(function (item) {
      return '<a href="' + item.url + '">' + item.label + "</a>";
    }).join("");
    target.innerHTML = [
      '<footer class="site-footer">',
      '<div class="footer-shell">',
      '<div class="footer-brand"><a class="brand-link footer-logo" href="index.html"><img src="assets/images/logo.svg" alt="Oakline logo"><span><strong data-config="brand.name"></strong><small data-config="brand.tagline"></small></span></a><p data-config="footer.text"></p><p class="footer-disclaimer" data-config="legal.shortDisclaimer"></p></div>',
      '<div class="footer-col"><h2>Platform</h2><div class="footer-links">' + nav + "</div></div>",
      '<div class="footer-col"><h2>Service Categories</h2><div class="footer-links">' + serviceLinks("footer-service-link") + "</div></div>",
      '<div class="footer-col"><h2>Contact & Legal</h2><address><strong data-config="company.legalName"></strong><span>Company ID: <span data-config="company.companyId"></span></span><span data-config="company.fullAddress"></span><a data-config-attr="href:contact.phoneHref" data-config="contact.phoneDisplay"></a><a data-config-attr="href:contact.emailHref" data-config="contact.email"></a><span data-config="area.serviceArea"></span></address><div class="footer-links legal-links">' + legal + "</div></div>",
      '</div><div class="footer-bottom"><p data-config="footer.copyright"></p><p>Independent platform. No direct tree removal services are performed by Oakline.</p></div>',
      "</footer>"
    ].join("");
  }

  function buildCookieBanner() {
    if (localStorage.getItem("oaklineCookieChoice")) return;
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Cookie notice");
    banner.innerHTML = '<div><strong>Cookie Preferences</strong><p>Oakline uses essential cookies and lightweight preference storage to keep the site usable and remember your choice.</p><nav><a href="privacy-policy.html">Privacy</a><a href="terms-of-service.html">Terms</a><a href="cookie-policy.html">Cookies</a></nav></div><div class="cookie-actions"><button class="btn btn-ghost-dark" type="button" data-cookie-choice="declined">Decline</button><button class="btn btn-accent" type="button" data-cookie-choice="accepted">Accept</button></div>';
    document.body.appendChild(banner);
    banner.querySelectorAll("[data-cookie-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        localStorage.setItem("oaklineCookieChoice", button.getAttribute("data-cookie-choice"));
        banner.remove();
      });
    });
  }

  function initMenu() {
    var header = document.querySelector("[data-header]");
    if (!header) return;
    header.querySelectorAll("[data-menu-toggle]").forEach(function (button) {
      button.addEventListener("click", function () {
        var expanded = document.body.classList.toggle("menu-open");
        header.querySelectorAll("[data-menu-toggle]").forEach(function (toggle) {
          toggle.setAttribute("aria-expanded", String(expanded));
        });
      });
    });
    header.querySelectorAll(".mobile-menu a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
      });
    });
  }

  function initAccordions(root) {
    (root || document).querySelectorAll("[data-accordion]").forEach(function (accordion) {
      accordion.querySelectorAll("[data-accordion-trigger]").forEach(function (trigger) {
        trigger.addEventListener("click", function () {
          var item = trigger.closest(".accordion-item");
          var open = item.classList.contains("is-open");
          accordion.querySelectorAll(".accordion-item").forEach(function (candidate) {
            candidate.classList.remove("is-open");
            var candidateTrigger = candidate.querySelector("[data-accordion-trigger]");
            if (candidateTrigger) candidateTrigger.setAttribute("aria-expanded", "false");
          });
          if (!open) {
            item.classList.add("is-open");
            trigger.setAttribute("aria-expanded", "true");
          }
        });
      });
      var first = accordion.querySelector(".accordion-item");
      if (first) {
        first.classList.add("is-open");
        var firstTrigger = first.querySelector("[data-accordion-trigger]");
        if (firstTrigger) firstTrigger.setAttribute("aria-expanded", "true");
      }
    });
  }

  function initTabs(root) {
    (root || document).querySelectorAll("[data-tab-group]").forEach(function (group) {
      var triggers = group.querySelectorAll("[data-tab-target]");
      var panels = group.querySelectorAll("[data-tab-panel]");
      function activate(id) {
        triggers.forEach(function (trigger) {
          trigger.classList.toggle("is-active", trigger.getAttribute("data-tab-target") === id);
        });
        panels.forEach(function (panel) {
          panel.classList.toggle("is-active", panel.getAttribute("data-tab-panel") === id);
        });
      }
      triggers.forEach(function (trigger) {
        trigger.addEventListener("click", function () { activate(trigger.getAttribute("data-tab-target")); });
      });
      if (triggers[0]) activate(triggers[0].getAttribute("data-tab-target"));
    });
  }

  function initSliders(root) {
    (root || document).querySelectorAll("[data-slider]").forEach(function (slider) {
      var slides = Array.prototype.slice.call(slider.querySelectorAll("[data-slide]"));
      var index = 0;
      function update() {
        slides.forEach(function (slide, i) {
          slide.classList.toggle("is-active", i === index);
        });
      }
      slider.querySelectorAll("[data-slider-next]").forEach(function (button) {
        button.addEventListener("click", function () {
          index = (index + 1) % slides.length;
          update();
        });
      });
      slider.querySelectorAll("[data-slider-prev]").forEach(function (button) {
        button.addEventListener("click", function () {
          index = (index - 1 + slides.length) % slides.length;
          update();
        });
      });
      update();
    });
  }

  function initAOS() {
    var nodes = document.querySelectorAll("[data-aos]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (node) { node.classList.add("aos-animate"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    nodes.forEach(function (node) { observer.observe(node); });
  }

  function createFAQSchema(selector) {
    var items = Array.prototype.slice.call(document.querySelectorAll(selector || ".faq-accordion .accordion-item"));
    if (!items.length) return;
    var entities = items.map(function (item) {
      var question = item.querySelector("[data-accordion-trigger]");
      var answer = item.querySelector(".accordion-panel");
      return {
        "@type": "Question",
        "name": question ? question.textContent.trim() : "",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer ? answer.textContent.trim() : ""
        }
      };
    }).filter(function (entity) { return entity.name && entity.acceptedAnswer.text; });
    if (!entities.length) return;
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": entities });
    document.head.appendChild(script);
  }

  function initAll(root) {
    applyConfig(root || document);
    renderIcons(root || document);
    initAccordions(root || document);
    initTabs(root || document);
    initSliders(root || document);
  }

  window.Oakline = {
    config: config,
    get: get,
    renderIcons: renderIcons,
    applyConfig: applyConfig,
    initAll: initAll,
    createFAQSchema: createFAQSchema
  };

  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildFooter();
    buildCookieBanner();
    initAll(document);
    initMenu();
    initAOS();
    window.AOS = window.AOS || { init: initAOS };
  });
})();
