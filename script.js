// ============================================
// ÉTAT GLOBAL DE L'APPLICATION
// ============================================
let employees = [];
let zones = [];
let assignments = {};

// ============================================
// ÉLÉMENTS DOM - RÉFÉRENCES
// ============================================
// Modal principal
const modal = document.getElementById("modalOverlay");
const addbtn = document.getElementById("add_worker");
const cancelBtn = document.querySelector(".btn_cancel");
const closeBtn = document.querySelector(".close_btn");
const submitBtn = document.querySelector(".btn_addWorker");
const workerForm = document.getElementById("workerForm");

// Champs de formulaire - Informations personnelles
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const photoInput = document.getElementById("photo");
const photoPreview = document.getElementById("photoPreview");

// Champs de formulaire - Dates
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");

// Expérience professionnelle
const addExpBtn = document.querySelector(".add-experience-btn");
const expContainer = document.getElementById("experienceContainer");

// Affichage du personnel et zones
const staffContainer = document.querySelector(".first_box");
const planFloor = document.querySelector(".floor_grid");
const addBtnFloor = document.querySelectorAll(".add_zone");

// ============================================
// EXPRESSIONS RÉGULIÈRES - VALIDATION
// ============================================
const nameRegex = /^[A-Za-z\s]{3,}$/;
const emailRegex = /^\w+@\w+\.\w+$/;
const phoneRegex = /^0[6-7]\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}\s?$/;

// ============================================
// CHARGEMENT DES DONNÉES INITIALES
// ============================================
fetch("worker.json")
  .then((res) => res.json())
  .then((data) => {
    employees = data.employees;
    zones = data.zones;
    displayUnassignedStaff();
  })
  .catch((err) => console.error("Error loading worker.json:", err));

// ============================================
// GESTION DU MODAL PRINCIPAL
// ============================================
// Ouvrir le modal
console.log(addbtn, modal);
addbtn.addEventListener("click", () => {
  modal.showModal();
});

// Fermer le modal - Bouton Close
closeBtn.addEventListener("click", () => {
  modal.close();
  workerForm.reset();
  photoPreview.innerHTML = '<span class="photo-preview-placeholder"></span>';
});

// Fermer le modal - Bouton Cancel
cancelBtn.addEventListener("click", () => {
  modal.close();
  workerForm.reset();
  photoPreview.innerHTML = '<span class="photo-preview-placeholder"></span>';
});

// ============================================
// VALIDATION EN TEMPS RÉEL DES CHAMPS
// ============================================
// Validation du nom
nameInput.addEventListener("input", () => {
  nameInput.style.borderColor = nameRegex.test(nameInput.value)
    ? "green"
    : "red";
});

// Validation de l'email
emailInput.addEventListener("input", () => {
  emailInput.style.borderColor = emailRegex.test(emailInput.value)
    ? "green"
    : "red";
});

// Validation du téléphone (optionnel)
phoneInput.addEventListener("input", () => {
  if (phoneInput.value.trim() === "") {
    phoneInput.style.borderColor = "";
  } else {
    phoneInput.style.borderColor = phoneRegex.test(phoneInput.value)
      ? "green"
      : "red";
  }
});

// Validation de la date de début (obligatoire)
startDateInput.addEventListener("input", () => {
  startDateInput.style.borderColor = startDateInput.value ? "green" : "red";
});

// Validation de la date de fin (optionnelle)
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

// ============================================
// PRÉVISUALISATION DE LA PHOTO
// ============================================
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

// ============================================
// GESTION DES EXPÉRIENCES PROFESSIONNELLES
// ============================================
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

  // Bouton de suppression d'expérience
  div.querySelector(".remove-exp").addEventListener("click", () => {
    div.remove();
  });
});

// ============================================
// SOUMISSION DU FORMULAIRE - AJOUT D'EMPLOYÉ
// ============================================
submitBtn.addEventListener("click", () => {
  // Vérification des champs obligatoires
  if (
    !nameRegex.test(nameInput.value) ||
    !emailRegex.test(emailInput.value) ||
    !startDateInput.value ||
    (endDateInput.value && endDateInput.value < startDateInput.value)
  ) {
    alert("Please fill all required fields correctly.");
    return;
  }

  // Collecte des expériences professionnelles
  const expItems = document.querySelectorAll(".experience-item");
  let experience = [];

  expItems.forEach((item) => {
    const inputs = item.querySelectorAll(".exp-input");
    if (inputs.length === 3) {
      experience.push({
        title: inputs[0].value,
        company: inputs[1].value,
        duration: inputs[2].value,
      });
    }
  });

  // Création du nouvel employé
  const newEmployee = {
    name: nameInput.value,
    role: roleInput.value,
    photo: photoInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    startDate: startDateInput.value,
    endDate: endDateInput.value,
    experience: experience,
  };

  // Ajout à l'état global
  employees.push(newEmployee);

  console.log("Employee added:", newEmployee);
  console.log("All employees:", employees);
  displayUnassignedStaff();

  // Fermeture du modal et réinitialisation du formulaire
  modal.close();
  workerForm.reset();
  photoPreview.innerHTML = '<span class="photo-preview-placeholder"></span>';
});

// ============================================
// AFFICHAGE DU PERSONNEL NON ASSIGNÉ
// ============================================
function displayUnassignedStaff() {
  // Suppression des cartes existantes
  staffContainer.querySelectorAll(".profile").forEach((card) => card.remove());

  // Création des cartes pour chaque employé
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

    // Bouton de suppression de l'employé
    const supp_profil = card.querySelector(".icone_close");
    supp_profil.addEventListener("click", () => {
      card.remove();
    });

    staffContainer.insertBefore(card, document.getElementById("add_worker"));
  });
}

// ============================================
// AFFICHAGE DES ASSIGNATIONS PAR ZONE
// ============================================
function displayZoneAssignments(zoneElement) {
  const zoneName = zoneElement.querySelector("h3").textContent;
  const container = zoneElement.querySelector(".assigned_list");

  // Création du conteneur s'il n'existe pas
  if (!container) {
    const newContainer = document.createElement("div");
    newContainer.classList.add("assigned_list");
    zoneElement.appendChild(newContainer);
    return displayZoneAssignments(zoneElement);
  }

  container.innerHTML = "";

  const assigned = assignments[zoneName] || [];

  // Création des cartes pour chaque employé assigné
  assigned.forEach((emp) => {
    const card = document.createElement("div");
    card.classList.add("assigned_card");

    card.innerHTML = `
  <img src="${emp.photo}" alt="${emp.name}" class="assigned_photo">
  <div class="assigned_info">
    <h4>${emp.name}</h4>
    <p>${emp.role}</p>
  </div>
  <button class="fa-solid fa-xmark remove_assigned" id="deleteExperience"></button>
`;

    container.appendChild(card);

    // Bouton de retrait de l'assignation
    card.querySelector(".remove_assigned").addEventListener("click", () => {
      // Retirer l'employé de la zone
      assignments[zoneName] = assignments[zoneName].filter(
        (e) => e.id !== emp.id
      );

      // Remettre l'employé dans la liste des non-assignés
      employees.push(emp);

      // Rafraîchir les affichages
      displayUnassignedStaff();
      displayZoneAssignments(zoneElement);
    });
  });
}

// ============================================
// GESTION DES ASSIGNATIONS DE ZONES
// ============================================
addBtnFloor.forEach((addbtn) => {
  addbtn.addEventListener("click", (event) => {
    const zone = event.target.parentElement;
    const modalAssignement = zone.querySelector(".menu_unassigned");

    modalAssignement.innerHTML = "";

    // Création du contenu du modal d'assignation
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

    // Filtrage des employés selon les rôles autorisés
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

      // Clic sur la carte pour assigner l'employé
      card.addEventListener("click", () => {
        if (!assignments[zoneName]) {
          assignments[zoneName] = [];
        }

        // Vérification de la capacité maximale
        if (assignments[zoneName].length >= currentZone.capacity) {
          alert("Cette zone est pleine !");
          return;
        }

        // Assignation de l'employé
        assignments[zoneName].push(emp);
        employees = employees.filter((e) => e.id !== emp.id);
        displayUnassignedStaff();
        displayZoneAssignments(zone);
        modalAssignement.close();
      });

      listeContainer.appendChild(card);
    });

    modalAssignement.showModal();

    // Bouton de fermeture du modal d'assignation
    const closeBtnDialog = modalAssignement.querySelector(".close-dialog-zone");
    closeBtnDialog.addEventListener("click", () => {
      modalAssignement.close();
    });

    // Fermer en cliquant à l'extérieur du modal
    modalAssignement.addEventListener("click", (e) => {
      if (e.target === modalAssignement) {
        modalAssignement.close();
      }
    });
  });
});
