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
        startDate:"21-8-2000",
        endDate:"5-1-2005"
      },
      {
        titre: "Assistante Administrative",
        entreprise: "Cabinet Juridique Martin",
        startDate:"21-8-2007",
        endDate:"5-1-2009"
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
        startDate:"7-2-2010",
        endDate:"8-3-2015"
      },
      {
        titre: "Chef de Projet",
        entreprise: "Innovation Solutions",
        startDate:"20-8-2020",
        endDate:"5-10-2025"
      },
      {
        titre: "Coordinatrice d'Équipe",
        entreprise: "Services Consulting",
        startDate:"1-7-2003",
        endDate:"6-4-2009"
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
        startDate:"20-7-2020",
        endDate:"5-11-2021"
      },
      {
        titre: "Technicien Réseau",
        entreprise: "CloudTech Solutions",
        startDate:"18-6-2022",
        endDate:"5-9-2022"
      },
      {
        titre: "Support Informatique",
        entreprise: "Bureau Services Plus",
        startDate:"22-3-2024",
        endDate:"5-1-2025"
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
        startDate:"21-8-2010",
        endDate:"5-5-2015"
      }
    ],
  },
  {
    id: 5,
    name: "Laurent Michel Durand",
    role: "Manager",
    photo: "https://e7.pngegg.com/pngimages/136/22/png-clipart-user-profile-computer-icons-girl-customer-avatar-angle-heroes-thumbnail.png",
    email: "laurent.durand@entreprise.com",
    phone: "06 44 55 66 77",
    experiences: [
      {
        titre: "Directeur Commercial",
        entreprise: "Ventes Premium SARL",
        startDate:"11-1-2010",
        endDate:"7-7-2017"
      },
      
    ],
  },
  {
    id: 6,
    name: "Nathalie Françoise Petit",
    role: "Reception",
    photo: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
    email: "nathalie.petit@entreprise.com",
    phone: "06 99 88 77 66",
    experiences: [
      {
        titre: "Hôtesse d'Accueil",
        entreprise: "Air France Hub",
        startDate:"3-4-2004",
        endDate:"5-12-2009"
      },
      {
        titre: "Reception",
        entreprise: "Clinique Saint-Joseph",
        startDate:"21-8-2010",
        endDate:"5-1-2020"
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
    isRestricted: false,
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

// SIDEBAR - AFFICHAGE DU PERSONNEL NON ASSIGNÉ ("Unassigned Staff")

// Éléments DOM pour le sidebar
const staffContainer = document.querySelector(".first_box");

function displayUnassignedStaff() {
  // Suppression des cartes existantes
  staffContainer.querySelectorAll(".profile").forEach((card) => card.remove());

  // Création des cartes pour chaque employé
  employees.forEach((emp) => {
    const card = document.createElement("div");
    card.classList.add("profile");
    const photoUrl =
      emp.photo || defaultPhoto;

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

// ============================================================================
// MODAL "ADD NEW WORKER" - OUVERTURE DU MODAL
// ============================================================================

// Éléments DOM pour le modal principal
const modal = document.getElementById("modalOverlay");
const addbtn = document.getElementById("add_worker");

console.log(addbtn, modal);
addbtn.addEventListener("click", () => {
  modal.showModal();
});

// ============================================================================
// MODAL "ADD NEW WORKER" - FERMETURE DU MODAL
// ============================================================================

// Éléments DOM pour la fermeture
const cancelBtn = document.querySelector(".btn_cancel");
const closeBtn = document.querySelector(".close_btn");
const workerForm = document.getElementById("workerForm");
const photoPreview = document.getElementById("photoPreview");

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

// ============================================================================
// MODAL "ADD NEW WORKER" - VALIDATION CHAMP NOM
// ============================================================================

// Éléments DOM et regex pour le nom
const nameInput = document.getElementById("name");
const nameRegex = /^[A-Za-z\s]{3,}$/;

nameInput.addEventListener("input", () => {
  nameInput.style.borderColor = nameRegex.test(nameInput.value)
    ? "green"
    : "red";
});

// ============================================================================
// MODAL "ADD NEW WORKER" - VALIDATION CHAMP EMAIL
// ============================================================================

// Éléments DOM et regex pour l'email
const emailInput = document.getElementById("email");
const emailRegex = /^\w+@\w+\.\w+$/;

emailInput.addEventListener("input", () => {
  emailInput.style.borderColor = emailRegex.test(emailInput.value)
    ? "green"
    : "red";
});

// ============================================================================
// MODAL "ADD NEW WORKER" - VALIDATION CHAMP TÉLÉPHONE
// ============================================================================

// Éléments DOM et regex pour le téléphone
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

// ============================================================================
// MODAL "ADD NEW WORKER" - PRÉVISUALISATION DE LA PHOTO
// ============================================================================

// Éléments DOM pour la photo
const photoInput = document.getElementById("photo");

//à modifier
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

// ============================================================================
// MODAL "ADD NEW WORKER" - GESTION DES EXPÉRIENCES PROFESSIONNELLES
// ============================================================================

// Éléments DOM pour les expériences
const addExpBtn = document.querySelector(".add-experience-btn");
const expContainer = document.getElementById("experienceContainer");

// Bouton "+" pour ajouter une expérience
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

// ============================================================================
// MODAL "ADD NEW WORKER" - BOUTON SUBMIT (Ajouter l'employé)
// ============================================================================

// Éléments DOM pour la soumission
const submitBtn = document.querySelector(".btn_addWorker");
const roleInput = document.getElementById("role");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");


submitBtn.addEventListener("click", () => {
  // Vérification des champs obligatoires
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
    const company = exp.querySelector(".exp-company")?.value;
    const role = exp.querySelector(".exp-role")?.value;
    const start = exp.querySelector(".exp-startdate").value;
    const end = exp.querySelector(".exp-enddate").value;

    if (company.trim() !== "" || role.trim() !== "") {
      experiences.push({
        titre: role,
        entreprise: company,
        startDate:start,
        endDate: end
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

  // Ajout à l'état global
  employees.push(newEmployee);
  alert("worker add success!!!!");

  console.log("Employee added:", newEmployee);
  console.log("All employees:", employees);
  displayUnassignedStaff();

  // Fermeture du modal et réinitialisation du formulaire
  modal.close();
  workerForm.reset();
  photoPreview.innerHTML = '<span class="photo-preview-placeholder"></span>';
});

// ============================================================================
// ZONES - BOUTON "+" POUR ASSIGNER UN EMPLOYÉ À UNE ZONE
// ============================================================================

// Éléments DOM pour les zones
const planFloor = document.querySelector(".floor_grid");
const addBtnFloor = document.querySelectorAll(".add_zone");

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

      const photoUrl =
        emp.photo || defaultPhoto;
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
        updateZoneColors();
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

// ============================================================================
// ZONES - AFFICHAGE DES EMPLOYÉS ASSIGNÉS DANS CHAQUE ZONE

function displayZoneAssignments(zoneElement) {
  const zoneName = zoneElement.querySelector("h3").textContent;
  let container = zoneElement.querySelector(".assigned_list");

  // Création du conteneur s'il n'existe pas
  if (!container) {
    const newContainer = document.createElement("div");
    newContainer.classList.add("assigned_list");
    zoneElement.appendChild(newContainer);
    container = newContainer;
  }

  container.innerHTML = "";

  const assigned = assignments[zoneName] || [];

  // Création des cartes pour chaque employé assigné
  assigned.forEach((emp) => {
    const card = document.createElement("div");
    card.classList.add("assigned_card");

    const photoUrl = emp.photo || defaultPhoto;
    
    card.innerHTML = `
      <img src="${photoUrl}" alt="${emp.name}" class="assigned_photo">
      <button class="remove_assigned">✕</button>
    `;
    updateZoneColors();
    container.appendChild(card);

    // Bouton de suppression
    card.querySelector(".remove_assigned").addEventListener("click", (e) => {
      e.stopPropagation(); // Empêcher le clic sur l'image
      assignments[zoneName] = assignments[zoneName].filter(
        (e) => e.id !== emp.id
      );
      employees.push(emp);
      displayUnassignedStaff();
      displayZoneAssignments(zoneElement);
      updateZoneColors();
    });

    // Clic sur l'image pour voir le CV
    card.querySelector(".assigned_photo").addEventListener("click", () => {
      showCV(emp);
    });
  });
}


function updateZoneColors() {
  const requiredZones = {
    "Reception": ".zone_reception",
    "Serveur Room": ".zone_serveur",
    "Security Room": ".zone_security",
    "Archives Room": ".zone_archive"
  };

  for (let zoneName in requiredZones) {
    const selector = requiredZones[zoneName];
    const zoneElement = document.querySelector(selector);

    const isEmpty = !assignments[zoneName] || assignments[zoneName].length === 0;

    if (isEmpty) {
      zoneElement.style.filter = "brightness(85%)";
      zoneElement.style.border = "3px solid #ffb3c6";
    } else {
      zoneElement.style.filter = "";
      zoneElement.style.border = "none";
    }
  }
}


// ============================================================================
// CV - AFFICHAGE DU CV D'UN EMPLOYÉ (Dialog CV)

function showCV(emp) {
  const dialogCV = document.getElementById("dialogCV");
  const cvContainer = document.getElementById("cvContainer");

  const photoUrl =
    emp.photo || defaultPhoto;

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

  // Remplir le contenu du CV
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

// ============================================================================
/*  FERMETURE DU DIALOG CV*/
const closeCvBtn = document.querySelector(".close-cv-btn");

closeCvBtn.addEventListener("click", () => {
  dialogCV.close();
});

dialogCV.addEventListener("click", (e) => {
  if (e.target === dialogCV) {
    dialogCV.close();
  }
});
