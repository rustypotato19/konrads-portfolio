import { useEffect } from "react";
import projectsData from "./Projects.json";

type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export default function Projects() {
  useEffect(() => {
    document.title = "Konrad's Projects";
    window.scrollTo(0, 0);
  }, []);

  const featured = projectsData.filter((p: Project) => p.featured);
  const others = projectsData.filter((p: Project) => !p.featured);

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-black via-[#031406] to-[#003314] text-green-200">
      <a
        href="/"
        className="fixed top-4 left-4 bg-linear-to-br from-green-700 to-green-900 text-green-200 px-4 py-2 rounded-lg hover:from-green-900 hover:to-green-700 transition-all duration-200 hover:scale-[102%] font-bold hover:cursor-pointer z-50"
        aria-label="Go back to homepage"
      >
        Home
      </a>
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold text-green-400 lowercase">
            projects
          </h1>

          <p className="mt-4 max-w-xl text-green-300/80 lowercase">
            selected builds, experiments, and systems i've designed or
            engineered.
          </p>
        </header>

        {/* Featured Projects */}
        {featured.length > 0 && (
          <Section title="featured">
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((project: Project, index: number) => (
                <ProjectCard key={index} project={project} large />
              ))}
            </div>
          </Section>
        )}

        {/* Other Projects */}
        {others.length > 0 && (
          <Section title="other work">
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((project: Project, index: number) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </Section>
        )}

        <footer className="pt-16 border-t border-green-500/20 text-sm text-green-400/60 lowercase">
          © {new Date().getFullYear()} aboutkonrad.com
        </footer>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-xl text-green-400 lowercase mb-6">{`${title} ${title=="featured" ? "🌟" : ""}`}</h2>
      {children}
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div
      className={`
        sm:w-fit ${large && "sm:min-w-md"} max-w-full
        flex flex-col justify-between
        rounded-xl border 
        ${large ? "border-green-500/80" : "border-green-500/20"} 
        ${large ? "bg-green-900/20" : "bg-black/50"} backdrop-blur
        p-6 transition-all duration-200
        hover:border-green-400 hover:bg-green-500/5
        hover:shadow-lg hover:shadow-green-500/30
      `}
    >
      <div>
        <h3
          className={`text-green-300 font-medium lowercase ${large ? "text-xl" : "text-md"}`}
        >
          {project.title}
        </h3>

        {large && (
          <p className="mt-3 text-green-300/80 lowercase leading-relaxed">
            {project.description}
          </p>
        )}

        {/* Stack tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 lowercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="mt-6 flex gap-4 text-sm lowercase">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
            aria-label={`Link to GitHub repository for ${project.title}`}
          >
            github →
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
            aria-label={`Link to live version of ${project.title}`}
          >
            live →
          </a>
        )}
      </div>
    </div>
  );
}
