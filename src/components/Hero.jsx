import hero from "../images/desktop/image-hero.jpg";
function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Immersive VR Experience"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Main Content Box */}
      <div className="relative z-10 px-8 md:px-16 lg:px-28 w-full">
        <div className="border-2 border-white p-6 md:p-10 lg:p-12 max-w-xl lg:max-w-2xl">
          <h1 className="text-white font-light leading-none tracking-wide uppercase">
            <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Immersive
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Experiences
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              That Deliver
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
