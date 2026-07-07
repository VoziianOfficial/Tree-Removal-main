document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("[data-request-form]");
  if (!form) return;

  var sourcePage = form.querySelector("[name='sourcePage']");
  var startedAt = form.querySelector("[name='formStartedAt']");
  var status = form.querySelector("[data-form-status]");

  if (sourcePage) sourcePage.value = window.location.pathname.split("/").pop() || "contact.html";
  if (startedAt) startedAt.value = String(Date.now());

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (status) {
      status.className = "form-status";
      status.textContent = "Sending your request...";
    }

    fetch(form.getAttribute("action"), {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    })
      .then(function (response) {
        return response.json().then(function (json) {
          return { ok: response.ok, json: json };
        });
      })
      .then(function (result) {
        if (result.ok && result.json && result.json.success) {
          if (status) {
            status.className = "form-status is-success";
            status.textContent = result.json.message || window.Oakline.config.forms.successMessage;
          }
          form.reset();
          if (sourcePage) sourcePage.value = window.location.pathname.split("/").pop() || "contact.html";
          if (startedAt) startedAt.value = String(Date.now());
          return;
        }
        if (status) {
          status.className = "form-status is-error";
          status.textContent = result.json && result.json.message ? result.json.message : window.Oakline.config.forms.errorMessage;
        }
      })
      .catch(function () {
        if (status) {
          status.className = "form-status is-error";
          status.textContent = "The request could not be sent from this browser session. Please call or email Oakline using the contact options above.";
        }
      });
  });

  if (window.Oakline) {
    window.Oakline.createFAQSchema("#contact-faq .accordion-item");
  }
});
