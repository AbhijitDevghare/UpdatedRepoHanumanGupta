import { allCourses, courses } from "./courses";
import { technologyPreviews } from "./technologyPreviews";

const categoryDefaults = {
  "cloud-computing": {
    level: "Foundational to intermediate",
    duration: "Defined with your training plan",
    learningMode: "Instructor-led or virtual",
    practicalLearning: "Guided practice in virtual cloud environments",
    prerequisites: ["Basic computer and internet concepts"],
    targetAudience: ["Students", "IT beginners", "Working professionals"],
    outcomes: ["Understand core cloud concepts", "Work with common services and workflows", "Read basic cloud architecture patterns", "Practice tasks in a virtual environment"],
    practical: ["Service and resource navigation", "Basic identity and access workflows", "Virtual environment exercises", "Scenario-based troubleshooting"],
    modules: [
      { id: 1, title: "Cloud Concepts", topics: ["Cloud computing foundations", "Service models", "Deployment models", "Shared responsibility"] },
      { id: 2, title: "Core Services", topics: ["Compute services", "Storage concepts", "Networking basics", "Monitoring and cost awareness"] },
      { id: 3, title: "Access and Operations", topics: ["Identity concepts", "Resource organization", "Operational workflows", "Basic troubleshooting"] },
    ],
  },
  "vmware-virtualization": {
    level: "Foundational to intermediate",
    duration: "Defined with your training plan",
    learningMode: "Instructor-led or virtual",
    practicalLearning: "Guided practice in remote virtual environments",
    prerequisites: ["Basic operating system and networking concepts"],
    targetAudience: ["Infrastructure beginners", "System administrators", "IT professionals"],
    outcomes: ["Explain virtualization concepts", "Understand hosts, guests, and virtual resources", "Work with virtual networking and storage concepts", "Approach common VM issues methodically"],
    practical: ["Virtual machine creation and configuration", "Resource allocation exercises", "Virtual networking scenarios", "Snapshot and troubleshooting workflows"],
    modules: [
      { id: 1, title: "Virtualization Fundamentals", topics: ["Virtualization concepts", "Hypervisors", "Virtual machines", "CPU, memory, and storage"] },
      { id: 2, title: "Virtual Infrastructure", topics: ["ESXi and hosts", "Datastores", "Virtual switches", "Resource pools"] },
      { id: 3, title: "Operations and Troubleshooting", topics: ["VM lifecycle", "Snapshots and templates", "Performance checks", "Common troubleshooting steps"] },
    ],
  },
  "windows-server": {
    level: "Foundational to intermediate",
    duration: "Defined with your training plan",
    learningMode: "Instructor-led or virtual",
    practicalLearning: "Guided Windows Server practice in virtual environments",
    prerequisites: ["Basic Windows desktop and networking familiarity"],
    targetAudience: ["IT beginners", "System administrators", "Support professionals"],
    outcomes: ["Understand Windows Server roles", "Work with users, groups, and policies", "Recognize core DNS and DHCP workflows", "Practice service administration in a virtual environment"],
    practical: ["Server role exploration", "User and group management", "DNS and DHCP scenarios", "Policy and service troubleshooting"],
    modules: [
      { id: 1, title: "Windows Server Foundations", topics: ["Server roles", "Installation concepts", "Administrative tools", "Server management"] },
      { id: 2, title: "Directory and Policy Services", topics: ["Active Directory concepts", "Users and groups", "Organizational units", "Group Policy foundations"] },
      { id: 3, title: "Network Services", topics: ["DNS concepts", "DHCP scopes", "Name resolution", "Service troubleshooting"] },
    ],
  },
  linux: {
    level: "Beginner to intermediate",
    duration: "Defined with your training plan",
    learningMode: "Instructor-led or virtual",
    practicalLearning: "Command-line practice in remote Linux environments",
    prerequisites: ["No prior Linux experience required"],
    targetAudience: ["Students", "IT beginners", "System administrators"],
    outcomes: ["Navigate Linux file systems", "Manage users and permissions", "Work with services and processes", "Use commands to investigate and troubleshoot systems"],
    practical: ["Linux command-line exercises", "User and group management", "File permissions", "Service management and troubleshooting"],
    modules: [
      { id: 1, title: "Linux Fundamentals", topics: ["Linux distributions", "Terminal navigation", "Files and directories", "Core commands"] },
      { id: 2, title: "Users, Permissions, and Processes", topics: ["User management", "Groups", "File permissions", "Processes and jobs"] },
      { id: 3, title: "Services and Troubleshooting", topics: ["Service management", "Logs", "Package management", "System investigation"] },
    ],
  },
  networking: {
    level: "Beginner to intermediate",
    duration: "Defined with your training plan",
    learningMode: "Instructor-led or virtual",
    practicalLearning: "Configuration and troubleshooting in virtual network environments",
    prerequisites: ["No prior networking experience required for the fundamentals path"],
    targetAudience: ["Students", "IT beginners", "Network support professionals", "System administrators"],
    outcomes: ["Understand core networking concepts", "Configure IP addressing and subnetting", "Work with VLANs and trunking", "Understand routing concepts", "Troubleshoot common network issues"],
    practical: ["Network configuration", "VLAN and trunking exercises", "Routing configuration", "Packet analysis and troubleshooting", "Packet Tracer or virtual network scenarios where applicable"],
    modules: [
      { id: 1, title: "Networking Fundamentals", topics: ["Network types", "OSI and TCP/IP models", "Ethernet", "Network devices", "Transmission media"] },
      { id: 2, title: "IP Addressing and Subnetting", topics: ["IPv4", "IPv6 overview", "Addressing and CIDR", "Subnetting", "VLSM concepts"] },
      { id: 3, title: "Switching", topics: ["MAC learning", "VLANs", "Trunking", "STP concepts", "Inter-VLAN routing"] },
      { id: 4, title: "Routing", topics: ["Static routing", "Dynamic routing concepts", "RIP overview", "OSPF concepts", "Route verification"] },
      { id: 5, title: "Network Troubleshooting", topics: ["Layered troubleshooting", "Connectivity checks", "Common misconfigurations", "Documentation and verification"] },
    ],
  },
  "programming-development": {
    level: "Beginner to intermediate",
    duration: "Defined with your training plan",
    learningMode: "Instructor-led or virtual",
    practicalLearning: "Guided coding exercises and automation scenarios",
    prerequisites: ["No prior programming experience required for the fundamentals path"],
    targetAudience: ["Students", "IT beginners", "Automation learners", "Working professionals"],
    outcomes: ["Understand programming building blocks", "Write readable scripts", "Work with data and control flow", "Apply code to practical technical tasks"],
    practical: ["Small programming exercises", "File and data handling", "API and automation scenarios", "Debugging and code review practice"],
    modules: [
      { id: 1, title: "Programming Foundations", topics: ["Variables and data types", "Operators", "Conditions", "Loops"] },
      { id: 2, title: "Functions and Data", topics: ["Functions", "Lists and dictionaries", "String handling", "File operations"] },
      { id: 3, title: "Practical Automation", topics: ["Reusable scripts", "Error handling", "Working with APIs", "Debugging workflows"] },
    ],
  },
  "database-technologies": {
    level: "Foundational to intermediate",
    duration: "Defined with your training plan",
    learningMode: "Instructor-led or virtual",
    practicalLearning: "Structured query and database exercises in virtual environments",
    prerequisites: ["Basic computer concepts"],
    targetAudience: ["Students", "Developers", "IT professionals", "Database beginners"],
    outcomes: ["Understand relational database concepts", "Read and write basic SQL", "Work with tables and relationships", "Approach common query and data issues"],
    practical: ["Schema and table exercises", "SQL query practice", "Data filtering and joins", "Basic backup and troubleshooting scenarios"],
    modules: [
      { id: 1, title: "Database Fundamentals", topics: ["Relational concepts", "Tables and keys", "Schemas", "Relationships"] },
      { id: 2, title: "SQL Foundations", topics: ["SELECT statements", "Filtering and sorting", "Joins", "Aggregations"] },
      { id: 3, title: "Database Operations", topics: ["Indexes overview", "Transactions", "Access concepts", "Basic troubleshooting"] },
    ],
  },
  "ai-emerging-technologies": {
    level: "Foundational",
    duration: "Defined with your training plan",
    learningMode: "Instructor-led or virtual",
    practicalLearning: "Guided AI workflows and applied experimentation",
    prerequisites: ["Basic computer literacy"],
    targetAudience: ["Students", "Working professionals", "Technical teams", "AI beginners"],
    outcomes: ["Understand core AI terminology", "Recognize common AI workflow patterns", "Write clearer prompts where applicable", "Evaluate outputs thoughtfully and responsibly"],
    practical: ["Prompt and response experiments", "Simple data preparation exercises", "Workflow design", "Output review and iteration"],
    modules: [
      { id: 1, title: "AI Foundations", topics: ["AI terminology", "Data and models", "Machine learning overview", "Responsible use"] },
      { id: 2, title: "Generative AI Workflows", topics: ["Prompt structure", "Context and constraints", "Output evaluation", "Iteration"] },
      { id: 3, title: "Applied Use Cases", topics: ["Automation opportunities", "Data preparation", "Workflow documentation", "Limitations and review"] },
    ],
  },
};

const courseProfiles = {
  ccna: {
    fullDescription: "CCNA training introduces the concepts and practical workflows used to build, configure, verify, and troubleshoot foundational networks. The course connects IP addressing, switching, routing, and troubleshooting to virtual network scenarios.",
    modules: categoryDefaults.networking.modules,
    learningOutcomes: categoryDefaults.networking.outcomes,
    practical: categoryDefaults.networking.practical,
    prerequisites: categoryDefaults.networking.prerequisites,
    targetAudience: categoryDefaults.networking.targetAudience,
    relatedCourses: ["networking-fundamentals", "ccnp-enterprise", "linux-administration", "vsphere"],
  },
  aws: { fullDescription: "AWS training introduces cloud foundations, core services, access concepts, and practical ways to reason about cloud resources in virtual learning environments.", relatedCourses: ["azure", "linux-administration", "ccna", "vsphere"] },
  azure: { fullDescription: "Microsoft Azure training introduces cloud concepts, common Azure services, resource organization, access, and operational workflows through guided virtual practice.", relatedCourses: ["aws", "linux-administration", "ccna", "vsphere"] },
  vsphere: { fullDescription: "VMware vSphere training introduces virtual infrastructure concepts, hosts, virtual machines, storage, networking, and the operational checks used in virtual environments.", relatedCourses: ["esxi", "vcenter", "virtualization-fundamentals", "ccna"] },
  "linux-administration": { fullDescription: "Linux Administration training develops practical confidence with commands, users, permissions, services, logs, and troubleshooting in remote Linux environments.", relatedCourses: ["linux-fundamentals", "shell-scripting", "ccna", "aws"] },
  "windows-server-administration": { fullDescription: "Windows Server Administration training covers the core administration concepts behind server roles, directory services, network services, policies, and operational troubleshooting.", relatedCourses: ["active-directory", "dns-dhcp", "powershell", "hyper-v"] },
  python: { fullDescription: "Python training builds programming foundations through readable code, data structures, functions, file handling, and practical technical exercises.", relatedCourses: ["python-automation", "programming-fundamentals", "database-fundamentals", "ai-fundamentals"] },
  "python-automation": { fullDescription: "Python for Automation applies programming fundamentals to repeatable technical tasks, file and data handling, API workflows, and operational scripting.", relatedCourses: ["python", "linux-administration", "programming-fundamentals", "ai-fundamentals"] },
};

const findCourse = (categorySlug, courseSlug) => {
  const category = allCourses.find((course) => course.categorySlug === categorySlug);
  return category?.slug === courseSlug ? category : allCourses.find((course) => course.slug === courseSlug);
};

export function getCourseDetail(categorySlug, courseSlug) {
  const course = findCourse(categorySlug, courseSlug);
  if (!course) return null;

  const categoryData = courses.find((item) => item.slug === course.categorySlug);
  const defaults = categoryDefaults[course.categorySlug];
  const profile = courseProfiles[course.slug] || {};
  const visual = technologyPreviews.find((item) => item.slug === course.categorySlug);

  return {
    ...course,
    category: categoryData?.category || course.category,
    fullDescription: profile.fullDescription || `${course.name} provides a structured introduction to ${course.category.toLowerCase()} with focused concepts, guided practice, and virtual learning scenarios.`,
    image: visual?.image,
    imageAlt: visual?.alt,
    level: profile.level || defaults.level,
    duration: profile.duration || defaults.duration,
    learningMode: profile.learningMode || defaults.learningMode,
    practicalLearning: profile.practicalLearning || defaults.practicalLearning,
    prerequisites: profile.prerequisites || defaults.prerequisites,
    targetAudience: profile.targetAudience || defaults.targetAudience,
    learningOutcomes: profile.learningOutcomes || defaults.outcomes,
    practical: profile.practical || defaults.practical,
    highlights: [
      "Structured curriculum",
      "Virtual practical environments",
      "Course-specific troubleshooting",
    ],
    modules: profile.modules || defaults.modules,
    curriculumPdf: profile.curriculumPdf || null,
    relatedCourses:
      profile.relatedCourses ||
      allCourses
        .filter((item) => item.categorySlug === course.categorySlug && item.slug !== course.slug)
        .slice(0, 4)
        .map((item) => item.slug),
  };
}
