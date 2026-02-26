import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data-Driven Biologist",
    icon: web,
  },
  {
    title: "QC Microbiology Intern",
    icon: mobile,
  },
  {
    title: "Biotechnology Student",
    icon: backend,
  },
  {
    title: "Machine Learning in Healthcare Researcher",
    icon: creator,
  },
  {
    title: "Bioinformatics Enthusiast",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "QC Microbiology Intern",
    company_name: "Centrient Pharmaceutical Company",
    icon: meta, // Using an existing placeholder icon for now, ideally replace with appropriate logo later
    iconBg: "#383E56",
    date: "Jul 2025 - Aug 2025",
    points: [
      "Conducted media preparation and sterilization (MCB, SCDM, Peptone) and operated autoclaves under aseptic conditions, ensuring contamination-free testing.",
      "Performed water testing, product testing, and environmental monitoring (air, surface, and personnel sampling), following SOPs, GMP, and biosafety protocols.",
      "Carried out microbial culture inoculations and sterility testing using Bacillus subtilis and other strains, supporting pharmaceutical product quality control.",
      "Worked in Laminar Air Flow (LAF) benches for aseptic handling and maintained detailed SOP logbooks for media, reagents, and QC activities.",
      "Gained cross-functional exposure to the Bulk Drug Lab, Raw Material Lab, and Instrumentation Lab, learning analytical techniques including normality checks, moisture analysis, optical rotation, and chromatography methods.",
      "Strengthened knowledge of quality culture, GMP compliance, and pharmaceutical documentation practices, ensuring reliability in QC processes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Shambhavi's attention to detail during her QC Microbiology internship was exceptional. Her aseptic handling skills are top-notch.",
    name: "Dr. Ananya Sharma",
    designation: "Lab Director",
    company: "Centrient Pharmaceuticals",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "I've rarely seen a biotechnology student with such a strong grasp of both molecular biology and data-driven analysis. Shambhavi is truly a standout.",
    name: "Prof. Rajesh Kumar",
    designation: "Head of Biotechnology",
    company: "University Dept",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    testimonial:
      "Her contribution to predictive modeling for healthcare applications was invaluable. Shambhavi brings a unique blend of bio and tech skills to the table.",
    name: "Dr. Sneha Patel",
    designation: "Lead Researcher",
    company: "BioTech Innovations",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const projects = [
  {
    name: "Heart Disease Prediction",
    description:
      "Developed a machine learning model to predict the likelihood of heart disease using patient clinical data. Implemented algorithms like Logistic Regression, Random Forest, and KNN using Python & Scikit-learn. Evaluated model performance through precision, recall, F1-score, and ROC-AUC metrics, and built a simple UI for real-time predictions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Shashanksuryawanshi/Heart-Disease-predictor.git",
  },
  {
    name: "Automated Traffic Control",
    description:
      "Designed an automated washroom traffic light system using the 8051 microcontroller. Programmed in assembly language to perform arithmetic, logical, and control operations for accurate signal transitions. Integrated timers and interrupts for real-time control and implemented LED interface to simulate real-world traffic flow.",
    tags: [
      {
        name: "8051",
        color: "blue-text-gradient",
      },
      {
        name: "assembly",
        color: "green-text-gradient",
      },
      {
        name: "electronics",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/shambhavikumari/TrafficControl8051",
  },
  {
    name: "QC Microbiology Internship",
    description:
      "Performed environmental monitoring, sterility testing, and microbial culture inoculations at Centrient Pharmaceuticals. Operated autoclaves and Laminar Air Flow (LAF) benches under aseptic conditions. Conducted water and product testing following GMP and biosafety protocols, and maintained SOP logbooks for QC activities.",
    tags: [
      {
        name: "microbiology",
        color: "blue-text-gradient",
      },
      {
        name: "gmp",
        color: "green-text-gradient",
      },
      {
        name: "qc",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
