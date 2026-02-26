import React from "react";
import { SectionWrapper } from "../hoc";
import { SiJupyter, SiGooglecolab, SiGithub, SiUbuntu, SiDocker } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Microscope, FlaskConical, TestTubeDiagonal, Database, TestTubes } from "lucide-react";

// Local tech stack definition to allow for JSX icon components
const techStack = [
  { name: "VS Code", icon: <VscVscode size={40} className="text-white" /> },
  { name: "Jupyter", icon: <SiJupyter size={40} className="text-white" /> },
  { name: "Google Colab", icon: <SiGooglecolab size={40} className="text-white" /> },
  { name: "GitHub", icon: <SiGithub size={40} className="text-white" /> },
  { name: "Ubuntu", icon: <SiUbuntu size={40} className="text-white" /> },
  { name: "Docker", icon: <SiDocker size={40} className="text-white" /> },
  { name: "Microscopy", icon: <Microscope size={40} className="text-white" /> },
  { name: "Chemical Analysis", icon: <TestTubes size={40} className="text-white" /> },
  { name: "Laboratory Flasks", icon: <FlaskConical size={40} className="text-white" /> },
  { name: "Sample Testing", icon: <TestTubeDiagonal size={40} className="text-white" /> },
  { name: "Database Systems", icon: <Database size={40} className="text-white" /> },
];

const TechCard = ({ name, icon }) => (
  <div className="group relative w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] border border-purple-500/30 rounded-lg flex justify-center items-center bg-[#151030] hover:bg-purple-500/10 hover:border-purple-500/80 transition-all duration-300">
    {icon}
    {/* Tooltip */}
    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#050816] px-3 py-1 text-xs border border-white/10 rounded whitespace-nowrap z-10 text-white">
      {name}
    </div>
  </div>
);

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto'>
      {techStack.map((tech) => (
        <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
