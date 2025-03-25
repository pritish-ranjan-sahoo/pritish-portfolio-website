import { RevealOnScroll } from "../RevealOnScroll";
import data from "../../assets/data.json";
import SkillsCard from "../SkillsCard";
import EducationCard from "../EducationCard";
import WorkCard from "../WorkCard";

export const About = () => {
  const frontendSkills = data.skills.frontend;
  const backendSkills = data.skills.backend;
  const tools = data.skills.tools;
  const courseWork = data.skills.courseWork;
  const education = data.education;
  const workExp = data.work_experience;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-3 text-center">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <p className="text-gray-300 mb-10 text-center">
              Here are some of my skills →
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <SkillsCard skills={frontendSkills} name={"Frontend"} />
              <SkillsCard skills={backendSkills} name={"Backend"} />
              <SkillsCard skills={tools} name={"Tools"} />
              <SkillsCard skills={courseWork} name={"Course Work"} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <div>
                <EducationCard education={education} />
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div>
                <WorkCard workExp={workExp} />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
