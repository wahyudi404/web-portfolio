const skills = [
  {
    id: 1,
    name: "HTML",
    url: "./img/skills/HTML.png",
  },
  {
    id: 2,
    name: "CSS",
    url: "./img/skills/CSS.png",
  },
  {
    id: 3,
    name: "JS",
    url: "./img/skills/JavaScript.png",
  },
  {
    id: 4,
    name: "Bootstrap",
    url: "./img/skills/bootstrap.png",
  },
  {
    id: 5,
    name: "TailwindCSS",
    url: "./img/skills/tailwindcss.png",
  },
  {
    id: 6,
    name: "React JS",
    url: "./img/skills/reactjs.png",
  },
  {
    id: 7,
    name: "Vue JS",
    url: "./img/skills/vuejs.png",
  },
  {
    id: 8,
    name: "PHP",
    url: "./img/skills/PHP.png",
  },
  {
    id: 9,
    name: "laravel",
    url: "./img/skills/laravel.png",
  },
  {
    id: 10,
    name: "REST API",
    url: "./img/skills/REST.png",
  },
  {
    id: 11,
    name: "MySQL",
    url: "./img/skills/MySQL.png",
  },
  {
    id: 12,
    name: "Git",
    url: "./img/skills/Git.png",
  },
  {
    id: 13,
    name: "Figma",
    url: "./img/skills/Figma.png",
  },
  {
    id: 13,
    name: "Typescript",
    url: "./img/skills/Typescript.png",
  },
  {
    id: 14,
    name: "Node JS",
    url: "./img/skills/nodejs.png",
  },
  {
    id: 15,
    name: "Docker",
    url: "./img/skills/docker.png",
  },
  {
    id: 16,
    name: "PostgreSQL",
    url: "./img/skills/postgres.png",
  },
  {
    id: 17,
    name: "Oracle",
    url: "./img/skills/oracle.png",
  },
  {
    id: 18,
    name: "GitHub",
    url: "./img/skills/github.png",
  },
  {
    id: 19,
    name: "GitLab",
    url: "./img/skills/gitlab.png",
  }
];

let elementSkills = document.querySelector("#skills .skills");

skills.forEach((skill) => {
  elementSkills.insertAdjacentHTML(
    "beforeend",
    `
    <a
    href="javascript:void(0)"
    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
    >
        <img
            src="${skill.url}"
            alt="${skill.name}"
            class="h-20 w-full photos-skills"
        />
    </a>
    `
  );
});
