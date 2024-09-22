import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
const portfolioProjects = [
  {
    company: "IBM SkillsBuild",
    year: "June 2024 - August 2024",
    title: "Web Developer Intern",
    results: [
      {
        title:
          "Developed 'ChemFuse', a responsive UI for the periodic table to enhance learning of chemical elements.",
      },
      {
        title:
          "Collaborated with a team to design interactive and user-friendly components using HTML, CSS, and JavaScript.",
      },
    ],
    link: "https://drive.google.com/file/d/19d8XuILL6ZvkLYE9YdxzOmU1qaYv9PGM/view?usp=drive_link",
  },
  {
    company: "ACM Student Chapter (GGSIPU)",
    year: "2022",
    title: "Web Developer",
    results: [
      {
        title: "Contributed to the development of the chapter's website.",
      },
      {
        title:
          "Worked on a chatbot project to enhance user interaction and automate responses.",
      },
      {
        title:
          "Built interactive components with HTML, CSS, and JavaScript, ensuring mobile responsiveness.",
      },
    ],
    link: "https://usict.acm.org/team.php",
  },
  {
    company: "Younity.in",
    year: "2021",
    title: "Marketing Team Intern",
    results: [
      {
        title:
          "Collaborated on digital marketing campaigns to boost user engagement.",
      },
      {
        title:
          "Analyzed social media metrics to optimize campaign effectiveness.",
      },
    ],
    link: "...",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Evolution in Tech"
          title="Career Highlights"
          description="A Glimpse Into How I Turned Challenges Into Game-Changing Solutions"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              {/* <div className="lg:grid lg:grid-cols-2 lg:gap-16"> */}
              <div className="lg:gap-16">
                <div className="pb-16">
                  <div className="bg-gradient-to-r from-[#1C1066] to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                      <span>Experience Letter</span>
                      <ArrowUpRight className="size-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
