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
    phoneInput.style.borderColor = "";
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

endDateInput.addEventListener("input", () => {
  if (endDateInput.value.trim() === "") {
    endDateInput.style.borderColor = "";
  } else if (
    startDateInput.value &&
    endDateInput.value < startDateInput.value
  ) {
    endDateInput.style.borderColor = "red";
  } else {
    endDateInput.style.borderColor = "green";
  }
});
// === CANCEL BUTTON ===
const cancelBtn = document.querySelector(".btn_cancel");
const closeBtn = document.querySelector(".close_btn");
closeBtn.addEventListener("click", () => {
  modal.close();
  workerForm.reset();
  photoPreview.innerHTML = '<span class="photo-preview-placeholder"></span>';
});
cancelBtn.addEventListener("click", () => {
  modal.close();
  workerForm.reset();
  photoPreview.innerHTML = '<span class="photo-preview-placeholder"></span>';
});
// === GLOBAL EMPLOYEES STATE ===
let employees = [];
let zones = [];

fetch("worker.json")
  .then((res) => res.json())
  .then((data) => {
    employees = data.employees;
    zones = data.zones;
    displayUnassignedStaff();
  })
  .catch((err) => console.error("Error loading worker.json:", err));
// === DISPLAY UNASSIGNED STAFF ===
const staffContainer = document.querySelector(".first_box");

function displayUnassignedStaff() {
  staffContainer.querySelectorAll(".profile").forEach((card) => card.remove());

  employees.forEach((emp) => {
    const card = document.createElement("div");
    card.classList.add("profile");

    card.innerHTML = `
      <div class="img_profil">${emp.name.charAt(0)}${
      emp.name.split(" ")[1]?.charAt(0) || ""
    }</div>
      <div class="info_profil">
        <h3>${emp.name}</h3>
        <p>${emp.role}</p>
      </div>
      <span><i class="fa-solid fa-xmark icone_close"></i></span>
      
      `;
    const supp_profil = card.querySelector(".icone_close");
    supp_profil.addEventListener("click", () => {
      card.remove();
    });
    staffContainer.insertBefore(card, document.getElementById("add_worker"));
    // staffContainer.appendChild(card);
  });
}

// === ADD EXPERIENCE ===
const addExpBtn = document.querySelector(".add-experience-btn");
const expContainer = document.getElementById("experienceContainer");

addExpBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("experience-item");

  div.innerHTML = `
  <button type="button" class="remove-exp" style="margin-left: 450px;">X</button>
    <input type="text" placeholder="Job Title" class="exp-input">
    <input type="text" placeholder="Company Name" class="exp-input">
    <input type="text" placeholder="Duration (e.g., 2020-2023)" class="exp-input">
  `;

  expContainer.appendChild(div);

  // remove button
  div.querySelector(".remove-exp").addEventListener("click", () => {
    div.remove();
  });
});

const submitBtn = document.querySelector(".btn_addWorker");
const workerForm = document.getElementById("workerForm");

submitBtn.addEventListener("click", () => {
  // Check required fields
  if (
    !nameRegex.test(nameInput.value) ||
    !emailRegex.test(emailInput.value) ||
    !startDateInput.value ||
    (endDateInput.value && endDateInput.value < startDateInput.value)
  ) {
    alert("Please fill all required fields correctly.");
    return;
  }

  // Collect Experience
  const expItems = document.querySelectorAll(".experience-item");
  let experience = [];

  expItems.forEach((item) => {
    const inputs = item.querySelectorAll(".exp-input");
    experience.push({
      title: inputs[0].value,
      company: inputs[1].value,
      duration: inputs[2].value,
    });
  });

  const newEmployee = {
    name: nameInput.value,
    role: role.value,
    photo: photo.value,
    email: emailInput.value,
    phone: phoneInput.value,
    startDate: startDateInput.value,
    endDate: endDateInput.value,
    experience: experience,
  };

  // Add to global state
  employees.push(newEmployee);

  console.log("Employee added:", newEmployee);
  console.log("All employees:", employees);
  displayUnassignedStaff();

  // Close modal + reset form
  modal.close();
  workerForm.reset();
  photoPreview.innerHTML = '<span class="photo-preview-placeholder"></span>';
});

const photoInput = document.getElementById("photo");
const photoPreview = document.getElementById("photoPreview");

photoInput.addEventListener("input", () => {
  const url = photoInput.value.trim();

  if (url === "") {
    photoPreview.innerHTML = '<span class="photo-preview-placeholder"></span>';
    return;
  }

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Preview";
  img.style.width = "120px";
  img.style.height = "120px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "8px";

  photoPreview.innerHTML = "";
  photoPreview.appendChild(img);
});

const planFloor = document.querySelector(".floor_grid");
const addBtnFloor = document.querySelectorAll(".add_zone");

addBtnFloor.forEach((addbtn) => {
  addbtn.addEventListener("click", (event) => {
    const zone = event.target.parentElement;

    const modalAssignement = zone.querySelector(".menu_unassigned");

    modalAssignement.innerHTML = "";

    const modalContent = document.createElement("div");
    modalContent.style.padding = "20px";
    modalContent.innerHTML = `
      <div class="dialog-header">
        <h2>Assigner un employé</h2>
        <button class="close-dialog-zone">✕</button>
      </div>
      <div class="list_worker"></div>
    `;

    modalAssignement.appendChild(modalContent);

    const listeContainer = modalAssignement.querySelector(".list_worker");

    const zoneName = zone.querySelector("h3").textContent;
    const currentZone = zones.find((z) => z.name === zoneName);
    const allowed = currentZone ? currentZone.allowedRoles : [];

    employees.forEach((emp) => {
      if (!allowed.includes(emp.role)) return;

      const card = document.createElement("div");
      card.classList.add("profile");
      card.style.cursor = "pointer";

      card.innerHTML = `
    <div class="img_profil">${emp.name.charAt(0)}${
        emp.name.split(" ")[1]?.charAt(0) || ""
      }</div>
    <div class="info_profil">
      <h3>${emp.name}</h3>
      <p>${emp.role}</p>
    </div>
  `;

      card.addEventListener("click", () => {
        alert(`${emp.name} assigné(e) à ${zoneName}`);
        modalAssignement.close();
      });

      listeContainer.appendChild(card);
    });

    modalAssignement.showModal();

    const closeBtnDialog = modalAssignement.querySelector(".close-dialog-zone");
    closeBtnDialog.addEventListener("click", () => {
      modalAssignement.close();
    });

    // Fermer en cliquant dehors
    modalAssignement.addEventListener("click", (e) => {
      if (e.target === modalAssignement) {
        modalAssignement.close();
      }
    });
  });
});
