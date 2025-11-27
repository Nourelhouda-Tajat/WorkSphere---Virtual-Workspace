let employees = [
  {
    id: 1,
    name: "Alice Brown",
    role: "Reception",
    photo: "https://cdn-icons-png.flaticon.com/512/3135/3135823.png",
    email: "alexis.rousseau@entreprise.com",
    phone: "06 12 34 56 78",
    experiences: [
      {
        titre: "Réceptioniste Senior",
        entreprise: "Hôtel Prestige",
        startDate: "2001-8-01",
        endDate: "2005-01-05",
      },
      {
        titre: "Assistante Administrative",
        entreprise: "Cabinet Juridique Martin",
        startDate: "2007-8-21",
        endDate: "2009-1-27",
      },
    ],
  },
  {
    id: 2,
    name: "Sarah Connor",
    role: "Manager",
    photo: "https://cdn-icons-png.flaticon.com/512/10438/10438146.png",
    email: "marie.dubois@entreprise.com",
    phone: "06 87 65 43 21",
    experiences: [
      {
        titre: "Directrice des Opérations",
        entreprise: "TechCorp France",
        startDate: "2010-2-5",
        endDate: "2015-3-8",
      },
      {
        titre: "Chef de Projet",
        entreprise: "Innovation Solutions",
        startDate: "2020-8-20",
        endDate: "2025-10-25",
      },
      {
        titre: "Coordinatrice d'Équipe",
        entreprise: "Services Consulting",
        startDate: "2003-7-5",
        endDate: "2009-4-7",
      },
    ],
  },
  {
    id: 3,
    name: "Peter Jone",
    role: "Technicien-IT",
    photo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    email: "pierre.bernard@entreprise.com",
    phone: "06 11 22 33 44",
    experiences: [
      {
        titre: "Administrateur Système Senior",
        entreprise: "DataFlow Systems",
        startDate: "2020-7-20",
        endDate: "2021-11-4",
      },
      {
        titre: "Technicien Réseau",
        entreprise: "CloudTech Solutions",
        startDate: "2022-6-4",
        endDate: "2022-9-7",
      },
      {
        titre: "Support Informatique",
        entreprise: "Bureau Services Plus",
        startDate: "2024-3-2",
        endDate: "2025-1-5",
      },
    ],
  },
  {
    id: 4,
    name: "John Doe",
    role: "Security",
    photo: "https://cdn-icons-png.flaticon.com/512/5234/5234205.png",
    email: "sophie.leclerc@entreprise.com",
    phone: "06 55 66 77 88",
    experiences: [
      {
        titre: "Chef de Sécurité",
        entreprise: "SecuriGroup International",
        startDate: "2010-8-24",
        endDate: "2015-5-5",
      },
    ],
  },
  {
    id: 5,
    name: "Laurent Michel Durand",
    role: "Manager",
    photo:
      "https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png",
    email: "laurent.durand@entreprise.com",
    phone: "06 44 55 66 77",
    experiences: [
      {
        titre: "Directeur Commercial",
        entreprise: "Ventes Premium SARL",
        startDate: "2010-1-1",
        endDate: "2017-7-4",
      },
    ],
  },
  {
    id: 6,
    name: "Nathalie Françoise Petit",
    role: "Reception",
    photo:
      "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
    email: "nathalie.petit@entreprise.com",
    phone: "06 99 88 77 66",
    experiences: [
      {
        titre: "Hôtesse d'Accueil",
        entreprise: "Air France Hub",
        startDate: "2004-4-5",
        endDate: "2009-12-5",
      },
      {
        titre: "Reception",
        entreprise: "Clinique Saint-Joseph",
        startDate: "2010-8-5",
        endDate: "2014-1-4",
      },
    ],
  },
];

let zones = [
  {
    id: 1,
    name: "Conference Room",
    allowedRoles: ["Manager", "Technicien-IT", "Developer", "Nettoyage"],
    capacity: 5,
    isRestricted: false,
    description: "Space for meetings and presentations",
  },
  {
    id: 2,
    name: "Reception",
    allowedRoles: ["Reception", "Manager", "Nettoyage"],
    capacity: 3,
    isRestricted: true,
    description: "Visitor reception area - Receptionists only",
  },
  {
    id: 3,
    name: "Serveur Room",
    allowedRoles: ["Technicien-IT", "Manager", "Nettoyage"],
    capacity: 2,
    isRestricted: true,
    description: "IT infrastructure - ITtechnicians only",
  },
  {
    id: 4,
    name: "Security Room",
    allowedRoles: ["Security", "Manager", "Nettoyage"],
    capacity: 2,
    isRestricted: true,
    description: "Monitoring center - Security Guards only",
  },
  {
    id: 5,
    name: "Staff Room",
    allowedRoles: [
      "Security",
      "Manager",
      "Technicien-IT",
      "Nettoyage",
      "Developer",
    ],
    capacity: 6,
    isRestricted: false,
    description: "Break room - Accessible to all staff",
  },
  {
    id: 6,
    name: "Archives Room",
    allowedRoles: ["Manager"],
    capacity: 1,
    isRestricted: true,
    description: "Confidential documents - Cleaning staff not allowed",
  },
];

let assignments = {};
// Image par défaut
const defaultPhoto = "https://cdn-icons-png.flaticon.com/512/6932/6932544.png";

// AFFICHAGE DU PERSONNEL NON ASSIGNÉ ("Unassigned Staff")

// Éléments DOM pour le sidebar
const staffContainer = document.querySelector(".first_box");

function displayUnassignedStaff() {
  
  staffContainer.querySelectorAll(".profile").forEach((card) => card.remove());
  employees.forEach((emp) => {
    const card = document.createElement("div");
    card.classList.add("profile");
    const photoUrl = emp.photo || defaultPhoto;

    card.innerHTML = `
      <div class="img_profil">
        <img src="${photoUrl}" alt="${emp.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
      </div>
      <div class="info_profil">
        <h3>${emp.name}</h3>
        <p>${emp.role}</p>
      </div>
    `;

    staffContainer.insertBefore(card, document.getElementById("add_worker"));
  });
}
displayUnassignedStaff();

// MODAL "ADD NEW WORKER" 
const modal = document.getElementById("modalOverlay");
const addbtn = document.getElementById("add_worker");

console.log(addbtn, modal);
addbtn.addEventListener("click", () => {
  modal.showModal();
});

const cancelBtn = document.querySelector(".btn_cancel");
const closeBtn = document.querySelector(".close_btn");
const workerForm = document.getElementById("workerForm");
const photoPreview = document.getElementById("photoPreview");

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


// VALIDATION CHAMP NOM
const nameInput = document.getElementById("name");
const nameRegex = /^[A-Za-z\s]{3,}$/;

nameInput.addEventListener("input", () => {
  nameInput.style.borderColor = nameRegex.test(nameInput.value)
    ? "green"
    : "red";
});

// VALIDATION CHAMP EMAIL
const emailInput = document.getElementById("email");
const emailRegex = /^\w+@\w+\.\w+$/;

emailInput.addEventListener("input", () => {
  emailInput.style.borderColor = emailRegex.test(emailInput.value)
    ? "green"
    : "red";
});

//VALIDATION CHAMP TÉLÉPHONE
const phoneInput = document.getElementById("phone");
const phoneRegex = /^0[6-7]\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}\s?$/;

phoneInput.addEventListener("input", () => {
  if (phoneInput.value.trim() === "") {
    phoneInput.style.borderColor = "";
  } else {
    phoneInput.style.borderColor = phoneRegex.test(phoneInput.value)
      ? "green"
      : "red";
  }
});

// PRÉVISUALISATION DE LA PHOTO
const photoInput = document.getElementById("photo");
photoInput.addEventListener("input", () => {
  const url = photoInput.value.trim();

  if (url === "") {
    const img = document.createElement("img");
    img.src = defaultPhoto;
    img.alt = "Preview";
    img.style.width = "120px";
    img.style.height = "120px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "8px";

    photoPreview.innerHTML = "";
    photoPreview.appendChild(img);
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

// GESTION DES EXPÉRIENCES PROFESSIONNELLES
const addExpBtn = document.querySelector(".add-experience-btn");
const expContainer = document.getElementById("experienceContainer");

addExpBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("experience-item");
  //à modifier
  div.innerHTML = `
      <label for="company">Company Name</label>
      <input type="text" placeholder="Company" class="exp-input exp-company">
      <label for="role">Role</label>
      <input type="text" placeholder="Role" class="exp-input exp-role">
      <!-- Start Date -->
      <div class="form-group">
        <label for="startDate">From (Start Date) *</label>
        <input type="date" id="startDate" class="exp-startdate" required>
      </div>          
      <!-- End Date -->
      <div class="form-group">
        <label for="endDate">To (End Date)</label>
        <input type="date" id="endDate" class="exp-enddate" required>
      </div>
  `;

  expContainer.appendChild(div);
  const startDate = div.querySelector(".exp-startdate");
  const endDate = div.querySelector(".exp-enddate");
  startDate.addEventListener("input", () => {
    startDate.style.borderColor = startDate.value ? "green" : "red";

    if (endDate.value && startDate.value && endDate.value < startDate.value) {
      endDate.style.borderColor = "red";
    } else if (endDate.value) {
      endDate.style.borderColor = "green";
    }
  });
  endDate.addEventListener("input", () => {
    if (endDate.value === "") {
      endDate.style.borderColor = "";
    } else if (startDate.value && endDate.value < startDate.value) {
      endDate.style.borderColor = "red";
    } else {
      endDate.style.borderColor = "green";
    }
  });
});

// BOUTON SUBMIT (Ajouter l'employé)
const submitBtn = document.querySelector(".btn_addWorker");
const roleInput = document.getElementById("role");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");

submitBtn.addEventListener("click", () => {
  if (
    !nameRegex.test(nameInput.value) ||
    !emailRegex.test(emailInput.value) ||
    !phoneRegex.test(phoneInput.value)
  ) {
    alert("Please fill all required fields correctly.");
    return;
  }

  // Collecte des expériences professionnelles
  const expItems = document.querySelectorAll(".experience-item");
  let experiences = [];

  expItems.forEach((exp) => {
    const company = exp.querySelector(".exp-company").value;
    const role = exp.querySelector(".exp-role").value;
    const start = exp.querySelector(".exp-startdate").value;
    const end = exp.querySelector(".exp-enddate").value;

    if (company.trim() !== "" || role.trim() !== "") {
      experiences.push({
        titre: role,
        entreprise: company,
        startDate: start,
        endDate: end,
      });
    }
  });

  // Création du nouvel employé
  const newEmployee = {
    id: employees.length + 1,
    name: nameInput.value,
    role: roleInput.value,
    photo: photoInput.value || defaultPhoto,
    email: emailInput.value,
    phone: phoneInput.value.trim(),
    experiences: experiences,
  };

  employees.push(newEmployee);
  alert("worker add success!!!!");

  console.log("Employee added:", newEmployee);
  console.log("All employees:", employees);
  displayUnassignedStaff();

  modal.close();
  workerForm.reset();
  photoPreview.innerHTML = '<span class="photo-preview-placeholder"></span>';
});

// ZONES - BOUTON "+" POUR ASSIGNER UN EMPLOYÉ À UNE ZONE
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

    // Filtrage des employés selon les rôles autorisés
    const zoneName = zone.querySelector("h3").textContent;
    const currentZone = zones.find((z) => z.name === zoneName);
    const allowed = currentZone ? currentZone.allowedRoles : [];

    employees.forEach((emp) => {
      if (!allowed.includes(emp.role)) return;

      const card = document.createElement("div");
      card.classList.add("profile");
      card.style.cursor = "pointer";

      const photoUrl = emp.photo || defaultPhoto;
      card.innerHTML = `
        <div class="img_profil">
          <img src="${photoUrl}" alt="${emp.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
        </div>
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

// AFFICHAGE DES EMPLOYÉS ASSIGNÉS DANS CHAQUE ZONE
function displayZoneAssignments(zoneElement) {
  const zoneName = zoneElement.querySelector("h3").textContent;
  let container = zoneElement.querySelector(".assigned_list");

  if (!container) {
    const newContainer = document.createElement("div");
    newContainer.classList.add("assigned_list");
    zoneElement.appendChild(newContainer);
    container = newContainer;
  }

  container.innerHTML = "";

  const assigned = assignments[zoneName] || [];

  assigned.forEach((emp) => {
    const card = document.createElement("div");
    card.classList.add("assigned_card");

    const photoUrl = emp.photo || defaultPhoto;

    card.innerHTML = `
    <img src="${photoUrl}" alt="${emp.name}" class="assigned_photo">
    <button class="remove_assigned">✕</button>
    `;

    container.appendChild(card);

    card.querySelector(".remove_assigned").addEventListener("click", (e) => {
      e.stopPropagation(); // Empêcher le clic sur l'image
      assignments[zoneName] = assignments[zoneName].filter(
        (e) => e.id !== emp.id
      );
      employees.push(emp);
      displayUnassignedStaff();
      displayZoneAssignments(zoneElement);
    });

    card.querySelector(".assigned_photo").addEventListener("click", () => {
      showCV(emp);
    });
  });
  updateZoneColor(zoneName);
}

// FONCTION POUR METTRE À JOUR LA COULEUR DES ZONES
function updateZoneColor(zoneName) {
  const zoneInfo = zones.find((z) => z.name === zoneName);

  if (!zoneInfo) return;
  const allZones = document.querySelectorAll(".floor_grid > div");
  let zoneElement = null;

  allZones.forEach((zone) => {
    const title = zone.querySelector("h3");
    if (title && title.textContent === zoneName) {
      zoneElement = zone;
    }
  });

  if (!zoneElement) return;

  // Vérification d'assignement
  const hasEmployees =
    assignments[zoneName] && assignments[zoneName].length > 0;

  
  if (zoneInfo.isRestricted) {
    if (hasEmployees) {
      zoneElement.style.backgroundColor = "#c6cdd5";
    } else {
      zoneElement.style.backgroundColor = "#fce4ec";
    }
  }
}
// AFFICHAGE DU CV D'UN EMPLOYÉ 

function showCV(emp) {
  const dialogCV = document.getElementById("dialogCV");
  const cvContainer = document.getElementById("cvContainer");

  const photoUrl = emp.photo || defaultPhoto;

  // Construction des expériences
  let experiencesHTML = "";
  if (emp.experiences && emp.experiences.length > 0) {
    experiencesHTML = "<h3>Expériences professionnelles</h3>";
    emp.experiences.forEach((exp) => {
      experiencesHTML += `
        <div style="margin-bottom: 15px; padding: 10px; background: #f5f5f5; border-radius: 5px;">
          <strong>${exp.titre}</strong><br>
          <em>${exp.entreprise}</em><br>
          <span style="color: #666;">Durée: ${exp.duree}</span>
        </div>
      `;
    });
  }

  cvContainer.innerHTML = `
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="${photoUrl}" alt="${emp.name}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;">
      <h2 style="margin: 10px 0;">${emp.name}</h2>
      <p style="color: #666; font-size: 18px;">${emp.role}</p>
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong>Email:</strong> ${emp.email}<br>
      <strong>Téléphone:</strong> ${emp.phone}
    </div>
    
    ${experiencesHTML}
  `;

  dialogCV.showModal();
}

//  FERMETURE DU DIALOG CV
const closeCvBtn = document.querySelector(".close-cv-btn");

closeCvBtn.addEventListener("click", () => {
  dialogCV.close();
});

dialogCV.addEventListener("click", (e) => {
  if (e.target === dialogCV) {
    dialogCV.close();
  }
});

