let employees = [
  {
    id: 1,
    name: "khadija abirat",
    role: "Reception",
    photo: "https://i.pravatar.cc/150?img=1&u=alexis.rousseau@entreprise.com",
    email: "alexis.rousseau@entreprise.com",
    telephone: "06 12 34 56 78",
    experiences: [
      {
        titre: "Réceptioniste Senior",
        entreprise: "Hôtel Prestige",
        duree: "3 ans",
      },
      {
        titre: "Assistante Administrative",
        entreprise: "Cabinet Juridique Martin",
        duree: "2 ans",
      },
    ],
  },
  {
    id: 2,
    name: "olia azzam",
    role: "Manager",
    photo: "https://i.pravatar.cc/150?img=5&u=marie.dubois@entreprise.com",
    email: "marie.dubois@entreprise.com",
    telephone: "06 87 65 43 21",
    experiences: [
      {
        titre: "Directrice des Opérations",
        entreprise: "TechCorp France",
        duree: "5 ans",
      },
      {
        titre: "Chef de Projet",
        entreprise: "Innovation Solutions",
        duree: "4 ans",
      },
      {
        titre: "Coordinatrice d'Équipe",
        entreprise: "Services Consulting",
        duree: "3 ans",
      },
    ],
  },
  {
    id: 3,
    name: "arabi loubi",
    role: "Technicien-IT",
    photo: "https://i.pravatar.cc/150?img=12&u=pierre.bernard@entreprise.com",
    email: "pierre.bernard@entreprise.com",
    telephone: "06 11 22 33 44",
    experiences: [
      {
        titre: "Administrateur Système Senior",
        entreprise: "DataFlow Systems",
        duree: "6 ans",
      },
      {
        titre: "Technicien Réseau",
        entreprise: "CloudTech Solutions",
        duree: "3 ans",
      },
      {
        titre: "Support Informatique",
        entreprise: "Bureau Services Plus",
        duree: "2 ans",
      },
    ],
  },
  {
    id: 4,
    name: "zakariya hari",
    role: "Security",
    photo: "https://i.pravatar.cc/150?img=20&u=sophie.leclerc@entreprise.com",
    email: "sophie.leclerc@entreprise.com",
    telephone: "06 55 66 77 88",
    experiences: [
      {
        titre: "Chef de Sécurité",
        entreprise: "SecuriGroup International",
        duree: "4 ans",
      },
      {
        titre: "Agent de Sécurité",
        entreprise: "Protection Plus",
        duree: "3 ans",
      },
      {
        titre: "Vigile",
        entreprise: "Sécurité Événements",
        duree: "2 ans",
      },
    ],
  },
  {
    id: 5,
    name: "Laurent Michel Durand",
    role: "Manager",
    photo: "https://i.pravatar.cc/150?img=33&u=laurent.durand@entreprise.com",
    email: "laurent.durand@entreprise.com",
    telephone: "06 44 55 66 77",
    experiences: [
      {
        titre: "Directeur Commercial",
        entreprise: "Ventes Premium SARL",
        duree: "7 ans",
      },
      {
        titre: "Manager Commercial",
        entreprise: "Groupe Distribution",
        duree: "5 ans",
      },
      {
        titre: "Responsable de Secteur",
        entreprise: "Commerce et Services",
        duree: "3 ans",
      },
    ],
  },
  {
    id: 6,
    name: "Nathalie Françoise Petit",
    role: "Reception",
    photo: "https://i.pravatar.cc/150?img=45&u=nathalie.petit@entreprise.com",
    email: "nathalie.petit@entreprise.com",
    telephone: "06 99 88 77 66",
    experiences: [
      {
        titre: "Hôtesse d'Accueil",
        entreprise: "Air France Hub",
        duree: "2 ans",
      },
      {
        titre: "Reception",
        entreprise: "Clinique Saint-Joseph",
        duree: "3 ans",
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
      emp.photo || "https://cdn-icons-png.flaticon.com/512/6932/6932544.png";

    card.innerHTML = `
      <div class="img_profil">
        <img src="${photoUrl}" alt="${emp.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
      </div>
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
  //à modifier
  if (phoneInput.value.trim() === "") {
    phoneInput.style.borderColor = "";
  } else {
    phoneInput.style.borderColor = phoneRegex.test(phoneInput.value)
      ? "green"
      : "red";
  }
});

// ============================================================================
// MODAL "ADD NEW WORKER" - VALIDATION DATE DE DÉBUT
// ============================================================================

// Éléments DOM pour les dates
const startDateInput = document.getElementById("startDate");

startDateInput.addEventListener("input", () => {
  startDateInput.style.borderColor = startDateInput.value ? "green" : "red";
});

// ============================================================================
// MODAL "ADD NEW WORKER" - VALIDATION DATE DE FIN
// ============================================================================

// Éléments DOM pour la date de fin
const endDateInput = document.getElementById("endDate");

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

// ============================================================================
// MODAL "ADD NEW WORKER" - PRÉVISUALISATION DE LA PHOTO
// ============================================================================

// Éléments DOM pour la photo
const photoInput = document.getElementById("photo");

//à modifier
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

// ============================================================================
// MODAL "ADD NEW WORKER" - BOUTON SUBMIT (Ajouter l'employé)
// ============================================================================

// Éléments DOM pour la soumission
const submitBtn = document.querySelector(".btn_addWorker");
const roleInput = document.getElementById("role");

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
        emp.photo || "https://cdn-icons-png.flaticon.com/512/6932/6932544.png";
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
    //à modifier
    const card = document.createElement("div");
    card.classList.add("assigned_card");
    const photoUrl =
      emp.photo || "https://cdn-icons-png.flaticon.com/512/6932/6932544.png";
    card.innerHTML = `
      <img src="${photoUrl}" alt="${emp.name}" class="assigned_photo" style="width: 50px; height: 50px; border-radius: 50%; cursor: pointer; object-fit: cover;">
      <button class="fa-solid fa-xmark remove_assigned" style="position: absolute; top: 5px; right: 5px; background: red; color: white; border: none; border-radius: 50%; width: 20px; height: 20px; cursor: pointer;"></button>
    `;

    card.style.position = "relative";
    card.style.display = "inline-block";
    card.style.margin = "5px";

    container.appendChild(card);

    // Bouton de suppression
    card.querySelector(".remove_assigned").addEventListener("click", () => {
      assignments[zoneName] = assignments[zoneName].filter(
        (e) => e.id !== emp.id
      );
      employees.push(emp);
      displayUnassignedStaff();
      displayZoneAssignments(zoneElement);
    });

    // Clic sur l'image pour voir le CV
    const photo = card.querySelector(".assigned_photo");
    photo.addEventListener("click", () => {
      showCV(emp);
    });
  });
}

// ============================================================================
// CV - AFFICHAGE DU CV D'UN EMPLOYÉ (Dialog CV)

function showCV(emp) {
  const dialogCV = document.getElementById("dialogCV");
  const cvContainer = document.getElementById("cvContainer");

  const photoUrl =
    emp.photo || "https://cdn-icons-png.flaticon.com/512/6932/6932544.png";

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
      <strong>Téléphone:</strong> ${emp.telephone}
    </div>
    
    ${experiencesHTML}
  `;

  dialogCV.showModal();
}

// ============================================================================
/*  FERMETURE DU DIALOG CV*/

const dialogCV = document.getElementById("dialogCV");
const closeCvBtn = document.querySelector(".close-cv-btn");

closeCvBtn.addEventListener("click", () => {
  dialogCV.close();
});

dialogCV.addEventListener("click", (e) => {
  if (e.target === dialogCV) {
    dialogCV.close();
  }
});
