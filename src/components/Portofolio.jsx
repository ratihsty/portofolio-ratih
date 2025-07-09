import { useState } from "react";

import gambar1 from "../assets/gambar1.png";
import gambar4 from "../assets/gambar4.1.png";
import gambar2 from "../assets/gambar2.png";
import gambar3 from "../assets/gambar3.png";


function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      id: 1,
      title: "Monsters Brew – Fun Coffee Landing Page",
      description:
        "A visually playful landing page for a fictional coffee shop featuring custom illustrations and a “Build Your Drink” experience built using vanilla JavaScript, HTML, and CSS.",
      image: gambar1,
      link: "https://ratihsty.github.io/monsters-brew/",
    },
    {
      id: 2,
      title: "Shopping List App",
      description:
        "A simple and interactive shopping list application built with React and CSS",
      image: gambar2,
      link: "https://ratihsty.github.io/Catatan-Belanja/",
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description:
        "A classic two-player Tic Tac Toe game built with React and CSS, featuring interactive gameplay and win detection.",
      image: gambar3,
      link: "https://ratihsty.github.io/tic-tac-toe-game/",
    },
    {
      id: 4,
      title: "Portofolio Website",
      description:
        "A modern and responsive personal portfolio built with React and Tailwind CSS.",
      image: gambar4,
      link: "https://ratihsty.github.io/portofolio-ratih/",
    },
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git"];
  const education = [
    {
      degree: "Informatics Engineering",
      school: "University of Science and Computer Technology",
      date: "2023 - Present",
    },
    {
      degree: "Software Engineering",
      school: "SMK Negeri 1 Kandeman",
      date: "2020 - 2023",
    },
  ];

  return (
    <section id="Portofolio" className="py-20 text-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 md:pl-20">
        {/* Judul */}
        <h3
          className="text-3xl font-bold text-white mt-2 mb-8 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Portofolio
        </h3>

        {/* Tab Menu */}
        <div
          className="flex justify-center gap-4 mb-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 rounded ${
              activeTab === "projects"
                ? "bg-cyan-400 text-black font-semibold"
                : "bg-[#112240] text-gray-400 hover:bg-cyan-400 hover:text-black transition"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-4 py-2 rounded ${
              activeTab === "skills"
                ? "bg-cyan-400 text-black font-semibold"
                : "bg-[#112240] text-gray-400 hover:bg-cyan-400 hover:text-black transition"
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2 rounded ${
              activeTab === "education"
                ? "bg-cyan-400 text-black font-semibold"
                : "bg-[#112240] text-gray-400 hover:bg-cyan-400 hover:text-black transition"
            }`}
          >
            Education
          </button>
        </div>

        {/* Content */}
        {activeTab === "projects" && (
          <>
            {/* Grid projects kecuali id 4 */}
            <div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {projects
                .filter((project) => project.id !== 4) // exclude id:4
                .map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-[#112240] rounded-lg shadow-lg overflow-hidden group"
                    data-aos="fade-up"
                    data-aos-delay={700 + index * 200}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 mt-2">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-cyan-400 hover:underline"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                ))}
            </div>

            {/* ID 4 di-center */}
            <div
              className="mt-10 flex justify-center"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              {projects
                .filter((project) => project.id === 4)
                .map((project) => (
                  <div
                    key={project.id}
                    className="bg-[#112240] rounded-lg shadow-lg overflow-hidden group max-w-sm"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 mt-2">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-cyan-400 hover:underline"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}

        {/* Skills */}
        {activeTab === "skills" && (
          <div
            className="flex flex-col items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#112240] text-cyan-400 px-6 py-3 rounded w-full max-w-sm text-center shadow hover:bg-cyan-400 hover:text-black transition"
                data-aos="fade-up"
                data-aos-delay={700 + index * 150}
              >
                {skill}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {activeTab === "education" && (
          <div
            className="relative flex flex-col items-center mt-8"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="border-l-2 border-cyan-400 relative">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="mb-8 pl-8 relative"
                  data-aos="fade-up"
                  data-aos-delay={700 + index * 200}
                >
                  <span className="absolute left-[-9px] top-2 w-4 h-4 bg-cyan-400 rounded-full"></span>
                  <h4 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-400">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
