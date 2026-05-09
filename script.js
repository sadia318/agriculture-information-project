// FILTER SYSTEM
document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", filterGuides);
});

document.addEventListener("DOMContentLoaded", function () {
  const type = document.getElementById("filterType");
  const season = document.getElementById("filterSeason");
  const method = document.getElementById("filterMethod");

  [type, season, method].forEach((select) => {
    select.addEventListener("change", filterGuides);
  });

  function filterGuides() {
    let typeVal = type.value;
    let seasonVal = season.value;
    let methodVal = method.value;

    let cards = document.querySelectorAll("#guideContainer .guide");

    cards.forEach((card) => {
      let match =
        (typeVal === "all" || card.dataset.type === typeVal) &&
        (seasonVal === "all" || card.dataset.season === seasonVal) &&
        (methodVal === "all" || card.dataset.method === methodVal);

      card.style.display = match ? "block" : "none";
    });
  }
});

// DETAILS VIEW
function showDetails(type) {
  let content = "";

  if (type === "rice") {
    content = `
<div class="card p-4 shadow">
<h4>Rice Farming - Step by Step</h4>
<ol>
<li>Prepare land</li>
<li>Select seeds</li>
<li>Irrigation management</li>
<li>Fertilizer application</li>
<li>Harvest</li>
</ol>
<p><strong>Tips:</strong> Use modern irrigation and pest monitoring.</p>
</div>`;
  }

  if (type === "vegetable") {
    content = `
<div class="card p-4 shadow">
<h4>Vegetable Farming - Step by Step</h4>
<ol>
<li>Select seasonal crops</li>
<li>Use organic compost</li>
<li>Maintain spacing</li>
<li>Water regularly</li>
<li>Harvest fresh</li>
</ol>
<p><strong>Tips:</strong> Avoid chemical pesticides.</p>
</div>`;
  }

  if (type === "fruit") {
    content = `
<div class="card p-4 shadow">
<h4>Fruit Farming - Step by Step</h4>
<ol>
<li>Select saplings</li>
<li>Plant properly</li>
<li>Pruning</li>
<li>Fertilization</li>
<li>Harvest</li>
</ol>
<p><strong>Tips:</strong> Monitor diseases regularly.</p>
</div>`;
  }

  document.getElementById("detailsBox").innerHTML = content;
}

// VALIDATION SCRIPT

(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

// Optional success message
document.getElementById("contactForm").addEventListener("submit", function (e) {
  if (this.checkValidity()) {
    e.preventDefault();
    alert("Your request has been submitted successfully!");
  }
});
