function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-start pt-5 pl-16 md:pl-32">
        <p
          className="text-cyan-400 text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Hi, my name is
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold text-white"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Ratih Setioningsih.
        </h1>
        <h2
          className="text-4xl md:text-6xl font-bold text-gray-400 mt-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          I build things for the web.
        </h2>
        <p
          className="mt-6 max-w-xl text-gray-400"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          I’m a front-end developer and creative thinker who loves turning ideas
          into clean, functional, and visually pleasing websites. Currently, I’m
          focused on learning React and building my personal portfolio to
          showcase my journey.
        </p>
        <a
          href="#Contact"
          className="mt-8 px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Contact Me
        </a>
      </section>
    );
  }
  
  export default Hero;
  