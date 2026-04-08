// ARRAY + OBJECT
const testSteps = [
  { title: "Preparation", info: "Pile head cleaned and leveled." },
  { title: "Setup", info: "Hydraulic jack and reaction system installed." },
  { title: "Loading", info: "Load applied in increments." },
  { title: "Recording", info: "Settlement readings taken." }
];

// FUNCTION 1
function displaySteps() {
  const stepsContainer = document.querySelector("#steps");

  if (stepsContainer) {
    stepsContainer.innerHTML = testSteps.map(step => `
      <li><strong>${step.title}</strong>: ${step.info}</li>
    `).join("");
  }
}

// FUNCTION 2
function showTips() {
  const tips = ["Ensure safety", "Check calibration", "Record data properly"];
  const container = document.querySelector("#tips");

  if (container) {
    container.innerHTML = tips.map(tip => `<p>${tip}</p>`).join("");
  }
}

// FUNCTION 3 (FORM + localStorage + CONDITIONAL)
function handleForm(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const message = document.querySelector("#message");

  if (name.trim() !== "") {
    localStorage.setItem("username", name);
    message.textContent = `Thank you, ${name}. Submission successful.`;
  } else {
    message.textContent = "Name is required.";
  }
}

// EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
  displaySteps();
  showTips();

  const form = document.querySelector("#form");
  if (form) {
    form.addEventListener("submit", handleForm);
  }
});