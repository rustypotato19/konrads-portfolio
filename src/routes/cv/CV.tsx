import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowBigLeftDashIcon,
  ArrowUpRightIcon,
  BriefcaseBusinessIcon,
  GraduationCapIcon,
  XIcon,
} from "lucide-react";
import PageContainer from "../../components/PageContainer";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const experience = [
  {
    company: "ETAS Ltd.",
    role: "Field Applications Engineer",
    period: "09/2024 - 09/2025",
    details: [
      "Worked as level-two customer support, handling technical customer issues escalated from the initial support team.",
      "Rapidly developed a broad understanding of the company's products and their modules.",
      "Used technical documentation, investigation, and logical problem-solving to resolve customer issues within defined SLAs.",
      "Worked on an internal team product alongside primary responsibilities.",
      "Developed practical experience with Git and Python.",
      "Set up Jenkins for automated testing and deployment within the team.",
      "Led Jenkins training sessions for team members who were unfamiliar with the platform.",
    ],
  },
  {
    company: "ETAS Ltd.",
    role: "Infrastructure Engineer",
    period: "4 months - Secondary to FAE @ ETAS",
    details: [
      "Worked alongside the primary FAE role after being recommended by my line manager for an opening within the Infrastructure Engineering team.",
      "Worked with physical hardware and hosted Jenkins solutions for internal teams.",
      "Further developed Jenkins and deployment automation knowledge.",
      "Investigated existing deployment pipelines and identified significant performance issues.",
      "Improved deployment times from approximately 2 hours to approximately 20 minutes.",
    ],
  },
  {
    company: "ETAS Ltd.",
    role: "Technical Writer",
    period: "4 months - Tertiary to FAE @ ETAS",
    details: [
      "Worked alongside the primary FAE role on technical documentation.",
      "Improved the formatting and maintainability of produced documentation.",
      "Recommended moving from standard CSV-to-table formatting towards HTML tables for improved robustness.",
      "Produced approximately 2-3 complete specifications per day, compared with a typical rate of around 1 every 1-2 days elsewhere within the team.",
    ],
  },
  {
    company: "Batch'd",
    role: "Crew Member (Keyholder)",
    period: "11/2025 - 06/2026",
    details: [
      "Managed store opening and closing procedures.",
      "Handled product deliveries and maintained appropriate stock levels through frequent ordering.",
      "Maintained high food-safety standards.",
      "Achieved an L2 food safety qualification.",
      "Took responsibility for keyholder duties and supported the wider team during day-to-day operations.",
    ],
  },
  {
    company: "Five Guys",
    role: "Crew Member",
    period: "10/2023 - 09/2024",
    details: [
      "Prepared fresh ingredients and maintained cleanliness across work stations.",
      "Delivered consistent customer service in a fast-paced environment.",
      "Worked efficiently as part of a busy team.",
      "Followed food safety procedures and operational standards.",
    ],
  },
  {
    company: "The Piccadilly",
    role: "Games Master",
    period: "06/2022 - 10/2022",
    details: [
      "Independently operated escape-room experiences.",
      "Managed bookings, payments, customer satisfaction, safety oversight, and facility maintenance.",
      "Worked independently while managing multiple responsibilities simultaneously.",
      "Developed communication, multitasking, and problem-solving skills.",
    ],
  },
];

const technicalSkills = [
  "react",
  "python",
  "javascript",
  "typescript",
  "c++",
  "java",
  "html",
  "css",
  "tcss",
  "express.js",
  "node.js",
  "postgresql",
  "mariadb",
  "linux",
  "windows",
  "git",
  "jenkins",
];

const transferableSkills = [
  "problem-solving",
  "adaptability",
  "customer communication",
  "organisation",
  "time management",
  "performance under pressure",
  "teamwork",
  "leadership",
  "individual working",
];

export default function CV() {
  const [selectedRole, setSelectedRole] = useState<
    (typeof experience)[number] | null
  >(null);

  return (
    <PageContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-8xl w-fit mx-auto px-6 py-10"
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-1 flex flex-col gap-12">
            {/* Header */}
            <motion.header variants={itemVariants} className="flex flex-col">
              <div className="flex gap-3 sm:gap-5 max-w-fit items-center">
                <a
                  href="/"
                  className=" w-10 h-10 flex items-center justify-center text-(--s-h-green) hover:text-(--s-green) hover:scale-110 transition-all duration-150 shrink-0 "
                  aria-label="Go back to homepage"
                >
                  <ArrowBigLeftDashIcon className="w-8 h-8 sm:w-12 sm:h-12 relative top-1.5" />
                </a>
                <h1 className="text-4xl sm:text-5xl font-semibold text-(--s-h-green) lowercase">
                  my experience
                </h1>
              </div>
              <p className="mt-4 max-w-2xl text-(--s-green)/80 lowercase leading-relaxed">
                software developer and full-stack web developer with a
                background spanning software engineering, infrastructure,
                technical support, and customer-facing roles.
              </p>
            </motion.header>
            {/* Education */}
            <motion.section variants={itemVariants} className="flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCapIcon className="w-6 h-6 text-(--s-h-green)" />
                <h2 className="text-2xl text-(--s-h-green) lowercase font-semibold">
                  education
                </h2>
              </div>
              <motion.div
                variants={sectionVariants}
                className="flex flex-col gap-8"
              >
                {/* Degree */}
                <motion.article
                  variants={itemVariants}
                  className=" border-l-2 border-(--s-green)/30 pl-5 relative "
                >
                  <span className=" absolute -left-1.75 top-1.5 w-3 h-3 rounded-full bg-(--s-h-green) " />
                  <p className="text-sm text-(--s-green)/60 lowercase">
                    2023 - 2026
                  </p>
                  <h3 className="mt-1 text-lg text-(--s-h-green) font-semibold">
                    bsc computer science
                  </h3>
                  <p className="mt-1 text-sm text-(--t-h-green)/60">
                    York St John University
                  </p>
                  <p className="mt-3 text-sm text-(--t-h-green)/50 leading-relaxed lowercase">
                    first-class honours
                  </p>
                </motion.article>
                {/* A-Levels */}
                <motion.article
                  variants={itemVariants}
                  className=" border-l-2 border-(--s-green)/30 pl-5 relative "
                >
                  <span className=" absolute -left-1.75 top-1.5 w-3 h-3 rounded-full bg-(--s-h-green) " />
                  <p className="text-sm text-(--s-green)/60 lowercase">
                    a-levels
                  </p>
                  <h3 className="mt-1 text-lg text-(--s-h-green) font-semibold">
                    a-level qualifications
                  </h3>
                  <div className="mt-3 space-y-2 text-sm text-(--t-h-green)/60">
                    <p>
                      <span className="text-(--s-h-green)">maths</span>
                      <span className="mx-2 text-(--s-green)/40">-</span>A
                    </p>
                    <p>
                      <span className="text-(--s-h-green)">
                        computer science
                      </span>
                      <span className="mx-2 text-(--s-green)/40">-</span>A
                    </p>
                    <p>
                      <span className="text-(--s-h-green)">photography</span>
                      <span className="mx-2 text-(--s-green)/40">-</span>B
                    </p>
                  </div>
                </motion.article>
                {/* Dissertation */}
                <motion.article
                  variants={itemVariants}
                  className=" border-l-2 border-(--s-green)/30 pl-5 relative "
                >
                  <span className=" absolute -left-1.75 top-1.5 w-3 h-3 rounded-full bg-(--s-green) " />
                  <p className="text-sm text-(--s-green)/60 lowercase">
                    dissertation
                  </p>
                  <h3 className="mt-1 text-lg text-(--s-h-green) font-semibold">
                    gamifying environmental awareness
                  </h3>
                  <p className="mt-3 text-sm text-(--t-h-green)/50 leading-relaxed lowercase">
                    evaluated the effectiveness of gamification in spreading
                    awareness and increasing willingness to learn about the
                    negative environmental effects of generative AI.
                  </p>
                  <p className="mt-3 text-sm text-(--t-h-green)/50 leading-relaxed lowercase">
                    built a React and TypeScript web application with a Node.js
                    REST API, PostgreSQL database, and Ubuntu server
                    environment.
                  </p>
                </motion.article>
              </motion.div>
            </motion.section>
          </div>
          {/* Experience */}
          <motion.section
            variants={itemVariants}
            className="lg:col-span-2 flex flex-col min-h-0"
          >
            <div className="flex items-center gap-3 mb-8">
              <BriefcaseBusinessIcon className="w-6 h-6 text-(--s-h-green)" />
              <h2 className="text-2xl text-(--s-h-green) lowercase font-semibold">
                experience
              </h2>
            </div>
            <motion.div
              variants={sectionVariants}
              className=" flex flex-col gap-4 max-h-160 overflow-y-auto p-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-(--s-green)/30 hover:scrollbar-thumb-(--s-h-green)/50 "
            >
              {experience.map((item) => (
                <motion.button
                  key={`${item.company}-${item.role}`}
                  variants={itemVariants}
                  type="button"
                  onClick={() => setSelectedRole(item)}
                  whileHover={{ y: -2, scale: 1.005 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.15 }}
                  className=" group w-full shrink-0 text-left rounded-xl border border-(--s-green)/20 bg-(--p-green)/40 p-4 transition-colors duration-200 hover:border-(--s-h-green)/60 hover:bg-(--s-green)/10 hover:shadow-lg hover:shadow-(--s-green)/10 cursor-pointer "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-(--s-green)/60 lowercase">
                        {item.period}
                      </p>
                      <h3 className="mt-1 text-lg text-(--s-h-green) font-semibold">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-(--t-h-green)/60">
                        {item.company}
                      </p>
                    </div>
                    <ArrowUpRightIcon className=" w-5 h-5 shrink-0 text-(--s-green)/40 transition-all duration-200 group-hover:text-(--s-h-green) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 " />
                  </div>
                  <p className="mt-4 text-xs text-(--t-h-green)/40 lowercase">
                    click to view role details
                  </p>
                </motion.button>
              ))}
            </motion.div>
          </motion.section>
          {/* Skills */}
          <motion.section variants={itemVariants} className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Technical */}
              <div>
                <h2 className="text-2xl text-(--s-h-green) lowercase mb-6 font-semibold">
                  technical skills
                </h2>
                <motion.div
                  variants={sectionVariants}
                  className="flex flex-wrap gap-3"
                >
                  {technicalSkills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ y: -3, scale: 1.04 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className=" rounded-xl border border-(--s-green)/20 bg-(--p-green)/50 px-4 py-2.5 text-sm text-(--t-h-green)/70 lowercase cursor-default transition-colors duration-200 hover:border-(--s-h-green)/70 hover:bg-(--s-green)/10 hover:text-(--s-h-green) hover:shadow-md hover:shadow-(--s-green)/20 "
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              {/* Transferable */}
              <div>
                <h2 className="text-2xl text-(--s-h-green) lowercase mb-6 font-semibold">
                  transferable skills
                </h2>
                <motion.div
                  variants={sectionVariants}
                  className="flex flex-wrap gap-3"
                >
                  {transferableSkills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ y: -3, scale: 1.04 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className=" rounded-xl border border-(--s-green)/20 bg-(--p-green)/50 px-4 py-2.5 text-sm text-(--t-h-green)/70 lowercase cursor-default transition-colors duration-200 hover:border-(--s-h-green)/70 hover:bg-(--s-green)/10 hover:text-(--s-h-green) hover:shadow-md hover:shadow-(--s-green)/20 "
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            {/* Languages */}
            <div className="mt-12">
              <h2 className="text-2xl text-(--s-h-green) lowercase mb-6 font-semibold">
                languages
              </h2>
              <div className="flex flex-wrap gap-3">
                <div className=" rounded-xl border border-(--s-green)/20 bg-(--p-green)/50 px-4 py-2.5 text-sm text-(--t-h-green)/70 lowercase ">
                  polish - native
                </div>
                <div className=" rounded-xl border border-(--s-green)/20 bg-(--p-green)/50 px-4 py-2.5 text-sm text-(--t-h-green)/70 lowercase ">
                  english - fluent
                </div>
              </div>
            </div>
          </motion.section>
        </div>
        {/* Footer */}
        <motion.footer
          variants={itemVariants}
          className=" mt-16 pt-8 border-t border-(--s-green)/20 text-sm text-(--t-h-green)/60 lowercase "
        >
          interested in working together?
          <a
            href="/contact"
            className=" text-(--s-h-green) hover:text-(--t-h-green) transition "
          >
            get in touch →
          </a>
        </motion.footer>
      </motion.div>
      {/* Experience Modal */}
      <AnimatePresence>
        {selectedRole && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedRole(null)}
            className=" fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 py-8 "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className=" relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-(--s-green)/30 bg-(--p-green) p-6 sm:p-8 shadow-2xl shadow-black/30 "
            >
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className=" absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-lg text-(--s-green) hover:text-(--s-h-green) hover:bg-(--s-green)/10 transition-all cursor-pointer "
                aria-label="Close role details"
              >
                <XIcon className="w-5 h-5" />
              </button>
              <div className="pr-10">
                <p className="text-sm text-(--s-green)/60 lowercase">
                  {selectedRole.period}
                </p>
                <h2 className="mt-1 text-2xl sm:text-3xl text-(--s-h-green) font-semibold">
                  {selectedRole.role}
                </h2>
                <p className="mt-1 text-lg text-(--t-h-green)/60">
                  {selectedRole.company}
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-sm text-(--s-h-green) font-semibold uppercase tracking-wider">
                  role details
                </h3>
                <ul className="mt-4 space-y-4">
                  {selectedRole.details.map((detail) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                      className=" relative pl-5 text-sm text-(--t-h-green)/60 leading-relaxed "
                    >
                      <span className=" absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-(--s-h-green) " />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className=" mt-8 w-full rounded-xl border border-(--s-green)/30 px-4 py-3 text-sm font-semibold text-(--s-h-green) transition-all duration-200 hover:border-(--s-h-green)/60 hover:bg-(--s-green)/10 cursor-pointer "
              >
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageContainer>
  );
}
