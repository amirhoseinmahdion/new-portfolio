import { car, food, realstate } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/amirhoseinmahdion/real-state-main"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={realstate}
                alt="realstate"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Real State</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A project that anyone can register and sell their properties and
              anyone can buy from. This website can help all people to buy a
              building or villa.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>MongoDB</li>
              <li>Next-auth</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/amirhoseinmahdion/real-state-main"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              {/* <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
              >
                <AiOutlineYoutube />
              </a> */}
              {/* <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/amirhoseinmahdion/foodnextjs"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={food}
                alt="food"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Food Project</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A project similar to Snap Food for ordering food along with
              various filters such as degree of difficulty, price and cooking
              time
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Css Module</li>
              <li>React Hook Form</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/amirhoseinmahdion/foodnextjs"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              {/* <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
              >
                <AiOutlineYoutube />
              </a> */}
              {/* <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/amirhoseinmahdion/carproject"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={car}
                alt="car"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Car Project</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              A website where you can advertise and sell your car and even sell
              your car.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>SSG and SSR</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/amirhoseinmahdion/carproject"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              {/* <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
              >
                <AiOutlineYoutube />
              </a> */}
              {/* <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
