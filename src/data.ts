// Edite este arquivo para atualizar os links, estudos e projetos do portfólio.
export const profile = {
  name: "Gleysse Ribeiro da Costa",
  role: "Cloud & Backend Developer",
  email: "gleysse82@gmail.com",
  github: "https://github.com/gleysserib",
  linkedin: "https://www.linkedin.com/in/gleysseribeiro/",
};

export const skillGroups = [
  {
    title: "Cloud",
    icon: "☁",
    items: [
      "Microsoft Azure",
      "Azure Container Registry",
      "Azure App Service",
      "Azure Container Apps",
    ],
  },
  {
    title: "Backend",
    icon: "⌘",
    items: ["Node.js", "Express", "Python", "Flask"],
  },
  { title: "Dados", icon: "◫", items: ["MongoDB", "MySQL", "Mongoose"] },
  {
    title: "DevOps & sistemas",
    icon: "⌁",
    items: ["Docker", "Git", "GitHub", "Azure CLI", "Linux", "WSL"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Agenda API",
    category: "API · BACKEND",
    description:
      "API REST para gerenciamento de eventos e agendamentos, desenvolvida com Node.js, Express e MongoDB Atlas. O projeto está sendo evoluído para uma aplicação completa.",
    problem:
      "Criar uma API capaz de organizar operações de agendamento, permitindo criar, consultar, atualizar e excluir eventos e persistir os dados em um banco de dados.",
    learning:
      "Desenvolvimento de uma API REST, criação de rotas CRUD, modelagem de dados com Mongoose, integração com MongoDB Atlas e organização de um projeto backend.",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose",
      "REST API",
      "Git",
      "GitHub",
    ],
    visual: "calendar",
    github: "https://github.com/gleysserib/agenda-api",
    status: [
      { label: "Backend desenvolvido", done: true },
      { label: "CRUD de eventos", done: true },
      { label: "MongoDB Atlas integrado", done: true },
      { label: "Frontend em desenvolvimento", done: false },
      { label: "Containerização com Docker", done: false },
      { label: "Deploy em Cloud", done: false },
    ],
  },
];
export const learning = [
  "Linux",
  "Backend",
  "Banco de dados",
  "Docker",
  "Cloud computing",
  "Azure",
  "IA",
];
export const studies = [
  {
    status: "CONCLUÍDO",
    title: "701 — Linux Fundamentals",
    detail: "Curso concluído pela 4Linux, com carga horária de 20 horas.",
  },
  {
    status: "EM ANDAMENTO",
    title: "Developing AI Cloud Solutions on Azure",
    detail:
      "Preparação para a certificação Microsoft AI-200, com estudos sobre desenvolvimento de soluções de IA em ambiente Azure.",
  },
];
