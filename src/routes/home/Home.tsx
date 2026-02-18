export default function Home() {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-black via-[#020f05] to-[#001a0a] text-green-200">
      {/* container */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* site title */}
        <header className="mb-20">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-green-400 lowercase">
            aboutkonrad<span className="text-green-600">.com</span>
          </h1>

          <p className="mt-4 max-w-xl text-green-300/80 leading-relaxed">
            a software developer with a creative flair. i aspire to build
            efficient, scalable, and meaningful software that solves real
            problems. welcome to my personal corner of the web!
          </p>
        </header>

        {/* about section */}
        <section className="mb-20">
          <h2 className="text-xl text-green-400 lowercase mb-4">about me</h2>

          <p className="max-w-2xl text-green-300/80 leading-relaxed">
            i'm Konrad - a uk-based developer focused on building efficient,
            scalable, and meaningful software. full-stack development is my
            passion, and i enjoy working across the entire stack to create
            cohesive and well-designed systems.
          </p>

          <p className="max-w-2xl text-green-300/80 leading-relaxed mt-4">
            i enjoy designing systems end-to-end - from infrastructure and data
            pipelines to user interfaces and deployment. i care about clarity,
            performance, and making sure that the customer is always satisfied.
          </p>
        </section>

        {/* navigation grid */}
        <section className="mb-20">
          <h2 className="text-xl text-green-400 lowercase mb-6">explore</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <NavCard
              title="cv"
              description="experience, skills, and professional background"
              href="/cv"
            />

            <NavCard
              title="projects"
              description="things i've built, experiments, and technical work"
              href="/projects"
            />

            {/* <NavCard
              title="research"
              description="academic work, writing, and longer technical explorations"
              href="/research"
            /> */}

            <NavCard
              title="contact"
              description="get in touch, collaboration, or opportunities"
              href="/contact"
            />

            <NavCard
              title="github"
              description="code repositories and active development"
              href="https://github.com/rustypotato19"
              external
            />
          </div>
        </section>

        {/* footer */}
        <footer className="pt-10 border-t border-green-500/20 text-sm text-green-400/60 lowercase">
          © {new Date().getFullYear()} aboutkonrad.com
        </footer>
      </div>
    </div>
  );
}

/* reusable nav card */
function NavCard({
  title,
  description,
  href,
  external = false,
}: {
  title: string;
  description: string;
  href: string;
  external?: boolean;
}) {
  const Tag: React.ElementType = "a";

  return (
    <Tag
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        block rounded-xl border border-green-500/20 bg-black/50 backdrop-blur
        p-5 transition-all duration-200
        hover:border-green-400 hover:bg-green-500/5
        hover:shadow-lg hover:shadow-green-500/10
      "
    >
      <div className="text-lg text-green-400 lowercase font-medium">
        {title}
      </div>

      <div className="text-sm text-green-300/70 mt-1 lowercase">
        {description}
      </div>
    </Tag>
  );
}
