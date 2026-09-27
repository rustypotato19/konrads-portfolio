import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowBigLeftDashIcon } from "lucide-react";
import PageContainer from "../../components/PageContainer";
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
export default function About() {
  useEffect(() => {
    document.title = "About Konrad";
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
      <motion.div
        className="w-full min-h-full px-6 py-16 sm:py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full max-w-5xl mx-auto">
          {/* Header */}
          <motion.header className="mb-16" variants={itemVariants}>
            <div className="flex gap-4 sm:gap-6 items-center">
              <a
                href="/"
                className=" w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-(--s-h-green) hover:text-(--s-green) hover:scale-110 transition-all duration-150 shrink-0 "
                aria-label="Go back to homepage"
              >
                <ArrowBigLeftDashIcon className="w-full h-full relative top-1.5" />
              </a>
              <h1 className="text-4xl sm:text-5xl font-semibold text-(--s-h-green) lowercase">
                about me
              </h1>
            </div>
            <p className="mt-6 max-w-2xl text-(--t-h-green)/60 lowercase leading-relaxed">
              a little bit about who i am, what i do, and what makes me tick.
            </p>
          </motion.header>
          {/* 2 × 2 Grid */}
          <motion.div
            className=" grid grid-cols-1 md:grid-cols-2 border border-(--s-green)/20 rounded-2xl overflow-hidden "
            variants={containerVariants}
          >
            {/* Who I Am */}
            <motion.section
              className="p-8 border-b md:border-r border-(--s-green)/20"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold text-(--s-h-green) lowercase mb-6">
                who am i?
              </h2>
              <div className="space-y-4 text-(--t-h-green)/60 lowercase leading-relaxed">
                <p>
                  i'm Konrad, a uk-based software developer with a passion for
                  technology and building things that are useful, efficient, and
                  well thought out.
                </p>
                <p>
                  i'm particularly interested in full-stack development and
                  enjoy understanding how everything fits together; from the
                  interface a user sees to the systems running underneath it.
                </p>
                <p>
                  i'm naturally curious and tend to learn by building. if
                  something interests me, there's a good chance i'll end up
                  researching it, experimenting with it, and eventually making
                  something with it.
                </p>
              </div>
            </motion.section>
            {/* What I Do */}
            <motion.section
              className="p-8 border-b border-(--s-green)/20"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold text-(--s-h-green) lowercase mb-6">
                what i do
              </h2>
              <div className="space-y-4 text-(--t-h-green)/60 lowercase leading-relaxed">
                <p>
                  i enjoy working across the stack, from frontend interfaces and
                  APIs to databases, infrastructure, and deployment.
                </p>
                <p>
                  i care about writing software that is clear and maintainable
                  without unnecessarily overcomplicating things. performance and
                  scalability matter, but so does making something pleasant to
                  actually use.
                </p>
                <p>
                  i'm also interested in the engineering around software -
                  understanding the systems, tools, and processes that allow
                  applications to work reliably in the real world.
                </p>
              </div>
            </motion.section>
            {/* Background */}
            <motion.section
              className="p-8 md:border-r border-(--s-green)/20"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-semibold text-(--s-h-green) lowercase mb-6">
                my background
              </h2>
              <div className="space-y-4 text-(--t-h-green)/60 lowercase leading-relaxed">
                <p>
                  i graduated in june 2026 with a first-class honours degree in
                  computer science, building a strong foundation across software
                  engineering and computing.
                </p>
                <p>
                  alongside university, i've worked in a range of environments -
                  from hospitality and retail to technical customer-facing
                  roles.
                </p>
                <p>
                  most notably, my time as a Field Applications Engineer intern
                  at ETAS involved solving real customer problems, producing
                  technical documentation, and helping others get the most out
                  of their tools.
                </p>
              </div>
            </motion.section>
            {/* Beyond Code */}
            <motion.section className="p-8" variants={itemVariants}>
              <h2 className="text-2xl font-semibold text-(--s-h-green) lowercase mb-6">
                beyond code
              </h2>
              <div className="space-y-4 text-(--t-h-green)/60 lowercase leading-relaxed">
                <p>
                  when i'm not writing code, you'll usually find me at the gym,
                  taking photographs, or looking for something good to eat.
                </p>
                <p>
                  photography is probably the biggest contrast to programming
                  for me. it gives me a different way to think about
                  composition, perspective, and detail.
                </p>
                <p>
                  i also enjoy exploring new places, learning new things, and
                  generally finding excuses to turn a random idea into a
                  project.
                </p>
              </div>
            </motion.section>
          </motion.div>
          {/* Closing */}
          <motion.section className="mt-12" variants={itemVariants}>
            <p className="text-(--t-h-green)/40 text-sm lowercase text-center">
              want the professional details? check out my{" "}
              <a href="/cv" className="font-bold">
                cv
              </a>
              . curious about what i've built? have a look at{" "}
              <a href="/projects" className="font-bold">
                my projects
              </a>
              .
            </p>
          </motion.section>
        </div>
      </motion.div>
    </PageContainer>
  );
}
