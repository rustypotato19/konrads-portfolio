import { useEffect } from "react";
import experienceData from "./CV.json";

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  featured: boolean;
  description: string;
};

export default function CV() {

  useEffect(() => {
    document.title = "Konrad's CV";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-black via-[#031406] to-[#003314] text-green-200">
      <a
        href="/"
        className="fixed top-4 left-4 bg-linear-to-br from-green-700 to-green-900 text-green-200 px-4 py-2 rounded-lg hover:from-green-900 hover:to-green-700 transition-all duration-200 hover:scale-[102%] font-bold hover:cursor-pointer" aria-label="Go back to homepage"
      >
        Home
      </a>
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold text-green-400 lowercase">
            curriculum vitae
          </h1>

          <div className="mt-4 text-green-300/80 lowercase">
            <p className="text-xl text-green-300 font-medium">konrad mitura</p>
            <p>konradmitura8@gmail.com</p>
            <p>+44 7365 485090</p>
          </div>
        </header>

        {/* Personal Summary */}
        <Section title="personal summary">
          <p>
            hi i'm konrad, a uk-based computer science student and software
            engineer. i specialise in full-stack development, and dabble in c++
            development and python programming.
          </p>
          <p className="mt-4">
            i am currently studying bsc computer science at york st john
            university, including a year in industry. i enjoy designing systems
            end-to-end and building software that solves real problems.
          </p>
        </Section>

        {/* Experience */}
        <Section title="experience">
          {experienceData.map((job: ExperienceItem, index: number) => (
            <Experience
              key={index}
              title={job.title}
              company={job.company}
              featured={job.featured}
              date={job.date}
            >
              {job.description}
            </Experience>
          ))}
        </Section>

        {/* Education */}
        <Section title="education">
          <div className="mb-8">
            <p className="text-green-300 font-medium lowercase">
              bsc computer science — york st john university
            </p>
            <p className="text-green-400/70 lowercase">
              year 1: 81.83% | year 2: 80.17% | year 3: tbd
            </p>
            <p className="text-green-300 lowercase">
              average: 81% (first class)
            </p>
          </div>

          <div className="mb-6">
            <p className="text-green-300 font-medium lowercase">
              a-levels — trinity sixth form academy (2021/22)
            </p>
            <p className="text-green-300/80 lowercase">
              mathematics (a) | computer science (a) | photography (b)
            </p>
          </div>

          <div>
            <p className="text-green-300 font-medium lowercase">
              gcse — trinity academy halifax (2019/20)
            </p>
          </div>
        </Section>

        {/* Skills */}
        <Section title="technical skills">
          <SkillGroup title="primary stack">
            react, typescript, tailwindcss, express.js
          </SkillGroup>

          <SkillGroup title="languages">
            python, c++, javascript, typescript, php
          </SkillGroup>

          <SkillGroup title="databases">sql, phpmyadmin</SkillGroup>

          <SkillGroup title="additional">
            documentation, technical training, problem-solving, adaptability,
            customer communication
          </SkillGroup>
        </Section>

        <footer className="pt-10 border-t border-green-500/20 text-sm text-green-400/60 lowercase">
          © {new Date().getFullYear()} aboutkonrad.com
        </footer>
      </div>
    </div>
  );
}

/* reusable components */

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-xl text-green-400 lowercase mb-6">{title}</h2>
      <div className="space-y-4 text-green-300/80 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  featured: boolean;
  children: React.ReactNode;
}

function Experience({
  title,
  company,
  date,
  featured,
  children,
}: ExperienceProps) {
  return (
    <div
      className={`mb-10 border-l ${featured && "border-l-8"} border-green-500/30 pl-4`}
    >
      {featured && (
        <p className="text-green-300 font-bold bg-green-800 w-fit rounded-xl px-2">
          🌟 Featured Role
        </p>
      )}
      <p className="text-green-300 font-medium lowercase">{title}</p>
      <p className="text-green-400/70 lowercase">
        {company} | {date}
      </p>
      <p className="mt-3 lowercase">{children}</p>
    </div>
  );
}

interface SkillGroupProps {
  title: string;
  children: React.ReactNode;
}

function SkillGroup({ title, children }: SkillGroupProps) {
  return (
    <div className="mb-6">
      <p className="text-green-300 font-medium lowercase">{title}</p>
      <p className="text-green-300/80 lowercase mt-1">{children}</p>
    </div>
  );
}
