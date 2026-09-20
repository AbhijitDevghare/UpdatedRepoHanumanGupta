import { companies } from "./companies";

export const trainingExperience = {
  years: "12+",
  organizations: companies.map((company) => ({
    ...company,
    description: "",
    programs: [],
    technologies: [],
    audience: "",
    trainingFormat: "",
    year: "",
    photos: [],
  })),
  focus: [
    "Cloud Computing",
    "VMware & Virtualization",
    "Networking",
    "Windows",
    "Linux",
    "Programming",
    "Databases",
    "AI & Emerging Technologies",
  ],
  timeline: [],
};
