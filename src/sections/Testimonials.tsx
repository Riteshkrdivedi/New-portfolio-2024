import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import { FaGithub } from "react-icons/fa";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import Link from "next/link";
const testimonials = [
  {
    name: "Projekto",
    techstack: "Next.js, Node.js,ThreeJs, Express, MongoDB, Firebase",
    text: "Developed a project collaboration platform for engineers and developers, enabling real-time collaboration and project tracking. Focused on user authentication and an intuitive interface.",
    link: "https://projekto.vercel.app/",
    gitrepo: "https://github.com/Riteshkrdivedi/projekto",
  },
  {
    name: "ChemFuse",
    techstack: "HTML, CSS, JavaScript",
    text: "Created a responsive UI of the periodic table, providing detailed information on each chemical element to enhance learning experiences during the IBM SkillsBuild internship.",
    link: "https://ketanxos.github.io/chemfuse/",
    gitrepo: "https://github.com/Riteshkrdivedi/chemfuse",
  },
  {
    name: "Death Note UI Note-Taking App",
    techstack: "HTML, CSS, JavaScript",
    text: "Built a unique note-taking application inspired by Death Note, combining aesthetic design with functionality for an engaging user experience.",
    link: "https://riteshkrdivedi.github.io/notes-app/",
    gitrepo: "https://github.com/Riteshkrdivedi/notes-app",
  },
  {
    name: "Resume Builder",
    techstack: "RectJs,firebase,tailwindcss",
    text: "Developed a web application to create and download professional resumes, allowing users to customize templates and content.",
    link: "https://yourresume-builder-link.com/",
    gitrepo: "https://github.com/Riteshkrdivedi/resume-builder",
  },
  {
    name: "Text-to-Speech Web Application",
    techstack: "RectJs,deepgram api,nodejs,expressjs,tailwindcss",
    text: "Created a Text-to-Speech app with Deepgram’s API, featuring real-time audio conversion, dynamic word display, and efficient memory management for an enhanced user experience.",
    link: "https://text-to-speech-client.vercel.app/",
    gitrepo: "https://github.com/Riteshkrdivedi/Text-to-Speech",
  },
  {
    name: "First PortFolio",
    techstack: "Html,Css,JavaScript",
    text: "Developed a portfolio website to showcase projects and skills, focusing on responsive design and user experience.",
    link: "https://portfolio-tan-chi-67.vercel.app",
    gitrepo: "https://github.com/Riteshkrdivedi/Portfolio",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="Explore How I Brought Ideas to Life Through Engaging Digital Experiences"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {testimonials.map((testimonial) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="">
                          <div className="flex justify-between items-center">
                            <div className="font-semibold text-2xl">
                              {testimonial.name}
                            </div>
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.techstack}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                      <div className=" flex gap-4">
                        <Link
                          href={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-white hover:border-white border border-gray-600 hover:bg-[#292929] hover:text-white text-gray-950 h-12 w-full md:w-auto px-4 rounded-xl font-semibold inline-flex items-center justify-center gap-1 mt-8">
                            <span>Visit</span>
                            <ArrowUpRight className="size-5" />
                          </button>
                        </Link>
                        <Link
                          href={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-[#292929] border border-gray-400 hover:font-semibold hover:border-black hover:text-gray-950 hover:bg-gray-200 text-white transition-all h-12 w-full md:w-auto px-3 rounded-xl  inline-flex items-center justify-center gap-1 mt-8">
                            <span>Github Repo</span>
                            <FaGithub className="size-5" />
                          </button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
