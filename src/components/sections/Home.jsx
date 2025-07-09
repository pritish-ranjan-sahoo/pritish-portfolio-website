import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="w-full pb-6 pt-25 md:pt-6 flex justify-center items-center">
          <img src="/profile.png" alt="profile_pic" 
          width={200}
          className="rounded-full border-blue-500/30 shadow-[0_0_45px_rgba(59,130,246,0.6)] hover:scale-110 duration-300"
          />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Pritish Ranjan Sahoo
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="flex justify-center items-center bg-blue-500 text-white md:text-lg py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="/CV_Pritish_Ranjan_Sahoo.pdf"
              target="_blank"
              className="flex justify-center items-center gap-2 border md:text-lg border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            ><span className="text-lg md:text-xl font-extralight" >&#8595;</span>My Resume</a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
