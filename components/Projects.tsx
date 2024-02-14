import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://pandeyaditya0002.github.io/Weather-app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Weather-app</p>
                <p className="text-gray-500 text-[10px]">
                A real-time weather app using HTML/CSS/JS. 
                Utilized APIs for live data and implemented responsive design.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://pandeyaditya0002.github.io/Parking-Lot/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Car-Parking</p>
                <p className="text-gray-500 text-[10px]">
                Created a vehicle parking system with HTML, CSS, and JavaScript 
                for streamlined parking management, enhancing user
experience.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://pandeyaditya0002.github.io/Employee-Management-System/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  EMS-Web-page
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed For track the employees <br /> 
                  record or details,
                  by  using HTML, CSS, Javascript.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://basic-crud-opration.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FourProject.png"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Basic-CRUD</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern UI for a basic CRUD opration Based on Reactjs.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
