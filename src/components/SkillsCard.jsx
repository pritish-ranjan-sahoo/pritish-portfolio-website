import React from "react";

export default function SkillsCard({skills,name}) {
  return (
    <div className="rounded-xl p-2 hover:-translate-y-1 transition-all text-center">
      <h3 className="text-xl font-bold font-mono mb-4"> {name}</h3>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {skills.map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
