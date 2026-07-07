(function () {
  "use strict";

  var pages = {
    privacy: {
      title: "Privacy Policy",
      intro: "This Privacy Policy explains how Oakline collects, uses, and shares information submitted through this independent provider-matching platform.",
      blocks: [
        ["Information We Collect", "Oakline may collect contact details, project information, location details, communication preferences, browser information, and consent records when you use the website or submit a request."],
        ["How Information Is Used", "We use submitted information to operate the platform, respond to requests, route project details to participating providers where available, maintain records, improve site reliability, and comply with legal obligations."],
        ["Sharing With Participating Providers", "When you submit a request, participating providers may receive relevant project and contact details so they can decide whether to contact you regarding your request. Oakline does not control provider pricing, availability, licensing, insurance, warranties, or service terms."],
        ["Your Choices", "You may choose not to submit a request. You may also contact Oakline regarding privacy questions using the email listed in the site footer."],
        ["Data Security", "Oakline uses reasonable administrative and technical safeguards, but no website can guarantee absolute security. Avoid sending sensitive financial, medical, or government-identification information through the contact form."],
        ["Children", "The site is intended for adults seeking homeowner service-provider matching information and is not directed to children."]
      ]
    },
    terms: {
      title: "Terms of Service",
      intro: "These Terms describe the conditions for using Oakline as an independent tree-service provider matching platform.",
      blocks: [
        ["Platform Role", "Oakline is not a tree removal company and does not perform removal, trimming, stump grinding, cleanup, assessment, or land clearing services. Oakline helps users submit details and compare participating provider options."],
        ["No Service Contract With Oakline", "Submitting a request through the website does not create a direct service contract with Oakline. Any contract, quote, schedule, warranty, or service term is between the homeowner and the independent provider selected by the homeowner."],
        ["Provider Verification", "Homeowners are responsible for verifying provider licensing, insurance, qualifications, references, permits, and suitability before hiring any provider."],
        ["Availability", "Provider participation and availability vary by location, timing, service category, project complexity, and provider capacity. Oakline does not guarantee that any provider will contact you or accept a request."],
        ["User Responsibilities", "You agree to provide accurate request details and not submit unlawful, misleading, or abusive content through the website."],
        ["Limitation of Liability", "To the fullest extent allowed by law, Oakline is not responsible for provider acts, omissions, pricing, service quality, property damage, delays, cancellations, or disputes arising from independent provider services."]
      ]
    },
    cookies: {
      title: "Cookie Policy",
      intro: "This Cookie Policy explains how Oakline uses essential cookies and local browser storage to support the website experience.",
      blocks: [
        ["Essential Storage", "Oakline may use localStorage to remember your cookie banner choice and maintain basic website preferences."],
        ["Site Performance", "The site may use lightweight technical data to understand whether pages load correctly and whether interactions work as expected."],
        ["Third-Party Services", "If third-party services are added for analytics, spam prevention, or form delivery, they may use cookies according to their own policies. Oakline should disclose those services when configured."],
        ["Managing Cookies", "You can decline non-essential cookies in the banner where available, clear browser storage, or use browser controls to manage cookies."],
        ["Changes", "Oakline may update this Cookie Policy as the platform, tools, or legal requirements change."]
      ]
    }
  };

  function render() {
    var key = document.body.getAttribute("data-legal");
    var page = pages[key];
    var main = document.querySelector("[data-legal-page]");
    if (!page || !main) return;

    document.title = page.title + " | Oakline";
    main.innerHTML = [
      '<section class="legal-hero"><div class="container"><p class="eyebrow">Legal</p><h1>' + page.title + '</h1><p>' + page.intro + '</p></div></section>',
      '<section class="section section-soft"><div class="container legal-layout"><nav class="legal-nav" aria-label="Legal pages"><a href="privacy-policy.html">Privacy Policy</a><a href="terms-of-service.html">Terms of Service</a><a href="cookie-policy.html">Cookie Policy</a></nav><div class="legal-content">',
      '<div class="disclaimer-box">' + window.OAKLINE_CONFIG.legal.disclaimer + '</div>',
      page.blocks.map(function (block) { return '<article class="legal-block"><h2>' + block[0] + '</h2><p>' + block[1] + '</p></article>'; }).join(""),
      '<article class="legal-block"><h2>Contact</h2><p>Questions about this policy can be sent to <a href="' + window.OAKLINE_CONFIG.contact.emailHref + '">' + window.OAKLINE_CONFIG.contact.email + '</a>. Company information appears in the footer for transparency.</p></article>',
      '</div></div></section>',
      '<section class="prefooter-cta cta-about"><div class="container"><p class="eyebrow">Transparent platform</p><h2>Need to compare local tree-service provider options?</h2><p>Return to the request page when you are ready to submit project details. Availability may vary by location.</p><div class="btn-row"><a class="btn btn-accent" href="contact.html">Start your request</a><a class="btn btn-ghost-dark" href="all-services.html">View service categories</a></div></div></section>'
    ].join("");

    if (window.Oakline) window.Oakline.initAll(main);
    if (window.AOS) window.AOS.init();
  }

  document.addEventListener("DOMContentLoaded", render);
})();
