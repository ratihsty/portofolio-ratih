import fotoAra from "../assets/foto-ara.jpeg";

function About() {
  return (
    <section id="About"
      className="py-5 md:flex md:items-start gap-10 pl-16 md:pl-32"
      data-aos="fade-up"
    >
      <div className="md:w-2/3 max-w-2xl">
        <div
          className="flex items-center gap-4 mb-6"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold text-white whitespace-nowrap">
            About Me
          </h3>
          <div className="h-px w-72 bg-gray-400"></div>
        </div>

        <p
          className="text-gray-400 mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Hello! My name is Ratih and I’m passionate about crafting beautiful,
          user-friendly websites. My journey into web development began when I
          started customizing blog themes back in high school — since then, I’ve
          been hooked on the creative possibilities of front-end design.
        </p>
        <p
          className="text-gray-400 mt-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          I’ve been learning various tools and technologies along the way,
          including HTML, CSS, JavaScript, React, and Tailwind CSS. While I’m
          still exploring what I enjoy most, I’m committed to improving my
          skills and becoming a better developer every day.
        </p>
        <p
          className="text-gray-400 mt-4"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Currently, I’m looking for internship opportunities to gain
          real-world experience and contribute to meaningful projects. I'm
          excited to learn, collaborate, and grow in the world of front-end
          development.
        </p>

        <a
          href="https://drive.google.com/file/d/1zFMciKNiZH1Iqo2-4OtFwXwzW8vBd4BB/view?usp=sharing"
          className="mt-8 inline-block px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Detail Me
        </a>
      </div>

      <div
        className="mt-10 md:mt-16 md:w-1/3 relative"
        data-aos="zoom-in"
        data-aos-delay="1200"
      >
        <div className="relative w-64 mx-auto group">
          <img
            src={fotoAra}
            alt="Foto Ara"
            className="rounded-lg shadow-lg relative z-10 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 cursor-pointer"
          />

          <div className="absolute top-4 left-4 w-full h-full border-2 border-cyan-400 rounded-lg z-0 group-hover:top-2 group-hover:left-2 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
}

export default About;
