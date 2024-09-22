import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/Riteshkrdivedi",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ritesh-kr-divedi-8b8b81214/",
    icon: FaLinkedin,
  },
  {
    title: "Twitter",
    href: "https://x.com/Ritesh131357?s=09",
    icon: FaTwitter,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/ritesh_kr_divedi?igsh=b3NtY2lkMDloM2xs",
    icon: FaInstagram,
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1C1066] to-sky-400 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-20"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; 2024. Made with ❤️ by Ritesh Kumar Divedi
          </div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5 hover:cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                {link.icon && <link.icon className="size-4" />}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
