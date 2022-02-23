// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};

const background = {
  // Options: Snow or Particle
  type: "Snow",
};

const section2Exp = "Experience";
const section2Edu = "Education";
const section2Skill = "Skills and Programming knowledge";
const prevJobs =[
{
  id: 1,
  workPlace: "Project Manager | eWave | 2019 - Present",
  paragraph:[
     "-Responsibility and management of a complete life cycle of several parallel projects from the stage of characterization, versioning, and web analysis.",
     "-Planning schedules and project control.",
     "-Ongoing problem solving and user support.",
     "-Working with multiple interfaces in the organization, development teams, QA, and external factors.",
     "-Assimilating and training the customer, preparing procedures, and more."
    ]
},
{
  id: 2,
  workPlace: "Product Support and Integration Manager | Hola | 2018 - 2019",
  paragraph:
    [
      "-Lead a team of engineers and support representatives on Hola Spark video features and CDN service. Mentored and trained team members to grow the skills required to provide great customer support.",
      "-Provided leadership to resolve problems and optimize integration processes focus on answering questions to foster product knowledge and client education resulting in easy integration flow and positive customer feedback.",
      "-Monitored operational activity such as ticket volume, KPI's, product changes and team performance with the main goal to increase team efficiency and effectiveness."
    ],
},
{
  id: 3,
  workPlace: "QA and NOC Engineer | Hola | 2015 - 2018",
  paragraph:
    [
      "-Automated and manual QA for various services.",
      "-Develop and maintain selenium automation tests for: Internet accelerator extension, and video CDN. ",
      "-Running End-to-End testing in different environments for new features while making sure they comply with Hola’s technical standard. Manage a global team remotely.",
      "-Server monitoring and troubleshooting, performing ongoing support and maintenance.."
    ],
},
{
  id: 4,
  workPlace: "Security Company Team leader | Security Squad | 2011 - 2015",
  paragraph:
    [
      "-Security company that providing diverse security services in the civilian sector.",
    ],
},
{
id: 5,
workPlace: "Military Service at Caracal battalion | 2007 - 2010",
paragraph:
  [
    "-released as a staff sergeant.",
  ],
}
];

const education =[
  {
    id: 1,
    place: "Full Stack .NET Software Engineer Course | HackerU | 2020 - 2021",
    details:[ "-A comprehensive programming course consists of 600 academic hours."]
  },
  {
    id: 2,
    place: "B.Sc. Electrical Engineering | Ruppin Academic Center | 2013 - 2016",
    details:
      ["Specialization in Computer Engineering, Networks and Communication Systems."],
  }
  ];

  const skills =[
    {
      id: 1,
      area: "Web Development",
      details:[ "HTML, CSS, JS, React, NodeJS, SQL, C#."]
    },
    {
      id: 2,
      area: "QA Automation",
      details:
        ["Java, Selenium."],
    },
    {
      id: 3,
      area: "RT Embedded",
      details:
        ["C, C++."],
    },
    {
      id: 4,
      area: "Tools",
      details:
        ["GitHub version control, Jira, TFS, VS Code, VS."],
    }
    ];



const skillsBar = [
  {
    id: 1,
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  { 
    id: 2,
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  { 
    id: 3,
    name: "Javascript",
    faClass: "fab fa-js",
  },
  { 
    id: 4,
    name: "Node",
    faClass: "fab fa-node",
  },
  { 
    id: 5,
    name: "ReactJS",
    faClass: "fab fa-react",
  },
  { 
    id: 6,
    name: "Database",
    faClass: "fas fa-database",
  },
  { 
    id: 7,
    name: "Github",
    faClass: "fab fa-github",
  },
  { 
    id: 8,
    name: "Java",
    faClass: "fab fa-java",
  },
  { 
    id: 9,
    name: "AWS",
    faClass: "fab fa-aws",
  },
];


const section5Title = "Get in Touch";
const contact = {
  phone: "054-6710888",
  mail: "3alexso@gmail.com",
  city: "Netanya",
  contactUrl: "https://formspree.io/f/xayabqzd",
};

const social = {
  //github: "https://github.com",
  facebook: "https://www.facebook.com/alex.solovkin",
  linkedin: "https://www.linkedin.com/in/alexso/",
  instagram: "https://www.instagram.com/alexso_0/",
  resume: "https://pdfhost.io/v/cQYCrcYbw_Alex_Solovkin_CVpdf.pdf",
};
export {
  animation,
  background,
  prevJobs,
  skillsBar,
  contact,
  social,
  section2Exp,
  section2Edu,
  education,
  section2Skill,
  skills,
  section5Title,
};
