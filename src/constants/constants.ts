export const typePage = {
  dashboard: "dashboard",
  add: "add",
  account: "account",
  notificaction: "notification",
};

export const typeKeySections = {
  image: "image",
  file: "file",
  experience: "experience",
  education: "education",
  skill: "skill",
};

export const messageInfoCvFileAccountPage = {
  message:
    "Actualiza tu plantilla de CV en formato pdf para que esté disponible en tu web online y otros usuarios puedan descargarlo.",
  title: "Actualiza tu plantilla de CV",
};

export const messageInfoProfileAccountPage = {
  message:
    "Actualiza tu imagen de perfil para que esté disponible en tu CV online.",
  title: "Actualiza tu imagen de perfil",
};

export const dataSegmentAddPage = [
  { key: typeKeySections.skill, title: "Habilidades" },
  { key: typeKeySections.experience, title: "Experiencia" },
  { key: typeKeySections.education, title: "Formación" },
];

export const dataSegmentAccountPage = [
  { key: typeKeySections.image, title: "Perfil" },
  { key: typeKeySections.file, title: "Cv en Pdf" },
];
