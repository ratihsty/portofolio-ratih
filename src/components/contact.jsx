function GetInTouch() {
    return (
      <section
        id="Contact"
        className="py-20 text-center"
        data-aos="fade-up"
      >
        <div className="max-w-2xl mx-auto px-6">
          {/* Judul */}
          <h3
            className="text-3xl font-bold text-white mt-2 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get In Touch
          </h3>
  
          {/* Deskripsi */}
          <p
            className="text-gray-400 mb-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            I’m open to freelance projects, collaborations, or just a chat about
            web development. Feel free to drop me a message!
          </p>
  
          {/* Tombol */}
          <a
            href="mailto:ratihsetioningsih77@gmail.com"
            className="inline-block mt-4 px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Say Hello
          </a>
        </div>
      </section>
    );
  }
  
  export default GetInTouch;
  