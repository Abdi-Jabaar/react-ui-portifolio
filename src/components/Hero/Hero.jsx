import HeroImg from "../../assets/me1.png"

const Hero = () => {
  return (
    <section className="p-10 ">
      <div className="flex flex-col md:flex-row items-center gap-8 px-16">

        {/* hero info */}
        <div>
          <h1 class="text-4xl md:text-5xl font-bold third-color">Hi, I'm Abdijabaar —</h1>
          <p class="text-lg leading-relaxed">
            A passionate <strong className="text-xl">Full Stack Web & Mobile Apps Developer</strong>.
            I specialize in building fast, responsive, and user-friendly digital solutions that help businesses and individuals thrive in the digital world. Whether it’s a sleek website or a powerful mobile app, I turn ideas into reality with clean code and beautiful design.
          </p>
          <p class="text-xl font-semibold third-color">Let’s build something
            amazing together.</p>

          <div className="flex gap-8 py-5">
            <button
              onClick={() => {
                const myProjectsSection = document.getElementById("my_projects");
                if (myProjectsSection) {
                  myProjectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-[#00FFE0] rounded-lg p-2 text-black font-semibold drop-shadow-[0px_4px_7px_#00ffe0]">My Projects</button>
            <button className="border-[2px] border-[#00ffe0] rounded-lg p-2  font-semibold ">Contact Me</button>
          </div>

        </div>

        {/* hero image */}
        <div className="">
          <img src={HeroImg} alt="Abdijabaar Developer Portrait" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
