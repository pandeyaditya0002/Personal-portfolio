import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          As a passionate software engineer, I have strong in design 
          and integration with intuitive problem-solving skills. 
          Proficient in JAVASCRIPT, REACT-JS, HTML5/CSS, PYTHON, WordPress and SQL. 
          Passionate about implementing and launching new projects.  
          Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
          <br/>
          <br />
          Delving into the world of DevOps engineering!
           🛠️ Currently focusing on mastering CI/CD pipelines and AWS deployment,
            eager to expand my skills and contribute to innovative projects. 
            Let's connect and explore the possibilities together!
             #DevOps #CI/CD #AWS #LearningJourney
          
        </p>
      </div>
    </section>
  );
};

export default About;
