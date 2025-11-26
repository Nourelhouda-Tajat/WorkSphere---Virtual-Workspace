# WorkSphere - Gestion Visuelle du Personnel

Application web pour la gestion visuelle et interactive du personnel au sein des espaces de travail, permettant l'organisation et la répartition des employés sur un plan d'étage en temps réel.

## Objectif du projet

Faciliter l'organisation et la répartition des employés sur un plan d'étage tout en respectant les contraintes liées aux rôles et aux zones autorisées.

## Fonctionnalités réalisées

### Design et Interface
-  Interface intuitive et fluide pour l'utilisateur
-  Palette de couleurs cohérente et icônes intuitives
-  Design moderne (Flexbox, Grid, formes arrondies, boutons colorés: vert, orange, rouge)
-  Version Desktop et Mobile responsive

### Structure HTML
-  Structure HTML de la page web
-  Bouton "Add New Worker"
-  Prévisualisation de la photo dans la modale

### Plan d'étage
- Plan d'étage avec 6 zones :
  - Salle de conférence
  - Réception
  - Salle des serveurs
  - Salle de sécurité
  - Salle du personnel
  - Salle d'archives

### Règles métier et restrictions
-  Réception → uniquement Réceptionnistes
-  Salle des serveurs → uniquement Techniciens IT
-  Salle de sécurité → uniquement Agents de sécurité
-  Manager → accès partout
-  Nettoyage → accès partout sauf Salle d'archives
-  Autres rôles → accès libre sauf zones restreintes

### Gestion des employés
-  Bouton "X" pour retirer un employé d'une zone et le replacer dans "Unassigned"
-  Profil détaillé en cliquant sur un employé (photo, nom, rôle, email, téléphone, expériences)
-  Bouton "+" dans chaque zone pour sélectionner un employé éligible
-  Zones vides obligatoires en rouge pâle (sauf salle de conférence et personnel)
-  Limitations sur le nombre d'employés par zone

### Responsive Design
- Interface responsive sur tous les écrans
- Support des tailles: Desktop (>1280px), Tablette (768-1023px), Mobile (<767px)

### Déploiement
- Projet publié sur GitHub Pages(https://nourelhouda-tajat.github.io/WorkSphere---Virtual-Workspace/)

### Gestion de projet
- Organisation avec Trello (https://trello.com/invite/b/691ab3f3b7ddd9f70d7819ba/ATTIc84e8214d374b8cd95bf2b43d5bc090905400F8B/worksphere-virtual-workspace)

### Bonus
- Photo par défaut pour les employés sans image

## Technologies utilisées

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla)

## Auteur

TAJAT Nourelhouda
