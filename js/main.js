```javascript
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Menu responsive per smartphone e tablet
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Chiudi menu" : "Apri menu"
      );

      toggle.textContent = isOpen ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Apri menu");
        toggle.textContent = "☰";
      });
    });
  }

  // Anno automatico nel footer
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Moduli: preparano un'email tramite il programma di posta
  document.querySelectorAll("[data-contact-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const data = new FormData(form);

      const nome = data.get("nome") || "";
      const email = data.get("email") || "";
      const telefono = data.get("telefono") || "";
      const servizio = data.get("servizio") || "Richiesta informazioni";
      const messaggio = data.get("messaggio") || "";
      const dataPreferita = data.get("data") || "Da concordare";

      const subject = encodeURIComponent(
        "Richiesta dal sito: " + servizio
      );

      const body = encodeURIComponent(
        "Nome: " + nome + "\n" +
        "Email: " + email + "\n" +
        "Telefono: " + telefono + "\n" +
        "Servizio: " + servizio + "\n" +
        "Data preferita: " + dataPreferita + "\n\n" +
        "Messaggio:\n" + messaggio
      );

      const status = form.querySelector(".form-status");

      if (status) {
        status.textContent =
          "Apertura del programma email. Controlla la richiesta e premi Invia.";
        status.hidden = false;
      }

      // Sostituisci questo indirizzo con quello reale dello studio.
      window.location.href =
        "mailto:info@tuostudio.it?subject=" +
        subject +
        "&body=" +
        body;
    });
  });
});
```