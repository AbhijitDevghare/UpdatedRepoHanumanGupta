import { courses } from "./courses";

import cloudComputingImage from "../assets/HomeCourses/cloud.png";
import vmwareVirtualizationImage from "../assets/HomeCourses/vmware.png";
import windowsServerImage from "../assets/HomeCourses/windows.png";
import aiEmergingTechnologiesImage from "../assets/HomeCourses/AIandEmergingTechnolgies.png";
import databaseTechnologiesImage from "../assets/HomeCourses/database.png";
import linuxImage from "../assets/HomeCourses/linux.png";
import networkingImage from "../assets/HomeCourses/networking.png";
import programmingDevelopmentImage from "../assets/HomeCourses/programming.png";

const technologyVisuals = {
  "cloud-computing": {
    icon: "cloud",
    image: cloudComputingImage,
    alt: "Cloud computing infrastructure",
    description: "AWS, Azure, and modern cloud technologies.",
  },

  "vmware-virtualization": {
    icon: "server",
    image: vmwareVirtualizationImage,
    alt: "VMware virtualization and enterprise infrastructure",
    description: "Virtual machines and enterprise virtualization platforms.",
  },

  "windows-server": {
    icon: "server",
    image: windowsServerImage,
    alt: "Windows Server enterprise infrastructure",
    description: "Windows Server, Active Directory, and core services.",
  },

  linux: {
    icon: "terminal",
    image: linuxImage,
    alt: "Linux operating system and terminal environment",
    description: "Linux systems, administration, and shell scripting.",
  },

  networking: {
    icon: "network",
    image: networkingImage,
    alt: "Computer networking and network infrastructure",
    description: "Networking fundamentals, routing, switching, and CCNA.",
  },

  "programming-development": {
    icon: "code",
    image: programmingDevelopmentImage,
    alt: "Programming and software development",
    description: "Python, automation, and programming fundamentals.",
  },

  "database-technologies": {
    icon: "database",
    image: databaseTechnologiesImage,
    alt: "Database technologies and data infrastructure",
    description: "Oracle, SQL Server, PostgreSQL, and data foundations.",
  },

  "ai-emerging-technologies": {
    icon: "bot",
    image: aiEmergingTechnologiesImage,
    alt: "Artificial intelligence and emerging technologies",
    description: "AI fundamentals, generative AI, and machine learning.",
  },
};

export const technologyPreviews = courses.map((course) => ({
  ...course,
  ...technologyVisuals[course.slug],
}));