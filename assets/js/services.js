(function () {
  "use strict";

  var serviceData = {
    "tree-removal": {
      index: 1,
      title: "Tree Removal Provider Matching",
      eyebrow: "Tree Removal",
      image: "assets/images/service-1.jpg",
      intro: "Submit project details for a tree removal request and compare participating local provider options before deciding how to proceed.",
      overviewTitle: "Removal requests vary by tree size, setting, condition, and access.",
      overview: "Oakline helps homeowners organize removal details in one place so participating providers can understand the project context. Oakline does not remove trees, dispatch crews, quote final pricing, or guarantee provider availability.",
      compare: ["Tree size and lean", "Distance to structures", "Access for equipment", "Cleanup and haul-away scope"],
      scenarios: [
        ["Dead or declining tree", "A tree appears dead, cracked, hollow, or unstable and you want local options for next steps."],
        ["Crowded near a structure", "Branches, trunk position, or root location may complicate removal around a home, fence, or driveway."],
        ["Project scope is unclear", "You want to compare provider approaches before deciding whether removal is the right path."]
      ],
      steps: ["Describe the tree location and visible condition.", "Share access details, photos if available, and timing needs.", "Participating providers may follow up with scope and availability.", "You choose whether to continue directly with a provider."],
      faqs: [
        ["Does Oakline remove the tree?", "No. Oakline is an independent matching platform. Participating providers are independent and set their own pricing, scheduling, licensing, insurance, warranties, and service terms."],
        ["Can I request removal for a tree near my house?", "Yes. Your request can describe nearby structures, access limits, and visible concerns so local providers can decide whether they may be suited for the project."],
        ["Will I receive a guaranteed quote?", "No. Final pricing comes from participating providers after they review your request and any site-specific details."],
        ["Should I verify licensing and insurance?", "Yes. Homeowners are responsible for confirming any provider's license, insurance, and qualifications before hiring."]
      ],
      cta: "Start a tree removal request"
    },
    "tree-trimming-pruning": {
      index: 2,
      title: "Tree Trimming & Pruning Provider Matching",
      eyebrow: "Trimming & Pruning",
      image: "assets/images/service-2.jpg",
      intro: "Compare local provider options for trimming, pruning, canopy clearance, and maintenance-focused tree requests.",
      overviewTitle: "Pruning decisions depend on goals, access, tree type, and property context.",
      overview: "Oakline gives homeowners a structured way to describe overgrowth, clearance needs, seasonal concerns, and tree condition. Providers may contact you with their own scope recommendations and availability.",
      compare: ["Canopy clearance goals", "Branch overhang", "Tree condition", "Cleanup preferences"],
      scenarios: [
        ["Overgrown limbs", "Branches are approaching the roofline, driveway, sidewalk, or neighboring property."],
        ["Light shaping", "A homeowner wants a cleaner canopy or more usable outdoor space without guessing which provider to call."],
        ["Maintenance planning", "You want to compare what providers suggest before committing to a trimming scope."]
      ],
      steps: ["Select trimming or pruning as the request category.", "Describe clearance needs and any visible branch concerns.", "Review local provider responses and proposed next steps.", "Continue directly with the provider you prefer."],
      faqs: [
        ["Does Oakline decide what should be pruned?", "No. Oakline helps route your request. Participating providers are responsible for recommendations, scope, and service terms."],
        ["Can providers help with branches near wires?", "Some providers may have rules or limitations for utility-adjacent work. Availability and scope must be discussed with the provider and relevant utility if applicable."],
        ["Is cleanup included?", "Cleanup options vary by provider. Include your preferences in the request so providers can address them."],
        ["Can I compare more than one option?", "Oakline is designed to help homeowners review available provider options when participation and location coverage allow."]
      ],
      cta: "Compare trimming options"
    },
    "stump-grinding-removal": {
      index: 3,
      title: "Stump Grinding & Removal Provider Matching",
      eyebrow: "Stump Grinding",
      image: "assets/images/service-3.jpg",
      intro: "Submit stump details and review participating provider options for grinding depth, debris handling, access, and yard restoration needs.",
      overviewTitle: "Stump requests are shaped by diameter, root spread, access, and surface plans.",
      overview: "Oakline helps collect practical stump information so local providers can determine whether the request fits their availability and equipment. Oakline does not operate grinding equipment or set provider pricing.",
      compare: ["Stump diameter", "Grinding depth", "Root flare and access", "Wood chips and fill preferences"],
      scenarios: [
        ["Visible stump in lawn", "A leftover stump is blocking planting, mowing, or outdoor use."],
        ["Multiple small stumps", "Several stumps or roots remain after earlier tree work and need provider review."],
        ["Tight access", "A side yard, gate, slope, or hardscape may affect provider equipment options."]
      ],
      steps: ["Share stump count, approximate size, and access details.", "Choose preferred cleanup or chip handling notes.", "Participating providers may discuss grinding depth and timing.", "Decide whether to continue with a provider directly."],
      faqs: [
        ["Does Oakline grind stumps?", "No. Oakline is a matching platform and does not perform stump grinding or removal."],
        ["What affects stump grinding options?", "Diameter, root flare, nearby utilities, access, terrain, and cleanup preferences may affect provider recommendations."],
        ["Can I request multiple stumps?", "Yes. Include stump count and any access limits so participating providers can evaluate the request."],
        ["Who handles final terms?", "Participating providers set all pricing, scheduling, warranties, and service terms."]
      ],
      cta: "Start a stump request"
    },
    "emergency-storm-cleanup": {
      index: 4,
      title: "Emergency Storm Cleanup Provider Matching",
      eyebrow: "Storm Cleanup",
      image: "assets/images/service-4.jpg",
      intro: "After wind or storm damage, submit the situation details and compare available local provider options for cleanup-related tree work.",
      overviewTitle: "Urgent requests need clear details about hazards, access, and timing.",
      overview: "Oakline helps homeowners send structured storm cleanup details to participating providers. Oakline does not provide emergency services, guarantee same-day response, or direct provider crews.",
      compare: ["Urgency and access", "Fallen limb location", "Nearby structures", "Debris cleanup scope"],
      scenarios: [
        ["Fallen branches", "Large limbs are on the lawn, driveway, or near the home after heavy wind."],
        ["Blocked access", "A tree or limb may be limiting driveway, sidewalk, or yard access."],
        ["Follow-up assessment", "After immediate danger is controlled, you want options for cleanup or remaining tree concerns."]
      ],
      steps: ["Describe the storm event, location, and visible obstructions.", "Note any immediate safety concerns and access restrictions.", "Available providers may respond based on coverage and schedule.", "You coordinate directly with any provider you choose."],
      faqs: [
        ["Is Oakline an emergency response company?", "No. Oakline is an independent matching platform and does not dispatch emergency crews."],
        ["What should I do if there is immediate danger?", "Contact emergency services, your utility, or the appropriate local authority for urgent hazards before using a matching platform."],
        ["Is same-day help guaranteed?", "No. Provider availability varies by location, weather impact, and schedule."],
        ["Can I include photos?", "The contact flow can reference visible conditions in your message. Providers may request photos or further details directly."]
      ],
      cta: "Start a storm cleanup request"
    },
    "lot-land-clearing": {
      index: 5,
      title: "Lot & Land Clearing Provider Matching",
      eyebrow: "Lot & Land Clearing",
      image: "assets/images/service-5.jpg",
      intro: "Compare participating provider options for brush, small trees, overgrowth, and property preparation requests.",
      overviewTitle: "Clearing requests depend on acreage, vegetation, terrain, access, and disposal needs.",
      overview: "Oakline helps homeowners explain the property area, clearing goals, and site constraints. Participating providers decide whether they can support the project and what terms may apply.",
      compare: ["Clearing area size", "Brush density", "Terrain and gates", "Haul-away needs"],
      scenarios: [
        ["Overgrown side lot", "Brush or small trees are reducing usable space or access around a property."],
        ["Pre-project clearing", "A homeowner wants the area reviewed before landscaping, fencing, or outdoor improvements."],
        ["Access corridor", "Vegetation needs to be cleared for a driveway edge, path, utility access, or service route."]
      ],
      steps: ["Describe the area size and vegetation type.", "Share terrain, gate, and access notes.", "Review provider availability and possible clearing approaches.", "Proceed only if a provider's terms fit your needs."],
      faqs: [
        ["Does Oakline clear land?", "No. Oakline does not perform clearing, hauling, or site work. It helps route requests to participating local providers."],
        ["Can I submit a small clearing request?", "Yes. Include the approximate area and vegetation type so providers can determine fit."],
        ["Who handles disposal or haul-away?", "Cleanup and disposal options vary by provider and should be confirmed before hiring."],
        ["Do permits matter?", "Local rules may apply. Homeowners should confirm requirements with local authorities and any provider they consider hiring."]
      ],
      cta: "Compare clearing options"
    },
    "tree-health-assessment": {
      index: 6,
      title: "Tree Health Assessment Provider Matching",
      eyebrow: "Tree Health",
      image: "assets/images/service-6.jpg",
      intro: "Connect with participating local providers who may review visible tree condition concerns and discuss assessment or next-step options.",
      overviewTitle: "Tree condition questions are best framed with visible symptoms and site context.",
      overview: "Oakline helps homeowners describe concerns such as dead limbs, cracks, fungal growth, canopy thinning, or storm stress. Providers determine whether they can evaluate the concern and what their assessment terms include.",
      compare: ["Visible symptoms", "Tree age and setting", "Recent weather stress", "Assessment scope"],
      scenarios: [
        ["Uncertain condition", "Leaves, bark, limbs, or trunk details suggest something may be wrong."],
        ["Risk concern", "A tree is near a structure, walkway, driveway, or frequently used outdoor area."],
        ["Planning before removal", "You want provider input before deciding whether trimming, monitoring, or removal might be discussed."]
      ],
      steps: ["Describe visible symptoms and where the tree sits on the property.", "Include recent storm, drought, or construction context if relevant.", "Participating providers may contact you about assessment options.", "Review provider terms before choosing any next step."],
      faqs: [
        ["Does Oakline provide arborist assessments?", "No. Oakline does not perform inspections or assessments. Participating providers decide their own qualifications, scope, and terms."],
        ["Can I ask about a potentially risky tree?", "Yes. Describe visible concerns and proximity to structures or access areas. For immediate hazards, contact emergency services or local authorities first."],
        ["Will providers diagnose the tree from the request alone?", "Providers may need photos or an in-person review before discussing conclusions or pricing."],
        ["Should I verify credentials?", "Yes. Homeowners should verify licensing, insurance, and relevant qualifications before hiring any provider."]
      ],
      cta: "Request assessment options"
    }
  };

  function iconList(items) {
    return items.map(function (item) {
      return '<article class="premium-card" data-aos="fade-up"><span class="card-icon" data-lucide="check"></span><h3>' + item + '</h3><p>Use this detail to compare how participating providers may approach your request.</p></article>';
    }).join("");
  }

  function faqItems(items) {
    return items.map(function (item) {
      return '<article class="accordion-item"><button class="accordion-trigger" type="button" aria-expanded="false" data-accordion-trigger>' + item[0] + '<span data-lucide="chevron-down"></span></button><div class="accordion-panel"><p>' + item[1] + '</p></div></article>';
    }).join("");
  }

  function serviceStickyDetail(data, slug) {
    var services = [
      ["tree-removal", "Tree Removal", "tree-removal.html"],
      ["tree-trimming-pruning", "Trimming & Pruning", "tree-trimming-pruning.html"],
      ["stump-grinding-removal", "Stump Grinding", "stump-grinding-removal.html"],
      ["emergency-storm-cleanup", "Storm Cleanup", "emergency-storm-cleanup.html"],
      ["lot-land-clearing", "Lot & Land Clearing", "lot-land-clearing.html"],
      ["tree-health-assessment", "Tree Health Assessment", "tree-health-assessment.html"]
    ];

    var nav = services.map(function (item) {
      var active = item[0] === slug ? " service-sticky-link--active" : "";

      return '' +
        '<a class="service-sticky-link' + active + '" href="' + item[2] + '">' +
        '<span>' + item[1] + '</span>' +
        '<span data-lucide="arrow-up-right"></span>' +
        '</a>';
    }).join("");

    var compareItems = data.compare.map(function (item) {
      return '<li><span data-lucide="check"></span>' + item + '</li>';
    }).join("");

    return '' +
      '<section class="section service-sticky-detail" aria-labelledby="service-sticky-title">' +
      '<div class="container service-sticky-layout">' +

      '<aside class="service-sticky-nav" aria-label="Service categories">' +
      nav +
      '</aside>' +

      '<div class="service-sticky-main">' +

      '<div class="service-sticky-copy" data-aos="fade-up">' +
      '<p class="eyebrow">' + data.eyebrow + '</p>' +
      '<h2 id="service-sticky-title">' + data.overviewTitle + '</h2>' +

      '<p>' + data.intro + '</p>' +
      '<p>' + data.overview + '</p>' +

      '<ul class="service-sticky-checks">' +
      compareItems +
      '</ul>' +

      '<blockquote>' +
      'Start with the details you can see. Participating providers can clarify final scope, timing, pricing, and service terms directly.' +
      '</blockquote>' +

      '<p>' +
      'Oakline is an independent matching platform. Oakline does not directly perform tree work, set provider pricing, dispatch crews, or guarantee provider availability.' +
      '</p>' +
      '</div>' +

      '<div class="service-sticky-photos" data-aos="fade-left">' +
      '<img src="' + data.image + '" alt="' + data.eyebrow + ' request category" loading="lazy">' +
      '<img src="assets/images/hero-services.jpg" alt="Residential tree request planning" loading="lazy">' +
      '</div>' +

      '</div>' +
      '</div>' +
      '</section>';
  }

  function renderServicePage(data, slug) {
    var main = document.querySelector("[data-service-page]");
    if (!main || !data) return;
    document.title = data.title + " | Oakline";
    main.innerHTML = [
      '<section class="service-hero service-hero-' + slug + '"><div class="service-hero-content"><div class="service-hero-copy" data-aos="fade-up"><p class="eyebrow">' + data.eyebrow + '</p><h1>' + data.title + '</h1><p class="lead">' + data.intro + '</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">Start your request</a><a class="btn btn-ghost-dark" href="all-services.html">Compare service categories</a></div><p class="clarifier">Oakline helps compare local provider options and does not directly perform tree work.</p></div></div></section>',

      '<section class="section"><div class="container service-overview-panel"><div class="image-frame" data-aos="fade-right"><img src="' + data.image + '" alt="' + data.eyebrow + ' project setting" loading="lazy"></div><div class="content-stack" data-aos="fade-left"><p class="eyebrow">Service overview</p><h2>' + data.overviewTitle + '</h2><p>' + data.overview + '</p><div class="btn-row"><a class="btn btn-primary" href="contact.html">' + data.cta + '</a><a class="btn btn-ghost" href="all-services.html">View all services</a></div></div></div></section>',

      serviceStickyDetail(data, slug),

      '<section class="section"><div class="container"><div class="section-heading"><div><p class="eyebrow">Common scenarios</p><h2>When this request category tends to fit.</h2></div><p>These scenarios help frame the request clearly while keeping final recommendations with participating providers.</p></div><div class="scenario-strip">' + data.scenarios.map(function (item) { return '<article class="scenario-card" data-aos="zoom-in"><img src="' + data.image + '" alt="' + item[0] + '" loading="lazy"><div class="scenario-card-content"><h3>' + item[0] + '</h3><p>' + item[1] + '</p></div></article>'; }).join("") + '</div></div></section>',

      '<section class="section"><div class="container service-faq-grid"><div class="content-stack" data-aos="fade-right"><p class="eyebrow">Questions</p><h2>Clear answers before you continue.</h2><p>Oakline keeps the platform role transparent so homeowners can compare options without mistaking Oakline for a direct service provider.</p></div><div class="accordion faq-accordion" data-accordion data-aos="fade-left">' + faqItems(data.faqs) + '</div></div></section>',

      '<section class="prefooter-cta cta-service-' + data.index + '"><div class="container" data-aos="fade-up"><p class="eyebrow">Start carefully</p><h2>' + data.cta + ' with a transparent matching platform.</h2><p>Share your project details and review local provider options where participation is available.</p><div class="btn-row"><a class="btn btn-accent" href="contact.html">Submit project details</a><a class="btn btn-ghost-dark" href="all-services.html">Review all categories</a></div></div></section>'
    ].join("");

    if (window.Oakline) {
      window.Oakline.initAll(main);
      window.Oakline.createFAQSchema(".service-faq-grid .accordion-item");
    }
    if (window.AOS) window.AOS.init();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var slug = document.body.getAttribute("data-service");
    renderServicePage(serviceData[slug], slug);
  });
})();
