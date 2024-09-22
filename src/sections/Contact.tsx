import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-black via-[#1C1066] to-sky-400 text-gray-400 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16  items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">Hiring?</h2>
              <p className="text-sm md:text-base mt-2">
                &quotI am Ritesh Kumar Divedi, a passionate Full-Stack Web
                Developer with hands-on experience in building innovative web
                applications. I enjoy creating solutions that address real-world
                challenges and am eager to bring my skills and expertise to
                contribute to your team&apos;s success.&quot Let me know if
                you&apos;d like any further tweaks!
              </p>
            </div>
            <div>
              <Link
                href="https://drive.google.com/file/d/16pCzHSHu0sdnwJ1h0Oox9_V5KGmAfDk5/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                  <span className="font-semibold">Check out my CV</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
