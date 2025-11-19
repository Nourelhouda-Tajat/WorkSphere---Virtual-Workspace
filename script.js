const addbtn = document.getElementById("add_worker");
const modal = document.getElementById("modalOverlay");
console.log(addbtn, modal);
addbtn.addEventListener("click", () => {
  modal.showModal();
});

// === REGEX VALIDATION ===
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

// Date inputs
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");

// REGEX
const nameRegex = /^[A-Za-z\s]{3,}$/;
//  /^[A-Za-zÀ-ÿ\s]{3,40}$/;
const emailRegex = /^\w+@\w+\.\w+$/;
// /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^0[6-7]\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}\s?$/;
// /^(?:\+?\d{1,3})?[ ]?\d{,10}$/;

// Validate on input
nameInput.addEventListener("input", () => {
  nameInput.style.borderColor = nameRegex.test(nameInput.value)
    ? "green"
    : "red";
});

emailInput.addEventListener("input", () => {
  emailInput.style.borderColor = emailRegex.test(emailInput.value)
    ? "green"
    : "red";
});

phoneInput.addEventListener("input", () => {
  if (phoneInput.value.trim() === "") {
    phoneInput.style.borderColor = ""; // optional field
  } else {
    phoneInput.style.borderColor = phoneRegex.test(phoneInput.value)
      ? "green"
      : "red";
  }
});

// Validate start date (required)
startDateInput.addEventListener("input", () => {
  startDateInput.style.borderColor = startDateInput.value ? "green" : "red";
});

// Validate end date (optional, but must be after start date)
endDateInput.addEventListener("input", () => {
  if (endDateInput.value.trim() === "") {
    endDateInput.style.borderColor = ""; // optional field
  } else if (
    startDateInput.value &&
    endDateInput.value < startDateInput.value
  ) {
    endDateInput.style.borderColor = "red"; // end date before start date
  } else {
    endDateInput.style.borderColor = "green";
  }
});


