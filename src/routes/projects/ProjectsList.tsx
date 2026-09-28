import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowBigLeftDashIcon,
  ArrowUpRightIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import PageContainer from "../../components/PageContainer";
import { projectsData } from "../../data/projects/Projects";
import type { Project } from "../../types/types";

import "./projectList.css";

export default function ProjectsList() {
  useEffect(() => {
    document.title = "All Projects — Konrad";
    window.scrollTo(0, 0);
  }, []);

  const projects = projectsData as Project[];

  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("all");

  const languages = useMemo(() => {
    return [...new Set(projects.map((project) => project.primary_lang))].sort(
      (a, b) => a.localeCompare(b),
    );
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return [...projects]
      .filter((project) => {
        if (language !== "all" && project.primary_lang !== language) {
          return false;
        }

        if (!query) {
          return true;
        }

        const searchableText = [
          project.title,
          project.description,
          project.primary_lang,
          ...project.keywords,
          ...project.stack,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [projects, search, language]);

  const clearFilters = () => {
    setSearch("");
    setLanguage("all");
  };

  return (
    <PageContainer>
      <main className="sm:w-6xl max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="/projects"
              className="
                w-10 h-10
                flex items-center justify-center
                text-(--s-h-green)
                hover:text-(--s-green)
                hover:scale-110
                transition-all duration-150
                shrink-0
              "
              aria-label="Back to project dashboard"
            >
              <ArrowBigLeftDashIcon className="w-8 h-8 sm:w-12 sm:h-12" />
            </a>

            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-(--s-h-green) lowercase">
                all projects
              </h1>

              <p className="mt-2 text-sm text-(--s-green)/70 lowercase">
                {filteredProjects.length} of {projects.length} projects
              </p>
            </div>
          </div>
        </header>

        {/* Search / filters */}
        <div
          className="
            sticky top-4 z-10
            mb-8
            rounded-xl
            border border-(--s-green)/20
            bg-(--p-green)/10
            backdrop-blur-md
            p-4
          "
        >
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <SearchIcon
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  w-4 h-4
                  text-(--s-green)/60
                "
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="search title, keywords, stack..."
                className="
                  w-full
                  rounded-lg
                  border border-(--s-green)/20
                  bg-(--p-green)/40
                  py-3 pl-10 pr-4
                  text-sm
                  text-(--t-h-green)
                  placeholder:text-(--t-h-green)/30
                  outline-none
                  focus:border-(--s-h-green)/60
                "
              />
            </div>

            {/* Language */}
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="
              w-full sm:w-auto
              min-w-35
              rounded-lg
              border
              border-(--s-green)/20
              bg-(--p-green)/40
              px-4 py-3
              text-sm
              text-(--t-h-green)
              lowercase
              outline-none
              cursor-pointer
              transition
              focus:border-(--s-h-green)/60
            "
            >
              <option value="all">all languages</option>

              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>

            {(search || language !== "all") && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  flex items-center justify-center gap-2
                  rounded-lg
                  border border-(--s-green)/20
                  px-4
                  text-sm
                  text-(--s-green)
                  hover:text-(--s-h-green)
                  hover:border-(--s-h-green)/50
                  transition
                "
              >
                <XIcon className="w-4 h-4" />
                clear
              </button>
            )}
          </div>
        </div>

        {/* Project list */}
        <div
          className="
            rounded-xl
            border border-(--s-green)/20
            overflow-hidden
          "
        >
          {filteredProjects.length > 0 ? (
            <div className="divide-y divide-(--s-green)/10">
              {filteredProjects.map((project) => (
                <ProjectListItem key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <p className="text-(--t-h-green)/50 lowercase">
                no projects match your search.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-4
                  text-sm
                  text-(--s-h-green)
                  hover:text-(--s-green)
                  transition
                "
              >
                clear filters →
              </button>
            </div>
          )}
        </div>
      </main>
    </PageContainer>
  );
}

function ProjectListItem({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        group
        p-5 sm:p-6
        bg-(--p-green)/20
        hover:bg-(--s-green)/35
        transition-colors
      "
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-5">
        {/* Main */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-lg font-semibold text-(--s-h-green) lowercase">
              {project.title}
            </h2>

            <span
              className="
                rounded-full
                border border-(--s-green)/30
                bg-(--s-green)/10
                px-2.5 py-0.5
                text-xs
                text-(--s-green)
              "
            >
              {project.primary_lang}
            </span>

            {project.featured && (
              <span
                className="
                  rounded-full
                  border border-(--s-h-green)/30
                  bg-(--s-h-green)/10
                  px-2.5 py-0.5
                  text-xs
                  text-(--s-h-green)
                "
              >
                featured
              </span>
            )}
          </div>

          <p className="mt-2 text-sm text-(--t-h-green)/60 lowercase leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Keywords */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.keywords.map((keyword) => (
              <span
                key={keyword}
                className="
                  text-xs
                  text-(--t-h-green)/40
                  lowercase
                "
              >
                #{keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Stack + links */}
        <div className="lg:w-64 shrink-0">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-md
                  border border-(--s-green)/20
                  px-2 py-1
                  text-xs
                  text-(--t-h-green)/50
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
        </div>
      </div>
    </motion.article>
  );
}
