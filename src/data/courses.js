const makeCourse = (name, slug, shortDescription) => ({
  name,
  slug,
  shortDescription,
});

const category = (categoryName, slug, description, technologies, courseList) => ({
  category: categoryName,
  slug,
  description,
  technologies,
  courses: courseList.map((course) => ({ ...course, categorySlug: slug, category: categoryName })),
});

export const courses = [
  category(
    "Cloud Computing",
    "cloud-computing",
    "Build practical cloud skills across core services, architecture, and operations.",
    ["AWS", "Microsoft Azure"],
    [
      makeCourse("AWS", "aws", "Explore the foundations of cloud services and AWS environments."),
      makeCourse("Microsoft Azure", "azure", "Build a practical understanding of Azure services and cloud workflows."),
    ],
  ),
  category(
    "VMware & Virtualization",
    "vmware-virtualization",
    "Understand virtual infrastructure from core concepts to enterprise platforms.",
    ["vSphere", "ESXi", "vCenter", "VCF"],
    [
      makeCourse("VMware vSphere", "vsphere", "Learn the core concepts behind VMware vSphere environments."),
      makeCourse("VMware ESXi", "esxi", "Understand ESXi hosts, resources, storage, and virtual machines."),
      makeCourse("VMware vCenter", "vcenter", "Explore centralized management for virtual infrastructure."),
      makeCourse("VMware VCF", "vmware-vcf", "Get an overview of VMware Cloud Foundation and its building blocks."),
      makeCourse("Virtualization Fundamentals", "virtualization-fundamentals", "Build a clear foundation in compute virtualization and virtual machines."),
    ],
  ),
  category(
    "Windows Server",
    "windows-server",
    "Develop confidence working with the services behind Windows infrastructure.",
    ["Active Directory", "DNS", "PowerShell", "Hyper-V"],
    [
      makeCourse("Windows Server Administration", "windows-server-administration", "Learn the core tasks involved in managing Windows Server environments."),
      makeCourse("Active Directory", "active-directory", "Understand directory services, users, groups, and domain organization."),
      makeCourse("DNS & DHCP", "dns-dhcp", "Explore the network services that connect and configure Windows environments."),
      makeCourse("Group Policy", "group-policy", "Learn how policy-based administration supports consistent system management."),
      makeCourse("PowerShell", "powershell", "Use PowerShell concepts to work with repeatable administration tasks."),
      makeCourse("Hyper-V", "hyper-v", "Understand the fundamentals of Microsoft Hyper-V virtualization."),
    ],
  ),
  category(
    "Linux",
    "linux",
    "Work comfortably with Linux systems, services, administration, and automation.",
    ["Linux Fundamentals", "Administration", "Shell Scripting"],
    [
      makeCourse("Linux Fundamentals", "linux-fundamentals", "Build a clear foundation in Linux concepts, commands, and file systems."),
      makeCourse("Linux Administration", "linux-administration", "Develop practical skills for managing Linux users, services, and systems."),
      makeCourse("Linux Server Administration", "linux-server-administration", "Explore the operational tasks involved in maintaining Linux servers."),
      makeCourse("Shell Scripting", "shell-scripting", "Use shell scripting concepts to automate common system tasks."),
    ],
  ),
  category(
    "Networking",
    "networking",
    "Build practical networking skills from fundamentals to enterprise technologies.",
    ["CCNA", "CCNP", "Switching", "Routing", "Juniper"],
    [
      makeCourse("Networking Fundamentals", "networking-fundamentals", "Understand the essential concepts behind modern computer networks."),
      makeCourse("CCNA", "ccna", "Build practical foundations in routing, switching, and network operations."),
      makeCourse("CCNP Enterprise", "ccnp-enterprise", "Explore enterprise networking concepts and advanced operations."),
      makeCourse("Switching & Routing", "switching-routing", "Learn how switching and routing connect systems across networks."),
      makeCourse("Juniper Networking", "juniper-networking", "Get introduced to Juniper networking concepts and environments."),
    ],
  ),
  category(
    "Programming & Development",
    "programming-development",
    "Use programming to automate, integrate, and solve technical problems.",
    ["Python", "Automation", "Programming"],
    [
      makeCourse("Python", "python", "Learn practical Python concepts for technical and development workflows."),
      makeCourse("Python for Automation", "python-automation", "Apply Python to repeatable infrastructure and operations tasks."),
      makeCourse("Programming Fundamentals", "programming-fundamentals", "Build a strong foundation in programming logic and problem solving."),
    ],
  ),
  category(
    "Database Technologies",
    "database-technologies",
    "Understand data platforms, queries, schemas, and database operations.",
    ["Oracle", "SQL Server", "PostgreSQL"],
    [
      makeCourse("Oracle", "oracle", "Explore the foundations of Oracle databases and relational data."),
      makeCourse("Microsoft SQL Server", "microsoft-sql-server", "Build practical understanding of SQL Server concepts and queries."),
      makeCourse("PostgreSQL", "postgresql", "Learn the foundations of PostgreSQL and relational database workflows."),
      makeCourse("Database Fundamentals", "database-fundamentals", "Understand schemas, tables, queries, and core database concepts."),
    ],
  ),
  category(
    "AI & Emerging Technologies",
    "ai-emerging-technologies",
    "Explore practical concepts across modern AI, data, and emerging technology.",
    ["AI", "Generative AI", "Machine Learning", "Data Science"],
    [
      makeCourse("AI Fundamentals", "ai-fundamentals", "Build a clear foundation in artificial intelligence concepts and applications."),
      makeCourse("Generative AI", "generative-ai", "Explore the concepts and workflows behind generative AI tools."),
      makeCourse("Prompt Engineering", "prompt-engineering", "Learn structured approaches to creating useful prompts and workflows."),
      makeCourse("Machine Learning", "machine-learning", "Understand the core ideas behind machine learning workflows."),
      makeCourse("Data Science", "data-science", "Explore the foundations of working with data for technical decisions."),
    ],
  ),
];

export const allCourses = courses.flatMap((courseCategory) => courseCategory.courses);
