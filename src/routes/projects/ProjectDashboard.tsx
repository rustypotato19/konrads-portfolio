import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowBigLeftDashIcon,
  ArrowUpRightIcon,
  StarIcon,
  FolderKanbanIcon,
  Code2Icon,
  TagsIcon,
} from "lucide-react";
import PageContainer from "../../components/PageContainer";
import { projectsData } from "../../data/projects/Projects";
import type { Project } from "../../types/types";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function ProjectDashboard() {
  useEffect(() => {
    document.title = "Konrad's Projects";
    window.scrollTo(0, 0);
  }, []);

  const projects = projectsData as Project[];

  const featured = projects.filter((project) => project.featured);

  // Count projects by primary language
  const languageCounts = projects.reduce<Record<string, number>>(
    (acc, project) => {
      acc[project.primary_lang] = (acc[project.primary_lang] || 0) + 1;
      return acc;
    },
    {},
  );

  const languages = Object.entries(languageCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([language, count]) => ({
      language,
      count,
      percentage:
        projects.length > 0 ? Math.round((count / projects.length) * 100) : 0,
    }));

  const uniqueTechnologies = new Set(
    projects.flatMap((project) => project.stack),
  ).size;

  return (
    <PageContainer>
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-8xl mx-auto px-6 py-10"
      >
        {/* Header */}
        <motion.header variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="/"
              className="
                w-10 h-10
                flex items-center justify-center
                text-(--s-h-green)
                hover:text-(--s-green)
                hover:scale-110
                transition-all duration-150
                shrink-0
              "
              aria-label="Go back to homepage"
            >
              <ArrowBigLeftDashIcon className="w-8 h-8 sm:w-12 sm:h-12 relative top-1.5" />
            </a>

            <h1 className="text-4xl sm:text-5xl font-semibold text-(--s-h-green) lowercase">
              my project dashboard
            </h1>
          </div>

          <p className="mt-4 max-w-2xl text-(--s-green)/80 lowercase leading-relaxed">
            selected builds, experiments, and systems i've designed or
            engineered.
          </p>
        </motion.header>

        {/* Stats */}
        <motion.section
          variants={itemVariants}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          <StatCard
            icon={<FolderKanbanIcon />}
            label="total projects"
            value={projects.length}
          />

          <StatCard
            icon={<Code2Icon />}
            label="technologies"
            value={uniqueTechnologies}
          />

          <StatCard
            icon={<StarIcon />}
            label="featured"
            value={featured.length}
          />
        </motion.section>

        {/* Language breakdown */}
        <motion.section variants={itemVariants} className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Code2Icon className="w-5 h-5 text-(--s-h-green)" />

            <h2 className="text-2xl text-(--s-h-green) lowercase font-semibold">
              languages
            </h2>
          </div>

          <div
            className="
              rounded-xl
              border border-(--s-green)/20
              bg-(--p-green)/40
              p-6
            "
          >
            <div className="space-y-5">
              {languages.map(({ language, percentage, count }) => (
                <div key={language}>
                  <div className="flex justify-between mb-2 text-sm lowercase">
                    <span className="text-(--t-h-green)">{language}</span>

                    <span className="text-(--t-h-green)/50">
                      {percentage}% · {count}{" "}
                      {count === 1 ? "project" : "projects"}
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-(--s-green)/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="
                          h-full
                          rounded-full
                          bg-(--s-h-green)
                        "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Featured */}
        {featured.length > 0 && (
          <motion.section variants={itemVariants} className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-(--s-h-green)" />

                <h2 className="text-2xl text-(--s-h-green) lowercase font-semibold">
                  featured projects
                </h2>
              </div>

              <a
                href="/projects/all"
                className="
                  flex items-center gap-1
                  text-sm
                  lowercase
                  text-(--s-green)
                  hover:text-(--s-h-green)
                  transition
                "
              >
                view all
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex gap-5 overflow-x-auto pb-4 snap-x">
              {featured.map((project) => (
                <div
                  key={project.title}
                  className="min-w-75 sm:min-w-105 snap-start"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Browse all */}
        <motion.section
          variants={itemVariants}
          className="
            rounded-xl
            border border-(--s-green)/20
            bg-(--p-green)/10
            p-6 sm:p-8
            flex flex-col sm:flex-row
            sm:items-center
            justify-between
            gap-6
          "
        >
          <div>
            <div className="flex items-center gap-2">
              <TagsIcon className="w-5 h-5 text-(--s-h-green)" />

              <h2 className="text-xl text-(--s-h-green) font-semibold lowercase">
                browse all projects
              </h2>
            </div>

            <p className="mt-2 text-sm text-(--t-h-green)/60 lowercase">
              search projects by title, keyword, or primary language.
            </p>
          </div>

          <a
            href="/projects/all"
            className="
              shrink-0
              rounded-lg
              border border-(--s-green)/30
              px-5 py-3
              text-sm
              lowercase
              text-(--s-h-green)
              hover:border-(--s-h-green)/60
              hover:bg-(--s-green)/10
              transition
            "
          >
            explore projects →
          </a>
        </motion.section>

        {/* Footer */}
        <motion.footer
          variants={itemVariants}
          className="
            mt-16
            pt-8
            border-t border-(--s-green)/20
            text-sm
            text-(--t-h-green)/60
            lowercase
          "
        >
          interested in working together?{" "}
          <a
            href="/contact"
            className="text-(--s-h-green) hover:text-(--t-h-green) transition"
          >
            get in touch →
          </a>
        </motion.footer>
      </motion.main>
    </PageContainer>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;

    const delay = 400;
    const duration = 2200;

    const timeout = setTimeout(() => {
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);

        setCount(Math.round(eased * value));

        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      };

      frame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div
      className="
        flex items-center gap-5
        rounded-xl
        border border-(--s-green)/25
        bg-(--p-green)/40
        p-5
        transition-colors duration-200
        hover:border-(--s-green)/45
        hover:bg-(--s-green)/5
      "
    >
      <div
        className="
          shrink-0
          flex items-center justify-center
          w-11 h-11
          rounded-lg
          border border-(--s-green)/20
          bg-(--s-green)/10
          text-(--s-h-green)/80
        "
      >
        {icon}
      </div>

      <div className="flex sm:flex-col gap-3 sm:gap-0">
        <div className="text-3xl font-semibold leading-none text-(--s-h-green)">
          {count}
        </div>

        <div className="text-sm text-(--t-h-green)/55 lowercase">{label}</div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="
        h-full
        rounded-xl
        border border-(--s-green)/30
        bg-(--s-green)/5
        p-6
        transition-all
        duration-200
        hover:border-(--s-h-green)/60
        hover:bg-(--s-green)/10
      "
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-(--s-h-green) lowercase">
          {project.title}
        </h3>

        <StarIcon className="w-5 h-5 shrink-0 text-(--s-h-green)" />
      </div>

      <p className="mt-3 text-sm text-(--t-h-green)/60 lowercase leading-relaxed">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span
          className="
            rounded-full
            border border-(--s-h-green)/30
            bg-(--s-h-green)/10
            px-3 py-1
            text-xs
            text-(--s-h-green)
          "
        >
          {project.primary_lang}
        </span>

        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border border-(--s-green)/30
              bg-(--s-green)/10
              px-3 py-1
              text-xs
              text-(--t-h-green)/70
            "
          >
            {tech}
          </span>
        ))}
      </div>
      {(project.github || project.live) && (
        <div className="mt-4 flex gap-4 text-xs lowercase">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                    flex items-center gap-1
                    text-(--s-green)
                    hover:text-(--s-h-green)
                    transition
                  "
            >
              github
              <ArrowUpRightIcon className="w-3 h-3" />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                    flex items-center gap-1
                    text-(--s-green)
                    hover:text-(--s-h-green)
                    transition
                  "
            >
              live
              <ArrowUpRightIcon className="w-3 h-3" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
